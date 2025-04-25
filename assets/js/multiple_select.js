/* # Multiple select
---------------------------------------------- */
// helper function to check if the click was outside the element
function isOutsideNodeAndChildren($node, e) {
	// if the target of the click isn't the container...
	// nor a descendant of the container
	if (!$node.is(e.target) && $node.has(e.target).length === 0) {
		return true;
	} else {
		return false;
	}
}

// constructor definition
function MultiSelect($select) {
	this.$select = $select;
	this.$outer;
	this.$field;
	this.$optionList;
	this.$options;

	this.isActive = false;

	// function to create the individual options in the multi-select dropdown
	this.createMultiSelectOption = function(optionText, fieldName) {

		var option = document.createElement('div');
		var checkbox = document.createElement('input');
		var label = document.createElement('label');

		option.className = 'multi-select_option';
		option.tabIndex = -1;

		checkbox.className = 'multi-select_checkbox';
		checkbox.type = "checkbox";
		checkbox.tabIndex = '-1';
		checkbox.name = fieldName;

		label.className = 'multi-select_label';
		label.htmlFor = fieldName;
		label.textContent = optionText
		label.value = optionText

		option.appendChild(checkbox);
		option.appendChild(label);

		return option;
	}

	// function to toggle the selection state of options
	this.toggleSelected = function($option, e) {
		var $allCheckedOptions;
		var numChecked;
		var checkBox = $option.find('.multi-select_checkbox')[0];
		var $field = $option.parents('.multi-select').find('.multi-select_field');

		if (e.target.type !== 'checkbox') {
			if (checkBox.checked) checkBox.checked = false;
			else checkBox.checked = true;
		}

		$allCheckedOptions = $option.parent().find('.multi-select_option').has(':checked');
		numChecked = $allCheckedOptions.length;

		if (numChecked) {
			$field.removeClass('is-empty');

			// Si hay exactamente dos opciones seleccionadas
			if (numChecked === 2) {
				var selectedText = $allCheckedOptions.map(function() {
					return $(this).find('.multi-select_label').text();
				}).get().join(', ');  // Combina los textos con coma
				$field.text(selectedText);
			} 
			// Si hay tres o más opciones seleccionadas
			else if (numChecked > 2) {
				$field.text(numChecked + ' seleccionados');
			} 
			// Si solo hay una opción seleccionada
			else {
				$field.text($allCheckedOptions.find('.multi-select_label').text());
			}

		} else {
			$field.addClass('is-empty');
			$field.text('Haz una selección');
		}
	}

	// function to open the dropdown and attach click event to close on outside click
	this.activate = function(that) {
		this.$outer.addClass('is-active');
		this.$optionList.addClass('is-open');
		this.isActive = true;

		// make any click outside of the active multiselect close it
		$(document).on('click.closeMulti', function(e) {
			if (isOutsideNodeAndChildren(that.$outer, e)) {
				that.deactivate();
			}
		});
	}

	// function to close the dropdown
	this.deactivate = function() {
		// reset scroll position to top when opened again
		this.$optionList.scrollTop(0);

		this.$outer.removeClass('is-active');
		this.$optionList.removeClass('is-open');
		this.isActive = false;

		$(document).off('.closeMulti');
	}

	// function to attach the click event to the select field and options
	this.attachClickEvents = function(that) {
		this.$field.on('click', function(e) {
			// If the dropdown is active, close it
			if (that.isActive) {
				that.deactivate();
			} else {
				// If the dropdown is not active, open it
				that.activate(that);
			}
		});

		this.$options.on('click', function(e) {
			that.toggleSelected($(this), e);
		});
	}

	// function to handle keyboard events (tab, enter, arrow keys)
	this.attachKeyboardEvents = function(that) {
		// enforce blur on tab when any part of multi is focused.
		this.$field.on('keydown', function(e) {

			if (e.keyCode === 9) {
				that.deactivate();
				return;
			}

			if (e.keyCode === 40) {
				that.activate(that);
				that.$options.first().focus();

				// prevent scrolling the options list, let the focus handle it.
				e.preventDefault();
				return;
			}
		});

		this.$options.on('keydown', function(e) {
			switch (e.keyCode) {
				case 9:
					that.deactivate();
					break;
				case 13:
					that.toggleSelected($(this), e);
					break;
				case 40:
					$(this).next().focus();

					// prevent scrolling the options list, let the focus handle it.
					e.preventDefault();
					break;
				case 38:
					$(this).prev().focus();

					// prevent scrolling the options list, let the focus handle it.
					e.preventDefault();
					break;
				default:
					// do nothing;
					break;
			}
		});
	}

	// function to initialize the multi-select and replace the original select element
	this.init = function() {
		var that = this;

		var $options = this.$select.find('option');
		var fieldName = this.$select.attr('name');

		var multiSelect = document.createElement('div');
		var field = document.createElement('div');
		var optionsList = document.createElement('div');

		multiSelect.className = 'multi-select';
		field.className = 'multi-select_field is-empty';
		field.tabIndex = 0;
		field.textContent = 'Haz una selección';
		optionsList.className = 'multi-select_options';

		$options.each(function() {
			// if option is empty don't include it in the multi-select list
			if (!this.textContent) return;

			var o = that.createMultiSelectOption(this.textContent, fieldName);
			optionsList.appendChild(o);
		});

		multiSelect.appendChild(field);
		multiSelect.appendChild(optionsList);

		// replace regular dropdown with multi-select dropdown
		$(multiSelect).insertBefore(this.$select);
		this.$select.remove();
        this.$select = null;

		// cache multiSelect selectors
		this.$outer = $(multiSelect);
		this.$field = this.$outer.find('.multi-select_field');
		this.$optionList = this.$outer.find('.multi-select_options');
		this.$options = this.$outer.find('.multi-select_option');

		// attach multiSelect event handlers
		this.attachClickEvents(this);
		this.attachKeyboardEvents(this);
	}

}

// selectToMultiSelect plugin definition
$.fn.selectToMultiSelect = function(settings) {
	var m = new MultiSelect($(this));
	m.init();
}

// Initialize the plugin on the element with class "js-multi-select"
$('.js-multi-select').selectToMultiSelect();

