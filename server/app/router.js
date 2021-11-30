'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index)
  router.post('/upload', controller.home.uploadFile)
  router.get('/getTemplate', controller.template.find)
  router.post('/saveTemplate', controller.template.save)
}
