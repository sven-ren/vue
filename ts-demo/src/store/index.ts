import Vue from 'vue';
import Vuex from 'vuex';
import MyBulletState, { BulletState } from './MyBullet/index';
import NormalState, { StateNormal } from './Normal/index';

Vue.use(Vuex);
export interface RootState {
  MyBulletState: BulletState;
  NormalState: StateNormal;
}

export default new Vuex.Store<RootState>({
  modules: {
    MyBulletState,
    NormalState,
  },
});

