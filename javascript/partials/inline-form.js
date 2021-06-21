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
