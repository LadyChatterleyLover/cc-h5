<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="标题名称">
        <a-input v-model:value="current.attrs.title" placeholder="请输入标题名称" allowClear></a-input>
      </a-form-item>
      <a-form-item label="左侧文案">
        <a-input v-model:value="current.attrs.leftText" placeholder="请输入左侧文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="右侧文案">
        <a-input v-model:value="current.attrs.rightText" placeholder="请输入右侧文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="左侧箭头">
        <a-switch v-model:checked="current.attrs.leftArrow"></a-switch>
      </a-form-item>
      <a-form-item label="下边框">
        <a-switch v-model:checked="current.attrs.border"></a-switch>
      </a-form-item>
      <a-form-item label="固定顶部">
        <a-switch v-model:checked="current.attrs.fixed"></a-switch>
      </a-form-item>
      <a-form-item label="占位元素" v-if="current.attrs.fixed">
        <a-switch v-model:checked="current.attrs.placeholder"></a-switch>
      </a-form-item>
      <a-form-item label="安全区适配">
        <a-switch v-model:checked="current.attrs.safeAreaInsetTop"></a-switch>
      </a-form-item>
      <a-form-item label="元素层级">
        <a-input-number
          style="width: 100%"
          placeholder="请输入元素层级"
          v-model:value="current.attrs.zIndex"
        ></a-input-number>
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
let wrapperCol = { span: 18 }

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>