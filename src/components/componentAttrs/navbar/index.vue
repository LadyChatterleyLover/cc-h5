<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="标题名称">
        <a-input v-model:value="current.attrs.title" placeholder="请输入标题名称" allowClear></a-input>
      </a-form-item>
      <a-form-item label="右侧描述">
        <a-input v-model:value="current.attrs.desc" placeholder="请输入左侧右侧描述" allowClear></a-input>
      </a-form-item>
      <a-form-item label="左侧箭头">
        <a-switch v-model:checked="current.attrs.leftShow"></a-switch>
      </a-form-item>
      <a-form-item label="右侧图标">
        <a-input
          v-model:value="current.attrs.icon"
          placeholder="请输入右侧图标"
          allowClear
        ></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('icon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="标题图标">
      <a-input
          v-model:value="current.attrs.titIcon"
          placeholder="请输入标题图标"
          allowClear
        ></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('titIcon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
    </a-form>
  </div>
  <choose-icon v-model:visible="visible" @click="choose"></choose-icon>
</template>

<script lang='ts' setup>
import ChooseIcon from '@/components/chooseIcon/chooseIcon.vue'
import { ComponentItem } from '@/types'
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 18 }

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