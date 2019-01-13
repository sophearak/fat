/*
 FAT v0.5.1
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/fat
*/
'use strict';(function(q,g,k){var h;(h=k.define)&&h.amd?h([],function(){return g}):(h=k.modules)?h[q.toLowerCase()]=g:"object"===typeof exports?module.exports=g:k[q]=g})("Fat",function(){function q(a,b,c,d,f,e,g,J,m,D,h,x,r){this.j=a;this.F=a.m;this.style=b;this.a=d;this.b=f;this.g=d;this.v=e;this.s=g;this.duration=J;this.f=m;this.ease=k(m);this.start=0;this.i=D;this.h=h;this.H=c;this.u=x;this.c=r;this.G="px"!==e}function g(){this.id=++K;this.stack=[];this.w=h.bind(this);this.exec=0;this.l=!1}function k(a){if(C(a))if(a){var b;
if(!(b=A[a])){if(b=F[a]||!1){for(var c=new (Int16Array||Array)(t),d=0;d<t;d++)c[d]=1E4*b(d/t)+.5>>0;b=c}else b=[];b=A[a]=b}a=b}else a=[];else a=null;return a}function h(a){var b=this.stack.length;if(b){this.exec=requestAnimationFrame(this.w);E&&(p?p===this.id&&(v={}):(v={},p=this.id));for(var c=!1,d=0;d<b;d++){var f=this.stack[d];f&&(c=!0,f.C(a)||(this.stack[d]=null))}G=a;c||this.destroy()}}function C(a){return"string"===typeof a}function y(a){return"undefined"===typeof a}function H(a,b,c){b=w(b);
"+"===c?b=a+b:"-"===c?b=a-b:"*"===c?b*=a:"/"===c&&(b=a/b);return b}var t=Math.max(screen.width,screen.height),I=t,A={},F={},v,w=parseFloat,p,K=0,E=0,G=0,z=q.prototype;z.animate=function(a){var b=this.u,c=this.a===this.b||b&&v[b],d=this.j;a=Math.max(a-(this.start||(this.start=a)),0);var f=a>=this.duration;if(!c)if(b&&(v[b]=1),f)var e=this.b;else this.ease?e=this.ease.length?(this.b-this.a)*this.ease[t/this.duration*a+.5>>0]/1E4:(this.b-this.a)*a/this.duration:e=1===this.f.length?this.f(a/this.duration):
this.f(a,this.a,this.b,this.duration),e=this.a+e,e=this.G?(e*I+.5>>0)/I:e+.5>>0;b=this.style;c||this.g===e||(this.g=e,this.D(b,e));this.h&&this.h.call(d,a/this.duration);f&&(this.start=-1,this.i&&this.i.call(d))};z.C=function(a){if(-1===this.start)this.u||(this.j[this.H]=null);else{var b=a-G;if(this.c){if(0<(this.c-=b))return!0;this.c=0}this.animate(a);return!0}};z.D=function(a,b){"scrollTop"===a?this.j.scrollTop=b:this.F.setProperty(a,b+this.v,this.s?"important":void 0)};var u=g.prototype;u.B=function(a,
b,c,d,f,e,g,h,m,D,k,x,r){if("scrollTop"===b)d=y(d)?a.scrollTop:d;else{var n=a.m||(a.m=a.style);d=(d=y(d)?n[b]:d)?d:(a.o||(a.o=getComputedStyle(a)))[b]}n=""+d;"auto"===n&&(n="0");d=w(n);if(C(f)){var l=f;f="="===f[1]?H(d,l=f.substring(2),f[0]):w(f);e||(e=l.substring((""+f).length))}e||(e=n.substring((""+d).length)||"");b=new q(a,b,c,d,f,e,g,h,m,D,k,x,r,!1);this.stack[this.stack.length]=b;x||(a[c]=b)};u.animate=function(a,b,c){if(a&&b){c||(c={});C(a)?a=document.querySelectorAll(a):a.length||(a=[a]);
var d=c.callback||!1,f=c.step||0,e=c.force||0,g=c.strict||0,h=this.l||c.init,m=c.delay||0,k=c.duration||400;c=c.ease||"";for(var u=Object.keys(b),x=u.length,r=0;r<x;r++){var n=u[r],l=b[n],q=void 0,t=void 0,p=r===x-1,w="_fat_"+n+this.id;"object"===typeof l&&(m=l.delay||m,k=l.duration||k,c=l.ease||c,q=l.from,t=l.unit,l=l.to);for(var v=0,z=a.length;v<z;v++){var B=a[v],y=g&&n+(B._id||(B._id=E++));h&&0===r&&(B.o=null);var A=B[w];A&&!y?A.A(q,l,t,e,k,c,p&&d,p&&f,m):this.B(B,n,w,q,l,t,e,k,c,p&&d,p&&f,y,m)}}h&&
(this.l=!1);this.exec||(this.exec=requestAnimationFrame(this.w))}return this};u.destroy=function(){this.exec&&(this.exec=0,this.stack=[],E&&p===this.id&&(p=0));return this};u.init=function(){this.l=!0;return this};u.ease=F;u.create=function(){return new g};z.A=function(a,b,c,d,f,e,g,h,m){y(a)?a=this.g:a=w(a);C(b)&&(b="="===b[1]?H(a,b.substring(2),b[0]):w(b));this.a=a;this.b=b;this.duration=f;this.start=0;this.s=d;this.f!==e&&(this.ease=k(e),this.f=e);this.i=g;this.h=h;this.c=m;c&&(this.v=c)};return new g}(),
this);
