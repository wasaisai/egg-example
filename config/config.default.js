/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1641290399556_1072';

  // add your middleware config here
  config.middleware = [];
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'view',
   
  };

  return {
    ...config,
    ...userConfig,
  };
};
