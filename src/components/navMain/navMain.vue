<template>
  <div class="main">
    <div
      class="editor"
      id="cc-h5-editor"
      :style="{ width: width + 'px', height: height + 'px' }"
      @drop="drop"
      @dragover="dragover"
      @click="clickEditor"
    >
      <div ref="editorItem" v-if="componentList && componentList.length">
        <div v-for="(item, index) in componentList" :key="index">
          <a-dropdown :trigger="['contextmenu']">
            <div
              class="item"
              :class="[
                {
                  padding: item.type === 'slider' || item.type === 'progress',
                  active: activeIndex === index,
                  bottom: (activeIndex === index && item.type === 'tabbar' && (item.attrs as any).fixed)
                    || activeIndex === index && item.type === 'goods-action'
                    || activeIndex === index && item.type === 'submit-bar'
                }
              ]"
              @click="clickItem(item, index)"
            >
              <component
                :is="`van-${item.type}`"
                v-model="item.value"
                v-model:current-rate="item.value"
                v-bind="{
                  ...item.attrs,
                  list: item.type !== 'goods-nav' && item.type !== 'contact-list' && item.type !== 'address-list' ? [] : (item.attrs as any).list,
                  iconSize: (item.attrs as any).iconSize + 'px',
                  size: item.type === 'switch' || item.type === 'circle' ? (item.attrs as any).size + 'px'
                    : item.type === 'icon' ? (item.attrs as any).size + (item.attrs as any).company : (item.attrs as any).size
                }"
                :style="{
                  width: (item.attrs as any).width + 'px',
                  height: (item.attrs as any).height + 'px',
                  buttonSize: (item.attrs as any).buttonSize + 'px',
                  inputWidth: (item.attrs as any).inputWidth + 'px',
                  imageSize: (item.attrs as any).imageSize + 'px',
                  barHeight: (item.attrs as any).barHeight + 'px',
                  avatarSize: (item.attrs as any).avatarSize + 'px',
                  rowWidth: (item.attrs as any).rowWidth + '%',
                  titleWidth: (item.attrs as any).titleWidth + '%',
                }"
              >
                <template
                  v-if="item.type === 'button'
                    || item.type === 'divider'
                    || item.type === 'tag'
                    || item.type === 'notice-bar'
                    || item.type === 'loading'
                  "
                >{{ (item.attrs as any).text }}</template>
                <template
                  v-if="item.type === 'swipe' || item.type === 'steps' || item.type === 'radio-group' || item.type === 'tabbar' || item.type === 'checkbox-group'"
                >
                  <component
                    v-for="(child, i) in item.children"
                    :is="`van-${child.type}`"
                    :key="i"
                    v-bind="child.attrs"
                  >
                    <span
                      v-if="item.type === 'tabbar' || item.type === 'steps'"
                    >{{ (child.attrs as any).name }}</span>
                    <span
                      v-if="item.type === 'radio-group' || item.type === 'checkbox-group'"
                    >{{ (child.attrs as any).text }}</span>
                    <img
                      :style="{ width: (item.attrs as any).width + 'px', height: (item.attrs as any).height + 'px' }"
                      v-if="child.type === 'swipe-item'"
                      :src="(child.attrs as any)!.src"
                    />
                  </component>
                </template>
                <template #left v-if="item.type === 'search'">
                  <van-icon
                    :name="(item.attrs as any).left.slice(5)"
                    v-if="(item.attrs as any).left && (item.attrs as any).left.startsWith('icon-')"
                  ></van-icon>
                  <span v-else>{{ (item.attrs as any).left }}</span>
                </template>
                <template #label v-if="item.type === 'search' || item.type === 'field'">
                  <span>{{ (item.attrs as any).label }}</span>
                </template>
                <template #left-icon v-if="item.type === 'search' || item.type === 'field'">
                  <van-icon
                    :name="(item.attrs as any).leftIcon.slice(5)"
                    v-if="(item.attrs as any).leftIcon && (item.attrs as any).leftIcon.startsWith('icon-')"
                  ></van-icon>
                  <span v-else>{{ (item.attrs as any).leftIcon }}</span>
                </template>
                <template #right-icon v-if="item.type === 'search' || item.type === 'field'">
                  <van-icon
                    :name="(item.attrs as any).rightIcon.slice(5)"
                    v-if="(item.attrs as any).rightIcon && (item.attrs as any).rightIcon.startsWith('icon-')"
                  ></van-icon>
                  <span v-else>{{ (item.attrs as any).rightIcon }}</span>
                </template>
                <template #value v-if="item.type === 'cell'">{{ (item.attrs as any).value }}</template>
                <template #right-icon v-if="item.type === 'cell'">
                  <van-icon
                    v-if="(item.attrs as any).isLink"
                    style="line-height: inherit;"
                    :name="(item.attrs as any).arrowDirection === 'right' ? 'arrow' : `arrow-${(item.attrs as any).arrowDirection}`"
                  ></van-icon>
                  <van-icon
                    v-else
                    style="line-height: inherit;"
                    :name="(item.attrs as any).rightIcon"
                  ></van-icon>
                </template>
                <template #extra v-if="item.type === 'cell'">{{ (item.attrs as any).extra }}</template>
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
      <a-popover title="设置画布尺寸" placement="right" :visible="visible">
        <template #content>
          <div class="phone">
            <div
              @click="clickPhoneItem(index)"
              class="phone-item"
              v-for="(item, index) in phones"
              :key="index"
            >
              <div style="width: 20px;height: 40px;border: 1px solid #eee;"></div>
              <div style="margin-top: 8px;">{{ item.name }}</div>
            </div>
          </div>
          <div style="margin-top: 20px;">
            <h4>自定义尺寸</h4>
            <a-form>
              <a-form-item label="宽">
                <a-input-number
                  style="width: 100%"
                  v-model:value="inputWidth"
                  placeholder="请输入画布宽度"
                ></a-input-number>
              </a-form-item>
              <a-form-item label="高">
                <a-input-number
                  style="width: 100%"
                  v-model:value="inputHeight"
                  placeholder="请输入画布高度"
                ></a-input-number>
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 14, offset: 3 }">
                <a-button @click.stop="update" type="primary" size="small">更新画布</a-button>
              </a-form-item>
            </a-form>
          </div>
        </template>
        <div class="model">
          <a-button type="primary" @click.stop="visible = true">
            <template #icon>
              <DesktopOutlined />
            </template>
          </a-button>
        </div>
      </a-popover>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { computed, ComputedRef, watch, ref } from 'vue'
