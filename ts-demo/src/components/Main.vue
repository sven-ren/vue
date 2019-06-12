<template>
  <div class="content">
    <Options v-bind:start='start' v-bind:pause='pause' v-bind:continueGame="continueGame" :NewGame='newGame' :replay='replay' :common='commonData'/>
    <template v-for="item in NormalState.normals">
      <Normal :ref="'Normal_'+item.hash" :data='item' :hash='item.hash' :img="item.img" :key="item.hash" :common='commonData' :flag='flag4' :left='item.left'/>
    </template>
    <template>
      <MyPlane :play='play' :common='commonData' :replay='replay'/>
    </template>
    <audio id='touch' :ref="'touch'" class="pre_load_music" :src='bgMusic' autoplay loop></audio>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import MediaSource from '@/components/MediaSource.vue';
import Options from '@/components/Options.vue';
import MyPlane from '@/components/MyPlane.vue';
import Normal from '@/components/enemy/Normal.vue';
import { State, Action, Getter } from 'vuex-class';
import { Actions } from '../store/index';
import { NormalActions } from '../store/Normal/index';
import { MyBulletActions } from '../store/MyBullet/index';

@Component({
  components: {
    MediaSource,
    Options,
    Normal,
    MyPlane,
  },
})
export default class Main extends Vue {
  @Action(Actions.BULLET_TOUCH_NORMAL) public bulletTouchNormal!: any;
  @Action(NormalActions.ADD_NORMAL) public addNormal!: any;
  @Action(NormalActions.NORMAL_MINITOR) public normalMinitor!: any;
  @Action(MyBulletActions.MYBULLET_MINITOR) public MyBulletMinitor!: any;
  @State('NormalState') public NormalState!: any;
  private commonData = {
    bgWidth: 440, // 背景宽度
    bgHeight: 660, // 背景高度
    showOptions: true, // 开始、暂停、继续、退出等操作展示
    pause: false, // 暂停
    flag: false,
  };
  private bgMusic: string = '';
  private play: boolean = false; // 开始游戏变量
  private replay: boolean = false; // 重新开始新游戏变量
  private flag: boolean = false;
  private flag1: boolean = false;
  private flag2: boolean = false;
  private flag3: boolean = false;
  private flag4: boolean = false; // 子弹发射
  private flag5: boolean = false;
  private flag6: boolean = true;
  private normalImgs: string[] = ['1', '2', '3', '4'];
  private normalArray: object[] = [];
  private count: number = 0;
  private timer: any = null;
  private timer1: any = null;
  private myThis: any = this;
  private start() {
    this.bgMusic = './material/media/wind.ogg';
    this.timer = setInterval(() => {
      const imgIndex = this.normalImgs[Math.floor(Math.random() * this.normalImgs.length)];
      const hash = Math.random();
      const item = {
        img: imgIndex,
        hash,
        left: Math.floor(Math.random() * (this.commonData.bgWidth - 73)),
        top: -85,
        width: 73,
        height: 80,
        state: true,
        deadTime: 10,
        speed: 1,
      };
      this.addNormal(item);
    }, 1000);
    this.timer1 = setInterval(() => {
      this.bulletTouchNormal();
      this.MyBulletMinitor();
      this.normalMinitor();
    }, 0);
    this.play = true;
    this.commonData.showOptions = false;
    this.commonData.pause = false;
  }
  private pause() {
    this.bgMusic = '';
    clearInterval(this.timer);
    clearInterval(this.timer1);
    this.timer = null;
    this.timer1 = null;
    this.play = false;
    this.commonData.showOptions = true;
    this.commonData.pause = true;
  }
  private newGame() {
    this.replay = true;
    this.start();
    this.replay = false;
  }
  private continueGame() {
    this.start();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content{
  width: 440px;
  height:660px;
  position: absolute;
  margin: auto;
  left:0;
  right:0;
  top:0;
  bottom:0;
  overflow: hidden;
  background-image: url('../assets/material/map/bg_hei_0.jpg');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
}
.enemy{
  position: absolute;
  z-index: 999;
}
</style>
