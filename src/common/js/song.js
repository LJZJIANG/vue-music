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

export function createSong(musicData){
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: filterSinger(musicData.singer),
        name: musicData.songname,
        album: musicData.albumname,
        duration: musicData.interval,
        image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?fromtag=38&uin=0&guid=9187183056&vkey=191D3EBD93A1BAE52839E942FF2B9F1D48AF5C6BB8B5FF772D6FED5592177AFF46DE4D76286BDA08815BE1CCC2A1B6B1D5C81268542ADD87`

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