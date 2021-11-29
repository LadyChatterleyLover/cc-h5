<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="评分数">
        <a-input-number
          style="width: 100%"
          v-model:value="current.value"
          :min="0"
          :max="current.attrs.count"
          placeholder="请输入评分数"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="评分总数">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.count"
          :min="1"
          placeholder="请输入评分总数"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="图标尺寸">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.size"
          :min="0"
          placeholder="请输入图标尺寸"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="评分间距">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.gutter"
          :min="0"
          placeholder="请输入评分间距"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="选中颜色">
        <color-picker v-model:pureColor="current.attrs.color"></color-picker>
      </a-form-item>
      <a-form-item label="未选中颜色">
        <color-picker v-model:pureColor="current.attrs.voidColor"></color-picker>
      </a-form-item>
      <a-form-item label="禁用时颜色">
        <color-picker v-model:pureColor="current.attrs.disabledColor"></color-picker>
      </a-form-item>
      <a-form-item label="选中图标">
        <a-input v-model:value="current.attrs.icon" placeholder="请输入按钮图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('icon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="未选中图标">
        <a-input v-model:value="current.attrs.voidIcon" placeholder="请输入按钮图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('voidIcon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="是否半星">
        <a-switch v-model:checked="current.attrs.allowHalf"></a-switch>
      </a-form-item>
      <a-form-item label="是否禁用">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="是否只读">
        <a-switch v-model:checked="current.attrs.readonly"></a-switch>
      </a-form-item>
      <a-form-item label="手势滑动">
        <a-switch v-model:checked="current.attrs.touchable"></a-switch>
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