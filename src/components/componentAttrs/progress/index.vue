<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="进度百分比">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.percentage"
          :min="0"
          placeholder="请输入进度百分比"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="进度条宽度">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.strokeWidth"
          :min="1"
          placeholder="请输入进度条宽度"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="进度条颜色">
        <color-picker v-model:pureColor="current.attrs.color"></color-picker>
      </a-form-item>
      <a-form-item label="轨道颜色">
        <color-picker v-model:pureColor="current.attrs.trackColor"></color-picker>
      </a-form-item>
      <a-form-item label="显示文字">
        <a-switch v-model:checked="current.attrs.showPivot"></a-switch>
      </a-form-item>
      <template v-if="current.attrs.showPivot">
        <a-form-item label="文字内容">
          <a-input v-model:value="current.attrs.pivotText" placeholder="请输入文字内容" allowClear></a-input>
        </a-form-item>
        <a-form-item label="文字颜色">
          <color-picker v-model:pureColor="current.attrs.textColor"></color-picker>
        </a-form-item>
        <a-form-item label="文字背景颜色">
          <color-picker v-model:pureColor="current.attrs.pivotColor"></color-picker>
        </a-form-item>
      </template>
      <a-form-item label="是否置灰">
        <a-switch v-model:checked="current.attrs.inactive"></a-switch>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'


let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 8 }
let wrapperCol = { span: 14 }


watch(() => current.value, val => {
  if (val) {
    val.attrs.pivotText = val.attrs.percentage + '%'
  }
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true, immediate: true })
</script>

<style lang='scss' scoped>
</style>