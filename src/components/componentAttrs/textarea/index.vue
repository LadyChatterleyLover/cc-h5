<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="占位符">
        <a-input v-model:value="current.attrs.placeholder" placeholder="请输入占位符" allowClear></a-input>
      </a-form-item>
      <a-form-item label="默认值">
        <a-input v-model:value="current.value" placeholder="请输入默认值" allowClear></a-input>
      </a-form-item>
      <a-form-item label="最多输入">
        <a-input
          placeholder="请输入最多输入位数"
          allowClear
          type="number"
          v-model:value="current.attrs.maxLength"
          addon-after="个字符"
          clearable
        ></a-input>
      </a-form-item>
      <a-form-item label="文本域高度">
        <a-input-number
          style="width: 100%"
          placeholder="请输入文本域高度"
          v-model:value="current.attrs.rows"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="文本位置">
        <a-select v-model:value="current.attrs.textAlign">
          <a-select-option value="left">左侧对齐</a-select-option>
          <a-select-option value="center">居中对齐</a-select-option>
          <a-select-option value="right">右侧对齐</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="输入字符" v-if="current.attrs.maxLength">
        <a-switch v-model:checked="current.attrs.limitShow"></a-switch>
      </a-form-item>
      <a-form-item label="是否禁用">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="是否只读">
        <a-switch v-model:checked="current.attrs.readonly"></a-switch>
      </a-form-item>
      <a-form-item label="可拉伸">
        <a-switch v-model:checked="current.attrs.autosize"></a-switch>
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