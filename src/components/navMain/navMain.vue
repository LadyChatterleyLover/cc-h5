<template>
  <div class="main">
    <div class="editor" id="cc-h5-editor" @drop="drop" @dragover="dragover" @click="clickEditor">
      <div ref="editorItem" v-if="componentList && componentList.length">
        <div v-for="(item, index) in componentList" :key="index">
          <a-dropdown :trigger="['contextmenu']">
            <div
              class="item"
              :class="{
                active: activeIndex === index,
                bottom: (activeIndex === index && item.type === 'tabbar' && (item.attrs as any).bottom)
                  || activeIndex === index && item.type === 'goods-action'
              }"
              @click="clickItem(item, index)"
            >
              <component
                :is="`nut-${item.type}`"
                v-model="item.value"
                v-bind="{
                  ...item.attrs,
                  list: item.type !== 'goods-nav' ? [] : (item.attrs as any).list,
                  size: item.type === 'tabbar' ? (item.attrs as any).size + 'px'
                    : item.type === 'icon' ? (item.attrs as any).size + (item.attrs as any).company : (item.attrs as any).size
                }"
                :style="{
                  width: (item.attrs as any).width + 'px',
                  height: (item.attrs as any).height + 'px',
                }"
              >
                <div
                  v-if="item.type === 'noticebar' && (item.attrs as any).direction === 'vertical'"
                  v-for="(item,index) in (item.attrs as any).list"
                  :key="index"
                >{{ item.text }}</div>
                <template
                  v-if="item.type === 'button'
                    || item.type === 'divider'
                    || item.type === 'tag'
                    || (item.type === 'circleprogress' && (item.attrs as any).isAuto)
                  "
                >{{ (item.attrs as any).text }}</template>
                <template v-if="item.type === 'swiper' || item.type === 'tabbar'">
                  <component
                    v-for="(child, i) in item.children"
                    :is="`nut-${child.type}`"
                    :key="i"
                    v-bind="child.attrs"
                  >
                    <img
                      :style="{ width: (item.attrs as any).width + 'px', height: (item.attrs as any).height + 'px' }"
                      v-if="child.type === 'swiper-item'"
                      :src="(child.attrs as any)!.src"
                    />
                  </component>
                </template>
                <template #leftin v-if="item.type === 'searchbar'">
                  <nut-icon
                    :name="(item.attrs as any).leftin.slice(5)"
                    v-if="(item.attrs as any).leftin && (item.attrs as any).leftin.startsWith('icon-')"
                  ></nut-icon>
                  <span v-else>{{ (item.attrs as any).leftin }}</span>
                </template>
                <template #leftout v-if="item.type === 'searchbar'">
                  <nut-icon
                    :name="(item.attrs as any).leftout.slice(5)"
                    v-if="(item.attrs as any).leftout && (item.attrs as any).leftout.startsWith('icon-')"
                  ></nut-icon>
                  <span v-else>{{ (item.attrs as any).leftout }}</span>
                </template>
                <template #rightin v-if="item.type === 'searchbar'">
                  <nut-icon
                    :name="(item.attrs as any).rightin.slice(5)"
                    v-if="(item.attrs as any).rightin && (item.attrs as any).rightin.startsWith('icon-')"
                  ></nut-icon>
                  <span v-else>{{ (item.attrs as any).rightin }}</span>
                </template>
                <template #rightout v-if="item.type === 'searchbar'">
                  <nut-icon
                    :name="(item.attrs as any).rightout.slice(5)"
                    v-if="(item.attrs as any).rightout && (item.attrs as any).rightout.startsWith('icon-')"
                  ></nut-icon>
                  <span v-else>{{ (item.attrs as any).rightout }}</span>
                </template>
              </component>
            </div>
            <template #overlay>
              <a-menu @click="clickAction">
                <a-menu-item key="copy">复制</a-menu-item>
                <a-menu-item key="del">删除</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, ComputedRef, watch, ref } from 'vue'
import { useStore } from 'vuex'
import { ComponentItem } from '@/types'

let store = useStore()

