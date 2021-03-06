
// [JS-LIB - UXM Utils]
// (c) 2006-2015 unix-world.org - all rights reserved
// v.2015.02.21

// DEPENDS: -

//==================================================================
//==================================================================

//=======================================
// CLASS :: Core Utils
//=======================================

var Uxm_Utils = new function() { // START CLASS

// :: static

var _class = this; // self referencing


// trim string at begining or end by any whitespace: space \n \r \t
this.stringTrim = function(str) {
	//--
	if((typeof str == 'undefined') || (str == undefined) || (str == null)) {
		str = '';
	} else {
		str = '' + str; // force string
	} //end if else
	str = str.toString();
	//--
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	//--
} //END FUNCTION


// split string by comma with trimming pre/post
this.stringSplitbyComma = function(str) {
	//--
	if((typeof str == 'undefined') || (str == undefined) || (str == null)) {
		str = '';
	} else {
		str = '' + str; // force string
	} //end if else
	str = str.toString();
	//--
	str = _class.stringTrim(str);
	return str.split( /,\s*/ );
	//--
} //END FUNCTION


// split string by semicolon with trimming pre/post
this.stringSplitbySemicolon = function(str) {
	//--
	if((typeof str == 'undefined') || (str == undefined) || (str == null)) {
		str = '';
	} else {
		str = '' + str; // force string
	} //end if else
	str = str.toString();
	//--
	str = _class.stringTrim(str);
	return str.split( /;\s*/ );
	//--
} //END FUNCTION


// case sensitive replace all occurences
this.stringReplaceAll = function(token, newToken, str) {
	//--
	if((typeof str == 'undefined') || (str == undefined) || (str == null)) {
		str = '';
	} else {
		str = '' + str; // force string
	} //end if else
	str = str.toString();
	//--
	return str.split(token).join(newToken);
	//--
} //END FUNCTION


// case insensitive replace all occurences
this.stringIReplaceAll = function(token, newToken, str) {
	//--
	if((typeof str == 'undefined') || (str == undefined) || (str == null)) {
		str = '';
	} else {
		str = '' + str; // force string
	} //end if else
	str = str.toString();
	//--
	var i = -1;
	//--
	if((str != '') && (typeof token === 'string') && (typeof newToken === 'string')) {
		//--
		token = token.toLowerCase();
		//--
		while((i = str.toLowerCase().indexOf(token, i >= 0 ? i + newToken.length : 0)) !== -1) {
			str = '' + str.substring(0, i) + newToken + str.substring(i + token.length);
		} //end while
		//--
	} //end if
	//--
	return str;
	//--
} //END FUNCTION


// Format Number as Integer
this.format_number_int = function(y_number, y_allow_negatives) {
	//--
	if((typeof y_number == 'undefined') || (y_number == null) || (y_number == '') || (isNaN(y_number))) {
		y_number = 0;
	} //end if
	//--
	if(y_allow_negatives !== true) {
		y_allow_negatives = false;
	} //end if
	//--
	y_number = parseInt('' + y_number);
	if(isNaN(y_number)) {
		y_number = 0;
	} //end if
	//--
	if(y_allow_negatives !== true) { // force as positive
		if(y_number < 0) {
			y_number = parseInt(-1 * y_number);
		} //end if
		if(isNaN(y_number)) {
			y_number = 0;
		} //end if
		if(y_number < 0) {
			y_number = 0;
		} //end if
	} //end if
	//--
	return y_number;
	//--
} //END FUNCTION


// Format Number as Decimal[1..4], Default is 2 Decimals
this.format_number_dec = function(y_number, y_decimals, y_allow_negatives, y_keep_trailing_zeroes) {
	//--
	if((typeof y_number == 'undefined') || (y_number == null) || (y_number == '') || (isNaN(y_number))) {
		y_number = 0;
	} //end if
	//--
	if((typeof y_decimals == 'undefined') || (y_decimals == null) || (y_decimals == '')) {
		y_decimals = 2; // default;
	} //end if
	y_decimals = parseInt(y_decimals);
	if(isNaN(y_decimals)) {
		y_decimals = 2;
	} //end if
	if((y_decimals < 1) || (y_decimals > 4)) {
		y_decimals = 2;
	} //end if
	//--
	if(y_allow_negatives !== true) {
		y_allow_negatives = false;
	} //end if
	//--
	y_number = parseFloat('' + y_number).toFixed(y_decimals);
	if(isNaN(y_number)) {
		y_number = parseFloat(0).toFixed(y_decimals);
	} //end if
	//--
	if(y_allow_negatives !== true) { // force as positive
		if(y_number < 0) {
			y_number = parseFloat(-1 * y_number).toFixed(y_decimals);
		} //end if
		if(isNaN(y_number)) {
			y_number = parseFloat(0).toFixed(y_decimals);
		} //end if
		if(y_number < 0) {
			y_number = parseFloat(0).toFixed(y_decimals);
		} //end if
	} //end if
	//-- remove trailing zeroes if not set to keep them
	if(y_keep_trailing_zeroes !== false) {
		y_number = parseFloat(y_number);
	} //end if
	//--
	return y_number;
	//--
} //END FUNCTION


// Escape URL Param
this.escape_url = function(str) {
	//-- format sting
	if((typeof str == 'undefined') || (str == undefined) || (str == null)) {
		str = '';
	} else {
		str = '' + str; // force string
	} //end if else
	str = str.toString();
	//--
	return encodeURIComponent(str);
	//--
} //END FUNCTION


// Convert special characters to HTML entities v.141211
// This is like the Smart::escape_html() in PHP Framework
this.escape_html = function(str, quote_style) {
	//-- format sting
	if((typeof str == 'undefined') || (str == undefined) || (str == null)) {
		str = '';
	} else {
		str = '' + str; // force string
	} //end if else
	str = str.toString();
	//-- replace basics
	str = str.replace(/&/g, '&amp;');
	str = str.replace(/</g, '&lt;');
	str = str.replace(/>/g, '&gt;');
	//-- replace quotes, depending on quote_style
	if(quote_style == 'ENT_QUOTES') { // ENT_QUOTES
		//-- replace all quotes: ENT_QUOTES
		str = str.replace(/"/g, '&quot;');
		str = str.replace(/'/g, '&#039;');
		//--
	} else if (quote_style != 'ENT_NOQUOTES') { // ENT_COMPAT
		//-- default, replace just double quotes
		str = str.replace(/"/g, '&quot;');
		//--
	} //end if else
	//--
	return str;
	//--
} //END FUNCTION


// Convert special characters to escaped entities for use as Javascript String v.141211
// This is like the Smart::escape_js() in PHP Framework
this.escape_js = function(str) {
	//--
	if((typeof str == 'undefined') || (str == undefined) || (str == null)) {
		str = '';
	} else {
		str = '' + str; // force string
	} //end if else
	str = str.toString();
	//-- table of character substitutions: get from json2.js but excludding the " which is done later to preserve compatibility with PHP
	var meta = {
		'\b': '\\b',
		'\t': '\\t',
		'\n': '\\n',
		'\f': '\\f',
		'\r': '\\r',
		'\\': '\\\\'
	};
	//-- replace meta
	var encoded = str.replace(/[\x00-\x1f\x7f-\x9f\\]/g, function(a){ var c = meta[a]; return typeof c === 'string' ? c: escape_unicode(a); });
	//-- replace unicode characters
	encoded = encoded.replace(/[\u007F-\uFFFF]/g, function(c){return escape_unicode(c);});
	//-- replace special characters
	encoded = encoded.replace(/[\u0026]/g, '\\u0026');	// & 	JSON_HEX_AMP
	encoded = encoded.replace(/[\u0022]/g, '\\u0022');	// " 	JSON_HEX_QUOT
	encoded = encoded.replace(/[\u0027]/g, '\\u0027');	// ' 	JSON_HEX_APOS
	encoded = encoded.replace(/[\u003C]/g, '\\u003C'); 	// < 	JSON_HEX_TAG (use uppercase as in PHP)
	encoded = encoded.replace(/[\u003E]/g, '\\u003E'); 	// > 	JSON_HEX_TAG (use uppercase as in PHP)
	encoded = encoded.replace(/[\/]/g, '\\/');			// /
	//-- return string
	return '' + encoded;
	//--
} //END FUNCTION


// escape a string as unicode
var escape_unicode = function(str) {
	return '\\u' + ('0000' + str.charCodeAt(0).toString(16)).slice(-4).toLowerCase();
} //END FUNCTION


// replace new lines with <br> tag
this.nl2br = function(str) {
	//--
	if((typeof str == 'undefined') || (str == undefined) || (str == null)) {
		str = '';
	} else {
		str = '' + str; // force string
	} //end if else
	str = str.toString();
	//--
	return str.replace(/\r\n/g, /\n/).replace(/\r/g, /\n/).replace(/\n/g, '<br>');
	//--
} //END FUNCTION


// UTF-8 :: encode
this.utf8_encode = function(string) {
	//--
	var utftext = '';
	//--
	string = string.replace(/\r\n/g,"\n");
	for (var n = 0; n < string.length; n++) {
		var c = string.charCodeAt(n);
		if (c < 128) {
			utftext += String.fromCharCode(c);
		} else if((c > 127) && (c < 2048)) {
			utftext += String.fromCharCode((c >> 6) | 192);
			utftext += String.fromCharCode((c & 63) | 128);
		} else {
			utftext += String.fromCharCode((c >> 12) | 224);
			utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			utftext += String.fromCharCode((c & 63) | 128);
		} //end if else
	} //end for
	//--
	return utftext;
	//--
} //END FUNCTION


// UTF-8 :: decode
this.utf8_decode = function(utftext) {
	//--
	var string = '';
	//--
	var i = 0;
	var c = c1 = c2 = 0;
	while ( i < utftext.length ) {
		c = utftext.charCodeAt(i);
		if (c < 128) {
			string += String.fromCharCode(c);
			i++;
		} else if((c > 191) && (c < 224)) {
			c2 = utftext.charCodeAt(i+1);
			string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
			i += 2;
		} else {
			c2 = utftext.charCodeAt(i+1);
			c3 = utftext.charCodeAt(i+2);
			string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
			i += 3;
		} //end if else
	} //end while
	//--
	return string;
	//--
} //END FUNCTION


// returns a dump of the object
this.print_Object = function(obj, mode, level) {
	//--
	// mode : undefined | 'recursive'
	// level ; @auto@ : undefined
	//--
	var obj_key;
	var the_marker = '#########################' + '\n';
	var out_txt = '';
	var recursive;
	//--
	if((typeof(mode) != 'undefined') && (mode != null) && (mode === 'recursive')) {
		recursive = true;
		if((typeof(level) === 'undefined') || (level == null)) {
			level = 0;
			out_txt = the_marker;
		} //end if
	} else {
		recursive = false;
		level = 0;
	} //end if
	//--
	level = parseInt(level);
	//--
	for(obj_key in obj) {
		if((recursive) && (obj[obj_key] != null) && (typeof(obj[obj_key]) == 'object')) {
			out_txt = out_txt + _class.print_Object(obj[obj_key], mode, level) + the_marker;
			level++;
		} else {
			out_txt = out_txt + 'Object#' + level + '[' + obj_key + '] = ' + obj[obj_key] + '\n';
		} //end if else
	} //end for
	//--
	return out_txt;
	//--
} //END FUNCTION


} //END CLASS

//==================================================================
//==================================================================

// #END
