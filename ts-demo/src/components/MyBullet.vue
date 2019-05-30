<template>
    <div class='myBullet' :style="{left:(myLeft+(planeWidth/2)-(width/2))+'px',top:(myTop - height)+'px'}"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { BulletActions } from '../store/MyBullet';

@Component
export default class MyBullet extends Vue {
  @Action(BulletActions.UPDATE_BULLET) public updateMyBullets!: any;
  @Action(BulletActions.DESTROY_BULLET) public destroyMyBullet!: any;
  @Prop(Boolean) private play!: boolean;
  @Prop(Number) private hash!: number;
  @Prop(Number) private top!: number;
  @Prop(Number) private left!: number;
  @Prop(Number) private planeWidth!: number;
  @Prop(Number) private planeHeight!: number;
  private state: boolean = true; // 子弹状态（存在或销毁）
  private width: number = 21;
  private height: number = 47;
  private myTop = this.top;
  private myLeft = this.left;
  private speed = 2;
  private moveTimer: any = null;
  private move() {
    if (this.myTop <= -47) {
      clearInterval(this.moveTimer)
      this.moveTimer = null;
      this.$emit('destroyMyBullet', this.hash);
      this.destroyMyBullet({
        hash: this.hash,
        top_: this.myTop,
        left_: this.myLeft,
      });
      return;
    }
    this.myTop = this.myTop - this.speed;
    this.updateMyBullets({
      hash: this.hash,
      top_: this.myTop,
      left_: this.myLeft,
    });
  }
  private destroy() {
    if (this.myTop <= 0) {
      this.state = false;
    }
  }
  private mounted() {
    const self = this;
    this.moveTimer = setInterval(() => {
      self.move();
    }, 0);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myBullet{
  position: absolute;
  z-index: 999;
  background-image: url("../assets/material/CloverAssets/plane/p-02a.png");
  background-repeat: no-repeat;
  background-position: -316px -101px;
  background-size: 400px;
  width: 21px;
  height: 47px;
}
</style>
