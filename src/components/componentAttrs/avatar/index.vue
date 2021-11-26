<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="头像链接">
        <a-input v-model:value="current.attrs.icon" placeholder="请输入头像链接或图标名称" allowClear></a-input>
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
        </a-select>
      </a-form-item>
      <a-form-item label="头像形状">
        <a-select v-model:value="current.attrs.shape">
          <a-select-option value="square">方形</a-select-option>
          <a-select-option value="round">圆形</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="背景颜色">
        <color-picker v-model:pureColor="current.attrs.bgColor"></color-picker>
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