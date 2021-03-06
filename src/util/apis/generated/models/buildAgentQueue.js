/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the BuildAgentQueue class.
 * @constructor
 * @member {string} queue
 * 
 */
function BuildAgentQueue() {
}

/**
 * Defines the metadata of BuildAgentQueue
 *
 * @returns {object} metadata of BuildAgentQueue
 *
 */
BuildAgentQueue.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BuildAgentQueue',
    type: {
      name: 'Composite',
      className: 'BuildAgentQueue',
      modelProperties: {
        queue: {
          required: true,
          serializedName: 'queue',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = BuildAgentQueue;
