<template>
  <div style="padding: 20px 12px" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="操作标题">
        <template v-for="(item, index) in current.attrs.goodsActionOptions" :key="index">
          <div style="display: flex">
            <a-input style="margin-bottom: 5px" v-model:value="item.text"></a-input>
            <a-button
              style="margin-left: 5px"
              @click="del('goodsActionOptions', index)"
              danger
              shape="circle"
              size="small"
            >
              <template #icon>
                <MinusOutlined />
              </template>
            </a-button>
          </div>
          <a-form-item label="徽标" v-if="!item.dot">
            <a-input-number style="width: 100%" :min="0" v-model:value="item.info"></a-input-number>
          </a-form-item>
          <a-form-item label="红点" v-if="!item.info">
            <a-switch v-model:checked="item.dot"></a-switch>
          </a-form-item>
          <a-divider></a-divider>
        </template>
        <a-button
          @click="add('goodsActionOptions')"
          style="margin-top: 5px"
          type="primary"
          size="small"
        >添加数据</a-button>
      </a-form-item>
      <a-form-item label="操作图标">
        <div
          style="display: flex"
          v-for="(item, index) in current.attrs.goodsActionOptions"
          :key="index"
        >
          <a-input style="margin-bottom: 5px" v-model:value="item.icon"></a-input>
          <a-button
            style="margin-left: 5px;position: relative;top: 2px;"
            @click="clickBtn(index)"
            type="primary"
            shape="circle"
            size="small"
          >
            <template #icon>
              <EditOutlined />
            </template>
          </a-button>
        </div>
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
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue"
import { useStore } from "vuex"
import { MinusOutlined, EditOutlined } from "@ant-design/icons-vue"
import ChooseIcon from '@/components/chooseIcon/chooseIcon.vue'


let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }
let visible = ref<boolean>(false)
let currentIndex = ref<number>(-1)


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

let clickBtn = (index: number) => {
  currentIndex.value = index
  visible.value = true
}

let choose = (item: string) => {
  current.value.attrs.goodsActionOptions[currentIndex.value].icon = item
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
