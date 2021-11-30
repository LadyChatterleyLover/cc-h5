<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <nav-header></nav-header>
      </div>
      <div class="edit">
        <div class="left">
          <nav-left></nav-left>
        </div>
        <div class="main">
          <nav-main></nav-main>
        </div>
      </div>
    </div>
    <div class="right">
      <nav-right></nav-right>
    </div>
  </div>
  <a-modal v-model:visible="visible" title="温馨提示">
    <div>
      因为该项目是基于vant搭建，并且封装了很多内部组件，
      所以需要在我们提供的项目模板里面开发，请点击左上角下载项目模板获得基础模板代码。
    </div>
    <template #footer>
      <a-button @click="cancel">不再提示</a-button>
      <a-button type="primary" @click="ok">知道了</a-button>
    </template>
  </a-modal>
</template>

<script lang='ts' setup>
import navHeader from '../components/navHeader/navHeader.vue'
import navLeft from '../components/navLeft/navLeft.vue'
import navRight from '../components/navRight/navRight.vue'
import navMain from '../components/navMain/navMain.vue'
import { ref, onMounted } from 'vue'

let visible = ref<boolean>(false)

let cancel = () => {
  localStorage.setItem('cc-h5-tips', '0')
  visible.value = false
}
let ok = () => {
  visible.value = false
}

onMounted(() => {
  if (localStorage.getItem('cc-h5-tips') !== '0' || !localStorage.getItem('cc-h5-tips')) {
    visible.value = true
  } else {
    visible.value = false
  }
})
</script>

<style lang='scss' scoped>
.container {
  height: 100%;
  display: flex;
  overflow: hidden;
  .header {
    height: 50px;
  }
  .content {
    height: 100%;
    flex: 1;
    .edit {
      display: flex;
      height: 100%;
    }
    .main {
      flex: 1;
    }
    .left {
      width: 380px;
    }
  }
  .right {
    width: 380px;
  }
}
</style>