let componentList: ComputedRef<ComponentItem[]> = computed(() => store.state.componentList)
let currentComponent = computed(() => store.state.currentComponent)
let activeIndex = computed(() => store.state.activeIndex)
let editorItem = ref<HTMLDivElement | null>(null)

let value = ref(40)
let dragover = (e: DragEvent) => {
  e.preventDefault()
}
let drop = (e: DragEvent) => {
  let item = JSON.parse(e.dataTransfer!.getData('item'))
  localStorage.setItem('currentComponent', JSON.stringify(item))
  store.commit('setCurrentComponent', item)
  if (componentList.value && componentList.value.length) {
    componentList.value.push(item)
    localStorage.setItem('componentList', JSON.stringify(componentList.value))
    store.commit('setComponentList', componentList.value)
    localStorage.setItem('activeIndex', String(componentList.value.length - 1))
    store.commit('setActiveIndex', componentList.value.length - 1)
  } else {
    let arr = []
    arr.push(item)
    localStorage.setItem('componentList', JSON.stringify(arr))
    store.commit('setComponentList', arr)
    localStorage.setItem('activeIndex', '0')
    store.commit('setActiveIndex', 0)
  }
}

let clickItem = (item: ComponentItem, index: number) => {
  localStorage.setItem('currentComponent', JSON.stringify(item))
  store.commit('setCurrentComponent', item)
  localStorage.setItem('activeIndex', String(index))
  store.commit('setActiveIndex', index)
}

let copy = (item: ComponentItem) => {
  componentList.value.push(item)
  localStorage.setItem('currentComponent', JSON.stringify(item))
  store.commit('setCurrentComponent', item)
  localStorage.setItem('componentList', JSON.stringify(componentList.value))
  store.commit('setComponentList', componentList.value)
  localStorage.setItem('activeIndex', String(componentList.value.length - 1))
  store.commit('setActiveIndex', componentList.value.length - 1)
}

let del = (index: number) => {
  if (componentList.value.length !== 1) {
    componentList.value.splice(index, 1)
    localStorage.setItem('currentComponent', JSON.stringify(componentList.value[componentList.value.length - 1]))
    store.commit('setCurrentComponent', componentList.value[componentList.value.length - 1])
    localStorage.setItem('componentList', JSON.stringify(componentList.value))
    store.commit('setComponentList', componentList.value)
    localStorage.setItem('activeIndex', String(componentList.value.length - 1))
    store.commit('setActiveIndex', componentList.value.length - 1)
  } else {
    store.commit('setComponentList', null)
    store.commit('setCurrentComponent', null)
    store.commit('setActiveIndex', null)
    localStorage.removeItem('componentList')
    localStorage.removeItem('currentComponent')
    localStorage.removeItem('activeIndex')
  }
}

let clickAction = ({ key }: { key: string }) => {
  if (key === 'copy') {
    copy(currentComponent.value)
  } else {
    del(activeIndex.value)
  }
}

let clickEditor = (e: any) => {
  if (!editorItem.value!.contains(e.target)) {
    store.commit('setActiveIndex', null)
    localStorage.removeItem('activeIndex')
    store.commit('setCurrentComponent', null)
    localStorage.removeItem('currentComponent')
  }
}


watch(() => currentComponent.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)

  if (componentList.value && componentList.value.length) {
    componentList.value[activeIndex.value] = val
    localStorage.setItem('componentList', JSON.stringify(componentList.value))
    store.commit('setComponentList', componentList.value)
  }
}, { deep: true })
</script>

<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
.editor {
  height: 667px;
  width: 375px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.item {
  position: relative;
  border: 2px solid transparent;
  cursor: pointer;
  .btn {
    display: flex;
    position: absolute;
    top: -10px;
    right: 10px;
    z-index: 999;
    &-item {
      margin-right: 12px;
    }
  }
}
.active {
  border-color: blue !important;
}
.bottom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 50px;
  z-index: 999;
  margin-bottom: 0 !important;
  border: 2px solid blue;
  .nut-tabbar {
    background: transparent !important;
  }
}
</style>