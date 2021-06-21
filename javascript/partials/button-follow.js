let btn = document.querySelectorAll('[data-follow]');
if(!!btn) {
	btn.forEach(function(item, index){
		item.addEventListener('click', function(e){
			let df = item.getAttribute('data-follow');
			let dl = item.getAttribute('data-lock');
			if(df=="Follow") {
				if(!!dl) {
					item.setAttribute('data-follow','Requested');
				} else {
					item.setAttribute('data-follow','Following');
				}
			} 
			if(df=="Requested") {
				item.setAttribute('data-follow','Follow');
			} 
			if(df=="Following") {
				item.setAttribute('data-follow','Follow');
			} 
		});
	});
}
