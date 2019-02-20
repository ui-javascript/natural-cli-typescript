<template>
  <header class="header">
    <div class="header-left">
      <h2 class="title animated slower infinite rubberBandDelay">{{name}}</h2>
    </div>
    <div class="header-right">
      <router-link to="/">登出</router-link>
    </div>
  </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  @Prop(String) name!: String
  handleSelect (key: string, keyPath: string) {
    console.log(key, keyPath)
  }
}
// @Prop(Number) name!: number
// @Prop({ default: 'default value' }) name!: string
// @Prop([String, Boolean]) name!: string | boolean
</script>
