/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","promise"],function(b,f){b.ea={};b.ea.ZQ={coverStart:{vr:"oj-animation-coverstart",Vo:"oj-animation-coverstart",Wo:!0},coverUp:{Vo:"oj-animation-coverup",Wo:!0},fade:{vr:"oj-animation-fade",Vo:"oj-animation-fade",Wo:!1},revealDown:{vr:"oj-animation-revealdown",Wo:!1},revealEnd:{vr:"oj-animation-revealend",Vo:"oj-animation-revealend",Wo:!1},zoomIn:{Vo:"oj-animation-zoomin",Wo:!0},zoomOut:{vr:"oj-animation-zoomout",Wo:!1}};b.ea.aT=function(a,b,c){var e=$(a);return new Promise(function(a){function f(){a(!0)}
var k="oj-"+c,l=k+"-active";e.addClass(b);e.addClass(k);window.requestAnimationFrame(function(){e.addClass(l)});if((k=e.css("animationDuration")||e.css("webkitAnimationDuration"))&&"0s"!=k)e.on("animationend webkitAnimationEnd",f);else if((k=e.css("transitionDuration")||e.css("webkitTransitionDuration"))&&"0s"!=k)e.on("transitionend webkitTransitionEnd",f);else a(!0)})};b.ea.u$=function(a,d,c){var e=[];c=b.ea.ZQ[c];a&&c&&c.vr&&e.push(b.ea.aT(a,c.vr,"leave"));d&&c&&c.Vo&&e.push(b.ea.aT(d,c.Vo,"enter"));
return Promise.all(e)};b.ea.NS=function(a,b){for(var c=f.virtualElements.firstChild(a);c;)1==c.nodeType?b.push(c):8==c.nodeType&&this.NS(c,b),c=f.virtualElements.nextSibling(c)};b.ea.Z$=function(a,b){a._ojOldRoot=b};b.ea.zea=function(a){return a._ojOldRoot};b.ea.FU=function(a){if(a.isInitial)return!1;if(1==a.node.nodeType)return!0;if(8==a.node.nodeType){var d=[];b.ea.NS(a.node,d);if(d&&1==d.length)return b.ea.Z$(a,d[0]),!0}return!1};b.ea.Yda=function(a){var d;1==a.node.nodeType?d=a.node:8==a.node.nodeType&&
(d=b.ea.zea(a));return d};b.ea.ZH=function(a){var b=$(document.createElement("div")),c={position:"absolute",height:a.offsetHeight+"px",width:a.offsetWidth+"px",left:a.offsetLeft+"px",top:a.offsetTop+"px"};b.appendTo(a.offsetParent);b.css(c);b.addClass("oj-animation-host-viewport");a=document.createElement("div");a.className="oj-animation-host";b.append(a);return a};b.ea.IU=function(a,d){var c={},e=b.ea.ZQ[d],f=b.ea.Yda(a);e&&(e.Vo&&!e.Wo&&(c.newViewParent=b.ea.ZH(f)),e.vr&&(c.oldViewParent=b.ea.ZH(f)),
e.Vo&&e.Wo&&(c.newViewParent=b.ea.ZH(f)));return c};b.ea.EU=function(a,d){return b.ea.u$(a.oldViewParent,a.newViewParent,d).then(function(){b.ea.Cia(a)})};b.ea.o_=function(a,b){var c=a[b];c&&(c=c.parentNode)&&c.parentNode&&c.parentNode.removeChild(c)};b.ea.Cia=function(a){a.removeOldView();a.insertNewView();b.ea.o_(a,"newViewParent");b.ea.o_(a,"oldViewParent")};b.ea.iq=function(a){return{canAnimate:b.ea.FU,prepareAnimation:function(d){return b.ea.IU(d,a)},animate:function(d){return b.ea.EU(d,a)}}};
b.ea.kJ=function(a){null==b.ea.JK&&(b.ea.JK=b.ze.G4("oj-animation-navigate-methods"));return b.ea.JK?b.ea.JK[a]:null};b.ea.bia=function(a,d){return b.ea.kJ(d)&&b.ea.FU(a)};b.ea.cia=function(a,d){var c=b.ea.kJ(d);return b.ea.IU(a,c)};b.ea.aia=function(a,d){var c=b.ea.kJ(d);return b.ea.EU(a,c)};b.ea.tW=function(a){return{canAnimate:function(d){return b.ea.bia(d,a)},prepareAnimation:function(d){return b.ea.cia(d,a)},animate:function(d){return b.ea.aia(d,a)}}};b.ea.hna=b.ea.iq("coverStart");o_("ModuleAnimations.coverStart",
b.ea.hna,b);b.ea.Ppa=b.ea.iq("revealEnd");o_("ModuleAnimations.revealEnd",b.ea.Ppa,b);b.ea.ina=b.ea.iq("coverUp");o_("ModuleAnimations.coverUp",b.ea.ina,b);b.ea.Opa=b.ea.iq("revealDown");o_("ModuleAnimations.revealDown",b.ea.Opa,b);b.ea.Cqa=b.ea.iq("zoomIn");o_("ModuleAnimations.zoomIn",b.ea.Cqa,b);b.ea.Dqa=b.ea.iq("zoomOut");o_("ModuleAnimations.zoomOut",b.ea.Dqa,b);b.ea.Pna=b.ea.iq("fade");o_("ModuleAnimations.fade",b.ea.Pna,b);b.ea.Ina=b.ea.tW("drillIn");o_("ModuleAnimations.drillIn",b.ea.Ina,
b);b.ea.Jna=b.ea.tW("drillOut");o_("ModuleAnimations.drillOut",b.ea.Jna,b);b.ea.iqa=function(a){return new function(){function d(a){return function(b){return c[a].call(c,b)}}var c,e=this;this.canAnimate=function(f){var h=a(f);c=null==h?null:b.ModuleAnimations[h];if(!c)return!1;for(var h=["prepareAnimation","animate"],k=0;k<h.length;k++){var l=h[k];e[l]=d(l)}return d("canAnimate")(f)}}};o_("ModuleAnimations.switcher",b.ea.iqa,b)});