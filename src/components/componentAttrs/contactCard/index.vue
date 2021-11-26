<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="卡片模式">
        <a-select v-model:value="current.attrs.type">
          <a-select-option value="add">添加</a-select-option>
          <a-select-option value="edit">编辑</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="添加提示" v-if="current.attrs.type === 'add'">
        <a-input v-model:value="current.attrs.addText" placeholder="请输入添加提示" allowClear></a-input>
      </a-form-item>
      <template v-if="current.attrs.type === 'edit'">
        <a-form-item label="联系人名称">
          <a-input v-model:value="current.attrs.name" placeholder="请输入联系人名称" allowClear></a-input>
        </a-form-item>
        <a-form-item label="联系人电话">
          <a-input
            type="number"
            v-model:value="current.attrs.tel"
            placeholder="请输入联系人电话"
            allowClear
          ></a-input>
        </a-form-item>
        <a-form-item label="可编辑">
          <a-switch v-model:checked="current.attrs.editable"></a-switch>
        </a-form-item>
        <a-form-item label="编辑图标">
          <a-input v-model:value="current.attrs.icon" placeholder="请输入按钮图标" allowClear></a-input>
          <a-button
            style="margin-top: 20px;"
            type="primary"
            @click="clickBtn('icon')"
            size="small"
          >选择图标</a-button>
        </a-form-item>
      </template>
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

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }
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


watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>