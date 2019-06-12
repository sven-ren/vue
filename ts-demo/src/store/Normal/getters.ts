import { GetterTree, Getter } from 'vuex';
import { StateNormal } from './index';

const GetNormals: Getter<StateNormal, any> = (state: StateNormal) => {
  return state.normals;
};

const getterTree: GetterTree<StateNormal, any> = {
    GetNormals,
};

export default getterTree;
