import { MutationTree } from 'vuex';
import { MyBulletActions } from './actions';
import { BulletState } from './index';
import { BulletItem } from '../../components/modal';

const mutations: MutationTree<BulletState> = {
    [MyBulletActions.ADD_BULLET](state, payload: BulletItem) {
        state.bullets.push(payload);
    },
    [MyBulletActions.MYBULLET_MINITOR](state, payload: BulletItem) {
        const MyBullets = state.bullets;
        MyBullets.forEach((Item: any, Index: number) => {
            if (Item.top <= -Item.height || !Item.state) {
                state.bullets.splice(Index, 1);
            } else {
                Item.top = Item.top - Item.speed;
            }
        });
    },
    [MyBulletActions.MYBULLET_CLEAR](state, payload: BulletItem) {
        state.bullets = [];
    },
};

export { mutations };
