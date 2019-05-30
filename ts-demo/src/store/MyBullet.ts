import { BulletItem } from '../components/modal';
import { RootState } from '../store';
import { Module } from 'vuex';

export interface BulletState {
    bullets: BulletItem[];
}
export const BulletMutations = {
    ADD_BULLET: 'ADD_BULLET',
    UPDATE_BULLET: 'UPDATE_BULLET',
    DESTROY_BULLET: 'DESTROY_BULLET',
};
export const BulletActions = {
    ADD_BULLET: 'ADD_BULLET',
    UPDATE_BULLET: 'UPDATE_BULLET',
    DESTROY_BULLET: 'DESTROY_BULLET',
};
const MyBulletState: Module<BulletState, RootState> = {
    state: {
        bullets: [],
    },
    mutations: {
        [BulletMutations.ADD_BULLET](state, payload: BulletItem) {
            state.bullets.push(payload);
        },
        [BulletMutations.UPDATE_BULLET](state, payload: BulletItem) {
            state.bullets.forEach((item: BulletItem) => {
                if (item.hash === payload.hash) {
                    item.top = payload.top;
                    item.left = payload.left;
                }
            });
        },
        [BulletMutations.DESTROY_BULLET](state, payload: BulletItem) {
            state.bullets = state.bullets.filter((item: BulletItem) => {
                return item.hash !== payload.hash;
            });
        },
    },
    actions: {
        [BulletActions.ADD_BULLET]: ({ commit }, payload: BulletItem) => {
            commit('ADD_BULLET', payload);
        },
        [BulletActions.UPDATE_BULLET]: ({ commit }, payload: BulletItem) => {
            commit('UPDATE_BULLET', payload);
        },
        [BulletActions.DESTROY_BULLET]: ({ commit }, payload: BulletItem) => {
            commit('DESTROY_BULLET', payload);
        },
    },
    getters: {
        getMyBullets: (state) => {
            return state.bullets;
        },
    },
};

export default MyBulletState;
