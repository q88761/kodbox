/*! Powered by kodbox;hash:cd3f66468ed32c15a330 [2023/09/27 18:47:46] */
!function(s){function t(t){for(var e,n,i=t[0],o=t[1],r=0,a=[];r<i.length;r++)n=i[r],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&a.push(l[n][0]),l[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(s[e]=o[e]);for(u&&u(t);a.length;)a.shift()()}var n={},l={"1":0};function d(t){var e;return(n[t]||(e=n[t]={"i":t,"l":!1,"exports":{}},s[t].call(e.exports,e,e.exports,d),e.l=!0,e)).exports}d.e=function(i){var o,r,t,a,e,n=[],s=l[i];return 0!==s&&(s?n.push(s[2]):(e=new Promise(function(t,e){s=l[i]=[t,e]}),n.push(s[2]=e),(o=document.createElement("script")).charset="utf-8",o.timeout=120,d.nc&&o.setAttribute("nonce",d.nc),o.src=d.p+""+({"4":"vendor"}[e=i]||e)+".js?v=cd3f6646",r=new Error,t=function(t){o.onerror=o.onload=null,clearTimeout(a);var e,n=l[i];0!==n&&(n&&(e=t&&("load"===t.type?"missing":t.type),t=t&&t.target&&t.target.src,r.message="Loading chunk "+i+" failed.\n("+e+": "+t+")",r.name="ChunkLoadError",r.type=e,r.request=t,n[1](r)),l[i]=undefined)},a=setTimeout(function(){t({"type":"timeout","target":o})},12e4),o.onerror=o.onload=t,document.head.appendChild(o))),Promise.all(n)},d.m=s,d.c=n,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{"enumerable":!0,"get":n})},d.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{"value":"Module"}),Object.defineProperty(t,"__esModule",{"value":!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{"enumerable":!0,"value":e}),2&t&&"string"!=typeof e)for(var i in e)d.d(n,i,function(t){return e[t]}.bind(null,i));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="",d.oe=function(t){throw console.error(t),t};var e=(i=window["webpackJsonp"]=window["webpackJsonp"]||[]).push.bind(i);i.push=t;for(var i=i.slice(),o=0;o<i.length;o++)t(i[o]);var u=e;d(d.s=669)}({"23":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),window.Promise||(window.Promise=Promise);var i="./static/",o=(window.API_HOST&&((o=API_HOST.split("/")).pop(),i=o.join("/")+"/static/"),window.API_URL=function(t,e){var n=window.API_HOST,i="&";return _.isNull(e)||_.isUndefined(e)?n+(t||""):(-1==n.indexOf("?")&&(i="?"),Cookie.accessToken&&(e+="&accessToken="+Cookie.accessToken),n+(t||"")+i+(e||""))},window.API_URL_TRUE=function(t){t=(t=t||window.location.href).replace(API_URL(),"").replace(G.kod.APP_HOST,"").replace("?","&");return G.kod.APP_HOST+"?"+t},window.STATIC_PATH||i),r=(n.p=o+"app/dist/",n.e(4).then(function(t){n(561),n(562),n(563),n(564),n(117),n(124),n(565),n(566),n(567),n(568),n(569),n(570),n(571),n(572),n(573),n(574),n(125),n(575),n(576),n(577),n(578),n(579),n(580),n(581),n(582),n(583),n(584),n(585),n(586),window.Pinyin=n(587)["default"],n(588),n(589),n(590),n(591),n(592),n(593),n(594),n(595),n(596),n(597),n(121),n(122),n(123),n(120),n(598),n(599),n(600),n(601),n(602),n(118),n(119),n(603),window.Backbone.$=$,window.Events=Backbone.Events,s()}.bind(null,n))["catch"](n.oe)),a=Date.now(),s=function s(){var n=seajs.use;seajs.use=function(){var t=_.toArray(arguments),i=function i(t){var e=_.get(window,"G.kod.version",""),n=_.get(window,"G.kod.build","");return!(e=1==_.get(window,"G.kod.ENV_DEV")?a:e+"."+n)||_.includes(t,"&v=")||_.includes(t,"?v=")||_.includes(t,"?")?t:(_.endsWith(t,".htm")||_.endsWith(t,".html")||_.endsWith(t,".css")||_.endsWith(t,".json")||_.endsWith(t,".js")||(t+=".js"),t+"?v="+e)},e=t[0];_.isString(e)?t[0]=i(e):_.isArray(e)&&(t[0]=_.map(e,function(t){return i(t)})),n.apply(seajs,t)},window._ktime=dateFormat(!1,"dhi"),window.requireAsync=seajs.use,window.requirePromise=function(t){var e=$.Deferred();return seajs.use(t,e.resolve),e}},l=(function(){var i;"development"==window.lessENV&&(i=XMLHttpRequest.prototype.open,XMLHttpRequest.prototype.open=function(t,e){var n=Array.prototype.slice.call(arguments,0);return e.match(/\.less$/)&&(n[1]=e+"?_t="+a),i.apply(this,n)})}(),function l(){var t=window.STATIC_PATH_ALL||i;requireAsync([t+"style/lib/alifont/iconfont.css",t+"style/lib/font-icon/style.css"])}),d=function d(){var t=API_URL("user/view/plugins","v="+time());return requirePromise(t)},u=function u(i){Events.trigger("user.optionLoadBefore");var t=API_URL("user/view/options","v="+time()+(i?"&full=1":""));return requirePromise("text!"+t).then(function(t){var e,n;(t=t&&JSON.parse(t))&&t.code&&t.data&&(window.G=_.extend(window.G||{},t.data),n=G.kod.staticPath,e=API_URL(),_.startsWith(n,"http")||(n=(n=_.startsWith(n,"/")?$.parseUrl(e).origin+n:e.substr(0,_.lastIndexOf(e,"/"))+"/"+n).replace("/./","/")),window.STATIC_PATH_ALL=window.STATIC_PATH_ALL||G.kod.APP_HOST+"static/",window.STATIC_PATH=n,window.VENDER_PATH=window.STATIC_PATH+"app/vender/",window.API_HOST=G.kod.appApi,i&&t.data._lang&&(p(t.data._lang),delete t.data._lang),$.dialog.defaults.path=window.STATIC_PATH+"app/vender/artDialog-icon/",requireAsync(window.STATIC_PATH+"style/lib/alifont/iconfont.js"),l(),Events.trigger("user.optionLoadAfter"))})},c=function c(){return u(!0)},p=function p(t){window.LNG=_.extend(window.LNG||{},_.get(t,"list")),window.G.lang=_.get(t,"lang","zh-CN"),LNG.find=function(n){var i={};return _.each(LNG,function(t,e){_.includes(t,n)&&(i[e]=t)}),i},LNG.set=function(t){t&&_.isObject(t)&&_.extend(LNG,t)},LNG.make=function(t){var e=_.toArray(arguments),n=LNG[t];if(!n)return t;for(var i=1;i<e.length;i++)n=n.replace(/(%d|%s)/,e[i]);return n},LNG.space='<i class="char-space"></i>',LNG.logo=function(t){var e,n,i=window.G.system.options||{},o="image"==i.systemNameType,r=i.systemLogo,a=STATIC_PATH+"images/common/logo.png",s=(_.includes(["zh-CN","zh-TW"],G.lang)||(a=STATIC_PATH+"images/common/logo-en.png"),G.kod.companyInfo||!1);return s&&"text"==s.logoType&&s.logoText?'<span class="logo-text" title="'+s.logoText+'" title-timeout="200"><i class="font-icon ri-cloud-fill mr-5"></i>'+s.logoText+"</span>":(e=function e(t){return'<img src="'+t+'" onerror="this.src=\''+a+"'\"/>"},n=function n(t){return'<span class="logo-text">'+t+"</span>"},"copyright"==t?(s=LNG["common.copyright.name"],"A"==window.G.kod.versionType&&LNG["common.oemCompany"]!=window.md5(_.get(window,"G.kod.channel",""))&&(r=a,s="kodbox"),o?e(r):n(s)):"login"!=t||o?e(r):n(i.systemName))}},f=function f(){var t=API_URL("user/view/lang","v="+time());return requirePromise("text!"+t).then(function(t){if(t){try{t=JSON.parse(t)}catch(e){return h(t)}t&&t.code&&t.data&&p(t.data)}})},h=function h(t){Tips.close("System error!",!1);var e=(e=$.dialog.list["xhrErrorDialog"])||$.dialog({"id":"xhrErrorDialog","padding":0,"width":"55%","height":"60%","fixed":!0,"resize":!0,"title":"System Error","content":""}),t='\n\t\t<div class="ajaxError">\n\t\t<div class="content-preview">\n\t\t<style>\n\t\t.ajaxError{\n\t\t\toverflow:auto;padding:20px 5%;color:#555;font-size:13px;line-height:1.5em;\n\t\t\tfont-family:"Lantinghei SC","Hiragino Sans GB","Microsoft Yahei",Helvetica,arial,sans-serif;\n\t\t}\n\t\t.ajaxError #msgbox{margin:0;}\n\t\t.error-tips{padding:5px 0 10px;border-bottom:1px solid #eee;margin-bottom:10px;font-size: 14px;}\n\t\t.content-preview{\n\t\t\tborder: 1px solid #fff1f0;padding:5px 20px 10px 20px;\n\t\t\tbackground: #fff9f9;border-radius:4px;margin-bottom:50px;\n\t\t}\n\t\t</style>\n\t\t<h3 style="color:#f04134" >System Error!</h3>'+htmlSafe(t)+"\n\t\t</div></div>";$.iframeHtml(e.$main.find(".aui-content"),t)},m=function m(){return r.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.5)}).then(d).then(function(){NProgress.set(.6)}).then(c).then(function(){NProgress.done(),$("body > .loading-body").fadeOut(1e3,function(){$(this).remove()})})},w=function w(){return window.API_HOST?r.then(function(){NProgress.isStarted()||NProgress.start(),NProgress.set(.6)}).then(c).then(function(){NProgress.done()}):r.then()};e.loadMain=m,e.loadApi=w,e.loadOption=u,e.loadLang=f,e.loadPlugin=d},"59":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e["default"]=function(){i(),o(),r(),l(),s(),Events.trigger("windowReady");var t=document.createEvent("CustomEvent");t.initCustomEvent("kodReadyView",!0,!0,{"source":window}),document.dispatchEvent(t)};var i=function i(){var t;$.fn.perfectScroll&&(t=function t(){$(".perfectScroll").perfectScroll()},$(window).bind("resize",t),$(window).bind("scoller",t))},o=function o(){var t,i,e;$.isWindowTouch()||$.fn.poshytip&&(t=$("[title]"),i=!1,t.poshytip({"className":"ptips-skin","liveEvents":!0,"slide":!1,"alignTo":"cursor","alignX":"right","alignY":"bottom","showAniDuration":150,"hideAniDuration":200,"offsetY":10,"offsetX":20,"showTimeout":function(t){var e=1500,n=($(this).attr("title-timeout")&&(e=parseInt($(this).attr("title-timeout"))),function n(){t.opts.showAniDuration=150,t.opts.hideAniDuration=200});return timeFloat()-$.fn.poshytip.lastHideBefore<.15?(clearTimeout(i),i=setTimeout(n,110),e<=100?e:100):(n(),e)},"content":function(t){var e,n,i,o,r=$(this);if(!$.isDraging&&!($(this).hasClass("context-menu-active")||$(this).is(":focus")||r.hasClass("disable")||r.hasClass("disable-title")))return i=r.attr("title-skin"),o=r.attr("title-position"),(e=r.parentNode("[title-root-set]"))&&(i=e.attr("title-skin"),o=e.attr("title-position")),t.addClass(i||"yellow"),o&&(e=["center bottom","center top-5"],(n=2!=(n=o.split(",")).length?e:n)[0]||(n[0]=e[0]),n[1]||(n[1]=e[1]),setTimeout(function(){t.position({"my":n[0],"at":n[1],"of":r,"collision":"flipfit flipfit"})},0)),(i=$(this).data("titleCreate"))&&_.isFunction(i)?i($(this)):(o=$(this).data("title.poshytip"),(o=-1==(o=(o=$(this).attr("title-data")?(r=$($(this).attr("title-data"))).is("input")||r.is("textarea")?r.val():r.html():o)||"").indexOf("<")&&-1==o.indexOf(">")?o.replace(/\n/g,"<br/>"):o).replace(/ /g," "))}}),e=function e(t){$("[title]").poshytip("clearTimeouts").poshytip("hide"),$(".ptips-skin").remove(),$.fn.poshytip.lastHideBefore=0},$(document).bind("mousedown mouseup click touchend touchstart",function(t){$.fn.poshytip&&!$(t.target).attr("data-require")&&e(t)}),$("input,textarea").live("focus",function(t){$.fn.poshytip&&!$(this).attr("data-require")&&e(t)}))},r=function r(){window.API_HOST&&(template.defaults.cache=!0,template.defaults.minimize=!1,template.defaults.compileDebug=!1)},a=function a(){var t,e;$.isWindowTouch()||(t=[".hover-animate-item",".menuBar .menu-item",".menu-group-submenu .menu-item-sub",".menuBar .dropdown-menu-main li.ripple-item",".setting-menu-left .menu-item-content",".admin-menu-left .menu-item-content",".frame-main-explorer .file-panel > .tab-group-line .tab-item"].join(","),e=[".disable,.disabled,.not-selectable",".setting-menu-left .menu-item.select .menu-item-content",".admin-menu-left .menu-item.select .menu-item-content"].join(","),$.hoverAnimate({"el":t,"delegate":"body","disable":e}))},l=function l(){var s,t="a,button,.ripple-item,.kui-btn,.btn,[ripple-item],.button.switch",e=t+",.context-menu-item",n=($.isWindowTouch()&&(e=t),loadRipple(e,".disable-ripple,.disabled,.disable,.ztree a,.not-selectable"),a(),$(window).bind("resize",function(){Events.trigger("window.resize")}),function n(t){return!!$(t.target).isEdit()||stopPP(t)});$(document).bind("dragover",n).bind("drop",n),$("body").delegate(".password-view","click",function(t){var e,n,i=$(this),o=i.parent().children('input[type="password"],input.input-password').not("._password-input");1==o.length&&(o.hasClass("input-password")?(i.toggleClass("active"),o.toggleClass("input-password-show").focus()):i.hasClass("active")?(o.css("display",""),i.removeClass("active"),$(i.data("textBtn")).remove(),setTimeout(function(){o.focus()},0)):(e=(e=$(o.get(0)).prop("outerHTML")).replace(/type\s*=\s*("|')?password("|')?/i,'type="text"'),n=$(e).removeAttr("readonly").insertAfter(o),o.css("display","none"),i.data("textBtn",n).addClass("active"),n.focus().val(o.val()),n.addClass("_password-view-field").data("_password-input",o),setTimeout(function(){n.focus()},0)))}),$("body").delegate("._password-view-field","change keyup keydown",function(t){var e,n=$(this).data("_password-input");1==n.length&&((e=jQuery.Event(t.type)).key=t.key,e.keyCode=t.keyCode,e.which=t.which,n.val($(this).val()).trigger(e))}),$("body").delegate("img,a","dragstart",function(t){return stopPP(t)}),window.API_HOST&&($("body").delegate("a","click",function(t){"#"==$(this).attr("href")&&t.preventDefault()}),$("body").delegate("[link-href]","click",function(t){return s(t,"")}),$("body").delegate("[link-href]","mouseup",function(t){if(2==t.which)return s(t,"_blank")}),s=function s(t,e){var n,i=$(t.currentTarget),o=i.attr("link-href")||"#",e=e||i.attr("target"),r=_.startsWith(o,"http://")||_.startsWith(o,"https://"),a=o;if(!r){if(o.startsWith("/")||o.startsWith("./"))return 2==t.which||"_blank"==e?window.open(a):void(window.location.href=o);a=$.parseUrl().urlPath+("#"==o?"":"#"+o)}return i.attr("dialog-open")||"dialog"==e?(n=i.find(".font-icon").prop("outerHTML")||"",n=htmlSafe(n+i.text()),core.openDialog(a,"",n)):r?void("_blank"==e?window.open(a):window.location.href=a):2==t.which||"_blank"==e?window.open(a):void Router.go(o)})},s=function s(){$.fn.tabCurrent=function(t){var e,n,i,o,r,a,s,l=$(this);return l&&0!=l.length&&(e=l.parent(),s=l.outerWidth(),o=l.offset().left-e.offset().left,0!=(n=e.children(".tab-item-bar")).length)&&(n.data("initTab")||(n.data("initTab",1),n.addClass("no-animate opacity-hidden"),setTimeout(function(){n.removeClass("opacity-hidden"),e.children(".tab-item").filter(".active").tabCurrent()},10),setTimeout(function(){e.children(".tab-item").filter(".active").tabCurrent(),n.removeClass("no-animate")},300)),i=e.scrollLeft()||0,r=e.offset().top+e.outerHeight(),a=l.offset().top+l.outerHeight(),s={"width":(s=+l.width())+"px","left":(o=o+(l.outerWidth()-s)/2+i)+"px","transform":"translate3d(0px,-"+Math.abs(r-a+1)+"px, 0px)"},t&&n.addClass("no-animate"),n.css(s),e.children(".tab-item").removeClass("active"),l.addClass("active"),t&&(n.offset(),n.removeClass("no-animate")),i=e.parent(),0!=(o=(i=e.attr("tab-pan-parent")?e.parents(e.attr("tab-pan-parent")):i).children(".tab-group-pan").children(".tab-content")).length)&&(r=l.attr("tab-name").replace(/'/g,"\\'"),a=o.filter(":visible"),s=o.filter("."+r),a.switchTo(s),l.trigger("tab-select")),this},$(document).delegate(".tab-group-line .tab-item","click",function(){$(this).tabCurrent()});var t=_.debounce(function(){$(".tab-group-line .tab-item.active").each(function(){$(this).tabCurrent(!0)})},50);$(window).bind("resize",t),$.isWindowTouch()&&d()},d=function d(){}},"669":function(t,e,n){t.exports=n(670)},"670":function(t,e,n){"use strict";var i=n(23),n=n(59),o=(n=n)&&n.__esModule?n:{"default":n};(0,i.loadApi)().then(function(){(0,o["default"])()})}});