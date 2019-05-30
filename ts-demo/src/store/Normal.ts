import { NormalItem } from '../components/enemy/modal';
import { RootState } from '../store';
import { Module } from 'vuex';

export interface StateNormal {
    normals: NormalItem[];
}
export const NormalMutations = {
    ADD_NORMAL: 'ADD_NORMAL',
    UPDATE_NORMAL: 'UPDATE_NORMAL',
    DESTROY_NORMAL: 'DESTROY_NORMAL',
};
export const NormalActions = {
    ADD_NORMAL: 'ADD_NORMAL',
    UPDATE_NORMAL: 'UPDATE_NORMAL',
    DESTROY_NORMAL: 'DESTROY_NORMAL',
};
const NormalState: Module<StateNormal, RootState> = {
    state: {
        normals: [],
    },
    mutations: {
        [NormalMutations.ADD_NORMAL](state, payload: NormalItem) {
            state.normals.push(payload);
        },
        [NormalMutations.UPDATE_NORMAL](state, payload: NormalItem) {
            state.normals.forEach((item: NormalItem) => {
                if (item.hash === payload.hash) {
                    item.top = payload.top;
                    item.left = payload.left;
                }
            });
        },
        [NormalMutations.DESTROY_NORMAL](state, payload: NormalItem) {
            state.normals = state.normals.filter((item: NormalItem) => {
                return item.hash !== payload.hash;
            });
        },
    },
    actions: {
        [NormalActions.ADD_NORMAL]: ({ commit }, payload: NormalItem) => {
            commit('ADD_NORMAL', payload);
        },
        [NormalActions.UPDATE_NORMAL]: ({ commit }, payload: NormalItem) => {
            commit('UPDATE_NORMAL', payload);
        },
        [NormalActions.DESTROY_NORMAL]: ({ commit }, payload: NormalItem) => {
            commit('DESTROY_NORMAL', payload);
        },
    },
    getters: {
        getNormals: (state) => {
            return state.normals;
        },
    },
};

export default NormalState;
