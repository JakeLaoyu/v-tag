(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5698476e"],{"0e2a":function(t,e,a){t.exports=a.p+"img/tagbg.e4ba97b5.png"},4591:function(t,e,a){"use strict";var i=a("e921"),o=a.n(i);o.a},"506e":function(t,e,a){var i=a("9bc7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("499e").default;o("37fd6a46",i,!0,{sourceMap:!1,shadowMode:!1})},"6ab1":function(t,e,a){"use strict";var i=a("506e"),o=a.n(i);o.a},"7c62":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'@keyframes grow-data-v-4ce05729{0%{transform:scale(1)}50%{transform:scale(1.1)}to{transform:scale(1)}}.vtag-wrap[data-v-4ce05729]{position:fixed;top:0;bottom:0;left:0;right:0;background:#fff}.vtag-top[data-v-4ce05729]{height:50px;background:#f2f2f2;font-size:0;margin-bottom:15px}.vtag-top[data-v-4ce05729],.vtag-top__content[data-v-4ce05729]{box-sizing:border-box;position:relative}.vtag-top__content[data-v-4ce05729]{padding:10px 15px;overflow:auto;-webkit-overflow-scrolling:touch;white-space:nowrap;height:100%}.vtag-top__right[data-v-4ce05729]{text-align:right;padding-right:15px;box-sizing:border-box;width:94px;position:absolute;right:0;top:0;bottom:0;background:linear-gradient(90deg,hsla(0,0%,96.1%,0),#f5f5f5)}.vtag-top__right[data-v-4ce05729]:after{content:"";height:100%}.vtag-top__num[data-v-4ce05729],.vtag-top__right[data-v-4ce05729]:after{display:inline-block;vertical-align:middle}.vtag-top__num[data-v-4ce05729]{font-size:16px;color:#fff;height:32px;line-height:32px;padding:0 6px;border-radius:16px;background:#000}.vtag-top__item[data-v-4ce05729]{position:absolute;left:15px}.vtag-container[data-v-4ce05729]{text-align:center;font-size:0;position:relative;box-sizing:border-box}.vtag-container[data-v-4ce05729]:before{top:0}.vtag-container[data-v-4ce05729]:after,.vtag-container[data-v-4ce05729]:before{content:"";position:absolute;left:0;right:0;height:30px;background:linear-gradient(180deg,#fff,hsla(0,0%,100%,0));z-index:2}.vtag-container[data-v-4ce05729]:after{bottom:0;transform:rotate(180deg)}.vtag-container__content[data-v-4ce05729]{min-width:100px;overflow:auto;height:100%;padding:30px 25px;box-sizing:border-box;-webkit-overflow-scrolling:touch}.vtag-container__item[data-v-4ce05729]{display:inline-block;margin:0 15px 15px 0;position:relative}.vtag-container__item.hide[data-v-4ce05729]{margin:0;padding:0;width:0!important;height:0!important}.vtag-container__item.animate[data-v-4ce05729]{animation:grow-data-v-4ce05729 linear alternate}',""])},"9bc7":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".img-wrap[data-v-08cbb623]{text-align:center;height:94px;position:relative;padding-top:23px;box-sizing:border-box}.img-wrap img[data-v-08cbb623]{width:290px;height:94px;position:absolute;left:0;right:0;top:0;margin:auto}.img-wrap__title[data-v-08cbb623]{position:relative;font-size:24px;color:#7c6cd9;margin-bottom:4px}.img-wrap__subtitle[data-v-08cbb623]{position:relative;color:#999;font-size:14px}.footer[data-v-08cbb623]{padding:25px 0;text-align:center}.footer a[data-v-08cbb623]{text-decoration:none;color:#7c6cd9;font-size:14px}",""])},a326:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-tag-picker",{attrs:{totalData:t.tagData,selectedData:t.selectedData,appendToBody:!0},on:{change:t.change}},[i("div",{staticClass:"img-wrap",attrs:{slot:"top"},slot:"top"},[i("img",{attrs:{src:a("0e2a"),alt:""}}),i("div",{staticClass:"img-wrap__title"},[t._v("最感兴趣的栏目")]),i("div",{staticClass:"img-wrap__subtitle"},[t._v("定制专属于我的课程栏目")])]),i("div",{staticClass:"footer",attrs:{slot:"footer"},slot:"footer"},[i("a",{attrs:{href:"#"}},[t._v("进入首页")])])])},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"vtag-wrap",staticClass:"vtag-wrap",style:{"z-index":t.zIndex}},[a("div",{ref:"top",staticClass:"vtag-top"},[a("div",{ref:"top-content",staticClass:"vtag-top__content",style:t.vtagTopContentStyle,on:{click:function(e){t.handleCancelVtag(e)}}},[t._l(t.selection,function(e,i){return a("VTagPickerItem",{key:i,staticClass:"vtag-top__item",style:{transition:"all "+t.animationDuration/1e3+"s"},attrs:{type:"light",name:e.name,totalSelectionKey:e[t.onlyKey]}})}),a("div",{staticClass:"vtag-top-content__width",style:{width:t.vtopContentWidth,height:"1px"}})],2),t.showTagNum?a("div",{staticClass:"vtag-top__right"},[a("div",{staticClass:"vtag-top__num"},[t._v(t._s("+"+t.totalSelection.length))])]):t._e()]),t._t("top"),a("div",{ref:"container",staticClass:"vtag-container"},[a("div",{staticClass:"vtag-container__content"},t._l(t.totalData,function(e,i){return a("VTagPickerItem",{key:i,staticClass:"vtag-container__item",style:{transition:"all "+t.animationDuration/1e3+"s",animationDuration:t.animationDuration/1e3+"s"},attrs:{type:t.selection.some(function(a){return a[t.onlyKey]===e[t.onlyKey]})?"light":"default",name:e.name,totalSelectionKey:e[t.onlyKey]},on:{click:function(a){t.handleClickVtag(a,e)}}})}),1)]),a("div",{ref:"vtag-footer",staticClass:"vtag-footer"},[t._t("footer")],2)],2)},s=[];const r=t=>{return new Promise(e=>{setTimeout(()=>{e()},t)})};var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vtag-item",class:["vtag-item-"+t.type],attrs:{"totalSelection-key":t.totalSelectionKey},on:{click:t.handleClickVtag}},[t._v("\n  "+t._s(t.name)+"\n")])},c=[],d={name:"v-tag-picker-item",props:{totalSelectionKey:{type:String},name:{type:String,required:!0},type:{type:String,default:"default"}},data(){return{}},methods:{handleClickVtag(t){this.$emit("click",t)}}},g=d,p=(a("f47d"),a("2877")),h=Object(p["a"])(g,l,c,!1,null,"21627232",null),f=h.exports,m={name:"v-tag-picker",components:{VTagPickerItem:f},props:{zIndex:Number,totalData:{type:Array,default:()=>[]},selectedData:{type:Array,default:()=>[]},animationDuration:{type:Number,default:500},onlyKey:{type:String,default:"name"},appendToBody:{type:Boolean,default:!1}},data(){return{vtagTopContentStyle:{},showTagNum:!1,selection:[],domQueue:[],animating:!1,totalSelection:[],vtopContentWidth:"100%",topVtagItemCache:null}},watch:{selectedData:{handler(t){this.selection=JSON.parse(JSON.stringify(t)),this.totalSelection=JSON.parse(JSON.stringify(t)),this.$nextTick(()=>{this.computedTagNumShow(),this.initTagPosition()})},immediate:!0},totalSelection(t){this.$emit("change",JSON.parse(JSON.stringify(t)))},totalData:{handler(t){this.$nextTick(()=>{this.computedContainerHeight()})},immediate:!0}},methods:{handleCancelVtag(t){let e=t.target,a=e.getAttribute("totalSelection-key");a&&this.cancelTag(a)},cancelTag(t){let e=this.$refs["top-content"],a=this.$refs["container"],i=e.querySelector(`[totalSelection-key="${t}"]`),o=a.querySelector(`[totalSelection-key="${t}"]`),n=i.offsetWidth;if(i.classList.contains("vtag-item-default")||!i.classList.contains("vtag-item"))return;i.classList.remove("vtag-item-light"),i.classList.add("vtag-item-default");let s=this.totalSelection.findIndex(e=>e[this.onlyKey]===t);this.totalSelection.splice(s,1),i.innerHTML="";let r=i;while(r.nextElementSibling&&r.nextElementSibling.classList.contains("vtag-item")){let t=r.nextElementSibling,e=Number(t.getAttribute("transform-x"))-n-15;t.setAttribute("transform-x",e),t.style.transform=`translate(${e}px, 0)`,r=t}i.parentNode.removeChild(i),o.classList.remove("vtag-item-light"),o.classList.add("vtag-item-default"),this.computedTagNumShow()},handleClickVtag(t,e){let a=t.target,i=a.getAttribute("totalSelection-key"),o=this.$refs["top-content"],n=o.querySelector(`[totalSelection-key="${i}"]`);if(a.classList.contains("vtag-item-light")){if(!n)return;this.cancelTag(i)}else a.classList.add("vtag-item-light","animate"),this.totalSelection.push(e),this.domQueue.push({event:t,data:e}),setTimeout(()=>{if(a.classList.remove("animate"),this.animating)return;let t=this.domQueue.shift();this.moveTag(t.event,t.data)},this.animationDuration)},async moveTag(t,e){this.animating=!0;let a=t.target,i=t.target.cloneNode(!0),o=a.getBoundingClientRect(),n=this.$refs["vtag-wrap"],s=this.$refs["top-content"];s.scrollLeft=0,i.style.position="fixed",i.style.left=`${o.x}px`,i.style.top=`${o.y}px`,n.appendChild(i),await r(10),this.moveExist(t),i.style.transform=`translate(${15-o.x}px,${10-o.y}px)`,setTimeout(()=>{if(i.parentNode.removeChild(i),this.topPrepend(t,e),this.animating=!1,this.computedTagNumShow(),this.domQueue.length){let t=this.domQueue.shift();this.moveTag(t.event,t.data)}},this.animationDuration)},moveExist(t){let e=t.target,a=e.offsetWidth,i=this.$refs["top-content"].querySelectorAll(".vtag-item");i.forEach(t=>{let e=Number(t.getAttribute("transform-x"))+a+15;t.setAttribute("transform-x",e),t.style.transform=`translate(${e}px, 0)`})},topPrepend(t,e){let a=this.$refs["top-content"];if(this.selection.length){let t=this.topVtagItemCache.cloneNode(!0);t.setAttribute("totalSelection-key",e[this.onlyKey]),t.innerHTML=e.name,a.prepend(t)}else this.selection.unshift(e),this.$nextTick(()=>{a.querySelector(".vtag-item").setAttribute("totalSelection-key",e[this.onlyKey]),this.topVtagItemCache=a.querySelector(".vtag-item").cloneNode(!0)})},initTagPosition(){let t=this.$refs["top-content"].querySelectorAll(".vtag-item");t.length&&(this.topVtagItemCache=t[0].cloneNode(!0)),t.forEach((e,a)=>{e.setAttribute("transform-x",0),e.style.transform="translate(0px, 0)",e.style.left=0===a?"15px":`${t[a-1].offsetLeft+t[a-1].offsetWidth+15}px`})},computedTagNumShow(){const t=this.$refs["top-content"];if(t.scrollWidth===t.clientWidth)this.showTagNum=!1,this.$set(this.vtagTopContentStyle,"width","100%"),this.$set(this.vtagTopContentStyle,"paddingRight","15px");else{this.showTagNum=!0;let t=this.$refs["top-content"],e=t.querySelectorAll(".vtag-item"),a=e[e.length-1],i=a.getBoundingClientRect();this.$set(this.vtagTopContentStyle,"paddingRight","94px"),this.vtopContentWidth=`${a.offsetLeft+Number(a.getAttribute("transform-x"))+i.width+Number(t.style.paddingLeft)+94}px`}},computedContainerHeight(){const t=this.$refs["vtag-wrap"],e=this.$refs.container,a=this.$refs["vtag-footer"];e.style.height=`${t.offsetHeight-e.offsetTop-(a.offsetHeight||0)}px`}},mounted(){this.appendToBody&&document.body.appendChild(this.$refs["vtag-wrap"])},beforeDestroy(){}},u=m,v=(a("4591"),Object(p["a"])(u,n,s,!1,null,"4ce05729",null)),b=v.exports;b.install=function(t){t.component(b.name,b)};var x=b;const y=[x],_=function(t){_.installed||y.map(e=>t.component(e.name,e))};"undefined"!==typeof window&&window.Vue&&_(window.Vue);console.log(x);var w={name:"app",components:{vTagPicker:x},data(){return{tagData:Array.from(new Array(100),(t,e)=>({name:`${e}`})),selectedData:Array.from(new Array(2),(t,e)=>({name:`${e}`}))}},methods:{change(t){console.log(t)}},mounted(){}},S=w,k=(a("6ab1"),Object(p["a"])(S,i,o,!1,null,"08cbb623",null));e["default"]=k.exports},ac8e:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".vtag-item[data-v-21627232]{display:inline-block;padding:5px 15px;border-radius:3px;font-size:14px;white-space:nowrap;box-sizing:border-box;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.vtag-item-default[data-v-21627232]{background:#efefef;color:#444}.vtag-item-light[data-v-21627232]{color:#fff;background:#7c6cd9}",""])},e921:function(t,e,a){var i=a("7c62");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("499e").default;o("239df06d",i,!0,{sourceMap:!1,shadowMode:!1})},ed15:function(t,e,a){var i=a("ac8e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("499e").default;o("7b81b77f",i,!0,{sourceMap:!1,shadowMode:!1})},f47d:function(t,e,a){"use strict";var i=a("ed15"),o=a.n(i);o.a}}]);
//# sourceMappingURL=chunk-5698476e.0f8b0ef5.js.map