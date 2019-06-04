import { RootState } from '../index';
import { mutations } from './mutations';
import { actions, MyBulletActions } from './actions';
import { BulletItem } from '../../components/modal';
import { Module } from 'vuex';

export interface BulletState {
    bullets: BulletItem[];
}

const MyBulletState: Module<BulletState, RootState> = {
  state: { bullets: [] },
//   getters,
  mutations,
  actions,
};

export default MyBulletState;
export { MyBulletActions };
