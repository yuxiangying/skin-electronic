<template>
	<!-- <view>
		 <view>
			 <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#ff7e00"></uni-segmented-control>
		 </view>
		        <view class="content">
		            <view v-show="current === 0">
		                选项卡1的内容
		            </view>
		            <view v-show="current === 1">
		                选项卡2的内容
		            </view>
		            <view v-show="current === 2">
		                选项卡3的内容
		            </view>
		        </view>
	</view> -->
	  <view>
		  <uni-grid :column="3" style="text-align: center;" :square="false" :show-border="false" :highlight="false">
		      <uni-grid-item>
		  		<!-- <text class="iconfont icon-weibiaoti-"></text> -->
		  		<text class="iconfont icon-kongwujiaoxing label-text" decode="true">&nbsp;优先严选 ></text>
		      </uni-grid-item>
		      <uni-grid-item>
		          <text class="iconfont icon-kongwujiaoxing label-text">安心检测 ></text>
		      </uni-grid-item>
		      <uni-grid-item>
		  		<text class="iconfont icon-kongwujiaoxing label-text">赔付保障 ></text>
		      </uni-grid-item>
		  </uni-grid>
	  </view>
</template>

<script>
	import {uniSegmentedControl} from "@dcloudio/uni-ui";
	import {uniGrid} from "@dcloudio/uni-ui";
	import {uniGridItem} from "@dcloudio/uni-ui";
	export default {
	    components: {
			uniSegmentedControl,
			uniGrid,
			uniGridItem
		},
	    data() {
	        return {
	            items: ['选项卡1','选项卡2','选项卡3'],
	            current: 0,
				nbTitle: '标题',
				        titleIcon: '/static/logo.png',
				        titleIconRadius: '20px',
				        subtitleText: 'subtitleText',
				        nbLoading: false,
				        nbFrontColor: '#000000',
				        nbBackgroundColor: '#ffffff'
	        }
	    },
	    methods: {
	        onClickItem(e) {
				console.log(e);
	            if (this.current !== e.currentIndex) {
	                this.current = e.currentIndex;
	            }
	        }
	    }
	}
</script>

<style>
	.label-text{
		text-align: center;
		font-size:unset;
		color: #919191;
		font-size: 30rpx;
	}
</style>

