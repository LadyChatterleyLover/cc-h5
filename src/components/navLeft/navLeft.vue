<template>
  <div class="left">
    <a-tabs v-model:activeKey="activeKey" tab-position="left">
      <a-tab-pane key="1">
        <template #tab>
          <div>
            <home-outlined />
          </div>
          <div>基础</div>
        </template>
        <left-item :list="baseComponent"></left-item>
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <div>
            <bar-chart-outlined />
          </div>
          <div>图表</div>
        </template>
        <left-item :list="chartsComponents"></left-item>
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #tab>
          <div>
            <account-book-outlined />
          </div>
          <div>业务</div>
        </template>
        <left-item :list="goodsComponents"></left-item>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { baseComponent, chartsComponents, goodsComponents } from '@/config'
import LeftItem from '../leftItem/LeftItem.vue'
import { HomeOutlined, BarChartOutlined, AccountBookOutlined } from '@ant-design/icons-vue'


let activeKey = ref('1')
</script>

<style lang='scss' scoped>
.left {
  border-right: 1px solid #eee;
  height: 100%;
}
</style>