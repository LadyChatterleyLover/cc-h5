<template>
  <div class="cc-coupon">
    <div class="container" :style="{ background: attrs.background }">
      <div class="amount">
        <span>{{ attrs.amount }}</span>
        元优惠券
      </div>
      <div>
        <div class="condition" :style="{ color: attrs.background }">{{ attrs.condition }}</div>
        <div style="color: #fff">{{ attrs.validity }}</div>
      </div>
    </div>
    <div class="tips">{{ attrs.tips }}</div>
  </div>
</template>

<script lang='ts' setup>
import { useAttrs } from 'vue'

let attrs: any = useAttrs()
</script>

<style lang='scss' scoped>
.cc-coupon {
  width: calc(100% - 32px);
  border-radius: 6px;
  margin: 16px auto;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 6px;
  .container {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .amount {
      color: #fff;
      span {
        font-size: 30px;
      }
    }
    .condition {
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 14px;
      background: #fff;
    }
  }
  .tips {
    padding: 0 16px;
    line-height: 2;
    color: #757473;
  }
}
</style>