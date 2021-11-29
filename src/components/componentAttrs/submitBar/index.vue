<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="提交金额">
        <a-input-number
          :min="0"
          style="width: 100%"
          v-model:value="current.attrs.price"
          placeholder="请输入提交金额"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="小数位数">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.decimalLength"
          placeholder="请输入小数位数"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="左侧文案">
        <a-input v-model:value="current.attrs.label" placeholder="请输入左侧文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="右侧文案">
        <a-input v-model:value="current.attrs.suffixLabel" placeholder="请输入右侧文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="按钮文字">
        <a-input v-model:value="current.attrs.buttonText" placeholder="请输入按钮文字" allowClear></a-input>
      </a-form-item>
      <a-form-item label="按钮类型">
        <a-select v-model:value="current.attrs.buttonType">
          <a-select-option value="default">默认按钮</a-select-option>
          <a-select-option value="primary">主要按钮</a-select-option>
          <a-select-option value="danger">危险按钮</a-select-option>
          <a-select-option value="warning">警告按钮</a-select-option>
          <a-select-option value="success">成功按钮</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="按钮颜色">
        <color-picker v-model:pureColor="current.attrs.buttonColor"></color-picker>
      </a-form-item>
      <a-form-item label="提示文案">
        <a-input v-model:value="current.attrs.tip" placeholder="请输入提示文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="货币符号">
        <a-input v-model:value="current.attrs.currency" placeholder="请输入货币符号" allowClear></a-input>
      </a-form-item>
      <a-form-item label="禁用状态">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="加载状态">
        <a-switch v-model:checked="current.attrs.loading"></a-switch>
      </a-form-item>
      <a-form-item label="金额方向">
        <a-select v-model:value="current.attrs.textAlign">
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