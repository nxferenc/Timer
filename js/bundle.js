const padLeft = i => Array(2 - String(i).length + 1).join('0') + i

window.onload = () => {
  document.body.onkeyup = key => {
    //Space
    if (key.keyCode == 32) {
      if (!Timer.state) {
        Timer.reset()
        Timer.start()
      } else {
        Timer.stop()
      }
    }

    //R
    if (key.keyCode == 82) {
      if (!Timer.state) {
        Timer.reset()
        Scramble.generate(type, 'randomScramble')
      }
    }
  }
  
  Scramble.generate(type, 'randomScramble')
}

!function t(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Raphael=r():e.Raphael=r()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var i,n;i=[r(1),r(3),r(4)],n=function(t){return t}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(2)],n=function(t){function e(r){if(e.is(r,"function"))return w?r():t.on("raphael.DOMload",r);if(e.is(r,Q))return e._engine.create[z](e,r.splice(0,3+e.is(r[0],$))).add(r);var i=Array.prototype.slice.call(arguments,0);if(e.is(i[i.length-1],"function")){var n=i.pop();return w?n.call(e._engine.create[z](e,i)):t.on("raphael.DOMload",function(){n.call(e._engine.create[z](e,i))})}return e._engine.create[z](e,arguments)}function r(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var i in t)t[A](i)&&(e[i]=r(t[i]));return e}function i(t,e){for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function n(t,e,r){function n(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=n.cache=n.cache||{},l=n.count=n.count||[];return o[A](s)?(i(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[z](e,a),r?r(o[s]):o[s])}return n}function a(){return this.hex}function s(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function o(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function l(t,e,r,i,n,a,s,l,h){null==h&&(h=1),h=h>1?1:h<0?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;g<c;g++){var v=u*f[g]+u,x=o(v,t,r,n,s),y=o(v,e,i,a,l),m=x*x+y*y;d+=p[g]*Y.sqrt(m)}return u*d}function h(t,e,r,i,n,a,s,o,h){if(!(h<0||l(t,e,r,i,n,a,s,o)<h)){var u=1,c=u/2,f=u-c,p,d=.01;for(p=l(t,e,r,i,n,a,s,o,f);H(p-h)>d;)c/=2,f+=(p<h?1:-1)*c,p=l(t,e,r,i,n,a,s,o,f);return f}}function u(t,e,r,i,n,a,s,o){if(!(W(t,r)<G(n,s)||G(t,r)>W(n,s)||W(e,i)<G(a,o)||G(e,i)>W(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p<+G(t,r).toFixed(2)||p>+W(t,r).toFixed(2)||p<+G(n,s).toFixed(2)||p>+W(n,s).toFixed(2)||d<+G(e,i).toFixed(2)||d>+W(e,i).toFixed(2)||d<+G(a,o).toFixed(2)||d>+W(a,o).toFixed(2)))return{x:c,y:f}}}}function c(t,e){return p(t,e)}function f(t,e){return p(t,e,1)}function p(t,r,i){var n=e.bezierBBox(t),a=e.bezierBBox(r);if(!e.isBBoxIntersect(n,a))return i?0:[];for(var s=l.apply(0,t),o=l.apply(0,r),h=W(~~(s/5),1),c=W(~~(o/5),1),f=[],p=[],d={},g=i?0:[],v=0;v<h+1;v++){var x=e.findDotsAtSegment.apply(e,t.concat(v/h));f.push({x:x.x,y:x.y,t:v/h})}for(v=0;v<c+1;v++)x=e.findDotsAtSegment.apply(e,r.concat(v/c)),p.push({x:x.x,y:x.y,t:v/c});for(v=0;v<h;v++)for(var y=0;y<c;y++){var m=f[v],b=f[v+1],_=p[y],w=p[y+1],k=H(b.x-m.x)<.001?"y":"x",B=H(w.x-_.x)<.001?"y":"x",C=u(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(C){if(d[C.x.toFixed(4)]==C.y.toFixed(4))continue;d[C.x.toFixed(4)]=C.y.toFixed(4);var S=m.t+H((C[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),A=_.t+H((C[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);S>=0&&S<=1.001&&A>=0&&A<=1.001&&(i?g++:g.push({x:C.x,y:C.y,t1:G(S,1),t2:G(A,1)}))}}return g}function d(t,r,i){t=e._path2curve(t),r=e._path2curve(r);for(var n,a,s,o,l,h,u,c,f,d,g=i?0:[],v=0,x=t.length;v<x;v++){var y=t[v];if("M"==y[0])n=l=y[1],a=h=y[2];else{"C"==y[0]?(f=[n,a].concat(y.slice(1)),n=f[6],a=f[7]):(f=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=r.length;m<b;m++){var _=r[m];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=p(f,d,i);if(i)g+=w;else{for(var k=0,B=w.length;k<B;k++)w[k].segment1=v,w[k].segment2=m,w[k].bez1=f,w[k].bez2=d;g=g.concat(w)}}}}}return g}function g(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function v(){return this.x+j+this.y}function x(){return this.x+j+this.y+j+this.width+" × "+this.height}function y(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;l<8;l++){if(a=s(n)-t,H(a)<e)return n;if(o=(3*c*n+2*u)*n+h,H(o)<1e-6)break;n-=a/o}if(r=0,i=1,n=t,n<r)return r;if(n>i)return i;for(;r<i;){if(a=s(n),H(a-t)<e)return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function m(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[A](n)&&(i[ht(n)]=t[n],r.push(ht(n)));r.sort(Bt)}this.anim=i,this.top=r[r.length-1],this.percents=r}function b(r,i,n,a,s,o){n=ht(n);var l,h,u,c=[],f,p,d,v=r.ms,x={},m={},b={};if(a)for(w=0,B=Ee.length;w<B;w++){var _=Ee[w];if(_.el.id==i.id&&_.anim==r){_.percent!=n?(Ee.splice(w,1),u=1):h=_,i.attr(_.totalOrigin);break}}else a=+m;for(var w=0,B=r.percents.length;w<B;w++){if(r.percents[w]==n||r.percents[w]>a*r.top){n=r.percents[w],p=r.percents[w-1]||0,v=v/r.top*(n-p),f=r.percents[w+1],l=r.anim[n];break}a&&i.attr(r.anim[r.percents[w]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var C in l)if(l[A](C)&&(pt[A](C)||i.paper.customAttributes[A](C)))switch(x[C]=i.attr(C),null==x[C]&&(x[C]=ft[C]),m[C]=l[C],pt[C]){case $:b[C]=(m[C]-x[C])/v;break;case"colour":x[C]=e.getRGB(x[C]);var S=e.getRGB(m[C]);b[C]={r:(S.r-x[C].r)/v,g:(S.g-x[C].g)/v,b:(S.b-x[C].b)/v};break;case"path":var T=Qt(x[C],m[C]),E=T[1];for(x[C]=T[0],b[C]=[],w=0,B=x[C].length;w<B;w++){b[C][w]=[0];for(var M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(E[w][M]-x[C][w][M])/v}break;case"transform":var L=i._,z=le(L[C],m[C]);if(z)for(x[C]=z.from,m[C]=z.to,b[C]=[],b[C].real=!0,w=0,B=x[C].length;w<B;w++)for(b[C][w]=[x[C][w][0]],M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(m[C][w][M]-x[C][w][M])/v;else{var F=i.matrix||new g,R={_:{transform:L.transform},getBBox:function(){return i.getBBox(1)}};x[C]=[F.a,F.b,F.c,F.d,F.e,F.f],se(R,m[C]),m[C]=R._.transform,b[C]=[(R.matrix.a-F.a)/v,(R.matrix.b-F.b)/v,(R.matrix.c-F.c)/v,(R.matrix.d-F.d)/v,(R.matrix.e-F.e)/v,(R.matrix.f-F.f)/v]}break;case"csv":var j=I(l[C])[q](k),D=I(x[C])[q](k);if("clip-rect"==C)for(x[C]=D,b[C]=[],w=D.length;w--;)b[C][w]=(j[w]-x[C][w])/v;m[C]=j;break;default:for(j=[][P](l[C]),D=[][P](x[C]),b[C]=[],w=i.paper.customAttributes[C].length;w--;)b[C][w]=((j[w]||0)-(D[w]||0))/v}var V=l.easing,O=e.easing_formulas[V];if(!O)if(O=I(V).match(st),O&&5==O.length){var Y=O;O=function(t){return y(t,+Y[1],+Y[2],+Y[3],+Y[4],v)}}else O=St;if(d=l.start||r.start||+new Date,_={anim:r,percent:n,timestamp:d,start:d+(r.del||0),status:0,initstatus:a||0,stop:!1,ms:v,easing:O,from:x,diff:b,to:m,el:i,callback:l.callback,prev:p,next:f,repeat:o||r.times,origin:i.attr(),totalOrigin:s},Ee.push(_),a&&!h&&!u&&(_.stop=!0,_.start=new Date-v*a,1==Ee.length))return Ne();u&&(_.start=new Date-_.ms*a),1==Ee.length&&Me(Ne)}t("raphael.anim.start."+i.id,i,r)}}function _(t){for(var e=0;e<Ee.length;e++)Ee[e].el.paper==t&&Ee.splice(e--,1)}e.version="2.2.0",e.eve=t;var w,k=/[, ]+/,B={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,S="prototype",A="hasOwnProperty",T={doc:document,win:window},E={was:Object.prototype[A].call(T.win,"Raphael"),is:T.win.Raphael},M=function(){this.ca=this.customAttributes={}},N,L="appendChild",z="apply",P="concat",F="ontouchstart"in T.win||T.win.DocumentTouch&&T.doc instanceof DocumentTouch,R="",j=" ",I=String,q="split",D="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[q](j),V={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},O=I.prototype.toLowerCase,Y=Math,W=Y.max,G=Y.min,H=Y.abs,X=Y.pow,U=Y.PI,$="number",Z="string",Q="array",J="toString",K="fill",tt=Object.prototype.toString,et={},rt="push",it=e._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,nt=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,at={NaN:1,Infinity:1,"-Infinity":1},st=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,ot=Y.round,lt="setAttribute",ht=parseFloat,ut=parseInt,ct=I.prototype.toUpperCase,ft=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0,"class":""},pt=e._availableAnimAttrs={blur:$,"clip-rect":"csv",cx:$,cy:$,fill:"colour","fill-opacity":$,"font-size":$,height:$,opacity:$,path:"path",r:$,rx:$,ry:$,stroke:"colour","stroke-opacity":$,"stroke-width":$,transform:"transform",width:$,x:$,y:$},dt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,gt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,vt={hs:1,rg:1},xt=/,?([achlmqrstvxz]),?/gi,yt=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,mt=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,bt=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,_t=e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,wt={},kt=function(t,e){return t.key-e.key},Bt=function(t,e){return ht(t)-ht(e)},Ct=function(){},St=function(t){return t},At=e._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},Tt=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},Et=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)}},Mt=e.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Qt(t),n=0,s=t.length;n<s;n++)for(l=t[n],a=1,o=l.length;a<o;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(e._g=T,e.type=T.win.SVGAngle||T.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var Nt=T.doc.createElement("div"),Lt;if(Nt.innerHTML='<v:shape adj="1"/>',Lt=Nt.firstChild,Lt.style.behavior="url(#default#VML)",!Lt||"object"!=typeof Lt.adj)return e.type=R;Nt=null}e.svg=!(e.vml="VML"==e.type),e._Paper=M,e.fn=N=M.prototype=e.prototype,e._id=0,e.is=function(t,e){return e=O.call(e),"finite"==e?!at[A](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||tt.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,r,i,n,a,s){if(null==a){var o=t-i,l=r-n;return o||l?(180+180*Y.atan2(-l,-o)/U+360)%360:0}return e.angle(t,r,a,s)-e.angle(i,n,a,s)},e.rad=function(t){return t%360*U/180},e.deg=function(t){return Math.round(180*t/U%360*1e3)/1e3},e.snapTo=function(t,r,i){if(i=e.is(i,"finite")?i:10,e.is(t,Q)){for(var n=t.length;n--;)if(H(t[n]-r)<=i)return t[n]}else{t=+t;var a=r%t;if(a<i)return r-a;if(a>t-i)return r-a+t}return r};var zt=e.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*Y.random()|0,r="x"==t?e:3&e|8;return r.toString(16)});e.setWindow=function(r){t("raphael.setWindow",e,T.win,r),T.win=r,T.doc=T.win.document,e._engine.initWin&&e._engine.initWin(T.win)};var Pt=function(t){if(e.vml){var r=/^\s+|\s+$/g,i;try{var a=new ActiveXObject("htmlfile");a.write("<body>"),a.close(),i=a.body}catch(s){i=createPopup().document.body}var o=i.createTextRange();Pt=n(function(t){try{i.style.color=I(t).replace(r,R);var e=o.queryCommandValue("ForeColor");return e=(255&e)<<16|65280&e|(16711680&e)>>>16,"#"+("000000"+e.toString(16)).slice(-6)}catch(n){return"none"}})}else{var l=T.doc.createElement("i");l.title="Raphaël Colour Picker",l.style.display="none",T.doc.body.appendChild(l),Pt=n(function(t){return l.style.color=t,T.doc.defaultView.getComputedStyle(l,R).getPropertyValue("color")})}return Pt(t)},Ft=function(){return"hsb("+[this.h,this.s,this.b]+")"},Rt=function(){return"hsl("+[this.h,this.s,this.l]+")"},jt=function(){return this.hex},It=function(t,r,i){if(null==r&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,r=t.g,t=t.r),null==r&&e.is(t,Z)){var n=e.getRGB(t);t=n.r,r=n.g,i=n.b}return(t>1||r>1||i>1)&&(t/=255,r/=255,i/=255),[t,r,i]},qt=function(t,r,i,n){t*=255,r*=255,i*=255;var a={r:t,g:r,b:i,hex:e.rgb(t,r,i),toString:jt};return e.is(n,"finite")&&(a.opacity=n),a};e.color=function(t){var r;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(r=e.hsb2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(r=e.hsl2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(r=e.rgb2hsl(t),t.h=r.h,t.s=r.s,t.l=r.l,r=e.rgb2hsb(t),t.v=r.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=jt,t},e.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,i=t.o,t=t.h),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-H(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(r<.5?r:1-r),o=l*(1-H(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.rgb2hsb=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=W(t,e,r),s=a-G(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:Ft}},e.rgb2hsl=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=W(t,e,r),o=G(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:a<.5?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:Rt}},e._path2string=function(){return this.join(",").replace(xt,"$1")};var Dt=e._preload=function(t,e){var r=T.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,T.doc.body.removeChild(this)},r.onerror=function(){T.doc.body.removeChild(this)},T.doc.body.appendChild(r),r.src=t};e.getRGB=n(function(t){if(!t||(t=I(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:a};!(vt[A](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=Pt(t));var r,i,n,s,o,l,h,u=t.match(nt);return u?(u[2]&&(s=ut(u[2].substring(5),16),n=ut(u[2].substring(3,5),16),i=ut(u[2].substring(1,3),16)),u[3]&&(s=ut((l=u[3].charAt(3))+l,16),n=ut((l=u[3].charAt(2))+l,16),i=ut((l=u[3].charAt(1))+l,16)),u[4]&&(h=u[4][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),"rgba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100)),u[5]?(h=u[5][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsb2rgb(i,n,s,o)):u[6]?(h=u[6][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsla"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsl2rgb(i,n,s,o)):(u={r:i,g:n,b:s,toString:a},u.hex="#"+(16777216|s|n<<8|i<<16).toString(16).slice(1),e.is(o,"finite")&&(u.opacity=o),u)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a}},e),e.hsb=n(function(t,r,i){return e.hsb2rgb(t,r,i).hex}),e.hsl=n(function(t,r,i){return e.hsl2rgb(t,r,i).hex}),e.rgb=n(function(t,e,r){function i(t){return t+.5|0}return"#"+(16777216|i(r)|i(e)<<8|i(t)<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var r=Vt(t);if(r.arr)return Yt(r.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,Q)&&e.is(t[0],Q)&&(n=Yt(t)),n.length||I(t).replace(yt,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(bt,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][P](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][P](a));else for(;a.length>=i[s]&&(n.push([e][P](a.splice(0,i[s]))),i[s]););}),n.toString=e._path2string,r.arr=Yt(n),n},e.parseTransformString=n(function(t){if(!t)return null;var r={r:3,s:4,t:2,m:6},i=[];return e.is(t,Q)&&e.is(t[0],Q)&&(i=Yt(t)),i.length||I(t).replace(mt,function(t,e,r){var n=[],a=O.call(e);r.replace(bt,function(t,e){e&&n.push(+e)}),i.push([e][P](n))}),i.toString=e._path2string,i});var Vt=function(t){var e=Vt.ps=Vt.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[A](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};e.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=X(h,3),c=X(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,v=t+2*l*(r-t)+f*(n-2*r+t),x=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,B=90-180*Y.atan2(v-y,x-m)/U;return(v>y||x<m)&&(B+=180),{x:d,y:g,m:{x:v,y:x},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},e.bezierBBox=function(t,r,i,n,a,s,o,l){e.is(t,"array")||(t=[t,r,i,n,a,s,o,l]);var h=Zt.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},e.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},e.isBBoxIntersect=function(t,r){var i=e.isPointInsideBBox;return i(r,t.x,t.y)||i(r,t.x2,t.y)||i(r,t.x,t.y2)||i(r,t.x2,t.y2)||i(t,r.x,r.y)||i(t,r.x2,r.y)||i(t,r.x,r.y2)||i(t,r.x2,r.y2)||(t.x<r.x2&&t.x>r.x||r.x<t.x2&&r.x>t.x)&&(t.y<r.y2&&t.y>r.y||r.y<t.y2&&r.y>t.y)},e.pathIntersection=function(t,e){return d(t,e)},e.pathIntersectionNumber=function(t,e){return d(t,e,1)},e.isPointInsidePath=function(t,r,i){var n=e.pathBBox(t);return e.isPointInsideBBox(n,r,i)&&d(t,[["M",r,i],["H",n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var Ot=e.pathBBox=function(t){var e=Vt(t);if(e.bbox)return r(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Qt(t);for(var i=0,n=0,a=[],s=[],o,l=0,h=t.length;l<h;l++)if(o=t[l],"M"==o[0])i=o[1],n=o[2],a.push(i),s.push(n);else{var u=Zt(i,n,o[1],o[2],o[3],o[4],o[5],o[6]);a=a[P](u.min.x,u.max.x),s=s[P](u.min.y,u.max.y),i=o[5],n=o[6]}var c=G[z](0,a),f=G[z](0,s),p=W[z](0,a),d=W[z](0,s),g=p-c,v=d-f,x={x:c,y:f,x2:p,y2:d,width:g,height:v,cx:c+g/2,cy:f+v/2};return e.bbox=r(x),x},Yt=function(t){var i=r(t);return i.toString=e._path2string,i},Wt=e._pathToRelative=function(t){var r=Vt(t);if(r.rel)return Yt(r.rel);e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));for(var h=l,u=t.length;h<u;h++){var c=i[h]=[],f=t[h];if(f[0]!=O.call(f[0]))switch(c[0]=O.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;p<d;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,v=f.length;g<v;g++)i[h][g]=f[g]}var x=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][x-1];break;case"v":a+=+i[h][x-1];break;default:n+=+i[h][x-2],a+=+i[h][x-1]}}return i.toString=e._path2string,r.rel=Yt(i),i},Gt=e._pathToAbsolute=function(t){var r=Vt(t);if(r.abs)return Yt(r.abs);if(e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,o=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],o=n,l=a,h++,i[0]=["M",n,a]);for(var u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),c,f,p=h,d=t.length;p<d;p++){if(i.push(c=[]),f=t[p],f[0]!=ct.call(f[0]))switch(c[0]=ct.call(f[0]),c[0]){case"A":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]+n),c[7]=+(f[7]+a);break;case"V":c[1]=+f[1]+a;break;case"H":c[1]=+f[1]+n;break;case"R":for(var g=[n,a][P](f.slice(1)),v=2,x=g.length;v<x;v++)g[v]=+g[v]+n,g[++v]=+g[v]+a;i.pop(),i=i[P](s(g,u));break;case"M":o=+f[1]+n,l=+f[2]+a;default:for(v=1,x=f.length;v<x;v++)c[v]=+f[v]+(v%2?n:a)}else if("R"==f[0])g=[n,a][P](f.slice(1)),i.pop(),i=i[P](s(g,u)),c=["R"][P](f.slice(-2));else for(var y=0,m=f.length;y<m;y++)c[y]=f[y];switch(c[0]){case"Z":n=o,a=l;break;case"H":n=c[1];break;case"V":a=c[1];break;case"M":o=c[c.length-2],l=c[c.length-1];default:n=c[c.length-2],a=c[c.length-1]}}return i.toString=e._path2string,r.abs=Yt(i),i},Ht=function(t,e,r,i){return[t,e,r,i,r,i]},Xt=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Ut=function(t,e,r,i,a,s,o,l,h,u){var c=120*U/180,f=U/180*(+a||0),p=[],d,g=n(function(t,e,r){var i=t*Y.cos(r)-e*Y.sin(r),n=t*Y.sin(r)+e*Y.cos(r);return{x:i,y:n}});if(u)S=u[0],A=u[1],B=u[2],C=u[3];else{d=g(t,e,-f),t=d.x,e=d.y,d=g(l,h,-f),l=d.x,h=d.y;var v=Y.cos(U/180*a),x=Y.sin(U/180*a),y=(t-l)/2,m=(e-h)/2,b=y*y/(r*r)+m*m/(i*i);b>1&&(b=Y.sqrt(b),r=b*r,i=b*i);var _=r*r,w=i*i,k=(s==o?-1:1)*Y.sqrt(H((_*w-_*m*m-w*y*y)/(_*m*m+w*y*y))),B=k*r*m/i+(t+l)/2,C=k*-i*y/r+(e+h)/2,S=Y.asin(((e-C)/i).toFixed(9)),A=Y.asin(((h-C)/i).toFixed(9));S=t<B?U-S:S,A=l<B?U-A:A,S<0&&(S=2*U+S),A<0&&(A=2*U+A),o&&S>A&&(S-=2*U),!o&&A>S&&(A-=2*U)}var T=A-S;if(H(T)>c){var E=A,M=l,N=h;A=S+c*(o&&A>S?1:-1),l=B+r*Y.cos(A),h=C+i*Y.sin(A),p=Ut(l,h,r,i,a,0,o,M,N,[A,E,B,C])}T=A-S;var L=Y.cos(S),z=Y.sin(S),F=Y.cos(A),R=Y.sin(A),j=Y.tan(T/4),I=4/3*r*j,D=4/3*i*j,V=[t,e],O=[t+I*z,e-D*L],W=[l+I*R,h-D*F],G=[l,h];if(O[0]=2*V[0]-O[0],O[1]=2*V[1]-O[1],u)return[O,W,G][P](p);p=[O,W,G][P](p).join()[q](",");for(var X=[],$=0,Z=p.length;$<Z;$++)X[$]=$%2?g(p[$-1],p[$],f).y:g(p[$],p[$+1],f).x;return X},$t=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:X(h,3)*t+3*X(h,2)*l*r+3*h*l*l*n+X(l,3)*s,y:X(h,3)*e+3*X(h,2)*l*i+3*h*l*l*a+X(l,3)*o}},Zt=n(function(t,e,r,i,n,a,s,o){var l=n-2*r+t-(s-2*n+r),h=2*(r-t)-2*(n-r),u=t-r,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,p=[e,o],d=[t,s],g;return H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),l=a-2*i+e-(o-2*a+i),h=2*(i-e)-2*(a-i),u=e-i,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),{min:{x:G[z](0,d),y:G[z](0,p)},max:{x:W[z](0,d),y:W[z](0,p)}}}),Qt=e._path2curve=n(function(t,e){var r=!e&&Vt(t);if(!e&&r.curve)return Yt(r.curve);for(var i=Gt(t),n=e&&Gt(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var i,n,a={T:1,Q:1};if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in a)&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][P](Ut[z](0,[e.x,e.y][P](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][P](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][P](Xt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][P](Xt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][P](Ht(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][P](Ht(e.x,e.y,t[1],e.y));break;case"V":t=["C"][P](Ht(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][P](Ht(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)u[e]="A",n&&(c[e]="A"),t.splice(e++,0,["C"][P](r.splice(0,6)));t.splice(e,1),g=W(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],g=W(i.length,n&&n.length||0))},u=[],c=[],f="",p="",d=0,g=W(i.length,n&&n.length||0);d<g;d++){i[d]&&(f=i[d][0]),"C"!=f&&(u[d]=f,d&&(p=u[d-1])),i[d]=o(i[d],a,p),"A"!=u[d]&&"C"==f&&(u[d]="C"),l(i,d),n&&(n[d]&&(f=n[d][0]),"C"!=f&&(c[d]=f,d&&(p=c[d-1])),n[d]=o(n[d],s,p),"A"!=c[d]&&"C"==f&&(c[d]="C"),l(n,d)),h(i,n,a,s,d),h(n,i,s,a,d);var v=i[d],x=n&&n[d],y=v.length,m=n&&x.length;a.x=v[y-2],a.y=v[y-1],a.bx=ht(v[y-4])||a.x,a.by=ht(v[y-3])||a.y,s.bx=n&&(ht(x[m-4])||s.x),s.by=n&&(ht(x[m-3])||s.y),s.x=n&&x[m-2],s.y=n&&x[m-1]}return n||(r.curve=Yt(i)),n?[i,n]:i},null,Yt),Jt=e._parseDots=n(function(t){for(var r=[],i=0,n=t.length;i<n;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.opacity=a.color.opacity,a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),r.push(a)}for(i=1,n=r.length-1;i<n;i++)if(!r[i].offset){for(var o=ht(r[i-1].offset||0),l=0,h=i+1;h<n;h++)if(r[h].offset){l=r[h].offset;break}l||(l=100,h=n),l=ht(l);for(var u=(l-o)/(h-i+1);i<h;i++)o+=u,r[i].offset=o+"%"}return r}),Kt=e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)},te=e._tofront=function(t,e){e.top!==t&&(Kt(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},ee=e._toback=function(t,e){e.bottom!==t&&(Kt(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},re=e._insertafter=function(t,e,r){Kt(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},ie=e._insertbefore=function(t,e,r){Kt(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},ne=e.toMatrix=function(t,e){var r=Ot(t),i={_:{transform:R},getBBox:function(){return r}};return se(i,e),i.matrix},ae=e.transformPath=function(t,e){return Mt(t,ne(t,e))},se=e._extractTransform=function(t,r){if(null==r)return t._.transform;r=I(r).replace(/\.{3}|\u2026/g,t._.transform||R);var i=e.parseTransformString(r),n=0,a=0,s=0,o=1,l=1,h=t._,u=new g;if(h.transform=i||[],i)for(var c=0,f=i.length;c<f;c++){var p=i[c],d=p.length,v=I(p[0]).toLowerCase(),x=p[0]!=v,y=x?u.invert():0,m,b,_,w,k;"t"==v&&3==d?x?(m=y.x(0,0),b=y.y(0,0),_=y.x(p[1],p[2]),w=y.y(p[1],p[2]),u.translate(_-m,w-b)):u.translate(p[1],p[2]):"r"==v?2==d?(k=k||t.getBBox(1),u.rotate(p[1],k.x+k.width/2,k.y+k.height/2),n+=p[1]):4==d&&(x?(_=y.x(p[2],p[3]),w=y.y(p[2],p[3]),u.rotate(p[1],_,w)):u.rotate(p[1],p[2],p[3]),n+=p[1]):"s"==v?2==d||3==d?(k=k||t.getBBox(1),u.scale(p[1],p[d-1],k.x+k.width/2,k.y+k.height/2),o*=p[1],l*=p[d-1]):5==d&&(x?(_=y.x(p[3],p[4]),w=y.y(p[3],p[4]),u.scale(p[1],p[2],_,w)):u.scale(p[1],p[2],p[3],p[4]),o*=p[1],l*=p[2]):"m"==v&&7==d&&u.add(p[1],p[2],p[3],p[4],p[5],p[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1},oe=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},le=e._equaliseTransform=function(t,r){r=I(r).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],r=e.parseTransformString(r)||[];for(var i=W(t.length,r.length),n=[],a=[],s=0,o,l,h,u;s<i;s++){if(h=t[s]||oe(r[s]),u=r[s]||oe(h),h[0]!=u[0]||"r"==h[0].toLowerCase()&&(h[2]!=u[2]||h[3]!=u[3])||"s"==h[0].toLowerCase()&&(h[3]!=u[3]||h[4]!=u[4]))return;for(n[s]=[],a[s]=[],o=0,l=W(h.length,u.length);o<l;o++)o in h&&(n[s][o]=h[o]),o in u&&(a[s][o]=u[o])}return{from:n,to:a}};e._getContainer=function(t,r,i,n){var a;if(a=null!=n||e.is(t,"object")?t:T.doc.getElementById(t),null!=a)return a.tagName?null==r?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:r,height:i}:{container:1,x:t,y:r,width:i,height:n}},e.pathToRelative=Wt,e._engine={},e.path2curve=Qt,e.matrix=function(t,e,r,i,n,a){return new g(t,e,r,i,n,a)},function(t){function r(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var e=Y.sqrt(r(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,r,i,n,a){var s=[[],[],[]],o=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],l=[[t,r,n],[e,i,a],[0,0,1]],h,u,c,f;for(t&&t instanceof g&&(l=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),h=0;h<3;h++)for(u=0;u<3;u++){for(f=0,c=0;c<3;c++)f+=o[h][c]*l[c][u];s[h][u]=f}this.a=s[0][0],this.b=s[1][0],this.c=s[0][1],this.d=s[1][1],this.e=s[0][2],this.f=s[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new g(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new g(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){
this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,r,i){t=e.rad(t),r=r||0,i=i||0;var n=+Y.cos(t).toFixed(9),a=+Y.sin(t).toFixed(9);this.add(n,a,-a,n,r,i),this.add(1,0,0,1,-r,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[I.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=Y.sqrt(r(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=Y.sqrt(r(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return s<0?(t.rotate=e.deg(Y.acos(s)),a<0&&(t.rotate=360-t.rotate)):t.rotate=e.deg(Y.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[q]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:R)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:R)+(e.rotate?"r"+[e.rotate,0,0]:R)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(g.prototype);for(var he=function(){this.returnValue=!1},ue=function(){return this.originalEvent.preventDefault()},ce=function(){this.cancelBubble=!0},fe=function(){return this.originalEvent.stopPropagation()},pe=function(t){var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,r=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},de=function(){return T.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=pe(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),F&&V[e]){var a=function(e){for(var n=pe(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;s<o;s++)if(e.targetTouches[s].target==t){e=e.targetTouches[s],e.originalEvent=a,e.preventDefault=ue,e.stopPropagation=fe;break}return r.call(i,e,n.x,n.y)};t.addEventListener(V[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),F&&V[e]&&t.removeEventListener(V[e],a,!1),!0}}:T.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||T.win.event;var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,n=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||he,t.stopPropagation=t.stopPropagation||ce,r.call(i,t,a,s)};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a}:void 0}(),ge=[],ve=function(e){for(var r=e.clientX,i=e.clientY,n=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,a=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,s,o=ge.length;o--;){if(s=ge[o],F&&e.touches){for(var l=e.touches.length,h;l--;)if(h=e.touches[l],h.identifier==s.el._drag.id){r=h.clientX,i=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var u=s.el.node,c,f=u.nextSibling,p=u.parentNode,d=u.style.display;T.win.opera&&p.removeChild(u),u.style.display="none",c=s.el.paper.getElementByPoint(r,i),u.style.display=d,T.win.opera&&(f?p.insertBefore(u,f):p.appendChild(u)),c&&t("raphael.drag.over."+s.el.id,s.el,c),r+=a,i+=n,t("raphael.drag.move."+s.el.id,s.move_scope||s.el,r-s.el._drag.x,i-s.el._drag.y,r,i,e)}},xe=function(r){e.unmousemove(ve).unmouseup(xe);for(var i=ge.length,n;i--;)n=ge[i],n.el._drag={},t("raphael.drag.end."+n.el.id,n.end_scope||n.start_scope||n.move_scope||n.el,r);ge=[]},ye=e.el={},me=D.length;me--;)!function(t){e[t]=ye[t]=function(r,i){return e.is(r,"function")&&(this.events=this.events||[],this.events.push({name:t,f:r,unbind:de(this.shape||this.node||T.doc,t,r,i||this)})),this},e["un"+t]=ye["un"+t]=function(r){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!e.is(r,"undefined")&&i[n].f!=r||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}}(D[me]);ye.data=function(r,i){var n=wt[this.id]=wt[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(r,"object")){for(var a in r)r[A](a)&&this.data(a,r[a]);return this}return t("raphael.data.get."+this.id,this,n[r],r),n[r]}return n[r]=i,t("raphael.data.set."+this.id,this,i,r),this},ye.removeData=function(t){return null==t?wt[this.id]={}:wt[this.id]&&delete wt[this.id][t],this},ye.getData=function(){return r(wt[this.id]||{})},ye.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},ye.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var be=[];ye.drag=function(r,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=l.clientX,u=l.clientY,c=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,f=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;if(this._drag.id=l.identifier,F&&l.touches)for(var p=l.touches.length,d;p--;)if(d=l.touches[p],this._drag.id=d.identifier,d.identifier==this._drag.id){h=d.clientX,u=d.clientY;break}this._drag.x=h+f,this._drag.y=u+c,!ge.length&&e.mousemove(ve).mouseup(xe),ge.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&t.on("raphael.drag.start."+this.id,i),r&&t.on("raphael.drag.move."+this.id,r),n&&t.on("raphael.drag.end."+this.id,n),t("raphael.drag.start."+this.id,s||a||this,l.clientX+f,l.clientY+c,l)}return this._drag={},be.push({el:this,start:l}),this.mousedown(l),this},ye.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},ye.undrag=function(){for(var r=be.length;r--;)be[r].el==this&&(this.unmousedown(be[r].start),be.splice(r,1),t.unbind("raphael.drag.*."+this.id));!be.length&&e.unmousemove(ve).unmouseup(xe),ge=[]},N.circle=function(t,r,i){var n=e._engine.circle(this,t||0,r||0,i||0);return this.__set__&&this.__set__.push(n),n},N.rect=function(t,r,i,n,a){var s=e._engine.rect(this,t||0,r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.ellipse=function(t,r,i,n){var a=e._engine.ellipse(this,t||0,r||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},N.path=function(t){t&&!e.is(t,Z)&&!e.is(t[0],Q)&&(t+=R);var r=e._engine.path(e.format[z](e,arguments),this);return this.__set__&&this.__set__.push(r),r},N.image=function(t,r,i,n,a){var s=e._engine.image(this,t||"about:blank",r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.text=function(t,r,i){var n=e._engine.text(this,t||0,r||0,I(i));return this.__set__&&this.__set__.push(n),n},N.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var r=new ze(t);return this.__set__&&this.__set__.push(r),r.paper=this,r.type="set",r},N.setStart=function(t){this.__set__=t||this.set()},N.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},N.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},N.setSize=function(t,r){return e._engine.setSize.call(this,t,r)},N.setViewBox=function(t,r,i,n,a){return e._engine.setViewBox.call(this,t,r,i,n,a)},N.top=N.bottom=null,N.raphael=e;var _e=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(T.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(T.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};N.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=T.doc.elementFromPoint(t,e);if(T.win.opera&&"svg"==n.tagName){var a=_e(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},N.getElementsByBBox=function(t){var r=this.set();return this.forEach(function(i){e.isBBoxIntersect(i.getBBox(),t)&&r.push(i)}),r},N.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},N.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},N.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},ye.isPointInside=function(t,r){var i=this.realPath=Et[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=e.transformPath(i,this.attr("transform"))),e.isPointInsidePath(i,t,r)},ye.getBBox=function(t){if(this.removed)return{};var e=this._;return t?(!e.dirty&&e.bboxwt||(this.realPath=Et[this.type](this),e.bboxwt=Ot(this.realPath),e.bboxwt.toString=x,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&(!e.dirty&&this.realPath||(e.bboxwt=0,this.realPath=Et[this.type](this)),e.bbox=Ot(Mt(this.realPath,this.matrix)),e.bbox.toString=x,e.dirty=e.dirtyT=0),e.bbox)},ye.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},ye.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||Et[this.type](this);a=this.matrix?Mt(a,this.matrix):a;for(var s=1;s<r+1;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var we={},ke=function(t,r,i,n,a,s,o,u,c){return null==c?l(t,r,i,n,a,s,o,u):e.findDotsAtSegment(t,r,i,n,a,s,o,u,h(t,r,i,n,a,s,o,u,c))},Be=function(t,r){return function(i,n,a){i=Qt(i);for(var s,o,l,h,u="",c={},f,p=0,d=0,g=i.length;d<g;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];else{if(h=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(r&&!c.start){if(f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),u+=["C"+f.start.x,f.start.y,f.m.x,f.m.y,f.x,f.y],a)return u;c.start=u,u=["M"+f.x,f.y+"C"+f.n.x,f.n.y,f.end.x,f.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!r)return f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:f.x,y:f.y,alpha:f.alpha}}p+=h,s=+l[5],o=+l[6]}u+=l.shift()+l}return c.end=u,f=t?p:r?c:e.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),f.alpha&&(f={x:f.x,y:f.y,alpha:f.alpha}),f}},Ce=Be(1),Se=Be(),Ae=Be(0,1);e.getTotalLength=Ce,e.getPointAtLength=Se,e.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return Ae(t,e).end;var i=Ae(t,r,1);return e?Ae(i,e).end:i},ye.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():Ce(t)},ye.getPointAtLength=function(t){var e=this.getPath();if(e)return Se(e,t)},ye.getPath=function(){var t,r=e._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return r&&(t=r(this)),t},ye.getSubpath=function(t,r){var i=this.getPath();if(i)return e.getSubpath(i,t,r)};var Te=e.easing_formulas={linear:function(t){return t},"<":function(t){return X(t,1.7)},">":function(t){return X(t,.48)},"<>":function(t){var e=.48-t/1.04,r=Y.sqrt(.1734+e*e),i=r-e,n=X(H(i),1/3)*(i<0?-1:1),a=-r-e,s=X(H(a),1/3)*(a<0?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:X(2,-10*t)*Y.sin((t-.075)*(2*U)/.3)+1},bounce:function(t){var e=7.5625,r=2.75,i;return t<1/r?i=e*t*t:t<2/r?(t-=1.5/r,i=e*t*t+.75):t<2.5/r?(t-=2.25/r,i=e*t*t+.9375):(t-=2.625/r,i=e*t*t+.984375),i}};Te.easeIn=Te["ease-in"]=Te["<"],Te.easeOut=Te["ease-out"]=Te[">"],Te.easeInOut=Te["ease-in-out"]=Te["<>"],Te["back-in"]=Te.backIn,Te["back-out"]=Te.backOut;var Ee=[],Me=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},Ne=function(){for(var r=+new Date,i=0;i<Ee.length;i++){var n=Ee[i];if(!n.el.removed&&!n.paused){var a=r-n.start,s=n.ms,o=n.easing,l=n.from,h=n.diff,u=n.to,c=n.t,f=n.el,p={},d,g={},v;if(n.initstatus?(a=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*s,n.status=n.initstatus,delete n.initstatus,n.stop&&Ee.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(a/s))/n.anim.top,!(a<0))if(a<s){var x=o(a/s);for(var y in l)if(l[A](y)){switch(pt[y]){case $:d=+l[y]+x*s*h[y];break;case"colour":d="rgb("+[Le(ot(l[y].r+x*s*h[y].r)),Le(ot(l[y].g+x*s*h[y].g)),Le(ot(l[y].b+x*s*h[y].b))].join(",")+")";break;case"path":d=[];for(var m=0,_=l[y].length;m<_;m++){d[m]=[l[y][m][0]];for(var w=1,k=l[y][m].length;w<k;w++)d[m][w]=+l[y][m][w]+x*s*h[y][m][w];d[m]=d[m].join(j)}d=d.join(j);break;case"transform":if(h[y].real)for(d=[],m=0,_=l[y].length;m<_;m++)for(d[m]=[l[y][m][0]],w=1,k=l[y][m].length;w<k;w++)d[m][w]=l[y][m][w]+x*s*h[y][m][w];else{var B=function(t){return+l[y][t]+x*s*h[y][t]};d=[["m",B(0),B(1),B(2),B(3),B(4),B(5)]]}break;case"csv":if("clip-rect"==y)for(d=[],m=4;m--;)d[m]=+l[y][m]+x*s*h[y][m];break;default:var C=[][P](l[y]);for(d=[],m=f.paper.customAttributes[y].length;m--;)d[m]=+C[m]+x*s*h[y][m]}p[y]=d}f.attr(p),function(e,r,i){setTimeout(function(){t("raphael.anim.frame."+e,r,i)})}(f.id,f,n.anim)}else{if(function(r,i,n){setTimeout(function(){t("raphael.anim.frame."+i.id,i,n),t("raphael.anim.finish."+i.id,i,n),e.is(r,"function")&&r.call(i)})}(n.callback,f,n.anim),f.attr(u),Ee.splice(i--,1),n.repeat>1&&!n.next){for(v in u)u[A](v)&&(g[v]=n.totalOrigin[v]);n.el.attr(g),b(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&b(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}Ee.length&&Me(Ne)},Le=function(t){return t>255?255:t<0?0:t};ye.animateWith=function(t,r,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var l=i instanceof m?i:e.animation(i,n,a,s),h,u;b(l,o,l.percents[0],null,o.attr());for(var c=0,f=Ee.length;c<f;c++)if(Ee[c].anim==r&&Ee[c].el==t){Ee[f-1].start=Ee[c].start;break}return o},ye.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},m.prototype.delay=function(t){var e=new m(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},m.prototype.repeat=function(t){var e=new m(this.anim,this.ms);return e.del=this.del,e.times=Y.floor(W(t,0))||1,e},e.animation=function(t,r,i,n){if(t instanceof m)return t;!e.is(i,"function")&&i||(n=n||i||null,i=null),t=Object(t),r=+r||0;var a={},s,o;for(o in t)t[A](o)&&ht(o)!=o&&ht(o)+"%"!=o&&(s=!0,a[o]=t[o]);if(s)return i&&(a.easing=i),n&&(a.callback=n),new m({100:a},r);if(n){var l=0;for(var h in t){var u=ut(h);t[A](h)&&u>l&&(l=u)}l+="%",!t[l].callback&&(t[l].callback=n)}return new m(t,r)},ye.animate=function(t,r,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof m?t:e.animation(t,r,i,n);return b(s,a,s.percents[0],null,a.attr()),a},ye.setTime=function(t,e){return t&&null!=e&&this.status(t,G(e,t.ms)/t.ms),this},ye.status=function(t,e){var r=[],i=0,n,a;if(null!=e)return b(t,this,-1,G(e,1)),this;for(n=Ee.length;i<n;i++)if(a=Ee[i],a.el.id==this.id&&(!t||a.anim==t)){if(t)return a.status;r.push({anim:a.anim,status:a.status})}return t?0:r},ye.pause=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.pause."+this.id,this,Ee[r].anim)!==!1&&(Ee[r].paused=!0);return this},ye.resume=function(e){for(var r=0;r<Ee.length;r++)if(Ee[r].el.id==this.id&&(!e||Ee[r].anim==e)){var i=Ee[r];t("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))}return this},ye.stop=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.stop."+this.id,this,Ee[r].anim)!==!1&&Ee.splice(r--,1);return this},t.on("raphael.remove",_),t.on("raphael.clear",_),ye.toString=function(){return"Raphaël’s object"};var ze=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;e<r;e++)!t[e]||t[e].constructor!=ye.constructor&&t[e].constructor!=ze||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},Pe=ze.prototype;Pe.push=function(){for(var t,e,r=0,i=arguments.length;r<i;r++)t=arguments[r],!t||t.constructor!=ye.constructor&&t.constructor!=ze||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},Pe.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},Pe.forEach=function(t,e){for(var r=0,i=this.items.length;r<i;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var Fe in ye)ye[A](Fe)&&(Pe[Fe]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][z](r,e)})}}(Fe));return Pe.attr=function(t,r){if(t&&e.is(t,Q)&&e.is(t[0],"object"))for(var i=0,n=t.length;i<n;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;a<s;a++)this.items[a].attr(t,r);return this},Pe.clear=function(){for(;this.length;)this.pop()},Pe.splice=function(t,e,r){t=t<0?W(this.length+t,0):t,e=W(0,G(this.length-t,e));var i=[],n=[],a=[],s;for(s=2;s<arguments.length;s++)a.push(arguments[s]);for(s=0;s<e;s++)n.push(this[t+s]);for(;s<this.length-t;s++)i.push(this[t+s]);var o=a.length;for(s=0;s<o+i.length;s++)this.items[t+s]=this[t+s]=s<o?a[s]:i[s-o];for(s=this.items.length=this.length-=e-o;this[s];)delete this[s++];return new ze(n)},Pe.exclude=function(t){for(var e=0,r=this.length;e<r;e++)if(this[e]==t)return this.splice(e,1),!0},Pe.animate=function(t,r,i,n){(e.is(i,"function")||!i)&&(n=i||null);var a=this.items.length,s=a,o,l=this,h;if(!a)return this;n&&(h=function(){!--a&&n.call(l)}),i=e.is(i,Z)?i:h;var u=e.animation(t,r,i,h);for(o=this.items[--s].animate(u);s--;)this.items[s]&&!this.items[s].removed&&this.items[s].animateWith(o,u,u),this.items[s]&&!this.items[s].removed||a--;return this},Pe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},Pe.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=G[z](0,t),e=G[z](0,e),r=W[z](0,r),i=W[z](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},Pe.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;e<r;e++)t.push(this.items[e].clone());return t},Pe.toString=function(){return"Raphaël‘s set"},Pe.glow=function(t){var e=this.paper.set();return this.forEach(function(r,i){var n=r.glow(t);null!=n&&n.forEach(function(t,r){e.push(t)})}),e},Pe.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){if(i.isPointInside(t,e))return r=!0,!1}),r},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[A](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=ut(t.face["units-per-em"],10);for(var n in t.glyphs)if(t.glyphs[A](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[A](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},N.getFont=function(t,r,i,n){if(n=n||"normal",i=i||"normal",r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400,e.fonts){var a=e.fonts[t];if(!a){var s=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,R)+"(\\s|$)","i");for(var o in e.fonts)if(e.fonts[A](o)&&s.test(o)){a=e.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;h<u&&(l=a[h],l.face["font-weight"]!=r||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l}},N.print=function(t,r,i,n,a,s,o,l){s=s||"middle",o=W(G(o||0,1),-1),l=W(G(l||1,3),1);var h=I(i)[q](R),u=0,c=0,f=R,p;if(e.is(n,"string")&&(n=this.getFont(n)),n){p=(a||16)/n.face["units-per-em"];for(var d=n.face.bbox[q](k),g=+d[0],v=d[3]-d[1],x=0,y=+d[1]+("baseline"==s?v+ +n.face.descent:v/2),m=0,b=h.length;m<b;m++){if("\n"==h[m])u=0,w=0,c=0,x+=v*l;else{var _=c&&n.glyphs[h[m-1]]||{},w=n.glyphs[h[m]];u+=c?(_.w||n.w)+(_.k&&_.k[h[m]]||0)+n.w*o:0,c=1}w&&w.d&&(f+=e.transformPath(w.d,["t",u*p,x*p,"s",p,p,g,y,"t",(t-g)/p,(r-y)/p]))}}return this.path(f).attr({fill:"#000",stroke:"none"})},N.add=function(t){if(e.is(t,"array"))for(var r=this.set(),i=0,n=t.length,a;i<n;i++)a=t[i]||{},B[A](a.type)&&r.push(this[a.type]().attr(a));return r},e.format=function(t,r){var i=e.is(r,Q)?[0][P](r):arguments;return t&&e.is(t,Z)&&i.length-1&&(t=t.replace(C,function(t,e){return null==i[++e]?R:i[e]})),t||R},e.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""};return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)})}}(),e.ninja=function(){if(E.was)T.win.Raphael=E.is;else{window.Raphael=void 0;try{delete window.Raphael}catch(t){}}return e},e.st=Pe,t.on("raphael.DOMload",function(){w=!0}),function(t,r,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):e.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(r,i=function(){t.removeEventListener(r,i,!1),t.readyState="complete"},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),e}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;!function(r){var a="0.5.0",s="hasOwnProperty",o=/[\.\/]/,l=/\s*,\s*/,h="*",u=function(){},c=function(t,e){return t-e},f,p,d={n:{}},g=function(){for(var t=0,e=this.length;t<e;t++)if("undefined"!=typeof this[t])return this[t]},v=function(){for(var t=this.length;--t;)if("undefined"!=typeof this[t])return this[t]},x=Object.prototype.toString,y=String,m=Array.isArray||function(t){return t instanceof Array||"[object Array]"==x.call(t)};eve=function(t,e){var r=d,i=p,n=Array.prototype.slice.call(arguments,2),a=eve.listeners(t),s=0,o=!1,l,h=[],u={},x=[],y=f,m=[];x.firstDefined=g,x.lastDefined=v,f=t,p=0;for(var b=0,_=a.length;b<_;b++)"zIndex"in a[b]&&(h.push(a[b].zIndex),a[b].zIndex<0&&(u[a[b].zIndex]=a[b]));for(h.sort(c);h[s]<0;)if(l=u[h[s++]],x.push(l.apply(e,n)),p)return p=i,x;for(b=0;b<_;b++)if(l=a[b],"zIndex"in l)if(l.zIndex==h[s]){if(x.push(l.apply(e,n)),p)break;do if(s++,l=u[h[s]],l&&x.push(l.apply(e,n)),p)break;while(l)}else u[l.zIndex]=l;else if(x.push(l.apply(e,n)),p)break;return p=i,f=y,x},eve._events=d,eve.listeners=function(t){var e=m(t)?t:t.split(o),r=d,i,n,a,s,l,u,c,f,p=[r],g=[];for(s=0,l=e.length;s<l;s++){for(f=[],u=0,c=p.length;u<c;u++)for(r=p[u].n,n=[r[e[s]],r[h]],a=2;a--;)i=n[a],i&&(f.push(i),g=g.concat(i.f||[]));p=f}return g},eve.separator=function(t){t?(t=y(t).replace(/(?=[\.\^\]\[\-])/g,"\\"),t="["+t+"]",o=new RegExp(t)):o=/[\.\/]/},eve.on=function(t,e){if("function"!=typeof e)return function(){};for(var r=m(t)?m(t[0])?t:[t]:y(t).split(l),i=0,n=r.length;i<n;i++)!function(t){for(var r=m(t)?t:y(t).split(o),i=d,n,a=0,s=r.length;a<s;a++)i=i.n,i=i.hasOwnProperty(r[a])&&i[r[a]]||(i[r[a]]={n:{}});for(i.f=i.f||[],a=0,s=i.f.length;a<s;a++)if(i.f[a]==e){n=!0;break}!n&&i.f.push(e)}(r[i]);return function(t){+t==+t&&(e.zIndex=+t)}},eve.f=function(t){var e=[].slice.call(arguments,1);return function(){eve.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},eve.stop=function(){p=1},eve.nt=function(t){var e=m(f)?f.join("."):f;return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},eve.nts=function(){return m(f)?f:f.split(o)},eve.off=eve.unbind=function(t,e){if(!t)return void(eve._events=d={n:{}});var r=m(t)?m(t[0])?t:[t]:y(t).split(l);if(r.length>1)for(var i=0,n=r.length;i<n;i++)eve.off(r[i],e);else{r=m(t)?t:y(t).split(o);var a,u,c,i,n,f,p,g=[d];for(i=0,n=r.length;i<n;i++)for(f=0;f<g.length;f+=c.length-2){if(c=[f,1],a=g[f].n,r[i]!=h)a[r[i]]&&c.push(a[r[i]]);else for(u in a)a[s](u)&&c.push(a[u]);g.splice.apply(g,c)}for(i=0,n=g.length;i<n;i++)for(a=g[i];a.n;){if(e){if(a.f){for(f=0,p=a.f.length;f<p;f++)if(a.f[f]==e){a.f.splice(f,1);break}!a.f.length&&delete a.f}for(u in a.n)if(a.n[s](u)&&a.n[u].f){var v=a.n[u].f;for(f=0,p=v.length;f<p;f++)if(v[f]==e){v.splice(f,1);break}!v.length&&delete a.n[u].f}}else{delete a.f;for(u in a.n)a.n[s](u)&&a.n[u].f&&delete a.n[u].f}a=a.n}}},eve.once=function(t,e){var r=function(){return eve.off(t,r),e.apply(this,arguments)};return eve.on(t,r)},eve.version=a,eve.toString=function(){return"You are running Eve "+a},"undefined"!=typeof t&&t.exports?t.exports=eve:(i=[],n=function(){return eve}.apply(e,i),!(void 0!==n&&(t.exports=n)))}(this)},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.svg){var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var v=function(i,n){if(n){"string"==typeof i&&(i=v(i));for(var a in n)n[e](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])))}else i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},x=function(e,n){var h="linear",u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,x=d.style,y=t._g.doc.getElementById(u);if(!y){if(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var b=n.shift();if(b=-i(b),isNaN(b))return null;var _=[0,0,a.cos(t.rad(b)),a.sin(t.rad(b))],w=1/(s(o(_[2]),o(_[3]))||1);_[2]*=w,_[3]*=w,_[2]<0&&(_[0]=-_[2],_[2]=0),_[3]<0&&(_[1]=-_[3],_[3]=0)}var k=t._parseDots(n);if(!k)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&u!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=v(h+"Gradient",{id:u}),e.gradient=y,v(y,"radial"==h?{fx:f,fy:p}:{x1:_[0],y1:_[1],x2:_[2],y2:_[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y);for(var B=0,C=k.length;B<C;B++)y.appendChild(v("stop",{offset:k[B].offset?k[B].offset:B?"100%":"0%","stop-color":k[B].color||"#fff","stop-opacity":isFinite(k[B].opacity)?k[B].opacity:1}))}}return v(d,{fill:m(u),opacity:1,"fill-opacity":1}),x.fill=c,x.opacity=1,x.fillOpacity=1,1},y=function(){var t=document.documentMode;return t&&(9===t||10===t)},m=function(t){if(y())return"url('#"+t+"')";var e=document.location,r=e.protocol+"//"+e.host+e.pathname+e.search;return"url('"+r+"#"+t+"')"},b=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},_=function(i,n,a){if("path"==i.type){for(var s=r(n).toLowerCase().split("-"),o=i.paper,l=a?"end":"start",h=i.node,u=i.attrs,f=u["stroke-width"],p=s.length,x="classic",y,m,b,_,w,k=3,B=3,C=5;p--;)switch(s[p]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":x=s[p];break;case"wide":B=5;break;case"narrow":B=2;break;case"long":k=5;break;case"short":k=2}if("open"==x?(k+=2,B+=2,C+=2,b=1,_=a?4:1,w={fill:"none",stroke:u.stroke}):(_=b=k/2,w={fill:u.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=x){var S="raphael-marker-"+x,A="raphael-marker-"+l+x+k+B+"-obj"+i.id;t._g.doc.getElementById(S)?g[S]++:(o.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:d[x],id:S})),g[S]=1);var T=t._g.doc.getElementById(A),E;T?(g[A]++,E=T.getElementsByTagName("use")[0]):(T=v(v("marker"),{id:A,markerHeight:B,markerWidth:k,orient:"auto",refX:_,refY:B/2}),E=v(v("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+B/2+") ":c)+"scale("+k/C+","+B/C+")","stroke-width":(1/((k/C+B/C)/2)).toFixed(4)}),T.appendChild(E),o.defs.appendChild(T),g[A]=1),v(E,w);var M=b*("diamond"!=x&&"oval"!=x);a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-M*f):(y=M*f,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),w={},w["marker-"+l]="url(#"+A+")",(m||y)&&(w.d=t.getSubpath(u.path,y,m)),v(h,w),i._.arrows[l+"Path"]=S,i._.arrows[l+"Marker"]=A,i._.arrows[l+"dx"]=M,i._.arrows[l+"Type"]=x,i._.arrows[l+"String"]=n}else a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-y):(y=0,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),i._.arrows[l+"Path"]&&v(h,{d:t.getSubpath(u.path,y,m)}),delete i._.arrows[l+"Path"],delete i._.arrows[l+"Marker"],delete i._.arrows[l+"dx"],delete i._.arrows[l+"Type"],delete i._.arrows[l+"String"];for(w in g)if(g[e](w)&&!g[w]){var N=t._g.doc.getElementById(w);N&&N.parentNode.removeChild(N)}}},w={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},k=function(t,e,i){if(e=w[r(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a;v(t.node,{"stroke-dasharray":s.join(",")})}else v(t.node,{"stroke-dasharray":"none"})},B=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var y=l.getElementsByTagName("title");if(y.length&&(y=y[0]))y.firstChild.nodeValue=g;else{y=v("title");var m=t._g.doc.createTextNode(g);y.appendChild(m),l.appendChild(y)}break;case"href":case"target":var w=l.parentNode;if("a"!=w.tagName.toLowerCase()){var B=v("a");w.insertBefore(B,l),B.appendChild(l),w=B}"target"==d?w.setAttributeNS(p,"show","blank"==g?"new":g):w.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":_(i,g);break;case"arrow-end":_(i,g,1);break;case"clip-rect":var C=r(g).split(h);if(4==C.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var A=v("clipPath"),T=v("rect");A.id=t.createUUID(),v(T,{x:C[0],y:C[1],width:C[2],height:C[3]}),A.appendChild(T),i.paper.defs.appendChild(A),v(l,{"clip-path":"url(#"+A.id+")"}),i.clip=T}if(!g){var E=l.getAttribute("clip-path");if(E){var M=t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g,c));M&&M.parentNode.removeChild(M),v(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(v(l,{d:g?u.path=t._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"r":"rect"==i.type?v(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":1==i._.sx&&1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u["stroke-dasharray"]&&k(i,u["stroke-dasharray"],a),
i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"stroke-dasharray":k(i,g,a);break;case"fill":var N=r(g).match(t._ISURL);if(N){A=v("pattern");var L=v("image");A.id=t.createUUID(),v(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(L,{x:0,y:0,"xlink:href":N[1]}),A.appendChild(L),function(e){t._preload(N[1],function(){var t=this.offsetWidth,r=this.offsetHeight;v(e,{width:t,height:r}),v(L,{width:t,height:r})})}(A),i.paper.defs.appendChild(A),v(l,{fill:"url(#"+A.id+")"}),i.pattern=A,i.pattern&&b(i);break}var z=t.getRGB(g);if(z.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g)){if("opacity"in u||"fill-opacity"in u){var P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(P){var F=P.getElementsByTagName("stop");v(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,"undefined")&&t.is(a.opacity,"undefined")&&v(l,{opacity:u.opacity}),!t.is(u["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&v(l,{"fill-opacity":u["fill-opacity"]});z[e]("opacity")&&v(l,{"fill-opacity":z.opacity>1?z.opacity/100:z.opacity});case"stroke":z=t.getRGB(g),l.setAttribute(d,z.hex),"stroke"==d&&z[e]("opacity")&&v(l,{"stroke-opacity":z.opacity>1?z.opacity/100:z.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g);break;case"opacity":u.gradient&&!u[e]("stroke-opacity")&&v(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),P&&(F=P.getElementsByTagName("stop"),v(F[F.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}S(i,a),l.style.visibility=f},C=1.2,S=function(i,a){if("text"==i.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h=r(a.text).split("\n"),u=[],f,p=0,d=h.length;p<d;p++)f=v("tspan"),p&&v(f,{dy:l*C,x:s.x}),f.appendChild(t._g.doc.createTextNode(h[p])),o.appendChild(f),u[p]=f}else for(u=o.getElementsByTagName("tspan"),p=0,d=u.length;p<d;p++)p?v(u[p],{dy:l*C,x:s.x}):v(u[0],{dy:0});v(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),x=s.y-(g.y+g.height/2);x&&t.is(x,"finite")&&v(u[0],{dy:x})}},A=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},T=function(e,r){function i(){return("0000"+(Math.random()*Math.pow(36,5)<<0).toString(36)).slice(-5)}var n=0,a=0;this[0]=this.node=e,e.raphael=!0,this.id=i(),e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},E=t.el;T.prototype=E,E.constructor=T,t._engine.path=function(t,e){var r=v("path");e.canvas&&e.canvas.appendChild(r);var i=new T(r,e);return i.type="path",B(i,{fill:"none",stroke:"#000",path:t}),i},E.rotate=function(t,e,n){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},E.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this},E.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},E.transform=function(r){var i=this._;if(null==r)return i.transform;if(t._extractTransform(this,r),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&b(this),this.node&&v(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},E.hide=function(){return this.removed||(this.node.style.display="none"),this},E.show=function(){return this.removed||(this.node.style.display=""),this},E.remove=function(){var e=A(this.node);if(!this.removed&&e.parentNode){var r=this.paper;r.__set__&&r.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&r.defs.removeChild(this.gradient),t._tear(this,r),e.parentNode.removeChild(e),this.removeData();for(var i in this)this[i]="function"==typeof this[i]?t._removedFactory(i):null;this.removed=!0}},E._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e=!1,r;this.paper.canvas.parentElement?r=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(r=this.paper.canvas.parentNode.style),r&&"none"==r.display&&(e=!0,r.display="");var i={};try{i=this.node.getBBox()}catch(n){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},e&&(r.display="none")}return t&&this.hide(),i},E.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l]);return o}if(null!=i){var f={};f[r]=i}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[e](g)&&(f[g]=d[g])}return B(this,f),this},E.toFront=function(){if(this.removed)return this;var e=A(this.node);e.parentNode.appendChild(e);var r=this.paper;return r.top!=this&&t._tofront(this,r),this},E.toBack=function(){if(this.removed)return this;var e=A(this.node),r=e.parentNode;r.insertBefore(e,r.firstChild),t._toback(this,this.paper);var i=this.paper;return this},E.insertAfter=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[e.length-1].node);return i.nextSibling?i.parentNode.insertBefore(r,i.nextSibling):i.parentNode.appendChild(r),t._insertafter(this,e,this.paper),this},E.insertBefore=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[0].node);return i.parentNode.insertBefore(r,i),t._insertbefore(this,e,this.paper),this},E.blur=function(e){var r=this;if(0!==+e){var i=v("filter"),n=v("feGaussianBlur");r.attrs.blur=e,i.id=t.createUUID(),v(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,v(r.node,{filter:"url(#"+i.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter");return r},t._engine.circle=function(t,e,r,i){var n=v("circle");t.canvas&&t.canvas.appendChild(n);var a=new T(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",v(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=v("rect");t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",v(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=v("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new T(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",v(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=v("image");v(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,i,n){var a=v("text");e.canvas&&e.canvas.appendChild(a);var s=new T(a,e);return s.attrs={x:r,y:i,"text-anchor":"middle",text:n,"font-family":t._availableAttrs["font-family"],"font-size":t._availableAttrs["font-size"],stroke:"none",fill:"#000"},s.type="text",B(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container,i=e.x,n=e.y,a=e.width,s=e.height;if(!r)throw new Error("SVG container not found.");var o=v("svg"),l="overflow:hidden;",h;return i=i||0,n=n||0,a=a||512,s=s||342,v(o,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==r?(o.style.cssText=l+"position:absolute;left:"+i+"px;top:"+n+"px",t._g.doc.body.appendChild(o),h=1):(o.style.cssText=l+"position:relative",r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o)),r=new t._Paper,r.width=a,r.height=s,r.canvas=o,r.clear(),r._left=r._top=0,h&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a=this.getSize(),o=s(r/a.width,i/a.height),l=this.top,h=n?"xMidYMid meet":"xMinYMin",c,p;for(null==t?(this._vbSize&&(o=1),delete this._vbSize,c="0 0 "+this.width+f+this.height):(this._vbSize=o,c=t+f+e+f+r+f+i),v(this.canvas,{viewBox:c,preserveAspectRatio:h});o&&l;)p="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":p}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t=this.canvas,e=t.style,r;try{r=t.getScreenCTM()||t.createSVGMatrix()}catch(i){r=t.createSVGMatrix()}var n=-r.e%1,a=-r.f%1;(n||a)&&(n&&(this._left=(this._left+n)%1,e.left=this._left+"px"),a&&(this._top=(this._top+a)%1,e.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=v("defs"))},t.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var M=t.st;for(var N in E)E[e](N)&&!M[e](N)&&(M[N]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(N))}}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.vml){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=t.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},v=/([clmz]),?([^clmz]*)/gi,x=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(v,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o=n(e),l,h;s=[];for(var u=0,c=o.length;u<c;u++){l=o[u],h=o[u][0].toLowerCase(),"z"==h&&(h="x");for(var f=1,x=l.length;f<x;f++)h+=a(l[f]*b)+(f!=x-1?",":d);s.push(h)}return s.join(p)},B=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},C=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",v,x=b/e,y=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(x)+p+l(y),f.rotation=a*(e*r<0?-1:1),a){var m=B(a,i,n);i=m.dx,n=m.dy}if(e<0&&(g+="x"),r<0&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-y,u||s.fillsize){var _=c.getElementsByTagName(h);_=_&&_[0],c.removeChild(_),u&&(m=B(a,o.x(u[0],u[1]),o.y(u[0],u[1])),_.position=m.dx*d+p+m.dy*d),s.fillsize&&(_.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(_)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},A=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,v,x=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),y=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),m=n;for(var B in l)l[e](B)&&(f[B]=l[B]);if(x&&(f.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||x)&&(c.path=k(~r(f.path).toLowerCase().indexOf("r")?t._pathToAbsolute(f.path):f.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],C(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),y){var A=+f.cx,E=+f.cy,M=+f.rx||+f.r||0,L=+f.ry||+f.r||0;c.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((A-M)*b),a((E-L)*b),a((A+M)*b),a((E+L)*b),a(A*b)),n._.dirty=1}if("clip-rect"in l){var z=r(l["clip-rect"]).split(u);if(4==z.length){z[2]=+z[2]+ +z[0],z[3]=+z[3]+ +z[1];var P=c.clipRect||t._g.doc.createElement("div"),F=P.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",z),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(P,c),P.appendChild(c),c.clipRect=P)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&S(m,l["arrow-start"]),"arrow-end"in l&&S(m,l["arrow-end"],1),null!=l.opacity||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var j=c.getElementsByTagName(h),I=!1;if(j=j&&j[0],!j&&(I=j=N(h)),"image"==n.type&&l.src&&(j.src=l.src),l.fill&&(j.on=!0),null!=j.on&&"none"!=l.fill&&null!==l.fill||(j.on=!1),j.on&&l.fill){var q=r(l.fill).match(t._ISURL);if(q){j.parentNode==c&&c.removeChild(j),j.rotate=!0,j.src=q[1],j.type="tile";var D=n.getBBox(1);j.position=D.x+p+D.y,n._.fillpos=[D.x,D.y],t._preload(q[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else j.color=t.getRGB(l.fill).hex,j.src=d,j.type="solid",t.getRGB(l.fill).error&&(m.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&T(m,l.fill,j)&&(f.fill="none",f.gradient=l.fill,j.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var V=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);V=o(s(V,0),1),j.opacity=V,j.src&&(j.color="none")}c.appendChild(j);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],Y=!1;!O&&(Y=O=N("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var W=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=W.hex),V=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+W.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(V=o(s(V,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&G<1&&(V*=G)&&(O.weight=1),O.opacity=V,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var H={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=H[e](l["stroke-dasharray"])?H[l["stroke-dasharray"]]:d}Y&&c.appendChild(O)}if("text"==m.type){m.paper.canvas.style.display=d;var X=m.paper.span,U=100,$=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),$=i(f["font-size"]||$&&$[0])||10,g.fontSize=$*U+"px",m.textpath.string&&(X.innerHTML=r(m.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var Z=X.getBoundingClientRect();m.W=f.w=(Z.right-Z.left)/U,m.H=f.h=(Z.bottom-Z.top)/U,m.X=f.x,m.Y=f.y+m.H/2,("x"in l||"y"in l)&&(m.path.v=t.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Q=["x","y","text","font","font-family","font-weight","font-style","font-size"],J=0,K=Q.length;J<K;J++)if(Q[J]in l){m._.dirty=1;break}switch(f["text-anchor"]){case"start":m.textpath.style["v-text-align"]="left",m.bbx=m.W/2;break;case"end":m.textpath.style["v-text-align"]="right",m.bbx=-m.W/2;break;default:m.textpath.style["v-text-align"]="center",m.bbx=0}m.textpath.style["v-text-kern"]=!0}},T=function(e,a,s){e.attrs=e.attrs||{};var o=e.attrs,l=Math.pow,h,u,c="linear",f=".5 .5";if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return c="radial",e&&r&&(e=i(e),r=i(r),l(e-.5,2)+l(r-.5,2)>.25&&(r=n.sqrt(.25-l(e-.5,2))*(2*(r>.5)-1)+.5),f=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==c){var g=a.shift();if(g=-i(g),isNaN(g))return null}var v=t._parseDots(a);if(!v)return null;if(e=e.shape||e.node,v.length){e.removeChild(s),s.on=!0,s.method="none",s.color=v[0].color,s.color2=v[v.length-1].color;for(var x=[],y=0,m=v.length;y<m;y++)v[y].offset&&x.push(v[y].offset+p+v[y].color);s.colors=x.length?x.join():"0% "+s.color,"radial"==c?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=f,s.angle=0):(s.type="gradient",s.angle=(270-g)%360),e.appendChild(s)}return 1},E=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},M=t.el;E.prototype=M,M.constructor=E,M.transform=function(e){if(null==e)return this._.transform;var i=this.paper._viewBoxShift,n=i?"s"+[i.scale,i.scale]+"-1-1t"+[i.dx,i.dy]:d,a;i&&(a=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,n+e);var s=this.matrix.clone(),o=this.skew,l=this.node,h,u=~r(this.attrs.fill).indexOf("-"),c=!r(this.attrs.fill).indexOf("url(");if(s.translate(1,1),c||u||"image"==this.type)if(o.matrix="1 0 0 1",o.offset="0 0",h=s.split(),u&&h.noRotation||!h.isSimple){l.style.filter=s.toFilter();var f=this.getBBox(),g=this.getBBox(1),v=f.x-g.x,x=f.y-g.y;l.coordorigin=v*-b+p+x*-b,C(this,1,1,v,x,0)}else l.style.filter=d,C(this,h.scalex,h.scaley,h.dx,h.dy,h.rotate);else l.style.filter=d,o.matrix=r(s),o.offset=s.offset();return null!==a&&(this._.transform=a,t._extractTransform(this,a)),this},M.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},M.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},M.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},M.hide=function(){return!this.removed&&(this.node.style.display="none"),this},M.show=function(){return!this.removed&&(this.node.style.display=d),this},M.auxGetBBox=t.el.getBBox,M.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},M._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},M.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},M.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(u),o={},l=0,f=s.length;l<f;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,f=r.length;l<f;l++)o[r[l]]=this.attr(r[l]);return o}var p;null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var v in g)g[e](v)&&(p[v]=g[v])}p.text&&"text"==this.type&&(this.textpath.string=p.text),A(this,p)}return this},M.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},M.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},M.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},M.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},M.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;return i=i.replace(x,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+f+".Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var r=N("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new E(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,A(i,n),e.canvas&&e.canvas.appendChild(r);var a=N("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path(),s=a.attrs;return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",A(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path(),a=n.attrs;return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",A(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=r,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),C(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=N("shape"),l=N("path"),h=N("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new E(o,e),c={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,A(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var f=N("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var s=this.getSize(),o=s.width,l=s.height,h,u;return a&&(h=l/n,u=o/i,i*h<o&&(e-=(o-i*h)/2/h),n*u<l&&(r-=(l-n*u)/2/u)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:s},this.forEach(function(t){t.transform("...")}),this};var N;t._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),N=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){N=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n,a=e.width,s=e.x,o=e.y;if(!r)throw new Error("VML container not found.");var l=new t._Paper,h=l.canvas=t._g.doc.createElement("div"),u=h.style;return s=s||0,o=o||0,a=a||512,i=i||342,l.width=a,l.height=i,a==+a&&(a+="px"),i==+i&&(i+="px"),l.coordsize=1e3*b+p+1e3*b,l.coordorigin="0 0",l.span=t._g.doc.createElement("span"),l.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",h.appendChild(l.span),u.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",a,i),1==r?(t._g.doc.body.appendChild(h),u.left=s+"px",u.top=o+"px",u.position="absolute"):r.firstChild?r.insertBefore(h,r.firstChild):r.appendChild(h),l.renderfix=function(){},l},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var L=t.st;for(var z in M)M[e](z)&&!L[e](z)&&(L[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}.apply(e,i),!(void 0!==n&&(t.exports=n))}])});
0

const Scramble = {
  generate: type => {
    const scrambleRandom = scramblers[type].getRandomScramble()

    Scramble.draw(type, 'draw' + type, scrambleRandom)
    Scramble.inner('scramble' + type, scrambleRandom)
  },

  draw: (type, id, scramble) => {
    const div = document.createElement('div')
    div.setAttribute('id', id)
    document.getElementById('randomScramble').appendChild(div)

    document.getElementById(id).innerHTML = ''

    scramblers[type].drawScramble(id, scramble.state, 250, 150)
  },

  inner: (id, scramble) => {
    const div = document.createElement('div')
    div.setAttribute('id', id)
    div.setAttribute('class', 'scramble')

    document.getElementById('randomScramble').appendChild(div)

    document.getElementById(id).innerHTML = scramble.scramble_string
  }
}

// const Time = {
//   save: (minute, sencond, centi) => {
//      minute + ':' + second + '.' + centi
//   },
//
//   storage: () => {
//     localStorage[type] = Time.all()
//   }
// }

//   const saveTime = () => {
//     document.getElementById('time_1').innerHTML = ''
//     for (var i = localStorage.length; i > localStorage.length - 5; i--) {
//       if (localStorage["Time_" + i]) {
//         document.getElementById('time_1').innerHTML += '<li>' + localStorage["Time_" + i] + '</li>'
//       } else {
//         document.getElementById('time_1').innerHTML += '<li>00:00.00</li>'
//       }
//     }
//
//     document.getElementById('time_2').innerHTML = ''
//     for (var i = localStorage.length - 5; i > localStorage.length - 10; i--) {
//       if (localStorage["Time_" + i]) {
//         document.getElementById('time_2').innerHTML += '<li>' + localStorage["Time_" + i] + '</li>'
//       } else {
//         document.getElementById('time_2').innerHTML += '<li>00:00.00</li>'
//       }
//     }
//
//     document.getElementById('time_3').innerHTML = ''
//     for (var i = localStorage.length - 10; i > localStorage.length - 15; i--) {
//       if (localStorage["Time_" + i]) {
//         document.getElementById('time_3').innerHTML += '<li>' + localStorage["Time_" + i] + '</li>'
//       } else {
//         document.getElementById('time_3').innerHTML += '<li>00:00.00</li>'
//       }
//     }
//
//     document.getElementById('time_4').innerHTML = ''
//     for (var i = localStorage.length - 15; i > localStorage.length - 20; i--) {
//       if (localStorage["Time_" + i]) {
//         document.getElementById('time_4').innerHTML += '<li>' + localStorage["Time_" + i] + '</li>'
//       } else {
//         document.getElementById('time_4').innerHTML += '<li>00:00.00</li>'
//       }
//     }
//   }
//
//   const random = () => {
//     const scramble = scramblers["333"].getRandomScramble()
//     document.getElementById('random').innerHTML = scramble.scramble_string
//     document.getElementById('cube').innerHTML = ''
//     scramblers["333"].drawScramble(document.getElementById('cube'), scramble.state, 200, 100)
//   }
//
//   const avg = () => {
//
//   }
//
//   avg()
//   saveTime()
//   random()
//
//   document.body.onkeyup = key => {
//     //Space
//     if (key.keyCode == 32) {
//       if (!Timer.state) Timer.start()
//       else Timer.stop()
//     }
//
//     //R
//     if (key.keyCode == 82) {
//       if (!Timer.state) {
//         Timer.reset()
//         saveTime()
//         avg()
//         random()
//       }
//     }
//   }
// }

const Timer = {
  time: {
    centi: 0,
    second: 0,
    minute: 0
  },

  start: () => {
    Timer.state = true

    Timer.interval = setInterval(() => {
      Timer.time.centi++

      if (Timer.time.centi > 99) {
        Timer.time.centi=0
        Timer.time.second++
      }

      if (Timer.time.second > 59){
        Timer.time.second=0
        Timer.time.minute++
      }

      const mm = padLeft(Timer.time.minute)
      const ss = padLeft(Timer.time.second)
      const cc = padLeft(Timer.time.centi)

      document.getElementById('timer').innerHTML = mm + ':' + ss + '.' + cc
    }, 10)
  },

  stop: () => {
    Timer.state = false

    clearInterval(Timer.interval)
  },

  reset: () => {
    Timer.time.centi = 0
    Timer.time.second = 0
    Timer.time.minute = 0

    const mm = padLeft(Timer.time.minute)
    const ss = padLeft(Timer.time.second)
    const cc = padLeft(Timer.time.centi)

    document.getElementById('timer').innerHTML = mm + ':' + ss + '.' + cc
  },
}

/*

scramble_222.js

2x2x2 Solver / Scramble Generator in Javascript.

Code taken from the official WCA scrambler.
Ported by Lucas Garron, November 23, 2011.

 */

"use strict";
if (typeof scramblers === "undefined") {
  var scramblers = {};
  scramblers.lib = {
    // https://github.com/lgarron/randomInt.js
    randomInt: function(){function n(){var n="WARNING: randomInt is falling back to Math.random for random number generation.";console.warn?console.warn(n):console.log(n),e=!0}function o(n){if("number"!=typeof n||0>n||Math.floor(n)!==n)throw new Error("randomInt.below() not called with a positive integer value.");if(n>9007199254740992)throw new Error("Called randomInt.below() with max == "+n+", which is larger than Javascript can handle with integer precision.")}function r(n){o(n);var e=a(),i=Math.floor(t/n)*n;return i>e?e%n:r(n)}var a,t=9007199254740992,e=!1,i=window.crypto||window.msCrypto||window.cryptoUint32;if(i)a=function(){var n=2097152,o=new Uint32Array(2);return i.getRandomValues(o),o[0]*n+(o[1]>>21)};else{var l="ERROR: randomInt could not find a suitable crypto.getRandomValues() function.";console.error?console.error(l):console.log(l),a=function(){if(e)return Math.floor(Math.random()*t);throw new Error("randomInt cannot get random values.")}}return{below:r,enableInsecureMathRandomFallback:n}}()
  }
}

scramblers["222"] = (function() {

  var posit = new Array ();
  function initbrd(){
    posit = new Array (
                  1,1,1,1,
                  2,2,2,2,
                  5,5,5,5,
                  4,4,4,4,
                  3,3,3,3,
                  0,0,0,0);
  }
  initbrd();
  var seq = new Array();
  function solved(){
      for (var i=0;i<24; i+=4){
          c=posit[i];
          for(var j=1;j<4;j++)
              if(posit[i+j]!=c) return(false);
      }
      return(true);
  }

  // ----[ This function is replaced by mix2() ]------
  /*
  function mix(){
      initbrd();
      for(var i=0;i<500;i++){
          var f=Math.floor(scramblers.lib.randomInt.below(3)+3) + 16*Math.floor(randomSource.random()*3);
          domove(f);
      }
  }
  */

  // Alternative mixing function, based on generating a random-state (by Conrad Rider)
  function mix2(){
    // Fixed cubie
    var fixed = 6;
    // Generate random permutation
    var perm_src = [0, 1, 2, 3, 4, 5, 6, 7];
    var perm_sel = Array();
    for(var i = 0; i < 7; i++){
      var ch = scramblers.lib.randomInt.below(7 - i);
      ch = perm_src[ch] === fixed ? (ch + 1) % (8 - i) : ch;
      perm_sel[i >= fixed ? i + 1 : i] = perm_src[ch];
      perm_src[ch] = perm_src[7 - i];
    }
    perm_sel[fixed] = fixed;
    // Generate random orientation
    var total = 0;
    var ori_sel = Array();
    var i = fixed === 0 ? 1 : 0;
    for(; i < 7; i = i === fixed - 1 ? i + 2 : i + 1){
      ori_sel[i] = scramblers.lib.randomInt.below(3);
      total += ori_sel[i];
    }
    if(i <= 7) ori_sel[i] = (3 - (total % 3)) % 3;
    ori_sel[fixed] = 0;

    // Convert to face format
    // Mapping from permutation/orientation to facelet
    var D = 1, L = 2, B = 5, U = 4, R = 3, F = 0;
    // D 0 1 2 3  L 4 5 6 7  B 8 9 10 11  U 12 13 14 15  R 16 17 18 19  F 20 21 22 23
    // Map from permutation/orientation to face
    var fmap = [[ U,  R,  F],[ U,  B,  R],[ U,  L,  B],[ U,  F,  L],[ D,  F,  R],[D,  R,  B],[ D,  B,  L],[ D,  L,  F]];
    // Map from permutation/orientation to facelet identifier
    var pos  = [[15, 16, 21],[13,  9, 17],[12,  5,  8],[14, 20,  4],[ 3, 23, 18],[1, 19, 11],[ 0, 10,  7],[ 2,  6, 22]];
    // Convert cubie representation into facelet representaion
    for(var i = 0; i < 8; i++){
      for(var j = 0; j < 3; j++)
        posit[pos[i][(ori_sel[i] + j) % 3]] = fmap[perm_sel[i]][j];
    }
  }
  // ----- [End of alternative mixing function]--------------

  var piece=new Array(15,16,16,21,21,15,  13,9,9,17,17,13,  14,20,20,4,4,14,  12,5,5,8,8,12,
                          3,23,23,18,18,3,   1,19,19,11,11,1,  2,6,6,22,22,2,    0,10,10,7,7,0);
  var adj=new Array();
  adj[0]=new Array();
  adj[1]=new Array();
  adj[2]=new Array();
  adj[3]=new Array();
  adj[4]=new Array();
  adj[5]=new Array();
  var opp=new Array();
  var auto;
  var tot;
  function calcadj(){
      //count all adjacent pairs (clockwise around corners)
      var a,b;
      for(a=0;a<6;a++)for(b=0;b<6;b++) adj[a][b]=0;
      for(a=0;a<48;a+=2){
          if(posit[piece[a]]<=5 && posit[piece[a+1]]<=5 )
              adj[posit[piece[a]]][posit[piece[a+1]]]++;
      }
  }
  function calctot(){
      //count how many of each colour
      tot=new Array(0,0,0,0,0,0,0);
      for(var e=0;e<24;e++) tot[posit[e]]++;
  }
  var mov2fc=new Array()
  mov2fc[0]=new Array(0, 2, 3, 1, 23,19,10,6 ,22,18,11,7 ); //D
  mov2fc[1]=new Array(4, 6, 7, 5, 12,20,2, 10,14,22,0, 8 ); //L
  mov2fc[2]=new Array(8, 10,11,9, 12,7, 1, 17,13,5, 0, 19); //B
  mov2fc[3]=new Array(12,13,15,14,8, 17,21,4, 9, 16,20,5 ); //U
  mov2fc[4]=new Array(16,17,19,18,15,9, 1, 23,13,11,3, 21); //R
  mov2fc[5]=new Array(20,21,23,22,14,16,3, 6, 15,18,2, 4 ); //F
  function domove(y){
      var q=1+(y>>4);
      var f=y&15;
      while(q){
          for(var i=0;i<mov2fc[f].length;i+=4){
              var c=posit[mov2fc[f][i]];
              posit[mov2fc[f][i]]=posit[mov2fc[f][i+3]];
              posit[mov2fc[f][i+3]]=posit[mov2fc[f][i+2]];
              posit[mov2fc[f][i+2]]=posit[mov2fc[f][i+1]];
              posit[mov2fc[f][i+1]]=c;
          }
          q--;
      }
  }
  var sol=new Array();
  function solve(){
      calcadj();
      var opp=new Array();
      for(a=0;a<6;a++){
          for(b=0;b<6;b++){
              if(a!=b && adj[a][b]+adj[b][a]===0) { opp[a]=b; opp[b]=a; }
          }
      }
      //Each piece is determined by which of each pair of opposite colours it uses.
      var ps=new Array();
      var tws=new Array();
      var a=0;
      for(var d=0; d<7; d++){
          var p=0;
          for(b=a;b<a+6;b+=2){
              if(posit[piece[b]]===posit[piece[42]]) p+=4;
              if(posit[piece[b]]===posit[piece[44]]) p+=1;
              if(posit[piece[b]]===posit[piece[46]]) p+=2;
          }
          ps[d]=p;
          if(posit[piece[a]]===posit[piece[42]] || posit[piece[a]]===opp[posit[piece[42]]]) tws[d]=0;
          else if(posit[piece[a+2]]===posit[piece[42]] || posit[piece[a+2]]===opp[posit[piece[42]]]) tws[d]=1;
          else tws[d]=2;
          a+=6;
      }
      //convert position to numbers
      var q=0;
      for(var a=0;a<7;a++){
          var b=0;
          for(var c=0;c<7;c++){
              if(ps[c]===a)break;
              if(ps[c]>a)b++;
          }
          q=q*(7-a)+b;
      }
      var t=0;
      for(var a=5;a>=0;a--){
          t=t*3+tws[a]-3*Math.floor(tws[a]/3);
      }
      if(q!=0 || t!=0){
          sol.length=0;
          for(var l=seqlen;l<100;l++){
              if(search(0,q,t,l,-1)) break;
          }
          t="";
          for(q=0;q<sol.length;q++){
              t = "URF".charAt(sol[q]/10)+"\'2 ".charAt(sol[q]%10) + " " + t;
          }
          return t;
      }
  }
  function search(d,q,t,l,lm){
      //searches for solution, from position q|t, in l moves exactly. last move was lm, current depth=d
      if(l===0){
          if(q===0 && t===0){
              return(true);
          }
      }else{
          if(perm[q]>l || twst[t]>l) return(false);
          var p,s,a,m;
          for(m=0;m<3;m++){
              if(m!=lm){
                  p=q; s=t;
                  for(a=0;a<3;a++){
                      p=permmv[p][m];
                      s=twstmv[s][m];
                      sol[d]=10*m+a;
                      if(search(d+1,p,s,l-1,m)) return(true);
                  }
              }
          }
      }
      return(false);
  }
  var perm=new Array();
  var twst=new Array();
  var permmv=new Array()
  var twstmv=new Array();
  function calcperm(){
      //calculate solving arrays
      //first permutation

      for(var p=0;p<5040;p++){
          perm[p]=-1;
          permmv[p]=new Array();
          for(var m=0;m<3;m++){
              permmv[p][m]=getprmmv(p,m);
          }
      }

      perm[0]=0;
      for(var l=0;l<=6;l++){
          var n=0;
          for(var p=0;p<5040;p++){
              if(perm[p]===l){
                  for(var m=0;m<3;m++){
                      var q=p;
                      for(var c=0;c<3;c++){
                          var q=permmv[q][m];
                          if(perm[q]===-1) { perm[q]=l+1; n++; }
                      }
                  }
              }
          }
      }

      //then twist
      for(var p=0;p<729;p++){
          twst[p]=-1;
          twstmv[p]=new Array();
          for(var m=0;m<3;m++){
              twstmv[p][m]=gettwsmv(p,m);
          }
      }

      twst[0]=0;
      for(var l=0;l<=5;l++){
          var n=0;
          for(var p=0;p<729;p++){
              if(twst[p]===l){
                  for(var m=0;m<3;m++){
                      var q=p;
                      for(var c=0;c<3;c++){
                          var q=twstmv[q][m];
                          if(twst[q]===-1) { twst[q]=l+1; n++; }
                      }
                  }
              }
          }
      }
      //remove wait sign
  }
  function getprmmv(p,m){
      //given position p<5040 and move m<3, return new position number
      var a,b,c,q;
      //convert number into array;
      var ps=new Array()
      q=p;
      for(a=1;a<=7;a++){
          b=q%a;
          q=(q-b)/a;
          for(c=a-1;c>=b;c--) ps[c+1]=ps[c];
          ps[b]=7-a;
      }
      //perform move on array
      if(m===0){
          //U
          c=ps[0];ps[0]=ps[1];ps[1]=ps[3];ps[3]=ps[2];ps[2]=c;
      }else if(m===1){
          //R
          c=ps[0];ps[0]=ps[4];ps[4]=ps[5];ps[5]=ps[1];ps[1]=c;
      }else if(m===2){
          //F
          c=ps[0];ps[0]=ps[2];ps[2]=ps[6];ps[6]=ps[4];ps[4]=c;
      }
      //convert array back to number
      q=0;
      for(a=0;a<7;a++){
          b=0;
          for(c=0;c<7;c++){
              if(ps[c]===a)break;
              if(ps[c]>a)b++;
          }
          q=q*(7-a)+b;
      }
      return(q)
  }
  function gettwsmv(p,m){
      //given orientation p<729 and move m<3, return new orientation number
      var a,b,c,d,q;
      //convert number into array;
      var ps=new Array()
      q=p;
      d=0;
      for(a=0;a<=5;a++){
          c=Math.floor(q/3);
          b=q-3*c;
          q=c;
          ps[a]=b;
          d-=b;if(d<0)d+=3;
      }
      ps[6]=d;
      //perform move on array
      if(m===0){
          //U
          c=ps[0];ps[0]=ps[1];ps[1]=ps[3];ps[3]=ps[2];ps[2]=c;
      }else if(m===1){
          //R
          c=ps[0];ps[0]=ps[4];ps[4]=ps[5];ps[5]=ps[1];ps[1]=c;
          ps[0]+=2; ps[1]++; ps[5]+=2; ps[4]++;
      }else if(m===2){
          //F
          c=ps[0];ps[0]=ps[2];ps[2]=ps[6];ps[6]=ps[4];ps[4]=c;
          ps[2]+=2; ps[0]++; ps[4]+=2; ps[6]++;
      }
      //convert array back to number
      q=0;
      for(a=5;a>=0;a--){
          q=q*3+(ps[a]%3);
      }
      return(q);
  }

  // Default settings
  var size=2;
  var seqlen=0;
  var numcub=5;
  var mult=false;
  var cubeorient=false;
  var colorString = "yobwrg";  //In dlburf order. May use any colours in colorList below

  // list of available colours
  var colorList=new Array(
         'y', "yellow.jpg", "yellow",
         'b', "blue.jpg",   "blue",
         'r', "red.jpg",    "red",
         'w', "white.jpg",  "white",
         'g', "green.jpg",  "green",
         'o', "orange.jpg", "orange",
         'p', "purple.jpg", "purple",
         '0', "grey.jpg",   "grey"      // used for unrecognised letters, or when zero used.
  );

  var colors=new Array(); //stores colours used
  var seq=new Array();  // move sequences
  var posit = new Array();  // facelet array
  var flat2posit; //lookup table for drawing cube
  var colorPerm = new Array(); //dlburf face colour permutation for each cube orientation
  colorPerm[0] = new Array(5,0,1,4,3,2);

  // get all the form settings from the url parameters
  function parse() {

    /*
    var s="";
    var urlquery=location.href.split("?")
    if(urlquery.length>1){
      var urlterms=urlquery[1].split("&")
      for( var i=0; i<urlterms.length; i++){
        var urllr=urlterms[i].split("=");
        if(urllr[0]==="len") {
          if(urllr[1]-0 >= 1 ) seqlen=urllr[1]-0;
        } else if(urllr[0]==="num"){
          if(urllr[1]-0 >= 1 ) numcub=urllr[1]-0;
        } else if(urllr[0]==="col") {
          if(urllr[1].length===6) colorString = urllr[1];
        }
      }
    }
    */

    // expand colour string into 6 actual html color names
    for(var k=0; k<6; k++){
      colors[k]=colorList.length-3; // gray
      for( var i=0; i<colorList.length; i+=3 ){
        if( colorString.charAt(k)===colorList[i] ){
          colors[k]=i;
          break;
        }
      }
    }
  }

  // append set of moves along an axis to current sequence in order
  function appendmoves( sq, axsl, tl, la ){
    for( var sl=0; sl<tl; sl++){  // for each move type
      if( axsl[sl] ){       // if it occurs
        var q=axsl[sl]-1;

        // get semi-axis of this move
        var sa = la;
        var m = sl;
        if(sl+sl+1>=tl){ // if on rear half of this axis
          sa+=3; // get semi-axis (i.e. face of the move)
          m=tl-1-m; // slice number counting from that face
          q=2-q; // opposite direction when looking at that face
        }
        // store move
        sq[sq.length]=(m*6+sa)*4+q;
      }
    }
  }

  var initialized = false;

  // generate sequence of scambles
  function initialize(){

    if (!initialized) {
      var i, j;
      // build lookup table
      flat2posit=new Array(12*size*size);
      for(i=0; i<flat2posit.length; i++) flat2posit[i]=-1;
      for(i=0; i<size; i++){
        for(j=0; j<size; j++){
          flat2posit[4*size*(3*size-i-1)+  size+j  ]=        i *size+j; //D
          flat2posit[4*size*(  size+i  )+  size-j-1]=(  size+i)*size+j; //L
          flat2posit[4*size*(  size+i  )+4*size-j-1]=(2*size+i)*size+j; //B
          flat2posit[4*size*(       i  )+  size+j  ]=(3*size+i)*size+j; //U
          flat2posit[4*size*(  size+i  )+2*size+j  ]=(4*size+i)*size+j; //R
          flat2posit[4*size*(  size+i  )+  size+j  ]=(5*size+i)*size+j; //F
        }
      }
    }

  /*
         19                32
     16           48           35
         31   60      51   44
     28     80    63    67     47
                83  64
            92          79
                95  76

                   0
               12     3
                  15
  */
  }

  var cubeSize = 2;

  var border = 2;
  var width = 20;
  var gap = 4;

  function colorGet(col){
    if (col==="r") return ("#F94F2D");
    if (col==="o") return ("#FFA643");
    if (col==="b") return ("#43C4F3");
    if (col==="g") return ("#7AC78B");
    if (col==="y") return ("#FFED71");
    if (col==="w") return ("#FFFFFF");
    if (col==="x") return ("#000000");
  }

  var scalePoint = function(w, h, ptIn) {

    var defaultWidth = border*2+width*4*cubeSize+gap*3;
    var defaultHeight = border*2+width*3*cubeSize+gap*2;

    var scale = Math.min(w/defaultWidth, h/defaultHeight);

    var x = Math.floor(ptIn[0]*scale + (w - (defaultWidth * scale))/2) + 0.5;
    var y = Math.floor(ptIn[1]*scale + (h - (defaultHeight * scale))/2) + 0.5;

    return [x, y];
  }

  function drawSquare(r, canvasWidth, canvasHeight, cx, cy, w, fillColor) {

    var arrx = [cx - w, cx - w, cx + w, cx + w];
    var arry = [cy - w, cy + w, cy + w, cy - w];

    var pathString = "";
    for (var i = 0; i < arrx.length; i++) {
      var scaledPoint = scalePoint(canvasWidth, canvasHeight, [arrx[i], arry[i]]);
      pathString += ((i===0) ? "M" : "L") + scaledPoint[0] + "," + scaledPoint[1];
    }
    pathString += "z";

    r.path(pathString).attr({fill: colorGet(fillColor), stroke: "#000"})
  }

  var drawScramble = function(parentElement, state, w, h) {

    initializeDrawing();

    var colorString = "wrgoby"; // UFRLBD

    var r = Raphael(parentElement, w, h);

    var s="",i,f,d=0,q;
    var ori = 0;
    d=0;
    s="<table border=0 cellpadding=0 cellspacing=0>";
    for(i=0;i<3*size;i++){
      s+="<tr>";
      for(f=0;f<4*size;f++){
        if(flat2posit[d]<0){
          s+="<td><\/td>";
        }else{
          var c = colorPerm[ori][state[flat2posit[d]]];
          var col = colorList[colors[c]+0];
          drawSquare(r, w, h, border + width /2 + f*width + gap*Math.floor(f/2), border + width /2 + i*width + gap*Math.floor(i/2), width/2, col);
          //s+="<td style='background-color:"+colorList[colors[c]+2]+"'><img src='scrbg/"+colorList[colors[c]+1]+"' width=10 border=1 height=10><\/td>";
        }
        d++;
      }
      s+="<\/tr>";
    }
    s+="<\/table>";
    return(s);
  }

  function doslice(f,d,q){
    //do move of face f, layer d, q quarter turns
    var f1,f2,f3,f4;
    var s2=size*size;
    var c,i,j,k;
    if(f>5)f-=6;
    // cycle the side facelets
    for(k=0; k<q; k++){
      for(i=0; i<size; i++){
        if(f===0){
          f1=6*s2-size*d-size+i;
          f2=2*s2-size*d-1-i;
          f3=3*s2-size*d-1-i;
          f4=5*s2-size*d-size+i;
        }else if(f===1){
          f1=3*s2+d+size*i;
          f2=3*s2+d-size*(i+1);
          f3=  s2+d-size*(i+1);
          f4=5*s2+d+size*i;
        }else if(f===2){
          f1=3*s2+d*size+i;
          f2=4*s2+size-1-d+size*i;
          f3=  d*size+size-1-i;
          f4=2*s2-1-d-size*i;
        }else if(f===3){
          f1=4*s2+d*size+size-1-i;
          f2=2*s2+d*size+i;
          f3=  s2+d*size+i;
          f4=5*s2+d*size+size-1-i;
        }else if(f===4){
          f1=6*s2-1-d-size*i;
          f2=size-1-d+size*i;
          f3=2*s2+size-1-d+size*i;
          f4=4*s2-1-d-size*i;
        }else if(f===5){
          f1=4*s2-size-d*size+i;
          f2=2*s2-size+d-size*i;
          f3=s2-1-d*size-i;
          f4=4*s2+d+size*i;
        }
        c=posit[f1];
        posit[f1]=posit[f2];
        posit[f2]=posit[f3];
        posit[f3]=posit[f4];
        posit[f4]=c;
      }

      /* turn face */
      if(d===0){
        for(i=0; i+i<size; i++){
          for(j=0; j+j<size-1; j++){
            f1=f*s2+         i+         j*size;
            f3=f*s2+(size-1-i)+(size-1-j)*size;
            if(f<3){
              f2=f*s2+(size-1-j)+         i*size;
              f4=f*s2+         j+(size-1-i)*size;
            }else{
              f4=f*s2+(size-1-j)+         i*size;
              f2=f*s2+         j+(size-1-i)*size;
            }
            c=posit[f1];
            posit[f1]=posit[f2];
            posit[f2]=posit[f3];
            posit[f3]=posit[f4];
            posit[f4]=c;
          }
        }
      }
    }
  };

  /*
   * Some helper functions.
   */

  var getRandomScramble = function() {
    initializeFull();

    mix2();
    var solution = solve();

    return {
      state: posit,
      scramble_string: solution
    };
  };

  var drawingInitialized = false;

  var initializeDrawing = function(continuation) {

    if (!drawingInitialized) {

      calcperm();
      parse();
      initialize();

      drawingInitialized = true;
    }

    if (continuation) {
      setTimeout(continuation, 0);
    }
  };

  var initializeFull = function(continuation, _) {

    initializeDrawing();

    if (continuation) {
      setTimeout(continuation, 0);
    }
  };


  /* mark2 interface */
  return {
    version: "July 05, 2015",
    initialize: initializeFull,
    setRandomSource: function() {console.log("setRandomSource is deprecated. Iat hs no effect anymore.")},
    getRandomScramble: getRandomScramble,
    drawScramble: drawScramble,

    /* Other methods */
  };

})();

/*

scramble_333.js

3x3x3 Solver / Scramble Generator in Javascript.

The core 3x3x3 code is from a min2phase solver by Shuang Chen.
Compiled to Javascript using GWT.
(There may be a lot of redundant code right now, but it's still really fast.)

 */

"use strict";
if (typeof scramblers === "undefined") {
  var scramblers = {};
  scramblers.lib = {
    // https://github.com/lgarron/randomInt.js
    randomInt: function(){function n(){var n="WARNING: randomInt is falling back to Math.random for random number generation.";console.warn?console.warn(n):console.log(n),e=!0}function o(n){if("number"!=typeof n||0>n||Math.floor(n)!==n)throw new Error("randomInt.below() not called with a positive integer value.");if(n>9007199254740992)throw new Error("Called randomInt.below() with max == "+n+", which is larger than Javascript can handle with integer precision.")}function r(n){o(n);var e=a(),i=Math.floor(t/n)*n;return i>e?e%n:r(n)}var a,t=9007199254740992,e=!1,i=window.crypto||window.msCrypto||window.cryptoUint32;if(i)a=function(){var n=2097152,o=new Uint32Array(2);return i.getRandomValues(o),o[0]*n+(o[1]>>21)};else{var l="ERROR: randomInt could not find a suitable crypto.getRandomValues() function.";console.error?console.error(l):console.log(l),a=function(){if(e)return Math.floor(Math.random()*t);throw new Error("randomInt cannot get random values.")}}return{below:r,enableInsecureMathRandomFallback:n}}()
  }
}


scramblers["333"] = (function() {


var _;
function nullMethod(){
}

function createArray(length1, length2){
  var result, i;
  result = Array(length1);
  for (i=0; i<length1; result[i++]=Array(length2));
  return result;
}

function $clinit_CoordCube(){
  $clinit_CoordCube = nullMethod;
  UDSliceMove = createArray(495, 18);
  TwistMove = createArray(324, 18);
  FlipMove = createArray(336, 18);
  UDSliceConj = createArray(495, 8);
  UDSliceTwistPrun = Array(160380);
  UDSliceFlipPrun = Array(166320);
  TwistFlipPrun = Array(870912);
  Mid3Move = createArray(1320, 18);
  Mid32MPerm = Array(24);
  CParity = Array(346);
  CPermMove = createArray(2768, 18);
  EPermMove = createArray(2768, 10);
  MPermMove = createArray(24, 10);
  MPermConj = createArray(24, 16);
  MCPermPrun = Array(66432);
  MEPermPrun = Array(66432);
}

function initCParity(){
  var i;
  for (i=0; i<346; ++i) {
    CParity[i] = 0;
  }
  for (i = 0; i < 2768; ++i) {
    CParity[i >>> 3] = (CParity[i >>> 3] | get8Parity((CPermS2R)[i]) << (i & 7));
  }
}

function initCPermMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 2768; ++i) {
    set8Perm(c.cp, (CPermS2R)[i]);
    for (j = 0; j < 18; ++j) {
      CornMult(c, moveCube[j], d);
      CPermMove[i][j] = $getCPermSym(d);
    }
  }
}

function initEPermMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 2768; ++i) {
    set8Perm(c.ep, (EPermS2R)[i]);
    for (j = 0; j < 10; ++j) {
      EdgeMult(c, moveCube[ud2std[j]], d);
      EPermMove[i][j] = $getEPermSym(d);
    }
  }
}

function initFlipMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 336; ++i) {
    $setFlip(c, (FlipS2R)[i]);
    for (j = 0; j < 18; ++j) {
      EdgeMult(c, moveCube[j], d);
      FlipMove[i][j] = $getFlipSym(d);
    }
  }
}

function initMCEPermPrun(callback){
  var SymState, c, check, corn, cornx, d, depth, done, edge, edgex, i, idx, idxx, inv, j, m_0, mid, midx, select, sym, symx;
  c = new CubieCube_0;
  d = new CubieCube_0;
  depth = 0;
  done = 1;
  SymState = Array(2768);
  for (i = 0; i < 2768; ++i) {
    SymState[i] = 0;
    set8Perm(c.ep, (EPermS2R)[i]);
    for (j = 1; j < 16; ++j) {
      EdgeMult(CubeSym[SymInv[j]], c, temp_0);
      EdgeMult(temp_0, CubeSym[j], d);
      binarySearch(EPermS2R, get8Perm(d.ep)) != 65535 && (SymState[i] = (SymState[i] | 1 << j));
    }
  }
  for (i = 0; i < 66432; ++i) {
    MEPermPrun[i] = -1;
  }
  MEPermPrun[0] = 0;
  while (done < 66432) {
    inv = depth > 7;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 66432; ++i) {
      if (MEPermPrun[i] === select) {
        mid = i % 24;
        edge = ~~(i / 24);
        for (m_0 = 0; m_0 < 10; ++m_0) {
          edgex = EPermMove[edge][m_0];
          symx = edgex & 15;
          midx = MPermConj[MPermMove[mid][m_0]][symx];
          edgex >>>= 4;
          idx = edgex * 24 + midx;
          if (MEPermPrun[idx] === check) {
            ++done;
            if (inv) {
              MEPermPrun[i] = depth;
              break;
            }
             else {
              MEPermPrun[idx] = depth;
              sym = SymState[edgex];
              if (sym != 0) {
                for (j = 1; j < 16; ++j) {
                  sym = sym >> 1;
                  if ((sym & 1) === 1) {
                    idxx = edgex * 24 + MPermConj[midx][j];
                    if (MEPermPrun[idxx] === -1) {
                      MEPermPrun[idxx] = depth;
                      ++done;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if ((done / 66432.) > 0.01) {
      callback("MEPermPrun: " + (Math.floor(done * 100 / 66432)) +"% (" + done + "/66432)");
    }
  }
  for (i = 0; i < 66432; ++i) {
    MCPermPrun[i] = -1;
  }
  MCPermPrun[0] = 0;
  depth = 0;
  done = 1;
  while (done < 66432) {
    inv = depth > 7;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 66432; ++i) {
      if (MCPermPrun[i] === select) {
        mid = i % 24;
        corn = ~~(i / 24);
        for (m_0 = 0; m_0 < 10; ++m_0) {
          cornx = CPermMove[corn][ud2std[m_0]];
          symx = (cornx & 15);
          midx = MPermConj[MPermMove[mid][m_0]][symx];
          cornx = cornx >>> 4;
          idx = cornx * 24 + midx;
          if (MCPermPrun[idx] === check) {
            ++done;
            if (inv) {
              MCPermPrun[i] = depth;
              break;
            }
             else {
              MCPermPrun[idx] = depth;
              sym = SymState[cornx];
              if (sym != 0) {
                for (j = 1; j < 16; ++j) {
                  sym = sym >> 1;
                  if ((sym & 1) === 1) {
                    idxx = cornx * 24 + MPermConj[midx][j ^ (e2c)[j]];
                    if (MCPermPrun[idxx] === -1) {
                      MCPermPrun[idxx] = depth;
                      ++done;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if ((done / 66432.) > 0.01) {
      callback("MCPermPrun: " + (Math.floor(done * 100 / 66432)) +"% (" + done + "/66432)");
    }
  }
}

function initMPermConj(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 24; ++i) {
    $setMPerm(c, i);
    for (j = 0; j < 16; ++j) {
      EdgeConjugate(c, SymInv[j], d);
      MPermConj[i][j] = $getMPerm(d);
    }
  }
}

function initMPermMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 24; ++i) {
    $setMPerm(c, i);
    for (j = 0; j < 10; ++j) {
      EdgeMult(c, moveCube[ud2std[j]], d);
      MPermMove[i][j] = $getMPerm(d);
    }
  }
}

function initMid32MPerm(){
  var c, i;
  c = new CubieCube_0;
  for (i = 0; i < 24; ++i) {
    $setMPerm(c, i);
    Mid32MPerm[$getMid3(c) % 24] = i;
  }
}

function initMid3Move(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 1320; ++i) {
    $setMid3(c, i);
    for (j = 0; j < 18; ++j) {
      EdgeMult(c, moveCube[j], d);
      Mid3Move[i][j] = $getMid3(d);
    }
  }
}



function initTwistFlipSlicePrun(callback){
  var SymState, SymStateF, c, check, d, depth, done, flip, flipx, fsym, fsymx, fsymxx, i, idx, idxx, inv, j, k, m_0, select, slice, slicex, sym, symF, symx, tsymx, twist, twistx;
  SymState = Array(324);
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 324; ++i) {
    SymState[i] = 0;
    $setTwist(c, TwistS2R[i]);
    for (j = 0; j < 8; ++j) {
      CornMultSym(CubeSym[SymInv[j << 1]], c, temp_0);
      CornMultSym(temp_0, CubeSym[j << 1], d);
      binarySearch(TwistS2R, $getTwist(d)) != 65535 && (SymState[i] = SymState[i] | (1 << j));
    }
  }
  SymStateF = Array(336);
  for (i = 0; i < 336; ++i) {
    SymStateF[i] = 0;
    $setFlip(c, (FlipS2R)[i]);
    for (j = 0; j < 8; ++j) {
      EdgeMult(CubeSym[SymInv[j << 1]], c, temp_0);
      EdgeMult(temp_0, CubeSym[j << 1], d);
      binarySearch(FlipS2R, $getFlip(d)) != 65535 && (SymStateF[i] = SymStateF[i] | (1 << j));
    }
  }
  for (i = 0; i < 870912; ++i) {
    TwistFlipPrun[i] = -1;
  }
  for (i = 0; i < 8; ++i) {
    TwistFlipPrun[i] = 0;
  }
  depth = 0;
  done = 8;
  while (done < 870912) {
    inv = depth > 6;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 870912; ++i) {
      if (TwistFlipPrun[i] != select)
        continue;
      twist = ~~(i / 2688);
      flip = i % 2688;
      fsym = i & 7;
      flip >>>= 3;
      for (m_0 = 0; m_0 < 18; ++m_0) {
        twistx = TwistMove[twist][m_0];
        tsymx = twistx & 7;
        twistx >>>= 3;
        flipx = FlipMove[flip][Sym8Move[fsym][m_0]];
        fsymx = Sym8MultInv[Sym8Mult[flipx & 7][fsym]][tsymx];
        flipx >>>= 3;
        idx = twistx * 2688 + (flipx << 3 | fsymx);
        if (TwistFlipPrun[idx] === check) {
          ++done;
          if (inv) {
            TwistFlipPrun[i] = depth;
            break;
          }
           else {
            TwistFlipPrun[idx] = depth;
            sym = SymState[twistx];
            symF = SymStateF[flipx];
            if (sym != 1 || symF != 1) {
              for (j = 0; j < 8; ++j , symF = symF >> 1) {
                if ((symF & 1) === 1) {
                  fsymxx = Sym8MultInv[fsymx][j];
                  for (k = 0; k < 8; ++k) {
                    if ((sym & 1 << k) != 0) {
                      idxx = twistx * 2688 + (flipx << 3 | Sym8MultInv[fsymxx][k]);
                      if (TwistFlipPrun[idxx] === -1) {
                        TwistFlipPrun[idxx] = depth;
                        ++done;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if ((done / 870912.) > 0.01) {
      callback("TwistFlipPrun: " + (Math.floor(done * 100 / 870912)) +"% (" + done + "/870912)");
    }
  }
  for (i = 0; i < 160380; ++i) {
    UDSliceTwistPrun[i] = -1;
  }
  UDSliceTwistPrun[0] = 0;
  depth = 0;
  done = 1;
  while (done < 160380) {
    inv = depth > 6;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 160380; ++i) {
      if (UDSliceTwistPrun[i] === select) {
        slice = i % 495;
        twist = ~~(i / 495);
        for (m_0 = 0; m_0 < 18; ++m_0) {
          twistx = TwistMove[twist][m_0];
          symx = twistx & 7;
          slicex = UDSliceConj[UDSliceMove[slice][m_0]][symx];
          twistx >>>= 3;
          idx = twistx * 495 + slicex;
          if (UDSliceTwistPrun[idx] === check) {
            ++done;
            if (inv) {
              UDSliceTwistPrun[i] = depth;
              break;
            }
             else {
              UDSliceTwistPrun[idx] = depth;
              sym = SymState[twistx];
              if (sym != 1) {
                for (j = 1; j < 8; ++j) {
                  sym = sym >> 1;
                  if ((sym & 1) === 1) {
                    idxx = twistx * 495 + UDSliceConj[slicex][j];
                    if (UDSliceTwistPrun[idxx] === -1) {
                      UDSliceTwistPrun[idxx] = depth;
                      ++done;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if ((done / 160380.) > 0.01) {
      callback("UDSliceTwistPrun: " + (Math.floor(done * 100 / 160380)) +"% (" + done + "/160380)");
    }
  }
  for (i = 0; i < 166320; ++i) {
    UDSliceFlipPrun[i] = -1;
  }
  UDSliceFlipPrun[0] = 0;
  depth = 0;
  done = 1;
  while (done < 166320) {
    inv = depth > 6;
    select = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    for (i = 0; i < 166320; ++i) {
      if (UDSliceFlipPrun[i] === select) {
        slice = i % 495;
        flip = ~~(i / 495);
        for (m_0 = 0; m_0 < 18; ++m_0) {
          flipx = FlipMove[flip][m_0];
          symx = flipx & 7;
          slicex = UDSliceConj[UDSliceMove[slice][m_0]][symx];
          flipx >>>= 3;
          idx = flipx * 495 + slicex;
          if (UDSliceFlipPrun[idx] === check) {
            ++done;
            if (inv) {
              UDSliceFlipPrun[i] = depth;
              break;
            }
             else {
              UDSliceFlipPrun[idx] = depth;
              sym = SymStateF[flipx];
              if (sym != 1) {
                for (j = 1; j < 8; ++j) {
                  sym = sym >> 1;
                  if ((sym & 1) === 1) {
                    idxx = flipx * 495 + UDSliceConj[slicex][j];
                    if (UDSliceFlipPrun[idxx] === -1) {
                      UDSliceFlipPrun[idxx] = depth;
                      ++done;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if ((done / 166320.) > 0.01) {
      callback("UDSliceFlipPrun: " + (Math.floor(done * 100 / 166320)) +"% (" + done + "/166320)");
    }
  }
}

function initTwistMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 324; ++i) {
    $setTwist(c, TwistS2R[i]);
    for (j = 0; j < 18; ++j) {
      CornMult(c, moveCube[j], d);
      TwistMove[i][j] = $getTwistSym(d);
    }
  }
}

function initUDSliceConj(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 495; ++i) {
    $setUDSlice(c, i);
    for (j = 0; j < 16; j = j + 2) {
      EdgeConjugate(c, (SymInv)[j], d);
      UDSliceConj[i][j >>> 1] = $getUDSlice(d);
    }
  }
}

function initUDSliceMove(){
  var c, d, i, j;
  c = new CubieCube_0;
  d = new CubieCube_0;
  for (i = 0; i < 495; ++i) {
    $setUDSlice(c, i);
    for (j = 0; j < 18; ++j) {
      EdgeMult(c, moveCube[j], d);
      UDSliceMove[i][j] = $getUDSlice(d);
    }
  }
}

var CParity, CPermMove, EPermMove, FlipMove, MCPermPrun, MEPermPrun, MPermConj, MPermMove, Mid32MPerm, Mid3Move, TwistFlipPrun, TwistMove, UDSliceConj, UDSliceFlipPrun, UDSliceMove, UDSliceTwistPrun;
function $clinit_CubieCube(){
  $clinit_CubieCube = nullMethod;
  temp_0 = new CubieCube_0;
  CubeSym = Array(16);
  SymInv = Array(16);
  SymMult = createArray(16, 16);
  SymMove = createArray(16, 18);
  Sym8Mult = createArray(8, 8);
  Sym8Move = createArray(8, 18);
  Sym8MultInv = createArray(8, 8);
  SymMoveUD = createArray(16, 10);
  FlipS2R = Array(336);
  TwistS2R = Array(324);
  CPermS2R = Array(2768);
  EPermS2R = CPermS2R;
  MtoEPerm = Array(40320);
  merge = createArray(56, 56);
  e2c = [0, 0, 0, 0, 1, 3, 1, 3, 1, 3, 1, 3, 0, 0, 0, 0];
  urf1 = new CubieCube_2(2531, 1373, 67026819, 1877);
  urf2 = new CubieCube_2(2089, 1906, 322752913, 255);
  urfMove = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [6, 7, 8, 0, 1, 2, 3, 4, 5, 15, 16, 17, 9, 10, 11, 12, 13, 14], [3, 4, 5, 6, 7, 8, 0, 1, 2, 12, 13, 14, 15, 16, 17, 9, 10, 11], [2, 1, 0, 5, 4, 3, 8, 7, 6, 11, 10, 9, 14, 13, 12, 17, 16, 15], [8, 7, 6, 2, 1, 0, 5, 4, 3, 17, 16, 15, 11, 10, 9, 14, 13, 12], [5, 4, 3, 8, 7, 6, 2, 1, 0, 14, 13, 12, 17, 16, 15, 11, 10, 9]];
  initMove();
  initSym();
}

function $$init(obj){
  obj.cp = [0, 1, 2, 3, 4, 5, 6, 7];
  obj.co = [0, 0, 0, 0, 0, 0, 0, 0];
  obj.ep = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  obj.eo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function $copy(obj, c){
  var i;
  for (i = 0; i < 8; ++i) {
    obj.cp[i] = c.cp[i];
    obj.co[i] = c.co[i];
  }
  for (i = 0; i < 12; ++i) {
    obj.ep[i] = c.ep[i];
    obj.eo[i] = c.eo[i];
  }
}

function $getCPermSym(obj){
  var idx, k;
  if (EPermR2S != null) {
    idx = EPermR2S[get8Perm(obj.cp)];
    idx = (idx ^ e2c[idx & 15]);
    return idx;
  }
  for (k = 0; k < 16; ++k) {
    CornConjugate(obj, SymInv[k], obj.temps);
    idx = binarySearch(CPermS2R, get8Perm(obj.temps.cp));
    if (idx != 65535) {
      return (idx << 4 | k);
    }
  }
  return 0;
}

function $getDRtoDL(obj){
  var i, idxA, idxB, mask, r, t;
  idxA = 0;
  idxB = 0;
  mask = 0;
  r = 3;
  for (i = 11; i >= 0; --i) {
    if (4 <= obj.ep[i] && obj.ep[i] <= 6) {
      idxA = idxA + (Cnk)[i][r--];
      t = 1 << obj.ep[i];
      idxB = idxB + bitCount(mask & t - 1) * fact[2 - r];
      mask = (mask | t);
    }
  }
  return idxA * 6 + idxB;
}

function $getEPermSym(obj){
  var idx, k;
  if (EPermR2S != null) {
    return EPermR2S[get8Perm(obj.ep)];
  }
  for (k = 0; k < 16; ++k) {
    EdgeConjugate(obj, SymInv[k], obj.temps);
    idx = binarySearch(EPermS2R, get8Perm(obj.temps.ep));
    if (idx != 65535) {
      return (idx << 4 | k);
    }
  }
  return 0;
}

function $getEdgePerm(obj){
  var i, idx, m_0, t;
  m_0 = 1 << obj.ep[11];
  idx = 0;
  for (i = 10; i >= 0; --i) {
    t = 1 << obj.ep[i];
    idx += bitCount(m_0 & t - 1) * (fact)[11 - i];
    m_0 |= t;
  }
  return idx;
}

function $getFlip(obj){
  var i, idx;
  idx = 0;
  for (i = 0; i < 11; ++i) {
    idx = (idx | obj.eo[i] << i);
  }
  return idx;
}

function $getFlipSym(obj){
  var idx, k;
  if (FlipR2S != null) {
    return FlipR2S[$getFlip(obj)];
  }
  for (k = 0; k < 16; k = k + 2) {
    EdgeConjugate(obj, SymInv[k], obj.temps);
    idx = binarySearch(FlipS2R, $getFlip(obj.temps));
    if (idx != 65535) {
      return (idx << 3 | k >>> 1);
    }
  }
  return 0;
}

function $getMPerm(obj){
  var i, idx, m_0, t;
  m_0 = 1 << obj.ep[11];
  idx = 0;
  for (i = 10; i >= 8; --i) {
    t = 1 << obj.ep[i];
    idx += bitCount(m_0 & t - 1) * (fact)[11 - i];
    m_0 |= t;
  }
  return idx;
}

function $getMid3(obj){
  var i, idxA, idxB, mask, r, t;
  idxA = 0;
  idxB = 0;
  mask = 0;
  r = 3;
  for (i = 11; i >= 0; --i) {
    if (obj.ep[i] >= 9) {
      idxA = idxA + (Cnk)[i][r--];
      t = 1 << obj.ep[i];
      idxB = idxB + bitCount(mask & t - 1) * fact[2 - r];
      mask = (mask | t);
    }
  }
  return idxA * 6 + idxB;
}

function $getTwist(obj){
  var i, idx;
  idx = 0;
  for (i = 0; i < 7; ++i) {
    idx = idx * 3;
    idx = idx + obj.co[i];
  }
  return idx;
}

function $getTwistSym(obj){
  var idx, k;
  if (TwistR2S != null) {
    return TwistR2S[$getTwist(obj)];
  }
  for (k = 0; k < 16; k = k + 2) {
    CornConjugate(obj, SymInv[k], obj.temps);
    idx = $getTwist(obj.temps);
    idx = binarySearch(TwistS2R, idx);
    if (idx != 65535) {
      return (idx << 3 | k >>> 1);
    }
  }
  return 0;
}

function $getUDSlice(obj){
  var i, idx, r;
  idx = 0;
  r = 4;
  for (i = 0; i < 12; ++i) {
    obj.ep[i] >= 8 && (idx = idx + (Cnk)[11 - i][r--]);
  }
  return idx;
}

function $getURtoUL(obj){
  var i, idxA, idxB, mask, r, t;
  idxA = 0;
  idxB = 0;
  mask = 0;
  r = 3;
  for (i = 11; i >= 0; --i) {
    if (obj.ep[i] <= 2) {
      idxA = idxA + (Cnk)[i][r--];
      t = 1 << obj.ep[i];
      idxB = idxB + bitCount(mask & t - 1) * fact[2 - r];
      mask = (mask | t);
    }
  }
  return idxA * 6 + idxB;
}

function $invCubieCube(obj){
  var corn, edge, ori;
  for (edge = 0; edge < 12; ++edge)
    obj.temps.ep[obj.ep[edge]] = edge;
  for (edge = 0; edge < 12; ++edge)
    obj.temps.eo[edge] = obj.eo[obj.temps.ep[edge]];
  for (corn = 0; corn < 8; ++corn)
    obj.temps.cp[obj.cp[corn]] = corn;
  for (corn = 0; corn < 8; ++corn) {
    ori = obj.co[obj.temps.cp[corn]];
    obj.temps.co[corn] = -ori;
    obj.temps.co[corn] < 0 && (obj.temps.co[corn] = obj.temps.co[corn] + 3);
  }
  $copy(obj, obj.temps);
}

function $setEdgePerm(obj, idx){
  var i, j;
  obj.ep[11] = 0;
  for (i = 10; i >= 0; --i) {
    obj.ep[i] = idx % (12 - i);
    idx = ~~(idx / (12 - i));
    for (j = i + 1; j < 12; ++j) {
      obj.ep[j] >= obj.ep[i] && ++obj.ep[j];
    }
  }
}

function $setFlip(obj, idx){
  var i;
  obj.eo[11] = bitOdd(idx);
  for (i = 0; i < 11; ++i) {
    obj.eo[i] = (idx & 1);
    idx = idx >>> 1;
  }
}

function $setMPerm(obj, idx){
  var i, j;
  obj.ep[11] = 8;
  for (i = 10; i >= 8; --i) {
    obj.ep[i] = idx % (12 - i) + 8;
    idx = ~~(idx / (12 - i));
    for (j = i + 1; j < 12; ++j) {
      obj.ep[j] >= obj.ep[i] && ++obj.ep[j];
    }
  }
}

function $setMid3(obj, idxA){
  var edge, i, r;
  edge = (perm3)[idxA % 6];
  idxA = ~~(idxA / 6);
  r = 3;
  for (i = 11; i >= 0; --i) {
    if (idxA >= Cnk[i][r]) {
      idxA = idxA - Cnk[i][r--];
      obj.ep[i] = edge[2 - r];
    }
     else {
      obj.ep[i] = 8 - i + r;
    }
  }
}

function $setTwist(obj, idx){
  var i, twst;
  twst = 0;
  for (i = 6; i >= 0; --i) {
    twst = twst + (obj.co[i] = idx % 3);
    idx = ~~(idx / 3);
  }
  obj.co[7] = (15 - twst) % 3;
}

function $setUDSlice(obj, idx){
  var i, r;
  r = 4;
  for (i = 0; i < 12; ++i) {
    if (idx >= (Cnk)[11 - i][r]) {
      idx = idx - Cnk[11 - i][r--];
      obj.ep[i] = 11 - r;
    }
     else {
      obj.ep[i] = i + r - 4;
    }
  }
}

function $verify(obj){
  var c, cornMask, e, edgeMask, i, sum;
  sum = 0;
  edgeMask = 0;
  for (e = 0; e < 12; ++e)
    edgeMask = (edgeMask | 1 << obj.ep[e]);
  if (edgeMask != 4095)
    return -2;
  for (i = 0; i < 12; ++i)
    sum = sum ^ obj.eo[i];
  if (sum % 2 != 0)
    return -3;
  cornMask = 0;
  for (c = 0; c < 8; ++c)
    cornMask = (cornMask | 1 << obj.cp[c]);
  if (cornMask != 255)
    return -4;
  sum = 0;
  for (i = 0; i < 8; ++i)
    sum = sum + obj.co[i];
  if (sum % 3 != 0)
    return -5;
  if ((get12Parity($getEdgePerm(obj)) ^ get8Parity(get8Perm(obj.cp))) != 0)
    return -6;
  return 0;
}

function CornConjugate(a, idx, b){
  CornMultSym(CubeSym[SymInv[idx]], a, temp_0);
  CornMultSym(temp_0, CubeSym[idx], b);
}

function CornMult(a, b, prod){
  var corn;
  for (corn = 0; corn < 8; ++corn) {
    prod.cp[corn] = a.cp[b.cp[corn]];
    prod.co[corn] = (a.co[b.cp[corn]] + b.co[corn]) % 3;
  }
}

function CornMultSym(a, b, prod){
  var corn, ori, oriA, oriB;
  for (corn = 0; corn < 8; ++corn) {
    prod.cp[corn] = a.cp[b.cp[corn]];
    oriA = a.co[b.cp[corn]];
    oriB = b.co[corn];
    ori = oriA;
    ori = ori + (oriA < 3?oriB:3 - oriB);
    ori = ori % 3;
    oriA < 3 ^ oriB < 3 && (ori = ori + 3);
    prod.co[corn] = ori;
  }
}

function CubieCube_0(){
  $$init(this);
}

function CubieCube_1(cp, co, ep, eo){
  var i;
  $$init(this);
  for (i = 0; i < 8; ++i) {
    this.cp[i] = cp[i];
    this.co[i] = co[i];
  }
  for (i = 0; i < 12; ++i) {
    this.ep[i] = ep[i];
    this.eo[i] = eo[i];
  }
}

function CubieCube_2(cperm, twist, eperm, flip){
  $$init(this);
  set8Perm(this.cp, cperm);
  $setTwist(this, twist);
  $setEdgePerm(this, eperm);
  $setFlip(this, flip);
}

function CubieCube_3(c){
  CubieCube_1.call(this, c.cp, c.co, c.ep, c.eo);
}

function EdgeConjugate(a, idx, b){
  EdgeMult(CubeSym[SymInv[idx]], a, temp_0);
  EdgeMult(temp_0, CubeSym[idx], b);
}

function EdgeMult(a, b, prod){
  var ed;
  for (ed = 0; ed < 12; ++ed) {
    prod.ep[ed] = a.ep[b.ep[ed]];
    prod.eo[ed] = (b.eo[ed] ^ a.eo[b.ep[ed]]);
  }
}

function get8Perm(arr){
  var i, idx, v, val;
  idx = 0;
  val = 1985229328;
  for (i = 0; i < 7; ++i) {
    v = arr[i] << 2;
    idx = (8 - i) * idx + (val >> v & 7);
    val -= 286331152 << v;
  }
  return idx;
}

function initMove(){
  var m_0, mc, p;
  mc = Array(18);
  moveCube = [new CubieCube_2(15120, 0, 119750400, 0), new CubieCube_2(21021, 1494, 323403417, 0), new CubieCube_2(8064, 1236, 29441808, 802), new CubieCube_2(9, 0, 5880, 0), new CubieCube_2(1230, 412, 2949660, 0), new CubieCube_2(224, 137, 328552, 1160)];
  for (m_0 = 0; m_0 < 6; ++m_0) {
    mc[m_0 * 3] = moveCube[m_0];
    for (p = 0; p < 2; ++p) {
      mc[m_0 * 3 + p + 1] = new CubieCube_0;
      EdgeMult(mc[m_0 * 3 + p], moveCube[m_0], mc[m_0 * 3 + p + 1]);
      CornMult(mc[m_0 * 3 + p], moveCube[m_0], mc[m_0 * 3 + p + 1]);
    }
  }
  moveCube = mc;
}

function initSym(){
  var c, d, f2, i, j, k, lr2, m_0, s, temp, u4;
  c = new CubieCube_0;
  d = new CubieCube_0;
  f2 = new CubieCube_2(28783, 0, 259268407, 0);
  u4 = new CubieCube_2(15138, 0, 119765538, 1792);
  lr2 = new CubieCube_2(5167, 0, 83473207, 0);
  lr2.co = [3, 3, 3, 3, 3, 3, 3, 3];
  for (i = 0; i < 16; ++i) {
    CubeSym[i] = new CubieCube_3(c);
    CornMultSym(c, u4, d);
    EdgeMult(c, u4, d);
    temp = d;
    d = c;
    c = temp;
    if (i % 4 === 3) {
      CornMultSym(temp, lr2, d);
      EdgeMult(temp, lr2, d);
      temp = d;
      d = c;
      c = temp;
    }
    if (i % 8 === 7) {
      CornMultSym(temp, f2, d);
      EdgeMult(temp, f2, d);
      temp = d;
      d = c;
      c = temp;
    }
  }
  for (j = 0; j < 16; ++j) {
    for (k = 0; k < 16; ++k) {
      CornMultSym(CubeSym[j], CubeSym[k], c);
      if (c.cp[0] === 0 && c.cp[1] === 1 && c.cp[2] === 2) {
        SymInv[j] = k;
        break;
      }
    }
  }
  for (i = 0; i < 16; ++i) {
    for (j = 0; j < 16; ++j) {
      CornMultSym(CubeSym[i], CubeSym[j], c);
      for (k = 0; k < 16; ++k) {
        if (CubeSym[k].cp[0] === c.cp[0] && CubeSym[k].cp[1] === c.cp[1] && CubeSym[k].cp[2] === c.cp[2]) {
          SymMult[i][j] = k;
          break;
        }
      }
    }
  }
  for (j = 0; j < 18; ++j) {
    for (s = 0; s < 16; ++s) {
      CornConjugate(moveCube[j], SymInv[s], c);
      CONTINUE: for (m_0 = 0; m_0 < 18; ++m_0) {
        for (i = 0; i < 8; ++i) {
          if (c.cp[i] != moveCube[m_0].cp[i] || c.co[i] != moveCube[m_0].co[i]) {
            continue CONTINUE;
          }
        }
        SymMove[s][j] = m_0;
      }
    }
  }
  for (j = 0; j < 10; ++j) {
    for (s = 0; s < 16; ++s) {
      SymMoveUD[s][j] = (std2ud)[SymMove[s][ud2std[j]]];
    }
  }
  for (j = 0; j < 8; ++j) {
    for (s = 0; s < 8; ++s) {
      Sym8Mult[s][j] = SymMult[s << 1][j << 1] >>> 1;
    }
  }
  for (j = 0; j < 18; ++j) {
    for (s = 0; s < 8; ++s) {
      Sym8Move[s][j] = SymMove[s << 1][j];
    }
  }
  for (j = 0; j < 8; ++j) {
    for (s = 0; s < 8; ++s) {
      Sym8MultInv[j][s] = Sym8Mult[j][SymInv[s << 1] >> 1];
    }
  }
}

function initSym2Raw(){
  var a, b, c, count, d, i, idx, j, m_0, mask, occ, s;
  c = new CubieCube_0;
  d = new CubieCube_0;
  occ = Array(1260);
  count = 0;
  for (i = 0; i < 64; occ[i++] = 0)
  ;
  for (i = 0; i < 2048; ++i) {
    if ((occ[i >>> 5] & 1 << (i & 31)) === 0) {
      $setFlip(c, i);
      for (s = 0; s < 16; s = s + 2) {
        EdgeMult(CubeSym[SymInv[s]], c, temp_0);
        EdgeMult(temp_0, CubeSym[s], d);
        idx = $getFlip(d);
        occ[idx >>> 5] |= 1 << (idx & 31);
        FlipR2S[idx] = (count << 3 | s >>> 1);
      }
      FlipS2R[count++] = i;
    }
  }
  count = 0;
  for (i = 0; i < 69; occ[i++] = 0)
  ;
  for (i = 0; i < 2187; ++i) {
    if ((occ[i >>> 5] & 1 << (i & 31)) === 0) {
      $setTwist(c, i);
      for (s = 0; s < 16; s = s + 2) {
        CornMultSym(CubeSym[SymInv[s]], c, temp_0);
        CornMultSym(temp_0, CubeSym[s], d);
        idx = $getTwist(d);
        occ[idx >>> 5] |= 1 << (idx & 31);
        TwistR2S[idx] = (count << 3 | s >>> 1);
      }
      TwistS2R[count++] = i;
    }
  }

  mask = Array(2);
  mask[0] = Array(56);
  mask[1] = Array(56);
  for (i=0; i<56; ++i) {
    mask[0][i] = mask[1][i] = 0;
  }
  for (i = 0; i < 40320; ++i) {
    set8Perm(c.ep, i);
    a = ~~($getURtoUL(c) / 6);
    b = ~~($getDRtoDL(c) / 6);
    mask[b>>5][a] |= 1 << (b & 0x1f);
  }
  for (i = 0; i < 56; ++i) {
    count = 0;
    for (j = 0; j < 56; ++j) {
      ((mask[j>>5][i] & (1 << (j & 0x1f))) != 0) && (merge[i][j] = count++);
    }
  }
  count = 0;
  for (i = 0; i < 1260; occ[i++] = 0)
  ;
  for (i = 0; i < 40320; ++i) {
    if ((occ[i >>> 5] & 1 << (i & 31)) === 0) {
      set8Perm(c.ep, i);
      for (s = 0; s < 16; ++s) {
        EdgeMult(CubeSym[SymInv[s]], c, temp_0);
        EdgeMult(temp_0, CubeSym[s], d);
        idx = get8Perm(d.ep);
        occ[idx >>> 5] |= 1 << (idx & 31);
        a = $getURtoUL(d);
        b = $getDRtoDL(d);
        m_0 = merge[~~(a / 6)][~~(b / 6)] * 4032 + a * 12 + b % 6 * 2 + get8Parity(idx);
        MtoEPerm[m_0] = (count << 4 | s);
        EPermR2S[idx] = (count << 4 | s);
      }
      EPermS2R[count++] = i;
    }
  }
}

function set8Perm(arr, idx){
  var i, m_0, p, v, val;
  val = 1985229328;
  for (i = 0; i < 7; ++i) {
    p = (fact)[7 - i];
    v = ~~(idx / p);
    idx = idx - v * p;
    v <<= 2;
    arr[i] = (val >> v & 7);
    m_0 = (1 << v) - 1;
    val = (val & m_0) + (val >> 4 & ~m_0);
  }
  arr[7] = val;
}

function CubieCube(){
}

_ = CubieCube_3.prototype = CubieCube_2.prototype = CubieCube_0.prototype = CubieCube.prototype;
_.temps = null;
var CPermS2R, CubeSym, EPermR2S = null, EPermS2R, FlipR2S = null, FlipS2R, MtoEPerm, Sym8Move, Sym8Mult, Sym8MultInv, SymInv, SymMove, SymMoveUD, SymMult, TwistR2S = null, TwistS2R, e2c, merge, moveCube = null, temp_0, urf1, urf2, urfMove;


function $Solve(obj, c){
  var i;
  c.temps = new CubieCube_0;
  for (i = 0; i < 6; ++i) {
    obj.twist[i] = $getTwistSym(c);
    obj.tsym[i] = obj.twist[i] & 7;
    obj.twist[i] >>>= 3;
    obj.flip[i] = $getFlipSym(c);
    obj.fsym[i] = obj.flip[i] & 7;
    obj.flip[i] >>>= 3;
    obj.slice_0[i] = $getUDSlice(c);
    obj.corn0[i] = $getCPermSym(c);
    obj.csym0[i] = obj.corn0[i] & 15;
    obj.corn0[i] >>>= 4;
    obj.mid30[i] = $getMid3(c);
    obj.e10[i] = $getURtoUL(c);
    obj.e20[i] = $getDRtoDL(c);
    obj.prun[i] = Math.max(Math.max((UDSliceTwistPrun)[obj.twist[i] * 495 + UDSliceConj[obj.slice_0[i]][obj.tsym[i]]], UDSliceFlipPrun[obj.flip[i] * 495 + UDSliceConj[obj.slice_0[i]][obj.fsym[i]]]), TwistFlipPrun[obj.twist[i] * 2688 + (obj.flip[i] << 3 | (Sym8MultInv)[obj.fsym[i]][obj.tsym[i]])]);
    CornMult(urf2, c, c.temps);
    CornMult(c.temps, urf1, c);
    EdgeMult(urf2, c, c.temps);
    EdgeMult(c.temps, urf1, c);
    i === 2 && $invCubieCube(c);
  }
  obj.solution = null;
  for (obj.length1 = 0; obj.length1 < obj.sol; ++obj.length1) {
    obj.maxlength2 = Math.min(~~(obj.sol / 2) + 1, obj.sol - obj.length1);
    for (obj.urfidx = 0; obj.urfidx < 6; ++obj.urfidx) {
      obj.corn[0] = obj.corn0[obj.urfidx];
      obj.csym[0] = obj.csym0[obj.urfidx];
      obj.mid3[0] = obj.mid30[obj.urfidx];
      obj.e1[0] = obj.e10[obj.urfidx];
      obj.e2[0] = obj.e20[obj.urfidx];
      if (obj.prun[obj.urfidx] <= obj.length1 && $phase1(obj, obj.twist[obj.urfidx], obj.tsym[obj.urfidx], obj.flip[obj.urfidx], obj.fsym[obj.urfidx], obj.slice_0[obj.urfidx], obj.length1, 18)) {
        return obj.solution === null?'Error 8':obj.solution;
      }
    }
  }
  return 'Error 7';
}

function $init2(obj){
  var cornx, edge, esym, ex, i, lm, m_0, mid, prun, s, sb, urf;
  obj.valid2 = Math.min(obj.valid2, obj.valid1);
  for (i = obj.valid1; i < obj.length1; ++i) {
    m_0 = obj.move[i];
    obj.corn[i + 1] = (CPermMove)[obj.corn[i]][(SymMove)[obj.csym[i]][m_0]];
    obj.csym[i + 1] = SymMult[obj.corn[i + 1] & 15][obj.csym[i]];
    obj.corn[i + 1] >>>= 4;
    obj.mid3[i + 1] = Mid3Move[obj.mid3[i]][m_0];
  }
  obj.valid1 = obj.length1;
  mid = (Mid32MPerm)[obj.mid3[obj.length1] % 24];
  prun = MCPermPrun[obj.corn[obj.length1] * 24 + MPermConj[mid][obj.csym[obj.length1]]];
  if (prun >= obj.maxlength2) {
    return false;
  }
  for (i = obj.valid2; i < obj.length1; ++i) {
    obj.e1[i + 1] = Mid3Move[obj.e1[i]][obj.move[i]];
    obj.e2[i + 1] = Mid3Move[obj.e2[i]][obj.move[i]];
  }
  obj.valid2 = obj.length1;
  cornx = obj.corn[obj.length1];
  ex = (merge)[~~(obj.e1[obj.length1] / 6)][~~(obj.e2[obj.length1] / 6)] * 4032 + obj.e1[obj.length1] * 12 + obj.e2[obj.length1] % 6 * 2 + (CParity[cornx >>> 3] >>> (cornx & 7) & 1 ^ (parity4)[mid]);
  edge = MtoEPerm[ex];
  esym = edge & 15;
  edge >>>= 4;
  prun = Math.max(MEPermPrun[edge * 24 + MPermConj[mid][esym]], prun);
  if (prun >= obj.maxlength2) {
    return false;
  }
  lm = obj.length1 === 0?10:std2ud[~~(obj.move[obj.length1 - 1] / 3) * 3 + 1];
  for (i = prun; i < obj.maxlength2; ++i) {
    if ($phase2(obj, edge, esym, obj.corn[obj.length1], obj.csym[obj.length1], mid, i, obj.length1, lm)) {
      obj.sol = obj.length1 + i;
      sb = "";
      urf = obj.urfidx;
      (urf = (urf + 3) % 6);
      if (urf < 3) {
        for (s = 0; s < obj.length1; ++s) {
          sb += move2str[urfMove[urf][obj.move[s]]];
          sb += ' ';
        }
        obj.useSeparator && (sb.impl.string += '.' , sb);
        for (s = obj.length1; s < obj.sol; ++s) {
          sb += move2str[urfMove[urf][obj.move[s]]];
          sb += ' ';
        }
      }
       else {
        for (s = obj.sol - 1; s >= obj.length1; --s) {
          sb += move2str[urfMove[urf][obj.move[s]]];
          sb += ' ';
        }
        obj.useSeparator && (sb += '.' , sb);
        for (s = obj.length1 - 1; s >= 0; --s) {
          sb += move2str[urfMove[urf][obj.move[s]]];
          sb += ' ';
        }
      }
      obj.solution = sb;
      return true;
    }
  }
  return false;
}

function $phase1(obj, twist, tsym, flip, fsym, slice, maxl, lm){
  var flipx, fsymx, m_0, slicex, tsymx, twistx;
  if (twist === 0 && flip === 0 && slice === 0 && maxl < 5) {
    return maxl === 0 && $init2(obj);
  }
  for (m_0 = 0; m_0 < 18; ++m_0) {
    if ((ckmv)[lm][m_0]) {
      m_0 += 2;
      continue;
    }
    slicex = (UDSliceMove)[slice][m_0];
    twistx = TwistMove[twist][Sym8Move[tsym][m_0]];
    tsymx = Sym8Mult[twistx & 7][tsym];
    twistx >>>= 3;
    if (UDSliceTwistPrun[twistx * 495 + UDSliceConj[slicex][tsymx]] >= maxl) {
      continue;
    }
    flipx = FlipMove[flip][Sym8Move[fsym][m_0]];
    fsymx = Sym8Mult[flipx & 7][fsym];
    flipx >>>= 3;
    if (TwistFlipPrun[twistx * 2688 + (flipx << 3 | Sym8MultInv[fsymx][tsymx])] >= maxl || UDSliceFlipPrun[flipx * 495 + UDSliceConj[slicex][fsymx]] >= maxl) {
      continue;
    }
    obj.move[obj.length1 - maxl] = m_0;
    obj.valid1 = Math.min(obj.valid1, obj.length1 - maxl);
    if ($phase1(obj, twistx, tsymx, flipx, fsymx, slicex, maxl - 1, m_0)) {
      return true;
    }
  }
  return false;
}

function $phase2(obj, edge, esym, corn, csym, mid, maxl, depth, lm){
  var cornx, csymx, edgex, esymx, m_0, midx;
  if (edge === 0 && corn === 0 && mid === 0) {
    return true;
  }
  for (m_0 = 0; m_0 < 10; ++m_0) {
    if ((ckmv2)[lm][m_0]) {
      continue;
    }
    midx = (MPermMove)[mid][m_0];
    edgex = EPermMove[edge][(SymMoveUD)[esym][m_0]];
    esymx = SymMult[edgex & 15][esym];
    edgex >>>= 4;
    if (MEPermPrun[edgex * 24 + MPermConj[midx][esymx]] >= maxl) {
      continue;
    }
    cornx = CPermMove[corn][SymMove[csym][ud2std[m_0]]];
    csymx = SymMult[cornx & 15][csym];
    cornx >>>= 4;
    if (MCPermPrun[cornx * 24 + MPermConj[midx][csymx]] >= maxl) {
      continue;
    }
    obj.move[depth] = ud2std[m_0];
    if ($phase2(obj, edgex, esymx, cornx, csymx, midx, maxl - 1, depth + 1, m_0)) {
      return true;
    }
  }
  return false;
}

function $solution(obj, facelets){
  var $e0, cc, i, s;
  init_0();
    for (i = 0; i < 54; ++i) {
      switch (facelets.charCodeAt(i)) {
        case 85:
          obj.f[i] = 0;
          break;
        case 82:
          obj.f[i] = 1;
          break;
        case 70:
          obj.f[i] = 2;
          break;
        case 68:
          obj.f[i] = 3;
          break;
        case 76:
          obj.f[i] = 4;
          break;
        case 66:
          obj.f[i] = 5;
          break;
        default:return 'Error 1';
      }
    }
  cc = toCubieCube(obj.f);
  obj.sol = 22;
  return $Solve(obj, cc);
}

function Search(){
  this.move = Array(31);
  this.corn = Array(20);
  this.csym = Array(20);
  this.mid3 = Array(20);
  this.e1 = Array(20);
  this.e2 = Array(20);
  this.twist = Array(6);
  this.tsym = Array(6);
  this.flip = Array(6);
  this.fsym = Array(6);
  this.slice_0 = Array(6);
  this.corn0 = Array(6);
  this.csym0 = Array(6);
  this.mid30 = Array(6);
  this.e10 = Array(6);
  this.e20 = Array(6);
  this.prun = Array(6);
  this.count = Array(6);
  this.f = Array(54);
}

_ = Search.prototype;
_.inverse = false;
_.length1 = 0;
_.maxlength2 = 0;
_.sol = 999;
_.solution = null;
_.urfidx = 0;
_.useSeparator = false;
_.valid1 = 0;
_.valid2 = 0;

function init_0(safeStatusCallback){
  if (inited)
    return;
  $clinit_Util();
  safeStatusCallback("[0/9] Initializing Cubie Cube...");
  $clinit_CubieCube();
  FlipR2S = Array(2048);
  TwistR2S = Array(2187);
  EPermR2S = Array(40320);
  safeStatusCallback("[1/9] Initializing Sym2Raw...");
  initSym2Raw();
  safeStatusCallback("[2/9] Initializing CoordCube...");
  $clinit_CoordCube();
  safeStatusCallback("[3/9] Initializing Perm, Flip, and Twist Moves...");
  initCPermMove();
  initEPermMove();
  initFlipMove();
  initTwistMove();
  safeStatusCallback("[4/9] Initializing UDSlice...");
  EPermR2S = null;
  FlipR2S = null;
  TwistR2S = null;
  initUDSliceMove();
  initUDSliceConj();
  safeStatusCallback("[5/9] Initializing Mid3Move...");
  initMid3Move();
  initMid32MPerm();
  initCParity();
  safeStatusCallback("[6/9] Initializing Perms...");
  initMPermMove();
  initMPermConj();
  safeStatusCallback("[7/9] Initializing TwistFlipSlicePrun...");
  initTwistFlipSlicePrun(safeStatusCallback);
  safeStatusCallback("[8/9] Initializing MCEPermPrum...");
  initMCEPermPrun(safeStatusCallback);
  safeStatusCallback("[9/9] Done initializing 3x3x3...");
  inited = true;
}

function randomCube_0(){
  var cperm, eperm;
  do {
    eperm = scramblers.lib.randomInt.below(479001600);
    cperm = scramblers.lib.randomInt.below(40320);
  }
   while ((get8Parity(cperm) ^ get12Parity(eperm)) != 0);
  return toFaceCube(new CubieCube_2(cperm, scramblers.lib.randomInt.below(2187), eperm, scramblers.lib.randomInt.below(2048)));
}

var inited = false;
function $clinit_Util(){
  $clinit_Util = nullMethod;
  var i, j;
  cornerFacelet = [[8, 9, 20], [6, 18, 38], [0, 36, 47], [2, 45, 11], [29, 26, 15], [27, 44, 24], [33, 53, 42], [35, 17, 51]];
  edgeFacelet = [[5, 10], [7, 19], [3, 37], [1, 46], [32, 16], [28, 25], [30, 43], [34, 52], [23, 12], [21, 41], [50, 39], [48, 14]];
  cornerColor = [[0, 1, 2], [0, 2, 4], [0, 4, 5], [0, 5, 1], [3, 2, 1], [3, 4, 2], [3, 5, 4], [3, 1, 5]];
  edgeColor = [[0, 1], [0, 2], [0, 4], [0, 5], [3, 1], [3, 2], [3, 4], [3, 5], [2, 1], [2, 4], [5, 4], [5, 1]];
  Cnk = createArray(12, 12);
  fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600];
  move2str = ['U ', 'U2', "U'", 'R ', 'R2', "R'", 'F ', 'F2', "F'", 'D ', 'D2', "D'", 'L ', 'L2', "L'", 'B ', 'B2', "B'"];
  ud2std = [0, 1, 2, 4, 7, 9, 10, 11, 13, 16];
  std2ud = Array(18);
  ckmv = createArray(19, 18);
  ckmv2 = createArray(11, 10);
  parity4 = Array(24);
  perm3 = [[11, 10, 9], [10, 11, 9], [11, 9, 10], [9, 11, 10], [10, 9, 11], [9, 10, 11]];
  for (i = 0; i < 10; ++i) {
    std2ud[ud2std[i]] = i;
  }
  for (i = 0; i < 18; ++i) {
    for (j = 0; j < 18; ++j) {
      ckmv[i][j] = ~~(i / 3) === ~~(j / 3) || ~~(i / 3) % 3 === ~~(j / 3) % 3 && i >= j;
    }
    ckmv[18][i] = false;
  }
  for (i = 0; i < 10; ++i) {
    for (j = 0; j < 10; ++j) {
      ckmv2[i][j] = ckmv[ud2std[i]][ud2std[j]];
    }
    ckmv2[10][i] = false;
  }
  for (i=0; i<12; ++i)
    for (j=0; j<12; ++j)
      Cnk[i][j] = 0;
  for (i = 0; i < 12; ++i) {
    Cnk[i][0] = 1;
    Cnk[i][i] = 1;
    for (j = 1; j < i; ++j) {
      Cnk[i][j] = Cnk[i - 1][j - 1] + Cnk[i - 1][j];
    }
  }
  for (i = 0; i < 24; ++i) {
    parity4[i] = get4Parity(i);
  }
}

function binarySearch(arr, key){
  var l_0, length_0, mid, r, val;
  length_0 = arr.length;
  if (key <= arr[length_0 - 1]) {
    l_0 = 0;
    r = length_0 - 1;
    while (l_0 <= r) {
      mid = l_0 + r >>> 1;
      val = arr[mid];
      if (key > val) {
        l_0 = mid + 1;
      }
       else if (key < val) {
        r = mid - 1;
      }
       else {
        return mid;
      }
    }
  }
  return 65535;
}

function bitCount(i){
  i = i - (i >>> 1 & 1431655765);
  i = (i & 858993459) + (i >>> 2 & 858993459);
  return i + (i >>> 8) + (i >>> 4) & 15;
}

function bitOdd(i){
  i = (i ^ i >>> 1);
  i = (i ^ i >>> 2);
  i = (i ^ i >>> 4);
  i = (i ^ i >>> 8);
  return (i & 1);
}

function get12Parity(idx){
  var i, p;
  p = 0;
  for (i = 10; i >= 0; --i) {
    p = p + idx % (12 - i);
    idx = ~~(idx / (12 - i));
  }
  p = (p & 1);
  return p;
}

function get4Parity(idx){
  var i, p;
  p = 0;
  for (i = 2; i >= 0; --i) {
    p = p + idx % (4 - i);
    idx = ~~(idx / (4 - i));
  }
  p = (p & 1);
  return p;
}

function get8Parity(idx){
  var i, p;
  p = 0;
  for (i = 6; i >= 0; --i) {
    p = p + idx % (8 - i);
    idx = ~~(idx / (8 - i));
  }
  p = (p & 1);
  return p;
}

function toCubieCube(f){
  var ccRet, col1, col2, i, j, ori;
  ccRet = new CubieCube_0;
  for (i = 0; i < 8; ++i)
    ccRet.cp[i] = 0;
  for (i = 0; i < 12; ++i)
    ccRet.ep[i] = 0;
  for (i = 0; i < 8; ++i) {
    for (ori = 0; ori < 3; ++ori)
      if (f[cornerFacelet[i][ori]] === 0 || f[cornerFacelet[i][ori]] === 3)
        break;
    col1 = f[cornerFacelet[i][(ori + 1) % 3]];
    col2 = f[cornerFacelet[i][(ori + 2) % 3]];
    for (j = 0; j < 8; ++j) {
      if (col1 === cornerColor[j][1] && col2 === cornerColor[j][2]) {
        ccRet.cp[i] = j;
        ccRet.co[i] = ori % 3;
        break;
      }
    }
  }
  for (i = 0; i < 12; ++i) {
    for (j = 0; j < 12; ++j) {
      if (f[edgeFacelet[i][0]] === edgeColor[j][0] && f[edgeFacelet[i][1]] === edgeColor[j][1]) {
        ccRet.ep[i] = j;
        ccRet.eo[i] = 0;
        break;
      }
      if (f[edgeFacelet[i][0]] === edgeColor[j][1] && f[edgeFacelet[i][1]] === edgeColor[j][0]) {
        ccRet.ep[i] = j;
        ccRet.eo[i] = 1;
        break;
      }
    }
  }
  return ccRet;
}

function toFaceCube(cc){
  var c, e, f, i, j, n, ori, ts;
  f = Array(54);
  ts = [85, 82, 70, 68, 76, 66];
  for (i = 0; i < 54; ++i) {
    f[i] = ts[~~(i / 9)];
  }
  for (c = 0; c < 8; ++c) {
    j = cc.cp[c];
    ori = cc.co[c];
    for (n = 0; n < 3; ++n)
      f[cornerFacelet[c][(n + ori) % 3]] = ts[cornerColor[j][n]];
  }
  for (e = 0; e < 12; ++e) {
    j = cc.ep[e];
    ori = cc.eo[e];
    for (n = 0; n < 2; ++n)
      f[edgeFacelet[e][(n + ori) % 2]] = ts[edgeColor[j][n]];
  }
  return String.fromCharCode.apply(null, f);
}

var Cnk, ckmv, ckmv2, cornerColor, cornerFacelet, edgeColor, edgeFacelet, fact, move2str, parity4, perm3, std2ud, ud2std;






  //"UF UR UB UL DF DR DB DL FR FL BR BL UFR URB UBL ULF DRF DFL DLB DBR URFLBD";
   //0  3  6  9  12 15 18 21 24 27 30 33 36  40  44  48  52  56  60  64  68

  var drawingStickerMap = [
    [   // U
      [ 0, 1, 2],
      [ 3, 4, 5],
      [ 6, 7, 8]
    ],[ // R
      [ 9,10,11],
      [12,13,14],
      [15,16,17]
    ],[ // F
      [18,19,20],
      [21,22,23],
      [24,25,26]
    ],[ // L
      [36,37,38],
      [39,40,41],
      [42,43,44]
    ],[ // B
      [45,46,47],
      [48,49,50],
      [51,52,53]
    ],[ // D
      [27,28,29],
      [30,31,32],
      [33,34,35]
    ]
  ];

  var border = 2;
  var width = 12;
  var gap = 4;
  //URFLBD
  var drawingCenters = [
    [border + width/2*9  + gap*1,  border + width/2*3         ],
    [border + width/2*15 + gap*2,  border + width/2*9  + gap*1],
    [border + width/2*9  + gap*1,  border + width/2*9  + gap*1],
    [border + width/2*3  + gap*0,  border + width/2*9  + gap*1],
    [border + width/2*21 + gap*3,  border + width/2*9  + gap*1],
    [border + width/2*9  + gap*1,  border + width/2*15 + gap*2],
  ];


  function colorGet(col){
    if (col==="r") return ("#F94F2D");
    if (col==="o") return ("#FFA643");
    if (col==="b") return ("#43C4F3");
    if (col==="g") return ("#7AC78B");
    if (col==="y") return ("#FFED71");
    if (col==="w") return ("#FFFFFF");
    if (col==="x") return ("#000000");
  }

  var scalePoint = function(w, h, ptIn) {

    var defaultWidth = border*2+width*12+gap*3;
    var defaultHeight = border*2+width*9+gap*2;

    var scale = Math.min(w/defaultWidth, h/defaultHeight);

    var x = Math.floor(ptIn[0]*scale + (w - (defaultWidth * scale))/2) + 0.5;
    var y = Math.floor(ptIn[1]*scale + (h - (defaultHeight * scale))/2) + 0.5;

    return [x, y];
  }

  function drawSquare(r, wi, h, cx, cy, w, fillColor) {

    var arrx = [cx - w, cx - w, cx + w, cx + w];
    var arry = [cy - w, cy + w, cy + w, cy - w];

    var pathString = "";
    for (var i = 0; i < arrx.length; i++) {
      var scaledPoint = scalePoint(wi, h, [arrx[i], arry[i]]);
      pathString += ((i===0) ? "M" : "L") + scaledPoint[0] + "," + scaledPoint[1];
    }
    pathString += "z";

    r.path(pathString).attr({fill: colorGet(fillColor), stroke: "#000"})
  }

  var drawScramble = function(parentElement, state, w, h) {

    var colorString = "wrgoby"; // UFRLBD
    var colorScheme = {
      "U": colorString[0],
      "R": colorString[1],
      "F": colorString[2],
      "L": colorString[3],
      "B": colorString[4],
      "D": colorString[5],
    };

    var r = Raphael(parentElement, w, h);

    var stateWithCenters = state + " URFLBD";

    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 3; j++) {
        for (var k = 0; k < 3; k++) {
          var face = stateWithCenters[drawingStickerMap[i][j][k]];
          drawSquare(r, w, h, drawingCenters[i][0] + (k-1)*width, drawingCenters[i][1] + (j-1)*width, width/2, colorScheme[face]);
        }
      }
    }

  };

  var initialized = false;
  var search;

  var ini = function(callback, _, statusCallback) {

    if (typeof statusCallback !== "function") {
      statusCallback = function() {};
    }

    if (!initialized) {
      search = new Search;
      init_0(statusCallback);
      initialized = true;
    }
    if(callback) setTimeout(callback, 0);
  };

  var getRandomScramble = function() {

    ini();

    var posit = randomCube_0();
    var solution = $solution(search, posit);

    return {
      state: posit,
      scramble_string: solution
    };
  }


  return {
    /* mark2 interface */
    version: "July 05, 2015",
    initialize: ini,
    setRandomSource: function() {console.log("setRandomSource is deprecated. It has no effect anymore.")},
    getRandomScramble: getRandomScramble,
    drawScramble: drawScramble,

    /* Other methods */
  };

})();

scramblers["333fm"] = scramblers["333"];
scramblers["333ft"] = scramblers["333"];
scramblers["333bf"] = scramblers["333"];
scramblers["333oh"] = scramblers["333"];
scramblers["333mbf"] = scramblers["333"];
0

/*

scramble_NNN.js

NxNxN Scramble Generator in Javascript.

Code taken from the official WCA scrambler.
Ported by Lucas Garron, November 24, 2011.

 */

"use strict";
if (typeof scramblers === "undefined") {
  var scramblers = {};
  scramblers.lib = {
    // https://github.com/lgarron/randomInt.js
    randomInt: function(){function n(){var n="WARNING: randomInt is falling back to Math.random for random number generation.";console.warn?console.warn(n):console.log(n),e=!0}function o(n){if("number"!=typeof n||0>n||Math.floor(n)!==n)throw new Error("randomInt.below() not called with a positive integer value.");if(n>9007199254740992)throw new Error("Called randomInt.below() with max == "+n+", which is larger than Javascript can handle with integer precision.")}function r(n){o(n);var e=a(),i=Math.floor(t/n)*n;return i>e?e%n:r(n)}var a,t=9007199254740992,e=!1,i=window.crypto||window.msCrypto||window.cryptoUint32;if(i)a=function(){var n=2097152,o=new Uint32Array(2);return i.getRandomValues(o),o[0]*n+(o[1]>>21)};else{var l="ERROR: randomInt could not find a suitable crypto.getRandomValues() function.";console.error?console.error(l):console.log(l),a=function(){if(e)return Math.floor(Math.random()*t);throw new Error("randomInt cannot get random values.")}}return{below:r,enableInsecureMathRandomFallback:n}}()
  }
}

// We use an anonymous wrapper (and call it immediately) in order to avoid leaving the generator hanging around in the top-level scope.
(function(){

  var generate_NNN_scrambler = function(size, seqlen, mult) {
      return (function () {
      // Default settings
      //var size=3;
      //var seqlen=30;
      var numcub=1;
      //var mult=false;
      var cubeorient=false;
      var colorString = "yobwrg";  //In dlburf order. May use any colours in colorList below

      // list of available colours
      var colorList=new Array(
        'y', "yellow.jpg", "yellow",
        'b', "blue.jpg",   "blue",
        'r', "red.jpg",    "red",
        'w', "white.jpg",  "white",
        'g', "green.jpg",  "green",
        'o', "orange.jpg", "orange",
        'p', "purple.jpg", "purple",
        '0', "grey.jpg",   "grey"      // used for unrecognised letters, or when zero used.
      );

      var colors=new Array(); //stores colours used
      var seq=new Array();  // move sequences
      var posit = new Array();  // facelet array
      var flat2posit; //lookup table for drawing cube
      var colorPerm = new Array(); //dlburf face colour permutation for each cube orientation
      colorPerm[ 0] = new Array(0,1,2,3,4,5);
      colorPerm[ 1] = new Array(0,2,4,3,5,1);
      colorPerm[ 2] = new Array(0,4,5,3,1,2);
      colorPerm[ 3] = new Array(0,5,1,3,2,4);
      colorPerm[ 4] = new Array(1,0,5,4,3,2);
      colorPerm[ 5] = new Array(1,2,0,4,5,3);
      colorPerm[ 6] = new Array(1,3,2,4,0,5);
      colorPerm[ 7] = new Array(1,5,3,4,2,0);
      colorPerm[ 8] = new Array(2,0,1,5,3,4);
      colorPerm[ 9] = new Array(2,1,3,5,4,0);
      colorPerm[10] = new Array(2,3,4,5,0,1);
      colorPerm[11] = new Array(2,4,0,5,1,3);
      colorPerm[12] = new Array(3,1,5,0,4,2);
      colorPerm[13] = new Array(3,2,1,0,5,4);
      colorPerm[14] = new Array(3,4,2,0,1,5);
      colorPerm[15] = new Array(3,5,4,0,2,1);
      colorPerm[16] = new Array(4,0,2,1,3,5);
      colorPerm[17] = new Array(4,2,3,1,5,0);
      colorPerm[18] = new Array(4,3,5,1,0,2);
      colorPerm[19] = new Array(4,5,0,1,2,3);
      colorPerm[20] = new Array(5,0,4,2,3,1);
      colorPerm[21] = new Array(5,1,0,2,4,3);
      colorPerm[22] = new Array(5,3,1,2,0,4);
      colorPerm[23] = new Array(5,4,3,2,1,0);

      // get all the form settings from the url parameters
      function parse() {

        /*
        var s="";
        var urlquery=location.href.split("?")
        if(urlquery.length>1){
          var urlterms=urlquery[1].split("&")
          for( var i=0; i<urlterms.length; i++){
            var urllr=urlterms[i].split("=");
            if(urllr[0]==="size") {
              if(urllr[1]-0 >= 2 ) size=urllr[1]-0;
            } else if(urllr[0]==="len") {
              if(urllr[1]-0 >= 1 ) seqlen=urllr[1]-0;
            } else if(urllr[0]==="num"){
              if(urllr[1]-0 >= 1 ) numcub=urllr[1]-0;
            } else if(urllr[0]==="multi") {
              mult=(urllr[1]==="on");
            } else if(urllr[0]==="cubori") {
              cubeorient=(urllr[1]==="on");
            } else if(urllr[0]==="col") {
              if(urllr[1].length===6) colorString = urllr[1];
            }
          }
        }*/

        // build lookup table
        var i, j;
        flat2posit=new Array(12*size*size);
        for(i=0; i<flat2posit.length; i++) flat2posit[i]=-1;
        for(i=0; i<size; i++){
          for(j=0; j<size; j++){
            flat2posit[4*size*(3*size-i-1)+  size+j  ]=        i *size+j; //D
            flat2posit[4*size*(  size+i  )+  size-j-1]=(  size+i)*size+j; //L
            flat2posit[4*size*(  size+i  )+4*size-j-1]=(2*size+i)*size+j; //B
            flat2posit[4*size*(       i  )+  size+j  ]=(3*size+i)*size+j; //U
            flat2posit[4*size*(  size+i  )+2*size+j  ]=(4*size+i)*size+j; //R
            flat2posit[4*size*(  size+i  )+  size+j  ]=(5*size+i)*size+j; //F
          }
        }

        /*
               19                32
           16           48           35
               31   60      51   44
           28     80    63    67     47
                      83  64
                  92          79
                      95  76

                         0
                     12     3
                        15
        */

        // expand colour string into 6 actual html color names
        for(var k=0; k<6; k++){
          colors[k]=colorList.length-3; // gray
          for( var i=0; i<colorList.length; i+=3 ){
            if( colorString.charAt(k)===colorList[i] ){
              colors[k]=i;
              break;
            }
          }
        }
      }

      // append set of moves along an axis to current sequence in order
      function appendmoves( sq, axsl, tl, la ){
        for( var sl=0; sl<tl; sl++){  // for each move type
          if( axsl[sl] ){       // if it occurs
            var q=axsl[sl]-1;

            // get semi-axis of this move
            var sa = la;
            var m = sl;
            if(sl+sl+1>=tl){ // if on rear half of this axis
              sa+=3; // get semi-axis (i.e. face of the move)
              m=tl-1-m; // slice number counting from that face
              q=2-q; // opposite direction when looking at that face
            }
            // store move
            sq[sq.length]=(m*6+sa)*4+q;
          }
        }
      }

      // generate sequence of scambles
      function scramble(){
        //tl=number of allowed moves (twistable layers) on axis -- middle layer ignored
        var tl=size;
        if(mult || (size&1)!=0 ) tl--;
        //set up bookkeeping
        var axsl=new Array(tl);    // movement of each slice/movetype on this axis
        var axam=new Array(0,0,0); // number of slices moved each amount
        var la; // last axis moved

        // for each cube scramble
        for( var n=0; n<numcub; n++){
          // initialise this scramble
          la=-1;
          seq[n]=new Array(); // moves generated so far
          // reset slice/direction counters
          for( var i=0; i<tl; i++) axsl[i]=0;
          axam[0]=axam[1]=axam[2]=0;
          var moved = 0;

          // while generated sequence not long enough
          while( seq[n].length + moved <seqlen ){

            var ax, sl, q;
            do{
              do{
                // choose a random axis
                ax=scramblers.lib.randomInt.below(3);
                // choose a random move type on that axis
                sl=scramblers.lib.randomInt.below(tl);
                // choose random amount
                q=scramblers.lib.randomInt.below(3);
              }while( ax===la && axsl[sl]!=0 );    // loop until have found an unused movetype
            }while( ax===la          // loop while move is reducible: reductions only if on same axis as previous moves
                && !mult        // multislice moves have no reductions so always ok
                && tl===size       // only even-sized cubes have reductions (odds have middle layer as reference)
                && (
                  2*axam[0]===tl ||  // reduction if already have half the slices move in same direction
                  2*axam[1]===tl ||
                  2*axam[2]===tl ||
                  (
                    2*(axam[q]+1)===tl // reduction if move makes exactly half the slices moved in same direction and
                    &&
                    axam[0]+axam[1]+axam[2]-axam[q] > 0 // some other slice also moved
                  )
                  )
            );

            // if now on different axis, dump cached moves from old axis
            if( ax!=la ) {
              appendmoves( seq[n], axsl, tl, la );
              // reset slice/direction counters
              for( var i=0; i<tl; i++) axsl[i]=0;
              axam[0]=axam[1]=axam[2]=0;
              moved = 0;
              // remember new axis
              la=ax;
            }

            // adjust counters for this move
            axam[q]++;// adjust direction count
            moved++;
            axsl[sl]=q+1;// mark the slice has moved amount

          }
          // dump the last few moves
          appendmoves( seq[n], axsl, tl, la );

          // do a random cube orientation if necessary
          seq[n][seq[n].length]= cubeorient ? scramblers.lib.randomInt.below(24) : 0;
        }

      }

      var cubeSize = size;

      var border = 2;
      var width = 40/cubeSize;
      var gap = 4;

      function colorGet(col){
        if (col==="r") return ("#F94F2D");
        if (col==="o") return ("#FFA643");
        if (col==="b") return ("#43C4F3");
        if (col==="g") return ("#7AC78B");
        if (col==="y") return ("#FFED71");
        if (col==="w") return ("#FFFFFF");
        if (col==="x") return ("#000000");
      }

      var scalePoint = function(w, h, ptIn) {

        var defaultWidth = border*2+width*4*cubeSize+gap*3;
        var defaultHeight = border*2+width*3*cubeSize+gap*2;

        var scale = Math.min(w/defaultWidth, h/defaultHeight);

        var x = Math.floor(ptIn[0]*scale + (w - (defaultWidth * scale))/2) + 0.5;
        var y = Math.floor(ptIn[1]*scale + (h - (defaultHeight * scale))/2) + 0.5;

        return [x, y];
      }

      function drawSquare(r, canvasWidth, canvasHeight, cx, cy, w, fillColor) {

        var arrx = [cx - w, cx - w, cx + w, cx + w];
        var arry = [cy - w, cy + w, cy + w, cy - w];

        var pathString = "";
        for (var i = 0; i < arrx.length; i++) {
          var scaledPoint = scalePoint(canvasWidth, canvasHeight, [arrx[i], arry[i]]);
          pathString += ((i===0) ? "M" : "L") + scaledPoint[0] + "," + scaledPoint[1];
        }
        pathString += "z";

        r.path(pathString).attr({fill: colorGet(fillColor), stroke: "#000"})
      }

      var drawScramble = function(parentElement, state, w, h) {

        initializeDrawing();

        var colorString = "wrgoby"; // UFRLBD

        var r = Raphael(parentElement, w, h);

        var s="",i,f,d=0,q;
        var ori = 0;
        d=0;
        s="<table border=0 cellpadding=0 cellspacing=0>";
        for(i=0;i<3*size;i++){
          s+="<tr>";
          for(f=0;f<4*size;f++){
            if(flat2posit[d]<0){
              s+="<td><\/td>";
            }else{
              var c = colorPerm[ori][state[flat2posit[d]]];
              var col = colorList[colors[c]+0];
              drawSquare(r, w, h, border + width /2 + f*width + gap*Math.floor(f/cubeSize), border + width /2 + i*width + gap*Math.floor(i/cubeSize), width/2, col);
              //s+="<td style='background-color:"+colorList[colors[c]+2]+"'><img src='scrbg/"+colorList[colors[c]+1]+"' width=10 border=1 height=10><\/td>";
            }
            d++;
          }
          s+="<\/tr>";
        }
        s+="<\/table>";
        return(s);
      }

      function scramblestring(n){
        var s="",j;
        for(var i=0; i<seq[n].length-1; i++){
          if( i!=0 ) s+=" ";
          var k=seq[n][i]>>2;

          j=k%6; k=(k-j)/6;
          if( k && size<=5 && !mult ) {
            s+="dlburf".charAt(j);  // use lower case only for inner slices on 4x4x4 or 5x5x5
          }else{
            if(size<=5 && mult ){
              s+="DLBURF".charAt(j);
              if(k) s+="w"; // use w only for double layers on 4x4x4 and 5x5x5
            }
            else{
              if(k) s+=(k+1);
              s+="DLBURF".charAt(j);
            }
          }

          j=seq[n][i]&3;
          if(j!=0) s+=" 2'".charAt(j);
        }

        // add cube orientation
        if( cubeorient ){
          var ori = seq[n][seq[n].length-1];
          s="Top:"+colorList[ 2+colors[colorPerm[ori][3]] ]
            +"&nbsp;&nbsp;&nbsp;Front:"+colorList[2+ colors[colorPerm[ori][5]] ]+"<br>"+s;
        }
        return s;
      }

      function imagestring(nr){
        var s="",i,f,d=0,q;

        // initialise colours
        for( i=0; i<6; i++)
          for( f=0; f<size*size; f++)
            posit[d++]=i;

        // do move sequence
        for(i=0; i<seq[nr].length-1; i++){
          q=seq[nr][i]&3;
          f=seq[nr][i]>>2;
          d=0;
          while(f>5) { f-=6; d++; }
          do{
            doslice(f,d,q+1);
            d--;
          }while( mult && d>=0 );
        }

        // build string containing cube
        var ori = seq[nr][seq[nr].length-1];
        d=0;
        var imageheight = 160; // height of cube images in pixels (160px is a good height for fitting 5 images on a sheet of paper)
        var stickerheight = Math.floor(imageheight/(size*3));
        if(stickerheight < 5) { stickerheight = 5; } // minimum sticker size of 5px, takes effect when cube size reaches 11
        s="<div style='width:"+(stickerheight*size*4)+"px; height:"+(stickerheight*size*3)+"px;'>";
        for(i=0;i<3*size;i++){
          s+="<div style='float: left; display: block; height: "+stickerheight+"px; width: "+(stickerheight*size*4)+"px; line-height: 0px;'>";
          for(f=0;f<4*size;f++){
            if(true){
              s+="<div style='overflow: hidden; display: block; float: left; height: "+stickerheight+"px; width: "+stickerheight+"px;'></div>";
            }else{
              var c = colorPerm[ori][posit[flat2posit[d]]];
              s+="<div style='overflow: hidden; display: block; float: left; border: 1px solid #000; height: "+(stickerheight*1-2)+"px; width: "+(stickerheight*1-2)+"px;'><img src='scrbg/"+colorList[colors[c]+1]+"' /></div>";
            }
            d++;
          }
          s+="</div>";
        }
        s+="</div>";
        return(s);
      }

      function doslice(f,d,q){
        //do move of face f, layer d, q quarter turns
        var f1,f2,f3,f4;
        var s2=size*size;
        var c,i,j,k;
        if(f>5)f-=6;
        // cycle the side facelets
        for(k=0; k<q; k++){
          for(i=0; i<size; i++){
            if(f===0){
              f1=6*s2-size*d-size+i;
              f2=2*s2-size*d-1-i;
              f3=3*s2-size*d-1-i;
              f4=5*s2-size*d-size+i;
            }else if(f===1){
              f1=3*s2+d+size*i;
              f2=3*s2+d-size*(i+1);
              f3=  s2+d-size*(i+1);
              f4=5*s2+d+size*i;
            }else if(f===2){
              f1=3*s2+d*size+i;
              f2=4*s2+size-1-d+size*i;
              f3=  d*size+size-1-i;
              f4=2*s2-1-d-size*i;
            }else if(f===3){
              f1=4*s2+d*size+size-1-i;
              f2=2*s2+d*size+i;
              f3=  s2+d*size+i;
              f4=5*s2+d*size+size-1-i;
            }else if(f===4){
              f1=6*s2-1-d-size*i;
              f2=size-1-d+size*i;
              f3=2*s2+size-1-d+size*i;
              f4=4*s2-1-d-size*i;
            }else if(f===5){
              f1=4*s2-size-d*size+i;
              f2=2*s2-size+d-size*i;
              f3=s2-1-d*size-i;
              f4=4*s2+d+size*i;
            }
            c=posit[f1];
            posit[f1]=posit[f2];
            posit[f2]=posit[f3];
            posit[f3]=posit[f4];
            posit[f4]=c;
          }

          /* turn face */
          if(d===0){
            for(i=0; i+i<size; i++){
              for(j=0; j+j<size-1; j++){
                f1=f*s2+         i+         j*size;
                f3=f*s2+(size-1-i)+(size-1-j)*size;
                if(f<3){
                  f2=f*s2+(size-1-j)+         i*size;
                  f4=f*s2+         j+(size-1-i)*size;
                }else{
                  f4=f*s2+(size-1-j)+         i*size;
                  f2=f*s2+         j+(size-1-i)*size;
                }
                c=posit[f1];
                posit[f1]=posit[f2];
                posit[f2]=posit[f3];
                posit[f3]=posit[f4];
                posit[f4]=c;
              }
            }
          }
        }
      }


      /*
       * Some helper functions.
       */


      var getRandomScramble = function() {
        scramble();
        imagestring(0);

        return {
          state: posit,
          scramble_string: scramblestring(0)
        };
      };

      var drawingInitialized = false;

      var initializeDrawing = function(continuation) {

        if (!drawingInitialized) {

          parse();

          drawingInitialized = true;
        }

        if (continuation) {
          setTimeout(continuation, 0);
        }
      };

      var initializeFull = function(continuation, _) {

        initializeDrawing();

        if (continuation) {
          setTimeout(continuation, 0);
        }
      };


      /* mark2 interface */
      return {
        version: "July 05, 2015",
        initialize: initializeFull,
        setRandomSource: function() {console.log("setRandomSource is deprecated. It has no effect anymore.")},        getRandomScramble: getRandomScramble,
        drawScramble: drawScramble,

        /* Other methods */
      };

    })();
  }

  scramblers["444bf"] = scramblers["444"] = generate_NNN_scrambler(4, 40, true);
  scramblers["555bf"] = scramblers["555"] = generate_NNN_scrambler(5, 60, true);
  scramblers["666"] = generate_NNN_scrambler(6, 70, true);
  scramblers["777"] = generate_NNN_scrambler(7, 100, true);

})();

/*

Program by Clément Gallet, based on earlier work by Jaap Scherphuis. Idea by Stefan Pochmann.

## Notation:
D means all layers below the U face together in one move.
R means all layers right from the L face together in one move.
++ means 2/5 move clockwise (144 degrees), -- means 2/5 move counterclockwise (-144 degrees).
U is the regular move of the U face, according to standard cube notation.
<br>
 */
"use strict";
if (typeof scramblers === "undefined") {
  var scramblers = {};
  scramblers.lib = {
    // https://github.com/lgarron/randomInt.js
    randomInt: function(){function n(){var n="WARNING: randomInt is falling back to Math.random for random number generation.";console.warn?console.warn(n):console.log(n),e=!0}function o(n){if("number"!=typeof n||0>n||Math.floor(n)!==n)throw new Error("randomInt.below() not called with a positive integer value.");if(n>9007199254740992)throw new Error("Called randomInt.below() with max == "+n+", which is larger than Javascript can handle with integer precision.")}function r(n){o(n);var e=a(),i=Math.floor(t/n)*n;return i>e?e%n:r(n)}var a,t=9007199254740992,e=!1,i=window.crypto||window.msCrypto||window.cryptoUint32;if(i)a=function(){var n=2097152,o=new Uint32Array(2);return i.getRandomValues(o),o[0]*n+(o[1]>>21)};else{var l="ERROR: randomInt could not find a suitable crypto.getRandomValues() function.";console.error?console.error(l):console.log(l),a=function(){if(e)return Math.floor(Math.random()*t);throw new Error("randomInt cannot get random values.")}}return{below:r,enableInsecureMathRandomFallback:n}}()
  }
}

scramblers["minx"] = (function() {
 
  var linelen=10;
  var linenbr=7;
  
  function parse() {
  	/*
  	var urlquery=location.href.split("?")
  	if(urlquery.length>1){
  		var urlterms=urlquery[1].split("&")
  		for( var i=0; i<urlterms.length; i++){
  			var urllr=urlterms[i].split("=");
  			if(urllr[0]==="ll") {
  				if(urllr[1]-0 >= 1 ) linelen=urllr[1]-0;
  			} else if(urllr[0]==="ln"){
  				if(urllr[1]-0 >= 1 ) linenbr=urllr[1]-0;
  			} else if(urllr[0]==="num"){
  				if(urllr[1]-0 >= 1 ) numcub=urllr[1]-0;
  			}
  		}
  	}
  	*/
  }


  var permU = [4, 0, 1, 2, 3, 9, 5, 6, 7, 8, 10, 11, 12, 13, 58, 59, 16, 17, 18, 63, 20, 21, 22, 23, 24, 14, 15, 27, 28, 29, 19, 31, 32, 33, 34, 35, 25, 26, 38, 39, 40, 30, 42, 43, 44, 45, 46, 36, 37, 49, 50, 51, 41, 53, 54, 55, 56, 57, 47, 48, 60, 61, 62, 52, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131];
  var permUi = [1, 2, 3, 4, 0, 6, 7, 8, 9, 5, 10, 11, 12, 13, 25, 26, 16, 17, 18, 30, 20, 21, 22, 23, 24, 36, 37, 27, 28, 29, 41, 31, 32, 33, 34, 35, 47, 48, 38, 39, 40, 52, 42, 43, 44, 45, 46, 58, 59, 49, 50, 51, 63, 53, 54, 55, 56, 57, 14, 15, 60, 61, 62, 19, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131];
  var permD2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 34, 35, 14, 15, 38, 39, 40, 19, 42, 43, 44, 45, 46, 25, 26, 49, 50, 51, 30, 53, 54, 55, 56, 57, 36, 37, 60, 61, 62, 41, 64, 65, 11, 12, 13, 47, 48, 16, 17, 18, 52, 20, 21, 22, 23, 24, 58, 59, 27, 28, 29, 63, 31, 32, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 124, 125, 121, 122, 123, 129, 130, 126, 127, 128, 131];
  var permD2i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 44, 45, 46, 14, 15, 49, 50, 51, 19, 53, 54, 55, 56, 57, 25, 26, 60, 61, 62, 30, 64, 65, 11, 12, 13, 36, 37, 16, 17, 18, 41, 20, 21, 22, 23, 24, 47, 48, 27, 28, 29, 52, 31, 32, 33, 34, 35, 58, 59, 38, 39, 40, 63, 42, 43, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 123, 124, 125, 121, 122, 128, 129, 130, 126, 127, 131];
  var permR2 = [81, 77, 78, 3, 4, 86, 82, 83, 8, 85, 87, 122, 123, 124, 125, 121, 127, 128, 129, 130, 126, 131, 89, 90, 24, 25, 88, 94, 95, 29, 97, 93, 98, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 26, 22, 23, 48, 30, 31, 27, 28, 53, 32, 69, 70, 66, 67, 68, 74, 75, 71, 72, 73, 76, 101, 102, 103, 99, 100, 106, 107, 108, 104, 105, 109, 46, 47, 79, 80, 45, 51, 52, 84, 49, 50, 54, 0, 1, 2, 91, 92, 5, 6, 7, 96, 9, 10, 15, 11, 12, 13, 14, 20, 16, 17, 18, 19, 21, 113, 114, 110, 111, 112, 118, 119, 115, 116, 117, 120, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65];
  var permR2i = [88, 89, 90, 3, 4, 93, 94, 95, 8, 97, 98, 100, 101, 102, 103, 99, 105, 106, 107, 108, 104, 109, 46, 47, 24, 25, 45, 51, 52, 29, 49, 50, 54, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 81, 77, 78, 48, 85, 86, 82, 83, 53, 87, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 57, 58, 59, 55, 56, 62, 63, 64, 60, 61, 65, 1, 2, 79, 80, 0, 6, 7, 84, 9, 5, 10, 26, 22, 23, 91, 92, 31, 27, 28, 96, 30, 32, 69, 70, 66, 67, 68, 74, 75, 71, 72, 73, 76, 112, 113, 114, 110, 111, 117, 118, 119, 115, 116, 120, 15, 11, 12, 13, 14, 20, 16, 17, 18, 19, 21];

   function applyMove(state, movePerm) {
   	 var stateNew = [];
  	 for (var i = 0; i < 11*12; i++) {
  		stateNew[i] = state[movePerm[i]];
  	 }
  	 return stateNew;
   }
  
  function getRandomScramble(){

	var i;
	var seq =new Array();
	for(i=0; i<linenbr*linelen; i++){
		seq[i]=scramblers.lib.randomInt.below(2);
	}

  	var s="",i,j;

  	var state = [];
  	for (i = 0; i < 12; i++) {
  		for (j = 0; j < 11; j++) {
  			state[i*11+j] = i;
  		}
  	}

  	for(j=0; j<linenbr; j++){
  		for(i=0; i<linelen; i++){
  			if (i%2)
  			{
  				if (seq[j*linelen + i]) {
	  				s+="D++ ";
	  				state = applyMove(state, permD2);
	  			}
  				else {
	  				s+="D-- ";
	  				state = applyMove(state, permD2i);
	  			}
  			}
  			else
  			{
  				if (seq[j*linelen + i]) {
	  				s+="R++ ";
	  				state = applyMove(state, permR2);
	  			}
  				else {
	  				s+="R-- ";
	  				state = applyMove(state, permR2i);
  				}
  			}
  		}
  		if (seq[(j+1)*linelen - 1]) {
	  		s+="U";
	  		state = applyMove(state, permU);
	  	}
  		else {
	  		s+="U'";
			state = applyMove(state, permUi);
	  	}
  		if (j < linenbr-1) {
  			s += "<br>";
  		}
  	}

    return {
      state: state,
      scramble_string: s
    };
  }
  
  var initializeFull = function(continuation, _) {
    
    if (continuation) {
      setTimeout(continuation, 0);
    }
  };


  /*
   * Drawing code.
   * Messy, but it works.
   */
  var edgeFrac = (1+Math.sqrt(5))/4;
  var centerFrac = 0.5;

  Math.TAU = Math.PI * 2;

  var s18 = function(i) {return Math.sin(Math.TAU*i/20);};
  var c18 = function(i) {return Math.cos(Math.TAU*i/20);};

  var colors = [
  	"#FFF",
  	"#008",
  	"#080",
  	"#0FF",
  	"#822",
  	"#8AF",

  	"#F00",
  	"#00F",
  	"#F0F",
  	"#0F0",
  	"#F80",
  	"#FF0",

  ];

	function drawPolygon(r, fillColor, arrx, arry) {

	  var pathString = "";
	  for (var i = 0; i < arrx.length; i++) {
	    pathString += ((i===0) ? "M" : "L") + arrx[i] + "," + arry[i];
	  }
	  pathString += "z";

	  return r.path(pathString).attr({fill: fillColor, stroke: "#000"});
	}

  var drawScramble = function(parentElement, state, w, h) {



    var defaultWidth = 350;
    var defaultHeight = 180;

    var scale = Math.min(w/defaultWidth, h/defaultHeight);

    var dx = (w - (defaultWidth * scale))/2;
    var dy = (h - (defaultHeight * scale))/2;


    // Change this if the SVG element is too large.
    
    var majorR = 36*scale;
    var minorR = majorR * edgeFrac

    var pentR = minorR*2;

    var cx1 = 92*scale + dx;
    var cy1 = 80*scale + dy;

    var cx2 = cx1 + c18(1)*3*pentR;
    var cy2 = cy1 + s18(1)*1*pentR;

    var trans = [
      [0, cx1, cy1, 0, 0],
      [36, cx1, cy1, 1, 1],
      [36+72*1, cx1, cy1, 1, 5],
      [36+72*2, cx1, cy1, 1, 9],
      [36+72*3, cx1, cy1, 1, 13],
      [36+72*4, cx1, cy1, 1, 17],
      [0, cx2, cy2, 1, 7],
      [-72*1, cx2, cy2, 1, 3],
      [-72*2, cx2, cy2, 1, 19],
      [-72*3, cx2, cy2, 1, 15],
      [-72*4, cx2, cy2, 1, 11],
      [36+72*2, cx2, cy2, 0, 0]
    ];

    var r = Raphael(parentElement, w, h);

    //console.log(state);

    var index = 0;

    for (var side = 0; side < 12; side++) {

	    for (var i = 0; i < 5; i++) {

	    	var dx = majorR*(1-centerFrac)/2/Math.tan(Math.TAU/10);
	    	var arrx = [0, dx, 0, -dx];
	    	var arry = [-majorR,- majorR*(1+centerFrac)/2, -majorR*centerFrac, -majorR*(1+centerFrac)/2]

	    	var p = drawPolygon(r, colors[state[index++]], arrx, arry);
	    	//var p = r.circle(0, - circR, circRadius);
	    	//p.attr({fill: colors[state[index++]], stroke: "#000"});
	    	p.translate(trans[side][1] + trans[side][3]*c18(trans[side][4])*pentR, trans[side][2] + trans[side][3]*s18(trans[side][4])*pentR);
			p.rotate(72*i + trans[side][0], 0, 0);
	    }

	    for (var i = 0; i < 5; i++) {

	    	var sx = Math.tan(Math.TAU/10);
	    	var arrx = [c18(-1)*majorR - dx, dx, 0, s18(4)*centerFrac*majorR];
	    	var arry = [s18(-1)*majorR - majorR + majorR*(1+centerFrac)/2,- majorR*(1+centerFrac)/2, -majorR*centerFrac, -c18(4)*centerFrac*majorR]

	    	var p = drawPolygon(r, colors[state[index++]], arrx, arry);
	    	p.translate(trans[side][1] + trans[side][3]*c18(trans[side][4])*pentR, trans[side][2] + trans[side][3]*s18(trans[side][4])*pentR);
	    	p.rotate(72*i + trans[side][0], 0, 0);
	    }

	    var arrx = [s18(0)*centerFrac*majorR, s18(4)*centerFrac*majorR, s18(8)*centerFrac*majorR, s18(12)*centerFrac*majorR, s18(16)*centerFrac*majorR];
	    var arry = [-c18(0)*centerFrac*majorR, -c18(4)*centerFrac*majorR, -c18(8)*centerFrac*majorR, -c18(12)*centerFrac*majorR, -c18(16)*centerFrac*majorR];

	    var p = drawPolygon(r, colors[state[index++]], arrx, arry);
	    p.translate(trans[side][1] + trans[side][3]*c18(trans[side][4])*pentR, trans[side][2] + trans[side][3]*s18(trans[side][4])*pentR);
	    p.rotate(trans[side][0], 0, 0);
	}

	//console.log(index);

  };

  
  return {
    /* mark2 interface */
    version: "July 05, 2015",
    initialize: initializeFull,
    setRandomSource: function() {console.log("setRandomSource is deprecated. It has no effect anymore.")},
    getRandomScramble: getRandomScramble,
    drawScramble: drawScramble,

    /* Other methods */
  };
})();

/* Base script written by Jaap Scherphuis, jaapsch a t yahoo d o t com */
/* Javascript written by Syoji Takamatsu, , red_dragon a t honki d o t net */
/* Random-State modification by Lucas Garron (lucasg a t gmx d o t de / garron.us) in collaboration with Michael Gottlieb (mzrg.com)*/
/* Optimal modification by Michael Gottlieb (qqwref a t gmail d o t com) from Jaap's code */
/* Version 1.0*/
"use strict";
if (typeof scramblers == "undefined") {
  var scramblers = {};
  scramblers.lib = {
    // https://github.com/lgarron/randomInt.js
    randomInt: function(){function n(){var n="WARNING: randomInt is falling back to Math.random for random number generation.";console.warn?console.warn(n):console.log(n),e=!0}function o(n){if("number"!=typeof n||0>n||Math.floor(n)!==n)throw new Error("randomInt.below() not called with a positive integer value.");if(n>9007199254740992)throw new Error("Called randomInt.below() with max == "+n+", which is larger than Javascript can handle with integer precision.")}function r(n){o(n);var e=a(),i=Math.floor(t/n)*n;return i>e?e%n:r(n)}var a,t=9007199254740992,e=!1,i=window.crypto||window.msCrypto||window.cryptoUint32;if(i)a=function(){var n=2097152,o=new Uint32Array(2);return i.getRandomValues(o),o[0]*n+(o[1]>>21)};else{var l="ERROR: randomInt could not find a suitable crypto.getRandomValues() function.";console.error?console.error(l):console.log(l),a=function(){if(e)return Math.floor(Math.random()*t);throw new Error("randomInt cannot get random values.")}}return{below:r,enableInsecureMathRandomFallback:n}}()
  }
}

scramblers["pyram"] = (function() {

  var numcub = 1;

  var colorString = "xgryb";  //In dlburf order. May use any colours in colorList below


  // list of available colours
  var colorList = [
   'g', "green.jpg",  "green",
   'r', "red.jpg",    "red",
   'y', "yellow.jpg", "yellow",
   'b', "blue.jpg",   "blue",
   'w', "white.jpg",  "white",
   'o', "orange.jpg","orange",   // 'orange' is not an official html colour name
   'p', "purple.jpg", "purple",
   '0', "gray.jpg",   "grey"      // used for unrecognised letters, or when zero used.
  ];
  // layout
  var layout =
   [1,2,1,2,1,0,2,0,1,2,1,2,1,
    0,1,2,1,0,2,1,2,0,1,2,1,0,
    0,0,1,0,2,1,2,1,2,0,1,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,1,2,1,2,1,0,0,0,0,
    0,0,0,0,0,1,2,1,0,0,0,0,0,
    0,0,0,0,0,0,1,0,0,0,0,0,0];

  var seq   = []; // move sequences
  var colmap = []; // color map
  var colors = []; //stores colours used
  var scramblestring = [];

  function parse() {

    /*
   var s = "";
   var urlquery = location.href.split("?")
   if(urlquery.length > 1) {
    var urlterms = urlquery[1].split("&")
    for( var i = 0; i < urlterms.length; i++) {
     var urllr = urlterms[i].split("=");
     if(urllr[0] == "num") {
      if(urllr[1] - 0 >= 1 )
       numcub = urllr[1] - 0;
     }
     else if(urllr[0] == "col") {
      if(urllr[1].length==4)
       colorString = urllr[1];
     }
    }
   }
   */

   // expand colour string into 6 actual html color names
   for(var k = 0; k < 6; k++){
    colors[k+1] = colorList.length - 3; // gray
    for( var i = 0; i < colorList.length; i += 3) {
     if( colorString.charAt(k) == colorList[i]) {
      colors[k+1] = i; // not use index 0
      break;
     }
    }
   }
  }
  parse();

  function init_colors(n){
   colmap[n] =
    [1,1,1,1,1,0,2,0,3,3,3,3,3,
     0,1,1,1,0,2,2,2,0,3,3,3,0,
     0,0,1,0,2,2,2,2,2,0,3,0,0,
     0,0,0,0,0,0,0,0,0,0,0,0,0,
     0,0,0,0,4,4,4,4,4,0,0,0,0,
     0,0,0,0,0,4,4,4,0,0,0,0,0,
     0,0,0,0,0,0,4,0,0,0,0,0,0];
  }

  function scramble()
  {
   var i, j, n, ls, t;

   for( n = 0; n < numcub; n++){
    initbrd();
    dosolve();

    scramblestring[n]="";
    init_colors(n);
    for (i=0;i<sol.length;i++) {
     scramblestring[n] += ["U","L","R","B"][sol[i]&7] + ["","'"][(sol[i]&8)/8] + " ";
     picmove([3,0,1,2][sol[i]&7],1+(sol[i]&8)/8,n);
    }
    var tips=["l","r","b","u"];
    for (i=0;i<4;i++) {
     var j = scramblers.lib.randomInt.below(3);
     if (j < 2) {
      scramblestring[n] += tips[i] + ["","'"][j] + " ";
      picmove(4+i,1+j,n);
     }
    }
   }
  }

  var posit = [];
  var mode;
  var edt;
  var perm=[];   // pruning table for edge permutation
  var twst=[];   // pruning table for edge orientation+twist
  var permmv=[]; // transition table for edge permutation
  var twstmv=[]; // transition table for edge orientation+twist
  var sol=[];
  var pcperm = [];
  var pcori  = [];
  var soltimer;

  function initbrd(){
      if( mode==4 ) clearTimeout(soltimer);
      posit = [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3];
      mode=0;
      sol.length=0;
  }

  function solved(){
      for (var i=1;i<9; i++){
          if( posit[i   ]!=posit[0 ] ) return(false);
          if( posit[i+9 ]!=posit[9 ] ) return(false);
          if( posit[i+18]!=posit[18] ) return(false);
          if( posit[i+27]!=posit[27] ) return(false);
      }
      return(true);
  }

  var edges = [2,11, 1,20, 4,31, 10,19, 13,29, 22,28];

  var movelist=[];
  movelist[0 ]=[0, 18,9,   6, 24,15,  1, 19,11,  2, 20,10];  //U
  movelist[1 ]=[23,3, 30,  26,7, 34,  22,1, 31,  20,4, 28];  //L
  movelist[2 ]=[5, 14,32,  8, 17,35,  4, 11,29,  2, 13,31];  //R
  movelist[3 ]=[12,21,27,  16,25,33,  13,19,28,  10,22,29];  //B

  function domove(m){
      for(var i=0;i<movelist[m].length; i+=3){
          var c=posit[movelist[m][i]];
          posit[movelist[m][i  ]]=posit[movelist[m][i+2]];
          posit[movelist[m][i+2]]=posit[movelist[m][i+1]];
          posit[movelist[m][i+1]]=c;
      }
  }

  function dosolve(){
      var a,b,c,l,t=0,q=0;
      // Get a random permutation and orientation.
      var parity = 0;
      pcperm = [0,1,2,3,4,5];
      for (var i=0;i<4;i++) {
       var other = i + scramblers.lib.randomInt.below(6-i);
       var temp = pcperm[i];
       pcperm[i] = pcperm[other];
       pcperm[other] = temp;
       if (i != other) parity++;
      }
      if (parity%2 == 1) {
       var temp = pcperm[4];
       pcperm[4] = pcperm[5];
       pcperm[5] = temp;
      }
      parity=0;
      pcori = [];
      for (var i=0;i<5;i++) {
       pcori[i] = scramblers.lib.randomInt.below(2);
       parity += pcori[i];
      }
      pcori[5] = parity % 2;
      for (var i=6;i<10;i++) {
       pcori[i] = scramblers.lib.randomInt.below(3);
      }

      for(a=0;a<6;a++){
          b=0;
          for(c=0;c<6;c++){
              if(pcperm[c]==a)break;
              if(pcperm[c]>a)b++;
          }
          q=q*(6-a)+b;
      }
      //corner orientation
      for(a=9;a>=6;a--){
          t=t*3+pcori[a];
      }
      //edge orientation
      for(a=4;a>=0;a--){
          t=t*2+pcori[a];
      }

      // solve it
      if(q!=0 || t!=0){
          for(l=7;l<12;l++){  //allow solutions from 7 through 11 moves
              if(search(q,t,l,-1)) break;
          }
      }
  }

  function search(q,t,l,lm){
      //searches for solution, from position q|t, in l moves exactly. last move was lm, current depth=d
      if(l==0){
          if(q==0 && t==0){
              return(true);
          }
      }else{
          if(perm[q]>l || twst[t]>l) return(false);
          var p,s,a,m;
          for(m=0;m<4;m++){
              if(m!=lm){
                  p=q; s=t;
                  for(a=0;a<2;a++){
                      p=permmv[p][m];
                      s=twstmv[s][m];
                      sol[sol.length]=m+8*a;
                      if(search(p,s,l-1,m)) return(true);
                      sol.length--;
                  }
              }
          }
      }
      return(false);
  }


  function calcperm(){
      var c,p,q,l,m,n;
      //calculate solving arrays
      //first permutation
      // initialise arrays
      for(p=0;p<720;p++){
          perm[p]=-1;
          permmv[p]=[];
          for(m=0;m<4;m++){
              permmv[p][m]=getprmmv(p,m);
          }
      }
      //fill it
      perm[0]=0;
      for(l=0;l<=6;l++){
          n=0;
          for(p=0;p<720;p++){
              if(perm[p]==l){
                  for(m=0;m<4;m++){
                      q=p;
                      for(c=0;c<2;c++){
                          q=permmv[q][m];
                          if(perm[q]==-1) { perm[q]=l+1; n++; }
                      }
                  }
              }
          }
      }
      //then twist
      // initialise arrays
      for(p=0;p<2592;p++){
          twst[p]=-1;
          twstmv[p]=[];
          for(m=0;m<4;m++){
              twstmv[p][m]=gettwsmv(p,m);
          }
      }
      //fill it
      twst[0]=0;
      for(l=0;l<=5;l++){
          n=0;
          for(p=0;p<2592;p++){
              if(twst[p]==l){
                  for(m=0;m<4;m++){
                      q=p;
                      for(c=0;c<2;c++){
                          q=twstmv[q][m];
                          if(twst[q]==-1) { twst[q]=l+1; n++; }
                      }
                  }
              }
          }
      }
  }

  function getprmmv(p,m){
      //given position p<720 and move m<4, return new position number

      //convert number into array
      var a,b,c;
      var ps=[];
      var q=p;
      for(a=1;a<=6;a++){
          c=Math.floor(q/a);
          b=q-a*c;
          q=c;
          for(c=a-1;c>=b;c--) ps[c+1]=ps[c];
          ps[b]=6-a;
      }
      //perform move on array
      if(m==0){
          //U
          cycle3(ps, 0, 3, 1);
      }else if(m==1){
          //L
          cycle3(ps, 1, 5, 2);
      }else if(m==2){
          //R
          cycle3(ps, 0, 2, 4);
      }else if(m==3){
          //B
          cycle3(ps, 3, 4, 5);
      }
      //convert array back to number
      q=0;
      for(a=0;a<6;a++){
          b=0;
          for(c=0;c<6;c++){
              if(ps[c]==a)break;
              if(ps[c]>a)b++;
          }
          q=q*(6-a)+b;
      }
      return(q)
  }
  function gettwsmv(p,m){
      //given position p<2592 and move m<4, return new position number

      //convert number into array;
      var a,b,c,d=0;
      var ps=[];
      var q=p;

      //first edge orientation
      for(a=0;a<=4;a++){
          ps[a]=q&1;
          q>>=1;
          d^=ps[a];
      }
      ps[5]=d;

      //next corner orientation
      for(a=6;a<=9;a++){
          c=Math.floor(q/3);
          b=q-3*c;
          q=c;
          ps[a]=b;
      }

      //perform move on array
      if(m==0){
          //U
          ps[6]++; if(ps[6]==3) ps[6]=0;
          cycle3(ps, 0, 3, 1);
          ps[1]^=1;ps[3]^=1;
      }else if(m==1){
          //L
          ps[7]++; if(ps[7]==3) ps[7]=0;
          cycle3(ps, 1, 5, 2);
          ps[2]^=1; ps[5]^=1;
      }else if(m==2){
          //R
          ps[8]++; if(ps[8]==3) ps[8]=0;
          cycle3(ps, 0, 2, 4);
          ps[0]^=1; ps[2]^=1;
      }else if(m==3){
          //B
          ps[9]++; if(ps[9]==3) ps[9]=0;
          cycle3(ps, 3, 4, 5);
          ps[3]^=1; ps[4]^=1;
      }
      //convert array back to number
      q=0;
      //corner orientation
      for(a=9;a>=6;a--){
          q=q*3+ps[a];
      }
      //corner orientation
      for(a=4;a>=0;a--){
          q=q*2+ps[a];
      }
      return(q);
  }

  function picmove(type, direction, n){
   switch(type) {
    case 0: // L
     rotate3(n, 14,58,18, direction);
     rotate3(n, 15,57,31, direction);
     rotate3(n, 16,70,32, direction);
     rotate3(n, 30,28,56, direction);
     break;
    case 1: // R
     rotate3(n, 32,72,22, direction);
     rotate3(n, 33,59,23, direction);
     rotate3(n, 20,58,24, direction);
     rotate3(n, 34,60,36, direction);
     break;
    case 2: // B
     rotate3(n, 14,10,72, direction);
     rotate3(n,  1,11,71, direction);
     rotate3(n,  2,24,70, direction);
     rotate3(n,  0,12,84, direction);
     break;
    case 3: // U
     rotate3(n,  2,18,22, direction);
     rotate3(n,  3,19, 9, direction);
     rotate3(n, 16,20,10, direction);
     rotate3(n,  4, 6, 8, direction);
     break;
    case 4: // l
     rotate3(n, 30,28,56, direction);
     break;
    case 5: // r
     rotate3(n, 34,60,36, direction);
     break;
    case 6: // b
     rotate3(n,  0,12,84, direction);
     break;
    case 7: // u
     rotate3(n,  4, 6, 8, direction);
     break;
   }
  }

  function rotate3(n, v1, v2, v3, clockwise)
  {
   if(clockwise == 2) {
    cycle3(colmap[n], v3, v2, v1);
   } else {
    cycle3(colmap[n], v1, v2, v3);
   }
  }

  function cycle3(arr, i1, i2, i3) {
   var c = arr[i1];
   arr[i1] = arr[i2];
   arr[i2] = arr[i3];
   arr[i3] = c;
  }

  function draw_triangle(pat, color, val)
  {
     var s = "";
     if(pat == 1) {
        s += "<table border=0 cellpadding=0 cellspacing=0>";
        s += "<tr>";
        for(var c=1; c<=12; c++){
           s += "<td width=1 height=2><img src='scrbg/" +colorList[colors[color] + 1] +  "' height='2px' width='1px'></td>";
        }
        s += "</tr>";

        for(var i = 1; i <= 5; i++) {
           s += "<tr>";
           s += "<td colspan=" + i + " width=" + i + " height=2 bgcolor=silver></td>";
           s += "<td colspan=" + (12 - i * 2) + " width=" + (12 - i * 2) + " height=2><img src='scrbg/" +colorList[colors[color] + 1] +  "' height='2px' width='"+(12 - i * 2)+"px'></td>";
           s += "<td colspan=" + i + " width=" + i + " height=2 bgcolor=silver></td>";
           s += "</tr>";
        }

        s += "</table>";
     }
     else if(pat == 2) {
        s += "<table border=0 cellpadding=0 cellspacing=0>";
        for(var i = 5; i >= 1; i--) {
           s += "<tr>";
           s += "<td colspan=" + i + " width=" + i + " height=2 bgcolor=silver></td>";
           s += "<td colspan=" + (12 - i * 2) + " width=" + (12 - i * 2) + " height=2><img src='scrbg/" +colorList[colors[color] + 1] +  "' height='2px' width='"+(12 - i * 2)+"px'></td>";
           s += "<td colspan=" + i + " width=" + i + " height=2 bgcolor=silver></td>";
           s += "</tr>";
        }

        s += "<tr>";
        for(var c=1; c<=12; c++){
           s += "<td width=1 height=2><img src='scrbg/" +colorList[colors[color] + 1] +  "' height='2px' width='1px'></td>";
        }
        s += "</tr>";
        s += "</table>";
     }
     else {
        s += "&nbsp;";
     }
     return s;
  }

  function imagetable(n)
  {
  	var x,y;
  	var s = "<table border=0 cellpadding=0 cellspacing=0>";

  	for(var y = 0; y < 7; y++) {
  		s += "<tr>";
  		for(var x = 0; x < 13; x++) {
  			s += "<td>";
  			s += draw_triangle(layout[y * 13 + x], colmap[n][y * 13 + x], "");
  			s += "</td>";
  		}
  		s += "</tr>";
  	}
  	s += "</table>";
  	return s;
  }

  /* Methods added by Lucas. */

  var getRandomScramble = function() {
    initializeFull();
    scramble();

    return {
      state: colmap,
      scramble_string: scramblestring[0]
    };
  };

  var initialized = false;

  var initializeFull = function(continuation, _) {

    if (initialized) {
      return;
    }
    initialized = true;

    parse();
    calcperm();

    if (continuation) {
      setTimeout(continuation, 0);
    }
  };



  var border = 15;
  var width = 18;
  //URFLBD
  var drawingCenters = [
    [border + width/2*1, border + width/2*1],
    [border + width/2*5, border + width/2*3],
    [border + width/2*3, border + width/2*3],
    [border + width/2*1, border + width/2*3],
    [border + width/2*7, border + width/2*3],
    [border + width/2*3, border + width/2*5],
  ];


  function colorGet(col){
    if (col==="r") return ("#F94F2D");
    if (col==="o") return ("#FFA643");
    if (col==="b") return ("#43C4F3");
    if (col==="g") return ("#7AC78B");
    if (col==="y") return ("#FFED71");
    if (col==="w") return ("#FFFFFF");
    if (col==="x") return ("#000000");
  }

  var scalePoint = function(w, h, ptIn) {

    var defaultWidth = border*2+width*9;
    var defaultHeight = border*2+width*5.3;


    var scale = Math.min(w/defaultWidth, h/defaultHeight);

    var x = Math.floor(ptIn[0]*scale + (w - (defaultWidth * scale))/2) + 0.5;
    var y = Math.floor(ptIn[1]*scale + (h - (defaultHeight * scale))/2) + 0.5;

    return [x, y];
  }

  function drawTriangle(r, canvasWidth, canvasHeight, cx, cy, w, h, direction, fillColor) {

    var dM = 1; // Direction Multiplier
    if (direction == 2) {
      dM = -1;
    }

    var arrx = [cx, cx - w, cx + w];
    var arry = [cy + h * dM, cy - h * dM, cy - h * dM];

    var pathString = "";
    for (var i = 0; i < arrx.length; i++) {
      var scaledPoint = scalePoint(canvasWidth, canvasHeight, [arrx[i], arry[i]]);
      pathString += ((i===0) ? "M" : "L") + scaledPoint[0] + "," + scaledPoint[1];
    }
    pathString += "z";

    r.path(pathString).attr({fill: colorGet(fillColor), stroke: "#000"})
  }

  var drawScramble = function(parentElement, state, w, h) {

    var r = Raphael(parentElement, w, h);

    for(var y = 0; y < 7; y++) {
      for(var x = 0; x < 13; x++) {
        var col = state[0][y * 13 + x];
        if (col != 0) {
          var xx = border + width + x*width/2*2/Math.sqrt(3);
          var yy = border + y * width;
          if (y > 3) {
            yy -= width/2;
          }
          drawTriangle(r, w, h, xx, yy, width/2*2/Math.sqrt(3), width/2, layout[y * 13 + x], colorString[col]);
        }
      }
    }

  }

  return {
    /* mark2 interface */
    version: "July 05, 2015",
    initialize: initializeFull,
    setRandomSource: function() {console.log("setRandomSource is deprecated. It has no effect anymore.")},
    getRandomScramble: getRandomScramble,
    drawScramble: drawScramble,

    /* Other methods */
  };
})();

/*

scramble_sq1.js

Square-1 Solver / Scramble Generator in Javascript.

Code by by Shuang Chen.
Compiled to Javascript using GWT.

*/

if (typeof scramblers === "undefined") {
  var scramblers = {};
  scramblers.lib = {
    // https://github.com/lgarron/randomInt.js
    randomInt: function(){function n(){var n="WARNING: randomInt is falling back to Math.random for random number generation.";console.warn?console.warn(n):console.log(n),e=!0}function o(n){if("number"!=typeof n||0>n||Math.floor(n)!==n)throw new Error("randomInt.below() not called with a positive integer value.");if(n>9007199254740992)throw new Error("Called randomInt.below() with max == "+n+", which is larger than Javascript can handle with integer precision.")}function r(n){o(n);var e=a(),i=Math.floor(t/n)*n;return i>e?e%n:r(n)}var a,t=9007199254740992,e=!1,i=window.crypto||window.msCrypto||window.cryptoUint32;if(i)a=function(){var n=2097152,o=new Uint32Array(2);return i.getRandomValues(o),o[0]*n+(o[1]>>21)};else{var l="ERROR: randomInt could not find a suitable crypto.getRandomValues() function.";console.error?console.error(l):console.log(l),a=function(){if(e)return Math.floor(Math.random()*t);throw new Error("randomInt cannot get random values.")}}return{below:r,enableInsecureMathRandomFallback:n}}()
  }
}

scramblers["sq1"] = (function() {


function nullMethod(){
}

function FullCube_copy(obj, c){
  obj.ul = c.ul;
  obj.ur = c.ur;
  obj.dl = c.dl;
  obj.dr = c.dr;
  obj.ml = c.ml;
}

function FullCube_doMove(obj, move){
  var temp;
  move <<= 2;
  if (move > 24) {
    move = 48 - move;
    temp = obj.ul;
    obj.ul = (~~obj.ul >> move | obj.ur << 24 - move) & 16777215;
    obj.ur = (~~obj.ur >> move | temp << 24 - move) & 16777215;
  }
   else if (move > 0) {
    temp = obj.ul;
    obj.ul = (obj.ul << move | ~~obj.ur >> 24 - move) & 16777215;
    obj.ur = (obj.ur << move | ~~temp >> 24 - move) & 16777215;
  }
   else if (move == 0) {
    temp = obj.ur;
    obj.ur = obj.dl;
    obj.dl = temp;
    obj.ml = 1 - obj.ml;
  }
   else if (move >= -24) {
    move = -move;
    temp = obj.dl;
    obj.dl = (obj.dl << move | ~~obj.dr >> 24 - move) & 16777215;
    obj.dr = (obj.dr << move | ~~temp >> 24 - move) & 16777215;
  }
   else if (move < -24) {
    move = 48 + move;
    temp = obj.dl;
    obj.dl = (~~obj.dl >> move | obj.dr << 24 - move) & 16777215;
    obj.dr = (~~obj.dr >> move | temp << 24 - move) & 16777215;
  }
}

function FullCube_getParity(obj){
  var a, b, cnt, i, p;
  cnt = 0;
  obj.arr[0] = FullCube_pieceAt(obj, 0);
  for (i = 1; i < 24; ++i) {
    FullCube_pieceAt(obj, i) != obj.arr[cnt] && (obj.arr[++cnt] = FullCube_pieceAt(obj, i));
  }
  p = 0;
  for (a = 0; a < 16; ++a) {
    for (b = a + 1; b < 16; ++b) {
      obj.arr[a] > obj.arr[b] && (p ^= 1);
    }
  }
  return p;
}

function FullCube_getShapeIdx(obj){
  var dlx, drx, ulx, urx;
  urx = obj.ur & 1118481;
  urx |= ~~urx >> 3;
  urx |= ~~urx >> 6;
  urx = urx & 15 | ~~urx >> 12 & 48;
  ulx = obj.ul & 1118481;
  ulx |= ~~ulx >> 3;
  ulx |= ~~ulx >> 6;
  ulx = ulx & 15 | ~~ulx >> 12 & 48;
  drx = obj.dr & 1118481;
  drx |= ~~drx >> 3;
  drx |= ~~drx >> 6;
  drx = drx & 15 | ~~drx >> 12 & 48;
  dlx = obj.dl & 1118481;
  dlx |= ~~dlx >> 3;
  dlx |= ~~dlx >> 6;
  dlx = dlx & 15 | ~~dlx >> 12 & 48;
  return Shape_getShape2Idx(FullCube_getParity(obj) << 24 | ulx << 18 | urx << 12 | dlx << 6 | drx);
}

function FullCube_getSquare(obj, sq){
  var a, b;
  for (a = 0; a < 8; ++a) {
    obj.prm[a] = ~~(~~FullCube_pieceAt(obj, a * 3 + 1) >> 1 << 24) >> 24;
  }
  sq.cornperm = get8Perm(obj.prm);
  sq.topEdgeFirst = FullCube_pieceAt(obj, 0) == FullCube_pieceAt(obj, 1);
  a = sq.topEdgeFirst?2:0;
  for (b = 0; b < 4; a += 3 , ++b)
    obj.prm[b] = ~~(~~FullCube_pieceAt(obj, a) >> 1 << 24) >> 24;
  sq.botEdgeFirst = FullCube_pieceAt(obj, 12) == FullCube_pieceAt(obj, 13);
  a = sq.botEdgeFirst?14:12;
  for (; b < 8; a += 3 , ++b)
    obj.prm[b] = ~~(~~FullCube_pieceAt(obj, a) >> 1 << 24) >> 24;
  sq.edgeperm = get8Perm(obj.prm);
  sq.ml = obj.ml;
}

function FullCube_pieceAt(obj, idx){
  var ret;
  idx < 6?(ret = ~~obj.ul >> (5 - idx << 2)):idx < 12?(ret = ~~obj.ur >> (11 - idx << 2)):idx < 18?(ret = ~~obj.dl >> (17 - idx << 2)):(ret = ~~obj.dr >> (23 - idx << 2));
  return ~~((ret & 15) << 24) >> 24;
}

function FullCube_setPiece(obj, idx, value) {
  if (idx < 6) {
		obj.ul &= ~(0xf << ((5-idx) << 2));
		obj.ul |= value << ((5-idx) << 2);
	} else if (idx < 12) {
		obj.ur &= ~(0xf << ((11-idx) << 2));
		obj.ur |= value << ((11-idx) << 2);
	} else if (idx < 18) {
		obj.dl &= ~(0xf << ((17-idx) << 2));
		obj.dl |= value << ((17-idx) << 2);
	} else {
		obj.dr &= ~(0xf << ((23-idx) << 2));
		obj.dr |= value << ((23-idx) << 2);
	}
}


function FullCube_FullCube__Ljava_lang_String_2V(){
  this.arr = [];
  this.prm = [];
}

function FullCube_randomCube(){
	var f, i, shape, edge, corner, n_edge, n_corner, rnd, m;
	f = new FullCube_FullCube__Ljava_lang_String_2V;
	shape = Shape_ShapeIdx[~~(scramblers.lib.randomInt.below(3678))];
	corner = 0x01234567 << 1 | 0x11111111;
	edge = 0x01234567 << 1;
	n_corner = n_edge = 8;
	for (i=0; i<24; i++) {
		if (((shape >> i) & 1) == 0) {//edge
			rnd = ~~(scramblers.lib.randomInt.below(n_edge)) << 2;
			FullCube_setPiece(f, 23-i, (edge >> rnd) & 0xf);
			m = (1 << rnd) - 1;
			edge = (edge & m) + ((edge >> 4) & ~m);
			--n_edge;
		} else {//corner
			rnd = ~~(scramblers.lib.randomInt.below(n_corner)) << 2;
			FullCube_setPiece(f, 23-i, (corner >> rnd) & 0xf);
			FullCube_setPiece(f, 22-i, (corner >> rnd) & 0xf);
			m = (1 << rnd) - 1;
			corner = (corner & m) + ((corner >> 4) & ~m);
			--n_corner;
			++i;
		}
	}
	f.ml = ~~(scramblers.lib.randomInt.below(2));
//	console.log(f);
	return f;
}


function FullCube(){
}

_ = FullCube_FullCube__Ljava_lang_String_2V.prototype = FullCube.prototype;
_.dl = 10062778;
_.dr = 14536702;
_.ml = 0;
_.ul = 70195;
_.ur = 4544119;
var FullCube_gen;
function Search_init2(obj){
  var corner, edge, i, j, ml, prun;
  FullCube_copy(obj.Search_d, obj.Search_c);
  for (i = 0; i < obj.Search_length1; ++i) {
    FullCube_doMove(obj.Search_d, obj.Search_move[i]);
  }
  FullCube_getSquare(obj.Search_d, obj.Search_sq);
  edge = obj.Search_sq.edgeperm;
  corner = obj.Search_sq.cornperm;
  ml = obj.Search_sq.ml;
  prun = Math.max( SquarePrun[obj.Search_sq.edgeperm << 1 | ml], SquarePrun[obj.Search_sq.cornperm << 1 | ml]);
  for (i = prun; i < obj.Search_maxlen2; ++i) {
    if (Search_phase2(obj, edge, corner, obj.Search_sq.topEdgeFirst, obj.Search_sq.botEdgeFirst, ml, i, obj.Search_length1, 0)) {
      for (j = 0; j < i; ++j) {
        FullCube_doMove(obj.Search_d, obj.Search_move[obj.Search_length1 + j]);
        //console.log(obj.Search_move[obj.Search_length1 + j]);
      }
      //console.log(obj.Search_d);
      //console.log(obj.Search_move);
      obj.Search_sol_string = Search_move2string(obj, i + obj.Search_length1);
      return true;
    }
  }
  return false;
}

function Search_move2string(obj, len) {
  var s = "";
  var top = 0, bottom = 0;
  for (var i=len-1; i>=0; i--) {
    var val = obj.Search_move[i];
    //console.log(val);
    if (val > 0) {
      val = 12 - val;
      top = (val > 6) ? (val-12) : val;
    } else if (val < 0) {
      val = 12 + val
      bottom = (val > 6) ? (val-12) : val;
    } else {
      if (top == 0 && bottom == 0) {
        s += " / "
      } else {
        s += "(" + top + ", " + bottom + ") / ";
      }
      top = bottom = 0;
    }
  }
  if (top == 0 && bottom == 0) {
  } else {
    s += "(" + top + ", " + bottom + ")";
  }
  return s;// + " (" + len + "t)";
}

function Search_phase1(obj, shape, prunvalue, maxl, depth, lm){
  var m, prunx, shapex;
  if (prunvalue == 0 && maxl < 4) {
    return maxl == 0 && Search_init2(obj);
  }
  if (lm != 0) {
    shapex =  Shape_TwistMove[shape];
    prunx = ShapePrun[shapex];
    if (prunx < maxl) {
      obj.Search_move[depth] = 0;
      if (Search_phase1(obj, shapex, prunx, maxl - 1, depth + 1, 0)) {
        return true;
      }
    }
  }
  shapex = shape;
  if (lm <= 0) {
    m = 0;
    while (true) {
      m +=  Shape_TopMove[shapex];
      shapex = ~~m >> 4;
      m &= 15;
      if (m >= 12) {
        break;
      }
      prunx = ShapePrun[shapex];
      if (prunx > maxl) {
        break;
      }
       else if (prunx < maxl) {
        obj.Search_move[depth] = m;
        if (Search_phase1(obj, shapex, prunx, maxl - 1, depth + 1, 1)) {
          return true;
        }
      }
    }
  }
  shapex = shape;
  if (lm <= 1) {
    m = 0;
    while (true) {
      m +=  Shape_BottomMove[shapex];
      shapex = ~~m >> 4;
      m &= 15;
      if (m >= 6) {
        break;
      }
      prunx = ShapePrun[shapex];
      if (prunx > maxl) {
        break;
      }
       else if (prunx < maxl) {
        obj.Search_move[depth] = -m;
        if (Search_phase1(obj, shapex, prunx, maxl - 1, depth + 1, 2)) {
          return true;
        }
      }
    }
  }
  return false;
}

function Search_phase2(obj, edge, corner, topEdgeFirst, botEdgeFirst, ml, maxl, depth, lm){
  var botEdgeFirstx, cornerx, edgex, m, prun1, prun2, topEdgeFirstx;
  if (maxl == 0 && !topEdgeFirst && botEdgeFirst) {
    return true;
  }
  if (lm != 0 && topEdgeFirst == botEdgeFirst) {
    edgex =  Square_TwistMove[edge];
    cornerx = Square_TwistMove[corner];
    if (SquarePrun[edgex << 1 | 1 - ml] < maxl && SquarePrun[cornerx << 1 | 1 - ml] < maxl) {
      obj.Search_move[depth] = 0;
      if (Search_phase2(obj, edgex, cornerx, topEdgeFirst, botEdgeFirst, 1 - ml, maxl - 1, depth + 1, 0)) {
        return true;
      }
    }
  }
  if (lm <= 0) {
    topEdgeFirstx = !topEdgeFirst;
    edgex = topEdgeFirstx? Square_TopMove[edge]:edge;
    cornerx = topEdgeFirstx?corner: Square_TopMove[corner];
    m = topEdgeFirstx?1:2;
    prun1 =  SquarePrun[edgex << 1 | ml];
    prun2 = SquarePrun[cornerx << 1 | ml];
    while (m < 12 && prun1 <= maxl && prun1 <= maxl) {
      if (prun1 < maxl && prun2 < maxl) {
        obj.Search_move[depth] = m;
        if (Search_phase2(obj, edgex, cornerx, topEdgeFirstx, botEdgeFirst, ml, maxl - 1, depth + 1, 1)) {
          return true;
        }
      }
      topEdgeFirstx = !topEdgeFirstx;
      if (topEdgeFirstx) {
        edgex = Square_TopMove[edgex];
        prun1 = SquarePrun[edgex << 1 | ml];
        m += 1;
      }
       else {
        cornerx = Square_TopMove[cornerx];
        prun2 = SquarePrun[cornerx << 1 | ml];
        m += 2;
      }
    }
  }
  if (lm <= 1) {
    botEdgeFirstx = !botEdgeFirst;
    edgex = botEdgeFirstx? Square_BottomMove[edge]:edge;
    cornerx = botEdgeFirstx?corner: Square_BottomMove[corner];
    m = botEdgeFirstx?1:2;
    prun1 =  SquarePrun[edgex << 1 | ml];
    prun2 = SquarePrun[cornerx << 1 | ml];
    while (m < (maxl > 3?6:12) && prun1 <= maxl && prun1 <= maxl) {
      if (prun1 < maxl && prun2 < maxl) {
        obj.Search_move[depth] = -m;
        if (Search_phase2(obj, edgex, cornerx, topEdgeFirst, botEdgeFirstx, ml, maxl - 1, depth + 1, 2)) {
          return true;
        }
      }
      botEdgeFirstx = !botEdgeFirstx;
      if (botEdgeFirstx) {
        edgex = Square_BottomMove[edgex];
        prun1 = SquarePrun[edgex << 1 | ml];
        m += 1;
      }
       else {
        cornerx = Square_BottomMove[cornerx];
        prun2 = SquarePrun[cornerx << 1 | ml];
        m += 2;
      }
    }
  }
  return false;
}

function Search_solution(obj, c){
  var shape;
  obj.Search_c = c;
  shape = FullCube_getShapeIdx(c);
  //console.log(shape);
  for (obj.Search_length1 =  ShapePrun[shape]; obj.Search_length1 < 100; ++obj.Search_length1) {
    //console.log(obj.Search_length1);
    obj.Search_maxlen2 = Math.min(31 - obj.Search_length1, 17);
    if (Search_phase1(obj, shape, ShapePrun[shape], obj.Search_length1, 0, -1)) {
      break;
    }
  }
  return obj.Search_sol_string;
}

function Search_Search(){
  this.Search_move = [];
  this.Search_d = new FullCube_FullCube__Ljava_lang_String_2V;
  this.Search_sq = new Square_Square;
}

function Search(){
}

_ = Search_Search.prototype = Search.prototype;
_.Search_c = null;
_.Search_length1 = 0;
_.Search_maxlen2 = 0;
_.Search_sol_string = null;
function Shape_$clinit(){
  Shape_$clinit = nullMethod;
  Shape_halflayer =[0, 3, 6, 12, 15, 24, 27, 30, 48, 51, 54, 60, 63];
  Shape_ShapeIdx = [];
  ShapePrun = [];
  Shape_TopMove = [];
  Shape_BottomMove = [];
  Shape_TwistMove = [];
  Shape_init();
}

function Shape_bottomMove(obj){
  var move, moveParity;
  move = 0;
  moveParity = 0;
  do {
    if ((obj.bottom & 2048) == 0) {
      move += 1;
      obj.bottom = obj.bottom << 1;
    }
     else {
      move += 2;
      obj.bottom = obj.bottom << 2 ^ 12291;
    }
    moveParity = 1 - moveParity;
  }
   while ((bitCount(obj.bottom & 63) & 1) != 0);
  (bitCount(obj.bottom) & 2) == 0 && (obj.Shape_parity ^= moveParity);
  return move;
}

function Shape_getIdx(obj){
  var ret;
  ret = binarySearch(Shape_ShapeIdx, obj.top << 12 | obj.bottom) << 1 | obj.Shape_parity;
  return ret;
}

function Shape_setIdx(obj, idx){
  obj.Shape_parity = idx & 1;
  obj.top = Shape_ShapeIdx[~~idx >> 1];
  obj.bottom = obj.top & 4095;
  obj.top >>= 12;
}

function Shape_topMove(obj){
  var move, moveParity;
  move = 0;
  moveParity = 0;
  do {
    if ((obj.top & 2048) == 0) {
      move += 1;
      obj.top = obj.top << 1;
    }
     else {
      move += 2;
      obj.top = obj.top << 2 ^ 12291;
    }
    moveParity = 1 - moveParity;
  }
   while ((bitCount(obj.top & 63) & 1) != 0);
  (bitCount(obj.top) & 2) == 0 && (obj.Shape_parity ^= moveParity);
  return move;
}

function Shape_Shape(){
}

function Shape_getShape2Idx(shp){
  var ret;
  ret = binarySearch(Shape_ShapeIdx, shp & 16777215) << 1 | ~~shp >> 24;
  return ret;
}

function Shape_init(){
  var count, depth, dl, done, done0, dr, i, idx, m, s, ul, ur, value, p1, p3, temp;
  count = 0;
  for (i = 0; i < 28561; ++i) {
    dr = Shape_halflayer[i % 13];
    dl = Shape_halflayer[~~(i / 13) % 13];
    ur = Shape_halflayer[~~(~~(i / 13) / 13) % 13];
    ul = Shape_halflayer[~~(~~(~~(i / 13) / 13) / 13)];
    value = ul << 18 | ur << 12 | dl << 6 | dr;
    bitCount(value) == 16 && (Shape_ShapeIdx[count++] = value);
  }
  s = new Shape_Shape;
  for (i = 0; i < 7356; ++i) {
    Shape_setIdx(s, i);
    Shape_TopMove[i] = Shape_topMove(s);
    Shape_TopMove[i] |= Shape_getIdx(s) << 4;
    Shape_setIdx(s, i);
    Shape_BottomMove[i] = Shape_bottomMove(s);
    Shape_BottomMove[i] |= Shape_getIdx(s) << 4;
    Shape_setIdx(s, i);
    temp = s.top & 63;
    p1 = bitCount(temp);
    p3 = bitCount(s.bottom & 4032);
    s.Shape_parity ^= 1 & ~~(p1 & p3) >> 1;
    s.top = s.top & 4032 | ~~s.bottom >> 6 & 63;
    s.bottom = s.bottom & 63 | temp << 6;
    Shape_TwistMove[i] = Shape_getIdx(s);
  }
  for (i = 0; i < 7536; ++i) {
    ShapePrun[i] = -1;
  }
  ShapePrun[Shape_getShape2Idx(14378715)] = 0;
  ShapePrun[Shape_getShape2Idx(31157686)] = 0;
  ShapePrun[Shape_getShape2Idx(23967451)] = 0;
  ShapePrun[Shape_getShape2Idx(7191990)] = 0;
  done = 4;
  done0 = 0;
  depth = -1;
  while (done != done0) {
    done0 = done;
    ++depth;
    for (i = 0; i < 7536; ++i) {
      if (ShapePrun[i] == depth) {
        m = 0;
        idx = i;
        do {
          idx = Shape_TopMove[idx];
          m += idx & 15;
          idx >>= 4;
          if (ShapePrun[idx] == -1) {
            ++done;
            ShapePrun[idx] = depth + 1;
          }
        }
         while (m != 12);
        m = 0;
        idx = i;
        do {
          idx = Shape_BottomMove[idx];
          m += idx & 15;
          idx >>= 4;
          if (ShapePrun[idx] == -1) {
            ++done;
            ShapePrun[idx] = depth + 1;
          }
        }
         while (m != 12);
        idx = Shape_TwistMove[i];
        if (ShapePrun[idx] == -1) {
          ++done;
          ShapePrun[idx] = depth + 1;
        }
      }
    }
  }
}

function Shape(){
}

_ = Shape_Shape.prototype = Shape.prototype;
_.bottom = 0;
_.Shape_parity = 0;
_.top = 0;
var Shape_BottomMove, Shape_ShapeIdx, ShapePrun, Shape_TopMove, Shape_TwistMove, Shape_halflayer;
function Square_$clinit(){
  Square_$clinit = nullMethod;
  SquarePrun = [];
  Square_TwistMove = [];
  Square_TopMove = [];
  Square_BottomMove = [];
  fact = [1, 1, 2, 6, 24, 120, 720, 5040];
  Cnk = [];
  for (var i=0; i<12; ++i) Cnk[i] = [];
  Square_init();
}

function Square_Square(){
}

function get8Perm(arr){
  var i, idx, v, val;
  idx = 0;
  val = 1985229328;
  for (i = 0; i < 7; ++i) {
    v = arr[i] << 2;
    idx = (8 - i) * idx + (~~val >> v & 7);
    val -= 286331152 << v;
  }
  return idx & 65535;
}

function Square_init(){
  var check, depth, done, find, i, idx, idxx, inv, j, m, ml, pos, temp;
  for (i = 0; i < 12; ++i) {
    Cnk[i][0] = 1;
    Cnk[i][i] = 1;
    for (j = 1; j < i; ++j) {
      Cnk[i][j] = Cnk[i - 1][j - 1] + Cnk[i - 1][j];
    }
  }
  pos = [];
  for (i = 0; i < 40320; ++i) {
    set8Perm(pos, i);
    temp = pos[2];
    pos[2] = pos[4];
    pos[4] = temp;
    temp = pos[3];
    pos[3] = pos[5];
    pos[5] = temp;
    Square_TwistMove[i] = get8Perm(pos);
    set8Perm(pos, i);
    temp = pos[0];
    pos[0] = pos[1];
    pos[1] = pos[2];
    pos[2] = pos[3];
    pos[3] = temp;
    Square_TopMove[i] = get8Perm(pos);
    set8Perm(pos, i);
    temp = pos[4];
    pos[4] = pos[5];
    pos[5] = pos[6];
    pos[6] = pos[7];
    pos[7] = temp;
    Square_BottomMove[i] = get8Perm(pos);
  }
  for (i = 0; i < 80640; ++i) {
    SquarePrun[i] = -1;
  }
  SquarePrun[0] = 0;
  depth = 0;
  done = 1;
  while (done < 80640) {
    // console.log(done);
    inv = depth >= 11;
    find = inv?-1:depth;
    check = inv?depth:-1;
    ++depth;
    OUT: for (i = 0; i < 80640; ++i) {
      if (SquarePrun[i] == find) {
        idx = ~~i >> 1;
        ml = i & 1;
        idxx = Square_TwistMove[idx] << 1 | 1 - ml;
        if (SquarePrun[idxx] == check) {
          ++done;
          SquarePrun[inv?i:idxx] = ~~(depth << 24) >> 24;
          if (inv)
            continue OUT;
        }
        idxx = idx;
        for (m = 0; m < 4; ++m) {
          idxx = Square_TopMove[idxx];
          if (SquarePrun[idxx << 1 | ml] == check) {
            ++done;
            SquarePrun[inv?i:idxx << 1 | ml] = ~~(depth << 24) >> 24;
            if (inv)
              continue OUT;
          }
        }
        for (m = 0; m < 4; ++m) {
          idxx = Square_BottomMove[idxx];
          if (SquarePrun[idxx << 1 | ml] == check) {
            ++done;
            SquarePrun[inv?i:idxx << 1 | ml] = ~~(depth << 24) >> 24;
            if (inv)
              continue OUT;
          }
        }
      }
    }
  }
}

function set8Perm(arr, idx){
  var i, m, p, v, val;
  val = 1985229328;
  for (i = 0; i < 7; ++i) {
    p = fact[7 - i];
    v = ~~(idx / p);
    idx -= v * p;
    v <<= 2;
    arr[i] = ~~((~~val >> v & 7) << 24) >> 24;
    m = (1 << v) - 1;
    val = (val & m) + (~~val >> 4 & ~m);
  }
  arr[7] = ~~(val << 24) >> 24;
}

function Square(){
}

_ = Square_Square.prototype = Square.prototype;
_.botEdgeFirst = false;
_.cornperm = 0;
_.edgeperm = 0;
_.ml = 0;
_.topEdgeFirst = false;
var Square_BottomMove, Cnk, SquarePrun, Square_TopMove, Square_TwistMove, fact;

function bitCount(x){
  x -= ~~x >> 1 & 1431655765;
  x = (~~x >> 2 & 858993459) + (x & 858993459);
  x = (~~x >> 4) + x & 252645135;
  x += ~~x >> 8;
  x += ~~x >> 16;
  return x & 63;
}

function binarySearch(sortedArray, key){
  var high, low, mid, midVal;
  low = 0;
  high = sortedArray.length - 1;
  while (low <= high) {
    mid = low + (~~(high - low) >> 1);
    midVal = sortedArray[mid];
    if (midVal < key) {
      low = mid + 1;
    }
     else if (midVal > key) {
      high = mid - 1;
    }
     else {
      return mid;
    }
  }
  return -low - 1;
}

  /*
   * Some helper functions.
   */

  var square1Solver_initialized = false;

  var square1SolverInitialize= function(doneCallback, _, statusCallback) {
    if (!square1Solver_initialized) {
      Shape_$clinit();
      Square_$clinit();
    }

    if (statusCallback) {
      statusCallback("Done initializing Square-1.");
    }

    square1Solver_initialized = true;
    if (doneCallback != null) {
      doneCallback();
    }
  }


  var square1SolverGetRandomPosition = function() {
    if (!square1Solver_initialized) {
      square1SolverInitialize();
    }
    return FullCube_randomCube();
  }

  var square1SolverGenerate = function(state) {
    var search_search = new Search_Search; // Can this be factored out?
    return Search_solution(search_search, state);
  }

  var square1SolverGetRandomScramble = function() {
    var randomState = square1SolverGetRandomPosition();
    var scrambleString = square1SolverGenerate(randomState);

    return {
      state: randomState,
      scramble_string: scrambleString
    };
  }

  /*
   * Drawing methods. These are extremely messy and outdated by now, but at least they work.
   */


  function colorGet(col){
    if (col==="r") return ("#F94F2D");
    if (col==="o") return ("#FFA643");
    if (col==="b") return ("#43C4F3");
    if (col==="g") return ("#7AC78B");
    if (col==="y") return ("#FFED71");
    if (col==="w") return ("#FFFFFF");
    if (col==="x") return ("#000000");
  }

var scalePoint = function(w, h, ptIn) {

  var defaultWidth = 200;
  var defaultHeight = 110;

  var scale = Math.min(w/defaultWidth, h/defaultHeight);

  var x = Math.floor(ptIn[0]*scale + (w - (defaultWidth * scale))/2) + 0.5;
  var y = Math.floor(ptIn[1]*scale + (h - (defaultHeight * scale))/2) + 0.5;

  return [x, y];
}

function drawPolygon(r, fillColor, w, h, arrx, arry) {

  var pathString = "";
  for (var i = 0; i < arrx.length; i++) {
    var scaledPoint = scalePoint(w, h, [arrx[i], arry[i]]);
    pathString += ((i===0) ? "M" : "L") + scaledPoint[0] + "," + scaledPoint[1];
  }
  pathString += "z";

  r.path(pathString).attr({fill: colorGet(fillColor), stroke: "#000"})
}


function drawSq(stickers, middleIsSolved, shapes, parentElement, width, height, colorString) {

    var z = 1.366 // sqrt(2) / sqrt(1^2 + tan(15 degrees)^2)
    var r = Raphael(parentElement, width, height);

    var arrx, arry;

    var margin = 1;
    var sidewid=.15*100/z;
    var cx = 50;
    var cy = 50;
    var radius=(cx-margin-sidewid*z)/z;
    var w = (sidewid+radius)/radius   // ratio btw total piece width and radius

    var angles=[0,0,0,0,0,0,0,0,0,0,0,0,0];
    var angles2=[0,0,0,0,0,0,0,0,0,0,0,0,0];

    //initialize angles
    for(var foo=0; foo<24; foo++){
      angles[foo]=(17-foo*2)/12*Math.PI;
      shapes = shapes.concat("xxxxxxxxxxxxxxxx");
    }
    for(var foo=0; foo<24; foo++){
      angles2[foo]=(19-foo*2)/12*Math.PI;
      shapes = shapes.concat("xxxxxxxxxxxxxxxx");
    }

    function cos1(index) {return Math.cos(angles[index])*radius;}
    function sin1(index) {return Math.sin(angles[index])*radius;}
    function cos2(index) {return Math.cos(angles2[index])*radius;}
    function sin2(index) {return Math.sin(angles2[index])*radius;}

    var h = sin1(1)*w*z - sin1(1)*z;
    if (middleIsSolved) {
      arrx=[cx+cos1(1)*w*z, cx+cos1(4)*w*z, cx+cos1(7)*w*z, cx+cos1(10)*w*z];
      arry=[cy-sin1(1)*w*z, cy-sin1(4)*w*z, cy-sin1(7)*w*z, cy-sin1(10)*w*z];
      drawPolygon(r, "x", width, height, arrx, arry);

      cy += 10;
      arrx=[cx+cos1(0)*w, cx+cos1(0)*w, cx+cos1(1)*w*z, cx+cos1(1)*w*z];
      arry=[cy-sin1(1)*w*z, cy-sin1(1)*z, cy-sin1(1)*z, cy-sin1(1)*w*z, cy-sin1(1)*w*z];
      drawPolygon(r, colorString[5], width, height, arrx, arry)

      arrx=[cx+cos1(0)*w, cx+cos1(0)*w, cx+cos1(10)*w*z, cx+cos1(10)*w*z];
      arry=[cy-sin1(1)*w*z, cy-sin1(1)*z, cy-sin1(1)*z, cy-sin1(1)*w*z, cy-sin1(1)*w*z];
      drawPolygon(r, colorString[5], width, height, arrx, arry)
      cy -= 10;
    }
    else {
      arrx=[cx+cos1(1)*w*z, cx+cos1(4)*w*z, cx+cos1(6)*w, cx+cos1(9)*w*z, cx+cos1(11)*w*z, cx+cos1(0)*w];
      arry=[cy-sin1(1)*w*z, cy-sin1(4)*w*z, cy-sin1(6)*w, cy+sin1(9)*w*z, cy-sin1(11)*w*z, cy-sin1(0)*w];
      drawPolygon(r, "x", width, height, arrx, arry);

      arrx=[cx+cos1(9)*w*z, cx+cos1(11)*w*z, cx+cos1(11)*w*z, cx+cos1(9)*w*z];
      arry=[cy+sin1(9)*w*z-h, cy-sin1(11)*w*z-h, cy-sin1(11)*w*z, cy+sin1(9)*w*z];
      drawPolygon(r, colorString[4], width, height, arrx, arry);

      cy += 10;
      arrx=[cx+cos1(0)*w, cx+cos1(0)*w, cx+cos1(1)*w*z, cx+cos1(1)*w*z];
      arry=[cy-sin1(1)*w*z, cy-sin1(1)*z, cy-sin1(1)*z, cy-sin1(1)*w*z];
      drawPolygon(r, colorString[5], width, height, arrx, arry)

      arrx=[cx+cos1(0)*w, cx+cos1(0)*w, cx+cos1(11)*w*z, cx+cos1(11)*w*z];
      arry=[cy-sin1(1)*w*z, cy-sin1(1)*z, cy-sin1(11)*w*z + h, cy-sin1(11)*w*z];
      drawPolygon(r, colorString[2], width, height, arrx, arry)
      cy -= 10;
    }

    //fill and outline first layer
    var sc = 0;
    for(var foo=0; sc<12; foo++){
      if (shapes.length<=foo) sc = 12;
      if (shapes.charAt(foo)==="x") sc++;
      if (shapes.charAt(foo)==="c"){
        arrx=[cx, cx+cos1(sc), cx+cos1(sc+1)*z, cx+cos1(sc+2)];
        arry=[cy, cy-sin1(sc), cy-sin1(sc+1)*z, cy-sin1(sc+2)];
        drawPolygon(r, stickers.charAt(foo), width, height, arrx, arry)

        arrx=[cx+cos1(sc), cx+cos1(sc+1)*z, cx+cos1(sc+1)*w*z, cx+cos1(sc)*w];
        arry=[cy-sin1(sc), cy-sin1(sc+1)*z, cy-sin1(sc+1)*w*z, cy-sin1(sc)*w];
        drawPolygon(r, stickers.charAt(16+sc), width, height, arrx, arry)

        arrx=[cx+cos1(sc+2), cx+cos1(sc+1)*z, cx+cos1(sc+1)*w*z, cx+cos1(sc+2)*w];
        arry=[cy-sin1(sc+2), cy-sin1(sc+1)*z, cy-sin1(sc+1)*w*z, cy-sin1(sc+2)*w];
        drawPolygon(r, stickers.charAt(17+sc), width, height, arrx, arry)

        sc +=2;
      }
      if (shapes.charAt(foo)==="e"){
        arrx=[cx, cx+cos1(sc), cx+cos1(sc+1)];
        arry=[cy, cy-sin1(sc), cy-sin1(sc+1)];
        drawPolygon(r, stickers.charAt(foo), width, height, arrx, arry)

        arrx=[cx+cos1(sc), cx+cos1(sc+1), cx+cos1(sc+1)*w, cx+cos1(sc)*w];
        arry=[cy-sin1(sc), cy-sin1(sc+1), cy-sin1(sc+1)*w, cy-sin1(sc)*w];
        drawPolygon(r, stickers.charAt(16+sc), width, height, arrx, arry)

        sc +=1;
      }
    }

    //fill and outline second layer
    cx += 100;
    cy += 10;


    var h = sin1(1)*w*z - sin1(1)*z;
    if (middleIsSolved) {
      arrx=[cx+cos1(1)*w*z, cx+cos1(4)*w*z, cx+cos1(7)*w*z, cx+cos1(10)*w*z];
      arry=[cy+sin1(1)*w*z, cy+sin1(4)*w*z, cy+sin1(7)*w*z, cy+sin1(10)*w*z];
      drawPolygon(r, "x", width, height, arrx, arry);

      cy -= 10;
      arrx=[cx+cos1(0)*w, cx+cos1(0)*w, cx+cos1(1)*w*z, cx+cos1(1)*w*z];
      arry=[cy+sin1(1)*w*z, cy+sin1(1)*z, cy+sin1(1)*z, cy+sin1(1)*w*z, cy+sin1(1)*w*z];
      drawPolygon(r, colorString[5], width, height, arrx, arry)

      arrx=[cx+cos1(0)*w, cx+cos1(0)*w, cx+cos1(10)*w*z, cx+cos1(10)*w*z];
      arry=[cy+sin1(1)*w*z, cy+sin1(1)*z, cy+sin1(1)*z, cy+sin1(1)*w*z, cy+sin1(1)*w*z];
      drawPolygon(r, colorString[5], width, height, arrx, arry)
      cy += 10;
    }
    else {
      arrx=[cx+cos1(1)*w*z, cx+cos1(4)*w*z, cx+cos1(6)*w, cx+cos1(9)*w*z, cx+cos1(11)*w*z, cx+cos1(0)*w];
      arry=[cy+sin1(1)*w*z, cy+sin1(4)*w*z, cy+sin1(6)*w, cy-sin1(9)*w*z, cy+sin1(11)*w*z, cy+sin1(0)*w];
      drawPolygon(r, "x", width, height, arrx, arry);

      arrx=[cx+cos1(9)*w*z, cx+cos1(11)*w*z, cx+cos1(11)*w*z, cx+cos1(9)*w*z];
      arry=[cy-sin1(9)*w*z+h, cy+sin1(11)*w*z+h, cy+sin1(11)*w*z, cy-sin1(9)*w*z];
      drawPolygon(r, colorString[4], width, height, arrx, arry);

      cy -= 10;
      arrx=[cx+cos1(0)*w, cx+cos1(0)*w, cx+cos1(1)*w*z, cx+cos1(1)*w*z];
      arry=[cy+sin1(1)*w*z, cy+sin1(1)*z, cy+sin1(1)*z, cy+sin1(1)*w*z];
      drawPolygon(r, colorString[5], width, height, arrx, arry)

      arrx=[cx+cos1(0)*w, cx+cos1(0)*w, cx+cos1(11)*w*z, cx+cos1(11)*w*z];
      arry=[cy+sin1(1)*w*z, cy+sin1(1)*z, cy+sin1(11)*w*z - h, cy+sin1(11)*w*z];
      drawPolygon(r, colorString[2], width, height, arrx, arry)
      cy += 10;
    }

    var sc = 0;
    for(sc=0; sc<12; foo++){
      if (shapes.length<=foo) sc = 12;
      if (shapes.charAt(foo)==="x") sc++;
      if (shapes.charAt(foo)==="c"){
        arrx=[cx, cx+cos2(sc), cx+cos2(sc+1)*z, cx+cos2(sc+2)];
        arry=[cy, cy-sin2(sc), cy-sin2(sc+1)*z, cy-sin2(sc+2)];
        drawPolygon(r, stickers.charAt(foo), width, height, arrx, arry)

        arrx=[cx+cos2(sc), cx+cos2(sc+1)*z, cx+cos2(sc+1)*w*z, cx+cos2(sc)*w];
        arry=[cy-sin2(sc), cy-sin2(sc+1)*z, cy-sin2(sc+1)*w*z, cy-sin2(sc)*w];
        drawPolygon(r, stickers.charAt(28+sc), width, height, arrx, arry)

        arrx=[cx+cos2(sc+2), cx+cos2(sc+1)*z, cx+cos2(sc+1)*w*z, cx+cos2(sc+2)*w];
        arry=[cy-sin2(sc+2), cy-sin2(sc+1)*z, cy-sin2(sc+1)*w*z, cy-sin2(sc+2)*w];
        drawPolygon(r, stickers.charAt(29+sc), width, height, arrx, arry)

        sc +=2;

      }
      if (shapes.charAt(foo)==="e"){
        arrx=[cx, cx+cos2(sc), cx+cos2(sc+1)];
        arry=[cy, cy-sin2(sc), cy-sin2(sc+1)];
        drawPolygon(r, stickers.charAt(foo), width, height, arrx, arry)

        arrx=[cx+cos2(sc), cx+cos2(sc+1), cx+cos2(sc+1)*w, cx+cos2(sc)*w];
        arry=[cy-sin2(sc), cy-sin2(sc+1), cy-sin2(sc+1)*w, cy-sin2(sc)*w];
        drawPolygon(r, stickers.charAt(28+sc), width, height, arrx, arry)

        sc +=1;
      }
    }

  }

  var remove_duplicates = function(arr) {
    var out = [];
    var j=0;
    for (var i=0; i<arr.length; i++)
    {
      if(i===0 || arr[i]!=arr[i-1])
      out[j++] = arr[i];
    }
    return out;
  }

  var drawScramble = function(parentElement, sq1State, w, h) {
//	console.log(sq1State);
    var state = sq1State["arr"];

    var colorString = "yobwrg";  //In dlburf order.

    var posit;
    var scrambleString;
    var tb, ty, col, eido;

    var middleIsSolved = sq1State.ml == 0;

    var posit = [];

    var map = [5,4,3,2,1,0,11,10,9,8,7,6,17,16,15,14,13,12,23,22,21,20,19,18];
//    FullCube_doMove(sq1State, 1);
//    FullCube_doMove(sq1State, 0);
    for (var j = 0; j < map.length; j++) {
      posit.push(FullCube_pieceAt(sq1State, map[j]));
    }
//    console.log(posit);

    var tb = ["3","3","3","3","3","3","3","3","0","0","0","0","0","0","0","0"];
    ty = ["e","c","e","c","e","c","e","c","e","c","e","c","e","c","e","c"];
    col = ["2","12","1","51","5","45","4","24", "4","42","5","54","1","15","2","21"];

    var top_side=remove_duplicates(posit.slice(0,12));
    var bot_side=remove_duplicates(posit.slice(18,24).concat(posit.slice(12,18)));
    var eido=top_side.concat(bot_side);

    var a="";
    var b="";
    var c="";
    var eq="_";
    for(var j=0; j<16; j++)
    {
      a+=ty[eido[j]];
      eq=eido[j];
      b+=tb[eido[j]];
      c+=col[eido[j]];
    }

    var stickers = (b.concat(c)
      .replace(/0/g,colorString[0])
      .replace(/1/g,colorString[1])
      .replace(/2/g,colorString[2])
      .replace(/3/g,colorString[3])
      .replace(/4/g,colorString[4])
      .replace(/5/g,colorString[5])
    );
    drawSq(stickers, middleIsSolved, a, parentElement, w, h, colorString);

  }

  /*
   * Export public methods.
   */

  return {

    /* mark2 interface */
    version: "July 05, 2015",
    initialize: square1SolverInitialize,
    setRandomSource: function() {console.log("setRandomSource is deprecated. It has no effect anymore.")},
    getRandomScramble: square1SolverGetRandomScramble,
    drawScramble: drawScramble,

    /* Other methods */
    getRandomPosition: square1SolverGetRandomPosition,
    //solve: square1SolverSolve,
    generate: square1SolverGenerate,
  };

})();

//# sourceMappingURL=bundle.js.map
