(this["webpackJsonpobject-detector"]=this["webpackJsonpobject-detector"]||[]).push([[0],{319:function(e,t,n){},325:function(e,t){},326:function(e,t){},334:function(e,t){},337:function(e,t){},338:function(e,t){},339:function(e,t,n){},341:function(e,t,n){"use strict";n.r(t);var a=n(59),c=n.n(a),i=n(252),s=n.n(i),r=(n(319),n(3)),o=n.n(r),l=n(11),d=n(6),b=n(209),u=n(144),h=(n(196),n(195),n(339),n(44)),j={initial:"initial",states:{initial:{on:{next:"startWebcam"}},startWebcam:{on:{next:"loadModel"}},loadModel:{on:{next:"identify"}},identify:{on:{next:"complete"}},complete:{on:{next:"identify"},showImage:!0,showResults:!0}}},f={1:{name:"Plane",id:1}};var p=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=(t[0],t[1],Object(a.useState)(null)),c=Object(d.a)(n,2),i=c[0],s=c[1],r=Object(a.useState)("web_mobilenet_balanced_model/model.json"),p=Object(d.a)(r,2),x=p[0],m=(p[1],Object(a.useState)(null)),O=Object(d.a)(m,2),v=O[0],y=O[1],w=Object(a.useState)(!1),g=Object(d.a)(w,2),S=g[0],k=g[1],I=Object(a.useState)(null),F=Object(d.a)(I,2),D=(F[0],F[1],Object(a.useState)(!1)),T=Object(d.a)(D,2),W=T[0],E=T[1],R=Object(a.useState)(!1),M=Object(d.a)(R,2),B=(M[0],M[1],Object(a.useRef)()),L=Object(a.useRef)(),z=Object(a.useReducer)((function(e,t){return j.states[e].on[t]||j.initial}),j.initial),A=Object(d.a)(z,2),P=(A[0],A[1],function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading "+x+"..."),e.next=3,Object(u.a)(x);case 3:t=e.sent,console.log("Successfully loaded model"),s(t),E(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),_=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),"mediaDevices"in navigator&&"getUserMedia"in navigator.mediaDevices&&console.log("Let's get this party started"),navigator.mediaDevices.getUserMedia({video:!0}),e.next=5,navigator.mediaDevices.enumerateDevices();case 5:return t=e.sent,console.log(t),n={resizeWidth:300,resizeHeight:300,centerCrop:!0,facingMode:"environment"},e.next=10,b.a.webcam(B.current,n);case 10:a=e.sent,y(a),W||P();case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(e){var t=L.current.getContext("2d");t.clearRect(0,0,t.canvas.width,t.canvas.height);var n="16px sans-serif";t.font=n,t.textBaseline="top";var a=e[0].arraySync(),c=function(e,t,n,a,c){var i=[];return document.getElementById("webcam"),e[0].forEach((function(e,s){if(e>t){var r=[],o=300*n[0][s][0],l=300*n[0][s][1],d=300*n[0][s][2],b=300*n[0][s][3];r[0]=l,r[1]=o,r[2]=b-l,r[3]=d-o;var u=a[0][s],h="Thing";c[u]&&(h=c[u].name),i.push({class:u,label:h,score:e.toFixed(4),bbox:r})}})),i}(e[1].arraySync(),.6,e[4].arraySync(),a,f);c.forEach((function(e){var a=e.bbox[0],c=e.bbox[1],i=e.bbox[2],s=e.bbox[3];t.strokeStyle="#00FFFF",t.lineWidth=4,t.strokeRect(a,c,i,s),t.fillStyle="#00FFFF";var r=t.measureText(e.label+" "+(100*e.score).toFixed(2)+"%").width,o=parseInt(n,10);t.fillRect(a,c,r+4,o+4)})),c.forEach((function(e){var n=e.bbox[0],a=e.bbox[1];t.fillStyle="#000000",t.fillText(e.label+" "+(100*e.score).toFixed(2)+"%",n,a)}))},Q=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.capture();case 2:return t=e.sent,n=t.reshape([1,300,300,3]).toInt(),b.c(127.5),t.expandDims().reshape([1,300,300,3]),b.b(t.toInt()).reshape([-1,300,300,3]),e.next=9,i.executeAsync(n);case 9:a=e.sent,C(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=setInterval((function(){W&&v&&Q()}),1e3);return function(){clearInterval(e)}})),Object(a.useEffect)((function(){P()}),[x]),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{id:"main",children:[Object(h.jsx)("h1",{children:"Plane Spotter"}),!S&&Object(h.jsx)("button",{onClick:_,children:"Start Webcam"}),S&&Object(h.jsxs)("div",{id:"video-box",children:[Object(h.jsx)("video",{autoPlay:!0,playsInline:!0,muted:!0,id:"webcam",width:"300px",height:"300px",style:{objectFit:"cover"},ref:B}),Object(h.jsx)("canvas",{className:"size",ref:L})]}),Object(h.jsx)("div",{id:"disclaimer",children:Object(h.jsx)("p",{children:"This model was trained on airplanes flying by at around 30,000 feet. It works best at identifying small plane silhouettes."})})]}),Object(h.jsx)("div",{id:"explainer",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"What is this?"}),Object(h.jsxs)("p",{children:["An easy way to try out a custom Object Detection model that was trained using data collected by the ",Object(h.jsx)("a",{href:"https://github.com/IQTLabs/SkyScan",children:"SkyScan"})," system."]}),Object(h.jsx)("h2",{children:"How did you build this?"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("a",{href:"https://github.com/IQTLabs/SkyScan",children:"SkyScan"})," takes photos of airplanes as they fly by. It determines a planes location based on the location signal they broadcast, using a standard called ADS-B. When a plane is nearby, it will point a camera at the airplane zoom in and take a photo. This gave us a lot of data that was easy to label, so we used it to train a model."]}),Object(h.jsxs)("p",{children:["We have created a series of ",Object(h.jsx)("a",{href:"https://github.com/IQTLabs/SkyScan/tree/main/ml-model",children:"notebooks"})," that make it easy to train your own Object Detections model using the TensorFlow 2.0 ",Object(h.jsx)("a",{href:"https://github.com/tensorflow/models/tree/master/research/object_detection",children:"Object Detection API"}),"."]}),Object(h.jsx)("h3",{children:"Browser based apps are a great way to find out how well your model works in the real world!"})]})})]})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root"))}},[[341,1,2]]]);
//# sourceMappingURL=main.3751d7af.chunk.js.map