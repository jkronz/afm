!function(t,e){t.rails!==e&&t.error("jquery-ujs has already been loaded!");var i,n=t(document);t.rails=i={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",buttonClickSelector:"button[data-remote], button[data-confirm]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with], a[data-disable]",buttonDisableSelector:"button[data-remote][data-disable-with], button[data-remote][data-disable]",CSRFProtection:function(e){var i=t('meta[name="csrf-token"]').attr("content");i&&e.setRequestHeader("X-CSRF-Token",i)},refreshCSRFTokens:function(){var e=t("meta[name=csrf-token]").attr("content"),i=t("meta[name=csrf-param]").attr("content");t('form input[name="'+i+'"]').val(e)},fire:function(e,i,n){var o=t.Event(i);return e.trigger(o,n),o.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t.attr("href")},handleRemote:function(n){var o,s,a,r,l,h,d,c;if(i.fire(n,"ajax:before")){if(r=n.data("cross-domain"),l=r===e?null:r,h=n.data("with-credentials")||null,d=n.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,n.is("form")){o=n.attr("method"),s=n.attr("action"),a=n.serializeArray();var p=n.data("ujs:submit-button");p&&(a.push(p),n.data("ujs:submit-button",null))}else n.is(i.inputChangeSelector)?(o=n.data("method"),s=n.data("url"),a=n.serialize(),n.data("params")&&(a=a+"&"+n.data("params"))):n.is(i.buttonClickSelector)?(o=n.data("method")||"get",s=n.data("url"),a=n.serialize(),n.data("params")&&(a=a+"&"+n.data("params"))):(o=n.data("method"),s=i.href(n),a=n.data("params")||null);return c={type:o||"GET",data:a,dataType:d,beforeSend:function(t,o){return o.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+o.accepts.script),i.fire(n,"ajax:beforeSend",[t,o])?void n.trigger("ajax:send",t):!1},success:function(t,e,i){n.trigger("ajax:success",[t,e,i])},complete:function(t,e){n.trigger("ajax:complete",[t,e])},error:function(t,e,i){n.trigger("ajax:error",[t,e,i])},crossDomain:l},h&&(c.xhrFields={withCredentials:h}),s&&(c.url=s),i.ajax(c)}return!1},handleMethod:function(n){var o=i.href(n),s=n.data("method"),a=n.attr("target"),r=t("meta[name=csrf-token]").attr("content"),l=t("meta[name=csrf-param]").attr("content"),h=t('<form method="post" action="'+o+'"></form>'),d='<input name="_method" value="'+s+'" type="hidden" />';l!==e&&r!==e&&(d+='<input name="'+l+'" value="'+r+'" type="hidden" />'),a&&h.attr("target",a),h.hide().append(d).appendTo("body"),h.submit()},formElements:function(e,i){return e.is("form")?t(e[0].elements).filter(i):e.find(i)},disableFormElements:function(e){i.formElements(e,i.disableSelector).each(function(){i.disableFormElement(t(this))})},disableFormElement:function(t){var i,n;i=t.is("button")?"html":"val",n=t.data("disable-with"),t.data("ujs:enable-with",t[i]()),n!==e&&t[i](n),t.prop("disabled",!0)},enableFormElements:function(e){i.formElements(e,i.enableSelector).each(function(){i.enableFormElement(t(this))})},enableFormElement:function(t){var e=t.is("button")?"html":"val";t.data("ujs:enable-with")&&t[e](t.data("ujs:enable-with")),t.prop("disabled",!1)},allowAction:function(t){var e,n=t.data("confirm"),o=!1;return n?(i.fire(t,"confirm")&&(o=i.confirm(n),e=i.fire(t,"confirm:complete",[o])),o&&e):!0},blankInputs:function(e,i,n){var o,s,a=t(),r=i||"input,textarea",l=e.find(r);return l.each(function(){if(o=t(this),s=o.is("input[type=checkbox],input[type=radio]")?o.is(":checked"):o.val(),!s==!n){if(o.is("input[type=radio]")&&l.filter('input[type=radio]:checked[name="'+o.attr("name")+'"]').length)return!0;a=a.add(o)}}),a.length?a:!1},nonBlankInputs:function(t,e){return i.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){var n=t.data("disable-with");t.data("ujs:enable-with",t.html()),n!==e&&t.html(n),t.bind("click.railsDisable",function(t){return i.stopEverything(t)})},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable")}},i.fire(n,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,n){t.crossDomain||i.CSRFProtection(n)}),n.delegate(i.linkDisableSelector,"ajax:complete",function(){i.enableElement(t(this))}),n.delegate(i.buttonDisableSelector,"ajax:complete",function(){i.enableFormElement(t(this))}),n.delegate(i.linkClickSelector,"click.rails",function(n){var o=t(this),s=o.data("method"),a=o.data("params"),r=n.metaKey||n.ctrlKey;if(!i.allowAction(o))return i.stopEverything(n);if(!r&&o.is(i.linkDisableSelector)&&i.disableElement(o),o.data("remote")!==e){if(r&&(!s||"GET"===s)&&!a)return!0;var l=i.handleRemote(o);return l===!1?i.enableElement(o):l.error(function(){i.enableElement(o)}),!1}return o.data("method")?(i.handleMethod(o),!1):void 0}),n.delegate(i.buttonClickSelector,"click.rails",function(e){var n=t(this);if(!i.allowAction(n))return i.stopEverything(e);n.is(i.buttonDisableSelector)&&i.disableFormElement(n);var o=i.handleRemote(n);return o===!1?i.enableFormElement(n):o.error(function(){i.enableFormElement(n)}),!1}),n.delegate(i.inputChangeSelector,"change.rails",function(e){var n=t(this);return i.allowAction(n)?(i.handleRemote(n),!1):i.stopEverything(e)}),n.delegate(i.formSubmitSelector,"submit.rails",function(n){var o,s,a=t(this),r=a.data("remote")!==e;if(!i.allowAction(a))return i.stopEverything(n);if(a.attr("novalidate")==e&&(o=i.blankInputs(a,i.requiredInputSelector),o&&i.fire(a,"ajax:aborted:required",[o])))return i.stopEverything(n);if(r){if(s=i.nonBlankInputs(a,i.fileInputSelector)){setTimeout(function(){i.disableFormElements(a)},13);var l=i.fire(a,"ajax:aborted:file",[s]);return l||setTimeout(function(){i.enableFormElements(a)},13),l}return i.handleRemote(a),!1}setTimeout(function(){i.disableFormElements(a)},13)}),n.delegate(i.formInputClickSelector,"click.rails",function(e){var n=t(this);if(!i.allowAction(n))return i.stopEverything(e);var o=n.attr("name"),s=o?{name:o,value:n.val()}:null;n.closest("form").data("ujs:submit-button",s)}),n.delegate(i.formSubmitSelector,"ajax:send.rails",function(e){this==e.target&&i.disableFormElements(t(this))}),n.delegate(i.formSubmitSelector,"ajax:complete.rails",function(e){this==e.target&&i.enableFormElements(t(this))}),t(function(){i.refreshCSRFTokens()}))}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.affix"),s="object"==typeof e&&e;o||n.data("bs.affix",o=new i(this,s)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.2.0",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=t(document).height(),n=this.$target.scrollTop(),o=this.$element.offset(),s=this.options.offset,a=s.top,r=s.bottom;"object"!=typeof s&&(r=a=s),"function"==typeof a&&(a=s.top(this.$element)),"function"==typeof r&&(r=s.bottom(this.$element));var l=null!=this.unpin&&n+this.unpin<=o.top?!1:null!=r&&o.top+this.$element.height()>=e-r?"bottom":null!=a&&a>=n?"top":!1;if(this.affixed!==l){null!=this.unpin&&this.$element.css("top","");var h="affix"+(l?"-"+l:""),d=t.Event(h+".bs.affix");this.$element.trigger(d),d.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(h).trigger(t.Event(h.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:e-this.$element.height()-r}))}}};var n=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),n=i.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),o=i.data("bs.alert");o||i.data("bs.alert",o=new n(this)),"string"==typeof e&&o[e].call(i)})}var i='[data-dismiss="alert"]',n=function(e){t(e).on("click",i,this.close)};n.VERSION="3.2.0",n.prototype.close=function(e){function i(){s.detach().trigger("closed.bs.alert").remove()}var n=t(this),o=n.attr("data-target");o||(o=n.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,""));var s=t(o);e&&e.preventDefault(),s.length||(s=n.hasClass("alert")?n:n.parent()),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",i).emulateTransitionEnd(150):i())};var o=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=n,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",i,n.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.button"),s="object"==typeof e&&e;o||n.data("bs.button",o=new i(this,s)),"toggle"==e?o.toggle():e&&o.setState(e)})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.isLoading=!1};i.VERSION="3.2.0",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",n=this.$element,o=n.is("input")?"val":"html",s=n.data();e+="Text",null==s.resetText&&n.data("resetText",n[o]()),n[o](null==s[e]?this.options[e]:s[e]),setTimeout(t.proxy(function(){"loadingText"==e?(this.isLoading=!0,n.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var n=t(i.target);n.hasClass("btn")||(n=n.closest(".btn")),e.call(n,"toggle"),i.preventDefault()})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.carousel"),s=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e),a="string"==typeof e?e:s.slide;o||n.data("bs.carousel",o=new i(this,s)),"number"==typeof e?o.to(e):a?o[a]():s.interval&&o.pause().cycle()})}var i=function(e,i){this.$element=t(e).on("keydown.bs.carousel",t.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",t.proxy(this.pause,this)).on("mouseleave.bs.carousel",t.proxy(this.cycle,this))};i.VERSION="3.2.0",i.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},i.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},i.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},i.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},i.prototype.to=function(e){var i=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"));return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){i.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",t(this.$items[e]))},i.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},i.prototype.next=function(){return this.sliding?void 0:this.slide("next")},i.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},i.prototype.slide=function(e,i){var n=this.$element.find(".item.active"),o=i||n[e](),s=this.interval,a="next"==e?"left":"right",r="next"==e?"first":"last",l=this;if(!o.length){if(!this.options.wrap)return;o=this.$element.find(".item")[r]()}if(o.hasClass("active"))return this.sliding=!1;var h=o[0],d=t.Event("slide.bs.carousel",{relatedTarget:h,direction:a});if(this.$element.trigger(d),!d.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=t(this.$indicators.children()[this.getItemIndex(o)]);c&&c.addClass("active")}var p=t.Event("slid.bs.carousel",{relatedTarget:h,direction:a});return t.support.transition&&this.$element.hasClass("slide")?(o.addClass(e),o[0].offsetWidth,n.addClass(a),o.addClass(a),n.one("bsTransitionEnd",function(){o.removeClass([e,a].join(" ")).addClass("active"),n.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(p)},0)}).emulateTransitionEnd(1e3*n.css("transition-duration").slice(0,-1))):(n.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(p)),s&&this.cycle(),this}};var n=t.fn.carousel;t.fn.carousel=e,t.fn.carousel.Constructor=i,t.fn.carousel.noConflict=function(){return t.fn.carousel=n,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(i){var n,o=t(this),s=t(o.attr("data-target")||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=t.extend({},s.data(),o.data()),r=o.attr("data-slide-to");r&&(a.interval=!1),e.call(s,a),r&&s.data("bs.carousel").to(r),i.preventDefault()}}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var i=t(this);e.call(i,i.data())})})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.collapse"),s=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);!o&&s.toggle&&"show"==e&&(e=!e),o||n.data("bs.collapse",o=new i(this,s)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};i.VERSION="3.2.0",i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var i=t.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var o=n.data("bs.collapse");if(o&&o.transitioning)return;e.call(n,"hide"),o||n.data("bs.collapse",null)}var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var r=t.camelCase(["scroll",s].join("-"));this.$element.one("bsTransitionEnd",t.proxy(a,this)).emulateTransitionEnd(350)[s](this.$element[0][r])}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(n,this)).emulateTransitionEnd(350):n.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=t.fn.collapse;t.fn.collapse=e,t.fn.collapse.Constructor=i,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var n,o=t(this),s=o.attr("data-target")||i.preventDefault()||(n=o.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),a=t(s),r=a.data("bs.collapse"),l=r?"toggle":o.data(),h=o.attr("data-parent"),d=h&&t(h);r&&r.transitioning||(d&&d.find('[data-toggle="collapse"][data-parent="'+h+'"]').not(o).addClass("collapsed"),o[a.hasClass("in")?"addClass":"removeClass"]("collapsed")),e.call(a,l)})}(jQuery),+function(t){"use strict";function e(e){e&&3===e.which||(t(o).remove(),t(s).each(function(){var n=i(t(this)),o={relatedTarget:this};n.hasClass("open")&&(n.trigger(e=t.Event("hide.bs.dropdown",o)),e.isDefaultPrevented()||n.removeClass("open").trigger("hidden.bs.dropdown",o))}))}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new a(this)),"string"==typeof e&&n[e].call(i)})}var o=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.2.0",a.prototype.toggle=function(n){var o=t(this);if(!o.is(".disabled, :disabled")){var s=i(o),a=s.hasClass("open");if(e(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e);var r={relatedTarget:this};if(s.trigger(n=t.Event("show.bs.dropdown",r)),n.isDefaultPrevented())return;o.trigger("focus"),s.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},a.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var n=t(this);if(e.preventDefault(),e.stopPropagation(),!n.is(".disabled, :disabled")){var o=i(n),a=o.hasClass("open");if(!a||a&&27==e.keyCode)return 27==e.which&&o.find(s).trigger("focus"),n.trigger("click");var r=" li:not(.divider):visible a",l=o.find('[role="menu"]'+r+', [role="listbox"]'+r);if(l.length){var h=l.index(l.filter(":focus"));38==e.keyCode&&h>0&&h--,40==e.keyCode&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s+', [role="menu"], [role="listbox"]',a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.tab");o||n.data("bs.tab",o=new i(this)),"string"==typeof e&&o[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.2.0",i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=i.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:o});if(e.trigger(s),!s.isDefaultPrevented()){var a=t(n);this.activate(e.closest("li"),i),this.activate(a,a.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:o})})}}},i.prototype.activate=function(e,i,n){function o(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),n&&n()}var s=i.find("> .active"),a=n&&t.support.transition&&s.hasClass("fade");a?s.one("bsTransitionEnd",o).emulateTransitionEnd(150):o(),s.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(i){i.preventDefault(),e.call(t(this),"show")})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var o=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(o,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(t){"use strict";function e(i,n){var o=t.proxy(this.process,this);this.$body=t("body"),this.$scrollElement=t(t(i).is("body")?window:i),this.options=t.extend({},e.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",o),this.refresh(),this.process()}function i(i){return this.each(function(){var n=t(this),o=n.data("bs.scrollspy"),s="object"==typeof i&&i;o||n.data("bs.scrollspy",o=new e(this,s)),"string"==typeof i&&o[i]()})}e.VERSION="3.2.0",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e="offset",i=0;t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var n=this;this.$body.find(this.selector).map(function(){var n=t(this),o=n.data("target")||n.attr("href"),s=/^#./.test(o)&&t(o);return s&&s.length&&s.is(":visible")&&[[s[e]().top+i,o]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),o=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=n)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<=o[0])return a!=(t=s[0])&&this.activate(t);for(t=o.length;t--;)a!=s[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")};var n=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(e,n){return this.each(function(){var o=t(this),s=o.data("bs.modal"),a=t.extend({},i.DEFAULTS,o.data(),"object"==typeof e&&e);s||o.data("bs.modal",s=new i(this,a)),"string"==typeof e?s[e](n):a.show&&s.show(n)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.2.0",i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var i=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var n=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),n&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var o=t.Event("shown.bs.modal",{relatedTarget:e});n?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(o)}).emulateTransitionEnd(300):i.$element.trigger("focus").trigger(o)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var i=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&n;if(this.$backdrop=t('<div class="modal-backdrop '+n+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;o?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(150):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var s=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(150):s()}else e&&e()},i.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var n=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=n,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var n=t(this),o=n.attr("href"),s=t(n.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),a=s.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},s.data(),n.data());n.is("a")&&i.preventDefault(),s.one("show.bs.modal",function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",function(){n.is(":visible")&&n.trigger("focus")})}),e.call(s,a,this)})}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.tooltip"),s="object"==typeof e&&e;(o||"destroy"!=e)&&(o||n.data("bs.tooltip",o=new i(this,s)),"string"==typeof e&&o[e]())})}var i=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};i.VERSION="3.2.0",i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,n){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(n),this.$viewport=this.options.viewport&&t(this.options.viewport.selector||this.options.viewport);for(var o=this.options.trigger.split(" "),s=o.length;s--;){var a=o[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,n){i[t]!=n&&(e[t]=n)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show()},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide()},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var i=t.contains(document.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!i)return;var n=this,o=this.tip(),s=this.getUID(this.type);this.setContent(),o.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&o.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,r=/\s?auto?\s?/i,l=r.test(a);l&&(a=a.replace(r,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.$element);var h=this.getPosition(),d=o[0].offsetWidth,c=o[0].offsetHeight;if(l){var p=a,f=this.$element.parent(),u=this.getPosition(f);a="bottom"==a&&h.top+h.height+c-u.scroll>u.height?"top":"top"==a&&h.top-u.scroll-c<0?"bottom":"right"==a&&h.right+d>u.width?"left":"left"==a&&h.left-d<u.left?"right":a,o.removeClass(p).addClass(a)
}var m=this.getCalculatedOffset(a,h,d,c);this.applyPlacement(m,a);var g=function(){n.$element.trigger("shown.bs."+n.type),n.hoverState=null};t.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",g).emulateTransitionEnd(150):g()}},i.prototype.applyPlacement=function(e,i){var n=this.tip(),o=n[0].offsetWidth,s=n[0].offsetHeight,a=parseInt(n.css("margin-top"),10),r=parseInt(n.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),e.top=e.top+a,e.left=e.left+r,t.offset.setOffset(n[0],t.extend({using:function(t){n.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),n.addClass("in");var l=n[0].offsetWidth,h=n[0].offsetHeight;"top"==i&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(i,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var c=d.left?2*d.left-o+l:2*d.top-s+h,p=d.left?"left":"top",f=d.left?"offsetWidth":"offsetHeight";n.offset(e),this.replaceArrow(c,n[0][f],p)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(){function e(){"in"!=i.hoverState&&n.detach(),i.$element.trigger("hidden.bs."+i.type)}var i=this,n=this.tip(),o=t.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(o),o.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],n="BODY"==i.tagName;return t.extend({},"function"==typeof i.getBoundingClientRect?i.getBoundingClientRect():null,{scroll:n?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop(),width:n?t(window).width():e.outerWidth(),height:n?t(window).height():e.outerHeight()},n?{top:0,left:0}:e.offset())},i.prototype.getCalculatedOffset=function(t,e,i,n){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-n,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-n/2,left:e.left-i}:{top:e.top+e.height/2-n/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,n){var o={top:0,left:0};if(!this.$viewport)return o;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+n;r<a.top?o.top=a.top-r:l>a.top+a.height&&(o.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?o.left=a.left-h:d>a.width&&(o.left=a.left+a.width-d)}return o},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var n=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=n,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.popover"),s="object"==typeof e&&e;(o||"destroy"!=e)&&(o||n.data("bs.popover",o=new i(this,s)),"string"==typeof e&&o[e]())})}var i=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");i.VERSION="3.2.0",i.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),i.prototype.constructor=i,i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content").empty()[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},i.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var n=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=i,t.fn.popover.noConflict=function(){return t.fn.popover=n,this}}(jQuery);