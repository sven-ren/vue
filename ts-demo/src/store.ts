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
export default new Vuex.Store<RootState>({
  getters,
  modules: {
    MyBulletState,
    NormalState,
  },
});
