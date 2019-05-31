<template>
    <div :class="data.state ? 'enemy enemy_normal_'+img : 'enemy normal_enemy_boom'" :style="{left:data.left+'px',top:data.top+'px'}">
      <audio :key="data.state ? data.hash+'muted' : data.hash+'unmuted'" :src="!data.state ? './material/media/boommusic3.mp3' : ''" autoplay></audio>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch, Prop } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { NormalActions } from '../../store/Normal';

@Component({
  props: {
    img: String,
    common: Object,
    flag: Boolean,
  },
})
export default class Normal extends Vue {
  @Action(NormalActions.UPDATE_NORMAL) public update!: any;
  @Action(NormalActions.DESTROY_NORMAL) public destroy!: any;
  @State('MyBulletState') public MyBulletState!: any;
  @Prop(String) private img!: string;
  @Prop(Number) private left!: number;
  @Prop(Number) private hash!: number;
  @Prop(Object) private data!: any;
  private timer: any = null;
  private normalImgs: string[] = ['1', '2', '3', '4'];
  private normalArray: string[] = [];
  private normalInit: string[] = [];
  private state: boolean = true; // 飞机是否存活
  private myLeft = this.data.left; // 飞机初始化时的x轴距离
  private top = -85; // 飞机距离顶部的距离
  private width = 73; // 飞机宽度
  private height = 80; // 飞机高度
  private speed = 1; // 飞机速度
  private blood = 1; // 飞机生命值
  private deadTime = 10; // 延迟销毁时间
  // private self = this;
  // private move() {
  //   if (this.top >= 660 ) {
  //     this.destroySelf();
  //     return;
  //   }
  //   // this.top = this.top + this.speed;
  //   this.top = this.data.top + this.speed;
  //   this.update({
  //       img: this.img,
  //       hash: this.hash,
  //       left: this.left,
  //       top: this.top,
  //       width: this.width,
  //       height: this.height,
  //       state: true,
  //       deadTime: 10,
  //       speed: 1,
  //     });
  // }
  // private start() {
  //   this.timer = setInterval(() => {
  //     this.move();
  //   }, 0);
  // }
  // private destroySelf() {
  //   clearInterval(this.timer);
  //   this.timer = null;
  //   this.$emit('destroyNormal', this.hash);
  //   this.destroy({
  //     img: this.img,
  //     hash: this.hash,
  //     left: this.left,
  //     top: this.top,
  //     width: this.width,
  //     height: this.height,
  //     state: true,
  //     deadTime: 10,
  //     speed: 1,
  //   });
  // }
  // private pause() {
  //   clearInterval(this.timer);
  //   this.timer = null;
  // }
  // private mounted() {
  //   this.start();
  // }
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
.normal_enemy_boom{
    background-image: url("../../assets/material/CloverAssets/effect/boom04.png");
    background-repeat: no-repeat;
    background-position: -140px 0;
    background-size: 400px;
    width: 72px;
    height: 82px;
}
</style>
