<template>
  <div id="connect">
    <div class="container">
      <h1>连接数据库</h1>
      <form>
        <div class="item">
          <input type="text" id="url" v-model="reqObj.url" required />
          <label>
            <span
              v-for="(item, index) in urlSpan"
              :key="index"
              :style="{ 'transition-delay': index * 50 + 'ms' }"
            >
              {{ item }}
            </span>
          </label>
        </div>
        <div class="item">
          <input type="text" id="dbName" v-model="reqObj.user" required />
          <label>
            <span
              v-for="(item, index) in dbNameSpan"
              :key="item"
              :style="{ 'transition-delay': index * 50 + 'ms' }"
            >
              {{ item }}
            </span>
          </label>
        </div>
        <div class="item">
          <input
            type="password"
            id="dbPwd"
            v-model="reqObj.password"
            required
          />
          <label>
            <span
              v-for="(item, index) in dbPwdSpan"
              :key="item"
              :style="{ 'transition-delay': index * 50 + 'ms' }"
            >
              {{ item }}
            </span>
          </label>
        </div>
        <button class="btn" @click.prevent="submit">连接</button>
      </form>
      <div class="hint" v-if="message">
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";
import { connectDatabase } from "../service/connect/connect.js";

export default {
  name: "ConnectView",
  data() {
    return {
      urlSpan: "url",
      dbNameSpan: "数据库名称",
      dbPwdSpan: "密码",
      reqObj: {
        url: "",
        user: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    submit() {
      const { url, user, password } = this.reqObj;
      if (url && user && password) {
        connectDatabase(this.reqObj)
          .then((response) => Promise.resolve(response))
          .then((res) => {
            console.log(res);
            const { code, message } = res.data;
            if (code === 200) {
              router.push("/select");
            } else {
              this.message = message;
            }
          });
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
}

#connect {
  color: #fff;
  background-image: linear-gradient(
    to top,
    #85cbee,
    #7fd9f0,
    #82e6ec,
    #91f1e4,
    #a9fbda
  );
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.container {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  border-radius: 5px;
}

.container h1 {
  text-align: center;
  margin-bottom: 30px;
}

.btn {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background-color: lightblue;
  padding: 15px;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.btn:focus {
  outline: 0;
}

.btn:active {
  transform: scale(0.98);
}

.item {
  position: relative;
  margin: 20px 0 40px;
  width: 300px;
}

.item input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
}

.item input:focus,
.item input:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.item label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.item label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.item input:focus + label span,
.item input:valid + label span {
  color: rgb(82, 144, 164);
  transform: translateY(-30px);
}

.hint {
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  color: orange;
  font-size: 22px;
}
</style>