(function(){"use strict";function t(t){var e,r,n,o,i=Array.prototype.slice.call(arguments,1);for(e=0,r=i.length;e<r;e+=1)if(n=i[e])for(o in n)u.call(n,o)&&(t[o]=n[o]);return t}function e(t,e,r){this.locales=t,this.formats=e,this.pluralFn=r}function r(t){this.id=t}function n(t,e,r,n,o){this.id=t,this.useOrdinal=e,this.offset=r,this.options=n,this.pluralFn=o}function o(t,e,r,n){this.id=t,this.offset=e,this.numberFormat=r,this.string=n}function i(t,e){this.id=t,this.options=e}function a(t,e,r){var n="string"==typeof t?a.__parse(t):t;if(!n||"messageFormatPattern"!==n.type)throw new TypeError("A message must be provided as a String or AST.");r=this._mergeFormats(a.formats,r),s(this,"_locale",{value:this._resolveLocale(e)});var o=this._findPluralRuleFunction(this._locale),i=this._compilePattern(n,e,r,o),u=this;this.format=function(t){return u._format(i,t)}}var u=Object.prototype.hasOwnProperty,l=function(){try{return!!Object.defineProperty({},"a",{})}catch(t){return!1}}(),s=(!l&&!Object.prototype.__defineGetter__,l?Object.defineProperty:function(t,e,r){"get"in r&&t.__defineGetter__?t.__defineGetter__(e,r.get):(!u.call(t,e)||"value"in r)&&(t[e]=r.value)}),c=Object.create||function(t,e){function r(){}var n,o;r.prototype=t,n=new r;for(o in e)u.call(e,o)&&s(n,o,e[o]);return n},p=e;e.prototype.compile=function(t){return this.pluralStack=[],this.currentPlural=null,this.pluralNumberFormat=null,this.compileMessage(t)},e.prototype.compileMessage=function(t){if(!t||"messageFormatPattern"!==t.type)throw new Error('Message AST is not of type: "messageFormatPattern"');var e,r,n,o=t.elements,i=[];for(e=0,r=o.length;e<r;e+=1)switch(n=o[e],n.type){case"messageTextElement":i.push(this.compileMessageText(n));break;case"argumentElement":i.push(this.compileArgument(n));break;default:throw new Error("Message element does not have a valid type")}return i},e.prototype.compileMessageText=function(t){return this.currentPlural&&/(^|[^\\])#/g.test(t.value)?(this.pluralNumberFormat||(this.pluralNumberFormat=new Intl.NumberFormat(this.locales)),new o(this.currentPlural.id,this.currentPlural.format.offset,this.pluralNumberFormat,t.value)):t.value.replace(/\\#/g,"#")},e.prototype.compileArgument=function(t){var e=t.format;if(!e)return new r(t.id);var o,a=this.formats,u=this.locales,l=this.pluralFn;switch(e.type){case"numberFormat":return o=a.number[e.style],{id:t.id,format:new Intl.NumberFormat(u,o).format};case"dateFormat":return o=a.date[e.style],{id:t.id,format:new Intl.DateTimeFormat(u,o).format};case"timeFormat":return o=a.time[e.style],{id:t.id,format:new Intl.DateTimeFormat(u,o).format};case"pluralFormat":return o=this.compileOptions(t),new n(t.id,e.ordinal,e.offset,o,l);case"selectFormat":return o=this.compileOptions(t),new i(t.id,o);default:throw new Error("Message element does not have a valid format type")}},e.prototype.compileOptions=function(t){var e=t.format,r=e.options,n={};this.pluralStack.push(this.currentPlural),this.currentPlural="pluralFormat"===e.type?t:null;var o,i,a;for(o=0,i=r.length;o<i;o+=1)a=r[o],n[a.selector]=this.compileMessage(a.value);return this.currentPlural=this.pluralStack.pop(),n},r.prototype.format=function(t){return t?"string"==typeof t?t:String(t):""},n.prototype.getOption=function(t){var e=this.options,r=e["="+t]||e[this.pluralFn(t-this.offset,this.useOrdinal)];return r||e.other},o.prototype.format=function(t){var e=this.numberFormat.format(t-this.offset);return this.string.replace(/(^|[^\\])#/g,"$1"+e).replace(/\\#/g,"#")},i.prototype.getOption=function(t){var e=this.options;return e[t]||e.other};var f=function(){function t(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function e(t,e,r,n,o,i){this.message=t,this.expected=e,this.found=r,this.offset=n,this.line=o,this.column=i,this.name="SyntaxError"}function r(t){function r(e){function r(e,r,n){var o,i;for(o=r;o<n;o++)i=t.charAt(o),"\n"===i?(e.seenCR||e.line++,e.column=1,e.seenCR=!1):"\r"===i||"\u2028"===i||"\u2029"===i?(e.line++,e.column=1,e.seenCR=!0):(e.column++,e.seenCR=!1)}return Kt!==e&&(Kt>e&&(Kt=0,Qt={line:1,column:1,seenCR:!1}),r(Qt,Kt,e),Kt=e),Qt}function n(t){Ht<Vt||(Ht>Vt&&(Vt=Ht,Xt=[]),Xt.push(t))}function o(n,o,i){function a(t){var e=1;for(t.sort(function(t,e){return t.description<e.description?-1:t.description>e.description?1:0});e<t.length;)t[e-1]===t[e]?t.splice(e,1):e++}function u(t,e){function r(t){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+e(t)}).replace(/[\u0180-\u0FFF]/g,function(t){return"\\u0"+e(t)}).replace(/[\u1080-\uFFFF]/g,function(t){return"\\u"+e(t)})}var n,o,i,a=new Array(t.length);for(i=0;i<t.length;i++)a[i]=t[i].description;return n=t.length>1?a.slice(0,-1).join(", ")+" or "+a[t.length-1]:a[0],o=e?'"'+r(e)+'"':"end of input","Expected "+n+" but "+o+" found."}var l=r(i),s=i<t.length?t.charAt(i):null;return null!==o&&a(o),new e(null!==n?n:u(o,s),o,s,i,l.line,l.column)}function i(){var t;return t=a()}function a(){var t,e,r;for(t=Ht,e=[],r=u();r!==O;)e.push(r),r=u();return e!==O&&(Jt=t,e=I(e)),t=e}function u(){var t;return t=s(),t===O&&(t=p()),t}function l(){var e,r,n,o,i,a;if(e=Ht,r=[],n=Ht,o=w(),o!==O?(i=E(),i!==O?(a=w(),a!==O?(o=[o,i,a],n=o):(Ht=n,n=N)):(Ht=n,n=N)):(Ht=n,n=N),n!==O)for(;n!==O;)r.push(n),n=Ht,o=w(),o!==O?(i=E(),i!==O?(a=w(),a!==O?(o=[o,i,a],n=o):(Ht=n,n=N)):(Ht=n,n=N)):(Ht=n,n=N);else r=N;return r!==O&&(Jt=e,r=j(r)),e=r,e===O&&(e=Ht,r=b(),r!==O&&(r=t.substring(e,Ht)),e=r),e}function s(){var t,e;return t=Ht,e=l(),e!==O&&(Jt=t,e=T(e)),t=e}function c(){var e,r,o;if(e=x(),e===O){if(e=Ht,r=[],D.test(t.charAt(Ht))?(o=t.charAt(Ht),Ht++):(o=O,0===Yt&&n(k)),o!==O)for(;o!==O;)r.push(o),D.test(t.charAt(Ht))?(o=t.charAt(Ht),Ht++):(o=O,0===Yt&&n(k));else r=N;r!==O&&(r=t.substring(e,Ht)),e=r}return e}function p(){var e,r,o,i,a,u,l,s,p;return e=Ht,123===t.charCodeAt(Ht)?(r=G,Ht++):(r=O,0===Yt&&n(Z)),r!==O?(o=w(),o!==O?(i=c(),i!==O?(a=w(),a!==O?(u=Ht,44===t.charCodeAt(Ht)?(l=U,Ht++):(l=O,0===Yt&&n(W)),l!==O?(s=w(),s!==O?(p=f(),p!==O?(l=[l,s,p],u=l):(Ht=u,u=N)):(Ht=u,u=N)):(Ht=u,u=N),u===O&&(u=B),u!==O?(l=w(),l!==O?(125===t.charCodeAt(Ht)?(s=$,Ht++):(s=O,0===Yt&&n(q)),s!==O?(Jt=e,r=z(i,u),e=r):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N),e}function f(){var t;return t=h(),t===O&&(t=m(),t===O&&(t=d(),t===O&&(t=v()))),t}function h(){var e,r,o,i,a,u,l;return e=Ht,t.substr(Ht,6)===H?(r=H,Ht+=6):(r=O,0===Yt&&n(J)),r===O&&(t.substr(Ht,4)===K?(r=K,Ht+=4):(r=O,0===Yt&&n(Q)),r===O&&(t.substr(Ht,4)===V?(r=V,Ht+=4):(r=O,0===Yt&&n(X)))),r!==O?(o=w(),o!==O?(i=Ht,44===t.charCodeAt(Ht)?(a=U,Ht++):(a=O,0===Yt&&n(W)),a!==O?(u=w(),u!==O?(l=E(),l!==O?(a=[a,u,l],i=a):(Ht=i,i=N)):(Ht=i,i=N)):(Ht=i,i=N),i===O&&(i=B),i!==O?(Jt=e,r=Y(r,i),e=r):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N),e}function m(){var e,r,o,i,a,u;return e=Ht,t.substr(Ht,6)===tt?(r=tt,Ht+=6):(r=O,0===Yt&&n(et)),r!==O?(o=w(),o!==O?(44===t.charCodeAt(Ht)?(i=U,Ht++):(i=O,0===Yt&&n(W)),i!==O?(a=w(),a!==O?(u=_(),u!==O?(Jt=e,r=rt(u),e=r):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N),e}function d(){var e,r,o,i,a,u;return e=Ht,t.substr(Ht,13)===nt?(r=nt,Ht+=13):(r=O,0===Yt&&n(ot)),r!==O?(o=w(),o!==O?(44===t.charCodeAt(Ht)?(i=U,Ht++):(i=O,0===Yt&&n(W)),i!==O?(a=w(),a!==O?(u=_(),u!==O?(Jt=e,r=it(u),e=r):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N),e}function v(){var e,r,o,i,a,u,l;if(e=Ht,t.substr(Ht,6)===at?(r=at,Ht+=6):(r=O,0===Yt&&n(ut)),r!==O)if(o=w(),o!==O)if(44===t.charCodeAt(Ht)?(i=U,Ht++):(i=O,0===Yt&&n(W)),i!==O)if(a=w(),a!==O){if(u=[],l=g(),l!==O)for(;l!==O;)u.push(l),l=g();else u=N;u!==O?(Jt=e,r=lt(u),e=r):(Ht=e,e=N)}else Ht=e,e=N;else Ht=e,e=N;else Ht=e,e=N;else Ht=e,e=N;return e}function y(){var e,r,o,i;return e=Ht,r=Ht,61===t.charCodeAt(Ht)?(o=st,Ht++):(o=O,0===Yt&&n(ct)),o!==O?(i=x(),i!==O?(o=[o,i],r=o):(Ht=r,r=N)):(Ht=r,r=N),r!==O&&(r=t.substring(e,Ht)),e=r,e===O&&(e=E()),e}function g(){var e,r,o,i,u,l,s,c,p;return e=Ht,r=w(),r!==O?(o=y(),o!==O?(i=w(),i!==O?(123===t.charCodeAt(Ht)?(u=G,Ht++):(u=O,0===Yt&&n(Z)),u!==O?(l=w(),l!==O?(s=a(),s!==O?(c=w(),c!==O?(125===t.charCodeAt(Ht)?(p=$,Ht++):(p=O,0===Yt&&n(q)),p!==O?(Jt=e,r=pt(o,s),e=r):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N),e}function F(){var e,r,o,i;return e=Ht,t.substr(Ht,7)===ft?(r=ft,Ht+=7):(r=O,0===Yt&&n(ht)),r!==O?(o=w(),o!==O?(i=x(),i!==O?(Jt=e,r=mt(i),e=r):(Ht=e,e=N)):(Ht=e,e=N)):(Ht=e,e=N),e}function _(){var t,e,r,n,o;if(t=Ht,e=F(),e===O&&(e=B),e!==O)if(r=w(),r!==O){if(n=[],o=g(),o!==O)for(;o!==O;)n.push(o),o=g();else n=N;n!==O?(Jt=t,e=dt(e,n),t=e):(Ht=t,t=N)}else Ht=t,t=N;else Ht=t,t=N;return t}function b(){var e,r;if(Yt++,e=[],yt.test(t.charAt(Ht))?(r=t.charAt(Ht),Ht++):(r=O,0===Yt&&n(gt)),r!==O)for(;r!==O;)e.push(r),yt.test(t.charAt(Ht))?(r=t.charAt(Ht),Ht++):(r=O,0===Yt&&n(gt));else e=N;return Yt--,e===O&&(r=O,0===Yt&&n(vt)),e}function w(){var e,r,o;for(Yt++,e=Ht,r=[],o=b();o!==O;)r.push(o),o=b();return r!==O&&(r=t.substring(e,Ht)),e=r,Yt--,e===O&&(r=O,0===Yt&&n(Ft)),e}function A(){var e;return _t.test(t.charAt(Ht))?(e=t.charAt(Ht),Ht++):(e=O,0===Yt&&n(bt)),e}function C(){var e;return wt.test(t.charAt(Ht))?(e=t.charAt(Ht),Ht++):(e=O,0===Yt&&n(At)),e}function x(){var e,r,o,i,a,u;if(e=Ht,48===t.charCodeAt(Ht)?(r=Ct,Ht++):(r=O,0===Yt&&n(xt)),r===O){if(r=Ht,o=Ht,Pt.test(t.charAt(Ht))?(i=t.charAt(Ht),Ht++):(i=O,0===Yt&&n(Et)),i!==O){for(a=[],u=A();u!==O;)a.push(u),u=A();a!==O?(i=[i,a],o=i):(Ht=o,o=N)}else Ht=o,o=N;o!==O&&(o=t.substring(r,Ht)),r=o}return r!==O&&(Jt=e,r=Rt(r)),e=r}function P(){var e,r,o,i,a,u,l,s;return Lt.test(t.charAt(Ht))?(e=t.charAt(Ht),Ht++):(e=O,0===Yt&&n(Ot)),e===O&&(e=Ht,t.substr(Ht,2)===Mt?(r=Mt,Ht+=2):(r=O,0===Yt&&n(St)),r!==O&&(Jt=e,r=It()),e=r,e===O&&(e=Ht,t.substr(Ht,2)===Nt?(r=Nt,Ht+=2):(r=O,0===Yt&&n(jt)),r!==O&&(Jt=e,r=Tt()),e=r,e===O&&(e=Ht,t.substr(Ht,2)===Dt?(r=Dt,Ht+=2):(r=O,0===Yt&&n(kt)),r!==O&&(Jt=e,r=Gt()),e=r,e===O&&(e=Ht,t.substr(Ht,2)===Zt?(r=Zt,Ht+=2):(r=O,0===Yt&&n(Bt)),r!==O&&(Jt=e,r=Ut()),e=r,e===O&&(e=Ht,t.substr(Ht,2)===Wt?(r=Wt,Ht+=2):(r=O,0===Yt&&n($t)),r!==O?(o=Ht,i=Ht,a=C(),a!==O?(u=C(),u!==O?(l=C(),l!==O?(s=C(),s!==O?(a=[a,u,l,s],i=a):(Ht=i,i=N)):(Ht=i,i=N)):(Ht=i,i=N)):(Ht=i,i=N),i!==O&&(i=t.substring(o,Ht)),o=i,o!==O?(Jt=e,r=qt(o),e=r):(Ht=e,e=N)):(Ht=e,e=N)))))),e}function E(){var t,e,r;if(t=Ht,e=[],r=P(),r!==O)for(;r!==O;)e.push(r),r=P();else e=N;return e!==O&&(Jt=t,e=zt(e)),t=e}var R,L=arguments.length>1?arguments[1]:{},O={},M={start:i},S=i,I=function(t){return{type:"messageFormatPattern",elements:t}},N=O,j=function(t){var e,r,n,o,i,a="";for(e=0,n=t.length;e<n;e+=1)for(o=t[e],r=0,i=o.length;r<i;r+=1)a+=o[r];return a},T=function(t){return{type:"messageTextElement",value:t}},D=/^[^ \t\n\r,.+={}#]/,k={type:"class",value:"[^ \\t\\n\\r,.+={}#]",description:"[^ \\t\\n\\r,.+={}#]"},G="{",Z={type:"literal",value:"{",description:'"{"'},B=null,U=",",W={type:"literal",value:",",description:'","'},$="}",q={type:"literal",value:"}",description:'"}"'},z=function(t,e){return{type:"argumentElement",id:t,format:e&&e[2]}},H="number",J={type:"literal",value:"number",description:'"number"'},K="date",Q={type:"literal",value:"date",description:'"date"'},V="time",X={type:"literal",value:"time",description:'"time"'},Y=function(t,e){return{type:t+"Format",style:e&&e[2]}},tt="plural",et={type:"literal",value:"plural",description:'"plural"'},rt=function(t){return{type:t.type,ordinal:!1,offset:t.offset||0,options:t.options}},nt="selectordinal",ot={type:"literal",value:"selectordinal",description:'"selectordinal"'},it=function(t){return{type:t.type,ordinal:!0,offset:t.offset||0,options:t.options}},at="select",ut={type:"literal",value:"select",description:'"select"'},lt=function(t){return{type:"selectFormat",options:t}},st="=",ct={type:"literal",value:"=",description:'"="'},pt=function(t,e){return{type:"optionalFormatPattern",selector:t,value:e}},ft="offset:",ht={type:"literal",value:"offset:",description:'"offset:"'},mt=function(t){return t},dt=function(t,e){return{type:"pluralFormat",offset:t,options:e}},vt={type:"other",description:"whitespace"},yt=/^[ \t\n\r]/,gt={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},Ft={type:"other",description:"optionalWhitespace"},_t=/^[0-9]/,bt={type:"class",value:"[0-9]",description:"[0-9]"},wt=/^[0-9a-f]/i,At={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},Ct="0",xt={type:"literal",value:"0",description:'"0"'},Pt=/^[1-9]/,Et={type:"class",value:"[1-9]",description:"[1-9]"},Rt=function(t){return parseInt(t,10)},Lt=/^[^{}\\\0-\x1F \t\n\r]/,Ot={type:"class",value:"[^{}\\\\\\0-\\x1F \\t\\n\\r]",description:"[^{}\\\\\\0-\\x1F \\t\\n\\r]"},Mt="\\\\",St={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},It=function(){return"\\"},Nt="\\#",jt={type:"literal",value:"\\#",description:'"\\\\#"'},Tt=function(){return"\\#"},Dt="\\{",kt={type:"literal",value:"\\{",description:'"\\\\{"'},Gt=function(){return"{"},Zt="\\}",Bt={type:"literal",value:"\\}",description:'"\\\\}"'},Ut=function(){return"}"},Wt="\\u",$t={type:"literal",value:"\\u",description:'"\\\\u"'},qt=function(t){return String.fromCharCode(parseInt(t,16))},zt=function(t){return t.join("")},Ht=0,Jt=0,Kt=0,Qt={line:1,column:1,seenCR:!1},Vt=0,Xt=[],Yt=0;if("startRule"in L){if(!(L.startRule in M))throw new Error("Can't start parsing from rule \""+L.startRule+'".');S=M[L.startRule]}if(R=S(),R!==O&&Ht===t.length)return R;throw R!==O&&Ht<t.length&&n({type:"end",description:"end of input"}),o(null,Xt,Vt)}return t(e,Error),{SyntaxError:e,parse:r}}(),h=a;s(a,"formats",{enumerable:!0,value:{number:{currency:{style:"currency"},percent:{style:"percent"}},date:{"short":{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},"long":{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{"short":{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},"long":{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}}}),s(a,"__localeData__",{value:c(null)}),s(a,"__addLocaleData",{value:function(t){if(!t||!t.locale)throw new Error("Locale data provided to IntlMessageFormat is missing a `locale` property");a.__localeData__[t.locale.toLowerCase()]=t}}),s(a,"__parse",{value:f.parse}),s(a,"defaultLocale",{enumerable:!0,writable:!0,value:void 0}),a.prototype.resolvedOptions=function(){return{locale:this._locale}},a.prototype._compilePattern=function(t,e,r,n){var o=new p(e,r,n);return o.compile(t)},a.prototype._findPluralRuleFunction=function(t){for(var e=a.__localeData__,r=e[t.toLowerCase()];r;){if(r.pluralRuleFunction)return r.pluralRuleFunction;r=r.parentLocale&&e[r.parentLocale.toLowerCase()]}throw new Error("Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :"+t)},a.prototype._format=function(t,e){var r,n,o,i,a,l="";for(r=0,n=t.length;r<n;r+=1)if(o=t[r],"string"!=typeof o){if(i=o.id,!e||!u.call(e,i))throw new Error("A value must be provided for: "+i);a=e[i],l+=o.options?this._format(o.getOption(a),e):o.format(a)}else l+=o;return l},a.prototype._mergeFormats=function(e,r){var n,o,i={};for(n in e)u.call(e,n)&&(i[n]=o=c(e[n]),r&&u.call(r,n)&&t(o,r[n]));return i},a.prototype._resolveLocale=function(t){"string"==typeof t&&(t=[t]),t=(t||[]).concat(a.defaultLocale);var e,r,n,o,i=a.__localeData__;for(e=0,r=t.length;e<r;e+=1)for(n=t[e].toLowerCase().split("-");n.length;){if(o=i[n.join("-")])return o.locale;n.pop()}var u=t.pop();throw new Error("No locale data has been added to IntlMessageFormat for: "+t.join(", ")+", or the default locale: "+u)};var m={locale:"en",pluralRuleFunction:function(t,e){var r=String(t).split("."),n=!r[1],o=Number(r[0])==t,i=o&&r[0].slice(-1),a=o&&r[0].slice(-2);return e?1==i&&11!=a?"one":2==i&&12!=a?"two":3==i&&13!=a?"few":"other":1==t&&n?"one":"other"}};h.__addLocaleData(m),h.defaultLocale="en";var d=h;this.IntlMessageFormat=d}).call(this);