export const testMixin = {
    data(){
        return{
            title:'我是测试'
        }
    },
    created(){
        this._say();
    },
    methods:{
        _say(){
            console.log('你好，哈哈哈'+this.title)
        }
    }
}