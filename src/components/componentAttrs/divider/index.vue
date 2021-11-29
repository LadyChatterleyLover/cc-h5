<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="文本信息">
        <a-input v-model:value="current.attrs.text" placeholder="请输入文本信息" allowClear></a-input>
      </a-form-item>
      <a-form-item label="使用虚线">
        <a-switch v-model:checked="current.attrs.dashed"></a-switch>
      </a-form-item>
      <a-form-item label="0.5px 线">
        <a-switch v-model:checked="current.attrs.hairline"></a-switch>
      </a-form-item>
      <a-form-item label="内容位置">
        <a-select v-model:value="current.attrs.contentPosition">
          <a-select-option value="center">居中</a-select-option>
          <a-select-option value="left">左侧</a-select-option>
          <a-select-option value="right">右侧</a-select-option>
        </a-select>
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