<template>
  <div class="header">
    <div class="logo">
      <div>cc-h5</div>
      <div>
        <a href="https://github.com/LadyChatterleyLover/cc-h5" target="_blank" class="github">
          <img src="https://github.githubassets.com/pinned-octocat.svg" />
        </a>
      </div>
    </div>
    <div class="icons">
      <div class="item" @click="clickItem(item)" v-for="(item, index) in list" :key="index">
        <div class="icon">
          <component :is="item.icon"></component>
        </div>
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PlayCircleOutlined, EyeOutlined, DownloadOutlined, CopyOutlined, DeleteOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { Modal, message } from 'ant-design-vue'
import { computed, ComputedRef } from 'vue'
import { useCopy } from '../../hooks/useCopy'
import { ComponentItem } from '@/types'
import { vueTemplate } from '@/utils/template'
import { saveAs } from 'file-saver'


interface ListItem {
  icon: any,
  name: string
}

let store = useStore()

let componentList: ComputedRef<ComponentItem[]> = computed(() => store.state.componentList)



let list: ListItem[] = [
  {
    icon: PlayCircleOutlined,
    name: '预览'
  },
  {
    icon: EyeOutlined,
    name: '查看json'
  },
  {
    icon: DownloadOutlined,
    name: '导出vue文件'
  },
  {
    icon: CopyOutlined,
    name: '复制代码'
  },
  {
    icon: DeleteOutlined,
    name: '清空'
  }
]

let clickItem = (item: ListItem) => {
  if (item.name === '清空') {
    Modal.confirm({
      title: '确认要清空组件吗?',
      onOk() {
        store.commit('setCurrentComponent', null)
        store.commit('setComponentList', null)
        store.commit('setActiveIndex', null)
        localStorage.removeItem('currentComponent')
        localStorage.removeItem('componentList')
        localStorage.removeItem('activeIndex')
        message.success('清空成功')
      }
    })
  }
  if (item.name === '预览') {
    if (!componentList.value) message.warn('请先生成组件')
    else window.open('/preview', '_blank')
  }
  if (item.name === '导出vue文件') {
    let str = vueTemplate(componentList.value)
    const blob = new Blob([str!], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, `${Date.now()}.vue`)
  }
  if (item.name === '复制代码') {
    let str = vueTemplate(componentList.value)
    useCopy(str!)
  }
  if (item.name === '查看json') {
    let str = JSON.stringify(componentList.value)
    const blob = new Blob([str!], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, `${Date.now()}.json`)
  }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 0 20px;
  .logo {
    display: flex;
    align-items: center;
    line-height: 30px;
    color: #00afff;
    font-weight: 600;
    font-size: 17px;
    .github {
      display: inline-block;
      vertical-align: sub;
      margin-left: 15px;
    }
    img {
      height: 22px;
      position: relative;
      top: -4px;
    }
  }
  .icons {
    display: flex;
    align-items: center;
    .item {
      display: flex;
      align-items: center;
      margin-right: 15px;
      color: #409eff;
      cursor: pointer;
      &:last-child {
        color: #f56c6c;
      }
      .icon {
        margin-right: 8px;
        position: relative;
        top: 1px;
      }
    }
  }
}
</style>
