<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="视频地址">
        <a-input v-model:value="current.attrs.source.src" placeholder="请输入视频地址" allowClear></a-input>
      </a-form-item>
      <a-form-item label="视频海报">
        <a-input v-model:value="current.attrs.options.poster" placeholder="请输入视频海报" allowClear></a-input>
      </a-form-item>
      <a-form-item label="视频音量">
        <a-input-number style="width: 100%" v-model:value="current.attrs.options.volume" ></a-input-number>
      </a-form-item>
      <a-form-item label="循环播放">
        <a-switch v-model:checked="current.attrs.options.loop"></a-switch>
      </a-form-item>
      <a-form-item label="自动播放">
        <a-switch v-model:checked="current.attrs.options.autoplay"></a-switch>
      </a-form-item>
      <a-form-item label="展示操作栏">
        <a-switch v-model:checked="current.attrs.options.controls"></a-switch>
      </a-form-item>
      <a-form-item label="是否静音">
        <a-switch v-model:checked="current.attrs.options.muted"></a-switch>
      </a-form-item>
      <a-form-item label="是否禁用">
        <a-switch v-model:checked="current.attrs.options.disabled"></a-switch>
      </a-form-item>
       <a-form-item label="行内播放">
        <a-switch v-model:checked="current.attrs.options.playsinline"></a-switch>
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