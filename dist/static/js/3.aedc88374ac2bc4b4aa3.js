webpackJsonp([3],{592:function(e,t,n){n(644);var i=n(9)(n(617),n(659),"data-v-74b4415a",null);e.exports=i.exports},608:function(e,t,n){"use strict";function i(){var e=r()({},A.b,{platform:"h5",uin:0,needNewCode:1});return n.i(d.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,A.c)}function o(){var e=r()({},A.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return c.a.get("/api/getDiscList",{params:e}).then(function(e){return e.data})}function s(e){var t=r()({},A.b,{disstid:e,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return n.i(d.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",t,A.c)}t.b=i,t.c=o,t.a=s;var a=n(89),r=n.n(a),d=n(201),A=n(65),l=n(90),c=n.n(l)},612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(208),o=n.n(i),s=n(131);t.default={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},created:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider()},20),this.autoPlay&&this._play(),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},destroyed:function(){clearTimeout(this.timer)},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var t=0,i=this.$refs.slider.clientWidth,o=0;o<this.children.length;o++){var a=this.children[o];a.style.width=i+"px",t+=i,n.i(s.b)(a,"slider-item")}this.loop&&!e&&(t+=2*i),this.$refs.sliderGroup.style.width=t+"px"},_initSlider:function(){var e=this;this.slider=new o.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400,click:!0}),this.slider.on("scrollEnd",function(){var t=e.slider.getCurrentPage().pageX;e.loop&&(t-=1),e.currentPageIndex=t,e.autoPlay&&e._play()}),this.slider.on("beforeScrollStart",function(){e.autoPlay&&clearTimeout(e.timer)})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this,t=this.currentPageIndex+1;this.loop&&(t+=1),this.timer=setTimeout(function(){e.slider.goToPage(t,0,400)},this.interval)}}}},617:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(57),o=n.n(i),s=n(65),a=n(608),r=n(88),d=n(651),A=n.n(d),l=n(66),c=n.n(l),m=n(202),p=n.n(m),C=n(49),f=n(205),h=n.n(f);t.default={data:function(){return{recommends:[],discList:[],info:"欢迎回来"}},computed:o()({},n.i(C.a)(["currentUser"])),mixins:[r.c,r.d],created:function(){var e=this;this.$nextTick(function(){e._getRecommend(),e._getDiscList()})},mounted:function(){var e=this;setTimeout(function(){e.info="欢迎回来,"+e.currentUser,e.$refs.topTip.show()},100)},methods:o()({handlePlaylist:function(e){var t=e.length>0?"60px":"",n=this.$refs.recommend;n&&(n.style.bottom=t,this.$refs.scroll.refresh())},selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)},_getRecommend:function(){var e=this;n.i(a.b)().then(function(t){t.code===s.a&&(e.recommends=t.data.slider)})},_getDiscList:function(){var e=this;n.i(a.c)().then(function(t){t.code===s.a&&(e.discList=t.data.list)})},loadImage:function(){this.checkloaded||(this.checkloaded=!0,this.$refs.scroll.refresh())}},n.i(C.b)({setUser:"SET_USER_STATE",setDisc:"SET_DISC"})),components:{Slider:A.a,Scroll:c.a,Loading:p.a,TopTip:h.a}}},631:function(e,t,n){t=e.exports=n(586)(!0),t.push([e.i,".recommend[data-v-74b4415a]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-74b4415a]{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper[data-v-74b4415a]{position:relative;width:100%;overflow:hidden}.recommend .recommend-content .loading-container[data-v-74b4415a]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}.recommend .recommend-list .list-title[data-v-74b4415a]{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-list .item[data-v-74b4415a]{display:-ms-flexbox;display:flex;box-sizing:border-box;-ms-flex-align:center;align-items:center;padding:0 20px 20px}.recommend .recommend-list .item .icon[data-v-74b4415a]{-ms-flex:0 0 60px;flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-list .item .text[data-v-74b4415a]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:14px}.recommend .recommend-list .item .text .name[data-v-74b4415a]{margin-bottom:10px;color:#fff}.recommend .recommend-list .item .text .desc[data-v-74b4415a]{color:hsla(0,0%,100%,.3)}.recommend .tip-container[data-v-74b4415a]{position:fixed;top:400px;left:0;width:100%;text-align:center;box-sizing:border-box;height:50px;line-height:50px}","",{version:3,sources:["D:/vue-music/src/components/recommend/recommend.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,+CACE,YAAa,AACb,eAAiB,CAClB,AACD,+DACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB,AACD,kEACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B,AACD,wDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAChB,AACD,kDACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,sBAAuB,AACnB,mBAAoB,AACxB,mBAA0B,CAC3B,AACD,wDACE,kBAAmB,AACf,cAAe,AACnB,WAAY,AACZ,kBAAoB,CACrB,AACD,wDACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,WAAY,AACR,OAAQ,AACZ,iBAAkB,AAClB,gBAAiB,AACjB,cAAgB,CACjB,AACD,8DACE,mBAAoB,AACpB,UAAY,CACb,AACD,8DACE,wBAA6B,CAC9B,AACD,2CACE,eAAgB,AAChB,UAAW,AACX,OAAQ,AACR,WAAY,AACZ,kBAAmB,AACnB,sBAAuB,AACvB,YAAa,AACb,gBAAkB,CACnB",file:"recommend.vue",sourcesContent:["\n.recommend[data-v-74b4415a] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.recommend .recommend-content[data-v-74b4415a] {\n  height: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .slider-wrapper[data-v-74b4415a] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .loading-container[data-v-74b4415a] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.recommend .recommend-list .list-title[data-v-74b4415a] {\n  height: 65px;\n  line-height: 65px;\n  text-align: center;\n  font-size: 14px;\n  color: #ffcd32;\n}\n.recommend .recommend-list .item[data-v-74b4415a] {\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0 20px 20px 20px;\n}\n.recommend .recommend-list .item .icon[data-v-74b4415a] {\n  -ms-flex: 0 0 60px;\n      flex: 0 0 60px;\n  width: 60px;\n  padding-right: 20px;\n}\n.recommend .recommend-list .item .text[data-v-74b4415a] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex: 1;\n      flex: 1;\n  line-height: 20px;\n  overflow: hidden;\n  font-size: 14px;\n}\n.recommend .recommend-list .item .text .name[data-v-74b4415a] {\n  margin-bottom: 10px;\n  color: #fff;\n}\n.recommend .recommend-list .item .text .desc[data-v-74b4415a] {\n  color: rgba(255,255,255,0.3);\n}\n.recommend .tip-container[data-v-74b4415a] {\n  position: fixed;\n  top: 400px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  box-sizing: border-box;\n  height: 50px;\n  line-height: 50px;\n}"],sourceRoot:""}])},635:function(e,t,n){t=e.exports=n(586)(!0),t.push([e.i,".slider[data-v-d589a78a]{min-height:1px;position:relative}.slider .slider-group[data-v-d589a78a]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-d589a78a]{float:left;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-d589a78a]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-d589a78a]{display:block;width:100%}.slider .dots[data-v-d589a78a]{position:absolute;right:0;left:0;bottom:12px;text-align:center;font-size:0}.slider .dots .dot[data-v-d589a78a]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-d589a78a]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}","",{version:3,sources:["D:/vue-music/src/base/slider/slider.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,iBAAmB,CACpB,AACD,uCACE,kBAAmB,AACnB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,oDACE,WAAY,AACZ,sBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,sDACE,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,oBAAsB,CACvB,AACD,wDACE,cAAe,AACf,UAAY,CACb,AACD,+BACE,kBAAmB,AACnB,QAAS,AACT,OAAQ,AACR,YAAa,AACb,kBAAmB,AACnB,WAAa,CACd,AACD,oCACE,qBAAsB,AACtB,aAAc,AACd,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC,AACD,2CACE,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC",file:"slider.vue",sourcesContent:["\n.slider[data-v-d589a78a] {\n  min-height: 1px;\n  position: relative;\n}\n.slider .slider-group[data-v-d589a78a] {\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slider-group .slider-item[data-v-d589a78a] {\n  float: left;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n}\n.slider .slider-group .slider-item a[data-v-d589a78a] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n}\n.slider .slider-group .slider-item img[data-v-d589a78a] {\n  display: block;\n  width: 100%;\n}\n.slider .dots[data-v-d589a78a] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 12px;\n  text-align: center;\n  font-size: 0;\n}\n.slider .dots .dot[data-v-d589a78a] {\n  display: inline-block;\n  margin: 0 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.5);\n}\n.slider .dots .dot.active[data-v-d589a78a] {\n  width: 20px;\n  border-radius: 5px;\n  background: rgba(255,255,255,0.8);\n}"],sourceRoot:""}])},644:function(e,t,n){var i=n(631);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(587)("476b5e5a",i,!0)},648:function(e,t,n){var i=n(635);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(587)("90cc25c6",i,!0)},651:function(e,t,n){n(648);var i=n(9)(n(612),n(663),"data-v-d589a78a",null);e.exports=i.exports},659:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"recommend",staticClass:"recommend"},[n("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[n("div",[e.recommends.length?n("div",{ref:"sliderWrapper",staticClass:"slider-wrapper"},[n("slider",e._l(e.recommends,function(t,i){return n("div",{key:i},[n("a",{attrs:{href:t.linkUrl}},[n("img",{staticClass:"needsclick",attrs:{src:t.picUrl},on:{load:e.loadImage}})])])}))],1):e._e(),e._v(" "),n("div",{staticClass:"recommend-list"},[n("h1",{staticClass:"list-title"},[e._v("热门歌曲推荐")]),e._v(" "),n("ul",e._l(e.discList,function(t,i){return n("li",{key:i,staticClass:"item",on:{click:function(n){e.selectItem(t)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60",alt:""}})]),e._v(" "),n("div",{staticClass:"text"},[n("p",{staticClass:"name",domProps:{innerHTML:e._s(t.creator.name)}}),e._v(" "),n("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.dissname)}})])])}))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[n("loading")],1)]),e._v(" "),n("div",{staticClass:"tip-container"},[n("top-tip",{ref:"topTip"},[n("div",{staticClass:"tip-title"},[n("span",{staticClass:"text",domProps:{textContent:e._s(e.info)}})])])],1),e._v(" "),n("router-view")],1)},staticRenderFns:[]}},663:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"dots"},e._l(e.dots,function(t,i){return n("span",{staticClass:"dot",class:{active:e.currentPageIndex===i}})}))])},staticRenderFns:[]}}});
//# sourceMappingURL=3.aedc88374ac2bc4b4aa3.js.map