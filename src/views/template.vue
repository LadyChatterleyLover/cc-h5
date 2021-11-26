<template>
  <nut-searchbar
    v-model="searchValue"
    placeholder="请搜索"
    :maxLength="9999"
    clearable
    inputType="text"
    inputBackground="#f7f7f7"
    rightout="取消"
  >
    <template #rightout>
      <span>取消</span>
    </template>
  </nut-searchbar>

  <nut-swiper
    direction="horizontal"
    :paginationVisible="false"
    paginationColor="#fff"
    loop
    :duration="500"
    :autoPlay="5000"
    :initPage="0"
    touchable
  >
    <nut-swiper-item>
      <img
        style="width: 375px;height:150px;"
        src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"
      />
    </nut-swiper-item>

    <nut-swiper-item>
      <img
        style="width: 375px;height:150px;"
        src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg"
      />
    </nut-swiper-item>

    <nut-swiper-item>
      <img
        style="width: 375px;height:150px;"
        src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg"
      />
    </nut-swiper-item>
  </nut-swiper>

  <nut-tabbar bottom size="20" unactiveColor="#7d7e80" activeColor="#1989fa">
    <nut-tabbar-item tabTitle="首页" icon="home"></nut-tabbar-item>
    <nut-tabbar-item tabTitle="分类" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tabTitle="发现" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tabTitle="购物车" icon="cart"></nut-tabbar-item>
    <nut-tabbar-item tabTitle="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>

  <nut-coupon
    background="#e4a216"
    :amount="50"
    condition="满199元使用"
    validity="2021.02.12-02.16"
    tips="有家店铺"
  ></nut-coupon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let searchValue = ref("")
</script>

<style scoped lang="scss"></style>
  