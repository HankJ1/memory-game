(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{12:function(e,r,c){},15:function(e,r,c){"use strict";c.r(r);var a=c(1),n=c.n(a),t=c(6),i=c.n(t),o=(c(12),c(2)),l=(c(5),c(0)),s=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"header-container",children:[Object(l.jsxs)("div",{className:"logo",children:["Level ",Object(l.jsx)("span",{className:"score-num",children:e.level})," / 7"]}),Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h3",{children:"Pop Culture Memory Test"}),Object(l.jsx)("h4",{children:"True Geniuses Only"})]}),Object(l.jsxs)("div",{className:"score-container",children:[Object(l.jsx)("div",{className:"score-container-sub",id:"current-score",children:"Current Score:"})," ",Object(l.jsx)("span",{className:"score-span",children:e.recievedCurrentScore}),Object(l.jsx)("div",{className:"score-container-sub",id:"people-remaining",children:"Remaining:"}),Object(l.jsx)("span",{className:"score-span",children:e.remainingPeople}),Object(l.jsx)("div",{className:"score-container-sub",id:"best-score",children:"Best Score:"}),Object(l.jsx)("span",{className:"score-span",children:e.recievedBestScore})]})]})})},m=c(4),u=c.n(m),d=c(7),g={createRedScreen:function(){var e=document.querySelector("html"),r=document.createElement("div");r.setAttribute("style","height: 100vh; width: 100vw; position: absolute; top: 0; background-color: red; opacity: 0.7;"),e.appendChild(r),setTimeout((function(){r.remove()}),50)},minimizeCards:function(){var e=document.querySelectorAll(".single-card-container");e.forEach((function(e){e.style.transitionDuration="125ms",e.style.transform="scale(0.5)"})),setTimeout((function(){e.forEach((function(e){e.style.transitionDuration="125ms",e.style.transform=""}))}),100)}},j=function(e){var r=function(){var r=Object(d.a)(u.a.mark((function r(){var c,a,n;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c=JSON.parse(localStorage.getItem("memoryObjArray")),a=JSON.parse(localStorage.getItem("memoryScoreArray")),g.minimizeCards(),0==c[e.number].clicked?(a.currentScore=a.currentScore+1,a.roundScore=a.roundScore+1,c[e.number].clicked=!0,a.currentScore>a.bestScore&&(a.bestScore=a.bestScore+1,console.log("new best triggered")),console.log(a.roundScore),a.roundScore==5*e.level?(a.roundScore=0,localStorage.setItem("memoryScoreArray",JSON.stringify(a)),localStorage.setItem("memoryObjArray",JSON.stringify(S)),console.log("level 1 complete"),e.levelCleared()):(localStorage.setItem("memoryObjArray",JSON.stringify(c)),localStorage.setItem("memoryScoreArray",JSON.stringify(a)),e.randomize()),e.firstClick()):(n=5*e.level-a.roundScore,e.secondClick(),setTimeout((function(){alert("Ooof ".concat(e.charName," is has already been selected \nyou had ").concat(n," unique options left!"))}),55));case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return Object(l.jsx)("div",{onClick:r,children:Object(l.jsxs)("div",{className:"single-card-container",children:[Object(l.jsx)("div",{className:"card-photo",children:Object(l.jsx)("img",{className:"card-photo-img",src:e.charURL})}),Object(l.jsx)("div",{className:"top-span"}),Object(l.jsx)("div",{className:"card-caption",children:e.charName})]})})},p=function(e){var r=[1,2,3,4,5],c=Object(a.useState)([]),n=Object(o.a)(c,2),t=n[0],i=n[1],s=Object(a.useState)(1),m=Object(o.a)(s,2),u=m[0],d=m[1];Object(a.useEffect)((function(){return p(),function(){console.log("unmounting...")}}),[u]);var g=function(){console.log("check the level"),d((function(e){return e+1})),e.changeRemaining(u+1),console.log("check the level")},p=function(){for(var e=5*u,r=[],c=function(){var e=parseInt(38*Math.random());void 0==r.find((function(r){return r==e}))&&r.push(e)};r.length<e;)c();h(r)},h=function(e){for(var c=[],a=0;a<e.length;a++){var n=void 0;n=a<=r.length/2?parseInt(Math.random()*c.length):parseInt(Math.random()*c.length)+1,c.splice(n,0,e[a])}i(c)};return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"main-card-container",children:t.map((function(r,c){return Object(l.jsx)(j,{number:r,level:u,levelCleared:g,charURL:S[r].url,charName:S[r].name,randomize:function(){return h(t)},firstClick:function(){return e.clickedEvent()},secondClick:function(){return e.gameLost()}},c)}))})})};var h=function(){var e=Object(a.useState)(0),r=Object(o.a)(e,2),c=r[0],n=r[1],t=Object(a.useState)(5),i=Object(o.a)(t,2),m=i[0],u=i[1],d=Object(a.useState)(0),j=Object(o.a)(d,2),h=j[0],b=j[1],y=Object(a.useState)(1),k=Object(o.a)(y,2),f=k[0],O=k[1],v=Object(a.useState)(1),N=Object(o.a)(v,2),x=N[0],A=N[1];return Object(a.useEffect)((function(){localStorage.setItem("memoryObjArray",JSON.stringify(S));var e=JSON.parse(localStorage.getItem("memoryScoreArray"));console.log(e),null!==e?(e.currentScore=0,e.roundScore=0,localStorage.setItem("memoryScoreArray",JSON.stringify(e)),b(e.bestScore)):localStorage.setItem("memoryScoreArray",JSON.stringify({currentScore:0,roundScore:0,bestScore:0}))}),[]),Object(l.jsxs)("div",{className:"total-memory-card",children:[Object(l.jsx)(s,{recievedCurrentScore:c,level:x,recievedBestScore:h,remainingPeople:m}),Object(l.jsx)(p,{gameLost:function(){console.log("unsuccessful click entered..."),localStorage.setItem("memoryObjArray",JSON.stringify(S)),localStorage.setItem("memoryScoreArray",JSON.stringify({currentScore:0,roundScore:0,bestScore:h})),n(0),u(5),A(1),g.createRedScreen(),O(1*Math.random())},clickedEvent:function(){var e=JSON.parse(localStorage.getItem("memoryScoreArray"));n((function(e){return e+1})),b(e.bestScore),0!==e.roundScore&&u((function(e){return e-1}))},changeRemaining:function(e){return r=e,console.log(r),u(5*r),A((function(e){return e+1})),void(7==x&&(alert("Congratulations you did It!!!! You have the memory of \n My Octopus Teacher!"),localStorage.setItem("memoryObjArray",JSON.stringify(S)),localStorage.setItem("memoryScoreArray",JSON.stringify({currentScore:0,roundScore:0,bestScore:h})),n(0),u(5),A(1),O(1*Math.random())));var r}},f)]})};var S=[{name:"Achilles",url:"./images/achilles.jpg",clicked:!1},{name:"Jack Sparrow",url:"./images/also-jack-sparrow.png",clicked:!1},{name:"Alvin Kamara",url:"./images/alvin-kamara.jpg",clicked:!1},{name:"Arya Stark",url:"./images/arya-stark.jpg",clicked:!1},{name:"Ash Ketchum",url:"./images/ash-ketchum.png",clicked:!1},{name:"Berry O",url:"./images/barrack-obama.jpg",clicked:!1},{name:"Ben Rickert",url:"./images/bigshort-pitt.jpg",clicked:!1},{name:"Billy Red Sack",url:"./images/bill-burr.jpeg",clicked:!1},{name:"Black Widow",url:"./images/black-widow.jpg",clicked:!1},{name:"Elizabeth Swann",url:"./images/elizabeth-swann.jpg",clicked:!1},{name:"Emily Blunt",url:"./images/emily-blunt-edge-of-tomorrow.jpg",clicked:!1},{name:"Salted Pork",url:"./images/gimlie.jpg",clicked:!1},{name:"Chris Tucker",url:"./images/chris-tucker.jpg",clicked:!1},{name:"National Treasure",url:"./images/girl-from-national-treasure.jpg",clicked:!1},{name:"Godzilla!",url:"./images/godzilla.jpg",clicked:!1},{name:"Hermoine Granger",url:"./images/hermoine-granger.jpg",clicked:!1},{name:"Honest Abe",url:"./images/honest-abe.jpeg",clicked:!1},{name:"Killin Nazis",url:"./images/inglorious-bastards-pitt.jpg",clicked:!1},{name:"Jack Sparrow",url:"./images/jack-sparrow.jpg",clicked:!1},{name:"Jean K Jean",url:"./images/jean-k-jean.png",clicked:!1},{name:"Jessica Day",url:"./images/jessica-day.jpeg",clicked:!1},{name:"My Watch has Ended",url:"./images/jon-snow.jpg",clicked:!1},{name:"Khal Drogo",url:"./images/khal-drogo.jpg",clicked:!1},{name:"Killua",url:"./images/killua.jpg",clicked:!1},{name:"Boi",url:"./images/kratos.png",clicked:!1},{name:"Lady Mormont",url:"./images/lady-mormont.jpg",clicked:!1},{name:"Margaery Tyrell",url:"./images/Margaery-Tyrell.jpg",clicked:!1},{name:"Mikey the Pikey",url:"./images/mike-the-pike.jpg",clicked:!1},{name:"Mr. Smith",url:"./images/mr-smith-pitt.jpg",clicked:!1},{name:"My Octopus Teacher",url:"./images/my-octopus-teacher.jpeg",clicked:!1},{name:"Nasim Pedrad",url:"./images/nasim-pedrad.jpg",clicked:!1},{name:"Nikki Glaser",url:"./images/nikki-glaser.jpg",clicked:!1},{name:"Professor Snape",url:"./images/professor-snape.jpg",clicked:!1},{name:"Middle Aged Man",url:"./images/stock-footage-guy.jpg",clicked:!1},{name:"Tyler Durden",url:"./images/tyler-durden.jpg",clicked:!1},{name:"Winnie the Bish",url:"./images/winnie-the-bish.jpg",clicked:!1},{name:"Ygritte",url:"./images/Ygritte.jpg",clicked:!1},{name:"Mystic Mac",url:"./images/conor-mcgregor.jpg",clicked:!1}],b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(r){var c=r.getCLS,a=r.getFID,n=r.getFCP,t=r.getLCP,i=r.getTTFB;c(e),a(e),n(e),t(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),b()},5:function(e,r,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.f9721078.chunk.js.map