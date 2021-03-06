/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the EventDeviceCount class.
 * @constructor
 * @member {number} [totalDevices]
 * 
 * @member {number} [totalDevicesWithEvent]
 * 
 * @member {number} [previousTotalDevicesWithEvent]
 * 
 * @member {array} [devicesCount]
 * 
 */
function EventDeviceCount() {
}

/**
 * Defines the metadata of EventDeviceCount
 *
 * @returns {object} metadata of EventDeviceCount
 *
 */
EventDeviceCount.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'EventDeviceCount',
    type: {
      name: 'Composite',
      className: 'EventDeviceCount',
      modelProperties: {
        totalDevices: {
          required: false,
          serializedName: 'total_devices',
          type: {
            name: 'Number'
          }
        },
        totalDevicesWithEvent: {
          required: false,
          serializedName: 'total_devices_with_event',
          type: {
            name: 'Number'
          }
        },
        previousTotalDevicesWithEvent: {
          required: false,
          serializedName: 'previous_total_devices_with_event',
          type: {
            name: 'Number'
          }
        },
        devicesCount: {
          required: false,
          serializedName: 'devices_count',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DateTimeCountsElementType',
                type: {
                  name: 'Composite',
                  className: 'DateTimeCounts'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = EventDeviceCount;
