<template>
  <view class="page flex-col justify-end">
    <view class="section_7 flex-col">
      <view class="group_5 flex-row justify-between">
        <view class="group_1 flex-col"></view>
				<text class="text_1">通知</text>
      </view>
      <view class="group_6 flex-row justify-between">
        <view class="section_3 flex-col"></view>
        <text class="text_2">舍邮</text>
      </view>
	  <navigator url="./inform">
      <view class="section_4 flex-col">
        <view class="block_6 flex-row">
          <view class="group_2 flex-col"></view>
        </view>
        <view class="text-wrapper_3 flex-row">
          <text class="text_3">保卫处</text>
        </view>
      </view>
	  </navigator>
	  <navigator url="./mail">
      <view class="text-wrapper_2 flex-col">
        <text class="text_4">副标题</text>
      </view>
	  </navigator>
    </view>
    <image
      class="image_1"
      referrerpolicy="no-referrer"
      src="../../static/武汉大学.png"
    />

    <view class="box_3 flex-row">
			<view class="block_2 flex-col">
			  <image src="/static/email.png" class="email"></image>
			  <image class="highlight" src="../../static/highlight.png"/>
			<text class="xinxiang">信箱</text>
			</view>
      <view class="block_1 flex-col">
		  <image src="/static/hearts.png" class="hearts"></image>
		<text class="subangbang">宿帮帮</text>
	  </view>
	  <view class="quan flex-col">
		  <image src="../../static/planet.png" class="planet"/>
		<text class="sushequan">宿舍圈</text>
    </view>
	</view>
    <view class="box_4 flex-col">
      <view class="box_5 flex-row"></view>
      <view class="box_6 flex-row">
        <view class="section_5 flex-col"></view>
        <text class="text_6">张三</text>
      </view>
      <view class="block_5 flex-col"></view>
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
@import './home.scss';
@import './home.rpx.scss';
</style>
