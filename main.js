(()=>{"use strict";var e={inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disable",inputErrorClass:"popup__input_invalid",errorClass:"popup__form-item-error"},t=document.querySelector(".articles__grid"),n=document.querySelector(".person__add-article"),r=formUser.userName,o=formUser.userJob,i=(document.querySelector(".person__title"),document.querySelector(".person__sub-title "),document.querySelector(".person__btn-edit")),c=document.querySelector("#popup-btn-confirm"),a=document.querySelector(".person__image-cover");function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var l=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.url,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getCards",value:function(){return fetch("".concat(this.url,"cards"),{headers:this.headers}).then((function(e){return 200===e.status?e.json():Promise.reject("Произошла ошибка")}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"users/me"),{headers:this.headers}).then((function(e){return 200===e.status?e.json():Promise.reject("Произошла ошибка")}))}},{key:"sendCard",value:function(e){var t=e.articleTitle,n=e.linkImage;return fetch("".concat(this.url,"cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return 200===e.status?e.json():Promise.reject("Произошла ошибка")}))}},{key:"putLike",value:function(e){return fetch("".concat(this.url,"cards/").concat(e,"/likes "),{method:"PUT",headers:this.headers}).then((function(e){return 200===e.status?e.json():Promise.reject("Произошла ошибка")}))}},{key:"removeLike",value:function(e){return fetch("".concat(this.url,"cards/").concat(e,"/likes "),{method:"DELETE",headers:this.headers}).then((function(e){return 200===e.status?e.json():Promise.reject("Произошла ошибка")}))}},{key:"removeCard",value:function(e){return fetch("".concat(this.url,"cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return 200===e.status?e.json():Promise.reject("Произошла ошибка")}))}},{key:"sendUserInfo",value:function(e){return fetch("".concat(this.url,"users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.userName,about:e.userJob})}).then((function(e){return 200===e.status?e.json():Promise.reject("Произошла ошибка")}))}},{key:"sendUserAvatar",value:function(e){return fetch("".concat(this.url,"users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then((function(e){return 200===e.status?e.json():Promise.reject("Произошла ошибка")}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-63/",headers:{authorization:"329c4ea8-6d08-414a-aa1f-2a25b10eec2c","Content-Type":"application/json"}});function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function e(t,n,r,o,i,c,a){var u=t.name,s=t.link,l=t.likeUsers,f=t.likes,p=t.id,y=t.owner;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=u,this.link=s,this.likes=f,this.likeUsers=l,this.id=p,this.owner=y,this.selector=n,this.handleCardClick=r,this.openPopup=o,this.checkUser=a,this.putLike=i,this.removeLike=c,this._removeCard=this._removeCard.bind(this),this._openImageCard=this._openImageCard.bind(this),this._toggleLikeStatus=this._toggleLikeStatus.bind(this)}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this.selector).content.querySelector(".articles__item").cloneNode(!0)}},{key:"checkOwner",value:function(){var e=this.checkUser();return e.name==this.owner.name&&e.info==this.owner.about}},{key:"checkLike",value:function(){var e=this.checkUser();return this.likeUsers.some((function(t){return e.name==t.name&&e.info==t.about}))}},{key:"generateCard",value:function(){return this.article=this._getTemplate(),this.likeElement=this.article.querySelector(".articles__likes"),this._cardImage=this.article.querySelector(".articles__image"),this._cardImage.src=this.link,this._cardImage.alt=this.name,this.article.querySelector(".articles__title").textContent=this.name,this.likeElement.textContent=this.likes,this.checkOwner()||(this.article.querySelector(".articles__icon-trush").disabled=!0,this.article.querySelector(".articles__icon-trush").classList.add("articles__icon-trush_disabled")),this.checkLike()&&this.article.querySelector(".articles__icon-like").classList.toggle("articles__icon-like_active"),this._setEventListeners(),this.article}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",this._openImageCard),this.article.querySelector(".articles__icon-trush").addEventListener("click",(function(){e.openPopup(e)})),this.article.querySelector(".articles__icon-like").addEventListener("click",this._toggleLikeStatus)}},{key:"_openImageCard",value:function(e){this.handleCardClick({src:this.link,alt:this.name})}},{key:"changeSumLike",value:function(e){this.likeElement.textContent=e}},{key:"_toggleLikeStatus",value:function(e){e.target.classList.contains("articles__icon-like_active")?this.removeLike(this):this.putLike(this),e.target.classList.toggle("articles__icon-like_active")}},{key:"_removeCard",value:function(){this.article.remove()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.querySelector("".concat(t)),this.btnClosePopup=this.element.querySelector(".popup__btn-close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.element.classList.add("popup_opend"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this.element.classList.remove("popup_opend")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.btnClosePopup.addEventListener("click",(function(){return e.close()})),this.element.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opend")&&e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}(this,e)});function c(e){var t,n=e.selector,r=e.btn,o=e.callback;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n)).callback=o,t.btn=r,t.delete=t.delete.bind(k(t)),t}return t=c,(n=[{key:"setEventListeners",value:function(){g(S(c.prototype),"setEventListeners",this).call(this)}},{key:"delete",value:function(){this.callback(this.card)}},{key:"open",value:function(e){this.card=e,this.btn.addEventListener("click",this.delete),g(S(c.prototype),"open",this).call(this)}},{key:"close",value:function(){this.btn.removeEventListener("click",this.delete),g(S(c.prototype),"close",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(v);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var E=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r.reverse(),this.renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){return e.renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var C=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this.form=document.forms[n],this.buttonSubmitFormPlace=this.form.querySelector("".concat(this._config.submitButtonSelector)),this.formPlaceFields=Array.from(this.form.querySelectorAll("".concat(this._config.inputSelector))),this._btnTextDefault=this.buttonSubmitFormPlace.textContent,this.invalidFieldClass=this._config.inputErrorClass,this.popupBtnInactive=this._config.inactiveButtonClass}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this.formPlaceFields.forEach((function(t){var n=".popup__form-item-error_field_".concat(t.name),r=document.querySelector(n);t.addEventListener("input",(function(n){n.target,e._checkFormValidity(),e._checkFieldValidity(t,r)}))}))}},{key:"_focusHandler",value:function(e){e.target.select()}},{key:"sendingForm",value:function(e){this.buttonSubmitFormPlace.textContent=e?"Сохранение...":this._btnTextDefault}},{key:"toggleButtonState",value:function(e){e.disable?(this.buttonSubmitFormPlace.removeAttribute("disabled"),this.buttonSubmitFormPlace.classList.remove("".concat(this.popupBtnInactive))):(this.buttonSubmitFormPlace.setAttribute("disabled","disabled"),this.buttonSubmitFormPlace.classList.add("".concat(this.popupBtnInactive)))}},{key:"_checkFormValidity",value:function(){this.toggleButtonState({disable:!0});var e=this.formPlaceFields.every((function(e){return e.validity.valid}));return e||this.toggleButtonState({disable:!1}),e}},{key:"resetValidation",value:function(){var e=this;this.formPlaceFields.forEach((function(t){var n=".popup__form-item-error_field_".concat(t.name),r=document.querySelector(n);e._setFieldError(t,r,{valid:!0}),e._checkFormValidity()}))}},{key:"_setFieldError",value:function(e,t,n){var r=n.validationMessage,o=n.valid;t.textContent=r,o?e.classList.remove(this.invalidFieldClass):e.classList.add(this.invalidFieldClass)}},{key:"_checkFieldValidity",value:function(e,t){var n=e.validationMessage,r=e.validity.valid,o={validationMessage:n,valid:r};return this._setFieldError(e,t,o),r}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var I=function(){function e(t){var n=t.name,r=t.info,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=document.querySelector("".concat(n)),this.info=document.querySelector("".concat(r)),this.avatar=document.querySelector("".concat(o))}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.name.textContent,info:this.info.textContent}}},{key:"setUserAvatar",value:function(e){this.avatar.src=e}},{key:"setUserInfo",value:function(e){this.name.textContent=e.userName,this.info.textContent=e.userJob}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(e){var t,n=e.selector,r=e.callback,o=e.resetForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n)).form=t.element.querySelector(".form"),t.callback=r,t.resetForm=o,t._inputList=t.form.querySelectorAll(".popup__input"),t}return t=c,(n=[{key:"setEventListeners",value:function(){var e=this;U(x(c.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(t){e.callback(t)}))}},{key:"close",value:function(){U(x(c.prototype),"close",this).call(this),this.form.reset(),this.resetForm()}},{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(v);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}function N(){return N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},N.apply(this,arguments)}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).imagePopup=t.element.querySelector(".popup__image"),t.figcaptionPopup=t.element.querySelector(".popup__figcaption"),t}return t=c,(n=[{key:"open",value:function(e){var t=e.src,n=e.alt;this.imagePopup.src=t,this.imagePopup.alt=n,this.figcaptionPopup.textContent=n,N(H(c.prototype),"open",this).call(this)}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(v),z=new C(e,"formUser");z.enableValidation();var G=new C(e,"formArticle");G.enableValidation();var K=new C(e,"formUserAvatar");K.enableValidation();var Q=new I({name:".person__title",info:".person__sub-title",avatar:".person__avatar"}),W=new B({selector:"#popup",callback:function(e){e.preventDefault();var t=W.getInputValues();l.sendUserInfo(t).then((function(){z.sendingForm(!0)})).then((function(){z.sendingForm(!1),Q.setUserInfo(t),W.close()})).catch((function(e){console.log(e.message)}))},resetForm:function(){z.resetValidation()}});W.setEventListeners();var X=new w({selector:"#popup-confirm",btn:c,callback:function(e){l.removeCard(e.id).then((function(t){X.close(),e._removeCard()})).catch((function(e){console.log(e.message)}))}});X.setEventListeners();var Y=new M("#popup-image");Y.setEventListeners();var Z=new B({selector:"#popup-avatar",callback:function(e){e.preventDefault();var t=Z.getInputValues();l.sendUserAvatar(t.userLinkImage).then((function(){K.sendingForm(!0)})).then((function(){Q.setUserAvatar(t.userLinkImage),Z.close(),K.sendingForm(!1)})).catch((function(e){console.log(e.message)}))},resetForm:function(){K.resetValidation()}});Z.setEventListeners();var $,ee=new B({selector:"#popup-article",callback:function(e){e.preventDefault();var t=ee.getInputValues();l.sendCard(t).then((function(e){return G.sendingForm(!0),e})).then((function(e){G.sendingForm(!1),$.renderer(e),ee.close()})).catch((function(e){console.log(e.message)}))},resetForm:function(){G.resetValidation()}});ee.setEventListeners(),l.getCards().then((function(e){$=new E({items:e,renderer:function(e){var t=new y({name:e.name,link:e.link,likes:e.likes.length,likeUsers:e.likes,id:e._id,owner:e.owner},"#card-template",(function(e){return Y.open(e)}),(function(e){X.open(e)}),(function(e){l.putLike(e.id).then((function(t){e.changeSumLike(t.likes.length)})).catch((function(e){console.log(e.message)}))}),(function(e){l.removeLike(e.id).then((function(t){e.changeSumLike(t.likes.length)})).catch((function(e){console.log(e.message)}))}),(function(){return Q.getUserInfo()})),n=t.generateCard();$.addItem(n)}},t)})).then((function(){$.renderItems()})).catch((function(e){console.log(e.message)})),l.getUserInfo().then((function(e){var t={userName:e.name,userJob:e.about,src:e.avatar};Q.setUserAvatar(t.src),Q.setUserInfo(t)})).catch((function(e){console.log(e.message)})),i.addEventListener("click",(function(){W.open();var e=Q.getUserInfo(),t=e.info,n=e.name;r.value=n,o.value=t})),n.addEventListener("click",(function(){ee.open(),G.toggleButtonState({disable:!1})})),a.addEventListener("click",(function(){Z.open(),G.toggleButtonState({disable:!1})}))})();