(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(19),r=n.n(c),i=n(8),o=(n(31),n(25)),l=n(3),u=n(2),d=a.a.createContext(),p=n.p+"static/media/avatar.50cc18be.png",j=n(9),b=n(20),h=n(21),m=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},_=new(function(){function e(t){var n=t.baseUrl,s=t.headers;Object(b.a)(this,e),this._url=n,this._headers=s}return Object(h.a)(e,[{key:"_getHeaders",value:function(){var e=localStorage.getItem("jwt");return Object(j.a)({Authorization:"Bearer ".concat(e)},this._headers)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._getHeaders()}).then(m)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._getHeaders()}).then(m)}},{key:"renderUserAndCards",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({name:e.name,about:e.about})}).then(m)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._getHeaders(),body:JSON.stringify({name:e.name,link:e.link})}).then(m)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._getHeaders(),body:JSON.stringify({avatar:e.avatar})}).then(m)}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._getHeaders()}).then(m)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._getHeaders()}).then(m)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e._id),{method:"DELETE",headers:this._getHeaders()}).then(m)}}]),e}())({baseUrl:"https://api.domainname.aflamme.nomorepartiesxyz.ru",headers:{"Content-Type":"application/json"}}),f="https://api.domainname.aflamme.nomorepartiesxyz.ru",O=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},g=n(0);function x(){return Object(g.jsx)("footer",{className:"footer page__footer",children:Object(g.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})}var v=n.p+"static/media/logo.03b78ada.svg",N=n(22);function C(e){var t=e.email,n=e.onSignOut,a=Object(s.useState)(!1),c=Object(l.a)(a,2),r=c[0],o=c[1];var d=Object(N.useMediaQuery)({query:"(max-width: 500px)"});return Object(s.useEffect)((function(){o(!!d)}),[d]),Object(g.jsxs)("header",{className:"header page__header",children:[Object(g.jsx)(i.b,{to:"/",className:"header__logo-link",children:Object(g.jsx)("img",{src:v,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})}),Object(g.jsxs)(u.d,{children:[Object(g.jsx)(u.b,{path:"/signin",children:Object(g.jsx)(i.b,{className:"header__link",to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(g.jsx)(u.b,{path:"/signup",children:Object(g.jsx)(i.b,{className:"header__link",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(g.jsxs)(u.b,{exact:!0,path:"/",children:[!r&&Object(g.jsxs)("div",{className:"header__info",children:[Object(g.jsx)("p",{className:"header__email",children:t}),Object(g.jsx)("button",{className:"header__button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(g.jsx)("button",{className:r?"header__burger-button":"header__burger-close",onClick:function(){o(!r)}})]})]})]})}function k(e){var t=e.card,n=e.onClose,s=e.isOpen;return(0,e.useEscapePress)(n,s),Object(g.jsx)("div",{id:"popup-picture",className:"popup popup_opasity-high ".concat(s&&"popup_opened"),onClick:n,children:Object(g.jsxs)("figure",{className:"popup__picture-container",onClick:function(e){e.stopPropagation()},children:[Object(g.jsx)("img",{className:"popup__photo",alt:'\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 "'.concat(t.name,'"'),src:t.link}),Object(g.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_general",onClick:n}),Object(g.jsx)("figcaption",{className:"popup__photo-name",children:t.name})]})})}function y(e){var t=e.card,n=e.onCardDelete,a=e.onCardClick,c=e.onCardLike,r=Object(s.useContext)(d),i=t.owner===r._id,o=t.likes.some((function(e){return e===r._id})),l="element__like-button ".concat(o&&"element__like-button_active");return Object(g.jsxs)("li",{className:"element",children:[i&&Object(g.jsx)("button",{type:"button",className:"element__delete-button",onClick:function(){n(t)}}),Object(g.jsx)("img",{src:t.link,alt:'\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 "'.concat(t.name,'"'),className:"element__photo",onClick:function(){a(t)}}),Object(g.jsxs)("div",{className:"element__container",children:[Object(g.jsx)("h2",{className:"element__title",children:t.name}),Object(g.jsxs)("div",{className:"element__like-container",children:[Object(g.jsx)("button",{type:"button",className:l,onClick:function(){c(t)}}),Object(g.jsx)("span",{className:"element__like-counter",children:t.likes.length})]})]})]})}function E(e){var t=e.cards,n=e.onEditAvatar,a=e.onEditProfile,c=e.onAddPlace,r=e.onCardClick,i=e.onCardDelete,o=e.onCardLike,l=Object(s.useContext)(d);return Object(g.jsxs)("main",{className:"main page__main",children:[Object(g.jsxs)("section",{"aria-label":"\u0411\u043b\u043e\u043a \u0441 \u043f\u0440\u043e\u0444\u0438\u043b\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile main__profile",children:[Object(g.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(l.avatar,")")},onClick:n}),Object(g.jsxs)("div",{className:"profile__info",children:[Object(g.jsx)("h1",{className:"profile__name",children:l.name}),Object(g.jsx)("p",{className:"profile__job",children:l.about}),Object(g.jsx)("button",{id:"profile__edit-button",type:"button",className:"profile__edit-button",onClick:a})]}),Object(g.jsx)("button",{id:"profile__add-button",type:"button",className:"profile__add-button",onClick:c})]}),Object(g.jsx)("section",{"aria-label":"\u0411\u043b\u043e\u043a \u0441 \u0444\u043e\u0442\u043e-\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430\u043c\u0438",className:"elements",children:Object(g.jsx)("ul",{className:"elements__list",children:t.map((function(e){return Object(g.jsx)(y,{card:e,onCardClick:r,onCardDelete:i,onCardLike:o},e._id)}))})})]})}var S=n(13);function P(){var e=Object(s.useState)({}),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)({}),r=Object(l.a)(c,2),i=r[0],o=r[1],u=Object(s.useState)(!1),d=Object(l.a)(u,2),p=d[0],b=d[1],h=Object(s.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(e),o(t),b(n)}),[a,o,b]);return{values:n,handleChange:function(e){var t=e.target,s=t.value,c=t.name;a(Object(j.a)(Object(j.a)({},n),{},Object(S.a)({},c,s))),o(Object(j.a)(Object(j.a)({},i),{},Object(S.a)({},c,t.validationMessage))),b(t.closest("form").checkValidity())},resetForm:h,errors:i,isValid:p}}function L(e){var t=e.name,n=e.title,s=e.isOpen,a=e.onClose,c=e.children,r=e.onSubmit,i=e.useEscapePress,o=e.submitText,l=void 0===o?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":o,u=e.isDisabled,d=void 0!==u&&u;return i(a,s),Object(g.jsx)("div",{id:"popup-".concat(t),className:"popup ".concat(s&&"popup_opened"),onClick:a,children:Object(g.jsxs)("div",{className:"popup__container",onClick:function(e){e.stopPropagation()},children:[Object(g.jsx)("h2",{className:"popup__title",children:n}),Object(g.jsxs)("form",{id:"popup-".concat(t,"__form"),name:"".concat(t,"-popup"),className:"popup__form",noValidate:!0,onSubmit:r,children:[c,Object(g.jsx)("button",{id:"popup-".concat(t,"__save-button"),type:"submit",className:"popup__save-button ".concat(d&&"popup__save-button_disabled"),disabled:d,children:l}),Object(g.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_general",onClick:a})]})]})})}function w(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,c=e.useEscapePress,r=Object(s.useContext)(d),i=P(),o=i.values,l=i.handleChange,u=i.resetForm,p=i.errors,j=i.isValid;return Object(s.useEffect)((function(){r&&u(r,{},!0)}),[t,r,u]),Object(g.jsx)(L,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a(o)},useEscapePress:c,isDisabled:!j,children:Object(g.jsxs)("fieldset",{className:"popup__info",children:[Object(g.jsxs)("label",{className:"popup__label",children:[Object(g.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",name:"name",value:o.name||"",id:"name",minLength:"2",maxLength:"40",required:!0,className:"popup__input",onChange:l}),Object(g.jsx)("span",{className:"popup__error",id:"name-error",children:p.name||""})]}),Object(g.jsxs)("label",{className:"popup__label",children:[Object(g.jsx)("input",{type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",name:"about",value:o.about||"",id:"about",minLength:"2",maxLength:"200",required:!0,className:"popup__input",onChange:l}),Object(g.jsx)("span",{className:"popup__error",id:"about-error",children:p.about||""})]})]})})}function T(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,c=e.useEscapePress,r=P(),i=r.values,o=r.handleChange,l=r.resetForm,u=r.errors,d=r.isValid;return Object(s.useEffect)((function(){l()}),[t,l]),Object(g.jsx)(L,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,useEscapePress:c,onSubmit:function(e){e.preventDefault(),a(i)},isDisabled:!d,children:Object(g.jsx)("fieldset",{className:"popup__info",children:Object(g.jsxs)("label",{className:"popup__label",children:[Object(g.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"avatar",id:"avatar__link",className:"popup__input",value:i.avatar||"",onChange:o,required:!0}),Object(g.jsx)("span",{className:"popup__error",id:"avatar__link-error",children:u.avatar||""})]})})})}function A(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,c=e.useEscapePress,r=P(),i=r.values,o=r.handleChange,l=r.resetForm,u=r.errors,d=r.isValid;return Object(s.useEffect)((function(){l()}),[t,l]),Object(g.jsx)(L,{name:"create-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a(i)},useEscapePress:c,isDisabled:!d,children:Object(g.jsxs)("fieldset",{className:"popup__info",children:[Object(g.jsxs)("label",{className:"popup__label",children:[Object(g.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430",name:"name",value:i.name||"",onChange:o,id:"create-card__title",minLength:"2",maxLength:"30",required:!0,className:"popup__input"}),Object(g.jsx)("span",{className:"popup__error",id:"create-card__title-error",children:u.name||""})]}),Object(g.jsxs)("label",{className:"popup__label",children:[Object(g.jsx)("input",{type:"url",placeholder:"URL-c\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",value:i.link||"",onChange:o,id:"create-card__link",required:!0,className:"popup__input"}),Object(g.jsx)("span",{className:"popup__error",id:"create-card__link-error",children:u.link||""})]})]})})}function D(e){var t=e.isOpen,n=e.onClose,s=e.isAccept,a=e.useEscapePress;return Object(g.jsx)(L,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitText:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s()},useEscapePress:a})}var U=function(e){var t=e.isOpen;return Object(g.jsx)("div",{className:"popup popup_loader ".concat(t&&"popup_opened"),children:Object(g.jsxs)("div",{className:"popup__loader",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})})};function I(e){var t=e.onLogin,n=P(),a=n.values,c=n.handleChange,r=n.resetForm,i=n.errors,o=n.isValid;return Object(s.useEffect)((function(){r()}),[r]),Object(g.jsxs)("div",{className:"register page__register",children:[Object(g.jsx)("h2",{className:"register__title",children:"\u0412\u0445\u043e\u0434"}),Object(g.jsxs)("form",{name:"form_register",className:"register__form",noValidate:!0,onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(g.jsxs)("fieldset",{className:"register__fieldset",children:[Object(g.jsxs)("label",{className:"register__label",children:[Object(g.jsx)("input",{className:"register__input",type:"email",placeholder:"Email",name:"email",minLength:"2",maxLength:"40",value:a.email||"",onChange:c,required:!0}),Object(g.jsx)("span",{className:"register__error",id:"email-error",children:i.email||""})]}),Object(g.jsxs)("label",{className:"register__label",children:[Object(g.jsx)("input",{className:"register__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:"2",maxLength:"40",value:a.password||"",onChange:c,required:!0}),Object(g.jsx)("span",{className:"register__error",id:"password-error",children:i.password||""})]})]}),Object(g.jsx)("button",{type:"submit",className:"register__button ".concat(!o&&"register__button_disabled"),disabled:!o,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function F(e){var t=e.handleRegister,n=P(),a=n.values,c=n.handleChange,r=n.resetForm,o=n.errors,l=n.isValid;return Object(s.useEffect)((function(){r()}),[r]),Object(g.jsxs)("div",{className:"register page__register",children:[Object(g.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(g.jsxs)("form",{name:"form_register",className:"register__form",noValidate:!0,onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(g.jsxs)("fieldset",{className:"register__fieldset",children:[Object(g.jsxs)("label",{className:"register__label",children:[Object(g.jsx)("input",{className:"register__input",type:"email",placeholder:"Email",name:"email",minLength:"2",maxLength:"40",value:a.email||"",onChange:c,required:!0}),Object(g.jsx)("span",{className:"register__error",id:"email-error",children:o.email||""})]}),Object(g.jsxs)("label",{className:"register__label",children:[Object(g.jsx)("input",{className:"register__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",minLength:"2",maxLength:"40",value:a.password||"",onChange:c,required:!0}),Object(g.jsx)("span",{className:"register__error",id:"password-error",children:o.password||""})]})]}),Object(g.jsx)("button",{type:"submit",className:"register__button ".concat(!l&&"register__button_disabled"),disabled:!l,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(g.jsx)(i.b,{to:"/signin",className:"register__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})}function H(e){var t=e.onClose,n=e.status,s=n.isOpen,a=n.successful;return(0,e.useEscapePress)(t,s),Object(g.jsx)("div",{id:"popup-info-tooltip",className:"popup ".concat(s&&"popup_opened"),onClick:t,children:Object(g.jsxs)("div",{className:"popup__container",onClick:function(e){e.stopPropagation()},children:[Object(g.jsx)("div",{className:"popup__status ".concat(a?"popup__status_success":"popup__status_fail")}),Object(g.jsx)("h2",{className:"popup__title popup__title_center",children:a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."}),Object(g.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_general",onClick:t})]})})}var q=n(26),V=function(e){var t=e.component,n=Object(q.a)(e,["component"]);return Object(g.jsx)(u.b,{children:function(){return!0===n.loggedIn?Object(g.jsx)(t,Object(j.a)({},n)):Object(g.jsx)(u.a,{to:"/signin"})}})};var J=function(){var e=Object(u.g)(),t=Object(s.useState)(!1),n=Object(l.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(!1),i=Object(l.a)(r,2),j=i[0],b=i[1],h=Object(s.useState)(!1),m=Object(l.a)(h,2),v=m[0],N=m[1],y=Object(s.useState)({}),S=Object(l.a)(y,2),P=S[0],L=S[1],q=Object(s.useState)(!1),J=Object(l.a)(q,2),z=J[0],B=J[1],M=Object(s.useState)(!1),R=Object(l.a)(M,2),G=R[0],Q=R[1],Y=Object(s.useState)({}),K=Object(l.a)(Y,2),W=K[0],X=K[1],Z=Object(s.useState)({name:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",about:"\u041e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435",avatar:p}),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(s.useState)([]),se=Object(l.a)(ne,2),ae=se[0],ce=se[1],re=Object(s.useState)(!1),ie=Object(l.a)(re,2),oe=ie[0],le=ie[1],ue=Object(s.useState)({isOpen:!1,successful:!1}),de=Object(l.a)(ue,2),pe=de[0],je=de[1],be=Object(s.useState)(!1),he=Object(l.a)(be,2),me=he[0],_e=he[1],fe=Object(s.useState)(""),Oe=Object(l.a)(fe,2),ge=Oe[0],xe=Oe[1];function ve(e,t){Object(s.useEffect)((function(){if(t){var n=function(t){"Escape"===t.key&&e()};return document.addEventListener("keyup",n),function(){document.removeEventListener("keyup",n)}}}),[e,t])}function Ne(){c(!1),b(!1),N(!1),B(!1),Q(!1),je({isOpen:!1,successful:!1})}function Ce(e){je({isOpen:!0,successful:e})}return Object(s.useEffect)((function(){var t=localStorage.getItem("jwt");t&&function(e){return fetch("".concat(f,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(O)}(t).then((function(t){t&&(xe(t.email),_e(!0),e.push("/"))})).catch((function(e){return console.log(e)}))}),[e]),Object(s.useEffect)((function(){me&&(le(!0),_.renderUserAndCards().then((function(e){var t=Object(l.a)(e,2),n=t[0],s=t[1];te(n),ce(s)})).catch((function(e){return console.log(e)})).finally((function(){return le(!1)})))}),[me]),Object(g.jsx)("div",{className:"page",children:Object(g.jsxs)(d.Provider,{value:ee,children:[Object(g.jsx)(C,{email:ge,onSignOut:function(){localStorage.removeItem("jwt"),xe(""),_e(!1),e.push("/signin")}}),Object(g.jsxs)(u.d,{children:[Object(g.jsx)(V,{exact:!0,path:"/",component:E,loggedIn:me,cards:ae,onEditProfile:function(){c(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){N(!0)},onCardClick:function(e){B(!0),L(e)},onCardDelete:function(e){X(e),Q(!0)},onCardLike:function(e){e.likes.some((function(e){return e===ee._id}))?_.deleteLike(e).then((function(t){ce((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)})):_.setLike(e).then((function(t){ce((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))}}),Object(g.jsx)(u.b,{path:"/signin",children:Object(g.jsx)(I,{onLogin:function(t){var n=t.email,s=t.password;le(!0),function(e,t){return fetch("".concat(f,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(O)}(n,s).then((function(t){t.token&&(xe(n),_e(!0),localStorage.setItem("jwt",t.token),e.push("/"))})).catch((function(e){Ce(!1),console.log(e)})).finally((function(){return le(!1)}))}})}),Object(g.jsx)(u.b,{path:"/signup",children:Object(g.jsx)(F,{handleRegister:function(t){var n=t.email,s=t.password;le(!0),function(e,t){return fetch("".concat(f,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then(O)}(n,s).then((function(t){t&&(Ce(!0),e.push("/signin"))})).catch((function(e){Ce(!1),console.log(e)})).finally((function(){return le(!1)}))}})})]}),Object(g.jsx)(x,{}),Object(g.jsx)(U,{isOpen:oe}),Object(g.jsx)(H,{onClose:Ne,status:pe,useEscapePress:ve}),Object(g.jsx)(w,{isOpen:a,onClose:Ne,onUpdateUser:function(e){le(!0),_.setUserInfo(e).then((function(e){te(e)})).then((function(){Ne()})).catch((function(e){return console.log(e)})).finally((function(){return le(!1)}))},useEscapePress:ve}),Object(g.jsx)(A,{isOpen:j,onClose:Ne,onAddPlace:function(e){le(!0),_.addCard(e).then((function(e){ce([e].concat(Object(o.a)(ae))),Ne()})).catch((function(e){return console.log(e)})).finally((function(){return le(!1)}))},useEscapePress:ve}),Object(g.jsx)(T,{isOpen:v,onClose:Ne,onUpdateAvatar:function(e){le(!0),_.setUserAvatar(e).then((function(e){te(e)})).then((function(){Ne()})).catch((function(e){return console.log(e)})).finally((function(){return le(!1)}))},useEscapePress:ve}),Object(g.jsx)(D,{isOpen:G,onClose:Ne,isAccept:function(){le(!0),_.deleteCard(W).then((function(){ce((function(e){return e.filter((function(e){return e._id!==W._id}))}))})).then((function(){return Ne()})).catch((function(e){return console.log(e)})).finally((function(){return le(!1)}))},useEscapePress:ve}),Object(g.jsx)(k,{card:P,isOpen:z,onClose:Ne,useEscapePress:ve})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(J,{})})}),document.getElementById("root")),z()}},[[38,1,2]]]);
//# sourceMappingURL=main.b833b3ff.chunk.js.map