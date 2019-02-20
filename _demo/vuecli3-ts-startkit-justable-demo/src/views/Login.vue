<!-- 登陆界面 -->
<template>
  <div class="login vue">
    <div class="login-box">
      <h2 class="login-title">vue-ts-startkit</h2>
      <LoginBox @submit="doLogin"></LoginBox>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LoginBox from '@/components/LoginBox.vue'
import store from '@/store'
import { ILoginForm } from '@/types'

@Component({
  components: {
    LoginBox
  }
})
export default class Login extends Vue {
  doLogin (data: ILoginForm) {
    store.commit('setUsername', data.username)
    this.$router.push('home')
  }
}
</script>
