// smart banner

let Smartbanner_ = function(){
	let ua = navigator.userAgent;

	this.ua = ua;
	this.bapps = document.getElementById('smart-banner');
	this.bappsLink = document.getElementById('smart-link');
	this.bappsRating = document.getElementById('smart-rating');
	this.bappsType = document.getElementById('smart-type');
	let runningStandAlone = navigator.standalone;
	
	if(!this.bapps) {
		return;
	}
	
	this.android = new RegExp(/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i);		
	this.ios = new RegExp(/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i);
	
	if (this.ios.exec(this.ua)) {
		this.type = 'ios';
		this.typeTxt = 'iOS';
	} else 
	if (this.android.exec(this.ua)) {
		this.type = 'android';
		this.typeTxt = 'Android';
	} else {
		this.type = 'other';
		this.typeTxt = '';
	}
	
	if(!this.type || this.type=='other' || runningStandAlone) {
		this.hide();
		return;
	}
	
	this.genLink = {
		ios: this.bappsLink.getAttribute('data-appstore'),
		android: this.bappsLink.getAttribute('data-playstore')
	}
	
	this.info();
	this.create();
	// this.show();
}

Smartbanner_.prototype = {

	info: function(){
		console.log(this.ua + ' - ' + this.type);
	},

	useragent: function(){
		var ci = this.ios.exec(this.ua);
		var ca = this.android.exec(this.ua);

		if(!!ci) {
			return ci;
		} else if(!!ca) {
			return ca;
		} else {
			return;
		}
	},

	create: function() {

		let yuk = document.getElementById('download-now');
		if(!!yuk) {
			yuk.setAttribute('href', this.genLink[this.type]);
		}

		this.bappsLink.setAttribute('href', this.genLink[this.type]);
		this.bappsType.innerHTML = this.typeTxt;
		this.bappsRating.setAttribute('style', 'width: '+(this.bappsRating.getAttribute('data-rating') / 5 * 100)+'%');

		let cls = this.bapps.getElementsByClassName('smart-close')[0];
		if(!!this.bappsLink) {
			this.bappsLink.addEventListener('click', this.install.bind(this), false);
		}
		
		if(!!cls) {
			cls.addEventListener('click', this.hide.bind(this), false);
		}

	},

	show: function(){
		this.bapps.classList.remove('-hide')
	},
	
	hide: function(){
		this.bapps.classList.add('-hide')
	},
	
	install: function(){
		this.bapps.classList.add('-hide')
	}
}

let y_ = new Smartbanner_();
