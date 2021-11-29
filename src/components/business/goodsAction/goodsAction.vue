<template>
  <div class="flex a-center container">
    <div class="flex icon">
      <div
        class="flex f-col a-center icon-item"
        v-for="(item,index) in attrs.goodsActionOptions"
        :key="index"
      >
        <div>
          <van-icon :name="item.icon" :color="item.iconColor"></van-icon>
          <span
            class="info"
            v-if="item.info && !item.dot"
            :style="{ background: item.infoColor }"
          >{{ item.info }}</span>
          <div class="dot" v-if="item.dot"></div>
        </div>
        <div class="text flex a-center j-center">{{ item.text }}</div>
      </div>
    </div>
    <div class="f-1 flex a-center btn">
      <div
        class="btn-icon flex a-center j-center"
        :class="{ 'f-btn': !attrs.goodsActionButton[0].background }"
        :style="{ background: attrs.goodsActionButton[0].background }"
      >{{ attrs.goodsActionButton[0].text }}</div>
      <div
        v-if="attrs.goodsActionButton[1]"
        class="btn-icon flex a-center j-center"
        :class="{ 'l-btn': !attrs.goodsActionButton[1].background }"
        :style="{ background: attrs.goodsActionButton[1].background }"
      >{{ attrs.goodsActionButton[1].text }}</div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useAttrs } from 'vue'

let attrs: any = useAttrs()
</script>

<style scoped lang="scss">
.container {
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
}

.flex {
  display: flex;
}

.f-col {
  flex-direction: column;
}

.a-center {
  align-items: center;
}

.j-center {
  justify-content: center;
}

.f-1 {
  flex: 1;
}

.icon {
  min-width: 48px;
  .icon-item {
    margin: 5px 12px;
    font-size: 14px;
    position: relative;
    top: 5px;
    .dot {
      width: 8px;
      min-width: 0;
      height: 8px;
      background-color: #ee0a24;
      border-radius: 100%;
      position: absolute;
      top: -4px;
      right: -2px;
    }
    .text {
      color: #646566;
    }
    .info {
      position: absolute;
      top: -6px;
      right: -4px;
      box-sizing: border-box;
      min-width: 16px;
      padding: 0 3px;
      color: #fff;
      font-weight: 500;
      font-size: 12px;
      font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;
      line-height: 1.2;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 16px;
    }
  }
}

.btn {
  color: #fff;
  height: 50px;
  width: 100%;
  font-size: 14px;

  .btn-icon {
    height: 40px;
    width: 100%;
    position: relative;
    top: 5px;

    &:first-child {
      border-top-left-radius: 999px;
      border-bottom-left-radius: 999px;
    }

    &:last-child {
      border-top-right-radius: 999px;
      border-bottom-right-radius: 999px;
      margin-right: 5px;
    }
  }
}
.f-btn {
  background: #ff8917 !important;
}
.l-btn {
  background: #ee0a24 !important;
}
</style>