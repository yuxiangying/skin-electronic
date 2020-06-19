<template>
	<!-- <view>首页
	<text class="iconfont icon-weibiaoti-"></text>
	<uni-badge text="1"></uni-badge>
	</view> -->
	<!-- <view>
		<home-choiceness></home-choiceness>
		<home-new></home-new>
		<home-gift></home-gift>
	</view> -->
	<view>
		<!-- 首页-轮播图 -->
		<!-- <uni-swiper-dot :info="info" :current="current" field="url" :mode="mode"> -->
		    <swiper class="swiper-box" @change="change" autoplay="true">
		        <swiper-item v-for="(item ,index) in info" :key="index">
		            <view class="swiper-item">
						<image class="banner" :src="item.url" style="width: 100%; height: 400upx;"></image>
		            </view>
		        </swiper-item>
		    </swiper>
		<!-- </uni-swiper-dot> -->
		<!-- 首页-宫格 -->
		<uni-grid :column="4" :show-border="false" :highlight="false">
		    <uni-grid-item>
				<image src="/static/images/logo-choiceness.png"></image>
		    </uni-grid-item>
		    <uni-grid-item>
		        <image src="/static/images/logo-new.png"></image>
		    </uni-grid-item>
		    <uni-grid-item>
		        <image src="/static/images/logo-gift.png"></image>
		    </uni-grid-item>
			<uni-grid-item>
			    <image src="/static/images/logo-discount.png"></image>
			</uni-grid-item>
		</uni-grid>
		<view style="height: 80rpx;">
			<uni-grid :column="4" :show-border="false" :square="false" :highlight="false">
			    <uni-grid-item>
			        <text class="categoryText">精品商品</text>
			    </uni-grid-item>
			    <uni-grid-item>
			        <text class="categoryText">新鲜直达</text>
			    </uni-grid-item>
			    <uni-grid-item>
			        <text class="categoryText">礼品套装</text>
			    </uni-grid-item>
				<uni-grid-item>
				    <text class="categoryText">优惠券</text>
				</uni-grid-item>
			</uni-grid>
		</view>
		<view class="center-bar"/>
		<!-- 限时疯抢 -->
		<view class="flashSale">
			<view class="title-bar">
				<div class="div-bar">
					<text class="iconfont icon-iconcebianlanxingbiaoyoujian title-bar-text">限时疯抢</text>
				</div>
			</view>
			<view>
				<uni-grid :column="3" :show-border="false" :highlight="false">
				    <uni-grid-item>
						<image src="/static/images/fruits/nfhxxy.jpg"></image>
						<text class="categoryText fruitName">葡萄柚</text>
						<text class="categoryText fruitPrice">￥39元</text>
				    </uni-grid-item>
				    <uni-grid-item>
				        <image src="/static/images/fruits/blht.jpg"></image>
						<text class="categoryText fruitName">秘鲁红提</text>
						<text class="categoryText fruitPrice">￥39元</text>
				    </uni-grid-item>
				    <uni-grid-item>
				        <image src="/static/images/fruits/Zesprilqyg.jpg"></image>
						<text class="categoryText fruitName">绿奇异果</text>
						<text class="categoryText fruitPrice">￥39元</text>
				    </uni-grid-item>
				</uni-grid>
			</view>
		</view>
		<view class="center-bar"/>
		<!-- 本周推荐 -->
		<view style="height: 825rpx;" class="flashSale">
			<view class="title-bar">
				<div class="div-bar">
					<text class="iconfont icon-iconcebianlanxingbiaoyoujian title-bar-text">本周推荐</text>
				</div>
			</view>
			<view>
				<uni-grid :column="2" style="text-align: center;" :show-border="false" :highlight="false" >
				    <uni-grid-item>
						<text class="fruitMessage1">美国新奇士脐橙</text>
						<text class="fruitMessage2">VC爆棚 沁甜多汁</text>
						<text class="categoryText fruitPrice" style="font-size: 45rpx;">￥36元</text>
						<text class="home-purchase-click">点击抢购</text>
				    </uni-grid-item>
				    <uni-grid-item>
				        <image src="/static/images/fruits/mgxqsc.jpg"></image>
				    </uni-grid-item>
				    <uni-grid-item>
				        <image src="/static/images/fruits/tgqy.jpg"></image>
				    </uni-grid-item>
					<uni-grid-item>
					    <text class="fruitMessage1">泰国椰青</text>
					    <text class="fruitMessage2">一口清甜汁</text>
					    <text class="categoryText fruitPrice" style="font-size: 45rpx;">￥77元</text>
					    <text class="home-purchase-click">点击抢购</text>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
		<view class="center-bar"/>
		<!-- 精选商品 -->
		<view style="height: 1090rpx;" class="flashSale">
			<view class="title-bar">
				<div class="div-bar">
					<text class="iconfont icon-iconcebianlanxingbiaoyoujian title-bar-text">精选商品</text>
				</div>
			</view>
			<view>
				<uni-grid :column="2" style="text-align: center;" :square="false" :show-border="false" :highlight="false" >
				    <uni-grid-item>
						<image class="jxsp-image" src="/static/images/fruits/jxsp-nfhxxy.jpg"></image>
						<text class="jxsp-name">南非红心西柚8个装</text>
						<text class="jxsp-price">￥39</text>
						<text class="jxsp-xl">销量：0</text>
				    </uni-grid-item>
				    <uni-grid-item>
				        <image class="jxsp-image" src="/static/images/fruits/jxsp-tghjgglw.jpg"></image>
				        <text class="jxsp-name">泰国黑金刚莲露共3斤</text>
				        <text class="jxsp-price">￥60</text>
				        <text class="jxsp-xl">销量：0</text>
				    </uni-grid-item>
				    <uni-grid-item>
				       <image class="jxsp-image" src="/static/images/fruits/jxsp-tgjkhmd.jpg"></image>
				       <text class="jxsp-name">泰国进口红毛丹5斤</text>
				       <text class="jxsp-price">￥50</text>
				       <text class="jxsp-xl">销量：0</text>
				    </uni-grid-item>
					<uni-grid-item>
					    <image class="jxsp-image" src="/static/images/fruits/jxsp-zljkclz.jpg"></image>
					    <text class="jxsp-name">智利进口车厘子J级</text>
					    <text class="jxsp-price">￥80-￥479</text>
					    <text class="jxsp-xl">销量：0</text>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
		<view class="center-bar"/>
		<!-- 为您鉴证每一口安心 -->
		<view style="height: 190rpx;" class="flashSale">
			<view class="title-bar">
				<div class="div-bar">
					<text class="iconfont icon-iconcebianlanxingbiaoyoujian title-bar-text">为您鉴证每一口安心</text>
				</div>
			</view>
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
		</view>
		<view class="center-bar" style="height: 12rpx;"/>
	</view>
