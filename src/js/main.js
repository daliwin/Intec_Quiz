var render = require('./render')
var tabletop = require('tabletop')

tabletop.init({
	key: 'https://docs.google.com/spreadsheets/d/13XzLHg5GiXcxk66_X9U-7BDKkizIF0mKpUFfhWxE2KI/pubhtml',
	callback: function (tabletopData, tabletop) {
		//console.log(tabletopData)
		render(tabletopData)
	},
	simpleSheet: true
})

