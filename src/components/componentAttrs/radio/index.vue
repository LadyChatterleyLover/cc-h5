<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="文本位置">
        <a-select v-model:value="current.attrs.textPosition">
          <a-select-option value="right">右侧</a-select-option>
          <a-select-option value="left">左侧</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="横纵方向">
        <a-select v-model:value="current.attrs.direction">
          <a-select-option value="vertical">竖向</a-select-option>
          <a-select-option value="horizontal">横向</a-select-option>
        </a-select>
      </a-form-item>
      <!-- 
        <a-form-item label="单选框图标">
        <a-input v-model:value="current.attrs.iconName" placeholder="请输入单选框图标" allowClear></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('iconName')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
      -->
      <a-form-item label="选项配置">
        <div
          style="display: flex;margin-bottom: 10px;"
          v-for="(item, index) in current.children"
          :key="index"
        >
          <a-input v-model:value="item.attrs.name" allowClear placeholder="请输入选项名称"></a-input>
          <a-button @click="del(item, index)" danger shape="circle" size="small">
            <template #icon>
              <MinusOutlined />
            </template>
          </a-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
  <choose-icon v-model:visible="visible" @click="choose"></choose-icon>
</template>

<script lang='ts' setup>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import ChooseIcon from '@/components/chooseIcon/chooseIcon.vue'
import { MinusOutlined, EditOutlined } from '@ant-design/icons-vue'
import { ComponentItem } from '@/types'
import cloneDeep from 'lodash/cloneDeep'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }
let visible = ref<boolean>(false)
let editVisible = ref<boolean>(false)
let position = ref<string>('')
let currentItem = ref<any>()
let currentIndex = ref<number>(0)

let clickBtn = (val: string) => {
  position.value = val
  visible.value = true
}

let choose = (item: string) => {
  (currentItem.value.attrs as any)[position.value] = item
  position.value = ''
}

let edit = (item: ComponentItem, index: number) => {
  editVisible.value = true
  currentIndex.value = index
  currentItem.value = cloneDeep(item)
}

let del = (item: ComponentItem, index: number) => {
  current.value.children.splice(index, 1)
}

let ok = () => {
  editVisible.value = false
  currentItem.value = null
}

let cancel = () => {
  editVisible.value = false
  current.value.children[currentIndex.value] = currentItem.value
  currentItem.value = null
}
watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>