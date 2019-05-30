<template>
    <div :class="'enemy enemy_normal_'+imgIndex" :style="{left:left_+'px',top:top+'px'}">
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch, Prop } from 'vue-property-decorator'
// import Todo from './modal'

@Component({
  props: {
    imgIndex: String,
    common: Object,
    flag: Boolean
  }
})
export default class Normal extends Vue {
  @Prop(Number) left!: number;
  timer: any = null;
  normalImgs:Array<String> = ['1', '2', '3', '4'];
  normalArray:Array<String> = [];
  normalInit:Array<String> = [];
  state:Boolean = true; // 飞机是否存活
  left_ = this.left; // 飞机初始化时的x轴距离
  top = -85; // 飞机距离顶部的距离
  speed = 1; // 飞机速度
  _this = this;
  move () {
    this.top = this.top + this.speed
  }

  start () {
    this.timer = setInterval(() => {
      this.move()
    }, 0)
  }
  pause () {
    clearInterval(this.timer)
    this.timer = null
  }
  mounted () {
    // this.left_ = Math.floor(Math.random() * this.$props.common.bgWidth)
    this.start()
  }
  @Watch('flag')
  onChg (val: any, oldVal: any) {
    if (val !== oldVal) {
      console.log(val, oldVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.enemy_normal_1{
    background-image: url("/src/assets/material/CloverAssets/enemy/c-04.png");
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 72px;
    width: 72px;
    height: 82px;
}
.enemy_normal_2{
    background-image: url("/src/assets/material/CloverAssets/enemy/c-04b.png");
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 72px;
    width: 72px;
    height: 82px;
}
.enemy_normal_3{
    background-image: url("/src/assets/material/CloverAssets/enemy/c-01.png");
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 73px;
    width: 73px;
    height: 78px;
}
.enemy_normal_4{
    background-image: url("/src/assets/material/CloverAssets/enemy/c-01b.png");
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 73px;
    width: 73px;
    height: 78px;
}
</style>
