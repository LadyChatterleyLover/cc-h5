<template>
  <van-search
    v-model="searchValue"
    placeholder="请搜索"
    clearable
    shape="square"
    clearIcon="clear"
    leftIcon="search"
    :showAction="false"
    actionText="取消"
    :disabled="false"
    :readonly="false"
    :error="false"
    inputAlign="left"
  ></van-search>

  <van-nav-bar
    title="订单详情"
    leftText="返回"
    rightText="更多"
    leftArrow
    :border="false"
    :fixed="false"
    :placeholder="false"
    :zIndex="1"
    :safeAreaInsetTop="false"
  ></van-nav-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let searchValue = ref("")
</script>

<style scoped lang="scss"></style>
  