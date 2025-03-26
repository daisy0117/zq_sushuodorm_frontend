<template>
  <view class="page flex-col">
    <view class="group_1 flex-col">
      <view class="group_2 flex-col">
        <view class="group_3 flex-col">
          <view class="group_4 flex-row"></view>
          <view class="group_5 flex-row justify-between"></view>
          <view class="group_6 flex-row">
            <view class="text-wrapper_1 flex-col">
              <text class="text_1">登录</text>
            </view>
          </view>
        </view>
        <view class="group_7 flex-col">
          <text class="text_2">注册成功!请进行个人信息完善</text>
		  <navigator url="./personalhome" class="block_3 flex-col">
          <!-- <view class="block_3 flex-col"> -->
			  <text class="text_3">个人信息完善</text>
		  <!-- </view> -->
		  </navigator>
          <image
            class="image_3"
            referrerpolicy="no-referrer"
            src="../../static/提示.png"
          />
        </view>
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
@import './common3.scss';
@import './index3.rpx.scss';
</style>
