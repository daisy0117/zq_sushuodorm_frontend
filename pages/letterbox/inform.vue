<template>
  <view class="page flex-col">
    <view class="box_1 flex-col">
      <view class="box_2 flex-row">
<!--        <text class="text_1">9:41</text> -->
<!--        <view class="box_3 flex-col"></view>
        <view class="box_4 flex-col"></view> -->
<!--        <image
          class="image_1"
          referrerpolicy="no-referrer"
          src="https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG05a8adad9a45521b5b8814a4a191053d.png"
        /> -->
      </view>
      <view class="box_5 flex-row">
        <image
          class="arrow"
          referrerpolicy="no-referrer"
          src="../../static/左箭头.png"
        />
        <text class="text_2">通知</text>
        <view class="group_1 flex-col"></view>
      </view>
    </view>
    <view class="box_6 flex-col">
      <view class="box_7 flex-row justify-between">
        <view class="box_8 flex-col"></view>
        <text class="text_3">保卫处</text>
      </view>
      <view class="box_9 flex-row justify-between">
        <view class="block_1 flex-col"></view>
        <text class="text_4">李阿姨</text>
      </view>
      <view class="box_10 flex-row justify-between">
        <view class="block_2 flex-col"></view>
        <text class="text_5">王阿姨</text>
      </view>
	    <navigator url="/pages/letterbox/inform-baowei">
		  <view class="box_11 flex-col">
			<view class="box_12 flex-row">
			  <view class="group_2 flex-col"></view>
			</view>
			<view class="text-wrapper_1 flex-row">
			  <text class="text_6">xxxxx</text>
			</view>
		  </view>
		  </navigator>
      <view class="text-wrapper_2 flex-col">
        <text class="text_7">无</text>
      </view>
      <view class="text-wrapper_3 flex-col">
        <text class="text_8">无</text>
      </view>
    </view>
    <image
      class="image_2"
      referrerpolicy="no-referrer"
      src="/static/武汉大学.png"
    />
    <view class="box_13 flex-row">
	  <view class="group_4 flex-col">
		  <image src="../../static/email.png" class="email"></image>
		  <image class="highlight" referrerpolicy="no-referrer" src="../../static/highlight.png"/>
		  <text class='xinxiang'>信箱</text>
	  </view>
      <view class="group_3 flex-col">
		  <image src="../../static/hearts.png" class="hearts"></image>
		  <text class="subangbang">宿帮帮</text>
	  </view>
      <view class="quan flex-col">
		  <image class="planet" src="/static/planet.png"/>
		  <text class="sushequan">宿舍圈</text>
	  </view>
	  

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
@import './inform.scss';
@import './inform.rpx.scss';
</style>
