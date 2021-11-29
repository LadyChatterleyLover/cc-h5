<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="联系人姓名">
        <a-input v-model:value="current.attrs.contactInfo.name" placeholder="请输入联系人姓名" allowClear></a-input>
      </a-form-item>
      <a-form-item label="联系人电话">
        <a-input v-model:value="current.attrs.contactInfo.tel" placeholder="请输入联系人电话" allowClear></a-input>
      </a-form-item>
      <a-form-item label="编辑联系人">
        <a-switch v-model:checked="current.attrs.isEdit"></a-switch>
      </a-form-item>
      <a-form-item label="保存动画">
        <a-switch v-model:checked="current.attrs.isSaving"></a-switch>
      </a-form-item>
      <a-form-item label="删除动画" v-if="current.attrs.isEdit">
        <a-switch v-model:checked="current.attrs.isDeleting"></a-switch>
      </a-form-item>
      <a-form-item label="默认联系人">
        <a-switch v-model:checked="current.attrs.showSetDefault"></a-switch>
      </a-form-item>
      <a-form-item label="默认文案" v-if="current.attrs.showSetDefault">
        <a-input v-model:value="current.attrs.setDefaultLabel" placeholder="请输入默认文案" allowClear></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }


watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>