<template>
    <div class='myBullet' :style="{left:(data.left+(planeWidth/2)-(data.width/2))+'px',top:(data.top - data.height)+'px'}">
      <audio :src="'./material/media/planeshoot0.mp3'" autoplay></audio>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { BulletActions } from '../store/MyBullet';
import { NormalItem } from './enemy/modal';

@Component
export default class MyBullet extends Vue {
  // @Action(BulletActions.UPDATE_BULLET) public updateMyBullets!: any;
  // @Action(BulletActions.DESTROY_BULLET) public destroyMyBullet!: any;
  @Prop(Boolean) private play!: boolean;
  @Prop(Object) private data!: any;
  @Prop(Number) private planeWidth!: number;
  @Prop(Number) private planeHeight!: number;
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
