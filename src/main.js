import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import { getters, actions, mutations, state } from './store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
	getters,
	actions,
	mutations,
	state
});
new Vue({
	render: h => h(App),
	store
}).$mount('#app');
