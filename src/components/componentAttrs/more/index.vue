<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="左侧文案">
        <a-input v-model:value="current.attrs.leftOptions.text" placeholder="请输入评分数" allowClear></a-input>
      </a-form-item>
      <a-form-item label="左侧字体大小">
        <a-input-number
          style="width: 100%"
          :min="12"
          v-model:value="current.attrs.leftOptions.style.fontSize"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="左侧字体粗细">
        <a-input-number
          style="width: 100%"
          :min="100"
          :max="900"
          :step="100"
          v-model:value="current.attrs.leftOptions.style.fontWeight"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="左侧字体颜色">
        <color-picker v-model:pureColor="current.attrs.leftOptions.style.color"></color-picker>
      </a-form-item>
      <a-form-item label="右侧文案">
        <a-input v-model:value="current.attrs.rightOptions.text" placeholder="请输入评分数" allowClear></a-input>
      </a-form-item>
      <a-form-item label="右侧字体大小">
        <a-input-number
          style="width: 100%"
          :min="12"
          v-model:value="current.attrs.rightOptions.style.fontSize"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="右侧字体粗细">
        <a-input-number
          style="width: 100%"
          :min="100"
          :max="900"
          :step="100"
          v-model:value="current.attrs.rightOptions.style.fontWeight"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="右侧字体颜色">
        <color-picker v-model:pureColor="current.attrs.rightOptions.style.color"></color-picker>
      </a-form-item>
      <a-form-item label="按钮图标">
        <a-input v-model:value="current.attrs.rightOptions.icon" placeholder="请输入按钮图标" allowClear></a-input>
        <a-button style="margin-top: 20px;" type="primary" @click="clickBtn" size="small">选择图标</a-button>
      </a-form-item>
      <a-form-item label="右侧箭头大小">
        <a-input-number
          style="width: 100%"
          :min="1"
          v-model:value="current.attrs.rightOptions.iconSize"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="右侧箭头颜色">
        <color-picker v-model:pureColor="current.attrs.rightOptions.iconColor"></color-picker>
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

let clickBtn = () => {
  visible.value = true
}

let choose = (item: string) => {
  (current.value.attrs as any).rightOptions.icon = item
  visible.value = false
}

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>


<style lang='scss' scoped>
</style>