<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="按钮文案">
        <a-input v-model:value="current.attrs.text" placeholder="请输入按钮文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="按钮类型">
        <a-select v-model:value="current.attrs.type">
          <a-select-option value="default">默认按钮</a-select-option>
          <a-select-option value="primary">主要按钮</a-select-option>
          <a-select-option value="danger">危险按钮</a-select-option>
          <a-select-option value="warning">警告按钮</a-select-option>
          <a-select-option value="success">成功按钮</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="按钮图标">
        <a-input v-model:value="current.attrs.icon" placeholder="请输入按钮图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('icon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="按钮尺寸">
        <a-select v-model:value="current.attrs.size">
          <a-select-option value="normal">正常</a-select-option>
          <a-select-option value="large">大号</a-select-option>
          <a-select-option value="small">小号</a-select-option>
          <a-select-option value="mini">迷你</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="按钮颜色">
        <color-picker v-model:pureColor="current.attrs.color"></color-picker>
      </a-form-item>
      <a-form-item label="朴素按钮">
        <a-switch v-model:checked="current.attrs.plain"></a-switch>
      </a-form-item>
      <a-form-item label="块级按钮">
        <a-switch v-model:checked="current.attrs.block"></a-switch>
      </a-form-item>
      <a-form-item label="圆形按钮">
        <a-switch v-model:checked="current.attrs.round"></a-switch>
      </a-form-item>
      <a-form-item label="方形按钮">
        <a-switch v-model:checked="current.attrs.square"></a-switch>
      </a-form-item>
      <a-form-item label="是否禁用">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="0.5px边框">
        <a-switch v-model:checked="current.attrs.hairline"></a-switch>
      </a-form-item>
      <a-form-item label="加载状态">
        <a-switch v-model:checked="current.attrs.loading"></a-switch>
      </a-form-item>
      <a-form-item label="加载文案" v-if="current.attrs.loading">
        <a-input v-model:value="current.attrs.loadingText" placeholder="请输入按钮文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="加载图标" v-if="current.attrs.loading">
        <a-select v-model:value="current.attrs.loadingType">
          <a-select-option value="circular">圆圈</a-select-option>
          <a-select-option value="spinner">花朵</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="跳转链接">
        <a-input v-model:value="current.attrs.url" placeholder="请输入跳转链接" allowClear></a-input>
      </a-form-item>
      <a-form-item label="路由路径">
        <a-input v-model:value="current.attrs.to" placeholder="请输入路由路径" allowClear></a-input>
      </a-form-item>
      <a-form-item label="替换页面">
        <a-switch v-model:checked="current.attrs.replace"></a-switch>
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

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }
let visible = ref<boolean>(false)
let position = ref<string>('')

let clickBtn = (val: string) => {
  position.value = val
  visible.value = true
}

let choose = (item: string) => {
  (current.value.attrs as any)[position.value] = item
  position.value = ''
}


watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>
