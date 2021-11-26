<template>
  <div style="padding: 10px 12px;" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="图表标题">
        <a-input v-model:value="current.attrs.title" placeholder="请输入图表标题" allowClear></a-input>
      </a-form-item>
      <a-form-item label="饼图标签">
        <div style="display: flex;" v-for="(item, index) in names" :key="index">
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
        <template v-for="(item, index) in values" :key="index">
          <a-input style="margin-bottom: 5px;" v-model:value="item.data"></a-input>
        </template>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang='ts' setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { MinusOutlined } from '@ant-design/icons-vue'
import { ComponentItem } from '@/types'

let store = useStore()

let current: any = computed(() => store.state.currentComponent)

let labelCol = { span: 6 }
let wrapperCol = { span: 16 }

let values = ref<any[]>([])
let names = ref<any[]>([])


current.value.attrs.seriesData.map((item: any) => {
  values.value.push({ data: item.value })
  names.value.push({ name: item.name })
})

let del = (item: ComponentItem, index: number) => {
  current.value.attrs.seriesData.splice(index, 1)
}

let add = () => {
  current.value.attrs.seriesData.push({ value: 100, name: 'abc' })
}

watch(() => current.value, val => {
  if (val) {
    values.value = []
    names.value = []
    val.attrs.seriesData.map((item: any) => {
      values.value.push({ data: item.value })
      names.value.push({ name: item.name })
    })
    localStorage.setItem('currentComponent', JSON.stringify(val))
    store.commit('setCurrentComponent', val)
  }
}, { deep: true })



watch(() => values.value, val => {
  val.map((item: any, index: number) => {
    current.value.attrs.seriesData.map((item1: any, index1: number) => {
      if (index === index1) {
        item1.value = item.data
      }
    })
  })
}, { deep: true })

watch(() => names.value, val => {
  val.map((item: any, index: number) => {
    current.value.attrs.seriesData.map((item1: any, index1: number) => {
      if (index === index1) {
        item1.name = item.name
      }
    })
  })
}, { deep: true })
</script>

<style lang='scss' scoped>
</style>