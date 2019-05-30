import { GetterTree, Getter } from 'vuex';
import { RootState } from '../store';

const GetNormals: Getter<RootState, any> = (state: RootState) => {
  return state.NormalState.normals;
};

const getterTree: GetterTree<RootState, any> = {
    GetNormals,
};

export default getterTree;
