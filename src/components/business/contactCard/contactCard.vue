<template>
  <div class="cc-contact-card">
    <div class="cc-contact-card-icon" v-if="attrs.type === 'add'">
      <nut-icon name="uploader" color="#fff" size="24"></nut-icon>
    </div>
    <div v-else>
      <nut-icon :name="attrs.icon" size="18" style="margin-right: 15px;"></nut-icon>
    </div>
    <div class="cc-contact-card-content">
      <div v-if="attrs.type === 'add'">{{ attrs.addText }}</div>
      <div v-else style="color: #323233;">
        <div>姓名: {{ attrs.name }}</div>
        <div>电话: {{ attrs.tel }}</div>
      </div>
    </div>
    <div class="cc-contact-card-arrow" v-if="attrs.editable">
      <nut-icon name="right" color="#969799"></nut-icon>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useAttrs } from 'vue'

let attrs: any = useAttrs()
</script>

<style lang='scss' scoped>
.cc-contact-card {
  display: flex;
  align-items: center;
  padding: 24px;
  position: relative;
  background: #fff;
  &::before {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: -webkit-repeating-linear-gradient(
      135deg,
      #ff6c6c 0,
      #ff6c6c 20%,
      transparent 0,
      transparent 25%,
      #1989fa 0,
      #1989fa 45%,
      transparent 0,
      transparent 50%
    );
    background: repeating-linear-gradient(
      -45deg,
      #ff6c6c 0,
      #ff6c6c 20%,
      transparent 0,
      transparent 25%,
      #1989fa 0,
      #1989fa 45%,
      transparent 0,
      transparent 50%
    );
    background-size: 80px;
    content: "";
  }
  &-icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1989fa;
    border-radius: 5px;
    margin-right: 15px;
  }
  &-content {
    flex: 1;
    font-size: 14px;
    color: #323233;
  }
}
</style>