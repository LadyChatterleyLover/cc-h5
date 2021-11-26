<template>
  <div class="cc-qrcode" :style="{ width: attrs.width + 'px', height: attrs.width + 'px' }">
    <qrcode-vue
      :value="attrs.value"
      :options="{
        backgroundColor: attrs.backgroundColor,
        margin: attrs.margin,
        width: attrs.width,
        errorCorrectionLevel: attrs.errorCorrectionLevel
      }"
    ></qrcode-vue>
    <img
      :style="{ width: attrs.imgWidth + 'px', height: attrs.height + 'px' }"
      class="cc-qrcode__image"
      :src="attrs.src"
    />
  </div>
</template>

<script lang='ts' setup>
import qrcodeVue from '@chenfengyuan/vue-qrcode'

import { useAttrs } from 'vue'

let attrs: any = useAttrs()
</script>

<style lang='scss' scoped>
.cc-qrcode {
  position: relative;
}

.cc-qrcode__image {
  background-color: #fff;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>