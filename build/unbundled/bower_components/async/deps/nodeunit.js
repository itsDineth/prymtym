nodeunit=function(){var JSON={};!function(){"use strict";function f(n){return n<10?"0"+n:n}function quote(n){return escapable.lastIndex=0,escapable.test(n)?'"'+n.replace(escapable,function(n){var t=meta[n];return"string"==typeof t?t:"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+n+'"'}function str(n,t){var e,r,o,i,u,c=gap,a=t[n];switch(a&&"object"==typeof a&&"function"==typeof a.toJSON&&(a=a.toJSON(n)),"function"==typeof rep&&(a=rep.call(t,n,a)),typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(a)){for(i=a.length,e=0;e<i;e+=1)u[e]=str(e,a)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+c+"]":"["+u.join(",")+"]",gap=c,o}if(rep&&"object"==typeof rep)for(i=rep.length,e=0;e<i;e+=1)r=rep[e],"string"==typeof r&&(o=str(r,a),o&&u.push(quote(r)+(gap?": ":":")+o));else for(r in a)Object.hasOwnProperty.call(a,r)&&(o=str(r,a),o&&u.push(quote(r)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+c+"}":"{"+u.join(",")+"}",gap=c,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(n){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(n){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(n,t,e){var r;if(gap="",indent="","number"==typeof e)for(r=0;r<e;r+=1)indent+=" ";else"string"==typeof e&&(indent=e);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":n})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(n,t){var e,r,o=n[t];if(o&&"object"==typeof o)for(e in o)Object.hasOwnProperty.call(o,e)&&(r=walk(o,e),void 0!==r?o[e]=r:delete o[e]);return reviver.call(n,t,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();var assert=this.assert={},types={},core={},nodeunit={},reporter={};return function(){var n={},t=this,e=t.async;"undefined"!=typeof module&&module.exports?module.exports=n:t.async=n,n.noConflict=function(){return t.async=e,n};var r=function(n,t){if(n.forEach)return n.forEach(t);for(var e=0;e<n.length;e+=1)t(n[e],e,n)},o=function(n,t){if(n.map)return n.map(t);var e=[];return r(n,function(n,r,o){e.push(t(n,r,o))}),e},i=function(n,t,e){return n.reduce?n.reduce(t,e):(r(n,function(n,r,o){e=t(e,n,r,o)}),e)},u=function(n){if(Object.keys)return Object.keys(n);var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);return t},c=function(n,t){if(n.indexOf)return n.indexOf(t);for(var e=0;e<n.length;e+=1)if(n[e]===t)return e;return-1};"function"==typeof setImmediate?n.nextTick=function(n){setImmediate(n)}:"undefined"!=typeof process&&process.nextTick?n.nextTick=process.nextTick:n.nextTick=function(n){setTimeout(n,0)},n.forEach=function(n,t,e){if(!n.length)return e();var o=0;r(n,function(r){t(r,function(t){t?(e(t),e=function(){}):(o+=1,o===n.length&&e())})})},n.forEachSeries=function(n,t,e){if(!n.length)return e();var r=0,o=function(){t(n[r],function(t){t?(e(t),e=function(){}):(r+=1,r===n.length?e():o())})};o()};var a=function(t){return function(){var e=Array.prototype.slice.call(arguments);return t.apply(null,[n.forEach].concat(e))}},s=function(t){return function(){var e=Array.prototype.slice.call(arguments);return t.apply(null,[n.forEachSeries].concat(e))}},f=function(n,t,e,r){var i=[];t=o(t,function(n,t){return{index:t,value:n}}),n(t,function(n,t){e(n.value,function(e,r){i[n.index]=r,t(e)})},function(n){r(n,i)})};n.map=a(f),n.mapSeries=s(f),n.reduce=function(t,e,r,o){n.forEachSeries(t,function(n,t){r(e,n,function(n,r){e=r,t(n)})},function(n){o(n,e)})},n.inject=n.reduce,n.foldl=n.reduce,n.reduceRight=function(t,e,r,i){var u=o(t,function(n){return n}).reverse();n.reduce(u,e,r,i)},n.foldr=n.reduceRight;var l=function(n,t,e,r){var i=[];t=o(t,function(n,t){return{index:t,value:n}}),n(t,function(n,t){e(n.value,function(e){e&&i.push(n),t()})},function(n){r(o(i.sort(function(n,t){return n.index-t.index}),function(n){return n.value}))})};n.filter=a(l),n.filterSeries=s(l),n.select=n.filter,n.selectSeries=n.filterSeries;var p=function(n,t,e,r){var i=[];t=o(t,function(n,t){return{index:t,value:n}}),n(t,function(n,t){e(n.value,function(e){e||i.push(n),t()})},function(n){r(o(i.sort(function(n,t){return n.index-t.index}),function(n){return n.value}))})};n.reject=a(p),n.rejectSeries=s(p);var d=function(n,t,e,r){n(t,function(n,t){e(n,function(e){e?r(n):t()})},function(n){r()})};n.detect=a(d),n.detectSeries=s(d),n.some=function(t,e,r){n.forEach(t,function(n,t){e(n,function(n){n&&(r(!0),r=function(){}),t()})},function(n){r(!1)})},n.any=n.some,n.every=function(t,e,r){n.forEach(t,function(n,t){e(n,function(n){n||(r(!1),r=function(){}),t()})},function(n){r(!0)})},n.all=n.every,n.sortBy=function(t,e,r){n.map(t,function(n,t){e(n,function(e,r){e?t(e):t(null,{value:n,criteria:r})})},function(n,t){if(n)return r(n);var e=function(n,t){var e=n.criteria,r=t.criteria;return e<r?-1:e>r?1:0};r(null,o(t.sort(e),function(n){return n.value}))})},n.auto=function(n,t){t=t||function(){};var e=u(n);if(!e.length)return t(null);var o=[],a=[],s=function(n){a.unshift(n)},f=function(n){for(var t=0;t<a.length;t+=1)if(a[t]===n)return void a.splice(t,1)},l=function(){r(a,function(n){n()})};s(function(){o.length===e.length&&t(null)}),r(e,function(e){var r=n[e]instanceof Function?[n[e]]:n[e],u=function(n){n?(t(n),t=function(){}):(o.push(e),l())},a=r.slice(0,Math.abs(r.length-1))||[],p=function(){return i(a,function(n,t){return n&&c(o,t)!==-1},!0)};if(p())r[r.length-1](u);else{var d=function(){p()&&(f(d),r[r.length-1](u))};s(d)}})},n.waterfall=function(t,e){if(!t.length)return e();e=e||function(){};var r=function(t){return function(o){if(o)e(o),e=function(){};else{var i=Array.prototype.slice.call(arguments,1),u=t.next();u?i.push(r(u)):i.push(e),n.nextTick(function(){t.apply(null,i)})}}};r(n.iterator(t))()},n.parallel=function(t,e){if(e=e||function(){},t.constructor===Array)n.map(t,function(n,t){n&&n(function(n){var e=Array.prototype.slice.call(arguments,1);e.length<=1&&(e=e[0]),t.call(null,n,e||null)})},e);else{var r={};n.forEach(u(t),function(n,e){t[n](function(t){var o=Array.prototype.slice.call(arguments,1);o.length<=1&&(o=o[0]),r[n]=o,e(t)})},function(n){e(n,r)})}},n.series=function(t,e){if(e=e||function(){},t.constructor===Array)n.mapSeries(t,function(n,t){n&&n(function(n){var e=Array.prototype.slice.call(arguments,1);e.length<=1&&(e=e[0]),t.call(null,n,e||null)})},e);else{var r={};n.forEachSeries(u(t),function(n,e){t[n](function(t){var o=Array.prototype.slice.call(arguments,1);o.length<=1&&(o=o[0]),r[n]=o,e(t)})},function(n){e(n,r)})}},n.iterator=function(n){var t=function(e){var r=function(){return n.length&&n[e].apply(null,arguments),r.next()};return r.next=function(){return e<n.length-1?t(e+1):null},r};return t(0)},n.apply=function(n){var t=Array.prototype.slice.call(arguments,1);return function(){return n.apply(null,t.concat(Array.prototype.slice.call(arguments)))}};var h=function(n,t,e,r){var o=[];n(t,function(n,t){e(n,function(n,e){o=o.concat(e||[]),t(n)})},function(n){r(n,o)})};n.concat=a(h),n.concatSeries=s(h),n.whilst=function(t,e,r){t()?e(function(o){return o?r(o):void n.whilst(t,e,r)}):r()},n.until=function(t,e,r){t()?r():e(function(o){return o?r(o):void n.until(t,e,r)})},n.queue=function(t,e){var r=0,o=[],i={concurrency:e,push:function(t,e){o.push({data:t,callback:e}),n.nextTick(i.process)},process:function(){if(r<i.concurrency&&o.length){var n=o.splice(0,1)[0];r+=1,t(n.data,function(){r-=1,n.callback&&n.callback.apply(n,arguments),i.process()})}},length:function(){return o.length}};return i};var y=function(n){return function(t){var e=Array.prototype.slice.call(arguments,1);t.apply(null,e.concat([function(t){var e=Array.prototype.slice.call(arguments,1);"undefined"!=typeof console&&(t?console.error&&console.error(t):console[n]&&r(e,function(t){console[n](t)}))}]))}};n.log=y("log"),n.dir=y("dir"),n.memoize=function(n,t){var e={};return t=t||function(n){return n},function(){var r=Array.prototype.slice.call(arguments),o=r.pop(),i=t.apply(null,r);i in e?o.apply(null,e[i]):n.apply(null,r.concat([function(){e[i]=arguments,o.apply(null,arguments)}]))}}}(),function(n){function t(n,t,e,r,o){throw new f.AssertionError({message:e,actual:n,expected:t,operator:r,stackStartFunction:o})}function e(n,t){return n===t||(n instanceof Date&&t instanceof Date?n.getTime()===t.getTime():n instanceof RegExp&&t instanceof RegExp?n.source===t.source&&n.global===t.global&&n.ignoreCase===t.ignoreCase&&n.multiline===t.multiline:p&&n instanceof p&&t instanceof p?function(){var e,r;for(e=0,r=t.length;e<r;e++)if(n[e]!==t[e])return!1;return n.length===t.length}():"object"!=typeof n&&"object"!=typeof t?n==t:i(n,t))}function r(n){return null===n||void 0===n}function o(n){return"[object Arguments]"==Object.prototype.toString.call(n)}function i(n,t){if(r(n)||r(t))return!1;if(n.prototype!==t.prototype)return!1;if(o(n))return!!o(t)&&(n=s.call(n),t=s.call(t),e(n,t));try{var i,u,c=a(n),f=a(t)}catch(l){return!1}if(c.length!=f.length)return!1;for(c.sort(),f.sort(),u=c.length-1;u>=0;u--)if(c[u]!=f[u])return!1;for(u=c.length-1;u>=0;u--)if(i=c[u],!e(n[i],t[i]))return!1;return!0}function u(n,t){return!(!n||!t)&&(t instanceof RegExp?t.test(n.message||n):n instanceof t||t.call({},n)===!0)}function c(n,e,r,o){var i;"string"==typeof r&&(o=r,r=null);try{e()}catch(c){i=c}if(o=(r&&r.name?" ("+r.name+").":".")+(o?" "+o:"."),n&&!i&&t("Missing expected exception"+o),!n&&u(i,r)&&t("Got unwanted exception"+o),n&&i&&r&&!u(i,r)||!n&&i)throw i}var a=function(n){if(Object.keys)return Object.keys(n);if("object"!=typeof n&&"function"!=typeof n)throw new TypeError("-");var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);return t},s=Array.prototype.slice,f=n;f.AssertionError=function(n){this.name="AssertionError",this.message=n.message,this.actual=n.actual,this.expected=n.expected,this.operator=n.operator;var e=n.stackStartFunction||t;Error.captureStackTrace&&Error.captureStackTrace(this,e)},f.AssertionError.super_=Error;var l=function(){this.constructor=f.AssertionError};l.prototype=Error.prototype,f.AssertionError.prototype=new l,f.AssertionError.prototype.toString=function(){return this.message?[this.name+":",this.message].join(" "):[this.name+":","undefined"!=typeof this.expected?JSON.stringify(this.expected):"undefined",this.operator,"undefined"!=typeof this.actual?JSON.stringify(this.actual):"undefined"].join(" ")},f.AssertionError.__proto__=Error.prototype,f.fail=t,f.ok=function(n,e){n||t(n,!0,e,"==",f.ok)},f.equal=function(n,e,r){n!=e&&t(n,e,r,"==",f.equal)},f.notEqual=function(n,e,r){n==e&&t(n,e,r,"!=",f.notEqual)},f.deepEqual=function(n,r,o){e(n,r)||t(n,r,o,"deepEqual",f.deepEqual)};var p=null;if("undefined"!=typeof require&&"undefined"!=typeof process)try{p=require("buffer").Buffer}catch(d){p=null}f.notDeepEqual=function(n,r,o){e(n,r)&&t(n,r,o,"notDeepEqual",f.notDeepEqual)},f.strictEqual=function(n,e,r){n!==e&&t(n,e,r,"===",f.strictEqual)},f.notStrictEqual=function(n,e,r){n===e&&t(n,e,r,"!==",f.notStrictEqual)},f["throws"]=function(n,t,e){c.apply(this,[!0].concat(s.call(arguments)))},f.doesNotThrow=function(n,t,e){c.apply(this,[!1].concat(s.call(arguments)))},f.ifError=function(n){if(n)throw n}}(assert),function(n){n.assertion=function(n){return{method:n.method||"",message:n.message||n.error&&n.error.message||"",error:n.error,passed:function(){return!this.error},failed:function(){return Boolean(this.error)}}},n.assertionList=function(n,t){var e=n||[];return e.failures=function(){for(var n=0,t=0;t<this.length;t+=1)this[t].failed()&&(n+=1);return n},e.passes=function(){return e.length-e.failures()},e.duration=t||0,e};var t=function(t){return function(e,r,o){return function(){var i=arguments[o-1],u=n.assertion({method:e,message:i});try{assert[r].apply(null,arguments)}catch(c){u.error=c}t(u)}}};n.test=function(e,r,o,i){var u,c=[],a=t(function(n){c.push(n),o.log&&async.nextTick(function(){o.log(n)})}),s={done:function(t){if(void 0!==u&&u!==c.length){var a=new Error("Expected "+u+" assertions, "+c.length+" ran"),s=n.assertion({method:"expect",error:a});c.push(s),o.log&&async.nextTick(function(){o.log(s)})}if(t){var f=n.assertion({error:t});c.push(f),o.log&&async.nextTick(function(){o.log(f)})}var l=(new Date).getTime();async.nextTick(function(){var t=n.assertionList(c,l-r);o.testDone(e,t),i(null,c)})},ok:a("ok","ok",2),same:a("same","deepEqual",3),equals:a("equals","equal",3),expect:function(n){u=n},_assertion_list:c};for(var f in assert)assert.hasOwnProperty(f)&&(s[f]=a(f,f,assert[f].length));return s},n.options=function(n){var t=function(t){n[t]=n[t]||function(){}};return t("moduleStart"),t("moduleDone"),t("testStart"),t("testReady"),t("testDone"),n}}(types),function(n){var t=function(n){if(Object.keys)return Object.keys(n);var t=[];for(var e in n)n.hasOwnProperty(e)&&t.push(e);return t},e=function(n){for(var e={},r=t(n),o=0;o<r.length;o+=1)e[r[o]]=n[r[o]];return e};n.runTest=function(n,t,e,r){var o=types.options(e);o.testStart(n);var i=(new Date).getTime(),u=types.test(n,i,o,r);o.testReady(u);try{t(u)}catch(c){u.done(c)}},n.runSuite=function(e,r,o,u){r=i(r);var c=t(r);async.concatSeries(c,function(t,i){var u,c=r[t];if(u=e?[].concat(e,t):[t],u.toString=function(){return this.join(" - ")},"function"==typeof c){for(var a=!1,s=u.toString()===o.testFullSpec,f=0;f<u.length;f+=1)u[f]===o.testspec&&(a=!0);if(o.testFullSpec&&!s||o.testspec&&!a)return i();o.moduleStart&&o.moduleStart(),n.runTest(u,r[t],o,i)}else n.runSuite(u,r[t],o,i)},u)},n.runModule=function(t,r,o,u){function c(){s||(s=!0,f(t))}var a=e(types.options(o)),s=!1,f=a.moduleStart;r=i(r),a.moduleStart=c;var l=(new Date).getTime();n.runSuite(null,r,a,function(n,e){var r=(new Date).getTime(),o=types.assertionList(e,r-l);a.moduleDone(t,o),nodeunit.complete&&nodeunit.complete(t,o),u(null,e)})},n.runModules=function(e,r){var o=types.options(r),i=(new Date).getTime();async.concatSeries(t(e),function(t,r){n.runModule(t,e[t],o,r)},function(n,t){var e=(new Date).getTime();o.done(types.assertionList(t,e-i))})};var r=function(n,t,e){return function(r){var o={};if(t){var i=r.done;r.done=function(n){try{t.call(o,function(t){return n&&t?(r._assertion_list.push(types.assertion({error:n})),i(t)):void i(n||t)})}catch(e){i(e)}}}n?n.call(o,function(n){return n?r.done(n):void e.call(o,r)}):e.call(o,r)}},o=function(n){return n.length?function(t){for(var e=this,r=[],o=0,i=n.length;o<i;o++)!function(t){r.push(function(){return n[t].apply(e,arguments)})}(o);return async.series(r,t)}:null},i=function(n,e,u){var c={},e=e?e.slice():[],u=u?u.slice():[];n.setUp&&(e.push(n.setUp),delete n.setUp),n.tearDown&&(u.unshift(n.tearDown),delete n.tearDown);for(var a=t(n),s=0;s<a.length;s+=1){var f=a[s];"function"==typeof n[f]?c[f]=r(o(e),o(u),n[f]):"object"==typeof n[f]&&(c[f]=i(n[f],e,u))}return c};n.testCase=function(n){return n}}(core),function(n){n.info="Browser-based test reporter",n.run=function(n,t,e){function r(n,t){"innerText"in n?n.innerText=t:"textContent"in n&&(n.textContent=t)}function o(n,t){var e=document.getElementById(t);return e||(e=document.createElement(n),e.id=t,i.appendChild(e)),e}var i,u=(new Date).getTime();t=t||{},i=t.div||document.body;var c=(o("h1","nodeunit-header"),o("h2","nodeunit-banner")),a=o("h2","nodeunit-userAgent"),s=o("ol","nodeunit-tests"),f=o("p","nodeunit-testresult");r(a,navigator.userAgent),nodeunit.runModules(n,{moduleStart:function(n){},testDone:function(n,t){var e=document.createElement("li"),r=document.createElement("strong");r.innerHTML=n+' <b style="color: black;">(<b class="fail">'+t.failures()+'</b>, <b class="pass">'+t.passes()+"</b>, "+t.length+")</b>",e.className=t.failures()?"fail":"pass",e.appendChild(r);var o=document.createElement("ol");o.style.display="none",e.onclick=function(){var n=o.style.display;o.style.display="none"==n?"block":"none"};for(var i=0;i<t.length;i++){var u=document.createElement("li"),c=t[i];c.failed()?(u.innerHTML=(c.message||c.method||"no message")+"<pre>"+(c.error.stack||c.error)+"</pre>",u.className="fail"):(u.innerHTML=c.message||c.method||"no message",u.className="pass"),o.appendChild(u)}e.appendChild(o),s.appendChild(e)},done:function(n){var t=(new Date).getTime(),r=t-u,o=n.failures();c.className=o?"fail":"pass",f.innerHTML="Tests completed in "+r+' milliseconds.<br/><span class="passed">'+n.passes()+'</span> assertions of <span class="all">'+n.length+"<span> passed, "+n.failures()+" failed.",e&&e(n.failures()?new Error("We have got test failures."):void 0)}})}}(reporter),nodeunit=core,nodeunit.assert=assert,nodeunit.reporter=reporter,nodeunit.run=reporter.run,nodeunit}();