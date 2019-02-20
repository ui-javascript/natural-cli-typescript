<!-- 首页 -->
<template>
  <div class="home vue">
    <Header :name="username"></Header>
    <div class="container">
      <Menu></Menu>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu.vue'
import Header from '@/components/Header.vue'
import { mapGetters } from 'vuex'

@Component({
  components: {
    Menu,
    Header
  },
  computed: {
    ...mapGetters({
      username: 'getUsername'
    })
  }
})
export default class Home extends Vue {
}
</script>
