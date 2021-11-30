<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="加载颜色">
        <color-picker v-model:pureColor="current.attrs.color"></color-picker>
      </a-form-item>
      <a-form-item label="加载类型">
        <a-select v-model:value="current.attrs.type">
          <a-select-option value="circular">圆形</a-select-option>
          <a-select-option value="spinner">花朵</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="图标大小">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.size"
          placeholder="请输入图标大小"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="加载文案">
        <a-input v-model:value="current.attrs.text" placeholder="请输入加载文案" allowClear></a-input>
      </a-form-item>
      <template v-if="current.attrs.text">
        <a-form-item label="文字大小">
          <a-input-number
            style="width: 100%"
            v-model:value="current.attrs.textSize"
            placeholder="请输入文字大小"
          ></a-input-number>
        </a-form-item>
        <a-form-item label="文字颜色">
          <color-picker v-model:pureColor="current.attrs.textColor"></color-picker>
        </a-form-item>
        <a-form-item label="垂直排列">
          <a-switch v-model:checked="current.attrs.vertical"></a-switch>
        </a-form-item>
      </template>
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