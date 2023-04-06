(()=>{"use strict";var e={inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disable",inputErrorClass:"popup__input_invalid",errorClass:"popup__form-item-error"},t=document.querySelector(".articles__grid"),r=document.querySelector(".person__add-article"),n=formUser.userName,o=formUser.userJob,i=(document.querySelector(".person__title"),document.querySelector(".person__sub-title "),document.querySelector(".person__btn-edit"));function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var l=function(){function e(t,r,n){var o=t.name,i=t.link;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=o,this.link=i,this.selector=r,this.handleCardClick=n,this._removeCard=this._removeCard.bind(this),this._openImageCard=this._openImageCard.bind(this)}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this.selector).content.querySelector(".articles__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this.article=this._getTemplate(),this._cardImage=this.article.querySelector(".articles__image"),this._cardImage.src=this.link,this._cardImage.alt=this.name,this.article.querySelector(".articles__title").textContent=this.name,this._setEventListeners(),this.article}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",this._openImageCard),this.article.querySelector(".articles__icon-trush").addEventListener("click",(function(){e._removeCard()})),this.article.querySelector(".articles__icon-like").addEventListener("click",this._toggleLikeStatus)}},{key:"_openImageCard",value:function(e){this.handleCardClick({src:this.link,alt:this.name})}},{key:"_toggleLikeStatus",value:function(e){e.target.classList.toggle("articles__icon-like_active")}},{key:"_removeCard",value:function(){this.article.remove()}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(o)?o:String(o)),n)}var o}var f=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=n,this.renderer=o,this._container=r}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._initialArray.forEach((function(t){return e.renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}var m=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this.form=document.forms[r],this.buttonSubmitFormPlace=this.form.querySelector("".concat(this._config.submitButtonSelector)),this.formPlaceFields=Array.from(this.form.querySelectorAll("".concat(this._config.inputSelector))),this.invalidFieldClass=this._config.inputErrorClass,this.popupBtnInactive=this._config.inactiveButtonClass}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){var e=this;this.formPlaceFields.forEach((function(t){var r=".popup__form-item-error_field_".concat(t.name),n=document.querySelector(r);t.addEventListener("input",(function(r){r.target,e._checkFormValidity(),e._checkFieldValidity(t,n)}))}))}},{key:"_focusHandler",value:function(e){e.target.select()}},{key:"toggleButtonState",value:function(e){e.disable?(this.buttonSubmitFormPlace.removeAttribute("disabled"),this.buttonSubmitFormPlace.classList.remove("".concat(this.popupBtnInactive))):(this.buttonSubmitFormPlace.setAttribute("disabled","disabled"),this.buttonSubmitFormPlace.classList.add("".concat(this.popupBtnInactive)))}},{key:"_checkFormValidity",value:function(){this.toggleButtonState({disable:!0});var e=this.formPlaceFields.every((function(e){return e.validity.valid}));return e||this.toggleButtonState({disable:!1}),e}},{key:"resetValidation",value:function(){var e=this;this.formPlaceFields.forEach((function(t){var r=".popup__form-item-error_field_".concat(t.name),n=document.querySelector(r);e._setFieldError(t,n,{valid:!0}),e._checkFormValidity()}))}},{key:"_setFieldError",value:function(e,t,r){var n=r.validationMessage,o=r.valid;t.textContent=n,o?e.classList.remove(this.invalidFieldClass):e.classList.add(this.invalidFieldClass)}},{key:"_checkFieldValidity",value:function(e,t){var r=e.validationMessage,n=e.validity.valid,o={validationMessage:r,valid:n};return this._setFieldError(e,t,o),n}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var b=function(){function e(t){var r=t.name,n=t.info;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=document.querySelector("".concat(r)),this.info=document.querySelector("".concat(n))}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this.name.textContent,info:this.info.textContent}}},{key:"setUserInfo",value:function(e){this.name.textContent=e.userName,this.info.textContent=e.userJob}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.querySelector("".concat(t)),this.btnClosePopup=this.element.querySelector(".popup__btn-close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,r;return t=e,(r=[{key:"open",value:function(){this.element.classList.add("popup_opend"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this.element.classList.remove("popup_opend")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.btnClosePopup.addEventListener("click",(function(){return e.close()})),this.element.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opend")&&e.close()}))}}])&&_(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==S(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},w.apply(this,arguments)}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(o){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t,r=e.selector,n=e.callback,o=e.resetForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,r)).form=t.element.querySelector(".form"),t.callback=n,t.resetForm=o,t._inputList=t.form.querySelectorAll(".popup__input"),t}return t=a,(r=[{key:"setEventListeners",value:function(){var e=this;w(j(a.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(t){e.callback(t)}))}},{key:"close",value:function(){w(j(a.prototype),"close",this).call(this),this.form.reset(),this.resetForm()}},{key:"getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(g);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===O(o)?o:String(o)),n)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},L.apply(this,arguments)}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(n);if(o){var r=q(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).imagePopup=t.element.querySelector(".popup__image"),t.figcaptionPopup=t.element.querySelector(".popup__figcaption"),t}return t=a,(r=[{key:"open",value:function(e){var t=e.src,r=e.alt;this.imagePopup.src=t,this.imagePopup.alt=r,this.figcaptionPopup.textContent=r,L(q(a.prototype),"open",this).call(this)}}])&&C(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(g),T=new m(e,"formUser");T.enableValidation();var R=new m(e,"formArticle");R.enableValidation();var x=new b({name:".person__title",info:".person__sub-title"}),V=new E({selector:"#popup",callback:function(e){e.preventDefault();var t=V.getInputValues();x.setUserInfo(t),V.close()},resetForm:function(){T.resetValidation()}});V.setEventListeners();var B=new I("#popup-image");B.setEventListeners();var A=new E({selector:"#popup-article",callback:function(e){e.preventDefault();var t=A.getInputValues(),r={name:t.articleTitle,link:t.linkImage};U.renderer(r),A.close()},resetForm:function(){R.resetValidation()}});A.setEventListeners();var U=new f({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=new l({name:e.name,link:e.link},"#card-template",(function(e){return B.open(e)})).generateCard();U.addItem(t)}},t);U.renderItems(),i.addEventListener("click",(function(){V.open();var e=x.getUserInfo(),t=e.info,r=e.name;n.value=r,o.value=t})),r.addEventListener("click",(function(){A.open(),R.toggleButtonState({disable:!1})}))})();