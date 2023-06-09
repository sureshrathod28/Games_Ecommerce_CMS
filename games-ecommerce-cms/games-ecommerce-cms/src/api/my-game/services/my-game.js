'use strict';

/**
 * my-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::my-game.my-game');
