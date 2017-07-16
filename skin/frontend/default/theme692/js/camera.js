!function(a){a.fn.camera=function(e,t){function i(){return navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)?!0:void 0}function r(){var e=a(R).width()
a("li",R).removeClass("camera_visThumb"),a("li",R).each(function(){var t=a(this).position(),i=a("ul",R).outerWidth(),r=a("ul",R).offset().left,o=a("> div",R).offset().left,s=o-r
s>0?a(".camera_prevThumbs",X).removeClass("hideNav"):a(".camera_prevThumbs",X).addClass("hideNav"),i-s>e?a(".camera_nextThumbs",X).removeClass("hideNav"):a(".camera_nextThumbs",X).addClass("hideNav")
var n=t.left,c=t.left+a(this).width()
e>=c-s&&n-s>=0&&a(this).addClass("camera_visThumb")})}function o(){function t(){if(g=h.width(),-1!=e.height.indexOf("%")){var t=Math.round(g/(100/parseFloat(e.height)))
u=""!=e.minHeight&&t<parseFloat(e.minHeight)?parseFloat(e.minHeight):t,h.css({height:u})}else"auto"==e.height?u=h.height():(u=parseFloat(e.height),h.css({height:u}))
a(".camerarelative",_).css({width:g,height:u}),a(".imgLoaded",_).each(function(){var t,i,r=a(this),o=r.attr("width"),s=r.attr("height"),n=(r.index(),r.attr("data-alignment")),c=r.attr("data-portrait")
if((void 0===n||n===!1||""===n)&&(n=e.alignment),(void 0===c||c===!1||""===c)&&(c=e.portrait),0==c||"false"==c)if(g/u>o/s){var l=g/o,m=.5*Math.abs(u-s*l)
switch(n){case"topLeft":t=0
break
case"topCenter":t=0
break
case"topRight":t=0
break
case"centerLeft":t="-"+m+"px"
break
case"center":t="-"+m+"px"
break
case"centerRight":t="-"+m+"px"
break
case"bottomLeft":t="-"+2*m+"px"
break
case"bottomCenter":t="-"+2*m+"px"
break
case"bottomRight":t="-"+2*m+"px"}r.css({height:s*l,"margin-left":0,"margin-top":t,position:"absolute",visibility:"visible",width:g})}else{var l=u/s,m=.5*Math.abs(g-o*l)
switch(n){case"topLeft":i=0
break
case"topCenter":i="-"+m+"px"
break
case"topRight":i="-"+2*m+"px"
break
case"centerLeft":i=0
break
case"center":i="-"+m+"px"
break
case"centerRight":i="-"+2*m+"px"
break
case"bottomLeft":i=0
break
case"bottomCenter":i="-"+m+"px"
break
case"bottomRight":i="-"+2*m+"px"}r.css({height:u,"margin-left":i,"margin-top":0,position:"absolute",visibility:"visible",width:o*l})}else if(g/u>o/s){var l=u/s,m=.5*Math.abs(g-o*l)
switch(n){case"topLeft":i=0
break
case"topCenter":i=m+"px"
break
case"topRight":i=2*m+"px"
break
case"centerLeft":i=0
break
case"center":i=m+"px"
break
case"centerRight":i=2*m+"px"
break
case"bottomLeft":i=0
break
case"bottomCenter":i=m+"px"
break
case"bottomRight":i=2*m+"px"}r.css({height:u,"margin-left":i,"margin-top":0,position:"absolute",visibility:"visible",width:o*l})}else{var l=g/o,m=.5*Math.abs(u-s*l)
switch(n){case"topLeft":t=0
break
case"topCenter":t=0
break
case"topRight":t=0
break
case"centerLeft":t=m+"px"
break
case"center":t=m+"px"
break
case"centerRight":t=m+"px"
break
case"bottomLeft":t=2*m+"px"
break
case"bottomCenter":t=2*m+"px"
break
case"bottomRight":t=2*m+"px"}r.css({height:s*l,"margin-left":0,"margin-top":t,position:"absolute",visibility:"visible",width:g})}})}var i
1==E?(clearTimeout(i),i=setTimeout(t,200)):t(),E=!0}function s(){a("iframe",p).each(function(){a(".camera_caption",p).show()
var t=a(this),i=t.attr("data-src")
t.attr("src",i)
var r=e.imagePath+"blank.gif",o=new Image
if(o.src=r,-1!=e.height.indexOf("%")){var s=Math.round(g/(100/parseFloat(e.height)))
u=""!=e.minHeight&&s<parseFloat(e.minHeight)?parseFloat(e.minHeight):s}else u="auto"==e.height?h.height():parseFloat(e.height)
t.after(a(o).attr({"class":"imgFake",width:g,height:u}))
var n=t.clone()
t.remove(),a(o).bind("click",function(){"absolute"==a(this).css("position")?(a(this).remove(),-1!=i.indexOf("vimeo")||-1!=i.indexOf("youtube")?-1!=i.indexOf("?")?autoplay="&autoplay=1":autoplay="?autoplay=1":-1!=i.indexOf("dailymotion")&&(-1!=i.indexOf("?")?autoplay="&autoPlay=1":autoplay="?autoPlay=1"),n.attr("src",i+autoplay),K=!0):(a(this).css({position:"absolute",top:0,left:0,zIndex:10}).after(n),n.css({position:"absolute",top:0,left:0,zIndex:9}))})})}function n(a){for(var e,t,i=a.length;i;e=parseInt(Math.random()*i),t=a[--i],a[i]=a[e],a[e]=t);return a}function c(){if(a(R).length&&!a(L).length){var e,t=a(R).outerWidth(),i=(a("ul > li",R).outerWidth(),a("li.cameracurrent",R).length?a("li.cameracurrent",R).position():""),o=a("ul > li",R).length*a("ul > li",R).outerWidth(),s=a("ul",R).offset().left,n=a("> div",R).offset().left
e=0>s?"-"+(n-s):n-s,1==ia&&(a("ul",R).width(a("ul > li",R).length*a("ul > li",R).outerWidth()),a(R).length&&!a(L).lenght&&h.css({marginBottom:a(R).outerHeight()}),r(),a("ul",R).width(a("ul > li",R).length*a("ul > li",R).outerWidth()),a(R).length&&!a(L).lenght&&h.css({marginBottom:a(R).outerHeight()})),ia=!1
var c=a("li.cameracurrent",R).length?i.left:"",l=a("li.cameracurrent",R).length?i.left+a("li.cameracurrent",R).outerWidth():""
c<a("li.cameracurrent",R).outerWidth()&&(c=0),l-e>t?o>c+t?a("ul",R).animate({"margin-left":"-"+c+"px"},500,r):a("ul",R).animate({"margin-left":"-"+(a("ul",R).outerWidth()-t)+"px"},500,r):0>c-e?a("ul",R).animate({"margin-left":"-"+c+"px"},500,r):(a("ul",R).css({"margin-left":"auto","margin-right":"auto"}),setTimeout(r,100))}}function l(){$=0
var t=a(".camera_bar_cont",X).width(),i=a(".camera_bar_cont",X).height()
if("pie"!=f)switch(V){case"leftToRight":a("#"+v).css({right:t})
break
case"rightToLeft":a("#"+v).css({left:t})
break
case"topToBottom":a("#"+v).css({bottom:i})
break
case"bottomToTop":a("#"+v).css({top:i})}else ea.clearRect(0,0,e.pieDiameter,e.pieDiameter)}function m(t){b.addClass("camerasliding"),K=!1
var r=parseFloat(a("div.cameraSlide.cameracurrent",_).index())
if(t>0)var d=t-1
else if(r==I-1)var d=0
else var d=r+1
var k=a(".cameraSlide:eq("+d+")",_),w=a(".cameraSlide:eq("+(d+1)+")",_).addClass("cameranext")
if(r!=d+1&&w.hide(),a(".cameraContent",p).fadeOut(600),a(".camera_caption",p).show(),a(".camerarelative",k).append(a("> div ",b).eq(d).find("> div.camera_effected")),a(".camera_target_content .cameraContent:eq("+d+")",h).append(a("> div ",b).eq(d).find("> div")),a(".imgLoaded",k).length){if(F.length>d+1&&!a(".imgLoaded",w).length){var y=F[d+1],C=new Image
C.src=y+"?"+(new Date).getTime(),w.prepend(a(C).attr("class","imgLoaded").css("visibility","hidden")),C.onload=function(){_a=C.naturalWidth,ka=C.naturalHeight,a(C).attr("data-alignment",O[d+1]).attr("data-portrait",B[d+1]),a(C).attr("width",_a),a(C).attr("height",ka),o()}}e.onLoaded.call(this),a(".camera_loader",h).is(":visible")?a(".camera_loader",h).fadeOut(400):(a(".camera_loader",h).css({visibility:"hidden"}),a(".camera_loader",h).fadeOut(400,function(){a(".camera_loader",h).css({visibility:"visible"})}))
var x,T,S,M,q,P=e.rows,H=e.cols,D=1,A=0,E=["simpleFade","curtainTopLeft","curtainTopRight","curtainBottomLeft","curtainBottomRight","curtainSliceLeft","curtainSliceRight","blindCurtainTopLeft","blindCurtainTopRight","blindCurtainBottomLeft","blindCurtainBottomRight","blindCurtainSliceBottom","blindCurtainSliceTop","stampede","mosaic","mosaicReverse","mosaicRandom","mosaicSpiral","mosaicSpiralReverse","topLeftBottomRight","bottomRightTopLeft","bottomLeftTopRight","topRightBottomLeft","scrollLeft","scrollRight","scrollTop","scrollBottom","scrollHorz"]
marginLeft=0,marginTop=0,opacityOnGrid=0,1==e.opacityOnGrid?opacityOnGrid=0:opacityOnGrid=1
var z=a(" > div",b).eq(d).attr("data-fx")
if(M=i()&&""!=e.mobileFx&&"default"!=e.mobileFx?e.mobileFx:void 0!==z&&z!==!1&&"default"!==z?z:e.fx,"random"==M?(M=n(E),M=M[0]):(M=M,M.indexOf(",")>0&&(M=M.replace(/ /g,""),M=M.split(","),M=n(M),M=M[0])),dataEasing=a(" > div",b).eq(d).attr("data-easing"),mobileEasing=a(" > div",b).eq(d).attr("data-mobileEasing"),q=i()&&""!=e.mobileEasing&&"default"!=e.mobileEasing?"undefined"!=typeof mobileEasing&&mobileEasing!==!1&&"default"!==mobileEasing?mobileEasing:e.mobileEasing:"undefined"!=typeof dataEasing&&dataEasing!==!1&&"default"!==dataEasing?dataEasing:e.easing,x=a(" > div",b).eq(d).attr("data-slideOn"),void 0!==x&&x!==!1)j=x
else if("random"==e.slideOn){var j=["next","prev"]
j=n(j),j=j[0]}else j=e.slideOn
var Q=a(" > div",b).eq(d).attr("data-time")
T=void 0!==Q&&Q!==!1&&""!==Q?parseFloat(Q):e.time
var J=a(" > div",b).eq(d).attr("data-transPeriod")
switch(S=void 0!==J&&J!==!1&&""!==J?parseFloat(J):e.transPeriod,a(b).hasClass("camerastarted")||(M="simpleFade",j="next",q="",S=400,a(b).addClass("camerastarted")),M){case"simpleFade":H=1,P=1
break
case"curtainTopLeft":H=0==e.slicedCols?e.cols:e.slicedCols,P=1
break
case"curtainTopRight":H=0==e.slicedCols?e.cols:e.slicedCols,P=1
break
case"curtainBottomLeft":H=0==e.slicedCols?e.cols:e.slicedCols,P=1
break
case"curtainBottomRight":H=0==e.slicedCols?e.cols:e.slicedCols,P=1
break
case"curtainSliceLeft":H=0==e.slicedCols?e.cols:e.slicedCols,P=1
break
case"curtainSliceRight":H=0==e.slicedCols?e.cols:e.slicedCols,P=1
break
case"blindCurtainTopLeft":P=0==e.slicedRows?e.rows:e.slicedRows,H=1
break
case"blindCurtainTopRight":P=0==e.slicedRows?e.rows:e.slicedRows,H=1
break
case"blindCurtainBottomLeft":P=0==e.slicedRows?e.rows:e.slicedRows,H=1
break
case"blindCurtainBottomRight":P=0==e.slicedRows?e.rows:e.slicedRows,H=1
break
case"blindCurtainSliceTop":P=0==e.slicedRows?e.rows:e.slicedRows,H=1
break
case"blindCurtainSliceBottom":P=0==e.slicedRows?e.rows:e.slicedRows,H=1
break
case"stampede":A="-"+S
break
case"mosaic":A=e.gridDifference
break
case"mosaicReverse":A=e.gridDifference
break
case"mosaicRandom":break
case"mosaicSpiral":A=e.gridDifference,D=1.7
break
case"mosaicSpiralReverse":A=e.gridDifference,D=1.7
break
case"topLeftBottomRight":A=e.gridDifference,D=6
break
case"bottomRightTopLeft":A=e.gridDifference,D=6
break
case"bottomLeftTopRight":A=e.gridDifference,D=6
break
case"topRightBottomLeft":A=e.gridDifference,D=6
break
case"scrollLeft":H=1,P=1
break
case"scrollRight":H=1,P=1
break
case"scrollTop":H=1,P=1
break
case"scrollBottom":H=1,P=1
break
case"scrollHorz":H=1,P=1}for(var Y,Z,ta=0,ia=P*H,ra=g-Math.floor(g/H)*H,oa=u-Math.floor(u/P)*P,sa=0,na=0,ca=[],la=[],ma=[];ia>ta;){ca.push(ta),la.push(ta),W.append('<div class="cameraappended" style="display:none; overflow:hidden; position:absolute; z-index:1000" />')
var da=a(".cameraappended:eq("+ta+")",_)
"scrollLeft"==M||"scrollRight"==M||"scrollTop"==M||"scrollBottom"==M||"scrollHorz"==M?U.eq(d).clone().show().appendTo(da):"next"==j?U.eq(d).clone().show().appendTo(da):U.eq(r).clone().show().appendTo(da),Y=ra>ta%H?1:0,ta%H==0&&(sa=0),Z=Math.floor(ta/H)<oa?1:0,da.css({height:Math.floor(u/P+Z+1),left:sa,top:na,width:Math.floor(g/H+Y+1)}),a("> .cameraSlide",da).css({height:u,"margin-left":"-"+sa+"px","margin-top":"-"+na+"px",width:g}),sa=sa+da.width()-1,ta%H==H-1&&(na=na+da.height()-1),ta++}switch(M){case"curtainTopLeft":break
case"curtainBottomLeft":break
case"curtainSliceLeft":break
case"curtainTopRight":ca=ca.reverse()
break
case"curtainBottomRight":ca=ca.reverse()
break
case"curtainSliceRight":ca=ca.reverse()
break
case"blindCurtainTopLeft":break
case"blindCurtainBottomLeft":ca=ca.reverse()
break
case"blindCurtainSliceTop":break
case"blindCurtainTopRight":break
case"blindCurtainBottomRight":ca=ca.reverse()
break
case"blindCurtainSliceBottom":ca=ca.reverse()
break
case"stampede":ca=n(ca)
break
case"mosaic":break
case"mosaicReverse":ca=ca.reverse()
break
case"mosaicRandom":ca=n(ca)
break
case"mosaicSpiral":var ha,pa,fa,ga=P/2,ua=0
for(fa=0;ga>fa;fa++){for(pa=fa,ha=fa;H-fa-1>ha;ha++)ma[ua++]=pa*H+ha
for(ha=H-fa-1,pa=fa;P-fa-1>pa;pa++)ma[ua++]=pa*H+ha
for(pa=P-fa-1,ha=H-fa-1;ha>fa;ha--)ma[ua++]=pa*H+ha
for(ha=fa,pa=P-fa-1;pa>fa;pa--)ma[ua++]=pa*H+ha}ca=ma
break
case"mosaicSpiralReverse":var ha,pa,fa,ga=P/2,ua=ia-1
for(fa=0;ga>fa;fa++){for(pa=fa,ha=fa;H-fa-1>ha;ha++)ma[ua--]=pa*H+ha
for(ha=H-fa-1,pa=fa;P-fa-1>pa;pa++)ma[ua--]=pa*H+ha
for(pa=P-fa-1,ha=H-fa-1;ha>fa;ha--)ma[ua--]=pa*H+ha
for(ha=fa,pa=P-fa-1;pa>fa;pa--)ma[ua--]=pa*H+ha}ca=ma
break
case"topLeftBottomRight":for(var pa=0;P>pa;pa++)for(var ha=0;H>ha;ha++)ma.push(ha+pa)
la=ma
break
case"bottomRightTopLeft":for(var pa=0;P>pa;pa++)for(var ha=0;H>ha;ha++)ma.push(ha+pa)
la=ma.reverse()
break
case"bottomLeftTopRight":for(var pa=P;pa>0;pa--)for(var ha=0;H>ha;ha++)ma.push(ha+pa)
la=ma
break
case"topRightBottomLeft":for(var pa=0;P>pa;pa++)for(var ha=H;ha>0;ha--)ma.push(ha+pa)
la=ma}a.each(ca,function(t,i){function o(){if(a(this).addClass("cameraeased"),a(".cameraeased",_).length>=0&&a(R).css({visibility:"visible"}),a(".cameraeased",_).length==ia){c(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",p).each(function(){a(this).css("visibility","hidden")}),U.eq(d).show().css("z-index","999").removeClass("cameranext").addClass("cameracurrent"),U.eq(r).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",p).eq(d).addClass("cameracurrent"),r>=0&&a(".cameraContent",p).eq(r).removeClass("cameracurrent"),e.onEndTransition.call(this),"hide"!=a("> div",b).eq(d).attr("data-video")&&a(".cameraContent.cameracurrent .imgFake",p).length&&a(".cameraContent.cameracurrent .imgFake",p).click()
var t=U.eq(d).find(".fadeIn").length,i=a(".cameraContent",p).eq(d).find(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom").length
0!=t&&a(".cameraSlide.cameracurrent .fadeIn",p).each(function(){if(""!=a(this).attr("data-easing"))var e=a(this).attr("data-easing")
else var e=q
var i=a(this)
if(void 0===i.attr("data-outerWidth")||i.attr("data-outerWidth")===!1||""===i.attr("data-outerWidth")){var r=i.outerWidth()
i.attr("data-outerWidth",r)}else var r=i.attr("data-outerWidth")
if(void 0===i.attr("data-outerHeight")||i.attr("data-outerHeight")===!1||""===i.attr("data-outerHeight")){var o=i.outerHeight()
i.attr("data-outerHeight",o)}else var o=i.attr("data-outerHeight")
var s=i.position(),n=(s.left,s.top,i.attr("class")),c=i.index()
i.parents(".camerarelative").outerHeight(),i.parents(".camerarelative").outerWidth();-1!=n.indexOf("fadeIn")?i.animate({opacity:0},0).css("visibility","visible").delay(T/t*(.1*(c-1))).animate({opacity:1},T/t*.15,e):i.css("visibility","visible")}),a(".cameraContent.cameracurrent",p).show(),0!=i&&a(".cameraContent.cameracurrent .moveFromLeft, .cameraContent.cameracurrent .moveFromRight, .cameraContent.cameracurrent .moveFromTop, .cameraContent.cameracurrent .moveFromBottom, .cameraContent.cameracurrent .fadeIn, .cameraContent.cameracurrent .fadeFromLeft, .cameraContent.cameracurrent .fadeFromRight, .cameraContent.cameracurrent .fadeFromTop, .cameraContent.cameracurrent .fadeFromBottom",p).each(function(){if(""!=a(this).attr("data-easing"))var e=a(this).attr("data-easing")
else var e=q
var t=a(this),r=t.position(),o=(r.left,r.top,t.attr("class")),s=t.index(),n=t.outerHeight();-1!=o.indexOf("moveFromLeft")?(t.css({left:"-"+g+"px",right:"auto"}),t.css("visibility","visible").delay(T/i*(.1*(s-1))).animate({left:r.left},T/i*.15,e)):-1!=o.indexOf("moveFromRight")?(t.css({left:g+"px",right:"auto"}),t.css("visibility","visible").delay(T/i*(.1*(s-1))).animate({left:r.left},T/i*.15,e)):-1!=o.indexOf("moveFromTop")?(t.css({top:"-"+u+"px",bottom:"auto"}),t.css("visibility","visible").delay(T/i*(.1*(s-1))).animate({top:r.top},T/i*.15,e,function(){t.css({top:"auto",bottom:0})})):-1!=o.indexOf("moveFromBottom")?(t.css({top:u+"px",bottom:"auto"}),t.css("visibility","visible").delay(T/i*(.1*(s-1))).animate({top:r.top},T/i*.15,e)):-1!=o.indexOf("fadeFromLeft")?(t.animate({opacity:0},0).css({left:"-"+g+"px",right:"auto"}),t.css("visibility","visible").delay(T/i*(.1*(s-1))).animate({left:r.left,opacity:1},T/i*.15,e)):-1!=o.indexOf("fadeFromRight")?(t.animate({opacity:0},0).css({left:"-"+g+"px",right:"auto"}),t.css("visibility","visible").delay(T/i*(.1*(s-1))).animate({left:r.left,opacity:1},T/i*.15,e)):-1!=o.indexOf("fadeFromTop")?(t.animate({opacity:0},0).css({top:"-"+u+"px",bottom:"auto"}),t.css("visibility","visible").delay(T/i*(.1*(s-1))).animate({top:r.top,opacity:1},T/i*.15,e,function(){t.css({top:"auto",bottom:0})})):-1!=o.indexOf("fadeFromBottom")?(t.animate({opacity:0},0).css({bottom:"-"+n+"px"}),t.css("visibility","visible").delay(T/i*(.1*(s-1))).animate({bottom:"0",opacity:1},T/i*.15,e)):-1!=o.indexOf("fadeIn")?t.animate({opacity:0},0).css("visibility","visible").delay(T/i*(.1*(s-1))).animate({opacity:1},T/i*.15,e):t.css("visibility","visible")}),a(".cameraappended",_).remove(),b.removeClass("camerasliding"),U.eq(r).hide()
var o,n=a(".camera_bar_cont",X).width(),h=a(".camera_bar_cont",X).height()
o="pie"!=f?.05:.005,a("#"+v).animate({opacity:e.loaderOpacity},200),N=setInterval(function(){if(b.hasClass("stopped")&&clearInterval(N),"pie"!=f)switch(1.002>=$&&!b.hasClass("stopped")&&!b.hasClass("paused")&&!b.hasClass("hovered")?$+=o:1>=$&&(b.hasClass("stopped")||b.hasClass("paused")||b.hasClass("stopped")||b.hasClass("hovered"))?$=$:b.hasClass("stopped")||b.hasClass("paused")||b.hasClass("hovered")||(clearInterval(N),s(),a("#"+v).animate({opacity:0},200,function(){clearTimeout(G),G=setTimeout(l,k),m(),e.onStartLoading.call(this)})),V){case"leftToRight":a("#"+v).animate({right:n-n*$},T*o,"linear")
break
case"rightToLeft":a("#"+v).animate({left:n-n*$},T*o,"linear")
break
case"topToBottom":a("#"+v).animate({bottom:h-h*$},T*o,"linear")
break
case"bottomToTop":a("#"+v).animate({bottom:h-h*$},T*o,"linear")}else aa=$,ea.clearRect(0,0,e.pieDiameter,e.pieDiameter),ea.globalCompositeOperation="destination-over",ea.beginPath(),ea.arc(e.pieDiameter/2,e.pieDiameter/2,e.pieDiameter/2-e.loaderStroke,0,2*Math.PI,!1),ea.lineWidth=e.loaderStroke,ea.strokeStyle=e.loaderBgColor,ea.stroke(),ea.closePath(),ea.globalCompositeOperation="source-over",ea.beginPath(),ea.arc(e.pieDiameter/2,e.pieDiameter/2,e.pieDiameter/2-e.loaderStroke,0,2*Math.PI*aa,!1),ea.lineWidth=e.loaderStroke-2*e.loaderPadding,ea.strokeStyle=e.loaderColor,ea.stroke(),ea.closePath(),1.002>=$&&!b.hasClass("stopped")&&!b.hasClass("paused")&&!b.hasClass("hovered")?$+=o:1>=$&&(b.hasClass("stopped")||b.hasClass("paused")||b.hasClass("hovered"))?$=$:b.hasClass("stopped")||b.hasClass("paused")||b.hasClass("hovered")||(clearInterval(N),s(),a("#"+v+", .camera_canvas_wrap",X).animate({opacity:0},200,function(){clearTimeout(G),G=setTimeout(l,k),m(),e.onStartLoading.call(this)}))},T*o)}}switch(Y=ra>i%H?1:0,i%H==0&&(sa=0),Z=Math.floor(i/H)<oa?1:0,M){case"simpleFade":height=u,width=g,opacityOnGrid=0
break
case"curtainTopLeft":height=0,width=Math.floor(g/H+Y+1),marginTop="-"+Math.floor(u/P+Z+1)+"px"
break
case"curtainTopRight":height=0,width=Math.floor(g/H+Y+1),marginTop="-"+Math.floor(u/P+Z+1)+"px"
break
case"curtainBottomLeft":height=0,width=Math.floor(g/H+Y+1),marginTop=Math.floor(u/P+Z+1)+"px"
break
case"curtainBottomRight":height=0,width=Math.floor(g/H+Y+1),marginTop=Math.floor(u/P+Z+1)+"px"
break
case"curtainSliceLeft":height=0,width=Math.floor(g/H+Y+1),i%2==0?marginTop=Math.floor(u/P+Z+1)+"px":marginTop="-"+Math.floor(u/P+Z+1)+"px"
break
case"curtainSliceRight":height=0,width=Math.floor(g/H+Y+1),i%2==0?marginTop=Math.floor(u/P+Z+1)+"px":marginTop="-"+Math.floor(u/P+Z+1)+"px"
break
case"blindCurtainTopLeft":height=Math.floor(u/P+Z+1),width=0,marginLeft="-"+Math.floor(g/H+Y+1)+"px"
break
case"blindCurtainTopRight":height=Math.floor(u/P+Z+1),width=0,marginLeft=Math.floor(g/H+Y+1)+"px"
break
case"blindCurtainBottomLeft":height=Math.floor(u/P+Z+1),width=0,marginLeft="-"+Math.floor(g/H+Y+1)+"px"
break
case"blindCurtainBottomRight":height=Math.floor(u/P+Z+1),width=0,marginLeft=Math.floor(g/H+Y+1)+"px"
break
case"blindCurtainSliceBottom":height=Math.floor(u/P+Z+1),width=0,i%2==0?marginLeft="-"+Math.floor(g/H+Y+1)+"px":marginLeft=Math.floor(g/H+Y+1)+"px"
break
case"blindCurtainSliceTop":height=Math.floor(u/P+Z+1),width=0,i%2==0?marginLeft="-"+Math.floor(g/H+Y+1)+"px":marginLeft=Math.floor(g/H+Y+1)+"px"
break
case"stampede":height=0,width=0,marginLeft=.2*g*(t%H-(H-Math.floor(H/2)))+"px",marginTop=.2*u*(Math.floor(t/H)+1-(P-Math.floor(P/2)))+"px"
break
case"mosaic":height=0,width=0
break
case"mosaicReverse":height=0,width=0,marginLeft=Math.floor(g/H+Y+1)+"px",marginTop=Math.floor(u/P+Z+1)+"px"
break
case"mosaicRandom":height=0,width=0,marginLeft=.5*Math.floor(g/H+Y+1)+"px",marginTop=.5*Math.floor(u/P+Z+1)+"px"
break
case"mosaicSpiral":height=0,width=0,marginLeft=.5*Math.floor(g/H+Y+1)+"px",marginTop=.5*Math.floor(u/P+Z+1)+"px"
break
case"mosaicSpiralReverse":height=0,width=0,marginLeft=.5*Math.floor(g/H+Y+1)+"px",marginTop=.5*Math.floor(u/P+Z+1)+"px"
break
case"topLeftBottomRight":height=0,width=0
break
case"bottomRightTopLeft":height=0,width=0,marginLeft=Math.floor(g/H+Y+1)+"px",marginTop=Math.floor(u/P+Z+1)+"px"
break
case"bottomLeftTopRight":height=0,width=0,marginLeft=0,marginTop=Math.floor(u/P+Z+1)+"px"
break
case"topRightBottomLeft":height=0,width=0,marginLeft=Math.floor(g/H+Y+1)+"px",marginTop=0
break
case"scrollRight":height=u,width=g,marginLeft=-g
break
case"scrollLeft":height=u,width=g,marginLeft=g
break
case"scrollTop":height=u,width=g,marginTop=u
break
case"scrollBottom":height=u,width=g,marginTop=-u
break
case"scrollHorz":height=u,width=g,0==r&&d==I-1?marginLeft=-g:d>r||r==I-1&&0==d?marginLeft=g:marginLeft=-g}var n=a(".cameraappended:eq("+i+")",_)
void 0!==N&&(clearInterval(N),clearTimeout(G),G=setTimeout(l,S+A)),a(L).length&&(a(".camera_pag li",h).removeClass("cameracurrent"),a(".camera_pag li",h).eq(d).addClass("cameracurrent")),a(R).length&&(a("li",R).removeClass("cameracurrent"),a("li",R).eq(d).addClass("cameracurrent"),a("li",R).not(".cameracurrent").find("img").animate({opacity:.5},0),a("li.cameracurrent img",R).animate({opacity:1},0),a("li",R).hover(function(){a("img",this).stop(!0,!1).animate({opacity:1},150)},function(){a(this).hasClass("cameracurrent")||a("img",this).stop(!0,!1).animate({opacity:.5},150)}))
var k=parseFloat(S)+parseFloat(A)
"scrollLeft"==M||"scrollRight"==M||"scrollTop"==M||"scrollBottom"==M||"scrollHorz"==M?(e.onStartTransition.call(this),k=0,n.delay((S+A)/ia*la[t]*D*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width}).animate({height:Math.floor(u/P+Z+1),"margin-top":0,"margin-left":0,width:Math.floor(g/H+Y+1)},S-A,q,o),U.eq(r).delay((S+A)/ia*la[t]*D*.5).animate({"margin-left":-1*marginLeft,"margin-top":-1*marginTop},S-A,q,function(){a(this).css({"margin-top":0,"margin-left":0})})):(e.onStartTransition.call(this),k=parseFloat(S)+parseFloat(A),"next"==j?n.delay((S+A)/ia*la[t]*D*.5).css({display:"block",height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid}).animate({height:Math.floor(u/P+Z+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(g/H+Y+1)},S-A,q,o):(U.eq(d).show().css("z-index","999").addClass("cameracurrent"),U.eq(r).css("z-index","1").removeClass("cameracurrent"),a(".cameraContent",p).eq(d).addClass("cameracurrent"),a(".cameraContent",p).eq(r).removeClass("cameracurrent"),n.delay((S+A)/ia*la[t]*D*.5).css({display:"block",height:Math.floor(u/P+Z+1),"margin-top":0,"margin-left":0,opacity:1,width:Math.floor(g/H+Y+1)}).animate({height:height,"margin-left":marginLeft,"margin-top":marginTop,width:width,opacity:opacityOnGrid},S-A,q,o)))})}else{var va=F[d],ba=new Image
ba.src=va+"?"+(new Date).getTime(),k.css("visibility","hidden"),k.prepend(a(ba).attr("class","imgLoaded").css("visibility","hidden"))
var _a,ka
a(ba).get(0).complete&&"0"!=_a&&"0"!=ka&&void 0!==_a&&_a!==!1&&void 0!==ka&&ka!==!1||(a(".camera_loader",h).delay(500).fadeIn(400),ba.onload=function(){_a=ba.naturalWidth,ka=ba.naturalHeight,a(ba).attr("data-alignment",O[d]).attr("data-portrait",B[d]),a(ba).attr("width",_a),a(ba).attr("height",ka),_.find(".cameraSlide_"+d).hide().css("visibility","visible"),o(),m(d+1)})}}var d={alignment:"center",autoAdvance:!0,mobileAutoAdvance:!0,barDirection:"leftToRight",barPosition:"bottom",cols:6,easing:"easeInOutExpo",mobileEasing:"",fx:"random",mobileFx:"",gridDifference:250,height:"50%",imagePath:"images/",hover:!0,loader:"pie",loaderColor:"#eeeeee",loaderBgColor:"#222222",loaderOpacity:.8,loaderPadding:2,loaderStroke:7,minHeight:"200px",navigation:!0,navigationHover:!0,mobileNavHover:!0,opacityOnGrid:!1,overlayer:!0,pagination:!0,playPause:!0,pauseOnClick:!0,pieDiameter:38,piePosition:"rightTop",portrait:!1,rows:4,slicedCols:12,slicedRows:8,slideOn:"random",thumbnails:!1,time:7e3,transPeriod:1500,onEndTransition:function(){},onLoaded:function(){},onStartLoading:function(){},onStartTransition:function(){}},e=a.extend({},d,e),h=a(this).addClass("camera_wrap")
h.wrapInner('<div class="camera_src" />').wrapInner('<div class="camera_fakehover" />')
var p=a(".camera_fakehover",h)
p.append('<div class="camera_target"></div>'),1==e.overlayer&&p.append('<div class="camera_overlayer"></div>'),p.append('<div class="camera_target_content"></div>')
var f
f="pie"==e.loader&&a.browser.msie&&a.browser.version<9?"bar":e.loader,"pie"==f?p.append('<div class="camera_pie"></div>'):"bar"==f?p.append('<div class="camera_bar"></div>'):p.append('<div class="camera_bar" style="display:none"></div>'),1==e.playPause&&p.append('<div class="camera_commands"></div>'),1==e.navigation&&p.append('<div class="camera_prev"><span></span></div>').append('<div class="camera_next"><span></span></div>'),1==e.thumbnails&&h.append('<div class="camera_thumbs_cont" />'),1==e.thumbnails&&1!=e.pagination&&a(".camera_thumbs_cont",h).wrap("<div />").wrap('<div class="camera_thumbs" />').wrap("<div />").wrap('<div class="camera_command_wrap" />'),1==e.pagination&&h.append('<div class="camera_pag"></div>'),h.append('<div class="camera_loader"></div>'),a(".camera_caption",h).each(function(){a(this).wrapInner("<div />")})
var g,u,v="pie_"+h.index(),b=a(".camera_src",h),_=a(".camera_target",h),k=a(".camera_target_content",h),w=a(".camera_pie",h),y=a(".camera_bar",h),C=a(".camera_prev",h),x=a(".camera_next",h),T=a(".camera_commands",h),L=a(".camera_pag",h),R=a(".camera_thumbs_cont",h),F=[]
a("> div",b).each(function(){F.push(a(this).attr("data-src"))})
var S=[]
a("> div",b).each(function(){a(this).attr("data-link")?S.push(a(this).attr("data-link")):S.push("")})
var M=[]
a("> div",b).each(function(){a(this).attr("data-target")?M.push(a(this).attr("data-target")):M.push("")})
var B=[]
a("> div",b).each(function(){a(this).attr("data-portrait")?B.push(a(this).attr("data-portrait")):B.push("")})
var O=[]
a("> div",b).each(function(){a(this).attr("data-alignment")?O.push(a(this).attr("data-alignment")):O.push("")})
var q=[]
a("> div",b).each(function(){a(this).attr("data-thumb")?q.push(a(this).attr("data-thumb")):q.push("")})
var I=F.length
a(k).append('<div class="cameraContents" />')
var P
for(P=0;I>P;P++)if(a(".cameraContents",k).append('<div class="cameraContent" />'),""!=S[P]){var H=a("> div ",b).eq(P).attr("data-box")
H=void 0!==H&&H!==!1&&""!=H?'data-box="'+a("> div ",b).eq(P).attr("data-box")+'"':"",a(".camera_target_content .cameraContent:eq("+P+")",h).append('<a class="camera_link" href="'+S[P]+'" '+H+' target="'+M[P]+'"></a>')}a(".camera_caption",h).each(function(){var e=a(this).parent().index(),t=h.find(".cameraContent").eq(e)
a(this).appendTo(t)}),_.append('<div class="cameraCont" />')
var D,W=a(".cameraCont",h)
for(D=0;I>D;D++){W.append('<div class="cameraSlide cameraSlide_'+D+'" />')
var A=a("> div:eq("+D+")",b)
_.find(".cameraSlide_"+D).clone(A)}a(window).bind("load resize pageshow",function(){c(),r()}),W.append('<div class="cameraSlide cameraSlide_'+D+'" />')
var E
h.show()
var z,g=_.width(),u=_.height()
a(window).bind("resize pageshow",function(){1==E&&o(),a("ul",R).animate({"margin-top":0},0,c),b.hasClass("paused")||(b.addClass("paused"),a(".camera_stop",X).length?(a(".camera_stop",X).hide(),a(".camera_play",X).show(),"none"!=f&&a("#"+v).hide()):"none"!=f&&a("#"+v).hide(),clearTimeout(z),z=setTimeout(function(){b.removeClass("paused"),a(".camera_play",X).length?(a(".camera_play",X).hide(),a(".camera_stop",X).show(),"none"!=f&&a("#"+v).fadeIn()):"none"!=f&&a("#"+v).fadeIn()},1500))})
var N,G,j,Q,T,L,J,K
if(j=i()&&""!=e.mobileAutoAdvance?e.mobileAutoAdvance:e.autoAdvance,0==j&&b.addClass("paused"),Q=i()&&""!=e.mobileNavHover?e.mobileNavHover:e.navigationHover,0!=b.length){var U=a(".cameraSlide",_)
U.wrapInner('<div class="camerarelative" />')
var V=e.barDirection,X=h
a("iframe",p).each(function(){var e=a(this),t=e.attr("src")
e.attr("data-src",t)
var i=e.parent().index(".camera_src > div")
a(".camera_target_content .cameraContent:eq("+i+")",h).append(e)}),s(),1==e.hover&&(i()||p.hover(function(){b.addClass("hovered")},function(){b.removeClass("hovered")})),1==Q&&(a(C,h).animate({opacity:0},0),a(x,h).animate({opacity:0},0),a(T,h).animate({opacity:0},0),i()?(p.live("vmouseover",function(){a(C,h).animate({opacity:1},200),a(x,h).animate({opacity:1},200),a(T,h).animate({opacity:1},200)}),p.live("vmouseout",function(){a(C,h).delay(500).animate({opacity:0},200),a(x,h).delay(500).animate({opacity:0},200),a(T,h).delay(500).animate({opacity:0},200)})):p.hover(function(){a(C,h).animate({opacity:1},200),a(x,h).animate({opacity:1},200),a(T,h).animate({opacity:1},200)},function(){a(C,h).animate({opacity:0},200),a(x,h).animate({opacity:0},200),a(T,h).animate({opacity:0},200)})),a(".camera_stop",X).live("click",function(){j=!1,b.addClass("paused"),a(".camera_stop",X).length?(a(".camera_stop",X).hide(),a(".camera_play",X).show(),"none"!=f&&a("#"+v).hide()):"none"!=f&&a("#"+v).hide()}),a(".camera_play",X).live("click",function(){j=!0,b.removeClass("paused"),a(".camera_play",X).length?(a(".camera_play",X).hide(),a(".camera_stop",X).show(),"none"!=f&&a("#"+v).show()):"none"!=f&&a("#"+v).show()}),1==e.pauseOnClick&&a(".camera_target_content",p).mouseup(function(){j=!1,b.addClass("paused"),a(".camera_stop",X).hide(),a(".camera_play",X).show(),a("#"+v).hide()}),a(".cameraContent, .imgFake",p).hover(function(){J=!0},function(){J=!1}),a(".cameraContent, .imgFake",p).bind("click",function(){1==K&&1==J&&(j=!1,a(".camera_caption",p).hide(),b.addClass("paused"),a(".camera_stop",X).hide(),a(".camera_play",X).show(),a("#"+v).hide())})}if("pie"!=f){y.append('<span class="camera_bar_cont" />'),a(".camera_bar_cont",y).animate({opacity:e.loaderOpacity},0).css({position:"absolute",left:0,right:0,top:0,bottom:0,"background-color":e.loaderBgColor}).append('<span id="'+v+'" />'),a("#"+v).animate({opacity:0},0)
var Y=a("#"+v)
switch(Y.css({position:"absolute","background-color":e.loaderColor}),e.barPosition){case"left":y.css({right:"auto",width:e.loaderStroke})
break
case"right":y.css({left:"auto",width:e.loaderStroke})
break
case"top":y.css({bottom:"auto",height:e.loaderStroke})
break
case"bottom":y.css({top:"auto",height:e.loaderStroke})}switch(V){case"leftToRight":Y.css({left:0,right:0,top:e.loaderPadding,bottom:e.loaderPadding})
break
case"rightToLeft":Y.css({left:0,right:0,top:e.loaderPadding,bottom:e.loaderPadding})
break
case"topToBottom":Y.css({left:e.loaderPadding,right:e.loaderPadding,top:0,bottom:0})
break
case"bottomToTop":Y.css({left:e.loaderPadding,right:e.loaderPadding,top:0,bottom:0})}}else{w.append('<canvas id="'+v+'"></canvas>')
var Y=document.getElementById(v)
Y.setAttribute("width",e.pieDiameter),Y.setAttribute("height",e.pieDiameter)
var Z
switch(e.piePosition){case"leftTop":Z="left:0; top:0;"
break
case"rightTop":Z="right:0; top:0;"
break
case"leftBottom":Z="left:0; bottom:0;"
break
case"rightBottom":Z="right:0; bottom:0;"}Y.setAttribute("style","position:absolute; z-index:1002; "+Z)
var $,aa
if(Y&&Y.getContext){var ea=Y.getContext("2d")
ea.rotate(1.5*Math.PI),ea.translate(-e.pieDiameter,0)}}if(("none"==f||0==j)&&(a("#"+v).hide(),a(".camera_canvas_wrap",X).hide()),a(L).length){a(L).append('<ul class="camera_pag_ul" />')
var ta
for(ta=0;I>ta;ta++)a(".camera_pag_ul",h).append('<li class="pag_nav_'+ta+'" style="position:relative; z-index:1002"><span><span>'+ta+"</span></span></li>")
a(".camera_pag_ul li",h).hover(function(){if(a(this).addClass("camera_hover"),a(".camera_thumb",this).length){var e=a(".camera_thumb",this).outerWidth(),t=a(".camera_thumb",this).outerHeight(),i=a(this).outerWidth()
a(".camera_thumb",this).show().css({top:"-"+t+"px",left:"-"+(e-i)/2+"px"}).animate({opacity:1,"margin-top":"-3px"},200),a(".thumb_arrow",this).show().animate({opacity:1,"margin-top":"-3px"},200)}},function(){a(this).removeClass("camera_hover"),a(".camera_thumb",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()}),a(".thumb_arrow",this).animate({"margin-top":"-20px",opacity:0},200,function(){a(this).css({marginTop:"5px"}).hide()})})}if(a(R).length){a(L).length?(a.each(q,function(e,t){if(""!=a("> div",b).eq(e).attr("data-thumb")){var i=a("> div",b).eq(e).attr("data-thumb"),r=new Image
r.src=i,a("li.pag_nav_"+e,L).append(a(r).attr("class","camera_thumb").css({position:"absolute"}).animate({opacity:0},0)),a("li.pag_nav_"+e+" > img",L).after('<div class="thumb_arrow" />'),a("li.pag_nav_"+e+" > .thumb_arrow",L).animate({opacity:0},0)}}),h.css({marginBottom:a(L).outerHeight()})):(a(R).append("<div />"),a(R).before('<div class="camera_prevThumbs hideNav"><div></div></div>').before('<div class="camera_nextThumbs hideNav"><div></div></div>'),a("> div",R).append("<ul />"),a.each(q,function(e,t){if(""!=a("> div",b).eq(e).attr("data-thumb")){var i=a("> div",b).eq(e).attr("data-thumb"),r=new Image
r.src=i,a("ul",R).append('<li class="pix_thumb pix_thumb_'+e+'" />'),a("li.pix_thumb_"+e,R).append(a(r).attr("class","camera_thumb"))}}))}else!a(R).length&&a(L).length&&h.css({marginBottom:a(L).outerHeight()})
var ia=!0
a(T).length&&(a(T).append('<div class="camera_play"></div>').append('<div class="camera_stop"></div>'),1==j?(a(".camera_play",X).hide(),a(".camera_stop",X).show()):(a(".camera_stop",X).hide(),a(".camera_play",X).show())),l(),a(".moveFromLeft, .moveFromRight, .moveFromTop, .moveFromBottom, .fadeIn, .fadeFromLeft, .fadeFromRight, .fadeFromTop, .fadeFromBottom",p).each(function(){a(this).css("visibility","hidden")}),e.onStartLoading.call(this),m(),a(C).length&&a(C).click(function(){if(!b.hasClass("camerasliding")){var t=parseFloat(a(".cameraSlide.cameracurrent",_).index())
clearInterval(N),s(),a("#"+v+", .camera_canvas_wrap",h).animate({opacity:0},0),l(),m(0!=t?t:I),e.onStartLoading.call(this)}}),a(x).length&&a(x).click(function(){if(!b.hasClass("camerasliding")){var t=parseFloat(a(".cameraSlide.cameracurrent",_).index())
clearInterval(N),s(),a("#"+v+", .camera_canvas_wrap",X).animate({opacity:0},0),l(),m(t==I-1?1:t+2),e.onStartLoading.call(this)}}),i()&&(p.bind("swipeleft",function(t){if(!b.hasClass("camerasliding")){var i=parseFloat(a(".cameraSlide.cameracurrent",_).index())
clearInterval(N),s(),a("#"+v+", .camera_canvas_wrap",X).animate({opacity:0},0),l(),m(i==I-1?1:i+2),e.onStartLoading.call(this)}}),p.bind("swiperight",function(t){if(!b.hasClass("camerasliding")){var i=parseFloat(a(".cameraSlide.cameracurrent",_).index())
clearInterval(N),s(),a("#"+v+", .camera_canvas_wrap",X).animate({opacity:0},0),l(),m(0!=i?i:I),e.onStartLoading.call(this)}})),a(L).length&&a(".camera_pag li",h).click(function(){if(!b.hasClass("camerasliding")){var t=parseFloat(a(this).index()),i=parseFloat(a(".cameraSlide.cameracurrent",_).index())
t!=i&&(clearInterval(N),s(),a("#"+v+", .camera_canvas_wrap",X).animate({opacity:0},0),l(),m(t+1),e.onStartLoading.call(this))}}),a(R).length&&(a(".pix_thumb img",R).click(function(){if(!b.hasClass("camerasliding")){var t=parseFloat(a(this).parents("li").index()),i=parseFloat(a(".cameracurrent",_).index())
t!=i&&(clearInterval(N),s(),a("#"+v+", .camera_canvas_wrap",X).animate({opacity:0},0),a(".pix_thumb",R).removeClass("cameracurrent"),a(this).parents("li").addClass("cameracurrent"),l(),m(t+1),c(),e.onStartLoading.call(this))}}),a(".camera_thumbs_cont .camera_prevThumbs",X).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_prevThumbs",X).click(function(){var e=0,t=(a(R).outerWidth(),a("ul",R).offset().left),i=a("> div",R).offset().left,o=i-t
a(".camera_visThumb",R).each(function(){var t=a(this).outerWidth()
e+=t}),o-e>0?a("ul",R).animate({"margin-left":"-"+(o-e)+"px"},500,r):a("ul",R).animate({"margin-left":0},500,r)}),a(".camera_thumbs_cont .camera_nextThumbs",X).hover(function(){a(this).stop(!0,!1).animate({opacity:1},250)},function(){a(this).stop(!0,!1).animate({opacity:.7},250)}),a(".camera_nextThumbs",X).click(function(){var e=0,t=a(R).outerWidth(),i=a("ul",R).outerWidth(),o=a("ul",R).offset().left,s=a("> div",R).offset().left,n=s-o
a(".camera_visThumb",R).each(function(){var t=a(this).outerWidth()
e+=t}),i>n+e+e?a("ul",R).animate({"margin-left":"-"+(n+e)+"px"},500,r):a("ul",R).animate({"margin-left":"-"+(i-t)+"px"},500,r)}))}}(jQuery),function(a){a.fn.cameraStop=function(){var e=a(this),t=a(".camera_src",e)
"pie_"+e.index()
if(t.addClass("stopped"),a(".camera_showcommands").length){a(".camera_thumbs_wrap",e)}else;}}(jQuery),function(a){a.fn.cameraPause=function(){var e=a(this),t=a(".camera_src",e)
t.addClass("paused")}}(jQuery),function(a){a.fn.cameraResume=function(){var e=a(this),t=a(".camera_src",e);("undefined"==typeof autoAdv||autoAdv!==!0)&&t.removeClass("paused")}}(jQuery)
