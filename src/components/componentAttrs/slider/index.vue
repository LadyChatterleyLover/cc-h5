<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="进度百分比" v-if="!current.attrs.range">
        <a-input-number
          :max="100"
          style="width: 100%"
          v-model:value="current.value"
          placeholder="请输入进度百分比"
          allowClear
        ></a-input-number>
      </a-form-item>
      <template v-if="current.attrs.range">
        <a-form-item label="第一个滑块">
          <a-input v-model:value="current.value[0]" placeholder="请输入第一个滑块进度" allowClear></a-input>
        </a-form-item>
        <a-form-item label="第二个滑块">
          <a-input v-model:value="current.value[1]" placeholder="请输入第二个滑块进度" allowClear></a-input>
        </a-form-item>
      </template>
      <a-form-item label="激活颜色">
        <color-picker v-model:pureColor="current.attrs.activeColor"></color-picker>
      </a-form-item>
      <a-form-item label="未激活颜色">
        <color-picker v-model:pureColor="current.attrs.inactiveColor"></color-picker>
      </a-form-item>
      <a-form-item label="最大值">
        <a-input-number
          style="width: 100%"
          placeholder="请输入最大值"
          v-model:checked="current.attrs.max"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="最小值">
        <a-input-number
          :max="current.attrs.max"
          style="width: 100%"
          placeholder="请输入最小值"
          v-model:checked="current.attrs.min"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="步进">
        <a-input-number
          style="width: 100%"
          placeholder="请输入步进"
          v-model:checked="current.attrs.step"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="进度条高度">
        <a-input-number
          :min="0"
          style="width: 100%"
          placeholder="请输入进度条高度"
          v-model:checked="current.attrs.barHeight"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="按钮尺寸">
        <a-input-number
          :min="0"
          style="width: 100%"
          placeholder="请输入按钮尺寸"
          v-model:checked="current.attrs.buttonSize"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="双滑块">
        <a-switch @change="changeRange" v-model:checked="current.attrs.range"></a-switch>
      </a-form-item>
      <a-form-item label="禁用状态">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="只读状态">
        <a-switch v-model:checked="current.attrs.readonly"></a-switch>
      </a-form-item>
      <a-form-item label="垂直展示">
        <a-switch v-model:checked="current.attrs.vertical"></a-switch>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import cloneDeep from 'lodash/cloneDeep'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }


let changeRange = (checked: boolean) => {
  let cloneCurrent = cloneDeep(current.value)
  if (checked) {
    cloneCurrent.value = [0, 50]
  } else {
    cloneCurrent.value = 50
  }
  localStorage.setItem('currentComponent', JSON.stringify(cloneCurrent))
  store.commit('setCurrentComponent', cloneCurrent)
}

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>