</template>

<script>
	import homeChoiceness from "./home-choiceness";
	import homeNew from "./home-new";
	import homeGift from "./home-gift";
	import {uniSwiperDot} from '@dcloudio/uni-ui';
	import {uniGrid} from "@dcloudio/uni-ui";
	import {uniGridItem} from "@dcloudio/uni-ui";
	
	export default {
		components:{
			homeChoiceness,
			homeNew,
			homeGift,
			uniSwiperDot,
			uniGrid,
			uniGridItem
		},
		data() {
		        return {
		            info: [{
		                url: '/static/images/banner1.jpg'
		            }, {
		                url: '/static/images/banner2.jpg'
		            }, {
		                url: '/static/images/banner3.jpg'
		            }],
		            current: 0,
		            mode: 'default',
					dotsStyles:{
						width:1,
						selectedBackgroundColor:'#ff0000'
					}
		        }
		    },
		    methods: {
		        change(e) {
		            this.current = e.detail.current;
		        }
		    }
	}
	/* import {uniBadge} from '@dcloudio/uni-ui'
	export default {
		components: {
			uniBadge
		},
		onLoad() {
			//http://157.122.54.189:9088/image/v3/homepage/vertical
			//1、原生的微信小程序api
			wx.request({
				url:"http://157.122.54.189:9088/image/v3/homepage/vertical",
				success(res) {
					console.log(res);
				}
			})
			
			//2、uni-api
			uni.request({
				url:"http://157.122.54.189:9088/image/v3/homepage/vertical"
			}).then(res =>{
				console.log(res);
			})
		}
		
	} */
</script>

<style>
	.swiper-box{
		height: 400upx;
	}
	.categoryText{
		color: #844619; 
		text-align: center;
		font-size:unset;
	}
	.center-bar{
		width: 100%;
		height: 25rpx;
		background-color:#f2f2f2;
	}
	.fruitName{
		font-size: medium;
	}
	.fruitPrice{
		color: #ff7e00;
	}
	.flashSale{
		width: 100%;
		height: 340rpx;
	}
	.title-bar{
		width: 100%;
		height: 80rpx;
	}
	.div-bar{
		height: 80%;
		padding: 15rpx;
	}	
	.title-bar-text{
		font-size: 37upx;
		color: #ff7e00;
	}
	.fruitMessage1{
		font-size: 45rpx;
		margin-top: 60rpx;
	}
	.fruitMessage2{
		font-size: 30rpx;
		margin-top: 10rpx;
		color: #919191;
	}
	.home-purchase-click{
		font-size: 40rpx;
		background-color:#ff7e00;
		color: #ffffff;
		width:200rpx;
		margin: auto;
	}
	.jxsp-image{
		width: 370rpx;height: 370rpx;
	}
	.jxsp-name{
		text-align: center;
		font-size:unset;
		color: #844619;
		font-size: 33rpx;
	}
	.jxsp-price{
		text-align: center;
		font-size:unset;
		color: #ff7e00;
		font-size: 33rpx;
	}
	.jxsp-xl{
		text-align: center;
		font-size:unset;
		color: #919191;
		font-size: 33rpx;
	}
	.label-text{
		text-align: center;
		font-size:unset;
		color: #919191;
		font-size: 30rpx;
	}
</style>
