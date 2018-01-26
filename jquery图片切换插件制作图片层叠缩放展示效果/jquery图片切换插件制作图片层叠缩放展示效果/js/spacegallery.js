/**
 *
 * Zoomimage
 * Author: Stefan Petre www.eyecon.ro
 * 
 */
(function($){
	var EYE = window.EYE = function() {
		var _registered = {
			init: []
		};
		return {
			init: function() {
				$.each(_registered.init, function(nr, fn){
					fn.call();
				});
			},
			extend: function(prop) {
				for (var i in prop) {
					if (prop[i] != undefined) {
						this[i] = prop[i];
					}
				}
			},
			register: function(fn, type) {
				if (!_registered[type]) {
					_registered[type] = [];
				}
				_registered[type].push(fn);
			}
		};
	}();
	$(EYE.init);
})(jQuery);

/**
 *
 * Spacegallery
 * Author: Stefan Petre www.eyecon.ro
 * 
 */

(function($){
	EYE.extend({
		
		spacegallery: {
			
			//default options (many options are controled via CSS)
			defaults: {
				border: 6, // border arround the image
				perspective: 140, // perpective height
				minScale: 0.2, // minimum scale for the image in the back
				duration: 400, // aimation duration
				loadingClass: null, // CSS class applied to the element while looading images
				before: function(){return false},
				after: function(){return false}
			},
			
			animated: false,
			
			//position images
			positionImages: function(el) {
				var top = 0;
				EYE.spacegallery.animated = false;
				$(el)
					.find('a')
						.removeClass(el.spacegalleryCfg.loadingClass)
						.end()
					.find('img')
						.removeAttr('height')
						.each(function(nr){
							var newWidth = this.spacegallery.origWidth - (this.spacegallery.origWidth - this.spacegallery.origWidth * el.spacegalleryCfg.minScale) * el.spacegalleryCfg.asins[nr];
							$(this)
								.css({
									top: el.spacegalleryCfg.tops[nr] + 'px',
									marginRight:  parseInt(((newWidth + el.spacegalleryCfg.border)/12)-20, 10) + 'px',
									opacity: 1 - el.spacegalleryCfg.asins[nr]
								})
								.attr('width', parseInt(newWidth));
							this.spacegallery.next = el.spacegalleryCfg.asins[nr+1];
							this.spacegallery.nextTop = el.spacegalleryCfg.tops[nr+1] - el.spacegalleryCfg.tops[nr];
							this.spacegallery.origTop = el.spacegalleryCfg.tops[nr];
							this.spacegallery.opacity = 1 - el.spacegalleryCfg.asins[nr];
							this.spacegallery.increment = el.spacegalleryCfg.asins[nr] - this.spacegallery.next;
							this.spacegallery.current = el.spacegalleryCfg.asins[nr];
							this.spacegallery.width = newWidth;
						})
			},
			
			//animate to nex image
			next: function(e) {
				if (EYE.spacegallery.animated === false) {
					EYE.spacegallery.animated = true;
					var el = this.parentNode;
					el.spacegalleryCfg.before.apply(el);
					$(el)
						.css('spacegallery', 0)
						.animate({
							spacegallery: 100
						},{
							easing: 'easeOut',
							duration: el.spacegalleryCfg.duration,
							complete: function() {
								$(el)
									.find('img:last')
									.prependTo(el);
								EYE.spacegallery.positionImages(el);
								el.spacegalleryCfg.after.apply(el);
							},
							step: function(now) {
								$('img', this)
									.each(function(nr){
										var newWidth, top, next;
										if (nr + 1 == el.spacegalleryCfg.images) {
											top = this.spacegallery.origTop + this.spacegallery.nextTop * 4 * now /100;
											newWidth = this.spacegallery.width * top / this.spacegallery.origTop;
											$(this)
												.css({
													top: top + 'px',
													opacity: 0.7 - now/100,
													marginRight:  parseInt(((newWidth + el.spacegalleryCfg.border)/12)-20, 10) + 'px'
												})
												.attr('width', newWidth);
										} else {
											next = this.spacegallery.current - this.spacegallery.increment * now /100;
											newWidth = this.spacegallery.origWidth - (this.spacegallery.origWidth - this.spacegallery.origWidth * el.spacegalleryCfg.minScale) * next;
											$(this).css({
												top: this.spacegallery.origTop + this.spacegallery.nextTop * now /100 + 'px',
												opacity: 1 - next,
												marginRight:  parseInt(((newWidth + el.spacegalleryCfg.border)/12)-20, 10) + 'px'
											})
											.attr('width', newWidth);
										}
									});
							}
						});
				}
					
				this.blur();
				return false;
			},
			
			//constructor
			init: function(opt) {
				opt = $.extend({}, EYE.spacegallery.defaults, opt||{});
				return this.each(function(){
					var el = this;
					if ($(el).is('.spacegallery')) {
						$('<a href="#"></a>')
							.appendTo(this)
							.addClass(opt.loadingClass)
							.bind('click', EYE.spacegallery.next);
						el.spacegalleryCfg = opt;
						el.spacegalleryCfg.images = el.getElementsByTagName('img').length;
						el.spacegalleryCfg.loaded = 0;
						el.spacegalleryCfg.asin = Math.asin(1);
						el.spacegalleryCfg.asins = {};
						el.spacegalleryCfg.tops = {};
						el.spacegalleryCfg.increment = parseInt(el.spacegalleryCfg.perspective/el.spacegalleryCfg.images, 10);
						var top = 0;
						$('img', el)
							.each(function(nr){
								var imgEl = new Image();
								var elImg = this;
								el.spacegalleryCfg.asins[nr] = 1 - Math.asin((nr+1)/el.spacegalleryCfg.images)/el.spacegalleryCfg.asin;
								top += el.spacegalleryCfg.increment - el.spacegalleryCfg.increment * el.spacegalleryCfg.asins[nr];
								el.spacegalleryCfg.tops[nr] = top;
								elImg.spacegallery = {};
								imgEl.src = this.src;
								if (imgEl.complete) {
									el.spacegalleryCfg.loaded ++;
									elImg.spacegallery.origWidth = imgEl.width;
									elImg.spacegallery.origHeight = imgEl.height
								} else {
									imgEl.onload = function() {
										el.spacegalleryCfg.loaded ++;
										elImg.spacegallery.origWidth = imgEl.width;
										elImg.spacegallery.origHeight = imgEl.height
										if (el.spacegalleryCfg.loaded == el.spacegalleryCfg.images) {
										
											EYE.spacegallery.positionImages(el);
										}
									};
								}
							});
						el.spacegalleryCfg.asins[el.spacegalleryCfg.images] = el.spacegalleryCfg.asins[el.spacegalleryCfg.images - 1] * 1.3;
						el.spacegalleryCfg.tops[el.spacegalleryCfg.images] = el.spacegalleryCfg.tops[el.spacegalleryCfg.images - 1] * 1.3;
						if (el.spacegalleryCfg.loaded == el.spacegalleryCfg.images) {
							EYE.spacegallery.positionImages(el);
						}
					}
				});
			}
		}
	});
	
	$.fn.extend({
	
		/**
		 * Create a space gallery
		 * @name spacegallery
		 * @description create a space gallery
		 * @option	int			border			Images' border. Default: 6
		 * @option	int			perspective		Perpective height. Default: 140
		 * @option	float		minScale		Minimum scale for the image in the back. Default: 0.2
		 * @option	int			duration		Animation duration. Default: 800
		 * @option	string		loadingClass	CSS class applied to the element while looading images. Default: null
		 * @option	function	before			Callback function triggered before going to the next image
		 * @option	function	after			Callback function triggered after going to the next image
		 */
		spacegallery: EYE.spacegallery.init
	});
	$.extend($.easing,{
		easeOut:function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		}
	});
})(jQuery);