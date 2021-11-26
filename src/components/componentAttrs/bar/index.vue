<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="图表标题">
        <a-input v-model:value="current.attrs.title" placeholder="请输入图表标题" allowClear></a-input>
      </a-form-item>
      <a-form-item label="x轴数据">
        <div style="display: flex;" v-for="(item, index) in current.attrs.xAxisData" :key="index">
          <a-input style="margin-bottom: 5px;" v-model:value="item.name"></a-input>
          <a-button
            style="margin-left: 5px"
            @click="del(item, index)"
            danger
            shape="circle"
            size="small"
          >
            <template #icon>
              <MinusOutlined />
            </template>
          </a-button>
        </div>
        <a-button @click="add" style="margin-top: 5px" type="primary" size="small">添加数据</a-button>
      </a-form-item>
      <a-form-item label="图表数据">
        <template v-for="(item, index) in current.attrs.seriesData" :key="index">
          <a-input style="margin-bottom: 5px;" v-model:value="item.data"></a-input>
        </template>
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
let wrapperCol = { span: 16 }

let del = (item: ComponentItem, index: number) => {
  current.value.attrs.xAxisData.splice(index, 1)
  current.value.attrs.seriesData.splice(index, 1)
}

let add = () => {
  current.value.attrs.xAxisData.push({ name: 'abc' })
  current.value.attrs.seriesData.push({ data: 100 })
}

watch(() => current.value, val => {
  localStorage.setItem('currentComponent', JSON.stringify(val))
  store.commit('setCurrentComponent', val)
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>