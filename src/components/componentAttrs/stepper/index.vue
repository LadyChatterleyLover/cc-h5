<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="当前值">
        <a-input-number style="width: 100%;" v-model:value="current.value" placeholder="请输入当前值"></a-input-number>
      </a-form-item>
      <a-form-item label="最小值">
        <a-input-number
          style="width: 100%;"
          :max="current.attrs.max"
          v-model:value="current.attrs.min"
          placeholder="请输入最小值"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="最大值">
        <a-input-number style="width: 100%;" v-model:value="current.attrs.max" placeholder="请输入最大值"></a-input-number>
      </a-form-item>
      <a-form-item label="步进">
        <a-input-number style="width: 100%;" v-model:value="current.attrs.step" placeholder="请输入步进"></a-input-number>
      </a-form-item>
      <a-form-item label="输入框宽度">
        <a-input-number
          style="width: 100%;"
          v-model:value="current.attrs.inputWidth"
          placeholder="请输入输入框宽度"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="按钮大小">
        <a-input-number
          style="width: 100%;"
          v-model:value="current.attrs.buttonSize"
          placeholder="请输入按钮大小"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="小数位数">
        <a-input-number
          style="width: 100%;"
          v-model:value="current.attrs.decimalLength"
          placeholder="请输入小数位数"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="占位提示">
        <a-input v-model:value="current.attrs.placeholder" placeholder="请输入占位提示" allowClear></a-input>
      </a-form-item>
      <a-form-item label="输入整数">
        <a-switch v-model:checked="current.attrs.integer"></a-switch>
      </a-form-item>
      <a-form-item label="禁用状态">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="禁用增加按钮">
        <a-switch v-model:checked="current.attrs.disablePlus"></a-switch>
      </a-form-item>
      <a-form-item label="禁用减少按钮">
        <a-switch v-model:checked="current.attrs.disableMins"></a-switch>
      </a-form-item>
      <a-form-item label="显示增加按钮">
        <a-switch v-model:checked="current.attrs.showPlus"></a-switch>
      </a-form-item>
      <a-form-item label="显示减少按钮">
        <a-switch v-model:checked="current.attrs.showMins"></a-switch>
      </a-form-item>
      <a-form-item label="显示输入框">
        <a-switch v-model:checked="current.attrs.showInput"></a-switch>
      </a-form-item>
      <a-form-item label="长按手势">
        <a-switch v-model:checked="current.attrs.longPress"></a-switch>
      </a-form-item>

      <a-form-item label="样式风格">
        <a-select v-model:value="current.attrs.theme">
          <a-select-option value>默认</a-select-option>
          <a-select-option value="round">圆角</a-select-option>
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

let labelCol = { span: 8 }
let wrapperCol = { span: 14 }


watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>