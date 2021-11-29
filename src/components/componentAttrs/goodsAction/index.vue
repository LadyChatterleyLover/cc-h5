<template>
  <div style="padding: 20px 12px" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="选项配置">
        <div
          style="display: flex;margin-bottom: 10px;"
          v-for="(item, index) in current.attrs.goodsActionOptions"
          :key="index"
        >
          <a-input v-model:value="item.text" allowClear placeholder="请输入选项标题"></a-input>
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
          <a-button @click="del('goodsActionOptions', index)" danger shape="circle" size="small">
            <template #icon>
              <MinusOutlined />
            </template>
          </a-button>
        </div>
        <a-button type="primary" size="small" @click="add('goodsActionOptions')">添加选项</a-button>
      </a-form-item>
      <a-form-item label="按钮标题">
        <div
          style="display: flex"
          v-for="(item, index) in current.attrs.goodsActionButton"
          :key="index"
        >
          <a-input style="margin-bottom: 5px" v-model:value="item.text"></a-input>
          <a-button
            style="margin-left: 5px"
            @click="del('goodsActionButton', index)"
            danger
            shape="circle"
            size="small"
          >
            <template #icon>
              <MinusOutlined />
            </template>
          </a-button>
        </div>
        <a-button
          @click="add('goodsActionButton')"
          style="margin-top: 5px"
          type="primary"
          size="small"
        >添加数据</a-button>
      </a-form-item>
      <a-form-item label="按钮颜色">
        <div
          style="margin-bottom: 10px;"
          v-for="(item, index) in current.attrs.goodsActionButton"
          :key="index"
        >
          <color-picker v-model:pureColor="item.background"></color-picker>
        </div>
      </a-form-item>
    </a-form>
  </div>
  <choose-icon v-model:visible="visible" @click="choose"></choose-icon>
  <a-modal v-model:visible="editVisible" title="编辑数据源" @ok="ok" @cancel="cancel">
    <a-form
      v-if="current.attrs.goodsActionOptions[currentIndex]"
      :model="current.attrs.goodsActionOptions[currentIndex]"
    >
      <a-form-item label="导航标题">
        <a-input
          allowClear
          placeholder="请导航标题"
          v-model:value="current.attrs.goodsActionOptions[currentIndex].text"
        ></a-input>
      </a-form-item>
      <a-form-item label="红点">
        <a-switch v-model:checked="current.attrs.goodsActionOptions[currentIndex].dot"></a-switch>
      </a-form-item>
      <a-form-item label="徽标内容">
        <a-input
          allowClear
          placeholder="请输入徽标内容"
          v-model:value="current.attrs.goodsActionOptions[currentIndex].badge"
        ></a-input>
      </a-form-item>
      <a-form-item label="按钮图标">
        <a-input
          v-model:value="current.attrs.goodsActionOptions[currentIndex].icon"
          placeholder="请输入按钮图标"
          allowClear
        ></a-input>
        <a-button style="margin-top: 20px;" type="primary" @click="clickBtn" size="small">选择图标</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue"
import { useStore } from "vuex"
import { MinusOutlined, EditOutlined } from "@ant-design/icons-vue"
import ChooseIcon from '@/components/chooseIcon/chooseIcon.vue'
import { ComponentItem } from "@/types"
import cloneDeep from "lodash/cloneDeep"


let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }
let visible = ref<boolean>(false)
let editVisible = ref<boolean>(false)
let currentItem = ref<any>()
let currentIndex = ref<number>(0)


let edit = (item: ComponentItem, index: number) => {
  editVisible.value = true
  currentIndex.value = index
  currentItem.value = cloneDeep(item)
}

let del = (val: string, index: number) => {
  current.value.attrs[val].splice(index, 1)
}

let add = (val: string) => {
  if (val === 'goodsActionOptions') {
    current.value.attrs.goodsActionOptions.push({
      text: '购物车',
      icon: 'cart',
    })
  } else {
    current.value.attrs.goodsActionButton.push({
      text: '立即购买',
      background: '#ee0a24'
    })
  }
}

let clickBtn = () => {
  visible.value = true
}

let choose = (item: string) => {
  current.value.attrs.goodsActionOptions[currentIndex.value].icon = item
}

let ok = () => {
  editVisible.value = false
  currentItem.value = null
}

let cancel = () => {
  editVisible.value = false
  current.value.attrs.goodsActionOptions[currentIndex.value] = currentItem.value
  currentItem.value = null
}

watch(
  () => current.value,
  (val) => {
    localStorage.setItem("currentComponent", JSON.stringify(val))
    store.commit("setCurrentComponent", val)
  },
  { deep: true }
)
</script>

<style lang="scss" scoped></style>
