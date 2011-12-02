Ext.define('CMN.view.form.MaskedEditDateTime', {
	extend : 'Ext.form.field.Text',
	
	baseChars : "0123456789APap",

	format : null, // "m/d/Y H:i:s a",
	separators : [ '/', ':', " ", 'm', 'M' ],
	emptyStr : null, // "__/__/____ __:__:__ am",

	beforeEditVal : "",

	constructor : function(config) {
		this.format = config.format || "m/d/Y h:i:s a";
		CMN.view.form.MaskedEditDateTime.superclass.constructor.call(this, config);
	},

	initComponent : function() {
		CMN.view.form.MaskedEditDateTime.superclass.initComponent.call(this);
		this.emptyStr = this.createEmptyStr(this.format);
	},

	/**
	 * create an empty string , according to format eg.format = "m/d/Y H:i:s"
	 * would return "__/__/____ __:__:__"
	 */
	createEmptyStr : function() {
		var tmp = Ext.Date.format(new Date(), this.format);
		console.log(tmp);
		var ret = '';

		var sep = this.separators.concat([ 'a', 'A' ]);
		for ( var i = 0; i < tmp.length; i++) {
			var ch = tmp.charAt(i);

			if (sep.indexOf(ch) != -1)
				ret += ch;
			else
				ret += '_';

		}
		console.log(ret);
		return ret;
	},
	
	getEmptyStr : function() {
		return this.emptyStr || this.createEmptyStr();
	},

	// private
	onRender : function(ct, position) {
		CMN.view.form.MaskedEditDateTime.superclass.onRender.call(this, ct, position);
		// var s='';for(var p in this.el.dom){s+=p+'\n';}alert(s);

		this.el.on('keydown', this.onKeydown, this);
		this.el.on('keypress', this.onKeypress, this);
	},

	onKeydown : function(evt) {
		// if user pressed special keys that won't fire a keypress event eg.
		// delete,backspace we'll try to restore original value
		if (!this.validCharCode(evt.getCharCode())) {
			evt.stopEvent();

			var ele = this.el.dom;
			var pos = this.getCaretPosition(ele); // store caret position

			ele.value = this.beforeEditVal; // reset the field value
			this.setCaretPosition(ele, pos);
		}
	},

	validCharCode : function(charCode) {// alert(charCode);
		var zeroToNine = (charCode >= 48 && charCode <= 57);
		var aOrP = (charCode == 97 || charCode == 65 || charCode == 112 || charCode == 80); // a ,
																							// A ,
																							// p ,
																							// P
																							// respectively
		var arrows = (charCode == 37 || charCode == 39); // arrow keys left
															// and right

		return zeroToNine || aOrP || arrows;
	},

	/** Return true if a new char can be inserted at pos */
	canInsert : function(ch, pos) {
		var insertChar = (ch.toLowerCase() === 'a' || ch.toLowerCase() === 'p');
		var isSeperator = [ '/', ':', ' ' ].indexOf(ch) != -1; // are we going
																// to replace a
																// separator

		if (isSeperator)
			return false; // we can't replace a separator
		else {
			var replacedChar = this.emptyStr.charAt(pos);
			if (insertChar) {
				return (replacedChar.toLowerCase() == 'a' || replacedChar.toLowerCase() == 'p');
			} // only 'a' or 'p' can be replaced by a new 'a' or 'p'
			else {
				return (replacedChar == '_');
			} // only '_' can be replaced by a number
		}

	},

	// private
	onKeypress : function(evt) {
		var self = this;
		setTimeout(function() {
			if (!self.validCharCode(evt.getCharCode())) {
				evt.stopEvent();
				return;
			}
			
			var s = String.fromCharCode(evt.getCharCode());
			console.log(s);
			var ele = $(self.el.dom).find('input')[0];// textfield's input tag
			console.log(ele);
			var pos = self.getCaretPosition(ele);
			console.log(pos);

			var val = self.beforeEditVal || "";

			// prevent replacing separator (could happen when using mouse to
			// place caret position in front of separator)
			/*
			 * var oldChar = val.charAt(pos);
			 * if(this.separators.indexOf(oldChar)!=-1) {evt.stopEvent();
			 * this.setCaretPosition(ele,pos); return; }
			 */
			if (!self.canInsert(s, pos)) {
				evt.stopEvent();
				self.setCaretPosition(ele, pos);
				return;
			}

			ele.value = val.substring(0, pos - 1) + s + val.substring(pos);

			var newPos = self.nextCaretPosition(ele, pos);// pos+1;
			self.beforeEditVal = ele.value;
			evt.stopEvent();// alert(newPos);
			self.setCaretPosition(ele, newPos);
		}, 1000);

	},

	nextCaretPosition : function(ele, pos) {
		var s = ele.value;
		var maxIndex = s.length - 1;
		var ret = pos;

//		ret = ret + 1;  TOTO Confirm.
		while (ret < maxIndex) {

			// check to see if the new index is for seperator , if yes,
			// increment the index.
			if (this.separators.indexOf(s.charAt(ret)) != -1)
				ret += 1;
			else
				return ret;
		}

		return (ret > maxIndex) ? maxIndex : ret;
	},

	// private , adapt from
	// http://www.webdeveloper.com/forum/archive/index.php/t-74982.html
	getCaretPosition : function(oField) {

		// Initialize
		var iCaretPos = 0;

		// IE Support
		if (document.selection) {

			// Set focus on the element
			oField.focus();

			// To get cursor position, get empty selection range
			var oSel = document.selection.createRange();

			// Move selection start to 0 position
			oSel.moveStart('character', -oField.value.length);

			// The caret position is selection length
			iCaretPos = oSel.text.length;
		}

		// Firefox support
		else if (oField.selectionStart || oField.selectionStart == '0') {
			iCaretPos = oField.selectionStart;			
		}
		
//		console.log(oField.selectionStart);

		// Return results
		return (iCaretPos);
	},

	/*
	 * * Sets the caret (cursor) position of the specified text field. * Valid
	 * positions are 0-oField.length. adapt from
	 * http://www.webdeveloper.com/forum/archive/index.php/t-74982.html
	 */
	setCaretPosition : function(oField, iCaretPos) {

		// IE Support
		if (document.selection) {

			// Set focus on the element
			oField.focus();

			// Create empty selection range
			var oSel = document.selection.createRange();

			// Move selection start and end to 0 position
			oSel.moveStart('character', -oField.value.length);

			// Move selection start and end to desired position
			oSel.moveStart('character', iCaretPos);
			oSel.moveEnd('character', 0);
			oSel.select();
		}

		// Firefox support
		else if (oField.selectionStart || oField.selectionStart == '0') {
			oField.selectionStart = iCaretPos;
			oField.selectionEnd = iCaretPos;
			oField.focus();
		}
	},

	// private
	initEvents : function() {
		var allowed = this.baseChars + '';
		if (this.allowDecimals) {
			allowed += this.decimalSeparator;
		}
		if (this.allowNegative) {
			allowed += '-';
		}
		this.maskRe = new RegExp('[' + Ext.escapeRe(allowed) + ']');
		Ext.form.field.Number.superclass.initEvents.call(this);
	},

	setValue : function(date) {
		var d = this.formatDate(this.parseDate(date));
		var v = (d) ? d : this.getEmptyStr();
		this.beforeEditVal = v;
		return CMN.view.form.MaskedEditDateTime.superclass.setValue.call(this, v);
	},

	/**
	 * Returns the current date value of the date field.
	 * 
	 * @return {Date} The date value
	 */
	getValue : function() {
		return this.parseDate(CMN.view.form.MaskedEditDateTime.superclass.getValue.call(this)) || "";
	},

	// private
	formatDate : function(date) {
		return Ext.isDate(date) ? date.dateFormat(this.format) : date;
	},

	// private
	parseDate : function(value) {
		if (!value || Ext.isDate(value)) {
			return value;
		}

		var v = this.safeParse(value, this.format);
		// af = this.altFormats,
		// afa = this.altFormatsArray;
		//
		// if (!v && af) {
		// afa = afa || af.split("|");
		//
		// for (var i = 0, len = afa.length; i < len && !v; i++) {
		// v = this.safeParse(value, afa[i]);
		// }
		// }
		return v;
	},

	// PUBLIC -- to be documented
	safeParse : function(value, format) {
		return Ext.Date.parse(value, format);
	}
});