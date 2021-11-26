<template>
  <div class="cc-goods-nav">
    <div
      :style="{ width: (100 / attrs.rowNum) + '%' }"
      class="cc-goods-nav-item"
      v-for="(item, index) in attrs.list"
      :key="index"
    >
      <div>
        <img
          :style="{
            width: attrs.imgWidth + 'px',
            height: attrs.imgHeight + 'px',
            marginTop: attrs.imgMarginTop + 'px',
            marginBottom: attrs.imgMarginBottom + 'px',
          }"
          :src="item.src"
        />
      </div>
      <div
        :style="{
          color: attrs.titleColor,
          fontSize: attrs.titleFontSize + 'px',
          marginTop: attrs.titleMarginTop + 'px',
          marginBottom: attrs.titleMarginBottom + 'px',
        }"
      >{{ item.title }}</div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useAttrs } from 'vue'

let attrs: any = useAttrs()
</script>

<style lang='scss' scoped>
.cc-goods-nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>