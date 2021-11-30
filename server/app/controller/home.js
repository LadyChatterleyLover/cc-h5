'use strict';

const Controller = require('egg').Controller;
const path = require('path')
const fs = require('fs')
const axios = require('axios')


function genID(length) {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async uploadFile() {
    const { ctx } = this
    if (!ctx.request.files) {
      return ctx.body = '请先选择上传文件'
    }
    const file = ctx.request.files[0]
    const name = 'egg-oss-demo/' + genID(10) + path.extname(file.filename)
    let result
    try {
      result = await ctx.oss.put(name, file.filepath)
    } catch (err) {
      console.log(err)
    }
    let res = await axios.get(result.url)
    if (result) {
      ctx.body = {
        code: 200,
        msg: '上传成功',
        data: res.data
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '上传失败',
      }
    }
  }
}

module.exports = HomeController;
