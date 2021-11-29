<template>
  <div class="cc-more">
    <div
      :style="{
        ...attrs.leftOptions.style,
        fontSize: attrs.leftOptions.style.fontSize + 'px'
      }"
    >{{ attrs.leftOptions.text }}</div>
    <div
      :style="{
        ...attrs.rightOptions.style,
        fontSize: attrs.rightOptions.style.fontSize + 'px'
      }"
    >
      <div>{{ attrs.rightOptions.text }}</div>
      <div style="margin: 0 4px;">
        <van-icon
          :name="attrs.rightOptions.icon"
          :size="attrs.rightOptions.iconSize"
          :color="attrs.rightOptions.iconColor"
        ></van-icon>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useAttrs } from 'vue'
let attrs: any = useAttrs()
</script>

<style lang='scss' scoped>
.cc-more {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  div {
    height: 30px;
    display: flex;
    align-items: center;
  }
}
</style>