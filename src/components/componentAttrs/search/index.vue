<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="左内侧文案">
        <a-input v-model:value="current.attrs.label" placeholder="请输入左内侧文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="左内侧图标">
        <a-input v-model:value="current.attrs.leftIcon" placeholder="请输入左内侧文案" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('leftIcon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="左外侧文案">
        <a-radio-group v-model:value="left" name="left">
          <a-radio value="text">文本</a-radio>
          <a-radio value="icon">图标</a-radio>
        </a-radio-group>
        <a-input
          style="margin-top: 20px;"
          v-if="left === 'text'"
          v-model:value="current.attrs.left"
          placeholder="请输入左外侧文案"
          allowClear
        ></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          v-if="left === 'icon'"
          @click="clickBtn('left')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="右内侧文案">
        <a-radio-group v-model:value="rightIcon" name="rightIcon">
          <a-radio value="text">文本</a-radio>
          <a-radio value="icon">图标</a-radio>
        </a-radio-group>
        <a-input
          style="margin-top: 20px;"
          v-if="rightIcon === 'text'"
          v-model:value="current.attrs.rightIcon"
          placeholder="请输入右内侧文案"
          allowClear
        ></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          v-if="rightIcon === 'icon'"
          @click="clickBtn('rightIcon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="字段名称">
        <a-input v-model:value="current.field" placeholder="请输入字段名称" allowClear></a-input>
      </a-form-item>
      <a-form-item label="占位符">
        <a-input v-model:value="current.attrs.placeholder" placeholder="请输入占位符" allowClear></a-input>
      </a-form-item>
      <a-form-item label="默认值">
        <a-input v-model:value="current.value" placeholder="请输入默认值" allowClear></a-input>
      </a-form-item>
      <a-form-item label="外部背景颜色">
        <color-picker v-model:pureColor="current.attrs.background"></color-picker>
      </a-form-item>
      <a-form-item label="显示取消按钮">
        <a-switch v-model:checked="current.attrs.showAction"></a-switch>
      </a-form-item>
      <a-form-item label="取消按钮文案" v-if="current.attrs.showAction">
        <a-input placeholder="请输入取消按钮文案" v-model:value="current.attrs.actionText"></a-input>
      </a-form-item>
      <a-form-item label="可清空">
        <a-switch v-model:checked="current.attrs.clearable"></a-switch>
      </a-form-item>
      <a-form-item label="禁用状态">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="只读状态">
        <a-switch v-model:checked="current.attrs.readonly"></a-switch>
      </a-form-item>
      <a-form-item label="错误状态">
        <a-switch v-model:checked="current.attrs.error"></a-switch>
      </a-form-item>
      <a-form-item label="错误提示" v-if="current.attrs.error">
        <a-input placeholder="请输入取消按钮文案" v-model:value="current.attrs.errorMessage"></a-input>
      </a-form-item>
      <a-form-item label="文本位置">
        <a-select v-model:value="current.attrs.inputAlign">
          <a-select-option value="left">左侧对齐</a-select-option>
          <a-select-option value="center">居中对齐</a-select-option>
          <a-select-option value="right">右侧对齐</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </div>
  <choose-icon v-model:visible="visible" @click="choose"></choose-icon>
</template>

<script lang='ts' setup>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import ChooseIcon from '@/components/chooseIcon/chooseIcon.vue'

let store = useStore()
let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 8 }
let wrapperCol = { span: 14 }

let left = ref<'icon' | 'text'>('text')
let rightIcon = ref<'icon' | 'text'>('text')


let visible = ref<boolean>(false)
let position = ref<string>('')

let clickBtn = (val: string) => {
  position.value = val
  visible.value = true
}

let choose = (item: string) => {
  (current.value.attrs as any)[position.value] = 'icon-' + item
  position.value = ''
}

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>