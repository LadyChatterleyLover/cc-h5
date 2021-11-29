<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="图片列表">
        <div style="display: flex" v-for="(item, index) in current.children" :key="index">
          <a-input
            style="margin-bottom: 5px;"
            v-model:value="item.attrs.src"
            placeholder="请输入图片路径"
            allowClear
          ></a-input>
          <a-button @click="del(item, index)" danger shape="circle" size="small">
            <template #icon>
              <MinusOutlined />
            </template>
          </a-button>
        </div>
        <a-button @click="add" style="margin: 0 5px;" type="primary" size="small">添加图片</a-button>
      </a-form-item>
      <a-form-item label="宽度">
        <a-input-number style="width: 100%;" :min="0" v-model:value="current.attrs.width"></a-input-number>
      </a-form-item>
      <a-form-item label="高度">
        <a-input-number style="width: 100%;" :min="0" v-model:value="current.attrs.height"></a-input-number>
      </a-form-item>
      <a-form-item label="轮播时长">
        <a-input-number style="width: 100%;" :min="0" v-model:value="current.attrs.autoplay"></a-input-number>
      </a-form-item>
      <a-form-item label="动画时长">
        <a-input-number style="width: 100%;" :min="0" v-model:value="current.attrs.duration"></a-input-number>
      </a-form-item>
      <a-form-item label="初始化索引">
        <a-input-number style="width: 100%;" :min="0" v-model:value="current.attrs.initialSwipe"></a-input-number>
      </a-form-item>
      <a-form-item label="循环播放">
        <a-switch v-model:checked="current.attrs.loop"></a-switch>
      </a-form-item>
      <a-form-item label="显示指示点">
        <a-switch v-model:checked="current.attrs.showIndicators"></a-switch>
      </a-form-item>
      <a-form-item label="指示点颜色" v-if="current.attrs.showIndicators">
        <color-picker v-model:pureColor="current.attrs.indicatorColor"></color-picker>
      </a-form-item>
      <a-form-item label="竖向轮播">
        <a-switch v-model:checked="current.attrs.vertical"></a-switch>
      </a-form-item>
      <a-form-item label="触摸滑动">
        <a-switch v-model:checked="current.attrs.touchable"></a-switch>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { MinusOutlined } from '@ant-design/icons-vue'
import { ComponentItem } from '@/types'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 18 }

let add = () => {
  current.value.children.push({
    type: 'swiper-item',
    attrs: {
      src: 'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg'
    }
  })
}
let del = (item: ComponentItem, index: number) => {
  current.value.children.splice(index, 1)
}

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>