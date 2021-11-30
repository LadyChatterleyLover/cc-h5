<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="左侧标题">
        <a-input v-model:value="current.attrs.title" placeholder="请输入左侧标题" allowClear></a-input>
      </a-form-item>
      <a-form-item label="描述信息">
        <a-input v-model:value="current.attrs.label" placeholder="请输入描述信息" allowClear></a-input>
      </a-form-item>
      <a-form-item label="右侧内容">
        <a-input v-model:value="current.attrs.value" placeholder="请输入右侧内容" allowClear></a-input>
      </a-form-item>
      <a-form-item label="右侧额外内容">
        <a-input v-model:value="current.attrs.extra" placeholder="请输入右侧额外内容" allowClear></a-input>
      </a-form-item>
      <a-form-item label="跳转路径">
        <a-input v-model:value="current.attrs.url" placeholder="请输入跳转路径" allowClear></a-input>
      </a-form-item>
      <a-form-item label="路由路径">
        <a-input v-model:value="current.attrs.to" placeholder="请输入路由路径" allowClear></a-input>
      </a-form-item>
      <a-form-item label="单元格尺寸">
        <a-select v-model:value="current.attrs.size">
          <a-select-option value>正常</a-select-option>
          <a-select-option value="large">大号</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="左侧图标">
        <a-input v-model:value="current.attrs.icon" placeholder="请输入左侧图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('icon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="右侧箭头">
        <a-switch v-model:checked="current.attrs.isLink"></a-switch>
      </a-form-item>
      <a-form-item label="箭头方向" v-if="current.attrs.isLink">
        <a-select v-model:value="current.attrs.arrowDirection">
          <a-select-option value="right">右</a-select-option>
          <a-select-option value="left">左</a-select-option>
          <a-select-option value="top">上</a-select-option>
          <a-select-option value="down">下</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="右侧图标" v-if="!current.attrs.isLink">
        <a-input v-model:value="current.attrs.rightIcon" placeholder="请输入右侧图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('rightIcon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="内边框">
        <a-switch v-model:checked="current.attrs.border"></a-switch>
      </a-form-item>
      <a-form-item label="替换页面">
        <a-switch v-model:checked="current.attrs.replace"></a-switch>
      </a-form-item>
      <a-form-item label="点击反馈">
        <a-switch v-model:checked="current.attrs.clickable"></a-switch>
      </a-form-item>
      <a-form-item label="必填星号">
        <a-switch v-model:checked="current.attrs.required"></a-switch>
      </a-form-item>
      <a-form-item label="垂直居中">
        <a-switch v-model:checked="current.attrs.center"></a-switch>
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
