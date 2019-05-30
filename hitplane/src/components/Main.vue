<template>
  <div class="content">
    <MediaSource/>
    <Options v-bind:message='msg' v-bind:start='start' :common='commonData'/>
    <template v-for="item in normalArray">
      <Normal :ref="'Normal_'+item.hash" :imgIndex="item.imgIndex" :key="item.hash" :common='commonData' :flag='flag4' :left='item.left'/>
    </template>
    <template>
      <MyPlane :play='play' :common='commonData'/>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import MediaSource from '@/components/MediaSource.vue'
import Options from '@/components/Options.vue'
import MyPlane from '@/components/MyPlane.vue'
import Normal from '@/components/enemy/Normal.vue'

@Component({
  components: {
    MediaSource,
    Options,
    Normal,
    MyPlane
  }
})
export default class Main extends Vue {
  msg:string = 'Welcome to Your Vue.js App';
  play:Boolean = false; // 开始游戏变量
  flag:Boolean = false;
  flag1:Boolean = false;
  flag2:Boolean = false;
  flag3:Boolean = false;
  flag4:Boolean = false; // 子弹发射
  flag5:Boolean = false;
  flag6:Boolean = true;
  commonData = {
    bgWidth: 440, // 背景宽度
    bgHeight: 660, // 背景高度
    showOptions: true, // 开始、暂停、继续、退出等操作展示
    flag: false
  }
  normalImgs:Array<String> = ['1', '2', '3', '4'];
  normalArray:Array<Object> = [];
  count:Number = 0;
  timer: any = null;
  myThis: any = this
  start () {
    this.timer = setInterval(() => {
      const imgIndex = this.normalImgs[Math.floor(Math.random() * this.normalImgs.length)]
      const hash = Math.random()
      this.normalArray.push({
        imgIndex,
        hash,
        left: Math.floor(Math.random() * this.commonData.bgWidth)
      })
    }, 1000)
    this.play = true
    this.commonData.showOptions = false
  }
  destroyNormal () {
    
  }
  created () {}
  mounted () {}
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
  background-image: url('/src/assets/material/map/bg_hei_0.jpg');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
}
.enemy{
  position: absolute;
  z-index: 999;
}
</style>
