<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="自定义图片">
        <a-switch v-model:checked="flag"></a-switch>
      </a-form-item>
      <a-form-item label="图片类型" v-if="!flag">
        <a-select v-model:value="current.attrs.image">
          <a-select-option value="default">默认</a-select-option>
          <a-select-option value="error">通用错误</a-select-option>
          <a-select-option value="network">网络错误</a-select-option>
          <a-select-option value="search">搜索提示</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="图片路径" v-if="flag">
        <a-input v-model:value="current.attrs.image" placeholder="请输入图片路径" allowClear></a-input>
      </a-form-item>
      <a-form-item label="文本提示">
        <a-input v-model:value="current.attrs.description" placeholder="请输入文本提示" allowClear></a-input>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { computed, watch, ref } from 'vue'
import { useStore } from 'vuex'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }
let flag = ref<boolean>(false)


watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })

watch(() => flag.value, val => {
  if (val) current.value.attrs.image = 'https://img.yzcdn.cn/vant/custom-empty-image.png'
  else current.value.attrs.image = 'default'
})
</script>

<style lang='scss' scoped>
</style>