webpackJsonp([4],{587:function(t,i,e){e(632);var n=e(9)(e(612),e(647),"data-v-4b8ff140",null);t.exports=n.exports},600:function(t,i,e){"use strict";function n(){var t=r()({},l.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return e.i(o.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function s(t){var i=r()({},l.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:80,songstatus:1,singermid:t});return e.i(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",i,l.c)}i.b=n,i.a=s;var a=e(89),r=e.n(a),o=e(201),l=e(65)},602:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(66),s=e.n(n),a=e(131),r=e(202),o=e.n(r);i.default={props:{data:{type:Array,default:[]}},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},created:function(){this.probeType=3,this.listenScroll=!0,this.touch={},this.listHeight=[]},computed:{listShortcut:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},components:{Scroll:s.a,Loading:o.a},methods:{selectItem:function(t){this.$emit("selectItem",t)},onShortcutTouchStart:function(t){var i=e.i(a.c)(t.target,"index"),n=t.touches[0];this.touch.y1=n.pageY,this.touch.anchorIndex=i,this._scrollTo(i)},onShortcutTouchMove:function(t){var i=t.touches[0];this.touch.y2=i.pageY;var e=(this.touch.y2-this.touch.y1)/18|0,n=parseInt(this.touch.anchorIndex)+e;this._scrollTo(n)},scroll:function(t){this.scrollY=t.y},refresh:function(){this.$refs.listview.refresh()},_scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listgroup[t],0))},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listgroup,i=0;this.listHeight.push(i);for(var e=0;e<t.length-1;e++){i+=t[e].clientHeight,this.listHeight.push(i)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var i=this.listHeight;if(t>0)return void(this.currentIndex=0);for(var e=0;e<i.length;e++){var n=i[e],s=i[e+1];if(-t>=n&&-t<s)return this.currentIndex=e,void(this.diff=s+t)}this.currentIndex=i.length-2},diff:function(t){var i=t>0&&t<30?t-30:0;this.fixedTop!==i&&(this.fixedTop=i,this.$refs.fixed.style.transform="translate3d(0,"+i+"px,0)")}}}},612:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(57),s=e.n(n),a=e(600),r=e(65),o=e(207),l=e(641),A=e.n(l),c=e(88),u=e(49);i.default={data:function(){return{singerList:[]}},mixins:[c.c,c.d],created:function(){this._getSingerList()},methods:s()({handlePlaylist:function(t){var i=t.length>0?"60px":"",e=this.$refs.singer;e&&(e.style.bottom=i,this.$refs.listview.refresh())}},e.i(u.b)({setSinger:"SET_SINGER"}),{selectSinger:function(t){this.$router.push("singer/"+t.id),this.setSinger(t)},_getSingerList:function(){var t=this;e.i(a.b)().then(function(i){i.code===r.a&&(t.singerList=t.__normalizeSinger(i.data.list))})},__normalizeSinger:function(t){var i={hot:{title:"热门",items:[]}};t.forEach(function(t,e){e<10&&i.hot.items.push(new o.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var n=t.Findex;n.match(/[a-zA-Z]/)||(n="其他"),i[n]||(i[n]={title:n,items:[]}),i[n].items.push(new o.a({id:t.Fsinger_mid,name:t.Fsinger_name}))});var e=[],n=[],s=[];for(var a in i){var r=i[a];"热门"===r.title?n.push(r):r.title.match(/[a-zA-Z]/)?e.push(r):s.push(r)}return e.sort(function(t,i){return t.title.charCodeAt(0)-i.title.charCodeAt(0)}),n.concat(e,s)}}),components:{Listview:A.a}}},618:function(t,i,e){i=t.exports=e(577)(!0),i.push([t.i,".listview[data-v-36e82cfb]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group[data-v-36e82cfb]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-36e82cfb]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item[data-v-36e82cfb]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-36e82cfb]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-36e82cfb]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-36e82cfb]{position:absolute;z-index:30;right:0;top:50%;transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-36e82cfb]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-36e82cfb]{color:#ffcd32}.listview .list-fixed[data-v-36e82cfb]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-36e82cfb]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-container[data-v-36e82cfb]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["D:/vue-music/src/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,2BAA4B,AAC5B,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"listview.vue",sourcesContent:["\n.listview[data-v-36e82cfb] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-36e82cfb] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-36e82cfb] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-36e82cfb] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-36e82cfb] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-36e82cfb] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-36e82cfb] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-36e82cfb] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-36e82cfb] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-36e82cfb] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-36e82cfb] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-36e82cfb] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},619:function(t,i,e){i=t.exports=e(577)(!0),i.push([t.i,".singer[data-v-4b8ff140]{position:fixed;top:88px;bottom:0;width:100%}.singer .social-share[data-v-4b8ff140]{position:fixed;width:100%;bottom:0;left:0}","",{version:3,sources:["D:/vue-music/src/components/singer/singer.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb,AACD,uCACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,MAAQ,CACT",file:"singer.vue",sourcesContent:["\n.singer[data-v-4b8ff140] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}\n.singer .social-share[data-v-4b8ff140] {\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}"],sourceRoot:""}])},631:function(t,i,e){var n=e(618);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(578)("f1532566",n,!0)},632:function(t,i,e){var n=e(619);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(578)("64049dd4",n,!0)},641:function(t,i,e){e(631);var n=e(9)(e(602),e(646),"data-v-36e82cfb",null);t.exports=n.exports},646:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("ul",t._l(t.data,function(i,n){return e("li",{key:n,ref:"listgroup",refInFor:!0,staticClass:"list-group"},[e("h2",{staticClass:"list-group-title"},[t._v(t._s(i.title))]),t._v(" "),e("ul",t._l(i.items,function(i,n){return e("li",{key:n,staticClass:"list-group-item",on:{click:function(e){t.selectItem(i)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(i.name))])])}))])})),t._v(" "),e("div",{staticClass:"list-shortcut",on:{touchstart:function(i){return i.stopPropagation(),i.preventDefault(),t.onShortcutTouchStart(i)},touchmove:function(i){return i.stopPropagation(),i.preventDefault(),t.onShortcutTouchMove(i)},touchend:function(t){t.stopPropagation()}}},[e("ul",t._l(t.listShortcut,function(i,n){return e("li",{key:n,staticClass:"item",class:{current:t.currentIndex===n},attrs:{"data-index":n}},[t._v("\n        "+t._s(i)+"\n      ")])}))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[e("div",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle)+" ")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[e("loading")],1)])},staticRenderFns:[]}},647:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"singer",staticClass:"singer"},[e("listview",{ref:"listview",attrs:{data:t.singerList},on:{selectItem:t.selectSinger}}),t._v(" "),e("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.a25290dd480e61b5964b.js.map