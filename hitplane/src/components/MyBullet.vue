<template>
    <div class='myBullet' :style="{left:(left_+(planeWidth/2)-(width/2))+'px',top:(top_ - height)+'px'}"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { clearInterval } from 'timers';

@Component
export default class MyBullet extends Vue {
  @Prop(Boolean) play!: boolean;
  @Prop(Number) hash!: number;
  @Prop(Number) top!: number;
  @Prop(Number) left!: number;
  @Prop(Number) planeWidth!: number;
  @Prop(Number) planeHeight!: number;
  state:Boolean = true; // 子弹状态（存在或销毁）
  width:Number = 21;
  height:Number = 47;
  top_ = this.top;
  left_ = this.left;
  speed = 2;
  moveTimer:any = null;
  
  move () {
    if (this.top_ <= -47) {
      // clearInterval(this.moveTimer)
      // this.moveTimer = null
      this.$emit('destroyMyBullet',this.hash)
      return
    }
    this.top_ = this.top_ - this.speed
  }
  destroy () {
    if (this.top_ <= 0) {
      this.state = false
    }
  }
  mounted () {
    const _this = this
    this.moveTimer = setInterval(() => {
      _this.move()
    }, 0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myBullet{
  position: absolute;
  z-index: 999;
  background-image: url("/src/assets/material/CloverAssets/plane/p-02a.png");
  background-repeat: no-repeat;
  background-position: -316px -101px;
  background-size: 400px;
  width: 21px;
  height: 47px;
}
</style>
