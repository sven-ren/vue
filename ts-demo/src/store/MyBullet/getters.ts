import { GetterTree, Getter } from 'vuex';
import { BulletState } from './index';

const GetMyBullets: Getter<BulletState, any> = (state: BulletState) => {
  return state.bullets;
};

const getterTree: GetterTree<BulletState, any> = {
    GetMyBullets,
};

export default getterTree;
