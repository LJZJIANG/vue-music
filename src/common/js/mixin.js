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

export const checkIsLogin = {
    mounted(){
        if(!this.$store.getters.isLogin){
            this.$router.push('login');
          }
    }
}