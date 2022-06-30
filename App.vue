<script>
	// #ifdef APP-PLUS
	const QtAnalytics = uni.requireNativePlugin('qtdev-analytics-plugin');
	// #endif
	export default {
		onLaunch: function() {
			// 线上示例使用
			// console.log('%c uni-app官方团队诚邀优秀前端工程师加盟，一起打造更卓越的uni-app & uniCloud，欢迎投递简历到 hr2013@dcloud.io', 'color: red');
			console.log('App Launch');
			// #ifdef APP-PLUS
			const isAuthed = uni.getStorageSync('user_authed');
			console.log('yz------isAuthed', isAuthed);
			const QtAnalytics = uni.requireNativePlugin('qtdev-analytics-plugin');
			if (isAuthed) {
				QtAnalytics.init('8e5dhq1zs4ae28p6z3x3lyaw', 'aliyun', 1, '');
			}
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		globalData: {
			test: ''
		},
		methods: {

		}
	}
</script>

<style>
	/* #ifndef APP-PLUS-NVUE */

	/* #endif*/
</style>
