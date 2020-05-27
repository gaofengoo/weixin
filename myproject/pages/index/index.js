Page({
	data: {
		count: 0
	},
	countclick: function () {
		this.setData({
			count: this.data.count + 1
		});
	}
});