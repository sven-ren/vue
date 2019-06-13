import Vue from 'vue';
import Vuex from 'vuex';
import MyBulletState, { BulletState } from './MyBullet/index';
import NormalState, { StateNormal } from './Normal/index';
import getters from '../getter/index';

Vue.use(Vuex);
export interface RootState {
  MyBulletState: BulletState;
  NormalState: StateNormal;
}
export const Mutations = {
  BULLET_TOUCH_NORMAL: 'BULLET_TOUCH_NORMAL', // 判断子弹和normal类飞机的碰撞，二者碰撞后，state都变为false
  NEW_GAME: 'NEW_GAME', // 新的游戏，初始化所有状态
  // NORMAL_MINITOR: 'NORMAL_MINITOR', // normal类飞机定时器，让normal类飞机移动的同时监控飞机状态，state变为false后，deadTime逐渐瞬减小到0，然后销毁该飞机
  // MYBULLET_MINITOR: 'MYBULLET_MINITOR', // 我的子弹定时器，让子弹移动，state为false销毁子弹
};
export const Actions = {
  BULLET_TOUCH_NORMAL: 'BULLET_TOUCH_NORMAL',
  NEW_GAME: 'NEW_GAME',
  // NORMAL_MINITOR: 'NORMAL_MINITOR',
  // MYBULLET_MINITOR: 'MYBULLET_MINITOR',
};
export default new Vuex.Store<RootState>({
  getters,
  mutations: {
    [Mutations.BULLET_TOUCH_NORMAL]: (state) => {
      const Normals = state.NormalState.normals;
      const MyBullets = state.MyBulletState.bullets;
      Normals.forEach((item, index) => {
        MyBullets.forEach((itm, idx) => {
          if (itm.left <= item.left + item.width && itm.left >= item.left - itm.width) {
            if (itm.top <= item.top + item.height && itm.top >= item.top - itm.height) {
              item.state = false;
              itm.state = false;
              const app = document.getElementById('app') as HTMLDivElement;
              const audio = document.createElement('audio');
              audio.src = './material/media/boommusic3.mp3';
              audio.autoplay = true;
              audio.addEventListener('ended', () => {
                app.removeChild(audio);
              });
              app.appendChild(audio);
            }
          }
        });
      });
    },
    [Mutations.NEW_GAME]: (state) => {
      state.NormalState.normals = [];
      state.MyBulletState.bullets = [];
    },
  },
  actions: {
    [Actions.BULLET_TOUCH_NORMAL]: (state) => {
      state.commit(Mutations.BULLET_TOUCH_NORMAL);
    },
    [Actions.NEW_GAME]: (state) => {
      state.commit(Mutations.NEW_GAME);
    },
  },
  modules: {
    MyBulletState,
    NormalState,
  },
});
