"use strict";var l=function(e,i){return function(){try{return i||e((i={exports:{}}).exports,i),i.exports}catch(t){throw (i=0, t)}};};var m=l(function(M,x){
var h=require('@stdlib/strided-base-reinterpret-complex128/dist'),R=require('@stdlib/complex-float64-real/dist'),j=require('@stdlib/complex-float64-imag/dist');function k(e,i,t,s,v,f,b){var u,n,c,o,a,y,z,p,r,q;if(e<=0)return v;if(u=R(i),n=j(i),c=R(t),o=j(t),a=h(v,0),p=f*2,r=b*2,e===1)return s?(a[r]=c,a[r+1]=o):(a[r]=u,a[r+1]=n),v;for(a[r]=u,a[r+1]=n,r+=p,s&&(e-=1),y=(c-u)/e,z=(o-n)/e,q=1;q<e;q++)a[r]=u+y*q,a[r+1]=n+z*q,r+=p;return s&&(a[r]=c,a[r+1]=o),v}x.exports=k
});var _=l(function(P,I){
var A=require('@stdlib/strided-base-stride2offset/dist'),B=m();function C(e,i,t,s,v,f){return B(e,i,t,s,v,f,A(e,f))}I.exports=C
});var E=l(function(Q,w){
var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=_(),F=m();D(g,"ndarray",F);w.exports=g
});var G=require("path").join,H=require('@stdlib/utils-try-require/dist'),J=require('@stdlib/assert-is-error/dist'),K=E(),d,O=H(G(__dirname,"./native.js"));J(O)?d=K:d=O;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
