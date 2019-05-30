<template>
    <div class='myBullet' :style="{left:(myLeft+(planeWidth/2)-(width/2))+'px',top:(myTop - height)+'px'}"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { BulletActions } from '../store/MyBullet';
import { NormalItem } from './enemy/modal';

@Component
export default class MyBullet extends Vue {
  @Action(BulletActions.UPDATE_BULLET) public updateMyBullets!: any;
  @Action(BulletActions.DESTROY_BULLET) public destroyMyBullet!: any;
  // @Getter('GetNormals') GetNormals: NormalItem[];
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
      this.destroy();
      return;
    }
    this.myTop = this.myTop - this.speed;
    const normals = this.$store.getters.GetNormals;
    normals.forEach((item: any) => {
      if (this.myLeft <= item.left + 80 && this.myLeft >= item.top - 21) {
        if (this.myTop <= item.top + 80 && this.myTop >= item.top - 47) {
          this.destroy();
        }
      }
    });
    this.updateMyBullets({
      hash: this.hash,
      top: this.myTop,
      left: this.myLeft,
    });
  }
  private destroy() {
    clearInterval(this.moveTimer);
    this.moveTimer = null;
    this.$emit('destroyMyBullet', this.hash);
    this.destroyMyBullet({
      hash: this.hash,
      top: this.myTop,
      left: this.myLeft,
    });
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
