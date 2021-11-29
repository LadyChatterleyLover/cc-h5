<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="当前地址">
        <a-select v-model:value="current.value">
          <a-select-option
            v-for="item in current.attrs.list"
            :value="item.id"
            :key="item.id"
          >{{ item.name }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="不可配送提示">
        <a-input v-model:value="current.attrs.disabledText" placeholder="请输入不可配送提示" allowClear></a-input>
      </a-form-item>
      <a-form-item label="底部按钮">
        <a-input v-model:value="current.attrs.addButtonText" placeholder="请输入底部按钮" allowClear></a-input>
      </a-form-item>
      <a-form-item label="默认文案">
        <a-input v-model:value="current.attrs.defaultTagText" placeholder="请输入默认文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="配送地址配置">
        <div
          style="display: flex;margin-bottom: 10px;"
          v-for="(item, index) in current.attrs.list"
          :key="index"
        >
          <a-input v-model:value="item.name" allowClear placeholder="请输入地址名称"></a-input>
          <a-button
            style="margin: 0 5px;"
            @click="edit(item, index, 'list')"
            type="primary"
            shape="circle"
            size="small"
          >
            <template #icon>
              <EditOutlined />
            </template>
          </a-button>
          <a-button @click="del('list', index)" danger shape="circle" size="small">
            <template #icon>
              <MinusOutlined />
            </template>
          </a-button>
        </div>
        <a-button type="primary" size="small" @click="add('list')">添加选项</a-button>
      </a-form-item>
      <a-form-item label="不可配送地址配置">
        <div
          style="display: flex;margin-bottom: 10px;"
          v-for="(item, index) in current.attrs.disabledList"
          :key="index"
        >
          <a-input v-model:value="item.name" allowClear placeholder="请输入地址名称"></a-input>
          <a-button
            style="margin: 0 5px;"
            @click="edit(item, index, 'disabledList')"
            type="primary"
            shape="circle"
            size="small"
          >
            <template #icon>
              <EditOutlined />
            </template>
          </a-button>
          <a-button @click="del('disabledList', index)" danger shape="circle" size="small">
            <template #icon>
              <MinusOutlined />
            </template>
          </a-button>
        </div>
        <a-button type="primary" size="small" @click="add('disabledList')">添加选项</a-button>
      </a-form-item>
    </a-form>
  </div>

  <a-modal v-model:visible="editVisible" title="编辑数据源" @ok="ok" @cancel="cancel">
    <a-form :model="list">
      <a-form-item label="联系人名称">
        <a-input allowClear placeholder="请输入联系人名称" v-model:value="list[currentIndex].name"></a-input>
      </a-form-item>
      <a-form-item label="联系人电话">
        <a-input allowClear placeholder="请输入联系人电话" v-model:value="list[currentIndex].tel"></a-input>
      </a-form-item>
      <a-form-item label="联系人地址">
        <a-input allowClear placeholder="请输入联系人地址" v-model:value="list[currentIndex].address"></a-input>
      </a-form-item>
      <a-form-item label="默认地址">
        <a-switch v-model:checked="list[currentIndex].isDefault"></a-switch>
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
let position = ref<string>('')


let edit = (item: ComponentItem, index: number, val: string) => {
  editVisible.value = true
  currentIndex.value = index
  currentItem.value = cloneDeep(item)
  position.value = val
  console.log(val)
}

let del = (val: string, index: number) => {
  current.value.attrs[val].splice(index, 1)
}

let ok = () => {
  editVisible.value = false
  currentItem.value = null
}

let cancel = () => {
  editVisible.value = false
  current.value.attrs[position.value][currentIndex.value] = currentItem.value
  currentItem.value = null
}

let add = (val: string) => {
  if (val === 'list') {
    current.value.attrs.list.push({
      id: `${current.value.attrs.list.length + 1}`,
      name: '李四',
      tel: '1310000000',
      address: '浙江省杭州市拱墅区莫干山路 50 号',
    })
  } else {
    current.value.attrs.disabledList.push({
      id: `${current.value.attrs.disabledList.length + 1}`,
      name: '王五',
      tel: '1320000000',
      address: '浙江省杭州市滨江区江南大道 15 号',
    })
  }

}

let list = computed(() => position.value === 'list' ? current.value.attrs.list : current.value.attrs.disabledList)

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>