import { useStore } from 'vuex'
import { ComponentItem } from '@/types'
import { message } from 'ant-design-vue'
import { DesktopOutlined } from '@ant-design/icons-vue'

let store = useStore()

let componentList: ComputedRef<ComponentItem[]> = computed(() => store.state.componentList)
let currentComponent = computed(() => store.state.currentComponent)
let activeIndex = computed(() => store.state.activeIndex)
let editorItem = ref<HTMLDivElement | null>(null)
let visible = ref<boolean>(false)
let width = ref<number>(375)
let inputWidth = ref<number>(375)
let height = ref<number>(667)
let inputHeight = ref<number>(667)


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
  if (!currentComponent.value) {
    message.warning('请先选择组件')
    return
  } else {
    componentList.value.push(item)
    localStorage.setItem('currentComponent', JSON.stringify(item))
    store.commit('setCurrentComponent', item)
    localStorage.setItem('componentList', JSON.stringify(componentList.value))
    store.commit('setComponentList', componentList.value)
    localStorage.setItem('activeIndex', String(componentList.value.length - 1))
    store.commit('setActiveIndex', componentList.value.length - 1)
  }
}

let del = (index: number) => {
  if (!currentComponent.value) {
    message.warning('请先选择组件')
    return
  } else {
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
let clickPhoneItem = (index: number) => {
  if (index === 0) {
    inputWidth.value = 375
    width.value = 375
    inputHeight.value = 667
    height.value = 667
  } else {
    inputWidth.value = 414
    width.value = 414
    inputHeight.value = 736
    height.value = 736
  }
  visible.value = false
}



let phones = ref<{ name: string }[]>([
  {
    name: 'iphone6/7/8'
  },
  {
    name: 'iphone6/7/8plus'
  },
])

let update = () => {
  width.value = inputWidth.value
  height.value = inputHeight.value
  visible.value = false
}

watch(() => currentComponent.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)

  if (componentList.value && componentList.value.length) {
    componentList.value[activeIndex.value] = val
    localStorage.setItem('componentList', JSON.stringify(componentList.value))
    store.commit('setComponentList', componentList.value)
  }
}, { deep: true, })
</script>

<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
.editor {
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  .model {
    position: absolute;
    top: 0;
    right: -80px;
  }
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
  .van-tabbar {
    background: transparent !important;
  }
}
.padding {
  padding: 15px 0;
}
.phone {
  display: flex;
  align-items: center;
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>