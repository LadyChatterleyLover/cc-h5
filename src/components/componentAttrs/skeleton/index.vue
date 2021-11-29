<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="段落行数">
        <a-input-number
          :min="0"
          style="width: 100%"
          v-model:value="current.attrs.row"
          placeholder="请输入段落行数"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="段落宽度">
        <a-input-number
          :min="0"
          style="width: 100%"
          v-model:value="current.attrs.rowWidth"
          placeholder="请输入段落宽度"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="显示标题">
        <a-switch v-model:checked="current.attrs.title"></a-switch>
      </a-form-item>
      <a-form-item label="标题宽度" v-if="current.attrs.title">
        <a-input-number
          :min="0"
          style="width: 100%"
          v-model:value="current.attrs.titleWidth"
          placeholder="请输入标题宽度"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="显示头像">
        <a-switch v-model:checked="current.attrs.avatar"></a-switch>
      </a-form-item>
      <a-form-item label="头像宽度" v-if="current.attrs.avatar">
        <a-input-number
          :min="0"
          style="width: 100%"
          v-model:value="current.attrs.avatarWidth"
          placeholder="请输入标题宽度"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="内容位置" v-if="current.attrs.avatar">
        <a-select v-model:value="current.attrs.avatarShape">
          <a-select-option value="round">圆形</a-select-option>
          <a-select-option value="square">方形</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="开启动画">
        <a-switch v-model:checked="current.attrs.animate"></a-switch>
      </a-form-item>
      <a-form-item label="圆角风格">
        <a-switch v-model:checked="current.attrs.round"></a-switch>
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