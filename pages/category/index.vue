<template>
	<view class="content">
		<!-- 搜索栏 -->
		<view class="search-bar" style="width: 100%;color: #10AEFF;">
			<uni-search-bar  @confirm="search" clearButton="none" cancelButton="none" style="background-color: #ffff7f;">
			</uni-search-bar>
		</view>
		<!-- 商品分类 -->
		<view class="goods-category" :style="categoryShow ? '' : 'display:none;'">
			<!-- 一般用法 -->
			<uni-list v-for="(item ,index) in goodsCategory" :key="index">
			    <view style="height: 100upx;background-color: #f2f2f2;">
					<uni-list-item :title="item.title" rightText="全部" @click="uniListItemClick(item)"></uni-list-item>
				</view>
				<view class="center-bar"/>
			</uni-list>
		</view>
		<!-- 商品查询，及分类产品 -->
		<!-- <view class="goodsList" :style="!categoryShow ? '' : 'display:none;'"> -->
		<view class="goodsList" v-show="!categoryShow">
			<!-- <category-goodslist></category-goodslist> -->
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
</template>

<script>
	import categoryGoodslist from "./category-goodslist";
	import {uniSearchBar} from "@dcloudio/uni-ui";
	import {uniList} from "@dcloudio/uni-ui";
	import {uniListItem} from "@dcloudio/uni-ui";
	import {uniGrid} from "@dcloudio/uni-ui";
	import {uniGridItem} from "@dcloudio/uni-ui";
	
	
	
	export default {
		components: {
			categoryGoodslist,
			uniSearchBar,
			uniList,
			uniListItem,
			uniGrid,
			uniGridItem
		},
		data(){
			return{
				goodsCategory:[{
					id:'001',
					title:'新品上市',
				},{
					id:'002',
					title:'精选商品',
				},
				{
					id:'003',
					title:'新鲜直达',
				},
				{
					id:'004',
					title:'礼品套装',
				}],
				categoryShow:true
			}
		},
		methods: {
		    search(e) {
		        console.log(e);
		    },
			uniListItemClick(e){
				console.log(e);
				console.log(this.categoryShow);
				this.categoryShow = false;
			}
		}
	}
	
</script>

<style>
	.center-bar{
		width: 100%;
		height: 25rpx;
	}
	.goods-category{
		/* background-color: #ff55ff; */
		width: 100%;
	}
	
	/* .content{
		color: #ff0000;
		
		width: 100%;
		height: 100%;
	} */
	/* page {
	background-color: #ffff7f;
	width: 100%;
	height: 100vh!important;
	
	} */
	 
</style>
