import { RootState } from '../index';
import { mutations } from './mutations';
import { actions, NormalActions } from './actions';
import { NormalItem } from '../../components/enemy/modal';
import { Module } from 'vuex';
import getters from './getters';

export interface StateNormal {
    normals: NormalItem[];
}

const NormalState: Module<StateNormal, RootState> = {
  state: { normals: [] },
  getters,
  mutations,
  actions,
};

export default NormalState;
export { NormalActions };
