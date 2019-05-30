<template>
  <div class="options_content">
    <div id="pausedBg" :style="{display:$props.common.showOptions ? '' : 'none'}"></div>
    <div id="continue" onclick="continueGame()" :style="{display:$props.common.showOptions ? '' : 'none'}">继续游戏</div>
    <div id="start" @click="startGame" :style="{display:$props.common.showOptions ? '' : 'none'}">开始游戏</div>
    <div id="new" onclick="newGame()" :style="{display:$props.common.showOptions ? '' : 'none'}">新的游戏</div>
    <div id="exit" :style="{display:$props.common.showOptions ? '' : 'none'}">退出游戏</div>
    <div id="pause" :style="{display:$props.common.showOptions ? 'none' : ''}">||</div>
    <div id="instruction" :style="{display:$props.common.showOptions ? '' : 'none'}">操作说明:上下左右键控制移动，z键开火</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    start: Function,
    common: Object,
  },
})
export default class Options extends Vue {
  private startGame() {
    this.$props.start();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pausedBg {
  width: 440px;
  height: 660px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  display: none;
}
#continue {
  width: 200px;
  height: 50px;
  background: blue;
  position: absolute;
  left: 120px;
  top: 190px;
  font-family: arial;
  font-size: 40px;
  color: white;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  display: none;
  z-index: 1000;
}
#start {
  width: 200px;
  height: 50px;
  background: green;
  position: absolute;
  left: 120px;
  top: 250px;
  font-family: arial;
  font-size: 40px;
  color: white;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  display: block;
  z-index: 1000;
}
#new {
  width: 200px;
  height: 50px;
  background: green;
  position: absolute;
  left: 120px;
  top: 250px;
  font-family: arial;
  font-size: 40px;
  color: white;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  display: none;
  z-index: 1000;
}
#exit {
  width: 200px;
  height: 50px;
  background: red;
  position: absolute;
  left: 120px;
  top: 310px;
  font-family: arial;
  font-size: 40px;
  color: white;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  display: block;
  z-index: 1000;
}
#pause {
  width: 30px;
  height: 30px;
  border: 1px solid grey;
  text-align: center;
  line-height: 30px;
  position: absolute;
  right:10px;
  top:10px;
  border-radius: 15px;
  border-color:#fff;
  color:#fff;
  font-weight: bolder;
  cursor: pointer;
  display: none
}
#instruction {
  width: 240px;
  height: 50px;
  position: absolute;
  left: 100px;
  top: 370px;
  font-family: arial;
  font-size: 12px;
  color: white;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  display: block;
  z-index: 1000;
}
</style>
