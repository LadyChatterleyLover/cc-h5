<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="进度百分比">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.progress"
          :min="0"
          placeholder="请输入进度百分比"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="进度条宽度">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.strokeInnerWidth"
          :min="1"
          placeholder="请输入进度条宽度"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="进度条圆角">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.progressOption.radius"
          :min="0"
          placeholder="请输入进度百分比"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="外层圆环宽度">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.progressOption.strokeOutWidth"
          :min="0"
          placeholder="请输入进度百分比"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="背景颜色">
        <color-picker v-model:pureColor="current.attrs.progressOption.backColor"></color-picker>
      </a-form-item>
      <a-form-item label="进度条颜色">
        <color-picker v-model:pureColor="current.attrs.progressOption.progressColor"></color-picker>
      </a-form-item>
      <a-form-item label="是否自定义">
        <a-switch v-model:checked="current.attrs.isAuto"></a-switch>
      </a-form-item>
      <a-form-item label="自定义内容" v-if="current.attrs.isAuto">
        <a-input v-model:value="current.attrs.text" placeholder="请输入自定义内容"></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { computed, watch, ref } from 'vue'
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