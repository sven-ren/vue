<template>
  <div class="MediaSource">
    <audio class="pre_load_music" preload="auto" src="../assets/material/media/wind.ogg"></audio>
    <audio class="pre_load_music" preload="auto" src="../assets/material/media/boommusic3.mp3"></audio>
    <audio class="pre_load_music" preload="auto" src="../assets/material/media/blast0.mp3"></audio>
    <audio class="pre_load_music" preload="auto" src="../assets/material/media/planeshoot0.mp3"></audio>
    <audio class="pre_load_music" preload="auto" src="../assets/material/media/showbomb.mp3"></audio>
    <audio class="pre_load_music" preload="auto" src="../assets/material/media/touch.mp3"></audio>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class MediaSource extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
