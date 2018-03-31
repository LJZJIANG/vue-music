<template>
  <div id="login">
      <div class="container">
        <div class="logo-wrapper">
            <img src="../../common/image/default.png" alt="" srcset="" class="logo">
        </div>
        <div class="main">
            <div class="username-box">
                 <img class="icon icon-user" src="../../common/image/user.png">
                <input type="text" placeholder="请输入用户名" v-model="username" @blur.lazy="isExist()">
                <img class="icon icon-del"  src="../../common/image/del.png" v-show="username.length" @click="clearUserName">
            </div>
            <p class="is-exist" v-show="Isexist" ref="username">用户名已存在</p>
            <div class="password-box">
                <img class="icon icon-password" src="../../common/image/password.png">
                <input type="password" placeholder="请输入密码" v-model="password">
                <img class="icon icon-del" v-show="password.length"  @click="clearPassWord"  src="../../common/image/del.png">
            </div>
            <div class="password-box">
                <img class="icon icon-password" src="../../common/image/password.png">
                <input type="password" placeholder="请输入确认密码" v-model="comfirmPassword">
                 <img class="icon icon-del" v-show="comfirmPassword.length"  @click="clearComfirmPassWord"  src="../../common/image/del.png">
            </div>
            <div class="login-box" @click="register">
                注 册
            </div>
            <div class="info">
                <router-link class="register" to="login">已有账号，直接登录</router-link>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { addClass } from "../../common/js/dom";
export default {
  data() {
    return {
      username: "",
      password: "",
      comfirmPassword: "",
      Isexist: false
    };
  },
  methods: {
    register() {
      let username = this.username;
      let password = this.password;
      let comfirmPassword = this.comfirmPassword;
      if (!username) {
        alert("用户名不能为空");
        return;
      }
      if (!password) {
        alert("密码不能为空");
        return;
      }
      if (password != comfirmPassword) {
        alert("密码和确认密码不相等");
        return;
      }

      const formData = {
        username: this.username,
        password: this.password,
        comfirmPassword: this.comfirmPassword
      };
      console.log(formData)
      if (!this.Isexist) {
        this.$axios
          .post(this.$baseURL + "musicAppUsers.json", formData)
          .then(res => {
              console.log(res)
            if (res.status == 200) {
              this.username = "";
              this.password = "";
              // 注册成功，跳转登录页面
              this.$router.push("/login");
            }
          });
      }
    },
    // 判断用户名是否存在
    isExist() {
      this.$axios.get(this.$baseURL + "musicAppUsers.json").then(res => {
        const data = res.data;
        let users = [];
        for (const key in data) {
          users.push(data[key]);
        }

        let result = users.filter(user => {
          return this.username === user.username;
        });
        if (result.length) {
          this.Isexist = true;
          addClass(this.$refs.username, "move");
        } else {
          this.Isexist = false;
        }
      });
    },
    clearUserName() {
      this.username = "";
    },
    clearPassWord() {
      this.password = "";
    },
    clearComfirmPassWord() {
      this.comfirmPassword = "";
    }
  }
};
</script>
<style lang="stylus" scoped>
@keyframes move {
    0% {
        color: #ff0000;
        left: -1.125rem;
    }

    100% {
        color: #f80;
        left: 1.125rem;
    }
}

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

            .icon {
                position: absolute;
                color: #75CDD1;
                top: 0.825rem;
                left: 0.825rem;
                display: inline-block;
                height: 1.05rem;
                width: 1.05rem;
            }

            .icon-del {
                position: static;
                float: right;
                margin-right: 0.625rem;
                margin-top: 0.92rem;
            }

            input {
                outline: 0;
                margin-left: 2.25rem;
                background: transparent;
                font-size: 1rem;
                color: #75CDD1;
                padding: 0.75rem 0rem 0.75rem 0;
            }

            input::-webkit-input-placeholder {
                color: #75CDD1;
            }
        }

        .is-exist {
            text-align: center;
            font-size: 0.875rem;
            color: #f00;
            margin: -5px 0 10px;
            transition: 1s;
            position: relative;
        }

        .move {
            animation: move 0.5s ease 2;
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
            font-size: 0.875rem;
            text-align: center;

            .register {
                color: #fff;
                text-decoration: underline;
            }
        }
    }
}
</style>

