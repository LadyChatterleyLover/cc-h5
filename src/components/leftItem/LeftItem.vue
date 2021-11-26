<template>
  <div class="container">
    <div
      class="item"
      v-for="(item, index) in list"
      :key="index"
      :draggable="true"
      @dragstart="dragStart($event, item, index)"
    >
      <div class="icon">
        <nut-icon :name="item.icon" size="12px"></nut-icon>
      </div>
      <div>{{ item.label }}</div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ComponentItem } from '@/types'


defineProps<{
  list: ComponentItem[]
}>()

let dragStart = (e: DragEvent, item: ComponentItem, index: number) => {
  e.dataTransfer!.setData('item', JSON.stringify(item))
}
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  .item {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    background: #f6f7ff;
    font-size: 12px;
    cursor: move;
    border: 1px dashed #f6f7ff;
    border-radius: 3px;
    width: 46%;
    margin: 0 2%;
    margin-bottom: 15px;
    .icon {
      margin-right: 6px;
      position: relative;
      top: 1px;
    }
  }
}
</style>