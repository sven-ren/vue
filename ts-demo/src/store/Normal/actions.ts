import { ActionTree } from 'vuex';
import { StateNormal } from './index';
import { RootState } from '../index';

export const NormalActions = {
  ADD_NORMAL: 'ADD_NORMAL',
  NORMAL_MINITOR: 'NORMAL_MINITOR',
};

const actions: ActionTree<StateNormal, RootState> = {
  [NormalActions.ADD_NORMAL]: ({ commit }, payload) => {
    commit(NormalActions.ADD_NORMAL, payload);
  },
  [NormalActions.NORMAL_MINITOR]: ({ commit }) => {
    commit(NormalActions.NORMAL_MINITOR);
  },
};

export { actions };
