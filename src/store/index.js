import Vue from 'vue';
import Vuex from 'vuex';

import products from './modules/products'
import todos from './modules/todos'

Vue.use(Vuex);

const storeData ={
    modules: {
        products,
        todos
    }
};

const store = new Vuex.Store(storeData);

export default store

