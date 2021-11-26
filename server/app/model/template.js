'use strict';

module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const TemplateSchema = new Schema({
    // 模板标题
    title: {
      type: String,
      required: true
    },
    // 模板标题
    category: {
      type: String,
      required: true
    },
    // 模板封面图
    cover: {
      type: String,
      required: true
    },
    config: {
      type: Array,
      required: true
    },
    __v: {
      type: Number,
      select: false
    }
  })
  return mongoose.model('Template', TemplateSchema)
}