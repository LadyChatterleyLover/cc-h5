<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="当前地区">
        <a-input v-model:value="current.value" placeholder="请输入当前地区码" allowClear></a-input>
      </a-form-item>
      <a-form-item label="顶部标题">
        <a-input v-model:value="current.attrs.title" placeholder="请输入顶部标题" allowClear></a-input>
      </a-form-item>
      <a-form-item label="确认按钮">
        <a-input v-model:value="current.attrs.confirmButtonText" placeholder="请输入确认按钮" allowClear></a-input>
      </a-form-item>
      <a-form-item label="取消按钮">
        <a-input v-model:value="current.attrs.cancelButtonText" placeholder="请输入取消按钮" allowClear></a-input>
      </a-form-item>
      <a-form-item label="加载状态">
        <a-switch v-model:checked="current.attrs.loading"></a-switch>
      </a-form-item>
      <a-form-item label="只读状态">
        <a-switch v-model:checked="current.attrs.readonly"></a-switch>
      </a-form-item>
      <a-form-item label="显示列数">
        <a-select v-model:value="current.attrs.columnsNum">
          <a-select-option value="3">省市区</a-select-option>
          <a-select-option value="2">省市</a-select-option>
          <a-select-option value="1">省</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="选项个数">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.visibleItemCount"
          placeholder="请输入选项个数"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="滚动时长">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.swipeDuration"
          placeholder="请输入滚动时长"
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