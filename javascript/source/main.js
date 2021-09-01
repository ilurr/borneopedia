
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
//=include '../partials/nav-submenu.js'

// nav menu
//=include '../partials/nav.js'

// overlay
//=include '../partials/overlay.js'

// form
//=include '../partials/form-manipulate.js'

// inline form
//=include '../partials/inline-form.js'

// auto height post 
//=include '../partials/autoheight-input.js'

// button follow 
//=include '../partials/button-follow.js'

// emoji picker
//=include '../partials/emoji.js'

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

// tooltips
$(function () {
	$('[data-tooltip="tooltip"]').tooltip()
})
