<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="激活颜色">
        <color-picker v-model:pureColor="current.attrs.activeColor"></color-picker>
      </a-form-item>
      <a-form-item label="未激活颜色">
        <color-picker v-model:pureColor="current.attrs.inactiveColor"></color-picker>
      </a-form-item>
      <a-form-item label="路由模式">
        <a-switch v-model:checked="current.attrs.route"></a-switch>
      </a-form-item>
      <a-form-item label="固定底部">
        <a-switch v-model:checked="current.attrs.fixed"></a-switch>
      </a-form-item>
      <a-form-item label="占位元素" v-if="current.attrs.fixed">
        <a-switch v-model:checked="current.attrs.placeholder"></a-switch>
      </a-form-item>
      <a-form-item label="安全区适配">
        <a-switch v-model:checked="current.attrs.safeAreaInsetTop"></a-switch>
      </a-form-item>
      <a-form-item label="导航配置">
        <div
          style="display: flex;margin-bottom: 10px;"
          v-for="(item, index) in current.children"
          :key="index"
        >
          <a-input v-model:value="item.attrs.name" allowClear placeholder="请输入导航标题"></a-input>
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
  <choose-icon v-model:visible="visible" @click="choose"></choose-icon>
  <a-modal v-model:visible="editVisible" title="编辑数据源" @ok="ok" @cancel="cancel">
    <a-form :model="current.children[currentIndex]">
      <a-form-item label="红点">
        <a-switch v-model:checked="current.children[currentIndex].attrs.dot"></a-switch>
      </a-form-item>
      <a-form-item label="徽标内容">
        <a-input
          allowClear
          placeholder="请输入徽标内容"
          v-model:value="current.children[currentIndex].attrs.badge"
        ></a-input>
      </a-form-item>
      <a-form-item label="路由链接">
        <a-input
          allowClear
          placeholder="请输入路由"
          v-model:value="current.children[currentIndex].attrs.to"
        ></a-input>
      </a-form-item>
      <a-form-item label="跳转链接">
        <a-input
          allowClear
          placeholder="请输入跳转链接"
          v-model:value="current.children[currentIndex].attrs.href"
        ></a-input>
      </a-form-item>
      <a-form-item label="路由链接">
        <a-input
          allowClear
          placeholder="请输入路由"
          v-model:value="current.children[currentIndex].attrs.to"
        ></a-input>
      </a-form-item>
      <a-form-item label="按钮图标">
        <a-input
          v-model:value="current.children[currentIndex].attrs.icon"
          placeholder="请输入按钮图标"
          allowClear
        ></a-input>
        <a-button
          style="margin-top: 20px;"
          type="primary"
          @click="clickBtn('icon')"
          size="small"
        >选择图标</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
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

let add = () => {
  current.value.children.push({
    type: 'tabbar-item',
    attrs: {
      name: '首页',
      icon: 'home-o',
      href: '',
      to: '',
      badge: '',
      dot: false
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