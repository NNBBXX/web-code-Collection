/*!
 * aaAccordion Library v1.0
 * http://codecanyon.net/user/AA-Team/portfolio
 *
 * Copyright 2011, AA-Team
 *
 * Date: 14.12.2011
 !*/
 
 /*
	aaAccordion ChangeLog
	-------------------------
 */
(function (_0x31d4x0){_0x31d4x0["fn"]["aaAccordion"]=function (_0x31d4x1){var _0x31d4x2={animationSpeed:250,startWidth:900,startAfter:800,firstOpen:1,margin:80,easing:"easeOutQuad",clickElementNavigate:true,hoverGray:true,keyBrowse:true,pauseOnHover:true,autoplay:false,autoplaySpeed:3000,pauseOnHover:false,preloadImages:true,running:false,animationStart:function (){} ,animationComplete:function (){} };var _0x31d4x3=_0x31d4x0["extend"]({},_0x31d4x2,_0x31d4x1);return this["each"](function (){var _0x31d4x4=_0x31d4x0(this),_0x31d4x5=_0x31d4x4["find"](".content"),_0x31d4x6=_0x31d4x5["find"]("\x3Eul"),_0x31d4x7=_0x31d4x6["find"]("\x3Eli"),_0x31d4x8=_0x31d4x7["find"](".caption"),_0x31d4x9=_0x31d4x8["find"]("\x3E p"),_0x31d4xa=_0x31d4x7["find"]("img"),_0x31d4xb=_0x31d4x3["itemWidth"],_0x31d4xc=_0x31d4x3["itemHeight"],_0x31d4xd=jQuery(window),_0x31d4xe=0,_0x31d4xf=null,_0x31d4x10=null,_0x31d4x11=0,_0x31d4x12=0,_0x31d4x13=(_0x31d4x3["firstOpen"]-1),_0x31d4x14="next",_0x31d4x15=0,_0x31d4x16=_0x31d4x7["size"](),_0x31d4x17=[],_0x31d4x18=0,_0x31d4x19;var _0x31d4x1a={init:function (){_0x31d4x1a["load"]();_0x31d4x1a["initLayout"]();_0x31d4x1a["trigger"]();} ,load:function (){if(_0x31d4x3["preloadImages"]){_0x31d4xa["hide"]();_0x31d4x1a["smartPreload"]();} ;} ,smartPreload:function (){var _0x31d4x1b=[];_0x31d4xa["each"](function (_0x31d4x1c,_0x31d4x1d){var _0x31d4x1e=jQuery(this);_0x31d4x1b[_0x31d4x1c]=_0x31d4x1e["attr"]("src");} );_0x31d4x1a["preLoadImage"](_0x31d4x1b,function (){_0x31d4xa["fadeIn"](200);_0x31d4x1a["greyImages"]();} );} ,preLoadImage:function (_0x31d4x1f,_0x31d4x20){var _0x31d4x21=[],_0x31d4x22,_0x31d4x23,_0x31d4x24=0;if( typeof _0x31d4x1f!=="undefined"){if(_0x31d4x0["isArray"](_0x31d4x1f)){_0x31d4x23=_0x31d4x1f["length"];for(_0x31d4x22=0;_0x31d4x22<_0x31d4x23;_0x31d4x22++){_0x31d4x21[_0x31d4x22]= new Image();_0x31d4x21[_0x31d4x22]["onload"]=function (){_0x31d4x24++;if(_0x31d4x24===_0x31d4x23){if(_0x31d4x0["isFunction"](_0x31d4x20)){_0x31d4x20();} ;} ;} ;_0x31d4x21[_0x31d4x22]["src"]=_0x31d4x1f[_0x31d4x22];} ;} else {if(jQuery["inArray"](_0x31d4x1f,_0x31d4x17)<1){_0x31d4x21[0]= new Image();_0x31d4x21[0]["onload"]=function (){if(_0x31d4x0["isFunction"](_0x31d4x20)){_0x31d4x17["push"](_0x31d4x1f);_0x31d4x20();} ;} ;_0x31d4x21[0]["src"]=_0x31d4x1f;} else {_0x31d4x20();} ;} ;} ;_0x31d4x21=undefined;} ,centeringOnResize:function (){_0x31d4x5["width"](Math["floor"](_0x31d4xd["width"]()-_0x31d4x3["margin"]));_0x31d4xe=_0x31d4x5["width"]();var _0x31d4x25=_0x31d4xe-_0x31d4xb,_0x31d4x26=Math["floor"](_0x31d4x25/(_0x31d4x16-1));_0x31d4x7["not"](".on")["css"]({"width":_0x31d4x26});} ,initLayout:function (){_0x31d4x7["width"](_0x31d4xb);_0x31d4x7["height"](_0x31d4xc);_0x31d4x6["height"](_0x31d4xc);_0x31d4x6["width"](_0x31d4x3["startWidth"]);_0x31d4x1a["centeringOnResize"]();var _0x31d4x27=Math["floor"](_0x31d4x3["startWidth"]/_0x31d4x16);_0x31d4x8["width"](_0x31d4xb);_0x31d4x9["hide"]();_0x31d4x7["width"](_0x31d4x27);setTimeout(function (){_0x31d4x1a["openSlide"]();} ,_0x31d4x3["startAfter"]);return false;} ,openSlide:function (){var _0x31d4x28=_0x31d4x6["find"](".on");_0x31d4x28["find"]("div.caption p")["animate"]({"height":0},150,function (){jQuery(this)["hide"]();} );_0x31d4x28["find"]("canvas")["animate"]({"opacity":1},400);_0x31d4x28["removeClass"]("on");if(_0x31d4x6["width"]()<_0x31d4xe){_0x31d4x6["stop"]()["animate"]({"width":_0x31d4xe},_0x31d4x3["animationSpeed"],_0x31d4x3["easing"],function (){} );} ;var _0x31d4x29=_0x31d4x7["eq"](_0x31d4x13);if(!_0x31d4x29["hasClass"]("on")){_0x31d4x29["addClass"]("on");} ;_0x31d4x29["stop"]()["animate"]({"width":_0x31d4xb},_0x31d4x3["animationSpeed"],_0x31d4x3["easing"],function (){} );_0x31d4x29["find"]("canvas")["stop"]()["animate"]({"opacity":0},_0x31d4x3["animationSpeed"],_0x31d4x3["easing"],function (){} );var _0x31d4x25=_0x31d4xe-_0x31d4xb,_0x31d4x26=Math["floor"](_0x31d4x25/(_0x31d4x16-1));_0x31d4x7["not"](".on")["stop"]()["animate"]({"width":_0x31d4x26},_0x31d4x3["animationSpeed"],_0x31d4x3["easing"],function (){_0x31d4x3["running"]=false;_0x31d4x3["animationComplete"]["call"](this);var _0x31d4x2a=_0x31d4x9["eq"](_0x31d4x13);_0x31d4x2a["show"]()["css"]("height",0);_0x31d4x2a["show"]()["animate"]({"height":"60px"},200);} );} ,greyImages:function (_0x31d4x2b){_0x31d4xa["each"](function (_0x31d4x1c,_0x31d4x1d){var _0x31d4x1e=jQuery(this),_0x31d4x2c=jQuery("\x3Ccanvas class=\x22full-img-cvs\x22 /\x3E");_0x31d4x2c["width"](_0x31d4xb);_0x31d4x2c["height"](_0x31d4xc);_0x31d4x2c["attr"]("id","cvs-"+_0x31d4x1c);_0x31d4x1e["attr"]("id","cvs-img-"+_0x31d4x1c);_0x31d4x1e["after"](_0x31d4x2c);var _0x31d4x2c=document["getElementById"]("cvs-"+_0x31d4x1c),_0x31d4x2d=_0x31d4x2c["getContext"]("2d"),_0x31d4x2e=document["getElementById"]("cvs-img-"+_0x31d4x1c);_0x31d4x2c["width"]=_0x31d4xb;_0x31d4x2c["height"]=_0x31d4xc;_0x31d4x2d["drawImage"](_0x31d4x2e,0,0);var _0x31d4x2f=_0x31d4x2d["getImageData"](0,0,_0x31d4xb,_0x31d4xc);for(var _0x31d4x30=0;_0x31d4x30<_0x31d4x2f["height"];_0x31d4x30++){for(var _0x31d4x31=0;_0x31d4x31<_0x31d4x2f["width"];_0x31d4x31++){var _0x31d4x22=(_0x31d4x30*4)*_0x31d4x2f["width"]+_0x31d4x31*4;var _0x31d4x32=(_0x31d4x2f["data"][_0x31d4x22]+_0x31d4x2f["data"][_0x31d4x22+1]+_0x31d4x2f["data"][_0x31d4x22+2])/3;_0x31d4x2f["data"][_0x31d4x22]=_0x31d4x32;_0x31d4x2f["data"][_0x31d4x22+1]=_0x31d4x32;_0x31d4x2f["data"][_0x31d4x22+2]=_0x31d4x32;} ;} ;_0x31d4x2d["putImageData"](_0x31d4x2f,0,0,0,0,_0x31d4x2f["width"],_0x31d4x2f["height"]);} );} ,animation:{previous:function (_0x31d4x33){if(_0x31d4x13<=0){_0x31d4x13=(_0x31d4x16-1);} else {_0x31d4x13--;} ;_0x31d4x1a["openSlide"]();} ,next_item:function (_0x31d4x33){if(_0x31d4x13>=(_0x31d4x16-1)){_0x31d4x13=0;} else {_0x31d4x13++;} ;_0x31d4x1a["openSlide"]();} },keyBrowse:function (){_0x31d4x0(document)["keyup"](function (_0x31d4x34){if(_0x31d4x34["keyCode"]===37){if(_0x31d4x3["running"]){return false;} ;_0x31d4x3["running"]=true;_0x31d4x1a["animation"]["previous"]();} ;if(_0x31d4x34["keyCode"]===39){if(_0x31d4x3["running"]){return false;} ;_0x31d4x3["running"]=true;_0x31d4x1a["animation"]["next_item"]();} ;return false;} );} ,elementHoverEffect:function (){_0x31d4x7["hover"](function (){var _0x31d4x1e=jQuery(this);if(!_0x31d4x1e["hasClass"]("on")){_0x31d4x1e["find"]("canvas")["stop"]()["animate"]({"opacity":0},250);} ;} ,function (){var _0x31d4x1e=jQuery(this);if(!_0x31d4x1e["hasClass"]("on")){_0x31d4x1e["find"]("canvas")["stop"]()["animate"]({"opacity":1},250);} ;} );} ,autoplay:function (){_0x31d4x19=setInterval(function (){if(_0x31d4x3["running"]){return false;} ;_0x31d4x3["running"]=true;_0x31d4x1a["animation"]["next_item"]();} ,_0x31d4x3["autoplaySpeed"]);} ,pause:function (){clearInterval(_0x31d4x19);} ,trigger:function (){if(_0x31d4x3["clickElementNavigate"]){_0x31d4x7["live"]("click",function (){if(!jQuery(this)["hasClass"]("on")){_0x31d4x13=jQuery(this)["index"]();_0x31d4x1a["openSlide"]();return false;} ;} );} ;if(_0x31d4x3["hoverGray"]===true){var _0x31d4x35=!!document["createElement"]("canvas")["getContext"];if(_0x31d4x35){_0x31d4x1a["elementHoverEffect"]();} ;} ;if(_0x31d4x3["keyBrowse"]===true){_0x31d4x1a["keyBrowse"]();} ;if(_0x31d4x3["pauseOnHover"]===true){_0x31d4x4["hover"](function (){_0x31d4x1a["pause"]();} ,function (){_0x31d4x1a["autoplay"]();} );} ;if(_0x31d4x3["autoplay"]===true){_0x31d4x1a["autoplay"]();} ;_0x31d4xd["resize"](function (){_0x31d4x1a["centeringOnResize"]();} );} };_0x31d4x1a["init"]();} );} ;} (jQuery));


// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});