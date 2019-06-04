import { ActionTree } from 'vuex';
import { BulletState } from './index';
import { RootState } from '../index';
import { BulletItem } from '../../components/modal';

export const MyBulletActions = {
  ADD_BULLET: 'ADD_BULLET',
  MYBULLET_MINITOR: 'MYBULLET_MINITOR',
};

const actions: ActionTree<BulletState, RootState> = {
  [MyBulletActions.ADD_BULLET]: ({ commit }) => {
    commit(MyBulletActions.ADD_BULLET);
  },
  [MyBulletActions.MYBULLET_MINITOR]: ({ commit }) => {
    commit(MyBulletActions.MYBULLET_MINITOR);
  },
};

export { actions };
