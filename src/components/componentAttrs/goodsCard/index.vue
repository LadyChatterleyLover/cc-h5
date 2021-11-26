<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="背景颜色">
        <color-picker v-model:pureColor="current.attrs.background"></color-picker>
      </a-form-item>
      <a-form-item label="左侧图片">
        <a-input v-model:value="current.attrs.thumb" placeholder="请输入左侧图片" allowClear></a-input>
      </a-form-item>
      <a-form-item label="卡片标题">
        <a-textarea v-model:value="current.attrs.title" placeholder="请输入卡片标题" allowClear></a-textarea>
      </a-form-item>
      <a-form-item label="描述信息">
        <a-textarea v-model:value="current.attrs.desc" placeholder="请输入描述信息" allowClear></a-textarea>
      </a-form-item>
      <a-form-item label="图片角标">
        <a-input v-model:value="current.attrs.tag" placeholder="请输入图片角标" allowClear></a-input>
      </a-form-item>
      <a-form-item label="商品数量">
        <a-input-number
          style="width: 100%;"
          v-model:value="current.attrs.num"
          placeholder="请输入商品数量"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="划线原价">
        <a-input-number
          style="width: 100%;"
          v-model:value="current.attrs.originPrice"
          placeholder="请输入划线原价"
          allowClear
        ></a-input-number>
      </a-form-item>
      <a-form-item label="货币符号">
        <a-input v-model:value="current.attrs.currency" placeholder="请输入货币符号" allowClear></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }


watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>