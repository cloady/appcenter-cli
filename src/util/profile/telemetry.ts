// Function to query and persist telemetry enabling settings

import * as fs from "fs";
import * as os from "os";
import * as path from "path";

import { getProfileDir, fileExistsSync } from "../misc";
import { out, prompt } from "../interaction";
import * as wrap from "wordwrap";

const telemetryOptionFile: string = "telemetryEnabled.json";
const telemetryDisableEnvironmentVar = "MOBILE_CENTER_TELEMETRY";

const telemetryPromptText = os.EOL +
"Mobile Center CLI would like to collect data about how users use CLI commands " +
 "and some problems they encounter. Participation is voluntary and when you choose to participate your " +
 "device automatically sends information to Microsoft about how you use Mobile Center CLI." +
 os.EOL;

function promptForTelemetryEnable() : Promise<boolean> {
  let width: number;
  if ((process.stdout as any).isTTY) {
    width = (process.stdout as any).columns - 2;
  } else {
    width = 72;
  }

  let promptText = wrap(width)(telemetryPromptText);
  out.text(promptText);
  return prompt.confirm("Enable telemetry? ", true);
}

export function telemetryIsEnabled(disableTelemetrySwitch: boolean): Promise<boolean> {
  if (disableTelemetrySwitch) {
    return Promise.resolve(false);
  }

  if (process.env[telemetryDisableEnvironmentVar]) {
    return Promise.resolve(process.env[telemetryDisableEnvironmentVar].toLowerCase() === "on");
  }

  if (hasTelemetryOptionSaved()) {
    return getSavedTelemetryOption();
  }
  return promptForTelemetryEnable()
    .then((enabled: boolean) => {
      saveTelemetryOption(enabled);
      return enabled;
    });
}

function telemetryFileName(): string {
  return path.join(getProfileDir(), telemetryOptionFile);
}

function hasTelemetryOptionSaved(): boolean {
  return fileExistsSync(telemetryFileName());
}

function getSavedTelemetryOption(): Promise<boolean> {
  let fileContents = fs.readFileSync(telemetryFileName(), "utf8");
  let enabled: any = JSON.parse(fileContents);
  return Promise.resolve(!!enabled);
}

function saveTelemetryOption(enabled: boolean) {
  fs.writeFileSync(telemetryFileName(), JSON.stringify(enabled), "utf8");
}
