<template>
  <form autocomplete="off">
    <div class="form-group">
      <label>用户名:</label>
      <input class="form-input" type="text" v-model="form.username">
    </div>
    <div class="form-group">
      <label>密码:</label>
      <input class="form-input" type="text" v-model="form.password">
    </div>
    <div class="form-group" style="text-align: center;">
      <button class="form-button" @click.prevent="onSubmit">登陆</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LoginBox extends Vue {
  form = {
    username: '',
    password: ''
  }
  onSubmit () {
    this.$emit('submit', this.form)
  }
}
</script>
