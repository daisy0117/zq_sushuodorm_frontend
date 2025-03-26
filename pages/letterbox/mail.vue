<template>
  <view class="page flex-col justify-end">
    <view class="block_1 flex-col">
      <view class="list_1 flex-col">
        <view
          class="list-items_1 flex-row"
          v-for="(item, index) in loopData0"
          :key="index"
        >
          <view class="group_1 flex-col"></view>
          <view class="group_2 flex-col justify-between">
            <view class="box_1 flex-row">
              <text class="text_1" v-html="item.lanhutext0"></text>
              <text class="text_2" v-html="item.lanhutext1"></text>
              <view v-if="item.slot1 === 1" class="section_1 flex-col"></view>
            </view>
            <text class="text_3" v-html="item.lanhutext2"></text>
          </view>
          <image
            class="label_1"
            referrerpolicy="no-referrer"
            :src="item.lanhuimage0"
          />
        </view>
      </view>
    </view>
    <view class="block_2 flex-row">

      <view class="block_4 flex-col">
		  <image src="../../static/email.png" class="email"></image>
		  <image class="highlight" referrerpolicy="no-referrer" src="../../static/highlight.png"/>
		  <text class='xinxiang'>信箱</text>
	  </view>
      <view class="block_3 flex-col">
		  <image src="../../static/hearts.png" class="hearts"></image>
		  <text class="subangbang">宿帮帮</text>
	  </view>
	  <view class="quan flex-col">
	  		  <image class="planet" src="/static/planet.png"/>
	  		  <text class="sushequan">宿舍圈</text>
	  </view>
    </view>
    <view class="block_5 flex-col">
      <view class="box_2 flex-row">
        <view class="image-text_1 flex-row justify-between">
          <image
            class="label_3"
            referrerpolicy="no-referrer"
            src="https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG14957ecc67a054b045ac58fb05a560fd.png"
          />
          <text class="text-group_1">写邮件</text>
        </view>
      </view>
      <view class="box_3 flex-row">
        <view class="section_2 flex-col"></view>
        <view class="section_3 flex-col justify-between">
          <view class="text-wrapper_1 flex-row justify-between">
            <text class="text_4">101</text>
            <text class="text_5">李四</text>
          </view>
          <text class="text_6">xxxxx</text>
        </view>
        <image
          class="label_4"
          referrerpolicy="no-referrer"
          src="https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG3407d3dc072a8daf7d9984d4c551ca79.png"
        />
      </view>
    </view>
    <view class="block_6 flex-col">
      <view class="box_4 flex-row"></view>
      <view class="box_5 flex-row">
        <image
          class="label_5"
          referrerpolicy="no-referrer"
          src="https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG9c8c05cc3eece1dc34a1d2b007248a84.png"
        />
        <text class="text_8">舍邮</text>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhutext0: '101',
          lanhutext1: '李四',
          lanhutext2: '2025年1月1日',
          lanhuimage0:
            'https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG3407d3dc072a8daf7d9984d4c551ca79.png',
          slot1: 1,
        },
        {
          lanhutext0: '101',
          lanhutext1: '李四',
          lanhutext2: 'xxxxx',
          lanhuimage0:
            'https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG3407d3dc072a8daf7d9984d4c551ca79.png',
        },
      ],
      constants: {},
    };
  },
  methods: {},
};
</script>
<style lang="scss">
@import './mail.scss';
@import './mail.rpx.scss';
</style>
	
