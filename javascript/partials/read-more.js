function crBtn(p) {
	let b = document.createElement('a');
	b.className = 'feed-more';
	b.href = '#';
	b.innerText = 'Read more';
	p.append(b);
}

function setReadMore() {
	let q = 50;
	let more = document.querySelectorAll('[data-toggle="more"]:not(.more)');
	if(!!more) {
		more.forEach(function(item){
			console.log(item);
			let getHeight = item.querySelector('.js-getHeight');
			if(!!getHeight) {
				let h = getHeight.clientHeight;
				console.log(h);
				if(h > q) {
					item.classList.add('more');
					item.style.height = q + 'px';
					crBtn(item);
					let btnRM = item.querySelector('.feed-more');
					if(!!btnRM) {
						btnRM.addEventListener('click', function(e){
							e.preventDefault();
							console.log(btnRM);
							if ((" " + this.className + " ").replace(/[\n\t]/g, " ").indexOf(" active ") > -1) {
								item.style.height = q + 'px';
							} else {
								item.style.height = h + 'px';
							}
							this.classList.toggle('active');
						});
					}
				}
			}
		});
	}
}

setReadMore();
