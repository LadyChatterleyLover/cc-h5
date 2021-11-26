/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {}
  config.security = {
    csrf: false
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1637921153769_7442'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }
  config.mongoose = {
    url: 'mongodb://localhost:27017/cc-h5'
  }
  config.cors = {
    origin: "*",
    allowMethods: "GET, HEAD, PUT, POST, DELETE, PATCH",
    credentials: true
  }
  return {
    ...config,
    ...userConfig,
  }
}
