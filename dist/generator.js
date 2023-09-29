(()=>{"use strict";var t=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,e=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,n=/[^-+\dA-Z]/g;var r={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},a={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(t).padStart(e,"0")},o=function(t){var e=t.y,n=t.m,r=t.d,a=t._,u=t.dayName,o=t.short,i=void 0!==o&&o,m=new Date,s=new Date;s.setDate(s[a+"Date"]()-1);var d=new Date;return d.setDate(d[a+"Date"]()+1),m[a+"FullYear"]()===e&&m[a+"Month"]()===n&&m[a+"Date"]()===r?i?"Tdy":"Today":s[a+"FullYear"]()===e&&s[a+"Month"]()===n&&s[a+"Date"]()===r?i?"Ysd":"Yesterday":d[a+"FullYear"]()===e&&d[a+"Month"]()===n&&d[a+"Date"]()===r?i?"Tmw":"Tomorrow":u},i=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var a=(e-n)/6048e5;return 1+Math.floor(a)},m=function(t){var e=t.getDay();return 0===e&&(e=7),e},s=function(t){return(String(t).match(e)||[""]).pop().replace(n,"").replace(/GMT\+0000/g,"UTC")};const d=document.querySelector("#get-code-btn");d&&(d.onclick=function(){d.classList.toggle("dipped"),setTimeout((()=>{d.classList.toggle("invisible");var e=new Date,n=e.getMonth()-9,c=parseInt(function(e,n,d,c){if(1!==arguments.length||"string"!=typeof e||/\d/.test(e)||(n=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var y=(n=String(r[n]||n||r.default)).slice(0,4);"UTC:"!==y&&"GMT:"!==y||(n=n.slice(4),d=!0,"GMT:"===y&&(c=!0));var f=function(){return d?"getUTC":"get"},l=function(){return e[f()+"Date"]()},M=function(){return e[f()+"Day"]()},D=function(){return e[f()+"Month"]()},T=function(){return e[f()+"FullYear"]()},g=function(){return e[f()+"Hours"]()},h=function(){return e[f()+"Minutes"]()},N=function(){return e[f()+"Seconds"]()},p=function(){return e[f()+"Milliseconds"]()},v=function(){return d?0:e.getTimezoneOffset()},S=function(){return i(e)},H={d:function(){return l()},dd:function(){return u(l())},ddd:function(){return a.dayNames[M()]},DDD:function(){return o({y:T(),m:D(),d:l(),_:f(),dayName:a.dayNames[M()],short:!0})},dddd:function(){return a.dayNames[M()+7]},DDDD:function(){return o({y:T(),m:D(),d:l(),_:f(),dayName:a.dayNames[M()+7]})},m:function(){return D()+1},mm:function(){return u(D()+1)},mmm:function(){return a.monthNames[D()]},mmmm:function(){return a.monthNames[D()+12]},yy:function(){return String(T()).slice(2)},yyyy:function(){return u(T(),4)},h:function(){return g()%12||12},hh:function(){return u(g()%12||12)},H:function(){return g()},HH:function(){return u(g())},M:function(){return h()},MM:function(){return u(h())},s:function(){return N()},ss:function(){return u(N())},l:function(){return u(p(),3)},L:function(){return u(Math.floor(p()/10))},t:function(){return g()<12?a.timeNames[0]:a.timeNames[1]},tt:function(){return g()<12?a.timeNames[2]:a.timeNames[3]},T:function(){return g()<12?a.timeNames[4]:a.timeNames[5]},TT:function(){return g()<12?a.timeNames[6]:a.timeNames[7]},Z:function(){return c?"GMT":d?"UTC":s(e)},o:function(){return(v()>0?"-":"+")+u(100*Math.floor(Math.abs(v())/60)+Math.abs(v())%60,4)},p:function(){return(v()>0?"-":"+")+u(Math.floor(Math.abs(v())/60),2)+":"+u(Math.floor(Math.abs(v())%60),2)},S:function(){return["th","st","nd","rd"][l()%10>3?0:(l()%100-l()%10!=10)*l()%10]},W:function(){return S()},WW:function(){return u(S())},N:function(){return m(e)}};return n.replace(t,(function(t){return t in H?H[t]():t.slice(1,t.length-1)}))}(e,`ss MM hh dd ${n}`).replaceAll(" ","")).toString(36);document.querySelector("#code").innerHTML=c,document.querySelector("#code-span").classList.toggle("invisible")}),300)})})();