let stickSubMenu = document.querySelector('[data-sticky=submenu]');
if(!!stickSubMenu) {
	console.log()
    let pos = stickSubMenu.offsetTop;
	let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        let ssd = window.pageYOffset;
		let vh = document.documentElement.clientHeight;
        if (pos > 200) {
            if (st > pos) {
                stickSubMenu.classList.add('fixed');
            } else {
                stickSubMenu.classList.remove('fixed');
            }
        }
        if (st > lastScrollTop){
            stickSubMenu.classList.remove('up');
			stickSubMenu.classList.add('down');
			if(ssd > vh) {
                stickSubMenu.classList.add('deeper');
            }
			if(ssd > (pos + 10)) {
                stickSubMenu.classList.add('slim');
            }
        } else {
            stickSubMenu.classList.add('up');
            stickSubMenu.classList.remove('down');
			if(ssd < vh) {
                stickSubMenu.classList.remove('deeper');
            }
			if(ssd < (pos + 10)) {
                stickSubMenu.classList.remove('slim');
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; 
    });
}
