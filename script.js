(()=>{"use strict";var e={807:(e,t,s)=>{s.d(t,{Z:()=>u});var a=s(81),i=s.n(a),o=s(645),y=s.n(o),r=s(667),n=s.n(r),c=new URL(s(490),s.b),k=new URL(s(378),s.b),h=new URL(s(229),s.b),d=y()(i()),l=n()(c),f=n()(k),p=n()(h);d.push([e.id,'@font-face{font-family:"Gugi Cyrillic";src:url('+l+') format("woff2"),url('+f+') format("woff");font-weight:normal;font-style:normal;font-display:swap}*{margin:0;padding:0;box-sizing:border-box;font-family:"Gugi Cyrillic"}body{height:100vh;background:center/cover no-repeat url('+p+");display:flex;justify-content:center;align-items:center}.keyboard{height:100%;max-height:635px;padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;background-color:rgba(45,40,36,.8);border:2px solid #d1cbbd;border-radius:10px 0 10px 0}.keyboard__output{display:flex;width:850px;flex:1;gap:20px}.keyboard__input{border-radius:10px 0 10px 0;padding:20px;outline:none;resize:none;border:none;background:none;flex:1;color:#d1cbbd;font-size:16px}.keyboard__input::-webkit-scrollbar{width:5px;background:none}.keyboard__input::-webkit-scrollbar-thumb{background-color:#d1cbbd;border-radius:5px}.keyboard__info{width:250px;display:flex;flex-direction:column;justify-content:space-between;white-space:pre-line;color:#d1cbbd}.keyboard__os{font-size:12px}.keyboard__wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;width:850px;margin:0 auto}.keyboard__line{display:flex;gap:10px}.keyboard__btn{border:2px solid #d1cbbd;height:45px;width:45px;border-radius:10px 0 10px 0;display:flex;justify-content:center;align-items:center;font-size:18px;transition:.1s;cursor:pointer;color:#d1cbbd;user-select:none;transform:scale(1)}.keyboard__btn_big{width:90px;font-size:14px}.keyboard__btn_space{width:265px}.keyboard__btn.isPushed{color:#65dc98;border-color:#65dc98}.keyboard__btn.hover{background-color:rgba(45,40,36,.9)}.keyboard__btn.active{background-color:rgba(101,220,152,.7);color:#2d2824;transform:scale(0.9)}",""]);const u=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",a=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),a&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),a&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,a,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var y={};if(a)for(var r=0;r<this.length;r++){var n=this[r][0];null!=n&&(y[n]=!0)}for(var c=0;c<e.length;c++){var k=[].concat(e[c]);a&&y[k[0]]||(void 0!==o&&(void 0===k[5]||(k[1]="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {").concat(k[1],"}")),k[5]=o),s&&(k[2]?(k[1]="@media ".concat(k[2]," {").concat(k[1],"}"),k[2]=s):k[2]=s),i&&(k[4]?(k[1]="@supports (".concat(k[4],") {").concat(k[1],"}"),k[4]=i):k[4]="".concat(i)),t.push(k))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function s(e){for(var s=-1,a=0;a<t.length;a++)if(t[a].identifier===e){s=a;break}return s}function a(e,a){for(var o={},y=[],r=0;r<e.length;r++){var n=e[r],c=a.base?n[0]+a.base:n[0],k=o[c]||0,h="".concat(c," ").concat(k);o[c]=k+1;var d=s(h),l={css:n[1],media:n[2],sourceMap:n[3],supports:n[4],layer:n[5]};if(-1!==d)t[d].references++,t[d].updater(l);else{var f=i(l,a);a.byIndex=r,t.splice(r,0,{identifier:h,updater:f,references:1})}y.push(h)}return y}function i(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,i){var o=a(e=e||[],i=i||{});return function(e){e=e||[];for(var y=0;y<o.length;y++){var r=s(o[y]);t[r].references--}for(var n=a(e,i),c=0;c<o.length;c++){var k=s(o[c]);0===t[k].references&&(t[k].updater(),t.splice(k,1))}o=n}}},569:e=>{var t={};e.exports=function(e,s){var a=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(s)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,s)=>{e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var a="";s.supports&&(a+="@supports (".concat(s.supports,") {")),s.media&&(a+="@media ".concat(s.media," {"));var i=void 0!==s.layer;i&&(a+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),a+=s.css,i&&(a+="}"),s.media&&(a+="}"),s.supports&&(a+="}");var o=s.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},229:(e,t,s)=>{e.exports=s.p+"353b0d3f3fb82db44c2f.jpeg"},378:(e,t,s)=>{e.exports=s.p+"027c05fcd5b156a3871a.woff"},490:(e,t,s)=>{e.exports=s.p+"d04ebc70477189150671.woff2"}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,s),o.exports}s.m=e,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),s.b=document.baseURI||self.location.href,(()=>{const e={ru:[[{key:"ё",shiftKey:"Ё",keyCode:"Backquote",capsLockKey:"Ё"},{key:"1",shiftKey:"!",keyCode:"Digit1"},{key:"2",shiftKey:'"',keyCode:"Digit2"},{key:"3",shiftKey:"№",keyCode:"Digit3"},{key:"4",shiftKey:";",keyCode:"Digit4"},{key:"5",shiftKey:"%",keyCode:"Digit5"},{key:"6",shiftKey:":",keyCode:"Digit6"},{key:"7",shiftKey:"?",keyCode:"Digit7"},{key:"8",shiftKey:"*",keyCode:"Digit8"},{key:"9",shiftKey:"(",keyCode:"Digit9"},{key:"0",shiftKey:")",keyCode:"Digit0"},{key:"-",shiftKey:"_",keyCode:"Minus"},{key:"=",shiftKey:"+",keyCode:"Equal"},{key:"Backspace",keyCode:"Backspace",keyClasses:"keyboard__btn_big"}],[{key:"Tab",keyCode:"Tab",keyClasses:"keyboard__btn_big"},{key:"й",shiftKey:"Й",keyCode:"KeyQ",capsLockKey:"Й"},{key:"ц",shiftKey:"Ц",keyCode:"KeyW",capsLockKey:"Ц"},{key:"у",shiftKey:"У",keyCode:"KeyE",capsLockKey:"У"},{key:"к",shiftKey:"К",keyCode:"KeyR",capsLockKey:"К"},{key:"е",shiftKey:"Е",keyCode:"KeyT",capsLockKey:"Е"},{key:"н",shiftKey:"Н",keyCode:"KeyY",capsLockKey:"Н"},{key:"г",shiftKey:"Г",keyCode:"KeyU",capsLockKey:"Г"},{key:"ш",shiftKey:"Ш",keyCode:"KeyI",capsLockKey:"Ш"},{key:"щ",shiftKey:"Щ",keyCode:"KeyO",capsLockKey:"Щ"},{key:"з",shiftKey:"З",keyCode:"KeyP",capsLockKey:"З"},{key:"х",shiftKey:"Х",keyCode:"BracketLeft",capsLockKey:"Х"},{key:"ъ",shiftKey:"Ъ",keyCode:"BracketRight",capsLockKey:"Ъ"},{key:"DEL",keyCode:"NumpadDecimal",keyClasses:"keyboard__btn_big"}],[{key:"CapsLock",keyCode:"CapsLock",keyClasses:"keyboard__btn_big"},{key:"ф",shiftKey:"Ф",keyCode:"KeyA",capsLockKey:"Ф"},{key:"ы",shiftKey:"Ы",keyCode:"KeyS",capsLockKey:"Ы"},{key:"в",shiftKey:"В",keyCode:"KeyD",capsLockKey:"В"},{key:"а",shiftKey:"А",keyCode:"KeyF",capsLockKey:"А"},{key:"п",shiftKey:"П",keyCode:"KeyG",capsLockKey:"П"},{key:"р",shiftKey:"Р",keyCode:"KeyH",capsLockKey:"Р"},{key:"о",shiftKey:"О",keyCode:"KeyJ",capsLockKey:"О"},{key:"л",shiftKey:"Л",keyCode:"KeyK",capsLockKey:"Л"},{key:"д",shiftKey:"Д",keyCode:"KeyL",capsLockKey:"Д"},{key:"ж",shiftKey:"Ж",keyCode:"Semicolon",capsLockKey:"Ж"},{key:"э",shiftKey:"Э",keyCode:"Quote",capsLockKey:"Э"},{key:"\\",shiftKey:"/",keyCode:"Backslash"},{key:"Enter",keyCode:"Enter",keyClasses:"keyboard__btn_big"}],[{key:"Shift",keyCode:"ShiftLeft",keyClasses:"keyboard__btn_big"},{key:"]",shiftKey:"[",keyCode:"IntlBackslash"},{key:"я",shiftKey:"Я",keyCode:"KeyZ",capsLockKey:"Я"},{key:"ч",shiftKey:"Ч",keyCode:"KeyX",capsLockKey:"Ч"},{key:"с",shiftKey:"С",keyCode:"KeyC",capsLockKey:"С"},{key:"м",shiftKey:"М",keyCode:"KeyV",capsLockKey:"М"},{key:"и",shiftKey:"И",keyCode:"KeyB",capsLockKey:"И"},{key:"т",shiftKey:"Т",keyCode:"KeyN",capsLockKey:"Т"},{key:"ь",shiftKey:"Ь",keyCode:"KeyM",capsLockKey:"Ь"},{key:"б",shiftKey:"Б",keyCode:"Comma",capsLockKey:"Б"},{key:"ю",shiftKey:"Ю",keyCode:"Period",capsLockKey:"Ю"},{key:".",shiftKey:",",keyCode:"Slash"},{key:"↑",keyCode:"ArrowUp"},{key:"Shift",keyCode:"ShiftRight",keyClasses:"keyboard__btn_big"}],[{key:"RU",keyCode:"KeyLang"},{key:"Ctrl",keyCode:"ControlLeft"},{key:"⌥",keyCode:"AltLeft"},{key:"⌘",keyCode:"MetaLeft"},{key:" ",keyCode:"Space",keyClasses:"keyboard__btn_space"},{key:"⌘",keyCode:"MetaRight"},{key:"⌥",keyCode:"AltRight"},{key:"←",keyCode:"ArrowLeft"},{key:"↓",keyCode:"ArrowDown"},{key:"→",keyCode:"ArrowRight"}]],en:[[{key:"`",shiftKey:"¬",keyCode:"Backquote"},{key:"1",shiftKey:"!",keyCode:"Digit1"},{key:"2",shiftKey:'"',keyCode:"Digit2"},{key:"3",shiftKey:"£",keyCode:"Digit3"},{key:"4",shiftKey:"$",keyCode:"Digit4"},{key:"5",shiftKey:"%",keyCode:"Digit5"},{key:"6",shiftKey:"^",keyCode:"Digit6"},{key:"7",shiftKey:"&",keyCode:"Digit7"},{key:"8",shiftKey:"*",keyCode:"Digit8"},{key:"9",shiftKey:"(",keyCode:"Digit9"},{key:"0",shiftKey:")",keyCode:"Digit0"},{key:"-",shiftKey:"_",keyCode:"Minus"},{key:"=",shiftKey:"+",keyCode:"Equal"},{key:"Backspace",keyCode:"Backspace",keyClasses:"keyboard__btn_big"}],[{key:"Tab",keyCode:"Tab",keyClasses:"keyboard__btn_big"},{key:"q",shiftKey:"Q",keyCode:"KeyQ",capsLockKey:"Q"},{key:"w",shiftKey:"W",keyCode:"KeyW",capsLockKey:"W"},{key:"e",shiftKey:"E",keyCode:"KeyE",capsLockKey:"E"},{key:"r",shiftKey:"R",keyCode:"KeyR",capsLockKey:"R"},{key:"t",shiftKey:"T",keyCode:"KeyT",capsLockKey:"T"},{key:"y",shiftKey:"Y",keyCode:"KeyY",capsLockKey:"Y"},{key:"u",shiftKey:"U",keyCode:"KeyU",capsLockKey:"U"},{key:"i",shiftKey:"I",keyCode:"KeyI",capsLockKey:"I"},{key:"o",shiftKey:"O",keyCode:"KeyO",capsLockKey:"O"},{key:"p",shiftKey:"P",keyCode:"KeyP",capsLockKey:"P"},{key:"[",shiftKey:"{",keyCode:"BracketLeft"},{key:"]",shiftKey:"}",keyCode:"BracketRight"},{key:"DEL",keyCode:"NumpadDecimal",keyClasses:"keyboard__btn_big"}],[{key:"CapsLock",keyCode:"CapsLock",keyClasses:"keyboard__btn_big"},{key:"a",shiftKey:"A",keyCode:"KeyA",capsLockKey:"A"},{key:"s",shiftKey:"S",keyCode:"KeyS",capsLockKey:"S"},{key:"d",shiftKey:"D",keyCode:"KeyD",capsLockKey:"D"},{key:"f",shiftKey:"F",keyCode:"KeyF",capsLockKey:"F"},{key:"g",shiftKey:"G",keyCode:"KeyG",capsLockKey:"G"},{key:"h",shiftKey:"H",keyCode:"KeyH",capsLockKey:"H"},{key:"j",shiftKey:"J",keyCode:"KeyJ",capsLockKey:"J"},{key:"k",shiftKey:"K",keyCode:"KeyK",capsLockKey:"K"},{key:"l",shiftKey:"L",keyCode:"KeyL",capsLockKey:"L"},{key:";",shiftKey:":",keyCode:"Semicolon"},{key:"'",shiftKey:"@",keyCode:"Quote"},{key:"#",shiftKey:"~",keyCode:"Backslash"},{key:"Enter",keyCode:"Enter",keyClasses:"keyboard__btn_big"}],[{key:"Shift",keyCode:"ShiftLeft",keyClasses:"keyboard__btn_big"},{key:"\\",shiftKey:"|",keyCode:"IntlBackslash"},{key:"z",shiftKey:"Z",keyCode:"KeyZ",capsLockKey:"Z"},{key:"x",shiftKey:"X",keyCode:"KeyX",capsLockKey:"X"},{key:"c",shiftKey:"C",keyCode:"KeyC",capsLockKey:"C"},{key:"v",shiftKey:"V",keyCode:"KeyV",capsLockKey:"V"},{key:"b",shiftKey:"B",keyCode:"KeyB",capsLockKey:"B"},{key:"n",shiftKey:"N",keyCode:"KeyN",capsLockKey:"N"},{key:"m",shiftKey:"M",keyCode:"KeyM",capsLockKey:"M"},{key:",",shiftKey:"<",keyCode:"Comma"},{key:".",shiftKey:">",keyCode:"Period"},{key:"/",shiftKey:"?",keyCode:"Slash"},{key:"↑",keyCode:"ArrowUp"},{key:"Shift",keyCode:"ShiftRight",keyClasses:"keyboard__btn_big"}],[{key:"EN",keyCode:"KeyLang"},{key:"Ctrl",keyCode:"ControlLeft"},{key:"⌥",keyCode:"AltLeft"},{key:"⌘",keyCode:"MetaLeft"},{key:" ",keyCode:"Space",keyClasses:"keyboard__btn_space"},{key:"⌘",keyCode:"MetaRight"},{key:"⌥",keyCode:"AltRight"},{key:"←",keyCode:"ArrowLeft"},{key:"↓",keyCode:"ArrowDown"},{key:"→",keyCode:"ArrowRight"}]]};function t(e,t,...s){const a=document.createElement(e);return s.length&&a.classList.add(...s),t.append(a),a}var a=s(379),i=s.n(a),o=s(795),y=s.n(o),r=s(569),n=s.n(r),c=s(565),k=s.n(c),h=s(216),d=s.n(h),l=s(589),f=s.n(l),p=s(807),u={};u.styleTagTransform=f(),u.setAttributes=k(),u.insert=n().bind(null,"head"),u.domAPI=y(),u.insertStyleElement=d(),i()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{(new class{constructor(){this.buttons={ru:e.ru,en:e.en},this.keyboard=null,this.textarea=null,this.wrapper=null,this.ls=window.localStorage,this.lang=this.getLang(),this.isShift=!1,this.isShiftPush=!1,this.isCapsLock=!1,this.fKeys=["F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12"]}setLang(e){this.ls.setItem("keyboard-lang",e)}getLang(){return this.ls.getItem("keyboard-lang")?this.ls.getItem("keyboard-lang"):"ru"}renderShiftCapslockButtons(e=!1){const t=this.buttons[this.lang].flat(),s=this.isShift||e;t.forEach((e=>{(e.capsLockKey||e.shiftKey)&&(this.wrapper.querySelector(`[data-key=${e.keyCode}]`).innerHTML=e.key)})),this.isCapsLock&&!s?t.forEach((e=>{e.capsLockKey&&(this.wrapper.querySelector(`[data-key=${e.keyCode}]`).innerHTML=e.capsLockKey)})):!this.isCapsLock&&s?t.forEach((e=>{e.shiftKey&&(this.wrapper.querySelector(`[data-key=${e.keyCode}]`).innerHTML=e.shiftKey)})):this.isCapsLock&&s&&t.forEach((e=>{e.shiftKey&&(this.wrapper.querySelector(`[data-key=${e.keyCode}]`).innerHTML=e.shiftKey),e.capsLockKey&&(this.wrapper.querySelector(`[data-key=${e.keyCode}]`).innerHTML=e.key)}))}changeTextValue(e){this.textarea.setRangeText(e,this.textarea.selectionStart,this.textarea.selectionEnd,"end"),this.textarea.focus()}changeTextareaSelection(e){this.textarea.selectionStart=e,this.textarea.selectionEnd=this.textarea.selectionStart,this.textarea.focus()}toUp(){this.changeTextareaSelection(0)}toDown(){this.changeTextareaSelection(this.textarea.value.length)}toLeft(){this.changeTextareaSelection(this.textarea.selectionStart-1)}toRight(){this.changeTextareaSelection(this.textarea.selectionStart+1)}handleTabKeyEvent(){this.changeTextValue("\t")}handleEnterKeyEvent(){this.changeTextValue("\n")}handleBackspaceKeyEvent(){const e=this.textarea.selectionStart,t=this.textarea.selectionEnd;if(!this.textarea.value||0===e&&e===t)return;const s=this.textarea.selectionStart,a=this.textarea.selectionEnd,i=this.textarea.value;this.textarea.value="",s===a?(this.changeTextValue(i.slice(0,s-1)+i.slice(a)),this.changeTextareaSelection(s-1)):(this.changeTextValue(i.slice(0,s)+i.slice(a)),this.changeTextareaSelection(s))}handleDeleteKeyEvent(){if(!this.textarea.value||this.textarea.selectionStart===this.textarea.value.length)return;const e=this.textarea.selectionStart,t=this.textarea.selectionEnd,s=this.textarea.value;this.textarea.value="",e===t?(this.changeTextValue(s.slice(0,e)+s.slice(e+1)),this.changeTextareaSelection(e)):(this.changeTextValue(s.slice(0,e)+s.slice(t)),this.changeTextareaSelection(e))}handleKeyDownEvent(e){if(this.fKeys.includes(e.code)||"ControlRight"===e.code)return;const t=this.wrapper.querySelector(`[data-key=${e.code}]`);if(t)switch(t.classList.add("active"),e.ctrlKey&&e.altKey&&("ru"===this.lang?this.lang="en":this.lang="ru",this.setLang(this.lang),setTimeout((()=>{this.wrapper.querySelector("[data-key=KeyLang]").innerHTML=this.buttons[this.lang][4][0].key,this.renderShiftCapslockButtons(e.shiftKey)}),100)),e.code){case"ShiftLeft":case"ShiftRight":e.preventDefault(),this.isShift=!0,this.isShiftPush=!0,this.renderShiftCapslockButtons(e.shiftKey);break;case"CapsLock":e.preventDefault(),this.isCapsLock=!this.isCapsLock,window.navigator.userAgent.includes("Macintosh")?(t.classList.toggle("isPushed"),this.renderShiftCapslockButtons(e.shiftKey),setTimeout((()=>this.wrapper.querySelector("[data-key=CapsLock]").classList.remove("active")),100)):(setTimeout((()=>t.classList.toggle("isPushed")),100),this.renderShiftCapslockButtons(e.shiftKey));break;case"Tab":e.preventDefault(),this.handleTabKeyEvent();break;case"Backspace":e.preventDefault(),this.handleBackspaceKeyEvent();break;case"NumpadDecimal":e.preventDefault(),this.handleDeleteKeyEvent();break;case"Enter":e.preventDefault(),this.handleEnterKeyEvent();break;case"ControlLeft":case"AltLeft":case"AltRight":case"MetaLeft":case"MetaRight":e.preventDefault();break;case"ArrowUp":e.preventDefault(),this.toUp();break;case"ArrowDown":e.preventDefault(),this.toDown();break;case"ArrowLeft":e.preventDefault(),this.toLeft();break;case"ArrowRight":e.preventDefault(),this.toRight();break;default:e.preventDefault(),this.changeTextValue(t.innerHTML)}}handleKeyUpEvent(e){if(this.fKeys.includes(e.code)||"ControlRight"===e.code)return;const t=this.wrapper.querySelector(`[data-key=${e.code}]`);if(t){switch(e.code){case"ShiftLeft":case"ShiftRight":e.preventDefault(),this.isShift=!1,this.isShiftPush=!1,t.classList.contains("isPushed")&&(this.wrapper.querySelector("[data-key=ShiftLeft]").classList.remove("isPushed"),this.wrapper.querySelector("[data-key=ShiftRight]").classList.remove("isPushed")),this.renderShiftCapslockButtons(e.shiftKey);break;case"CapsLock":e.preventDefault(),window.navigator.userAgent.includes("Macintosh")&&(this.isCapsLock=!this.isCapsLock,t.classList.toggle("isPushed"),this.renderShiftCapslockButtons(e.shiftKey),t.classList.add("active"));break;default:e.preventDefault()}setTimeout((()=>t.classList.remove("active")),100)}}handleMouseClick(e){if(!e.target.classList.contains("keyboard__btn"))return;const t=this.wrapper.querySelector(`[data-key=${e.target.dataset.key}]`);switch(e.target.dataset.key){case"KeyLang":"ru"===this.lang?this.lang="en":this.lang="ru",this.setLang(this.lang),setTimeout((()=>{this.renderShiftCapslockButtons(),t.innerHTML=this.buttons[this.lang][4][0].key}),100);break;case"ShiftLeft":case"ShiftRight":this.isShift=!this.isShift,this.isShift?(this.wrapper.querySelector("[data-key=ShiftLeft]").classList.add("isPushed"),this.wrapper.querySelector("[data-key=ShiftRight]").classList.add("isPushed")):(this.wrapper.querySelector("[data-key=ShiftLeft]").classList.remove("isPushed"),this.wrapper.querySelector("[data-key=ShiftRight]").classList.remove("isPushed")),this.renderShiftCapslockButtons();break;case"CapsLock":this.isCapsLock=!this.isCapsLock,t.classList.toggle("isPushed"),this.renderShiftCapslockButtons();break;case"Tab":this.handleTabKeyEvent();break;case"Backspace":this.handleBackspaceKeyEvent();break;case"NumpadDecimal":this.handleDeleteKeyEvent();break;case"Enter":this.handleEnterKeyEvent();break;case"ControlLeft":case"AltLeft":case"AltRight":case"MetaLeft":case"MetaRight":break;case"ArrowUp":e.preventDefault(),this.toUp();break;case"ArrowDown":e.preventDefault(),this.toDown();break;case"ArrowLeft":e.preventDefault(),this.toLeft();break;case"ArrowRight":e.preventDefault(),this.toRight();break;default:this.changeTextValue(e.target.innerHTML),!this.isShiftPush&&this.isShift&&(this.isShift=!1,this.wrapper.querySelector("[data-key=ShiftLeft").classList.remove("isPushed"),this.wrapper.querySelector("[data-key=ShiftRight").classList.remove("isPushed"),this.renderShiftCapslockButtons())}e.target.classList.add("active"),setTimeout((()=>e.target.classList.remove("active")),100)}init(){this.keyboard=t("div",document.body,"keyboard");const e=t("div",this.keyboard,"keyboard__output");this.textarea=t("textarea",e,"keyboard__input");const s=t("div",e,"keyboard__info");t("div",s,"keyboard__bundle").append("Available hotkeys:\n1. Ctrl + ⌥ / Left Ctrl + Left Alt - switch language"),t("div",s,"keyboard__os").append("Please pay attention:\nYou're using an experimental macOS based system."),this.wrapper=t("div",this.keyboard,"keyboard__wrapper"),this.buttons[this.lang].forEach((e=>{const s=t("div",this.wrapper,"keyboard__line");e.forEach((e=>{const a=["keyboard__btn"];e.keyClasses&&a.push(e.keyClasses);const i=t("div",s,...a);i.innerHTML=e.key,i.dataset.key=e.keyCode}))})),this.wrapper.addEventListener("click",this.handleMouseClick.bind(this)),window.addEventListener("mouseover",(e=>{e.target.classList.contains("keyboard__btn")&&e.target.classList.add("hover")})),window.addEventListener("mouseout",(e=>{e.target.classList.contains("keyboard__btn")&&e.target.classList.remove("hover")})),window.addEventListener("keydown",this.handleKeyDownEvent.bind(this)),window.addEventListener("keyup",this.handleKeyUpEvent.bind(this)),this.textarea.focus()}}).init()}))})()})();