<template>
  <div class="player_content">
    <div class='myPlane' :style="{left:left+'px',top:top+'px'}"></div>
    <template v-for='item in MyBulletState.bullets'>
      <MyBullet :data='item' :key='item.hash' :planeWidth='width' :planeHeight='height'/>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';
import MyBullet from '@/components/MyBullet.vue';
import { BulletItem } from './modal';
import { State, Action } from 'vuex-class';
import { BulletActions } from '../store/MyBullet';

@Component({
  components: {
    MyBullet,
  },
  props: {
    level: String,
    common: Object,
    play: Boolean,
  },
})
export default class MyPlane extends Vue {
  @Action(BulletActions.ADD_BULLET) public addMyBullets!: any;
  @State('MyBulletState') public MyBulletState!: any;
  private flag: boolean = false;
  private flag1: boolean = false;
  private flag2: boolean = false;
  private flag3: boolean = false;
  private flag4: boolean = false; // 子弹发射
  private moveTimer: any = null; // 飞机移动定时器
  private shootTimer: any = null; // 飞机射击定时器
  private state: boolean = true; // 飞机是否存活
  private width = 64; // 飞机宽度
  private height = 66; // 飞机高度
  private left = 180; // 飞机初始化时的x轴距离
  private top = 520; // 飞机距离顶部的距离
  private speed = 1.5; // 飞机速度
  private bullets: BulletItem[] = []; // 子弹数组
  private bulletWidth = 21; // 子弹宽度
  private bulletHeight = 47; // 子弹高度
  private myThis: any = this;
  private move() {
    if (this.flag) {
      if (this.left <= 0) {
        return;
      }
      this.left = this.left - this.speed;
    }
    if (this.flag1) {
      if (this.top <= 0) {
        return;
      }
      this.top = this.top - this.speed;
    }
    if (this.flag2) {
      if (this.left >= this.$props.common.bgWidth - this.width) {
        return;
      }
      this.left = this.left + this.speed;
    }
    if (this.flag3) {
      if (this.top >= this.$props.common.bgHeight - this.height) {
        return;
      }
      this.top = this.top + this.speed;
    }
  }
  private shoot() {
    if (this.flag4) {
      const item = {
        hash: Math.random(),
        top: this.top,
        left: this.left,
        width: this.bulletWidth,
        height: this.bulletHeight,
        state: true,
        speed: 2,
      };
      // this.bullets.push(item);
      this.addMyBullets(item);
    }
  }
  private destroyMyBullet(hash: number) {
    this.bullets = this.bullets.filter((item: any) => {
      return item.hash !== hash;
    });
  }
  @Watch('play')
  private start(val: boolean, oldVal: boolean) {
    if (val !== oldVal && val) {
      this.moveTimer = setInterval(() => {
        this.move();
      }, 0);
      this.shootTimer = setInterval(() => {
        this.shoot();
      }, 168);
    }
  }
  private pause() {
    clearInterval(this.moveTimer);
    this.moveTimer = null;
  }
  private created() {
    const self = this;
    document.onkeydown = (e) => {
      const key = e.keyCode;
      if (key === 90) {
        self.flag4 = true;
      }
      if (key === 37) {
        self.flag = true;
      }
      if (key === 38) {
        self.flag1 = true;
      }
      if (key === 39) {
        self.flag2 = true;
      }
      if (key === 40) {
        self.flag3 = true;
      }
    };
    document.onkeyup = (e) => {
      const key = e.keyCode;
      if (key === 90) {
        self.flag4 = false;
      }
      if (key === 37) {
        self.flag = false;
      }
      if (key === 38) {
        self.flag1 = false;
      }
      if (key === 39) {
        self.flag2 = false;
      }
      if (key === 40) {
        self.flag3 = false;
      }
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myPlane {
  position: absolute;
  z-index: 999;
  background-image: url("../assets/material/CloverAssets/plane/p-02a.png");
  background-repeat: no-repeat;
  background-position: -18px -13px;
  background-size: 400px;
  width: 64px;
  height: 66px;
}
</style>
