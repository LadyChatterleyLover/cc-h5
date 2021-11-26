<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="左内侧文案">
        <a-radio-group v-model:value="leftin" name="leftin">
          <a-radio value="text">文本</a-radio>
          <a-radio value="icon">图标</a-radio>
        </a-radio-group>
        <a-input
          style="margin-top: 20px;"
          v-if="leftin === 'text'"
          v-model:value="current.attrs.leftin"
          placeholder="请输入左内侧文案"
          allowClear
        ></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          v-if="leftin === 'icon'"
          @click="clickBtn('leftin')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="左外侧文案">
        <a-radio-group v-model:value="leftout" name="leftout">
          <a-radio value="text">文本</a-radio>
          <a-radio value="icon">图标</a-radio>
        </a-radio-group>
        <a-input
          style="margin-top: 20px;"
          v-if="leftout === 'text'"
          v-model:value="current.attrs.leftout"
          placeholder="请输入左外侧文案"
          allowClear
        ></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          v-if="leftout === 'icon'"
          @click="clickBtn('leftout')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="右内侧文案">
        <a-radio-group v-model:value="rightin" name="rightin">
          <a-radio value="text">文本</a-radio>
          <a-radio value="icon">图标</a-radio>
        </a-radio-group>
        <a-input
          style="margin-top: 20px;"
          v-if="rightin === 'text'"
          v-model:value="current.attrs.rightin"
          placeholder="请输入右内侧文案"
          allowClear
        ></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          v-if="rightin === 'icon'"
          @click="clickBtn('rightin')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="右外侧文案">
        <a-radio-group v-model:value="rightout" name="rightout">
          <a-radio value="text">文本</a-radio>
          <a-radio value="icon">图标</a-radio>
        </a-radio-group>
        <a-input
          style="margin-top: 20px;"
          v-if="rightout === 'text'"
          v-model:value="current.attrs.rightout"
          placeholder="请输入右外侧文案"
          allowClear
        ></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          v-if="rightout === 'icon'"
          @click="clickBtn('rightout')"
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
      <a-form-item label="输入框类型">
        <a-select v-model:value="current.attrs.inputType">
          <a-select-option value="text">普通</a-select-option>
          <a-select-option value="number">数字</a-select-option>
          <a-select-option value="password">密码</a-select-option>
          <a-select-option value="digit">小数点</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="外部背景颜色">
        <color-picker v-model:pureColor="current.attrs.background"></color-picker>
      </a-form-item>
      <a-form-item label="内部部背景颜色">
        <color-picker v-model:pureColor="current.attrs.inputBackground"></color-picker>
      </a-form-item>
      <a-form-item label="可清空">
        <a-switch v-model:checked="current.attrs.clearable"></a-switch>
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

let leftin = ref<'icon' | 'text'>('text')
let leftout = ref<'icon' | 'text'>('text')
let rightin = ref<'icon' | 'text'>('text')
let rightout = ref<'icon' | 'text'>('text')


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