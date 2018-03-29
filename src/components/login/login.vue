<template>
  <div id="login">
      <div class="container">
        <div class="logo-wrapper">
            <img src="../../common/image/default.png" alt="" srcset="" class="logo">
        </div>
        <div class="main">
            <div class="username-box">
                <span class="iconfont icon-zhucedengluyonghuming"></span>
                <input type="text" placeholder="用户名" v-model="username">
                <span class="iconfont icon-shanchu" v-show="username.length" @click="clearUserName"></span>
            </div>
            <div class="password-box">
                <span class="iconfont icon-zhucedenglumima"></span>
                <input type="password" placeholder="密码" v-model="password">
                <span class="iconfont icon-shanchu" v-show="password.length"  @click="clearPassWord"></span>
            </div>
            <div class="remember">
                <label><input type="checkbox" name="" id="">&nbsp;记住用户名</label>
            </div>
            <div class="login-box" @click="login">
                登 录
            </div>
            <div class="info">
                <router-link class="register" to="register">注册</router-link>
                <span class="forgot">忘记密码</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        username:'',
        password:''
    };
  },
  methods: {
      login(){
        //   this.$router.push('recommend')
        let username = this.username;
        let password = this.password;
        if(!username){
            alert('用户名不能为空')
            return
        }
        if(!password){
             alert('密码不能为空')
            return
        }
      },
      clearUserName(){
          this.username = ''
      },
      clearPassWord(){
          this.password = ''
      }
  }
};
</script>

<style lang="stylus" scoped>
#login {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
    background: #272727;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        width: 100%;

        .logo-wrapper {
            text-align: center;

            .logo {
                width: 6rem;
                height: 6rem;
            }
        }
    }

    .main {
        width: 75%;
        margin: 1.25rem auto 0;

        .username-box, .password-box, .login-box {
            height: 2.8125rem;
            line-height: 2.8125rem;
            background: #e9ecec;
            border-radius: 2.8125rem;
            margin-bottom: 0.9375rem;
            position: relative;
            overflow: hidden;

            .iconfont {
                position: absolute;
                color: #75CDD1;
                top: 0.825rem;
                left: 0.825rem;
            }

            .icon-shanchu {
                position: static;
                float: right;
                margin-right: 0.625rem;
                line-height: 2.8125rem;
            }

            input {
                outline: 0;
                margin-left: 2.25rem;
                background: transparent;
                font-size: 1rem;
                color: #75CDD1;
                padding: 0.75rem 1rem 0.75rem 0;
            }

            input::-webkit-input-placeholder {
                color: #75CDD1;
            }
        }

        .remember {
            margin: -0.225rem 0 0.6375rem 0.3125rem;
            font-size: 14px;
        }

        .username-box, .password-box {
            box-shadow: 0.125rem 0.125rem 0.125rem;
        }

        .login-box {
            background: #33959a;
            box-shadow: 0 0 0 #e9ecec;
            text-align: center;
            color: #fff;
            font-size: 16px;
        }

        .info {
            overflow: hidden;
            padding: 0 0.9125rem;
            font-size: 0.875rem;

            .forgot, .register {
                color: #fff;
                text-decoration: underline;
            }

            .register {
                float: left;
            }

            .forgot {
                float: right;
            }
        }
    }
}
</style>

