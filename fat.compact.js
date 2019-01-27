/*
 FAT v0.6.8
 Copyright 2019 Nextapps GmbH
 Author: Thomas Wilkerling
 Released under the Apache 2.0 Licence
 https://github.com/nextapps-de/fat
*/
'use strict';(function(C,D,u){var q;(q=u.define)&&q.amd?q([],function(){return D}):(q=u.modules)?q[C.toLowerCase()]=D:"object"===typeof exports?module.exports=D:u[C]=D})("Fat",function(){function C(a,c,b,d,e,h,g,f,k,I,Y,p,m,q,B,t,l,r,n){this.b=a;this.j=a.v;this.style=c;this.H=c.replace(/([A-Z])/g,"-$1").toLowerCase();this.C=d;this.D=e;this.g=d;this.s=h;this.c=g;this.duration=f;this.m=k;this.ease=R(k);this.time=0;this.i=I;this.h=Y;this.G=b;this.a=p;this.F=r?"%"===h||-1!==c.indexOf("A"):"px"!==h;r&&
(this.f=r,this.o=n);t&&(this.transform=t)}function D(a,c,b){var d=b||-1,e;if("#"===a[0])if(a=a.toLowerCase(),4===a.length){b=y[(e=a[1])+e];var h=y[(e=a[2])+e];var g=y[(e=a[3])+e]}else b=y[a[1]+a[2]],h=y[a[3]+a[4]],g=y[a[5]+a[6]];else e=M(a,"(",")").split(","),b=parseInt(e[0],10),h=parseInt(e[1],10),g=parseInt(e[2],10),3<e.length&&(d=z(e[3])),-1!==a.indexOf("hsl")&&(0===h?h=g=a=g:(a=.5>g?g*(1+h):g+h-g*h,e=2*g-a,h=u(e,a,b+1/3),g=u(e,a,b),a=u(e,a,b-1/3)),b=255*h+.5>>0,h=255*g+.5>>0,g=255*a+.5>>0);a=
{};a[c+"R"]=b;a[c+"G"]=h;a[c+"B"]=g;-1!==d&&(a[c+"A"]=d);return a}function u(a,c,b){0>b?b+=1:1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}function q(){this.id=Z++;this.stack=[];this.B=aa.bind(this);this.exec=this.l=0}function N(a,c,b,d){d?a.setProperty(c,b,"important"):a.setProperty(c,b)}function R(a){if(K(a))if(a){var c;if(!(c=S[a])){if(c=O[a]||(O[a]=P.apply(P,ba[a]))){for(var b=new (Int16Array||Array)(A),d=0;d<A;d++)b[d]=c(d/A)*T+.5>>0;c=b}else c=[];c=S[a]=c}a=c}else a=[];
else a=null;return a}function aa(a){var c=this.stack,b=c.length;if(b){this.exec=requestAnimationFrame(this.B);this.l||(this.l=a);var d=!1;if(b)for(var e=0;e<b;e++){var h=c[e];h&&(d=!0,h.L(this,a)||(c[e]=null))}this.l=a;d||this.destroy()}}function K(a){return"string"===typeof a}function B(a){return"undefined"===typeof a}function L(a,c,b){if("custom"===c)return b||0;if(!a.nodeType)return B(b)?a[c]:b;var d=a.v||(a.v=a.style);return(B(b)?d[c]:b)||(a.w||(a.w=getComputedStyle(a)))[c]}function U(a,c,b,d){if("none"===
c)return c=a.substring(0,a.length-1),b[a]="scale"===c?1:0,d&&!b[c]&&(d[d.length]=c,b[c]=1),b;-1!==c.indexOf("matrix")&&(c=M(c,"(",")").split(","),c=a+"("+(parseFloat(c[ca[a]])||0)+")");a=c.replace(/, /g,",").split(" ");c={};for(var e=0,h=0;h<a.length;h++){var g=a[h],f=M(g,"(");if(f){g=M(g,"(",")").split(",");var k=g.length;2<k&&(f=f.replace("3d",""),b[f+"Z"]=g[2]);1<k?(b[f+"X"]=g[0],b[f+"Y"]=g[1]):(b[f]=g[0],f=f.substring(0,f.length-1));c[f]||(d&&(d[e++]=f),c[f]=1)}}return b}function da(a,c,b){var d=
a.u;if(d)var e=a.A;else a.u=d={},a.A=e=[];if(!d||B(d[c]))a=b||L(a,Q||"transform"),U(c,a,d,e);return d[c]}function ea(a,c,b,d){var e="_"+d,h=a[e];h||(b=b||L(a,d),a[e]=h=D(b,d,1));return h[c]}function M(a,c,b){var d=a.indexOf(c);return-1!==d?b?a.substring(d+c.length,a.indexOf(b)):a.substring(0,d):""}var A=Math.max(screen.width,screen.height),T=A*(window.devicePixelRatio||1),S={},O={},x,Q,V;document.addEventListener("DOMContentLoaded",function(){a:{var a=getComputedStyle(document.body);if(B(a.transform)){for(var c=
["webkit","moz","ms","o"],b=0,d;b<c.length;b++)if(!B(a[(d=c[b])+"Transform"])){x=d;break a}x=void 0}else x=""}Q=x&&x+"Transform";V=x&&"-"+Q.replace(/([A-Z])/g,"-$1").toLowerCase()},!1);var z=parseFloat,Z=0,ba={easeIn:[.55,.085,.68,.53],easeOut:[.25,.46,.45,.94],easeInOut:[.455,.03,.515,.955],cubicIn:[.55,.055,.675,.19],cubicOut:[.215,.61,.355,1],cubicInOut:[.645,.045,.355,1],quartIn:[.895,.03,.685,.22],quartOut:[.165,.84,.44,1],quartInOut:[.77,0,.175,1],quintIn:[.755,.05,.855,.06],quintOut:[.23,1,
.32,1],quintInOut:[.86,0,.07,1],expoIn:[.95,.05,.795,.035],expoOut:[.19,1,.22,1],expoInOut:[1,0,0,1],circIn:[.6,.04,.98,.335],circOut:[.075,.82,.165,1],circInOut:[.785,.135,.15,.86],sineIn:[.47,0,.745,.715],sineOut:[.39,.575,.565,1],sineInOut:[.445,.05,.55,.95],backIn:[.6,-.28,.735,.045],backOut:[.175,.885,.32,1.275],backInOut:[.68,-.55,.265,1.55],snap:[.1,1,.1,1]},P=function(){function a(a,b,d,e){this.a=a;this.i=b;this.b=d;this.j=e}a.prototype.c=function(a,b){return 1-3*b+3*a};a.prototype.f=function(a,
b){return 3*b-6*a};a.prototype.g=function(a){return 3*a};a.prototype.h=function(a,b,d){return((this.c(b,d)*a+this.f(b,d))*a+this.g(b))*a};a.prototype.m=function(a,b,d){return 3*this.c(b,d)*a*a+2*this.f(b,d)*a+this.g(b)};a.prototype.o=function(a){for(var b=a,c=0;4>c;++c){var e=this.m(b,this.a,this.b);if(0===e)break;b-=(this.h(b,this.a,this.b)-a)/e}return b};a.prototype.s=function(a){return 0===a||1===a||this.a===this.i&&this.b===this.j?a:this.h(this.o(a),this.i,this.j)};return function(c,b,d,e){c=
new a(c,b,d,e);return c.s.bind(c)}}(),m=C.prototype;m.animate=function(a,c){var b=this.C,d=this.D,e=this.duration,h=this.b,g=b===d||!1;a=this.time+=a-(c||a);c=a>=e;if(!g)if(c)var f=d;else{var k;if(k=this.ease)f=k.length?(d-b)*k[A/e*a+.5>>0]/T:(d-b)*a/e;else if(k=this.m)f=1===k.length?k(a/e):k(a,b,d,e);f=b+f;f=this.F?(f*A+.5>>0)/A:f+.5>>0}b=this.style;g||this.g===f||(this.g=f,this.transform?h.u[b]=f+this.s:this.f?h["_"+this.o][b]=f:(f+=this.s,"custom"!==b&&(h.nodeType?this.M(f):h[b]=f)));b===this.transform?
f=this.I():b===this.f&&(f=this.N(this.o));this.h&&this.h.call(h,c?1:a/e,f);c&&(this.time=-1,this.i&&this.i.call(h))};m.L=function(a,c){if(-1===this.time)this.b[this.G]=null;else{var b=c-a.l;if(this.a)if("view"===this.a)if(b=this.b.getBoundingClientRect(),0<=b.top&&b.bottom<=window.innerHeight)this.a=0;else return!0;else{if(0<(this.a-=b))return!0;this.a=0}this.animate(c,a.l);return!0}};m.M=function(a){N(this.j,this.H,a,this.c)};var W=function(a){function c(b,c){a[b]=-c;a[b+"R"]=c;a[b+"G"]=c;a[b+"B"]=
c;a[b+"A"]=c;a[b+"H"]=c;a[b+"S"]=c;a[b+"L"]=c}c("color",1);c("backgroundColor",2);c("borderColor",3);return a}({}),X=function(a){function c(b,c){a[b]=c;a[b+"X"]=c;a[b+"Y"]=c;a[b+"Z"]=c;a[b+"3d"]=c}c("translate",1);c("scale",2);c("rotate",3);c("skew",4);return a}({}),ca={scaleX:0,skewY:1,skewX:2,scaleY:3,translateX:4,translateY:5};var y={};var G=Array(255);for(var F=0;256>F;F++){var H=F.toString(16);H.length%2&&(H="0"+H);y[H]=F;G[F]=H}m.I=function(){for(var a=this.b.u,c=this.j,b=V||"transform",d=this.b.A,
e="",h=0,g=d.length;h<g;h++){var f=d[h],k="scale"===f?1:0,I=a[f+"X"],m=a[f+"Y"],p=a[f+"Z"];if(I||m||p)"rotate"===f&&(I&&(e+=f+"X("+(I||k)+") "),m&&(e+=f+"Y("+(m||k)+") ")),p&&z(p)!==k?e="rotate"===f?e+(f+"Z("+(p||k)+") "):e+(f+"3d("+(I||k)+","+(m||k)+","+p+") "):"rotate"!==f&&(e+=f+"("+(I||k)+","+(m||k)+") ")}N(c,b,e,this.c);return a};m.N=function(a){var c=this.b["_"+a],b=this.j,d=a.replace("C","-c"),e=c[a+"R"]||0,h=c[a+"G"]||0,g=c[a+"B"]||0;a=c[a+"A"];"%"===this.s&&(e=2.55*e+.5>>0,h=2.55*h+.5>>0,
g=2.55*g+.5>>0,a&&(a/=100));N(b,d,1===a||B(a)?"#"+G[e]+G[h]+G[g]:"rgba("+e+","+h+","+g+","+a+")",this.c);return c};m.J=function(a,c,b,d,e,h,g,f,k,m,q){B(a)?a=this.g:a=z(a);K(c)&&(c=z(c));this.C=a;this.D=c;this.duration=d;this.time=0;this.c=b;this.m!==e&&(this.ease=R(e),this.m=e);this.i=h;this.h=g;this.a=f;k&&(this.transform=k);m&&(this.f=m,this.o=q)};m=q.prototype;m.K=function(a,c,b,d,e,h,g,f,k,m,q,p,B,D,u){var t=""+(B?da:D?ea:L)(a,c,d,u);"auto"===t&&(t="0");d=z(t);if(K(e)){var l=e;e=z(e);h||(h=l.substring((""+
e).length))}h||(h=t.substring((""+d).length));c=new C(a,c,b,d,e,h,g,f,k,m,q,p,!1,!1,!1,B,void 0,D,u);this.stack[this.stack.length]=c;a[b]=c};m.animate=function(a,c,b,d){b?"function"===typeof b&&(d=b,b={}):b={};K(a)?a=document.querySelectorAll(a):a.constructor===Array||(a=[a]);var e=b.delay,h=b.duration||400,g=b.ease;if(g){var f;if(K(g)){if(f=M(g,"bezier(",")")){f=f.replace(/ /g,"");var k=f.split(",")}}else g.constructor===Array&&(f=g.join(","),k=g);f&&(O[f]||(O[f]=P.apply(P,k)),g=f)}f=g||"";k=Object.keys(c);
g=k.length;d=d||b.callback||!1;var m=b.step,q=b.force;b=b.init;for(var p,u,y,A,t=g;0<t--;){var l=k[t];if("transform"===l){p=U(l,c[l],{});l=Object.keys(p);for(var r=0,n=l.length;r<n;r++){var w=l[r];k[g++]=w;c[w]=p[w]}p=l[l.length-1]}else if(!p&&X[l])p=l;else if(r=W[l])0>r&&(n=c[l],"object"===typeof n&&(n=n.to),w=D(n,l),k[g++]=n=l+"R",c[n]=w[n],k[g++]=n=l+"G",c[n]=w[n],k[g++]=n=l+"B",c[n]=w[n],B(w=w[n=l+"A"])?l+="B":(k[g++]=n,c[n]=w,l=n),r*=-1),u||1!==r?y||2!==r?A||3!==r||(A=l):y=l:u=l}for(t=0;t<g;t++){var z=
w=n=r=void 0,x=k[t],v=c[x],C=void 0,F=void 0;if("transform"!==x){l=X[x]&&p;var E=W[x];if(E){if(0>E)continue;1===E?(r=u,z="color"):2===E?(n=y,z="backgroundColor"):3===E&&(w=A,z="borderColor")}v.constructor===Array?(C=v[0],F=v[2],v=v[1]):"object"===typeof v&&(e=v.delay||e,h=v.duration||h,f=v.ease||f,C=v.from,F=v.unit,v=v.to);E=t===g-1;for(var H="_fat_"+x+this.id,G=0,N=a.length;G<N;G++){var J=a[G];b&&0===t&&(J.w=null,p?J.u=null:u?J.R=null:y?J.O=null:A&&(J.P=null));var L=!b&&J[H];L?L.J(C,v,q,h,f,E&&d,
E&&m,e,l,r||n||w,z):this.K(J,x,H,C,v,F,q,h,f,E&&d,E&&m,e,l,r||n||w,z)}}}this.exec||(this.exec=requestAnimationFrame(this.B));return this};m.destroy=function(){this.exec&&(this.exec=0,this.stack=[],this.l=0);return this};m.create=function(a){return new q(a)};m.ease=O;m.transform=function(a,c,b,d){K(c)&&(c={transform:c});return this.animate(a,c,b,d)};return new q}(),this);
