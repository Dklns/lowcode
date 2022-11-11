<template>
  <div class="register-container">
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
            <button><router-link to="/login">登录</router-link></button>
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
            <div class="regster-page-register-authcode">
              <input
                type="text"
                placeholder="请输入验证码"
                v-model="registerObj.authcode"
                class="register-page-register-authcode-input"
              />
            </div>
          </div>
          <div class="register-page-register-confirm">
            <button @click="registerPostInfo">注册</button>
          </div>
        </div>
      </div>
    </div>
    <div id="overlay">
      <div class="popup">
        <p class="popup_title">温馨提示</p>
        <p class="popup_content">{{ popup_content }}</p>
        <div class="popup_btn">
          <button class="cancelBtn" @click="hidepopup">取消</button>
          <button class="confirmBtn" @click="hidepopup">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { infoVerify } from "../assets/js/login-register-page.js/infoVerify.js";
import { showpopup } from "../assets/js/login-register-page.js/showpopup.js";
export default {
  name: "RegisterPage",
  data() {
    return {
      registerObj: {
        username: "",
        password: "",
        email: "",
        authcode: "",
      },
      popup_content: "",
    };
  },
  methods: {
    registerPostInfo() {
      var _this = this;
      infoVerify(
        [{ page_type: "register-page-register" }],
        [
          {
            input_value: this.registerObj.username,
            class_input: ".register-page-register-user-name-input",
            const_input: "用户名",
            side_const_class: "user-name",
          },
          {
            input_value: this.registerObj.password,
            class_input: ".register-page-register-password-input",
            const_input: "密码",
            side_const_class: "password",
          },
          {
            input_value: this.registerObj.email,
            class_input: ".register-page-register-email-input",
            const_input: "邮箱",
            side_const_class: "email",
          },
          {
            input_value: this.registerObj.authcode,
            class_input: ".register-page-register-authcode-input",
            const_input: "验证码",
            side_const_class: "authcode",
          },
        ],
        _this,
        _this.registerObj,
        "post",
        "postRegisterInfo"
      );
    },
    getAuthCode() {
      var reg = /^([a-zA-Z0-9]+[-_\\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
      var _this = this;
      if (!reg.test(this.registerObj.email)) {
        // alert("邮箱格式不对，请重新输入");
        showpopup(_this, "输入错误，请检查邮箱格式或填写为空");
      } else {
        infoVerify(
          [{ page_type: "register-page-register" }],
          [
            {
              input_value: this.registerObj.username,
              class_input: ".register-page-register-user-name-input",
              const_input: "用户名",
              side_const_class: "user-name",
            },
            {
              input_value: this.registerObj.password,
              class_input: ".register-page-register-password-input",
              const_input: "密码",
              side_const_class: "password",
            },
            {
              input_value: this.registerObj.email,
              class_input: ".register-page-register-email-input",
              const_input: "邮箱",
              side_const_class: "email",
            },
          ],
          _this.registerObj,
          "get",
          "getAuthCode"
        );
      }
    },
    hidepopup() {
      var overlay = document.getElementById("overlay");
      overlay.style.display = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
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
.register-container {
  width: 100vw;
  height: 100vh;
}
.register-page {
  width: 100vw;
  height: 100vh;
  min-width: 1200px;
  min-height: 400px;
  display: flex;
  flex-direction: row;
}
.register-page-bg-box {
  flex: 1;
  position: relative;
}
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
.register-page-register-confirm button {
  width: 25%;
  height: 40px;
  margin-top: 30px;
  border-radius: 10px;
  color: #fff;
  background-color: rgb(45, 113, 184);
  cursor: pointer;
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
      .register-page-register-email-input.register-page-register-email-input-placeholder::placeholder,
      .register-page-register-authcode-input.register-page-register-authcode-input-placeholder::placeholder {
        color: #5a001a;
      }
      .register-page-register-username input::-webkit-input-placeholder,
      .register-page-register-password input::-webkit-input-placeholder,
      .register-page-register-email input::-webkit-input-placeholder,
      .register-page-register-authcode input::-webkit-input-placeholder {
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
        .regster-page-register-authcode {
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
/* 遮罩层 */
#overlay {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  font-size: 16px;
  /* IE9以下不支持rgba模式 */
  background-color: rgba(0, 0, 0, 0.5);
  /* 兼容IE8及以下 */
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7f000000,endColorstr=#7f000000);
  display: none;
}
.popup {
  background-color: #ffffff;
  max-width: 400px;
  min-width: 200px;
  height: 240px;
  border-radius: 5px;
  margin: 100px auto;
  text-align: center;
}
.popup_title {
  height: 60px;
  line-height: 60px;
  border-bottom: solid 1px #cccccc;
}
.popup_content {
  height: 50px;
  line-height: 50px;
  padding: 15px 20px;
}
.popup_btn {
  padding-bottom: 10px;
}
.popup_btn button {
  color: #778899;
  width: 40%;
  height: 40px;
  cursor: pointer;
  border: solid 1px #cccccc;
  border-radius: 5px;
  margin: 5px 10px;
  color: #ffffff;
  background-color: #337ab7;
}
</style>