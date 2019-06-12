import { ActionTree } from 'vuex';
import { BulletState } from './index';
import { RootState } from '../index';
import { BulletItem } from '../../components/modal';

export const MyBulletActions = {
  ADD_BULLET: 'ADD_BULLET',
  MYBULLET_MINITOR: 'MYBULLET_MINITOR',
  MYBULLET_CLEAR: 'MYBULLET_CLEAR',
};

const actions: ActionTree<BulletState, RootState> = {
  [MyBulletActions.ADD_BULLET]: ({ commit }, payload) => {
    commit(MyBulletActions.ADD_BULLET, payload);
  },
  [MyBulletActions.MYBULLET_MINITOR]: ({ commit }) => {
    commit(MyBulletActions.MYBULLET_MINITOR);
  },
  [MyBulletActions.MYBULLET_CLEAR]: ({ commit }) => {
    commit(MyBulletActions.MYBULLET_CLEAR);
  },
};

export { actions };
