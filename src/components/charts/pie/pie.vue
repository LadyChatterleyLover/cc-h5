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
    text: attrs.title,
    left: 'center'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      label: {
        show: false,
        position: 'center'
      },
      type: 'pie',
      radius: '50%',
      data: attrs.seriesData,
    }
  ]
})

watch(() => attrs, val => {
  option.value = {
    title: {
      text: val.title,
      left: 'center'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        label: {
          show: false,
          position: 'center'
        },
        type: 'pie',
        radius: '50%',
        data: val.seriesData,
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