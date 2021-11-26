<template>
  <a-modal v-model:visible="visible" title="选择图标" :footer="null">
    <div class="container">
      <div
        class="item"
        v-for="(item, index) in icons"
        :key="index"
        @click="clickItem(item)"
      >
        <div class="text">
          <nut-icon :name="item" size="20px"></nut-icon>
        </div>
        <div class="icon">{{ item }}</div>
      </div>
    </div>
  </a-modal>
</template>

<script lang='ts' setup>
import { watch, ref } from 'vue'
import { icons } from '../../config/icon'


let props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

let emits = defineEmits(['update:visible', 'click'])

let dialogVisible = ref(props.visible)

// 点击图标
let clickItem = (item: string) => {
  // 复制文本
  emits('click', item)
  // 关闭弹框
  dialogVisible.value = false
}

// 监听visible的变化 只能监听第一次的变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})
// 监听组件内部的dialogVisible变化
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
.text {
  font-size: 14px;
}
.icon {
  flex: 1;
}
</style>