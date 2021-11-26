<template>
  <div :id="id"></div>
</template>

<script lang='ts' setup>
import { useAttrs, getCurrentInstance, onMounted, nextTick, ref, watch } from 'vue'
import * as echarts from 'echarts'

let instance = getCurrentInstance()
let id = 'charts-line' + instance!.uid
let attrs = useAttrs()

let myChart = ref<any>()

let option = ref({
  title: {
    text: attrs.title
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: (attrs.xAxisData as any).map((i: any) => i.name)
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      type: 'line',
      data: (attrs.seriesData as any).map((i: any) => i.data),
      smooth: attrs.smooth,
      areaStyle: attrs.areaStyle ? {} : null
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
      boundaryGap: false,
      data: (val.xAxisData as any).map((i: any) => i.name)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        type: 'line',
        data: (val.seriesData as any).map((i: any) => i.data),
        smooth: val.smooth,
        areaStyle: attrs.areaStyle ? {} : null
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