import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'
export default class Song{
    constructor({id,mid,singer,name,album,duration,image,url}){
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
    }
    // 获取歌词
    getLyric(){
        if (this.lyric) {
            return Promise.resolve(this.lyric)
        }
        return new Promise((resolve,reject)=>{
            getLyric(this.mid).then(res=>{
                if(res.retcode===ERR_OK){
                    this.lyric = Base64.encode(res.lyric)
                    // console.log(this.lyric)
                    resolve(this.lyric)
                }else{
                    reject('没有歌词')
                }
            })
        })
    }
}

// https://i.y.qq.com/v8/playsong.html?songmid=004Gyue33FERTT&ADTAG=myqq&from=myqq&channel=10007100  数据抓取来源
export function createSong(musicData){
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: filterSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?fromtag=38&uin=0&guid=9187183056&vkey=4FE168B4FB7B94D0C87CD8C6250324F9B24E3BBB4D51F243323F3A8B33FA63EC0968666AEE20CA7DB225661B90486E236E3BB4AEC85B180B`
		// url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?fromtag=38&uin=7235&guid=4418400784&vkey=B5266F73BD20184177384B2A3AF22C6A0068F9670017B61ED6BD559B514A7D84C7B8E243889A87CE608912A848298E2305B38DAF322D6DE4`

        /**
         * fromtag、guid、uin都是固定值
         * vkey：是随机生成的字符串，也可以为固定值
         */
    })
}

function filterSinger(singer){
    if(!singer){
        return ''
    }
    let ret = []
    singer.forEach(item=>{
        ret.push(item.name)
    })

    return ret.join('/')
}