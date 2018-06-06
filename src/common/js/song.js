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
        url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?fromtag=38&uin=0&guid=9187183056&vkey=AF4B94E3D8D603AAF051222ECF244C002C1565DDFEFAD76ED8B27BDB031BE3CA979D420FAC2EAACC0926B2B37FF01F691B0443897395BA2F`
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