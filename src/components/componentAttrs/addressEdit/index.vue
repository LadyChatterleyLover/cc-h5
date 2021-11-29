<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="联系人姓名">
        <a-input v-model:value="current.attrs.addressInfo.name" placeholder="请输入联系人姓名" allowClear></a-input>
      </a-form-item>
      <a-form-item label="联系人电话">
        <a-input v-model:value="current.attrs.addressInfo.tel" placeholder="请输入联系人电话" allowClear></a-input>
      </a-form-item>
      <a-form-item label="联系人地区">
        <a-input
          v-model:value="current.attrs.addressInfo.areaCode"
          placeholder="请输入联系人地区"
          allowClear
        ></a-input>
      </a-form-item>
      <a-form-item label="邮政编码">
        <a-switch v-model:checked="current.attrs.showPostal"></a-switch>
      </a-form-item>
      <a-form-item label="联系人邮编" v-if="current.attrs.showPostal">
        <a-input
          v-model:value="current.attrs.addressInfo.postalCode"
          placeholder="请输入联系人电话"
          allowClear
        ></a-input>
      </a-form-item>
      <a-form-item label="删除按钮">
        <a-switch v-model:checked="current.attrs.showDelete"></a-switch>
      </a-form-item>
      <a-form-item label="默认地址">
        <a-switch v-model:checked="current.attrs.showSetDefault"></a-switch>
      </a-form-item>
      <a-form-item label="显示地区">
        <a-switch v-model:checked="current.attrs.showArea"></a-switch>
      </a-form-item>
      <a-form-item label="详细地址">
        <a-switch v-model:checked="current.attrs.showDetail"></a-switch>
      </a-form-item>
      <a-form-item label="联系人详细地址" v-if="current.attrs.showDetail">
        <a-input
          v-model:value="current.attrs.addressInfo.addressDetail"
          placeholder="请输入联系人详细地址"
          allowClear
        ></a-input>
      </a-form-item>
      <a-form-item label="禁用地区">
        <a-switch v-model:checked="current.attrs.disableArea"></a-switch>
      </a-form-item>
      <a-form-item label="保存按钮">
        <a-input v-model:value="current.attrs.saveButtonText" placeholder="请输入保存按钮文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="删除文案" v-if="current.attrs.showDelete">
        <a-input v-model:value="current.attrs.deleteButtonText" placeholder="请输入取消按钮文案" allowClear></a-input>
      </a-form-item>
      <a-form-item label="保存动画">
        <a-switch v-model:checked="current.attrs.isSaving"></a-switch>
      </a-form-item>
      <a-form-item label="删除动画" v-if="current.attrs.showDelete">
        <a-switch v-model:checked="current.attrs.isDeleting"></a-switch>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 8 }
let wrapperCol = { span: 14 }


watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>