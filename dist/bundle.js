!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=fabric},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o);var r={down:!1};let a=!1,s=null,l=null;function d(){a&&(l.remove(s),a=!1,document.getElementById("labelNamePopUp").style.display="none")}window.labelBndBox=function(){const e=document.getElementById("label-title").value;document.getElementById("labelNamePopUp").style.display="none";const t=new i.a.Text(e,{fontSize:10,fill:"yellow",left:s.left,top:s.top,width:s.width,height:s.height}),n=new i.a.Group([s,t],{left:s.left,top:s.top,width:s.width,height:s.height,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0.1)"});a=!0,l.remove(s),l.add(n)};let c=null;const u={};function h(){d(),c.discardActiveObject(),c.renderAll(),c.forEachObject(e=>{e.selectable=!1}),c.defaultCursor="crosshair",c.hoverCursor="crosshair",c.__eventListeners["mouse:down"]=[()=>{r.down=!0;const e=c.getPointer(c.e);u.origX=e.x,u.origY=e.y,u.rect=new i.a.Rect({left:u.origX,top:u.origY,width:e.x-u.origX,height:e.y-u.origY,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0)"}),c.add(u.rect)}]}function f(e,t){if(r.down){r.down=!1,u.rect.setCoords(),u.rect.selectable=!1,c.__eventListeners["mouse:down"]=[],c.defaultCursor="default",c.hoverCursor="move",c.forEachObject(e=>{e.selectable=!0});const n=c.getPointer(e.e);!function(e,t,n,o){s=n,l=o;const i=document.getElementById("labelNamePopUp");i.style.display="block";const r=document.getElementById("canvas-wrapper").getBoundingClientRect(),d=r.top,c=r.left;i.style.top=`${t+d}px`,i.style.left=`${e+c}px`,a=!0}(n.x,n.y,u.rect,t)}}function m(){d(),c.remove(c.getActiveObject())}function g(e){c=e,window.removeBndBox=m,window.createNewBndBox=h,e.on("mouse:over",e=>{!function(e){e.target&&e.target._objects&&(e.target._objects[0].set("fill","rgba(255,0,0,0.2)"),c.renderAll())}(e)}),e.on("mouse:out",e=>{!function(e){e.target&&e.target._objects&&(e.target._objects[0].set("fill","rgba(255,0,0,0"),c.renderAll())}(e)}),e.on("mouse:move",e=>{!function(e){if(!r.down)return;const t=c.getPointer(e.e);u.origX>t.x&&u.rect.set({left:Math.abs(t.x)}),u.origY>t.y&&u.rect.set({top:Math.abs(t.y)}),u.rect.set({width:Math.abs(u.origX-t.x)}),u.rect.set({height:Math.abs(u.origY-t.y)}),c.renderAll()}(e)}),e.on("mouse:up",t=>{f(t,e)})}const w={uploaded:!1,name:null},p={};let b=null;function x(){w.uploaded=!0;const e=document.createElement("canvas");if(p.maximumCanvasHeight<this.height){const t=p.maximumCanvasHeight/this.height;if(e.height=p.maximumCanvasHeight,e.width=this.width*t,p.maximumCanvasWidth<e.width){const t=p.maximumCanvasWidth/this.width;e.width=p.maximumCanvasWidth,e.height*=t}e.getContext("2d").drawImage(this,0,0,e.width,e.height),b.setWidth(e.width),b.setHeight(e.height),b.setBackgroundColor({source:e.toDataURL()},()=>{b.renderAll()})}else if(p.maximumCanvasWidth<this.width){const t=p.maximumCanvasWidth/this.width;e.width=p.maximumCanvasWidth,e.height*=t,e.getContext("2d").drawImage(this,0,0,e.width,e.height),b.setWidth(e.width),b.setHeight(e.height),b.setBackgroundColor({source:e.toDataURL()},()=>{b.renderAll()})}else b.setWidth(this.width),b.setHeight(this.height),b.setBackgroundColor({source:this.src},()=>{b.renderAll()})}function v(e){const t=new Image;t.src=e.target.result,t.onload=x}function y(e){return function e(t){let n="";return Object.keys(t).forEach(o=>{"object"==typeof t[o]?n+=`<${o}>${e(t[o])}</${o}>`:n+=`<${o}>${t[o]}</${o}>`}),n}(e)}window.readURL=function(e){if(d(),e.files&&e.files[0]){p.maximumCanvasHeight=window.innerHeight-54,p.maximumCanvasWidth=window.innerWidth-110;const t=new FileReader;w.name=e.files[0].name,t.onload=v,t.readAsDataURL(e.files[0])}};let j=null;function C(){const e={};return e.annotations={folder:"Unknown",filename:w.name,path:"Unknown",source:{database:"Unknown"},size:{width:j.getWidth(),height:j.getHeight(),depth:1},segmented:0},e.annotations.object=function(){let e={};return j.forEachObject(t=>{const n=t._objects[0],o=t._objects[1].text;e={name:o,pose:"Unspecified",truncated:1,difficult:0,bndbox:{xmin:n.left,ymin:n.top,xmax:n.left+n.width,ymax:n.top+n.height}}}),e}(),y(e)}function B(){if(d(),w.uploaded){!function(e){const t=new RegExp("^([^.]+)"),n=document.createElement("a"),o=new Blob([e],{type:"text/plain"});n.setAttribute("href",window.URL.createObjectURL(o));const i=`${t.exec(w.name)[0]}.xml`;n.setAttribute("download",i),n.dataset.downloadurl=["text/plain",n.download,n.href].join(":"),n.draggable=!0,n.classList.add("dragout"),n.click()}(C())}}const _=function(){const e=new i.a.Canvas("c",{selection:!1});return e.setBackgroundColor({source:"sample-img.jpg",repeat:"repeat"},()=>{e.renderAll()}),i.a.Object.prototype.transparentCorners=!1,g(e),e}();b=_,function(e){window.downloadXML=B,j=e}(_)}]);