<template>
  <view class="page flex-col">
    <view class="group_1 flex-col">
      <view class="group_2 flex-row"></view>
      <view class="group_3 flex-row">
        <image
          class="label_1"
          referrerpolicy="no-referrer"
          src="https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG9c8c05cc3eece1dc34a1d2b007248a84.png"
        />
        <text class="text_2">舍邮</text>
      </view>
    </view>
    <view class="group_4 flex-col">
      <text class="text_3">收件人</text>
      <view class="text-wrapper_1 flex-row">
        <text class="text_4">发件人</text>
        <text class="text_5">张三</text>
      </view>
      <text class="text_6">主题</text>
      <text class="text_7">请输入内容</text>
      <view class="box_3 flex-row">
        <image
          class="label_2"
          referrerpolicy="no-referrer"
          src="https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG738d7cd67e182dd03ea54f9bbfa8ab1c.png"
        />
        <text class="text_8">写信</text>
      </view>
      <view class="box_4 flex-col"></view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      constants: {},
    };
  },
  methods: {},
};
</script>
<style lang="scss">
@import './writting-letter.scss';
@import './writting-letter.rpx.scss';
</style>
