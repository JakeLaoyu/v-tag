# v-tag-picker

一个酷酷移动端标签选择器 [ENG DOC](https://github.com/JakeLaoyu/v-tag-picker/blob/master/README.md)

# Introduction

[DEMO](https://jakelaoyu.github.io/v-tag-picker/)

[在vue中使用](https://github.com/JakeLaoyu/v-tag-picker/blob/master/examples/App.vue)

# Screenshot

![](http://blogimg.jakeyu.top/v-tag-picker/Screenshot-1.gif)

# Install

```sh
yarn add v-tag-picker
```

# Usage

```js
// 全局引用
import vTagPicker from 'v-tag-picker'

Vue.use(vTagPicker)

// 组件内引用
import { vTagPicker } from 'v-tag-picker'

components: {
  vTagPicker
}
```

```html
<v-tag-picker
  :totalData="tagData"
  :multipleSelection="multipleSelection"
  @change="change"
>
  <div class="img-wrap" slot="top">
    <img class="" src="~@/examples/assets/tagbg.png" alt="">
    <div class="img-wrap__title">最感兴趣的栏目</div>
    <div class="img-wrap__subtitle">定制专属于我的课程栏目</div>
  </div>

  <div class="footer" slot="footer">
    <a href="/">进入首页</a>
  </div>
</v-tag-picker>
```

# Props

| Name              | Type   | Default | Description                                   |
| ----------------- | ------ | ------- | --------------------------------------------- |
| zIndex            | Number |         | 选择器`z-index`样式                           |
| totalData         | Array  | []      | 列表数据，必需有`name`字段。[{ name: 'tag' }] |
| multipleSelection | Array  | []      | 已选择列表                                    |
| animationDuration | Number | 500     | 动画时间(ms).                                 |
| OnlyKey           | String | name    | 数据唯一值的 key                              |

# Events

| Name   | Description        | return   |
| ------ | ------------------ | -------- |
| change | 已选数据改变时触发 | 已选数据 |

# slot

| Name   | Description |
| ------ | ----------- |
| top    | 在列表上面  |
| footer | 页面底部    |

# License
MIT © [JakeLaoyu](https://github.com/JakeLaoyu)