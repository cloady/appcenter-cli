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
 * Initializes a new instance of the AppleConnectionSecretResponse class.
 * @constructor
 * Apple connection secrets
 *
 * @member {object} data apple secret details
 * 
 * @member {string} [data.username] username to connect to apple store
 * 
 */
function AppleConnectionSecretResponse() {
  AppleConnectionSecretResponse['super_'].call(this);
}

util.inherits(AppleConnectionSecretResponse, models['SharedConnectionResponse']);

/**
 * Defines the metadata of AppleConnectionSecretResponse
 *
 * @returns {object} metadata of AppleConnectionSecretResponse
 *
 */
AppleConnectionSecretResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AppleConnectionSecretResponse',
    type: {
      name: 'Composite',
      className: 'AppleConnectionSecretResponse',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        serviceType: {
          required: true,
          serializedName: 'serviceType',
          type: {
            name: 'String'
          }
        },
        data: {
          required: true,
          serializedName: 'data',
          type: {
            name: 'Composite',
            className: 'AppleSecretDetailsResponse'
          }
        }
      }
    }
  };
};

module.exports = AppleConnectionSecretResponse;