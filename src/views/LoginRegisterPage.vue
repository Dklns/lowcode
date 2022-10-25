<template>
  <div class="login-register-box">
    <div class="login-register-container">
      <div class="login-page" id="login">
        <div class="login-page-bg-box">
          <div class="login-page-img-container">
            <img src="../assets/img/pic_one_login.png" alt="" />
            <img src="../assets/img/pic_two_login.png" alt="" />
          </div>
          <div class="login-page-register-container">
            <div>新用户</div>
            <div>终于等到你啦！点击下方注册按钮加入我们吧</div>
            <div>
              <button><a href="#register">注册</a></button>
            </div>
          </div>
        </div>
        <div class="login-page-login-box">
          <div class="login-page-login-container">
            <div class="login-page-login-title">登录</div>
            <div class="login-page-login-username">
              <div class="login-page-login-user-name-icon">
                <img src="../assets/img/pic_three_login.png" alt="" />
              </div>
              <input
                class="login-page-login-user-name-input"
                type="text"
                placeholder="用户名"
                v-model="loginObj.username"
              />
            </div>
            <div class="login-page-login-password">
              <div class="login-page-login-user-password-icon">
                <img src="../assets/img/pic_four_login.png" alt="" />
              </div>
              <input
                class="login-page-login-user-name-password"
                type="password"
                placeholder="密码"
                v-model="loginObj.password"
              />
            </div>
            <div class="login-page-login-confirm">
              <button @click="loginPostInfo">登录</button>
            </div>
          </div>
        </div>
      </div>
      <div class="register-page" id="register">
        <div class="register-page-bg-box">
          <div class="register-page-img-container">
            <img src="../assets/img/pic_one_register.png" alt="" />
            <img src="../assets/img/pic_two_register.png" alt="" />
          </div>
          <div class="login-page-register-container">
            <div>旧用户</div>
            <div>已经注册过啦，点击下方按钮加入我们吧</div>
            <div>
              <button><a href="#login">登录</a></button>
            </div>
          </div>
        </div>
        <div class="register-page-register-box">
          <div class="register-page-register-container">
            <div class="register-page-register-title">注册</div>
            <div class="register-page-register-username">
              <div class="register-page-register-user-name-icon">
                <img src="../assets/img/pic_three_login.png" alt="" />
              </div>
              <input
                v-model="registerObj.username"
                type="text"
                placeholder="用户名"
                class="register-page-register-user-name-input"
              />
            </div>
            <div class="register-page-register-password">
              <div class="register-page-register-user-password-icon">
                <img src="../assets/img/pic_four_login.png" alt="" />
              </div>
              <input
                type="password"
                v-model="registerObj.password"
                placeholder="密码"
                class="register-page-register-password-input"
              />
            </div>
            <div class="register-page-register-email">
              <div class="register-page-register-user-email-icon">
                <img src="../assets/img/pic_four_login.png" alt="" />
              </div>
              <input
                type="text"
                placeholder="邮箱"
                v-model="registerObj.email"
                class="register-page-register-email-input"
              />
            </div>
            <div class="register-page-register-authcode">
              <div class="register-page-register-getauthcode">
                <button @click="getAuthCode">获取验证码</button>
              </div>
              <div class="regster-page-register-inputauthcode">
                <input type="text" placeholder="请输入验证码" />
              </div>
            </div>
            <div class="register-page-register-confirm">
              <button @click="registerPostInfo">注册</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginPostInfoVerify } from "../assets/js/login-register-page.js/loginPostInfoVerify.js";
