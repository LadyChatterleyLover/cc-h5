<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="进度百分比">
        <a-input-number
          style="width: 100%"
          v-model:value="current.value"
          :min="0"
          placeholder="请输入进度百分比"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="目标进度">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.rate"
          :min="0"
          placeholder="请输入目标进度"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="圆环直径">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.size"
          :min="1"
          placeholder="请输入圆环直径"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="进度条宽度">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.strokeWidth"
          :min="0"
          placeholder="请输入进度条宽度"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="进度条颜色">
        <color-picker v-model:pureColor="current.attrs.color"></color-picker>
      </a-form-item>
      <a-form-item label="轨道颜色">
        <color-picker v-model:pureColor="current.attrs.layerColor"></color-picker>
      </a-form-item>
      <a-form-item label="填充颜色">
        <color-picker v-model:pureColor="current.attrs.fill"></color-picker>
      </a-form-item>
      <a-form-item label="动画速度">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.speed"
          :min="0"
          placeholder="请输入动画速度"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="进度条文字">
        <a-input v-model:value="current.attrs.text" placeholder="请输入自定义内容"></a-input>
      </a-form-item>
      <a-form-item label="顺时针加载">
        <a-switch v-model:checked="current.attrs.clockwise"></a-switch>
      </a-form-item>
      <a-form-item label="端点形状">
        <a-select v-model:value="current.attrs.strokeLinecap">
          <a-select-option value="round">圆形</a-select-option>
          <a-select-option value="square">方形</a-select-option>
          <a-select-option value="butt">烟蒂</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="起始位置">
        <a-select v-model:value="current.attrs.startPosition">
          <a-select-option value="top">上</a-select-option>
          <a-select-option value="bottom">下</a-select-option>
          <a-select-option value="left">左</a-select-option>
          <a-select-option value="right">右</a-select-option>
        </a-select>
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
  if (val) {
    val.attrs.text = val.value + '%'
  }
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true, immediate: true })
</script>

<style lang='scss' scoped>
</style>