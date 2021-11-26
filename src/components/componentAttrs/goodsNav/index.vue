<template>
  <div style="padding: 20px 12px" v-if="current">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="每行个数">
        <a-input-number style="width: 100%" :min="1" v-model:value="current.attrs.rowNum"></a-input-number>
      </a-form-item>
      <a-form-item label="图片上边距">
        <a-input-number style="width: 100%" :min="0" v-model:value="current.attrs.imgMarginTop"></a-input-number>
      </a-form-item>
      <a-form-item label="图片下边距">
        <a-input-number style="width: 100%" :min="0" v-model:value="current.attrs.imgMarginBottom"></a-input-number>
      </a-form-item>
      <a-form-item label="标题上边距">
        <a-input-number style="width: 100%" :min="0" v-model:value="current.attrs.titleMarginTop"></a-input-number>
      </a-form-item>
      <a-form-item label="标题下边距">
        <a-input-number
          style="width: 100%"
          :min="0"
          v-model:value="current.attrs.titleMarginBottom"
        ></a-input-number>
      </a-form-item>
      <a-form-item label="每行个数">
        <a-input-number style="width: 100%" :min="1" v-model:value="current.attrs.rowNum"></a-input-number>
      </a-form-item>
      <a-form-item label="图片宽度">
        <a-input-number style="width: 100%" :min="0" v-model:value="current.attrs.imgWidth"></a-input-number>
      </a-form-item>
      <a-form-item label="图片高度">
        <a-input-number style="width: 100%" :min="0" v-model:value="current.attrs.imgHeight"></a-input-number>
      </a-form-item>
      <a-form-item label="标题大小">
        <a-input-number style="width: 100%" :min="12" v-model:value="current.attrs.titleFontSize"></a-input-number>
      </a-form-item>
      <a-form-item label="标题颜色">
        <color-picker v-model:pureColor="current.attrs.titleColor"></color-picker>
      </a-form-item>
      <a-form-item label="导航标题">
        <div style="display: flex" v-for="(item, index) in current.attrs.list" :key="index">
          <a-input style="margin-bottom: 5px" v-model:value="item.title"></a-input>
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
      <a-form-item label="图片链接">
        <div style="display: flex" v-for="(item, index) in current.attrs.list" :key="index">
          <a-input style="margin-bottom: 5px" v-model:value="item.src"></a-input>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { MinusOutlined } from "@ant-design/icons-vue";
import { ComponentItem } from "@/types";

let store = useStore();

let current: any = computed(() => store.state.currentComponent);

let labelCol = { span: 6 };
let wrapperCol = { span: 16 };

let del = (item: ComponentItem, index: number) => {
  current.value.attrs.list.splice(index, 1);
};
let add = () => {
  current.value.attrs.list.push({
    src: "https://image3.suning.cn/uimg/cms/img/161293957567317395.png?from=mobile",
    imgWidth: 50,
    imgHeight: 50,
    title: "手机数码",
    titleColor: "#000",
    titleFontSize: 12,
  });
};

watch(
  () => current.value,
  (val) => {
    localStorage.setItem("currentComponent", JSON.stringify(val));
    store.commit("setCurrentComponent", val);
  },
  { deep: true }
);
</script>

<style lang="scss" scoped></style>
