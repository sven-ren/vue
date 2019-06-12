import { MutationTree } from 'vuex';
import { NormalActions } from './actions';
import { StateNormal } from './index';
import { NormalItem } from '../../components/enemy/modal';

const mutations: MutationTree<StateNormal> = {
    [NormalActions.ADD_NORMAL](state, payload: NormalItem) {
        state.normals.push(payload);
    },
    [NormalActions.NORMAL_MINITOR](state, payload: NormalItem) {
        const normals = state.normals;
        normals.forEach((item, index) => {
        if (item.state) {
          if (item.top >= 660) {
            normals.splice(index, 1);
          } else {
            item.top = item.top + item.speed;
          }
        } else {
          if (item.deadTime <= 0) {
            normals.splice(index, 1);
          } else {
            item.deadTime--;
          }
        }
      });
    },
    [NormalActions.NORMAL_CLEAR](state, payload: NormalItem) {
      state.normals = [];
    },
};

export { mutations };
