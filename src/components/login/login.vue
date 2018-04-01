<template>
  <div id="login">
      <div class="container">
        <div class="logo-wrapper">
            <img src="../../common/image/default.png" alt="" srcset="" class="logo">
        </div>
        <div class="main">
            <div class="username-box">
                <img class="icon icon-user" src="../../common/image/user.png">
                <input type="text" placeholder="用户名" v-model="username">
                <img class="icon icon-del"  src="../../common/image/del.png" v-show="username.length" @click="clearUserName">
            </div>
            <div class="password-box">
                <img class="icon icon-password" src="../../common/image/password.png">
                <input type="password" placeholder="密码" v-model="password">
                <img class="icon icon-del" v-show="password.length"  @click="clearPassWord"  src="../../common/image/del.png">
            </div>
            <div class="remember">
                <label class="remember-password"><input type="checkbox" name="remember-password" value="1" v-model="rememberPassword"><span>记住密码</span></label>
                 <label class="auto-login"><input type="checkbox" name="auto-login" value="1" v-model="autoLogin" @click="setRememberPassword"><span>自动登录</span></label>
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
      username: "",
      password: "",
      rememberPassword: "",
      autoLogin: ""
    };
  },
  created() {
    this.getLocalStorage();
  },
  methods: {
    login() {
      //   this.$router.push('recommend')
      let username = this.username;
      let password = this.password;
      if (!username) {
        alert("用户名不能为空");
        return;
      }
      if (!password) {
        alert("密码不能为空");
        return;
      }
      this.$axios.get(this.$baseURL + "musicAppUsers.json").then(res => {
        const data = res.data;
        let users = [];
        for (const key in data) {
          users.push(data[key]);
        }

        let result = users.filter(user => {
          return (
            this.username === user.username && this.password === user.password
          );
        });
        if (result.length) {
          // console.log(this.rememberPassword,this.autoLogin)
          if (this.rememberPassword) {
            this.setLocalStorage(username, password);
          } else {
            this.removeLocalStorage();
          }
          this.$store.dispatch("setUser", result[0].username);
          this.$router.push("recommend");
        } else {
          alert("用户或密码不正确");
        }
      });
    },
    clearUserName() {
      this.username = "";
    },
    clearPassWord() {
      this.password = "";
    },
    setRememberPassword() {
      if (!this.autoLogin) {
        this.rememberPassword = true;
      }
    },
    // 将账户密码存本地存储
    setLocalStorage(username, password) {
      //   alert(this.username + this.password);
      if (this.rememberPassword) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      }
      if (this.autoLogin) {
        localStorage.setItem("autoLogin", true);
      }
    },
    getLocalStorage() {
      let username = localStorage.getItem("username");
      let password = localStorage.getItem("password");
      if (username && password) {
        this.username = username;
        this.password = password;
        this.rememberPassword = true;
      }
    },
    removeLocalStorage() {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
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

        .remember {
            margin: -0.225rem 0 0.6375rem 0.3125rem;
            font-size: 14px;
            padding: 0.3125rem 0.625rem;
            overflow: hidden;

            .remember-password, .auto-login {
                float: left;
                overflow: hidden;

                input {
                    float: left;
                }

                span {
                    margin-left: 0.3125rem;
                    float: right;
                }
            }

            .auto-login {
                float: right;
            }
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

