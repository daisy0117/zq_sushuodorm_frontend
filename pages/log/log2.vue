<template>
  <view class="page flex-col">
    <view class="block_1 flex-col">
      <view class="group_1 flex-row">
        <view class="block_2 flex-col">
          <!-- <view class="block_3 flex-row">
            <view class="box_1 flex-col"></view>
            <view class="box_2 flex-col"></view>
            <image
              class="image_1"
              referrerpolicy="no-referrer"
              src="https://lanhu-oss.lanhuapp.com/FigmaDDSSlicePNGbffb79f444c58476371721edd301359f.png"
            />
          </view> -->
          <!-- <view class="image-wrapper_1 flex-row">
            <image
              class="image_2"
              referrerpolicy="no-referrer"
              src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a19c8f0cac954562a63af0913ef57a04_mergeImage.png"
            />
            <image
              class="thumbnail_1"
              referrerpolicy="no-referrer"
              src="https://lanhu-oss.lanhuapp.com/FigmaDDSSlicePNG473af166ace1d8e020512ea24ae89683.png"
            />
          </view> -->
          <view class="text-wrapper_1 flex-col">
            <text class="text_1">登录</text>
          </view>
        </view>
        <view class="block_4 flex-col">
				<!-- <view class="box_3 flex-col"> -->
			<navigator url="./log3" class="box_3 flex-col">
					<view class="box_4 flex-col">
					<image src="../../static/WeChat.png" class="WeChat"/>
					</view>
				<view class="box_5 flex-col">
					<text class="text_2">微信登录</text>
				</view>
			</navigator>
			<!-- </view> -->
        </view>
      </view>
    </view>
  </view>

<!-- 加载 -->
<!-- <view class="container">
    <view class="loading-box"></view>
    <view class="loading-box"></view>
    <view class="loading-box"></view>
    <view class="loading-box"></view>
    </view> -->
<!-- 加载结束 -->
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
@import './common2.scss';
@import './index2.rpx.scss';
</style>
