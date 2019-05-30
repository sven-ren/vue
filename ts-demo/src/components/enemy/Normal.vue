<template>
    <div :class="'enemy enemy_normal_'+imgIndex" :style="{left:myLeft+'px',top:top+'px'}"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import { NormalActions } from '../../store/Normal';

@Component({
  props: {
    imgIndex: String,
    common: Object,
    flag: Boolean,
  },
})
export default class Normal extends Vue {
  @Action(NormalActions.UPDATE_NORMAL) public update!: any;
  @Action(NormalActions.DESTROY_NORMAL) public destroy!: any;
  @Prop(String) private imgIndex!: string;
  @Prop(Number) private left!: number;
  @Prop(Number) private hash!: number;
  private timer: any = null;
  private normalImgs: string[] = ['1', '2', '3', '4'];
  private normalArray: string[] = [];
  private normalInit: string[] = [];
  private state: boolean = true; // 飞机是否存活
  private myLeft = this.left; // 飞机初始化时的x轴距离
  private top = -85; // 飞机距离顶部的距离
  private speed = 1; // 飞机速度
  private self = this;
  private move() {
    if (this.top >= 660 ) {
      this.destroySelf();
      return;
    }
    this.top = this.top + this.speed;
    const Mybullets = this.$store.getters.getMyBullets;
    Mybullets.forEach((item: any) => {
      if (item.left <= this.left + 80 && item.top >= this.top - 21) {
        if (item.top <= this.top + 80 && item.top >= this.top - 47) {
          this.destroySelf();
        }
      }
    });
    this.update({
        imgIndex: this.imgIndex,
        hash: this.hash,
        left: this.left,
        top: this.top,
      });
  }
  private start() {
    this.timer = setInterval(() => {
      this.move();
    }, 0);
  }
  private destroySelf() {
    clearInterval(this.timer);
    this.timer = null;
    this.$emit('destroyNormal', this.hash);
    this.destroy({
      imgIndex: this.imgIndex,
      hash: this.hash,
      left: this.left,
      top: this.top,
    });
  }
  private pause() {
    clearInterval(this.timer);
    this.timer = null;
  }
  private mounted() {
    this.start();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.enemy_normal_1{
    background-image: url("../../assets/material/CloverAssets/enemy/c-04.png");
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 72px;
    width: 72px;
    height: 82px;
}
.enemy_normal_2{
    background-image: url("../../assets/material/CloverAssets/enemy/c-04b.png");
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 72px;
    width: 72px;
    height: 82px;
}
.enemy_normal_3{
    background-image: url("../../assets/material/CloverAssets/enemy/c-01.png");
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 73px;
    width: 73px;
    height: 78px;
}
.enemy_normal_4{
    background-image: url("../../assets/material/CloverAssets/enemy/c-01b.png");
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 73px;
    width: 73px;
    height: 78px;
}
</style>
