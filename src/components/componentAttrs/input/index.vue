<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="左侧文案">
        <a-input v-model:value="current.attrs.label" placeholder="请输入左侧文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="占位符">
        <a-input v-model:value="current.attrs.placeholder"  placeholder="请输入占位符" allowClear></a-input>
      </a-form-item>
      <a-form-item label="默认值">
        <a-input v-model:value="current.value" placeholder="请输入默认值" allowClear></a-input>
      </a-form-item>
      <a-form-item label="最多输入">
        <a-input placeholder="请输入最多输入位数" allowClear type='number' v-model:value="current.attrs.maxLength" addon-after="个字符" clearable></a-input>
      </a-form-item>
      <a-form-item label="输入框类型">
        <a-select v-model:value="current.attrs.type">
          <a-select-option value="text">普通</a-select-option>
          <a-select-option value="number">数字</a-select-option>
          <a-select-option value="password">密码</a-select-option>
          <a-select-option value="digit">小数点</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="文本位置">
        <a-select v-model:value="current.attrs.textAlign">
          <a-select-option value="left">左侧对齐</a-select-option>
          <a-select-option value="center">居中对齐</a-select-option>
          <a-select-option value="right">右侧对齐</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="是否显示*">
        <a-switch v-model:checked="current.attrs.requireShow"></a-switch>
      </a-form-item>
      <a-form-item label="是否禁用">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="是否只读">
        <a-switch v-model:checked="current.attrs.readonly"></a-switch>
      </a-form-item>
      <a-form-item label="可清空">
        <a-switch v-model:checked="current.attrs.clearable"></a-switch>
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