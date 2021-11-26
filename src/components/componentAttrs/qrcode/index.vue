<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="二维码内容">
        <a-input v-model:value="current.attrs.value" placeholder="请输入二维码内容" allowClear></a-input>
      </a-form-item>
      <a-form-item label="二维码模式">
        <a-select v-model:value="current.attrs.tag">
          <a-select-option value="canvas">canvas</a-select-option>
          <a-select-option value="img">img</a-select-option>
          <a-select-option value="svg">svg</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="安全等级">
        <a-select v-model:value="current.attrs.errorCorrectionLevel">
          <a-select-option value="L">低</a-select-option>
          <a-select-option value="M">中</a-select-option>
          <a-select-option value="Q">较高</a-select-option>
          <a-select-option value="H">高</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="二维码尺寸">
        <a-input-number style="width: 100%" v-model:value="current.attrs.width"></a-input-number>
      </a-form-item>
      <a-form-item label="外边距">
        <a-input-number
          placeholder="请输入外边距"
          style="width: 100%"
          v-model:value="current.attrs.margin"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="背景颜色">
        <color-picker v-model:pureColor="current.attrs.backgroundColor"></color-picker>
      </a-form-item>
      <a-form-item label="二维码图标">
        <a-input v-model:value="current.attrs.src" placeholder="请输入二维码内容" allowClear></a-input>
      </a-form-item>
      <a-form-item label="图标宽度">
        <a-input-number
          style="width: 100%"
          placeholder="请输入图标宽度"
          v-model:value="current.attrs.imgWidth"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="图标高度">
        <a-input-number
          placeholder="请输入图标高度"
          style="width: 100%"
          v-model:value="current.attrs.imgHeight"
        ></a-input-number>
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