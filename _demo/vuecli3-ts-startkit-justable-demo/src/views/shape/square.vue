<template>
  <div class="square">
    <div
      v-for="(item, index) in squares"
      :key="index"
      class="animated bounce"
      :style="{display: 'inline-block', 'animation-duration': item.animateDuration, margin: item.margin, width: item.width, height: item.height, 'background-color': `rgb(${item.color})`}"
    ></div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Square extends Vue {
  colors: string[] = [
    '176, 215, 251',
    '251, 220, 176',
    '192, 251, 176',
    '251, 190, 176',
    '176, 199, 251',
    '255, 246, 143',
    '255, 192, 203',
    '255, 187, 255',
    '255, 110, 180',
    '28, 216, 210',
    '221, 94, 137',
    '248, 205, 218'
  ]
  get squares () {
    return new Array(24).fill(null).map(() => {
      const num = Math.round(150 * Math.random() + 50)
      return {
        width: `${num}px`,
        height: `${num}px`,
        margin: `${Math.round(Math.random() * 10 + 2)}px`,
        animateDuration: `${Math.random() + 0.7}s`,
        color: this.colors[Math.round(Math.random() * (this.colors.length - 1))]
      }
    })
  }
}
</script>
