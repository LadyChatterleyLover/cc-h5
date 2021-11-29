<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="当前选中项">
        <a-input v-model:value="current.value" placeholder="请输入当前选中项标识" allowClear></a-input>
      </a-form-item>
      <a-form-item label="横纵方向">
        <a-select v-model:value="current.attrs.direction">
          <a-select-option value="vertical">竖向</a-select-option>
          <a-select-option value="horizontal">横向</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="所有图标尺寸">
        <a-input-number
          :min="0"
          style="width: 100%"
          v-model:value="current.attrs.iconSize"
          placeholder="请输入所有图标尺寸"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="图标选中颜色">
        <color-picker v-model:pureColor="current.attrs.checkedColor"></color-picker>
      </a-form-item>
      <a-form-item label="禁用所有">
        <a-switch v-model:checked="current.attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="选项配置">
        <div
          style="display: flex;margin-bottom: 10px;"
          v-for="(item, index) in current.children"
          :key="index"
        >
          <a-input v-model:value="item.attrs.text" allowClear placeholder="请输入选项名称"></a-input>
          <a-button
            style="margin: 0 5px;"
            @click="edit(item, index)"
            type="primary"
            shape="circle"
            size="small"
          >
            <template #icon>
              <EditOutlined />
            </template>
          </a-button>
          <a-button @click="del(item, index)" danger shape="circle" size="small">
            <template #icon>
              <MinusOutlined />
            </template>
          </a-button>
        </div>
        <a-button type="primary" size="small" @click="add">添加选项</a-button>
      </a-form-item>
    </a-form>
  </div>
  <a-modal v-model:visible="editVisible" title="编辑数据源" @ok="ok" @cancel="cancel">
    <a-form
      :label-col="labelCol1"
      :wrapper-col="wrapperCol1"
      :model="current.children[currentIndex]"
    >
      <a-form-item label="标识符">
        <a-input
          v-model:value="current.children[currentIndex].attrs.name"
          placeholder="请输入当前选项标识"
          allowClear
        ></a-input>
      </a-form-item>
      <a-form-item label="选项文案">
        <a-input
          v-model:value="current.children[currentIndex].attrs.text"
          placeholder="请输入当前选项文案"
          allowClear
        ></a-input>
      </a-form-item>
      <a-form-item label="单选框形状">
        <a-select placeholder="请选择单选框形状" v-model:value="current.children[currentIndex].attrs.shape">
          <a-select-option value="round">圆形</a-select-option>
          <a-select-option value="square">方形</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="文本位置">
        <a-select
          placeholder="请选择文本位置"
          v-model:value="current.children[currentIndex].attrs.labelPosition"
        >
          <a-select-option value="left">左侧</a-select-option>
          <a-select-option value="right">右侧</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="禁用状态">
        <a-switch v-model:checked="current.children[currentIndex].attrs.disabled"></a-switch>
      </a-form-item>
      <a-form-item label="禁用文本">
        <a-switch v-model:checked="current.children[currentIndex].attrs.labelDisabled"></a-switch>
      </a-form-item>
      <a-form-item label="图标尺寸">
        <a-input-number
          :min="0"
          style="width: 100%"
          v-model:value="current.children[currentIndex].attrs.iconSize"
          placeholder="请输入图标尺寸"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="图标选中颜色">
        <color-picker v-model:pureColor="current.children[currentIndex].attrs.checkedColor"></color-picker>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang='ts' setup>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'
import { MinusOutlined, EditOutlined } from '@ant-design/icons-vue'
import { ComponentItem } from '@/types'
import cloneDeep from 'lodash/cloneDeep'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 8 }
let wrapperCol = { span: 14 }
let labelCol1 = { span: 6 }
let wrapperCol1 = { span: 18 }
let editVisible = ref<boolean>(false)
let currentItem = ref<any>()
let currentIndex = ref<number>(0)


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

let add = () => {
  current.value.children.push({
    type: 'radio',
    attrs: {
      name: `${current.value.children.length + 1}`,
      shape: 'round',
      disabled: false,
      labelDisabled: false,
      labelPosition: 'left',
      iconSize: 20,
      checkedColor: '#1989fa',
      text: `选项${current.value.children.length + 1}`
    }
  })
}

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>