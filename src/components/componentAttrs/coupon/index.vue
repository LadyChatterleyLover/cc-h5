<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="优惠金额">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.amount"
          placeholder="请输入优惠金额"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="背景颜色">
        <color-picker v-model:pureColor="current.attrs.background"></color-picker>
      </a-form-item>
      <a-form-item label="优惠条件">
        <a-input v-model:value="current.attrs.condition" placeholder="请输入优惠条件" allowClear></a-input>
      </a-form-item>
      <a-form-item label="有效期">
        <a-textarea v-model:value="current.attrs.validity" placeholder="请输入有效期" allowClear></a-textarea>
      </a-form-item>
      <a-form-item label="提示信息">
        <a-textarea v-model:value="current.attrs.tips" placeholder="请输入提示信息" allowClear></a-textarea>
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