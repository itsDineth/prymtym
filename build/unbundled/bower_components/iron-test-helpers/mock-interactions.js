!function(n){"use strict";function e(n){var e=n.getBoundingClientRect();return{y:e.top+e.height/2,x:e.left+e.width/2}}function t(n){var e=n.getBoundingClientRect();return{y:e.top,x:e.left}}function o(n,e){var t=0;return n.map(function(n){var o={identifier:t++,target:e,clientX:n.x,clientY:n.y};return window.Touch?new window.Touch(o):o})}function u(n,t,u){t=t||e(u);var c,i=o([t],u),r={touches:i,targetTouches:i,changedTouches:i};if(window.TouchEvent)c=new TouchEvent(n,r);else{c=new CustomEvent(n,{bubbles:!0,cancelable:!0});for(var a in r)c[a]=r[a]}u.dispatchEvent(c)}function c(n,e,t){var o,u={bubbles:!0,cancelable:!0,clientX:e.x,clientY:e.y,buttons:1};O?o=new MouseEvent(n,u):(o=document.createEvent("MouseEvent"),o.initMouseEvent(n,u.bubbles,u.cancelable,null,null,0,0,u.clientX,u.clientY,!1,!1,!1,!1,0,null)),t.dispatchEvent(o)}function i(n,e,t,o){o=o||5;for(var u=Math.round((e.x-t.x)/o),i=Math.round((e.y-t.y)/o),r={x:e.x,y:e.y},a=o;a>0;a--)c("mousemove",r,n),r.x+=u,r.y+=i;c("mousemove",{x:t.x,y:t.y},n)}function r(n,t,o,u){t=0|t,o=0|o,u=u||5,a(n);var c=e(n),r={x:c.x+t,y:c.y+o};i(n,c,r,u),f(n,r)}function a(n,t){t=t||e(n),c("mousedown",t,n)}function f(n,t){t=t||e(n),c("mouseup",t,n)}function l(n,t){t=t||e(n),c("click",t,n)}function s(n,t){t=t||e(n),u("touchstart",t,n)}function d(n,t){t=t||e(n),u("touchend",t,n)}function y(n,e,t){t&&t.emulateTouch&&(s(n),d(n)),a(n),Polymer.Base.async(function(){f(n),l(n),e&&e()})}function v(n,t){if("none"!==window.getComputedStyle(n)["pointer-events"]){var o=e(n);t&&t.emulateTouch&&(s(n,o),d(n,o)),a(n,o),f(n,o),l(n,o)}}function b(n){Polymer.Base.fire("focus",{},{bubbles:!1,node:n})}function h(n){Polymer.Base.fire("blur",{},{bubbles:!1,node:n})}function m(n,e,t,o){var u=new CustomEvent(n,{detail:0,bubbles:!0,cancelable:!0});return u.keyCode=e,u.code=e,t=t||[],"string"==typeof t&&(t=[t]),u.shiftKey=t.indexOf("shift")!==-1,u.altKey=t.indexOf("alt")!==-1,u.ctrlKey=t.indexOf("ctrl")!==-1,u.metaKey=t.indexOf("meta")!==-1,u.key=o,u}function p(n,e,t,o,u){n.dispatchEvent(m(e,t,o,u))}function w(n,e,t,o){p(n,"keydown",e,t,o)}function x(n,e,t,o){p(n,"keyup",e,t,o)}function E(n,e,t,o){w(n,e,t,o),Polymer.Base.async(function(){x(n,e,t,o)},1)}function k(n){E(n,13)}function g(n){E(n,32)}var O=function(){var n=!1;try{n=Boolean(new MouseEvent("x"))}catch(e){}return n}();n.MockInteractions={focus:b,blur:h,down:a,up:f,downAndUp:y,tap:v,track:r,pressAndReleaseKeyOn:E,pressEnter:k,pressSpace:g,keyDownOn:w,keyUpOn:x,keyboardEventFor:m,keyEventOn:p,middleOfNode:e,topLeftOfNode:t}}(this);