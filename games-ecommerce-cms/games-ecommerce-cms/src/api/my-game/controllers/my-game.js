'use strict';

/**
 * my-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::my-game.my-game');
