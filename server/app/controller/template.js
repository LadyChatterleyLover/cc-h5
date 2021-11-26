'use strict';

const Controller = require('egg').Controller;

class TemplateController extends Controller {
  async save() {
    const { ctx } = this
    const res = await ctx.model.Template.findOne({ title: ctx.request.body.title })
    if (res) {
      this.ctx.body = {
        code: 500,
        msg: '模板已存在'
      }
    } else {
      const n = new ctx.model.Template(ctx.request.body)
      const data = await n.save()
      if (data) {
        this.ctx.body = {
          code: 200,
          msg: '保存成功'
        }
      } else {
        this.ctx.body = {
          code: 500,
          msg: '保存失败'
        }
      }
    }
  }
  async find() {
    const { ctx } = this
    const res = await ctx.model.Template.find()
    this.ctx.body = {
      code: 200,
      data: res,
      msg: '获取成功'
    }
  }
}

module.exports = TemplateController;
