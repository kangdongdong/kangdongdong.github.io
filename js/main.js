// build time:Fri Mar 05 2021 22:20:54 GMT+0800 (GMT+08:00)
(function(e,t){var a=t.body,s=t.querySelector.bind(t),n=t.querySelectorAll.bind(t),o=s("html"),l=s("#gotop"),r=s("#menu"),c=s("#header"),d=s("#mask"),h=s("#menu-toggle"),f=s("#menu-off"),u=s("#loading"),v=e.requestAnimationFrame,m=200/(1e3/60),g=Array.prototype.forEach,L="ontouchstart"in e&&/Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent)?"touchstart":"click",p=/micromessenger/i.test(navigator.userAgent),y=function(){},w=function(e){var t=e.offsetLeft,i=e.offsetTop;if(e.offsetParent){var a=arguments.callee(e.offsetParent);t+=a.x;i+=a.y}return{x:t,y:i}},$=function(){return t.documentElement.scrollTop||t.body.scrollTop};var x={goTop:function(t){var i=$();var a=arguments.length>2?arguments[1]:Math.abs(i-t)/m;if(i&&i>t){e.scrollTo(0,Math.max(i-a,0));v(arguments.callee.bind(this,t,a))}else if(t&&i<t){e.scrollTo(0,Math.min(i+a,t));v(arguments.callee.bind(this,t,a))}else{this.toc.actived(t)}},toggleGotop:function(t){if(t>e.innerHeight/2){l.classList.add("in")}else{l.classList.remove("in")}},toggleMenu:function(t){var i=s("#main");if(t){r.classList.remove("hide");if(e.innerWidth<1241){d.classList.add("in");r.classList.add("show");if(p){var a=$();i.classList.add("lock");i.scrollTop=a}else{o.classList.add("lock")}}}else{r.classList.remove("show");d.classList.remove("in");if(p){var a=i.scrollTop;i.classList.remove("lock");e.scrollTo(0,a)}else{o.classList.remove("lock")}}},fixedHeader:function(e){if(e>c.clientHeight){c.classList.add("fixed")}else{c.classList.remove("fixed")}},toc:function(){var e=s("#post-toc");if(!e||!e.children.length){return{fixed:y,actived:y}}var t=s(".post-header").clientHeight,a=c.clientHeight,n=s("#post-content").querySelectorAll("h1, h2, h3, h4, h5, h6");e.querySelector('a[href="#'+n[0].id+'"]').parentNode.classList.add("active");return{fixed:function(i){i>=t-a?e.classList.add("fixed"):e.classList.remove("fixed")},actived:function(t){for(i=0,len=n.length;i<len;i++){if(t>w(n[i]).y-a-5){e.querySelector("li.active").classList.remove("active");var s=e.querySelector('a[href="#'+n[i].id+'"]').parentNode;s.classList.add("active")}}if(t<w(n[0]).y){e.querySelector("li.active").classList.remove("active");e.querySelector('a[href="#'+n[0].id+'"]').parentNode.classList.add("active")}}}}(),hideOnMask:[],modal:function(e){this.$modal=s(e);this.$off=this.$modal.querySelector(".close");var t=this;this.show=function(){d.classList.add("in");t.$modal.classList.add("ready");setTimeout(function(){t.$modal.classList.add("in")},0)};this.onHide=y;this.hide=function(){t.onHide();d.classList.remove("in");t.$modal.classList.remove("in");setTimeout(function(){t.$modal.classList.remove("ready")},300)};this.toggle=function(){return t.$modal.classList.contains("in")?t.hide():t.show()};x.hideOnMask.push(this.hide);this.$off&&this.$off.addEventListener(L,this.hide)},share:function(){var e=s("#pageShare"),i=s("#shareFab");var a=new this.modal("#globalShare");s("#menuShare").addEventListener(L,a.toggle);if(i){i.addEventListener(L,function(){e.classList.toggle("in")},false);t.addEventListener(L,function(t){!i.contains(t.target)&&e.classList.remove("in")},false)}var o=new this.modal("#wxShare");o.onHide=a.hide;g.call(n(".wxFab"),function(e){e.addEventListener(L,o.toggle)})},search:function(){var e=s("#search-wrap");function t(){e.classList.toggle("in")}s("#search").addEventListener(L,t)},reward:function(){var e=new this.modal("#reward");s("#rewardBtn").addEventListener(L,e.toggle);var t=s("#rewardToggle");var i=s("#rewardCode");if(t){t.addEventListener("change",function(){i.src=this.checked?this.dataset.alipay:this.dataset.wechat})}},waterfall:function(){if(e.innerWidth<760)return;g.call(n(".waterfall"),function(e){var t=e.querySelectorAll(".waterfall-item");var i=[0,0];g.call(t,function(e){var t=i[0]<=i[1]?0:1;e.style.cssText="top:"+i[t]+"px;left:"+(t>0?"50%":0);i[t]+=e.offsetHeight});e.style.height=Math.max(i[0],i[1])+"px";e.classList.add("in")})},tabBar:function(e){e.parentNode.parentNode.classList.toggle("expand")},page:function(){var e=n(".fade, .fade-scale");var t=false;return{loaded:function(){g.call(e,function(e){e.classList.add("in")});t=true},unload:function(){g.call(e,function(e){e.classList.remove("in")});t=false},visible:t}}(),lightbox:function(){function i(i){this.$img=i.querySelector("img");this.$overlay=i.querySelector("overlay");this.margin=40;this.title=this.$img.title||this.$img.alt||"";this.isZoom=false;var s,n,o,l,r;this.calcRect=function(){l=a.clientWidth;r=a.clientHeight;var e=r-this.margin*2;var t=s;var i=n;var c=this.margin;var d=0;var h=t>l?l/t:1;var f=i>e?e/i:1;var u=Math.min(h,f);t=t*u;i=i*u;return{w:t,h:i,t:(r-i)/2-o.top,l:(l-t)/2-o.left+this.$img.offsetLeft}};this.setImgRect=function(e){this.$img.style.cssText="width: "+e.w+"px; max-width: "+e.w+"px; height:"+e.h+"px; top: "+e.t+"px; left: "+e.l+"px"};this.setFrom=function(){this.setImgRect({w:o.width,h:o.height,t:0,l:(i.offsetWidth-o.width)/2})};this.setTo=function(){this.setImgRect(this.calcRect())};this.addTitle=function(){if(!this.title){return}this.$caption=t.createElement("div");this.$caption.innerHTML=this.title;this.$caption.className="overlay-title";i.appendChild(this.$caption)};this.removeTitle=function(){this.$caption&&i.removeChild(this.$caption)};var c=this;this.zoomIn=function(){s=this.$img.naturalWidth||this.$img.width;n=this.$img.naturalHeight||this.$img.height;o=this.$img.getBoundingClientRect();i.style.height=o.height+"px";i.classList.add("ready");this.setFrom();this.addTitle();this.$img.classList.add("zoom-in");setTimeout(function(){i.classList.add("active");c.setTo();c.isZoom=true},0)};this.zoomOut=function(){this.isZoom=false;i.classList.remove("active");this.$img.classList.add("zoom-in");this.setFrom();setTimeout(function(){c.$img.classList.remove("zoom-in");c.$img.style.cssText="";c.removeTitle();i.classList.remove("ready");i.removeAttribute("style")},300)};i.addEventListener("click",function(e){c.isZoom?c.zoomOut():e.target.tagName==="IMG"&&c.zoomIn()});t.addEventListener("scroll",function(){c.isZoom&&c.zoomOut()});e.addEventListener("resize",function(){c.isZoom&&c.zoomOut()})}g.call(n(".img-lightbox"),function(e){new i(e)})}(),loadScript:function(e){e.forEach(function(e){var i=t.createElement("script");i.src=e;i.async=true;a.appendChild(i)})}};e.addEventListener("load",function(){u.classList.remove("active");x.page.loaded();e.lazyScripts&&e.lazyScripts.length&&x.loadScript(e.lazyScripts)});e.addEventListener("DOMContentLoaded",function(){x.waterfall();var e=$();x.toc.fixed(e);x.toc.actived(e);x.page.loaded()});var E=false;var T=s('a[href^="mailto"]');if(T){T.addEventListener(L,function(){E=true})}e.addEventListener("beforeunload",function(e){if(!E){x.page.unload()}else{E=false}});e.addEventListener("pageshow",function(){!x.page.visible&&x.page.loaded()});e.addEventListener("resize",function(){e.BLOG.even=L="ontouchstart"in e?"touchstart":"click";x.toggleMenu();x.waterfall()});l.addEventListener(L,function(){v(x.goTop.bind(x,0))},false);h.addEventListener(L,function(e){x.toggleMenu(true);e.preventDefault()},false);f.addEventListener(L,function(){r.classList.add("hide")},false);d.addEventListener(L,function(e){x.toggleMenu();x.hideOnMask.forEach(function(e){e()});e.preventDefault()},false);t.addEventListener("scroll",function(){var e=$();x.toggleGotop(e);x.fixedHeader(e);x.toc.fixed(e);x.toc.actived(e)},false);if(e.BLOG.SHARE){x.share()}if(e.BLOG.REWARD){x.reward()}x.noop=y;x.even=L;x.$=s;x.$$=n;Object.keys(x).reduce(function(e,t){e[t]=x[t];return e},e.BLOG);if(e.Waves){Waves.init();Waves.attach(".global-share li",["waves-block"]);Waves.attach(".article-tag-list-link, #page-nav a, #page-nav span",["waves-button"])}else{console.error("Waves loading failed.")}})(window,document);
//rebuild by neat 