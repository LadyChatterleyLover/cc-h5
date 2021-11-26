<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="提示信息">
        <a-input v-model:value="current.attrs.text" placeholder="请输入提示信息" allowClear></a-input>
      </a-form-item>
      <a-form-item label="左侧图标">
        <a-input v-model:value="current.attrs.leftIcon" placeholder="请输入左侧图标链接" allowClear></a-input>
      </a-form-item>
      <a-form-item label="滚动方向">
        <a-select v-model:value="current.attrs.direction">
          <a-select-option value="across">水平</a-select-option>
          <a-select-option value="vertical">垂直</a-select-option>
        </a-select>
      </a-form-item>
      <template v-if="current.attrs.direction === 'vertical'">
        <a-form-item label="滚动列表">
          <div style="display: flex" v-for="(item, index) in current.attrs.list" :key="index">
            <a-input
              style="margin-bottom: 5px;"
              v-model:value="item.text"
              placeholder="请输入滚动信息"
              allowClear
            ></a-input>
            <a-button @click="del(item, index)" danger shape="circle" size="small">
              <template #icon>
                <MinusOutlined />
              </template>
            </a-button>
          </div>
          <a-button @click="add" style="margin: 0 5px;" type="primary" size="small">添加图片</a-button>
        </a-form-item>
        <a-form-item label="停留时间">
          <a-input-number style="width: 100%" :min="0" v-model:value="current.attrs.standTime"></a-input-number>
        </a-form-item>
        <a-form-item label="列高度">
          <a-input-number style="width: 100%" :min="0" v-model:value="current.attrs.height"></a-input-number>
        </a-form-item>
        <a-form-item label="复杂动画">
          <a-switch v-model:checked="current.attrs.complexAm"></a-switch>
        </a-form-item>
      </template>
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
      <a-form-item label="可关闭">
        <a-switch v-model:checked="current.attrs.closeMode"></a-switch>
      </a-form-item>
      <a-form-item label="可滚动">
        <a-switch v-model:checked="current.attrs.scrollable"></a-switch>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { ComponentItem } from '@/types'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { MinusOutlined } from '@ant-design/icons-vue'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 18 }


let add = () => {
  current.value.list.push({ text: '' })
}
let del = (item: ComponentItem, index: number) => {
  current.value.list.splice(index, 1)
}

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>