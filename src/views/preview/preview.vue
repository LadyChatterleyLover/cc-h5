<template>
  <div class="main">
    <div class="editor">
      <div ref="editorItem" v-if="componentList && componentList.length">
        <div v-for="(item, index) in componentList" :key="index">
          <div class="item">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'
import { ComponentItem } from '@/types'

let store = useStore()

let componentList: ComputedRef<ComponentItem[]> = computed(() => store.state.componentList)



</script>

<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 48px;
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
</style>