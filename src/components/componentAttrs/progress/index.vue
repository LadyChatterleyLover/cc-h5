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
      <a-form-item label="背景颜色">
        <color-picker v-model:pureColor="current.attrs.strokeColor"></color-picker>
      </a-form-item>
      <a-form-item label="文字颜色">
        <color-picker v-model:pureColor="current.attrs.textColor"></color-picker>
      </a-form-item>
      <a-form-item label="进度条尺寸">
        <a-select v-model:value="current.attrs.size">
          <a-select-option value="base">正常</a-select-option>
          <a-select-option value="large">大号</a-select-option>
          <a-select-option value="small">小号</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="进度条状态">
        <a-select v-model:value="current.attrs.status">
          <a-select-option value>文字</a-select-option>
          <a-select-option value="active">动画</a-select-option>
          <a-select-option value="icon">图标</a-select-option>
        </a-select>
      </a-form-item>
      <template v-if="current.attrs.status === 'icon'">
        <a-form-item label="图标名称">
          <a-input v-model:value="current.attrs.iconName" placeholder="请输入按钮图标" allowClear></a-input>
          <a-button
            style="margin-top: 20px;"
            type="primary"
            @click="clickBtn('iconName')"
            size="small"
          >选择图标</a-button>
        </a-form-item>
        <a-form-item label="图标颜色">
          <color-picker v-model:pureColor="current.attrs.iconColor"></color-picker>
        </a-form-item>
      </template>
      <a-form-item label="文字内容">
        <a-switch v-model:checked="current.attrs.showText"></a-switch>
      </a-form-item>
      <a-form-item label="文字內显">
        <a-switch v-model:checked="current.attrs.textInside"></a-switch>
      </a-form-item>
      <a-form-item label="是否只读">
        <a-switch v-model:checked="current.attrs.readonly"></a-switch>
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