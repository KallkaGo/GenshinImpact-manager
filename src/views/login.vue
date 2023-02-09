<!--
 * @Author: ZH
 * @Date: 2023-02-05 13:22:32
 * @LastEditTime: 2023-02-05 15:14:07
 * @LastEditors: ZH
 * @Description: 
-->
<template>

  <div class="login_container" v-loading="show" element-loading-background="rgba(255,255,255,0.5)">
    <div class="box" ref="loginBox">
      <h2>Login</h2>
      <div class="input-box">
        <label>账号</label>
        <input type="text" v-model="userID" />
      </div>
      <div class="input-box">
        <label>密码</label>
        <input type="password" v-model="pwd" @keyup.enter="loginAcc()" />
      </div>
      <div class="btn-box">
        <a href="#">忘记密码?</a>
        <div>
          <button v-text="`登录`" @click="loginAcc"></button>
          <button v-text="`注册`" @click="handleSignOrLogin(0)"></button>
        </div>
      </div>
    </div>

    <div class="Signbox" ref="signBox">
      <h2>Sign</h2>
      <div class="input-box">
        <label>邮箱</label>
        <input class="Signmail" type="text" v-model="email" />
      </div>
      <div class="input-box">
        <label>密码</label>
        <input type="password" v-model="Signpwd" @keyup.enter="userRegister()" />
      </div>
      <div class="btn-box">
        <div>
          <button v-text="`注册`" @click="userRegister"></button>
          <button v-text="`已有账号直接登陆`" @click="handleSignOrLogin(1)"></button>
        </div>
      </div>
    </div>
  </div>





</template>

<script lang="ts" setup>
import { userLogin } from '@/request/module/login'
import router from '@/router';
import LocalCache from '@/utils/cache'
import { debounce } from '@/utils/debounce'


const show = ref<boolean>(false)

const userID = ref<string>('')
const pwd = ref<string>('')

const email = ref<string>('')
const Signpwd = ref<string>('')

const loginBox = ref<HTMLElement>()
const signBox = ref<HTMLElement>()

const handleLogin = async () => {
  if (userID.value !== '' && pwd.value !== '') {
    show.value = !show.value
    const res = await userLogin(userID.value, pwd.value)
    if (!!res.token) {
      LocalCache.setCache('token', res.token)
      ElMessage({
        type: 'success',
        message: '登陆成功'
      })
      router.push('/main')
    } else {
      ElMessage({
        type: 'error',
        message: '用户名或密码不正确'
      })
    }
    show.value = !show.value
  } else {
    ElMessage({
      type: 'warning',
      message: "用户名或密码不能为空"
    })
  }


}

const loginAcc = debounce(handleLogin, 500)
const handleSignOrLogin = (flag: number) => {

  let loginDom = loginBox.value
  let signDom = signBox.value
  if (flag === 0) {
    loginDom!.style.transform = "rotateY(180deg)"
    signDom!.style.transform = 'rotateY(0deg)'
  } else {
    loginDom!.style.transform = "rotateY(0deg)"
    signDom!.style.transform = 'rotateY(-180deg)'
  }

}
const userRegister = () => { }




</script>

<style lang="scss" scoped>
.login_container {
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  position: absolute;
  backface-visibility: hidden;
  transition: all .5s;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: rgba(50, 50, 50, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
}

.box>h2 {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
}

.box .input-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.box .input-box label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
}

.box .input-box input {
  letter-spacing: 1px;
  font-size: 14px;
  box-sizing: border-box;
  width: 250px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  padding: 0 12px;
  color: rgba(255, 255, 255, 0.9);
  transition: .2s;
}

.box .input-box input:focus {
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.box .btn-box {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.box .btn-box>a {
  outline: none;
  display: block;
  width: 250px;
  text-align: end;
  text-decoration: none;
  font-size: 13px;
  color: rgba(255, 255, 225, 0.9);
}

.box .btn-box>a:hover {
  color: rgba(255, 255, 225, 0.9);
}

.box .btn-box>div {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .btn-box>div>button {
  outline: none;
  margin-top: 10px;
  display: block;
  font-size: 14px;
  border-radius: 5px;
  transition: 0.2s;
}

.box .btn-box>div>button:nth-of-type(1) {
  width: 120px;
  height: 35px;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(192, 119, 91, 0.7);
  background: rgba(192, 119, 91, 0.5);
}

.box .btn-box>div>button:nth-of-type(2) {
  width: 120px;
  height: 35px;
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(192, 119, 91, 0.7);
  background: rgba(192, 119, 91, 0.5);
}

.box .btn-box>div>button:hover {
  border: 1px solid rgba(251, 128, 71, 0.7);
  background: rgba(251, 128, 71, 0.5);
}

.Signbox {
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  transition: all .5s;
  width: 350px;
  height: 350px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  background: rgba(50, 50, 50, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.Signbox>h2 {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
}

.Signbox .input-box {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.Signbox .input-box label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 5px;
}

.Signbox .input-box input {
  letter-spacing: 1px;
  font-size: 14px;
  box-sizing: border-box;
  width: 250px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  padding: 0 12px;
  color: rgba(255, 255, 255, 0.9);
  transition: 0.2s;
}

.Signbox .input-box input:focus {
  border: 1px solid rgba(255, 255, 255, 0.8);
}

.Signbox .btn-box {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.Signbox .btn-box>a {
  outline: none;
  display: block;
  width: 250px;
  text-align: end;
  text-decoration: none;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}

.Signbox .btn-box>a:hover {
  color: rgba(255, 255, 255, 1);
}

.Signbox .btn-box>div {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Signbox .btn-box>div>button {
  outline: none;
  margin-top: 10px;
  display: block;
  font-size: 14px;
  border-radius: 5px;
  transition: 0.2s;
}

.Signbox .btn-box>div>button:nth-of-type(1) {
  width: 120px;
  height: 35px;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(192, 119, 91, 0.7);
  background: rgba(192, 119, 91, 0.5);
}

.Signbox .btn-box>div>button:nth-of-type(2) {
  width: 120px;
  height: 35px;
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(192, 119, 91, 0.7);
  background: rgba(192, 119, 91, 0.5);
}

.Signbox .btn-box>div>button:hover {
  border: 1px solid rgba(251, 128, 71, 0.7);
  background: rgba(251, 128, 71, 0.5);
}
</style>
