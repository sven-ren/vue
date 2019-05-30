<template>
  <div class="player_content">
    <div class='myPlane' :style="{left:left+'px',top:top+'px'}"></div>
    <template v-for='item in bullets'>
      <MyBullet :ref="'myBullet_'+item.hash" :hash='item.hash' :key='item.hash' :top='item.top_' :left='item.left_' :planeWidth='width' :planeHeight='height' @destroyMyBullet='destroyMyBullet'/>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import MyBullet from '@/components/MyBullet.vue'
import { bulletItem } from './modal'

@Component({
  components: {
    MyBullet
  },
  props: {
    level: String,
    common: Object,
    play: Boolean
  }
})
export default class MyPlane extends Vue {
  flag:Boolean = false;
  flag1:Boolean = false;
  flag2:Boolean = false;
  flag3:Boolean = false;
  flag4:Boolean = false; // 子弹发射
  moveTimer: any = null; // 飞机移动定时器
  shootTimer:any = null; // 飞机射击定时器
  state:Boolean = true; // 飞机是否存活
  width = 64; // 飞机宽度
  height = 66; // 飞机高度
  left = 180; // 飞机初始化时的x轴距离
  top = 520; // 飞机距离顶部的距离
  speed = 1; // 飞机速度
  bullets:Array<bulletItem> = []; // 子弹数组
  myThis: any = this;
  move () {
    if (this.flag) {
      if (this.left <= 0) {
        return
      }
      this.left = this.left - this.speed
    }
    if (this.flag1) {
      if (this.top <= 0) {
        return
      }
      this.top = this.top - this.speed
    }
    if (this.flag2) {
      if (this.left >= this.$props.common.bgWidth - this.width) {
        return
      }
      this.left = this.left + this.speed
    }
    if (this.flag3) {
      if (this.top >= this.$props.common.bgHeight - this.height) {
        return
      }
      this.top = this.top + this.speed
    }
  }
  shoot () {
    if (this.flag4) {
      this.bullets.push({
        hash: Math.random(),
        top_: this.top,
        left_: this.left
      })
    }
  }
  calculate () {
    this.bullets.forEach((item: bulletItem) => {
      console.log(this.myThis.$refs[`myBullet_${item.hash}`].top_)
    })
  }
  destroyMyBullet (hash: bulletItem) {
    this.bullets = this.bullets.filter((item:any)=>{
      return item.hash !== hash
    })
  }
  @Watch('play')
  start (val:Boolean, oldVal:Boolean) {
    if (val !== oldVal && val) {
      this.moveTimer = setInterval(() => {
        this.move()
      }, 0)
      this.shootTimer = setInterval(() => {
        this.shoot()
        this.calculate()
      }, 168)
    }
  }
  pause () {
    clearInterval(this.moveTimer)
    this.moveTimer = null
  }
  created () {
    const _this = this
    document.onkeydown = function (e) {
      let key = e.keyCode
      if (key === 90) {
        _this.flag4 = true
      }
      if (key === 37) {
        _this.flag = true
      }
      if (key === 38) {
        _this.flag1 = true
      }
      if (key === 39) {
        _this.flag2 = true
      }
      if (key === 40) {
        _this.flag3 = true
      }
    }
    document.onkeyup = function (e) {
      let key = e.keyCode
      if (key === 90) {
        _this.flag4 = false
      }
      if (key === 37) {
        _this.flag = false
      }
      if (key === 38) {
        _this.flag1 = false
      }
      if (key === 39) {
        _this.flag2 = false
      }
      if (key === 40) {
        _this.flag3 = false
      }
    }
  }
  mounted () {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myPlane {
  position: absolute;
  z-index: 999;
  background-image: url("/src/assets/material/CloverAssets/plane/p-02a.png");
  background-repeat: no-repeat;
  background-position: -18px -13px;
  background-size: 400px;
  width: 64px;
  height: 66px;
}
</style>
