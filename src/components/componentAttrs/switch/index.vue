<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="选中状态">
        <a-switch v-model:checked="current.value"></a-switch>
      </a-form-item>
      <a-form-item label="加载状态">
        <a-switch v-model:checked="current.attrs.loading"></a-switch>
      </a-form-item>
      <a-form-item label="禁用状态">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="开关尺寸">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.size"
          placeholder="请输入开关尺寸"
          :min="0"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="打开颜色">
        <color-picker v-model:pureColor="current.attrs.activeColor"></color-picker>
      </a-form-item>
      <a-form-item label="关闭颜色">
        <color-picker v-model:pureColor="current.attrs.inactiveColor"></color-picker>
      </a-form-item>
      <a-form-item label="打开的值">
        <a-input v-model:value="current.attrs.activeValue" placeholder="请输入打开的值" allowClear></a-input>
      </a-form-item>
      <a-form-item label="关闭的值">
        <a-input v-model:value="current.attrs.inactiveValue" placeholder="请输入打开的值" allowClear></a-input>
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
}, { deep: true, immediate: true })
</script>

<style lang='scss' scoped>
</style>