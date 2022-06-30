<template>
	<view>
		<button type="primary" @tap="navigateToPrePage">上一页</button>
	</view>
</template>

<script>
	// #ifdef APP
	const QtAnalytics = uni.requireNativePlugin('qtdev-analytics-plugin')
	// #endif	
	import QT from '../../utils/sdkAdaptor.js'
	export default {
		onShow() {
			// #ifdef APP-PLUS
			QtAnalytics.onPageStart('Page2')
			// #endif
			QT.sendPV({a: 1, b: 2, c: 3, page_name: 'manpv_page_custom', d: undefined, e: null, f: ''})
		},
		onHide() {
			// #ifdef APP-PLUS
				QtAnalytics.onPageEnd('Page2')
			// #endif
		},
		onUnload() {
			// #ifdef APP-PLUS
				QtAnalytics.onPageEnd('Page2')
			// #endif
		},
		data() {
			return {
				navigateToPrePage: function() {
					uni.navigateBack({
						
					});
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
