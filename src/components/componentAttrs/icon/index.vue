<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="按钮图标">
        <a-input v-model:value="current.attrs.name" placeholder="请输入按钮图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('name')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="图标颜色">
        <color-picker v-model:pureColor="current.attrs.color"></color-picker>
      </a-form-item>
      <a-form-item label="尺寸单位">
        <a-select v-model:value="current.attrs.company">
          <a-select-option value="px">px</a-select-option>
          <a-select-option value="em">em</a-select-option>
          <a-select-option value="rem">rem</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="图标尺寸">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.size"
          placeholder="请输入图标尺寸"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="显示红点">
        <a-switch v-model:checked="current.attrs.dot"></a-switch>
      </a-form-item>
      <a-form-item label="徽标内容">
        <a-input placeholder="请输入徽标内容" v-model:value="current.attrs.badge"></a-input>
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