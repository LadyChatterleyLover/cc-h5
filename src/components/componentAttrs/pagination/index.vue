<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="显示模式">
        <a-select v-model:value="current.attrs.mode">
          <a-select-option value="multi">普通</a-select-option>
          <a-select-option value="simple">简单</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="上一页文字">
        <a-input v-model:value="current.attrs.prevText" placeholder="请输入上一页文字" allowClear></a-input>
      </a-form-item>
      <a-form-item label="下一页文字">
        <a-input v-model:value="current.attrs.nextText" placeholder="请输入下一页文字" allowClear></a-input>
      </a-form-item>
      <a-form-item label="总记录数">
        <a-input-number
          style="width: 100%;"
          v-model:value="current.attrs.totalItems"
          placeholder="请输入总记录数"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="每页记录数">
        <a-input-number
          style="width: 100%;"
          v-model:value="current.attrs.itemsPerPage"
          placeholder="请输入每页记录数"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="页码个数">
        <a-input-number
          style="width: 100%;"
          v-model:value="current.attrs.showPageSize"
          placeholder="请输入页码个数"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="显示省略号">
        <a-switch v-model:checked="current.attrs.forceEllipses"></a-switch>
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