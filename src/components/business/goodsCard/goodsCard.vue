<template>
  <div class="cc-goods-card" :style="{ background: attrs.background }">
    <div class="cc-goods-card-wrap">
      <div class="cc-goods-card-thumb">
        <img :src="attrs.thumb" style="width: 100%;height: 100%;" />
        <div class="cc-goods-card-thumb-tag" v-if="attrs.tag">
          <van-tag type="danger" mark>{{ attrs.tag }}</van-tag>
        </div>
      </div>
      <div class="cc-goods-card-content">
        <div class="cc-goods-card-content-info">
          <div class="cc-goods-card-content-info-title" v-if="attrs.title">{{ attrs.title }}</div>
          <div class="cc-goods-card-content-info-desc" v-if="attrs.desc">{{ attrs.desc }}</div>
          <div class="cc-goods-card-content-info-tags" v-if="$slots.tags">
            <slot name="tags"></slot>
          </div>
        </div>
        <div class="cc-goods-card-content-bottom">
          <div class="cc-goods-card-content-bottom-price">
            <div class="cc-goods-card-content-bottom-price-p" v-if="attrs.price">
              <span>{{ attrs.currency }}</span>
              <span style="font-size: 16px;">{{ String(attrs.price).slice(0, 1) }}</span>
              <span>{{ String(attrs.price).slice(1) }}</span>
            </div>
            <div class="cc-goods-card-content-bottom-price-o" v-if="attrs.originPrice">
              <span>{{ attrs.currency }}</span>
              <span>{{ attrs.originPrice }}</span>
            </div>
          </div>
          <div class="cc-goods-card-content-bottom-num" v-if="attrs.num">x{{ attrs.num }}</div>
        </div>
      </div>
    </div>
    <div class="cc-goods-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useAttrs } from 'vue'

let attrs: any = useAttrs()
</script>

<style scoped lang="scss">
.cc-goods-card {
  position: relative;
  box-sizing: border-box;
  padding: 16px 32px;
  color: #323233;
  font-size: 12px;
  &-wrap {
    display: flex;
  }
  &-thumb {
    width: 95px;
    height: 95px;
    margin-right: 8px;
    position: relative;
    &-tag {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 90px;
    font-size: 12px;
    &-info {
      &-desc {
        color: #646566;
        margin-bottom: 5px;
      }
    }
    &-tags {
      display: flex;
      align-items: center;
    }
    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-price {
        display: flex;
        align-items: center;
        &-p {
          margin-right: 5px;
          font-weight: 500;
        }
        &-o {
          color: #969799;
          text-decoration: line-through;
          position: relative;
          top: 1px;
        }
      }
      &-num {
        color: #969799;
      }
    }
  }
  &-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>