import Vue from 'vue';
import Vuex from 'vuex';
import MyBulletState from './store/MyBullet';
import { BulletItem } from './components/modal';

Vue.use(Vuex);
export interface RootState {
  bullets: BulletItem[];
}
export default new Vuex.Store<RootState>({
  modules: {
    MyBulletState,
  },
});
