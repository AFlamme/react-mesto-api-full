(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(17),s=n.n(o),i=(n(29),n(22)),r=n(2),u=n.p+"static/media/logo.03b78ada.svg",p=n(3),l=n(8),d=n(0);var h=function(e){var t=Object(p.h)(),n={"/":"\u0412\u044b\u0439\u0442\u0438","/sign-up":"\u0412\u043e\u0439\u0442\u0438","/sign-in":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"};return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:u,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(d.jsxs)("div",{className:"header__menu",children:["/sign-in"===t.pathname&&Object(d.jsx)(l.b,{className:"header__link",to:"/sign-up",children:n[t.pathname]}),"/sign-up"===t.pathname&&Object(d.jsx)(l.b,{className:"header__link",to:"/sign-in",children:n[t.pathname]}),"/"===t.pathname&&Object(d.jsx)("p",{className:"header__link header__link_type_email",children:e.userEmail}),"/"===t.pathname&&Object(d.jsx)(l.b,{onClick:function(){e.onLogout()},to:"",className:"header__link header__link_type_exit",children:n[t.pathname]})]})]})},j=function(){return Object(d.jsx)("div",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 Mesto Russia 2022"})})},m=c.a.createContext(),b=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,o=e.onCardDelete,s=Object(a.useContext)(m),i=t.owner._id===s._id,r=t.likes.some((function(e){return e._id===s._id})),u="card__delete ".concat(i?"card__delete_my":""),p="card__like ".concat(r?"card__like_active":"");return Object(d.jsxs)("li",{className:"card",children:[Object(d.jsx)("button",{onClick:function(){o(t)},className:u,type:"button"}),Object(d.jsx)("img",{className:"card__photo",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(d.jsxs)("div",{className:"card__info",children:[Object(d.jsx)("h2",{className:"card__title",children:t.name}),Object(d.jsxs)("div",{className:"card__like-cont",children:[Object(d.jsx)("button",{onClick:function(){c(t)},className:p,type:"button"}),Object(d.jsxs)("span",{className:"card__likes-container",children:[t.likes.length," "]})]})]})]})},_=function(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,o=e.cards,s=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,u=Object(a.useContext)(m),p=u.name,l=u.about,h=u.avatar;return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__image",children:[Object(d.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(h,")")},children:Object(d.jsx)("button",{onClick:t,type:"button",className:"profile__overlay"})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:p}),Object(d.jsx)("button",{onClick:n,type:"button",className:"profile__edit"})]}),Object(d.jsx)("p",{className:"profile__about",children:l})]})]}),Object(d.jsx)("button",{onClick:c,type:"button",className:"profile__add"})]}),Object(d.jsx)("section",{className:"cards",children:o.map((function(e){return Object(d.jsx)(b,{card:e,onCardClick:s,onCardLike:i,onCardDelete:r},e._id)}))})]})},f=function(e){var t=e.name,n=e.title,a=e.isOpen,c=e.onClose,o=e.children,s=e.container,i=e.handleSubmit,r=e.buttonText;return Object(d.jsx)("div",{className:a?"popup popup_type_".concat(t," popup_opened"):"popup popup_type_".concat(t),children:Object(d.jsxs)("form",{onSubmit:i,name:t,className:s,children:[Object(d.jsx)("button",{type:"button",className:"popup__closed",onClick:c}),Object(d.jsx)("h2",{className:"popup__title",children:n}),o,Object(d.jsx)("button",{className:"popup__button",type:"submit",children:r})]})})};var O=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,o=Object(a.useState)(""),s=Object(r.a)(o,2),i=s[0],u=s[1],p=Object(a.useState)(""),l=Object(r.a)(p,2),h=l[0],j=l[1];return Object(d.jsxs)(f,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,container:"popup__container popup__form",onClose:n,handleSubmit:function(e){e.preventDefault(),c({name:i,link:h}),u(""),j("")},buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(d.jsx)("input",{name:"InputNameCard",type:"text",id:"input__popup-CardName",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430",onChange:function(e){u(e.target.value)},minLength:"2",maxLength:"40",value:i||"",required:!0}),Object(d.jsx)("span",{id:"input__popup-CardName-error",className:"popup__error"}),Object(d.jsx)("input",{type:"url",className:"popup__input",name:"InputImgCard",id:"input__popup-CardImg",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:h||"",onChange:function(e){j(e.target.value)},required:!0}),Object(d.jsx)("span",{id:"input__popup-CardImg-error",className:"popup__error"})]})};var g=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),i=Object(r.a)(s,2),u=i[0],p=i[1];return c.a.useEffect((function(){var t;t="/sign-in",e.onPathChange(t)}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.onSignin(a,u)},children:[Object(d.jsx)("h1",{className:"form__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("input",{type:"email",onChange:function(e){o(e.target.value)},className:"form__item",value:a,id:"signin-email",placeholder:"Email",required:!0}),Object(d.jsx)("input",{type:"password",onChange:function(e){p(e.target.value)},className:"form__item",value:u,id:"signin-password",placeholder:"Password",required:!0}),Object(d.jsx)("button",{type:"submit",className:"form__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})})};var x=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],o=n[1],s=c.a.useState(""),i=Object(r.a)(s,2),u=i[0],p=i[1];return c.a.useEffect((function(){var t;t="/sign-up",e.onPathChange(t)}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault(),e.onSignup(a,u)},children:[Object(d.jsx)("h1",{className:"form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)("input",{type:"email",onChange:function(e){o(e.target.value)},value:a,className:"form__item",id:"signin-email",placeholder:"Email",required:!0}),Object(d.jsx)("input",{type:"password",onChange:function(e){p(e.target.value)},className:"form__item",id:"signin-password",placeholder:"Password",value:u,required:!0}),Object(d.jsx)("button",{type:"submit",className:"form__button",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("p",{className:"form__caption",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(d.jsxs)(l.b,{className:"form__link",to:"/sign-in",children:[" ","\u0412\u043e\u0439\u0442\u0438"," "]})]})]})})},v=n(23),C=n(24);var N=function(e){var t=e.component,n=Object(C.a)(e,["component"]);return Object(d.jsx)(p.b,{children:n.loggedIn?Object(d.jsx)(t,Object(v.a)({},n)):Object(d.jsx)(p.a,{to:"/sign-in"})})};var k=function(e){return Object(d.jsx)("div",{className:e.isOpen?"popup popup_opened":"popup",id:"popup-".concat(e.name),onClick:e.onClose,children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("img",{className:"popup__status-image",src:e.statusImage,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438: ".concat(e.status)}),Object(d.jsx)("p",{className:"popup__status-caption",children:e.title}),Object(d.jsx)("button",{className:"popup__closed",type:"button",onClick:e.onClose})]})})},y=function(e){var t=e.card,n=e.onClose;return Object(d.jsx)("div",{className:t.isOpened?"popup popup_opacity popup_opened":"popup popup_opacity",children:Object(d.jsxs)("div",{className:"popup__content",children:[Object(d.jsxs)("figure",{className:"popup__figure",children:[Object(d.jsx)("img",{className:"popup__image",src:t.link,alt:t.name}),Object(d.jsx)("figcaption",{className:"popup__figcaption",children:t.name})]}),Object(d.jsx)("button",{onClick:n,type:"button",className:"popup__closed",id:"ClosePopupBig"})]})})},S=n(20),E=n(21),P=new(function(){function e(t){Object(S.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(E.a)(e,[{key:"_checkError",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._checkError)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkError)}},{key:"newAvatar",value:function(e){var t={method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})};return fetch("".concat(this._url,"/users/me/avatar"),t).then(this._checkError)}},{key:"removeCard",value:function(e){var t={headers:this._headers,method:"DELETE"};return fetch("".concat(this._url,"/cards/").concat(e),t).then(this._checkError)}},{key:"changeLikeCardStatus",value:function(e,t){var n={headers:this._headers,method:"PUT"},a={headers:this._headers,method:"DELETE"};return fetch("".concat(this._url,"/cards/likes/").concat(e),t?a:n).then(this._checkError)}},{key:"patchProfileInfo",value:function(e){var t={method:"PATCH",headers:this._headers,body:JSON.stringify(e)};return fetch("".concat(this._url,"/users/me"),t).then(this._checkError)}},{key:"patchCard",value:function(e){var t={method:"POST",headers:this._headers,body:JSON.stringify(e)};return fetch("".concat(this._url,"/cards"),t).then(this._checkError)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-43/",headers:{authorization:"292cceda-e820-4d58-9be5-30225e20d80b","Content-Type":"application/json"}});var I=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,o=Object(a.useState)(""),s=Object(r.a)(o,2),i=s[0],u=s[1],p=Object(a.useState)(""),l=Object(r.a)(p,2),h=l[0],j=l[1],b=Object(a.useContext)(m);return Object(a.useEffect)((function(){u(b.name),j(b.about)}),[b,t]),Object(d.jsxs)(f,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",container:"popup__container popup__form",buttonText:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",handleSubmit:function(e){e.preventDefault(),c({name:i,about:h})},isOpen:t,onClose:n,children:[Object(d.jsx)("input",{onChange:function(e){u(e.target.value)},value:i||"",type:"text",className:"popup__input",name:"input-name",id:"input__popup-name",minLength:"2",maxLength:"40",placeholder:"\u0418\u043c\u044f",required:!0}),Object(d.jsx)("span",{id:"input__popup-name-error",className:"popup__error"}),Object(d.jsx)("input",{onChange:function(e){j(e.target.value)},value:h||"",type:"text",className:"popup__input",name:"input-about",id:"input__popup-about",minLength:"2",maxLength:"200",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",required:!0}),Object(d.jsx)("span",{id:"input__popup-about-error",className:"popup__error"})]})};var T=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,o=Object(a.useRef)();return Object(d.jsxs)(f,{name:"refresh",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,container:"popup__container popup__form",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:n,handleSubmit:function(e){e.preventDefault(),c({avatar:o.current.value}),e.target.reset()},children:[Object(d.jsx)("input",{type:"url",className:"popup__input",name:"avatar",id:"input__popup-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:o,defaultValue:""}),Object(d.jsx)("span",{id:"input__popup-avatar-error",className:"popup__error"})]})},w="https://auth.nomoreparties.co";function L(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}var A=n.p+"static/media/done.1b6082f8.svg",D=n.p+"static/media/fail.df8eddf6.svg";var q=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(!1),u=Object(r.a)(s,2),l=u[0],b=u[1],v=Object(a.useState)(!1),C=Object(r.a)(v,2),S=C[0],E=C[1],q=Object(a.useState)(!1),U=Object(r.a)(q,2),J=U[0],B=U[1],F=Object(a.useState)({isOpened:!1}),G=Object(r.a)(F,2),z=G[0],H=G[1],M=Object(a.useState)(!1),R=Object(r.a)(M,2),V=R[0],K=R[1],Q=Object(a.useState)([]),W=Object(r.a)(Q,2),X=W[0],Y=W[1],Z=Object(a.useState)({}),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(""),ae=Object(r.a)(ne,2),ce=ae[0],oe=ae[1],se=Object(a.useState)({opened:!1,success:!1}),ie=Object(r.a)(se,2),re=ie[0],ue=ie[1],pe=Object(a.useState)("/"),le=Object(r.a)(pe,2),de=le[0],he=le[1],je=Object(p.g)();Object(a.useEffect)((function(){!0===n&&P.getUserInfo().then((function(e){te(e)})).catch((function(e){return console.log(e)}))}),[n]),Object(a.useEffect)((function(){!0===n&&P.getInitialCards().then((function(e){Y(e)})).catch((function(e){return console.log(e)}))}),[n]);var me=function(){B(!1),b(!1),E(!1),H({isOpened:!1}),K(!1),ue({opened:!1,success:!1})},be=function(e){he(e)};return c.a.useEffect((function(){var e;(e=localStorage.getItem("token"),fetch("".concat(w,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return L(e)}))).then((function(e){if(!e)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0441\u0435\u0430\u043d\u0441\u0430. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u043d\u043e\u0432\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f");oe(e.data.email),o(!0),je.push("/"),he("/")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0445\u043e\u0434\u0430 \u043f\u043e \u0442\u043e\u043a\u0435\u043d\u0443 ".concat(e)),je.push("/sign-in")}))}),[]),Object(d.jsx)(m.Provider,{value:ee,children:Object(d.jsxs)("div",{className:"body",children:[Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(h,{userEmail:ce,onLogout:function(){localStorage.removeItem("token"),oe(""),o(!1),je.push("/sign-in"),he("/sign-in")},path:de}),Object(d.jsxs)(p.d,{children:[Object(d.jsx)(p.b,{path:"/sign-in",children:Object(d.jsx)(g,{onSignin:function(e,t){(function(e,t){return fetch("".concat(w,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return L(e)}))})(e,t).then((function(t){if(!t.token)throw new Error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u043e\u043a\u0435\u043d \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");localStorage.setItem("token",t.token),oe(e),o(!0),je.push("/"),he("/")})).catch((function(e){console.log(alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438: ".concat(e,". \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445")))}))},onPathChange:be})}),Object(d.jsx)(p.b,{path:"/sign-up",children:Object(d.jsx)(x,{onSignup:function(e,t){(function(e,t){return fetch("".concat(w,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return L(e)}))})(e,t).then((function(e){if(!e)throw new Error("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0439\u0442\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e");oe(e.data.email),ue({opened:!0,success:!0}),o(!0),je.push("/sign-in"),he("/sign-in")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438: ".concat(e)),ue({opened:!0,success:!1})}))},onPathChange:be})}),Object(d.jsx)(N,{path:"/",loggedIn:n,component:_,onEditAvatar:function(){B(!J)},onEditProfile:function(){b(!l)},onCardClick:function(e){var t=e.link,n=e.name,a=e.isOpened;H({link:t,name:n,isOpened:!a})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ee._id}));P.changeLikeCardStatus(e._id,t).then((function(t){Y((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},cards:X,onConfirmPopup:function(){K(!V)},onCardDelete:function(e){P.removeCard(e._id).then((function(){Y((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))},onAddPlace:function(){E(!S)}})]}),Object(d.jsx)(j,{})]}),Object(d.jsx)(I,{isOpen:l,onClose:me,onUpdateUser:function(e){P.patchProfileInfo(e).then((function(e){te(e),me()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(O,{isOpen:S,onClose:me,onAddPlace:function(e){P.patchCard(e).then((function(e){Y([e].concat(Object(i.a)(X))),me()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(T,{isOpen:J,onClose:me,onUpdateAvatar:function(e){P.newAvatar(e).then((function(e){te(e),me()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(f,{name:"sure",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:V,container:"popup__container popup__form",onClose:me}),Object(d.jsx)(y,{onClose:me,card:z}),Object(d.jsx)(k,{isOpen:re.opened,onClose:me,statusImage:re.success?A:D,title:re.success?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437!"})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(q,{})})}),document.getElementById("root")),U()}},[[36,1,2]]]);
//# sourceMappingURL=main.ad181b1f.chunk.js.map