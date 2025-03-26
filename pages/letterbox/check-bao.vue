<template>
  <view class="page flex-col">
    <view class="group_1 flex-col">
      <view class="group_2 flex-row"></view>
      <view class="group_5 flex-row">
        <image
          class="label_1"
          referrerpolicy="no-referrer"
          src="https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG7b2e75172303e799e274cfefeaac21e3.png"
        />
        <text class="text_2">保卫处</text>
      </view>
    </view>
    <view class="group_7 flex-col">
      <view class="box_1 flex-row justify-between">
        <view class="text-wrapper_1 flex-col">
          <text class="text_3">置顶</text>
        </view>
        <text class="text_4">主标题</text>
      </view>
      <view class="text-wrapper_2 flex-row">
        <text class="text_5">2025年1月1日</text>
        <text class="text_6">00：00</text>
      </view>
	  <view class="line">
		  <image src="/static/Line.png" class="Line"></image>
	  </view>
    </view>
    <view class="text-wrapper_3 flex-col">
		<!-- <button @click="receive" class="text_7">确认收到</button> -->
      <text class="text_7">确认收到</text>
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
	// name:'receive',
    methods: {
	//   this.$emit('click')
  },
};
</script>
<style lang="scss">
@import './check-bao.scss';
@import './check-bao.rpx.scss';
</style>
