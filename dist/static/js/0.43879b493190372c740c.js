webpackJsonp([0],{588:function(t,i,a){a(637);var e=a(9)(a(613),a(652),"data-v-77ad6140",null);t.exports=e.exports},592:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a(57),n=a.n(e),s=a(204),o=a.n(s),A=a(66),l=a.n(A),r=a(202),c=a.n(r),d=a(131),p=a(49),g=a(88),u=a.i(d.a)("transform"),C=a.i(d.a)("backdrop-filter");i.default={mixins:[g.d],props:{songs:{type:Array,default:[]},bgImage:{type:String,default:""},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},methods:n()({handlePlaylist:function(t){var i=t.length>0?"60px":"",a=this.$refs.list;a&&(a.$el.style.bottom=i,a.refresh())},back:function(){this.$router.back(1)},scroll:function(t){this.scrollY=t.y},selectItem:function(t,i){this.selectPlay({list:this.songs,index:i})},random:function(){this.randomPlay({list:this.songs})}},a.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var i=Math.max(this.minTransalteY,t),a=0,e=1,n=0,s=Math.abs(t/this.imageHeight);t>0?(e+=s,a=10):n=Math.min(20,20*s),t<this.minTransalteY?(a=10,this.$refs.bgImage.style.height="40px",this.$refs.bgImage.style.paddingTop=0,this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.height=0,this.$refs.bgImage.style.paddingTop="70%",this.$refs.playBtn.style.display=""),this.$refs.bgImage.style.zIndex=a,this.$refs.layer.style[u]="translate3d(0,"+i+"px,0)",this.$refs.filter.style[C]="blur("+n+"px)",this.$refs.bgImage.style[u]="scale("+e+")"}},components:{SongList:o.a,Scroll:l.a,Loading:c.a}}},593:function(t,i,a){i=t.exports=a(577)(!0),i.push([t.i,".music-list[data-v-77c0eaa0]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-77c0eaa0]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-77c0eaa0]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-77c0eaa0]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-77c0eaa0]{position:relative;width:100%;height:0;padding-top:70%;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-77c0eaa0]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-77c0eaa0]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-77c0eaa0]{position:relative;height:100%;background:#222}.music-list .list[data-v-77c0eaa0]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-77c0eaa0]{padding:20px 30px}.music-list .list .loading-container[data-v-77c0eaa0]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["D:/vue-music/src/components/music-list/music-list.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,qBAAsB,AACtB,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"music-list.vue",sourcesContent:["\n.music-list[data-v-77c0eaa0] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-77c0eaa0] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-77c0eaa0] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-77c0eaa0] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-77c0eaa0] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-77c0eaa0] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-77c0eaa0] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-77c0eaa0] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-77c0eaa0] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-77c0eaa0] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-77c0eaa0] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-77c0eaa0] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},594:function(t,i,a){var e=a(593);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(578)("19a9f1ff",e,!0)},595:function(t,i,a){a(594);var e=a(9)(a(592),a(596),"data-v-77c0eaa0",null);t.exports=e.exports},596:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"music-list"},[a("div",{staticClass:"back",on:{click:t.back}},[a("i",{staticClass:"icon-back"})]),t._v(" "),a("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),a("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[a("div",{staticClass:"play-wrapper"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[a("i",{staticClass:"icon-play"}),t._v(" "),a("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),a("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),a("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),a("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[a("div",{staticClass:"song-list-wrapper"},[a("song-list",{attrs:{rank:t.rank,songs:t.songs},on:{selectItem:t.selectItem}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[a("loading")],1)])],1)},staticRenderFns:[]}},598:function(t,i,a){"use strict";function e(){var t=o()({},l.b,{uin:0,needNewCode:1,platform:"h5"});return a.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function n(t){var i=o()({},l.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return a.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",i,l.c)}i.b=e,i.a=n;var s=a(89),o=a.n(s),A=a(201),l=a(65)},613:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a(57),n=a.n(e),s=a(595),o=a.n(s),A=a(49),l=a(598),r=a(65),c=a(203);i.default={computed:n()({title:function(){return this.toplist.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},a.i(A.a)(["toplist"])),data:function(){return{songs:[],rank:!0}},created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;if(!this.toplist.id)return void this.$router.push("/rank");a.i(l.a)(this.toplist.id).then(function(i){i.code===r.a&&(t.songs=t._normalizeSongs(i.songlist))})},_normalizeSongs:function(t){var i=[];return t.forEach(function(t){var e=t.data;e.albumid&&e.songid&&i.push(a.i(c.a)(e))}),i}},components:{MusicList:o.a}}},624:function(t,i,a){i=t.exports=a(577)(!0),i.push([t.i,".slide-enter[data-v-77ad6140],.slide-leave-to[data-v-77ad6140]{transform:translate3d(100%,0,0)}.slide-enter-active[data-v-77ad6140],.slide-leave-active[data-v-77ad6140]{transition:all .3s ease}","",{version:3,sources:["D:/vue-music/src/components/top-list/top-list.vue"],names:[],mappings:"AACA,+DAEE,+BAAmC,CACpC,AACD,0EAEE,uBAA0B,CAC3B",file:"top-list.vue",sourcesContent:["\n.slide-enter[data-v-77ad6140],\n.slide-leave-to[data-v-77ad6140] {\n  transform: translate3d(100%, 0, 0);\n}\n.slide-enter-active[data-v-77ad6140],\n.slide-leave-active[data-v-77ad6140] {\n  transition: all 0.3s ease;\n}"],sourceRoot:""}])},637:function(t,i,a){var e=a(624);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(578)("a9a0e25e",e,!0)},652:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("transition",{attrs:{name:"slide"}},[a("music-list",{attrs:{title:t.title,bgImage:t.bgImage,songs:t.songs,rank:t.rank}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=0.43879b493190372c740c.js.map