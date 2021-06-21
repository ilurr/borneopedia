
// slider
let slider = document.querySelectorAll('[data-slider="gallery"]');
if(!!slider) {
	slider.forEach(function(item){
		let slider = tns({
			container: item,
			navPosition: 'bottom',
			controlsText: ['<span class="icon-arrow icon-arrow-left"></span>','<span class="icon-arrow icon-arrow-right"></span>'],
			autoplay: false,
			loop: false,
			autoHeight: true,
			//lazyload: true,
			mouseDrag: true,
		  });
	});
}

let slider2 = document.querySelectorAll('[data-slider="belt"]');
if(!!slider2) {
	slider2.forEach(function(item){
		let slider2 = tns({
			container: item,
			nav: false,
			controlsText: ['<span class="icon-arrow icon-arrow-left"></span>','<span class="icon-arrow icon-arrow-right"></span>'],
			autoplay: false,
			loop: true,
			items: 5,
			// fixedWidth: 120,
			// viewportMax: true,
			// autoWidth: true,
			autoHeight: true,
			//lazyload: true,
			mouseDrag: true,
		  });
	});
}

// nav submenu
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


// nav menu
//=include '../partials/nav.js'

// overlay
function openOverlay(el) {
	if(!!el) {
		el.classList.add('-show');
	}
}
function closeOverlay(el) {
	if(!!el) {
		el.classList.remove('-show');
	}
}
document.addEventListener('click', function(e){
	let ol = e.target.dataset.overlay;
	if(ol=="true") {
		// console.log('klik')
		closeOverlay(e.target);
	}
});


// form
function triggerEvent(el, eventName) {
	let event = document.createEvent('HTMLEvents')
	event.initEvent(eventName, true, false)
	el.dispatchEvent(event)
}
  
let p = gca('.form-select');
if(!!p) {
	p.forEach(function(item, index){
		let select = item.querySelector('select');
		// console.log(select)
		select.addEventListener('change', function(e) {
			if(e.target.value == 0) {
				item.classList.add('init');
			} else {
				item.classList.remove('init');
			}
			//e.target.classList[e.target.value == 0 ? 'add' : 'remove']('empty')
		})
		triggerEvent(select, 'change')
	});
}


// inline form
let inlineForm = document.querySelectorAll('[data-toggle=inline]');
if(!!inlineForm) {
	inlineForm.forEach(function(item, index){
		let getTarget = item.getAttribute('data-target');
		// console.log(getTarget);
		if(!!getTarget) {
			let targetItem = document.getElementById(getTarget);
			// let getHeightInline = targetItem.children[0].clientHeight;
			// console.log(targetItem);
			// console.log(getHeightInline);
			item.addEventListener('click', function(e){
				if(!!targetItem) {
					targetItem.classList.add('show');
				}
				this.style.visibility = 'hidden';
				let getEl = targetItem.getElementsByTagName('textarea')[0];
				if(!!getEl) {
					let elt = getEl.getAttribute('id');
					// console.log(elt)
					tinymce.get(elt).focus();
				}
				// this.classList.add('-disabled');
				//this.setAttribute('disabled','disabled');
			});
		}
	});
}


// auto height post 
const tx = document.getElementById('qna-textarea-add');
if(!!tx) {
	tx.setAttribute('style', 'height:' + (tx.scrollHeight) + 'px;overflow-y:hidden;');
	tx.addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}


// button follow 
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


// emoji picker
let emoji = document.getElementById('emoji')
let inside = false
let input;

