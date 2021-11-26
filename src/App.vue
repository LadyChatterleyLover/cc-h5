<template>
  <a-config-provider :locale="zhCN">
    <router-view></router-view>
  </a-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
</script>

<style lang='scss'>
html,
body,
#app,
.ant-tabs-vertical {
  height: 100%;
  overflow-x: hidden;
}
</style>