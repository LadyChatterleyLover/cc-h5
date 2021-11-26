<template>
  <div :id="id"></div>
</template>

<script lang='ts' setup>
import { useAttrs, getCurrentInstance, onMounted, nextTick, ref, watch } from 'vue'
import * as echarts from 'echarts'

let instance = getCurrentInstance()
let id = 'charts-bar' + instance!.uid
let attrs = useAttrs()

let myChart = ref<any>()

let option = ref({
  title: {
    text: attrs.title
  },
  xAxis: {
    type: 'category',
    data: (attrs.xAxisData as any).map((i: any) => i.name)
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'bar',
      data: (attrs.seriesData as any).map((i: any) => i.data),
    }
  ]
})

watch(() => attrs, val => {
  option.value = {
    title: {
      text: val.title
    },
    xAxis: {
      type: 'category',
      data: (val.xAxisData as any).map((i: any) => i.name)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'bar',
        data: (val.seriesData as any).map((i: any) => i.data),
      }
    ]
  }
  myChart.value.setOption(option.value)
}, { deep: true })

onMounted(() => {
  nextTick(() => {
    myChart.value = echarts.init(document.getElementById(id)!)
    myChart.value.setOption(option.value)
  })
})
</script>

<style lang='scss' scoped>
</style>