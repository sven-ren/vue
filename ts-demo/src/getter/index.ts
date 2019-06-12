import { GetterTree, Getter } from 'vuex';
import { RootState } from '../store';

const GetState: Getter<RootState, any> = (state: RootState) => {
  return state;
};

const getterTree: GetterTree<RootState, any> = {
  GetState,
};

export default getterTree;
