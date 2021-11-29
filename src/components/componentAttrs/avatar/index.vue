<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="头像链接">
        <a-input v-model:value="current.attrs.src" placeholder="请输入头像链接或图标名称" allowClear></a-input>
      </a-form-item>
      <a-form-item label="按钮尺寸">
        <a-select v-model:value="current.attrs.size">
          <a-select-option value>正常</a-select-option>
          <a-select-option value="large">大号</a-select-option>
          <a-select-option value="small">小号</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="头像形状">
        <a-switch v-model:checked="current.attrs.round"></a-switch>
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