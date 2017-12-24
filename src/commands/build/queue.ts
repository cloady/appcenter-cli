import {AppCommand, Command, CommandArgs, CommandResult, ErrorCodes, failure, hasArg, help, longName, required, shortName, success} from "../../util/commandline";
import { AppCenterClient, models, clientRequest, ClientResponse } from "../../util/apis";
import { out } from "../../util/interaction";
import { inspect } from "util";
import * as PortalHelper from "../../util/portal/portal-helper";

const debug = require("debug")("appcenter-cli:commands:build:queue");

@help("Queue a new build")
export default class QueueBuildCommand extends AppCommand {

  @help("Branch to be build")
  @shortName("b")
  @longName("branch")
  @required
  @hasArg
  public branchName: string;

  @help("Enable debug mode")
  @shortName("d")
  @longName("debug-logs")
  public debugLogs: boolean;

  async run(client: AppCenterClient, portalBaseUrl: string): Promise<CommandResult> {
    const app = this.app;

    debug(`Queuing build for branch ${this.branchName}`);
    let queueBuildRequestResponse: ClientResponse<models.Build>;
    try {
      queueBuildRequestResponse = await out.progress(`Queueing build for branch ${this.branchName}...`,
        clientRequest<models.Build>((cb) => client.build.builds.create(app.appName, this.branchName, app.ownerName, {
          params: {
            debug: this.debugLogs
          }
        }, cb)));
    } catch (error) {
      if (error.statusCode === 400) {
        return failure(ErrorCodes.IllegalCommand, `app ${app.appName} is not configured for building`);
      } else {
        debug(`Request failed - ${inspect(error)}`);
        return failure(ErrorCodes.Exception, "failed to queue build request");
      }
    }

    const buildId = queueBuildRequestResponse.result.id;
    const realBranchName = queueBuildRequestResponse.result.sourceBranch;

    const url = PortalHelper.getPortalBuildLink(portalBaseUrl, app.ownerName, app.appName, realBranchName, buildId.toString());

    out.report([
      ["Build ID", "buildId"],
      ["Build URL", "url"]
    ], {buildId, url});

    return success();
  }
}
