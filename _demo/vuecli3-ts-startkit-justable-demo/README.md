### 审查webpack配置
vue inspect > webpack.js
vue inspect --mode production > webpack.prod.js

### 构建步骤
1. npm install -g @vue/cli 全局安装vue cli3
2. vue create hello-world，选择typescript选项创建新项目
3. npm run serve 运行项目

### vue-class-component源码
https://github.com/vuejs/vue-class-component
1. 在class-style-component（class风格组件）上使用装饰器@component()或@component(options)
2. 接收target(class-style-component)，遍历target的prototype
3. 如果property是vue内部的hooks就直接merge到options中
4. 如果是function就merge到options.methods中
5. 如果是setter&getter就merge到options.computed中
6. 其他就merge到options.mixins中
7. 收集target的实例属性组装成data:function(){return {}}merge到options.mixins中
8. 找到target的superClass，执行let subClass = superClass.extends(options)
9. 把target的静态属性转移到subClass中
10. @component()或@component(options)最终返回的是subClass

### vue-property-decorator源码
https://www.npmjs.com/package/vue-property-decorator
1. 完全依赖于vue-class-component，原封输出vue-class-component的@component
2. 输出@Inject，@Provide，@Model，@Prop，@Watch，@Emit

``` html
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  components: {
    Tools: {}
  }
})
export default class World extends Vue {
  static peace = true
  word = 'Hello world'
  @Prop(String) name!: String
  get year () {
    return 2019
  }
  say (prefix: string) {
    console.log(`${prefix} ${this.word}`)
  }
  mounted () {
    console.log('mounted')
  }
  components: {
    Person: {}
  }
}
</script>
```
等价于
``` html
<script>
export default {
  mixins: {
    components: {
      Person: {}
    }
  },
  data () {
    return {
      word: 'Hello world'
    }
  },
  props: {
    name: {
      type: String
    }
  }
  computed: {
    year () {
      return 2019
    }
  },
  components: {
    Tools: {}
  },
  mounted () {
    console.log('mounted')
  },
  methods: {
    say (prefix) {
      console.log(`${prefix} ${this.word}`)
    }
  }
}
</script>
```

### FAQ
#### 如下代码在新版typescript中会报错
``` typescript
class Point {
  x: undefined
  // Property 'y' has no initializer and is not definitely assigned in the constructor
  y: number
}
```
解决办法：
[stackoverflow](https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc)
1. If you are using VSCode you need to change the TS version that the editor use.
2. Just initialize the array when you declare it inside the constructor
``` typescript
class Point {
  x: undefined
  y: number = 2
}
// 或
class Point {
  x: undefined
  y: number
  constructor () {
    this.y = 2
  }
}
```