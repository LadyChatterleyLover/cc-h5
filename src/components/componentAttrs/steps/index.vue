<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="步骤列表">
        <div style="display: flex" v-for="(item, index) in current.children" :key="index">
          <a-input
            style="margin-bottom: 5px;"
            v-model:value="item.attrs.name"
            placeholder="请输入图片路径"
            allowClear
          ></a-input>
          <a-button
            style="margin-left: 5px;"
            @click="del(item, index)"
            danger
            shape="circle"
            size="small"
          >
            <template #icon>
              <MinusOutlined />
            </template>
          </a-button>
        </div>
        <a-button @click="add" style="margin: 0 5px;" type="primary" size="small">添加步骤</a-button>
      </a-form-item>
      <a-form-item label="步骤条方向">
        <a-select v-model:value="current.attrs.direction">
          <a-select-option value="horizontal">横向</a-select-option>
          <a-select-option value="vertical">纵向</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="当前图标">
        <a-input v-model:value="current.attrs.activeIcon" placeholder="请输入按钮图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('activeIcon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="非当前图标">
        <a-input v-model:value="current.attrs.inactiveIcon" placeholder="请输入按钮图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('inactiveIcon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="完成时图标">
        <a-input v-model:value="current.attrs.finishIcon" placeholder="请输入按钮图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('finishIcon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      <a-form-item label="激活颜色">
        <color-picker v-model:pureColor="current.attrs.activeColor"></color-picker>
      </a-form-item>
      <a-form-item label="非激活颜色">
        <color-picker v-model:pureColor="current.attrs.inactiveColor"></color-picker>
      </a-form-item>
    </a-form>
  </div>

  <choose-icon v-model:visible="visible" @click="choose"></choose-icon>
</template>

<script lang='ts' setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { MinusOutlined } from '@ant-design/icons-vue'
import { ComponentItem } from '@/types'
import ChooseIcon from '@/components/chooseIcon/chooseIcon.vue'


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

let add = () => {
  current.value.children.push({
    type: 'step',
    attrs: { name: '交易完成' }
  })
}
let del = (item: ComponentItem, index: number) => {
  current.value.children.splice(index, 1)
}

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>