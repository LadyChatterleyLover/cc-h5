<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="价格数量">
        <a-input-number
          style="width: 100%"
          v-model:value="current.attrs.price"
          placeholder="请输入价格数量"
          allowClear
        ></a-input-number>
      </a-form-item>
      <a-form-item label="symbol符号">
        <a-switch v-model:checked="current.attrs.needSymbol"></a-switch>
      </a-form-item>
      <a-form-item label="符号类型" v-if="current.attrs.needSymbol">
        <a-input v-model:value="current.attrs.symbol" placeholder="请输入符号类型" allowClear></a-input>
      </a-form-item>
      <a-form-item label="小数位数">
        <a-input-number
          :min="0"
          style="width: 100%"
          v-model:value="current.attrs.decimalDigits"
          placeholder="请输入小数位数"
          allowClear
        ></a-input-number>
      </a-form-item>
      <a-form-item label="千分号形式">
        <a-switch v-model:checked="current.attrs.thousands"></a-switch>
      </a-form-item>
      <a-form-item label="符号位置">
        <a-select v-model:value="current.attrs.position">
          <a-select-option value="before">前面</a-select-option>
          <a-select-option value="after">后面</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="价格尺寸">
        <a-select v-model:value="current.attrs.size">
          <a-select-option value="normal">正常</a-select-option>
          <a-select-option value="large">大号</a-select-option>
          <a-select-option value="small">小号</a-select-option>
        </a-select>
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