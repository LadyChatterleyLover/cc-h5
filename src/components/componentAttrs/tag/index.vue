<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="按钮类型">
        <a-select v-model:value="current.attrs.type">
          <a-select-option value="default">默认按钮</a-select-option>
          <a-select-option value="primary">主要按钮</a-select-option>
          <a-select-option value="info">信息按钮</a-select-option>
          <a-select-option value="danger">危险按钮</a-select-option>
          <a-select-option value="warning">警告按钮</a-select-option>
          <a-select-option value="success">成功按钮</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="标签颜色">
        <color-picker v-model:pureColor="current.attrs.color"></color-picker>
      </a-form-item>
      <a-form-item label="文本颜色">
        <color-picker v-model:pureColor="current.attrs.textColor"></color-picker>
      </a-form-item>
      <a-form-item label="空心样式">
        <a-switch v-model:checked="current.attrs.plain"></a-switch>
      </a-form-item>
      <a-form-item label="圆角样式">
        <a-switch v-model:checked="current.attrs.round"></a-switch>
      </a-form-item>
      <a-form-item label="标记样式">
        <a-switch v-model:checked="current.attrs.mark"></a-switch>
      </a-form-item>
      <a-form-item label="可关闭">
        <a-switch v-model:checked="current.attrs.closeable"></a-switch>
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