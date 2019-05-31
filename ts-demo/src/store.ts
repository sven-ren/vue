import Vue from 'vue';
import Vuex from 'vuex';
import MyBulletState, { BulletState } from './store/MyBullet';
import NormalState, { StateNormal } from './store/Normal';
import getters from './getter/index';

Vue.use(Vuex);
export interface RootState {
  MyBulletState: BulletState;
  NormalState: StateNormal;
}
export const Mutations = {
  BULLET_TOUCH_NORMAL: 'BULLET_TOUCH_NORMAL', // 判断子弹和normal类飞机的碰撞，二者碰撞后，state都变为false
  NORMAL_MINITOR: 'NORMAL_MINITOR', // normal类飞机定时器，让normal类飞机移动的同时监控飞机状态，state变为false后，deadTime逐渐瞬减小到0，然后销毁该飞机
  MYBULLET_MINITOR: 'MYBULLET_MINITOR', // 我的子弹定时器，让子弹移动，state为false销毁子弹
};
export const Actions = {
  BULLET_TOUCH_NORMAL: 'BULLET_TOUCH_NORMAL',
  NORMAL_MINITOR: 'NORMAL_MINITOR',
  MYBULLET_MINITOR: 'MYBULLET_MINITOR',
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
              window.console.log(item, itm);
            }
          }
        });
      });
    },
    [Mutations.MYBULLET_MINITOR]: (state) => {
      const MyBullets = state.MyBulletState.bullets;
      MyBullets.forEach((Item, Index) => {
        if (Item.top <= -Item.height || !Item.state) {
          state.MyBulletState.bullets.splice(Index, 1);
        } else {
          Item.top = Item.top - Item.speed;
        }
      });
    },
    [Mutations.NORMAL_MINITOR]: (state) => {
      const Normals = state.NormalState.normals;
      Normals.forEach((current, index) => {
        if (current.state) {
          if (current.top >= 660) {
            state.NormalState.normals.splice(index, 1);
          } else {
            current.top = current.top + current.speed;
          }
        } else {
          if (current.deadTime <= 0) {
            state.NormalState.normals.splice(index, 1);
          } else {
            current.deadTime--;
          }
        }
      });
    },
  },
  actions: {
    [Actions.BULLET_TOUCH_NORMAL]: (state) => {
      state.commit(Mutations.BULLET_TOUCH_NORMAL);
    },
    [Actions.MYBULLET_MINITOR]: (state) => {
      state.commit(Mutations.MYBULLET_MINITOR);
    },
    [Actions.NORMAL_MINITOR]: (state) => {
      state.commit(Mutations.NORMAL_MINITOR);
    },
  },
  modules: {
    MyBulletState,
    NormalState,
  },
});
