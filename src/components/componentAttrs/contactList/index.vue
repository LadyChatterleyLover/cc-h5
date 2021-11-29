<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="当前联系人">
        <a-select v-model:value="current.value">
          <a-select-option
            v-for="item in current.attrs.list"
            :value="item.id"
            :key="item.id"
          >{{ item.name }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="新建按钮">
        <a-input v-model:value="current.attrs.addText" placeholder="请输入新建按钮" allowClear></a-input>
      </a-form-item>
      <a-form-item label="默认文案">
        <a-input v-model:value="current.attrs.defaultTagText" placeholder="请输入默认文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="联系人配置">
        <div
          style="display: flex;margin-bottom: 10px;"
          v-for="(item, index) in current.attrs.list"
          :key="index"
        >
          <a-input v-model:value="item.name" allowClear placeholder="请输入联系人名称"></a-input>
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
    <a-form :model="current.attrs.list[currentIndex]">
      <a-form-item label="联系人名称">
        <a-input
          allowClear
          placeholder="请输入联系人名称"
          v-model:value="current.attrs.list[currentIndex].name"
        ></a-input>
      </a-form-item>
      <a-form-item label="联系人电话">
        <a-input
          allowClear
          placeholder="请输入联系人电话"
          v-model:value="current.attrs.list[currentIndex].tel"
        ></a-input>
      </a-form-item>
      <a-form-item label="默认联系人">
        <a-switch v-model:checked="current.attrs.list[currentIndex].isDefault"></a-switch>
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

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }
let editVisible = ref<boolean>(false)
let currentItem = ref<any>()
let currentIndex = ref<number>(0)


let edit = (item: ComponentItem, index: number) => {
  editVisible.value = true
  currentIndex.value = index
  currentItem.value = cloneDeep(item)
}

let del = (item: ComponentItem, index: number) => {
  current.value.attrs.list.splice(index, 1)
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
  current.value.attrs.list.push({
    id: `${current.value.attrs.list + 1}`,
    name: '李四',
    tel: '1310000000',
    isDefault: false
  })
}



watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>