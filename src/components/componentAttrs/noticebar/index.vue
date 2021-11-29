<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="提示信息">
        <a-input v-model:value="current.attrs.text" placeholder="请输入提示信息" allowClear></a-input>
      </a-form-item>
      <a-form-item label="左侧文案">
        <a-radio-group v-model:value="leftIcon" name="leftIcon">
          <a-radio value="text">文本</a-radio>
          <a-radio value="icon">图标</a-radio>
        </a-radio-group>
        <a-input
          style="margin-top: 20px;"
          v-if="leftIcon === 'text'"
          v-model:value="current.attrs.leftIcon"
          placeholder="请输入左侧图标"
          allowClear
        ></a-input>
        <div>
          <a-button
            style="margin-top: 20px;"
            type="primary"
            v-if="leftIcon === 'icon'"
            @click="clickBtn('leftIcon')"
            size="small"
          >选择图标</a-button>
        </div>
      </a-form-item>
      <a-form-item label="通知栏模式">
        <a-select v-model:value="current.attrs.mode">
          <a-select-option value>普通</a-select-option>
          <a-select-option value="closeable">关闭</a-select-option>
          <a-select-option value="link">链接</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="延时时间">
        <a-input-number style="width: 100%" :min="0" v-model:value="current.attrs.delay"></a-input-number>
      </a-form-item>
      <a-form-item label="滚动速度">
        <a-input-number style="width: 100%" :min="0" v-model:value="current.attrs.speed"></a-input-number>
      </a-form-item>
      <a-form-item label="文字颜色" v-if="current.attrs.color">
        <color-picker v-model:pureColor="current.attrs.color"></color-picker>
      </a-form-item>
      <a-form-item label="背景颜色" v-if="current.attrs.background">
        <color-picker v-model:pureColor="current.attrs.background"></color-picker>
      </a-form-item>
      <a-form-item label="可滚动">
        <a-switch v-model:checked="current.attrs.scrollable"></a-switch>
      </a-form-item>
      <a-form-item label="文本换行">
        <a-switch v-model:checked="current.attrs.wrapable"></a-switch>
      </a-form-item>
    </a-form>
  </div>
  <choose-icon v-model:visible="visible" @click="choose"></choose-icon>
</template>

<script lang='ts' setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { MinusOutlined } from '@ant-design/icons-vue'
import ChooseIcon from '@/components/chooseIcon/chooseIcon.vue'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 18 }

let leftIcon = ref<'icon' | 'text'>('text')


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