<template>
  <div class="right">
    <div class="container">
      <template v-if="current">
        <h2 style="margin: 10px;">属性设置</h2>
        <input-attrs v-if="current.type === 'input'"></input-attrs>
        <icon-attrs v-if="current.type === 'icon'"></icon-attrs>
        <search-attrs v-if="current.type === 'searchbar'"></search-attrs>
        <swiper-attrs v-if="current.type === 'swiper'"></swiper-attrs>
        <noticebar-attrs v-if="current.type === 'noticebar'"></noticebar-attrs>
        <navbar-attrs v-if="current.type === 'navbar'"></navbar-attrs>
        <video-attrs v-if="current.type === 'video'"></video-attrs>
        <button-attrs v-if="current.type === 'button'"></button-attrs>
        <avatar-attrs v-if="current.type === 'avatar'"></avatar-attrs>
        <divider-attrs v-if="current.type === 'divider'"></divider-attrs>
        <price-attrs v-if="current.type === 'price'"></price-attrs>
        <tabbar-attrs v-if="current.type === 'tabbar'"></tabbar-attrs>
        <tag-attrs v-if="current.type === 'tag'"></tag-attrs>
        <rate-attrs v-if="current.type === 'rate'"></rate-attrs>
        <progress-attrs v-if="current.type === 'progress'"></progress-attrs>
        <circle-progress-attrs v-if="current.type === 'circleprogress'"></circle-progress-attrs>
        <line-attrs v-if="current.type === 'line'"></line-attrs>
        <bar-attrs v-if="current.type === 'bar'"></bar-attrs>
        <pie-attrs v-if="current.type === 'pie'"></pie-attrs>
        <funnel-attrs v-if="current.type === 'funnel'"></funnel-attrs>
        <more-attrs v-if="current.type === 'more'"></more-attrs>
        <goods-nav-attrs v-if="current.type === 'goods-nav'"></goods-nav-attrs>
        <goods-action-attrs v-if="current.type === 'goods-action'"></goods-action-attrs>
        <goods-card-attrs v-if="current.type === 'goods-card'"></goods-card-attrs>
        <coupon-attrs v-if="current.type === 'coupon'"></coupon-attrs>
        <contact-card-attrs v-if="current.type === 'contact-card'"></contact-card-attrs>
      </template>
      <div v-else>
        <a-result status="404" title="还没有数据喔" sub-title="赶快拖拽组件来生成你的H5页面吧"></a-result>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import inputAttrs from '../componentAttrs/input/index.vue'
import iconAttrs from '../componentAttrs/icon/index.vue'
import searchAttrs from '../componentAttrs/search/index.vue'
import swiperAttrs from '../componentAttrs/swiper/index.vue'
import noticebarAttrs from '../componentAttrs/noticebar/index.vue'
import navbarAttrs from '../componentAttrs/navbar/index.vue'
import videoAttrs from '../componentAttrs/video/index.vue'
import buttonAttrs from '../componentAttrs/button/index.vue'
import avatarAttrs from '../componentAttrs/avatar/index.vue'
import dividerAttrs from '../componentAttrs/divider/index.vue'
import priceAttrs from '../componentAttrs/price/index.vue'
import tabbarAttrs from '../componentAttrs/tabbar/index.vue'
import tagAttrs from '../componentAttrs/tag/index.vue'
import rateAttrs from '../componentAttrs/rate/index.vue'
import progressAttrs from '../componentAttrs/progress/index.vue'
import circleProgressAttrs from '../componentAttrs/circleProgress/index.vue'
import lineAttrs from '../componentAttrs/line/index.vue'
import barAttrs from '../componentAttrs/bar/index.vue'
import pieAttrs from '../componentAttrs/pie/index.vue'
import funnelAttrs from '../componentAttrs/funnel/index.vue'
import moreAttrs from '../componentAttrs/more/index.vue'
import goodsNavAttrs from '../componentAttrs/goodsNav/index.vue'
import goodsActionAttrs from '../componentAttrs/goodsAction/index.vue'
import goodsCardAttrs from '../componentAttrs/goodsCard/index.vue'
import couponAttrs from '../componentAttrs/coupon/index.vue'
import contactCardAttrs from '../componentAttrs/contactCard/index.vue'




import { computed, ComputedRef } from 'vue'
import { useStore } from 'vuex'
import { ComponentItem } from '@/types'

let store = useStore()

let current: ComputedRef<ComponentItem> = computed(() => store.state.currentComponent)
</script>

<style scoped lang="scss">
.right {
  height: 100%;
  border-left: 1px solid #eee;
  overflow: hidden;
  .container {
    height: 100%;
    overflow: scroll;
  }
}
</style>
