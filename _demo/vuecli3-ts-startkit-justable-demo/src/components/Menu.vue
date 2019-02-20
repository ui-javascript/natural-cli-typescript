<template>
  <ul class="menu">
    <li
      v-for="(item, index) in menus"
      :key="index"
      class="menu-item"
      :class="{parent: item.type === 'parent', child: item.type === 'child', active: item.active}"
      @click="handleClick(item)"
    >{{item.text}}</li>
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IMenuItem } from '@/types'

@Component
export default class Menu extends Vue {
  menus: IMenuItem[] = [
    {
      type: 'parent',
      text: '形状',
      name: '',
      active: false
    },
    {
      type: 'child',
      name: 'circular',
      text: '圆形',
      active: true
    },
    {
      type: 'child',
      name: 'square',
      text: '正方形',
      active: false
    },
    {
      type: 'parent',
      text: '颜色',
      name: '',
      active: false
    },
    {
      type: 'child',
      name: 'red',
      text: '红色',
      active: false
    },
    {
      type: 'child',
      name: 'blue',
      text: '蓝色',
      active: false
    }
  ]
  handleClick (item: IMenuItem) {
    if (item.type === 'child') {
      this.menus.forEach(o => {
        if (o.name === item.name) {
          o.active = true
        } else {
          o.active = false
        }
      })
      this.$router.push({
        name: item.name
      })
    }
  }
}
</script>
