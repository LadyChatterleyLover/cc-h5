<template>
  <div style="display: none">{{ avatarHeight }}</div>
  <div
    class="cc-avatar"
    :style="{
      width: avatarWidth + 'px',
      height: avatarHeight + 'px',
      borderRadius: attrs.round ? '100%' : '0',
      background: attrs.bgColor
    }"
  >
    <img
      v-if="attrs.src"
      :style="{ borderRadius: attrs.round ? '100%' : '5px' }"
      class="cc-avatar-img"
      :src="attrs.src"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs, watch } from 'vue'


let attrs: any = useAttrs()


let avatarWidth = ref<number>(0)
let avatarHeight = ref<number>(0)

watch(() => attrs, val => {
  if (val.size === '') {
    avatarWidth.value = 38
    avatarHeight.value = 38
  }
  else if (val.size === 'large') {
    avatarWidth.value = 60
    avatarHeight.value = 60
  }
  else if (val.size === 'small') {
    avatarWidth.value = 30
    avatarHeight.value = 30
  }
  console.log(avatarWidth.value)
}, { deep: true, immediate: true })

</script>

<style scoped lang="scss">
.cc-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  background: #c0c4cc;
  &-img {
    width: 100%;
    height: 100%;
  }
}
</style>

  