<template>
  <div class="right">
    <div class="container">
      <template v-if="current">
        <h2 style="margin: 10px;">属性设置</h2>
        <input-attrs v-if="current.type === 'field'"></input-attrs>
        <textarea-attrs v-if="current.type === 'textarea'"></textarea-attrs>
        <icon-attrs v-if="current.type === 'icon'"></icon-attrs>
        <search-attrs v-if="current.type === 'search'"></search-attrs>
        <radio-attrs v-if="current.type === 'radio-group'"></radio-attrs>
        <empty-attrs v-if="current.type === 'empty'"></empty-attrs>
        <checkbox-attrs v-if="current.type === 'checkbox-group'"></checkbox-attrs>
        <stepper-attrs v-if="current.type === 'stepper'"></stepper-attrs>
        <switch-attrs v-if="current.type === 'switch'"></switch-attrs>
        <swiper-attrs v-if="current.type === 'swipe'"></swiper-attrs>
        <notice-bar-attrs v-if="current.type === 'notice-bar'"></notice-bar-attrs>
        <nav-bar-attrs v-if="current.type === 'nav-bar'"></nav-bar-attrs>
        <slider-attrs v-if="current.type === 'slider'"></slider-attrs>
        <button-attrs v-if="current.type === 'button'"></button-attrs>
        <avatar-attrs v-if="current.type === 'avatar'"></avatar-attrs>
        <divider-attrs v-if="current.type === 'divider'"></divider-attrs>
        <price-attrs v-if="current.type === 'price'"></price-attrs>
        <tabbar-attrs v-if="current.type === 'tabbar'"></tabbar-attrs>
        <tag-attrs v-if="current.type === 'tag'"></tag-attrs>
        <rate-attrs v-if="current.type === 'rate'"></rate-attrs>
        <progress-attrs v-if="current.type === 'progress'"></progress-attrs>
        <circle-progress-attrs v-if="current.type === 'circle'"></circle-progress-attrs>
        <line-attrs v-if="current.type === 'line'"></line-attrs>
        <bar-attrs v-if="current.type === 'bar'"></bar-attrs>
        <pie-attrs v-if="current.type === 'pie'"></pie-attrs>
        <funnel-attrs v-if="current.type === 'funnel'"></funnel-attrs>
        <more-attrs v-if="current.type === 'more'"></more-attrs>
        <goods-nav-attrs v-if="current.type === 'goods-nav'"></goods-nav-attrs>
        <goods-action-attrs v-if="current.type === 'goods-action'"></goods-action-attrs>
        <goods-card-attrs v-if="current.type === 'good-card'"></goods-card-attrs>
        <coupon-attrs v-if="current.type === 'coupons'"></coupon-attrs>
        <contact-card-attrs v-if="current.type === 'contact-card'"></contact-card-attrs>
        <qrcode-attrs v-if="current.type === 'qrcode'"></qrcode-attrs>
        <skeleton-attrs v-if="current.type === 'skeleton'"></skeleton-attrs>
        <pagination-attrs v-if="current.type === 'pagination'"></pagination-attrs>
      </template>
      <div v-else>
        <a-result status="404" title="还没有数据喔" sub-title="赶快拖拽组件来生成你的H5页面吧"></a-result>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import inputAttrs from '../componentAttrs/input/index.vue'
import textareaAttrs from '../componentAttrs/textarea/index.vue'
import iconAttrs from '../componentAttrs/icon/index.vue'
import searchAttrs from '../componentAttrs/search/index.vue'
import radioAttrs from '../componentAttrs/radio/index.vue'
import checkboxAttrs from '../componentAttrs/checkbox/index.vue'
import swiperAttrs from '../componentAttrs/swiper/index.vue'
import switchAttrs from '../componentAttrs/switch/index.vue'
import noticeBarAttrs from '../componentAttrs/noticeBar/index.vue'
import navBarAttrs from '../componentAttrs/navBar/index.vue'
import sliderAttrs from '../componentAttrs/slider/index.vue'
import stepperAttrs from '../componentAttrs/stepper/index.vue'
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
import qrcodeAttrs from '../componentAttrs/qrcode/index.vue'
import emptyAttrs from '../componentAttrs/empty/index.vue'
import skeletonAttrs from '../componentAttrs/skeleton/index.vue'
import paginationAttrs from '../componentAttrs/pagination/index.vue'




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
