<template>
  <div class="login-container">
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
            <button><router-link to="/register">注册</router-link></button>
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
              placeholder="请输入用户名"
              v-model="loginObj.username"
            />
          </div>
          <div class="login-page-login-password">
            <div class="login-page-login-user-password-icon">
              <img src="../assets/img/pic_four_login.png" alt="" />
            </div>
            <input
              class="login-page-login-password-input"
              type="password"
              placeholder="请输入密码"
              v-model="loginObj.password"
            />
          </div>
          <div class="login-page-login-confirm">
            <button @click="loginPostInfo">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { infoVerify } from "../assets/js/login-register-page.js/infoVerify.js";
export default {
  name: "LoginPage",
  data() {
    return {
      loginObj: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    loginPostInfo() {
      var _this = this;
      infoVerify(
        [{ page_type: "login-page-login" }],
        [
          {
            input_value: this.loginObj.username,
            class_input: ".login-page-login-user-name-input",
            const_input: "用户名",
            side_const_class: "user-name",
          },
          {
            input_value: this.loginObj.password,
            class_input: ".login-page-login-password-input",
            const_input: "密码",
            side_const_class: "password",
          },
        ],
        _this,
        _this.loginObj,
        "post",
        "postLoginInfo"
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
.login-container {
  width: 100vw;
  height: 100vh;
}
.login-page {
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 400px;
  display: flex;
  flex-direction: row;
}
.login-page-bg-box {
  flex: 1;
  position: relative;
}
.login-page-img-container {
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
.login-page-login-confirm button {
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
        .login-page-login-password-input.login-page-login-password-input-placeholder::placeholder {
          color: #ff4d4d;
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
</style>