if(!!emoji) {
	// console.log(emoji)	
	document.addEventListener('click', function(e){
		let dataToggle = e.target.dataset.toggle;
		let roots = document.querySelectorAll('.emoji.show')[0]
		let rootsem = document.querySelectorAll('[data-toggle="emoji"].active')[0]
		// console.log(roots)
		// console.log(rootsem)
		if(!!roots || !!rootsem) {
			// console.log('ada yg aktif nih')
			if(roots.contains(e.target) || rootsem.contains(e.target)) {
			} else {
				roots.classList.remove('show')
				rootsem.classList.remove('active')
			// 	// rootsem.forEach(function(item){
			// 	// 		item.classList.remove('active')
			// 	// 		console.log('outside')
			// 	// });
			}
		}
		// console.log(rootsem)
		// roots.forEach(function(item){
		// 	if(item.contains(e.target)) {
		// 		console.log('inside')
		// 	} else {
		// 		item.classList.remove('show')
		// 		console.log('outside')
		// 	}
		// });
		if(dataToggle=="emoji") {
			let parent = e.target.closest("."+e.target.dataset.container);
			if(!!parent) {
				let emoji2 = parent.querySelector('[data-emoji]');
				input = parent.querySelector("."+e.target.dataset.target);
				let rendered = e.target.dataset.render;
				// console.log(emoji2)
				// console.log(e.target.className)
				//if((" " + e.target.className + " ").replace(/[\n\t]/g, " ").indexOf("active") > -1 ) {
				//	console.log('ada cy')
				//	e.target.classList.remove('active');
				//	emoji2.classList.remove('show');
				//} else {
					e.target.classList.add('active');
					if(!rendered) {
						let k = emoji.querySelector('[data-emoji]').cloneNode(true);
						parent.appendChild(k);
						e.target.setAttribute('data-render',true);
						k.classList.add('show');
					} else {
						emoji2.classList.add('show');
					}
				//}

				// bisa kah
				// let btn = parent.querySelector()
			}
		// } else {

		}
		if(dataToggle=="emojiTab") {
			let parentTab = e.target.closest('[data-emoji]');
			// console.log(e.target)
			// e.target.classList.
			if(!!parentTab) {
				let btn = parentTab.querySelectorAll('[data-toggle=emojiTab]')
				let pnl = parentTab.querySelectorAll('[data-emoji-id]')
				let trg = e.target.getAttribute('data-target');
				// console.log(btn)
				// console.log(trg)
				btn.forEach(function(item){
					// console.log(item)					
					item.classList.remove('active')
				});
				e.target.classList.add('active');

				pnl.forEach(function(item){
					// console.log(item.getAttribute('data-emoji-id'))
					
					item.classList.remove('active')
					if(item.getAttribute('data-emoji-id') == trg) {
					// if(item.contains('[data-emeji-id="'+trg+'"')) {
						// console.log('lo')
						item.classList.add('active');
					}
				});
				// parentTab.classList.add('active');
			}
		}
		if(dataToggle=="emojiIcon") {
			// console.log(e.target.innerHTML)
			if(!!input) {
				insertAtCaret(input, e.target.innerHTML)
			}
		}
	});
}

function insertAtCaret(txtarea, text) {
	// var txtarea = document.getElementById(areaId);
	if (!txtarea) {
		return;
	}

	var scrollPos = txtarea.scrollTop;
	var strPos = 0;
	var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
		"ff" : (document.selection ? "ie" : false));
	if (br == "ie") {
		txtarea.focus();
		var range = document.selection.createRange();
		range.moveStart('character', -txtarea.value.length);
		strPos = range.text.length;
	} else if (br == "ff") {
		strPos = txtarea.selectionStart;
	}

	var front = (txtarea.value).substring(0, strPos);
	var back = (txtarea.value).substring(strPos, txtarea.value.length);
	txtarea.value = front + text + back;
	strPos = strPos + text.length;
	if (br == "ie") {
		txtarea.focus();
		var ieRange = document.selection.createRange();
		ieRange.moveStart('character', -txtarea.value.length);
		ieRange.moveStart('character', strPos);
		ieRange.moveEnd('character', 0);
		ieRange.select();
	} else if (br == "ff") {
		txtarea.selectionStart = strPos;
		txtarea.selectionEnd = strPos;
		txtarea.focus();
	}

	txtarea.scrollTop = scrollPos;
}


//datepicker
$('.js-datepicker').datepicker({
	// format: 'yyyy/mm/dd',
	format: 'dd M yyyy',
	container: '#js-datepicker-container',
	autoclose: true,
	zIndexOffset: 8,
	endDate: '0d'
});    

//scrollbar
$('.aside-scroll').scrollbar();;

