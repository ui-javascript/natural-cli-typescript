/**
 * 为了让TS能够识别*.vue文件
 */
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