import { registerPostInfoVerify } from "../assets/js/login-register-page.js/registerPostInfoVerify.js";
import { authCodeVerify } from "../assets/js/login-register-page.js/authCodeVerify.js";
export default {
  name: "LoginRegisterPage",
  data() {
    return {
      loginObj: {
        username: "",
        password: "",
      },
      registerObj: {
        username: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    loginPostInfo() {
      var _this = this;
      loginPostInfoVerify(
        this.loginObj.username,
        this.loginObj.password,
        _this
      );
    },
    registerPostInfo() {
      var _this = this;
      registerPostInfoVerify(
        this.registerObj.username,
        this.registerObj.password,
        this.registerObj.email,
        _this
      );
    },
    getAuthCode() {
      authCodeVerify(
        this.registerObj.username,
        this.registerObj.password,
        this.registerObj.email
      );
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  border: 0;
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: #fff;
}
a:hover {
  text-decoration: none;
  color: skyblue;
}
body {
  margin: 0;
}
.login-register-box {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
.login-register-container {
  width: 200vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
}
.login-page,
.register-page {
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 400px;
  display: flex;
  flex-direction: row;
}
.login-page-bg-box,
.register-page-bg-box {
  flex: 1;
  position: relative;
}
.login-page-img-container,
.register-page-img-container {
  width: 100%;
  height: 100%;
  background-color: #3a9efd;
  border-bottom-right-radius: 100%;
  position: relative;
  img {
    object-fit: cover;
    position: absolute;
  }
  img:nth-child(1) {
    width: 50%;
    height: 50%;
    right: 10%;
    bottom: 3%;
  }
  img:nth-child(2) {
    width: 30%;
    height: 50%;
    left: 10%;
    top: 10%;
  }
}
.login-page-login-confirm button,
.register-page-register-confirm button {
  width: 25%;
  height: 40px;
  margin-top: 30px;
  border-radius: 10px;
  color: #fff;
  background-color: rgb(45, 113, 184);
  cursor: pointer;
}
.login-page-register-container {
  width: 400px;
  height: 200px;
  position: absolute;
  top: 50px;
  left: 40%;
  text-align: center;
  div {
    color: #fff;
  }
  div:nth-child(1) {
    font-size: 30px;
    margin-bottom: 10px;
  }
  div:nth-child(2),
  div:nth-child(3) {
    font-size: 10px;
  }
  div:nth-child(3) {
    margin-top: 20px;
    text-align: center;
    button {
      width: 60px;
      height: 30px;
      background-color: transparent;
      border: 1px solid #fff;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
.login-page {
  .login-page-login-box {
    flex: 1;
    .login-page-login-container {
      width: 50%;
      height: 50%;
      margin: 0 auto;
      transform: translateY(50%);
      text-align: center;

      > div {
        margin-bottom: 20px;
      }
      .login-page-login-title {
        color: #2c3e50;
        font-size: 35px;
        font-weight: 700;
      }

      .login-page-login-username,
      .login-page-login-password {
        display: flex;
        font-display: row;
        height: 30px;
        margin-top: 40px;
        div {
          background-color: #ccc;
          flex: 1;
          border-radius: 10px 0 0 10px;
          position: relative;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            width: 50%;
            vertical-align: middle;
          }
        }
        input {
          flex: 9;
          outline: none;
          letter-spacing: 2px;
          padding-left: 10px;
          color: #666;
          font-weight: 700;
          background-color: #ccc;
          border-radius: 0 10px 10px 0;
        }
        .login-page-login-user-name-input.login-page-login-user-name-input-placeholder::placeholder,
        .login-page-login-user-name-password.login-page-login-user-name-password-placeholder::placeholder {
          color: red;
        }
      }

      .login-page-login-username input::-webkit-input-placeholder,
      .login-page-login-password input::-webkit-input-placeholder {
        position: absolute;
        font-weight: bold;
        left: 5%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
.register-page {
  .register-page-register-box {
    flex: 1;
    .register-page-register-container {
      width: 50%;
      height: 50%;
      margin: 0 auto;
      transform: translateY(50%);
      text-align: center;

      > div {
        margin-bottom: 20px;
      }
      .register-page-register-title {
        color: #2c3e50;
        font-size: 35px;
        font-weight: 700;
      }

      .register-page-register-username,
      .register-page-register-password,
      .register-page-register-email {
        display: flex;
        font-display: row;
        height: 30px;
        margin-top: 40px;
        div {
          background-color: #ccc;
          flex: 1;
          border-radius: 10px 0 0 10px;
          position: relative;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            width: 50%;
            vertical-align: middle;
          }
        }
        input {
          flex: 9;
          outline: none;
          letter-spacing: 2px;
          padding-left: 10px;
          color: #666;
          font-weight: 700;
          background-color: #ccc;
          border-radius: 0 10px 10px 0;
        }
      }
      .register-page-register-user-name-input.register-page-register-user-name-input-placeholder::placeholder,
      .register-page-register-password-input.register-page-register-password-input-placeholder::placeholder,
      .register-page-register-email-input.register-page-register-email-input-placeholder::placeholder {
        color: red;
      }
      .register-page-register-username input::-webkit-input-placeholder,
      .register-page-register-password input::-webkit-input-placeholder,
      .register-page-register-email input::-webkit-input-placeholder {
        position: absolute;
        font-weight: bold;
        left: 5%;
        top: 50%;
        transform: translateY(-50%);
      }
      .register-page-register-authcode {
        margin-top: 60px;
        display: flex;
        height: 30px;
        .register-page-register-getauthcode {
          flex: 1;
          button {
            font-weight: 400;
            color: #fff;
            width: 100%;
            border-radius: 5px;
            background-color: rgb(108, 99, 255);
            height: 100%;
            cursor: pointer;
          }
        }
        .regster-page-register-inputauthcode {
          flex: 2;
          input {
            box-sizing: border-box;
            width: calc(100% - 20px);
            height: 100%;
            position: relative;
            font-weight: 500;
            color: #fff;
            background-color: #000;
            border-radius: 7px;
            outline: none;
            padding-left: 10px;
            margin-left: 20px;
          }
          input::-webkit-input-placeholder {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }
}
</style>