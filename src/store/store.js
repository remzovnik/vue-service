import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const INITIAL_STATE = {
  isStarted: false,
  projectType: '',
  step: 0,
  tariff: '',
  budget: 0,
  comment: '',
  link: '',
  reasons: [],
  services: [],
  contactsData: {
    name: '',
    tel: ''
  }
}

export default new Vuex.Store({
  state: {
    ...INITIAL_STATE
  },
  actions: {
    start(context) {
      context.commit('start');
    },
    pickType(context, payload) {
      context.commit('setProjectType', payload);
    },
    reset(context) {
      context.commit('reset');
    },
    movePrev(context) {
      context.commit('setPrev');
    },
    moveNext(context) {
      context.commit('setNext');
    },
    pickTariff(context, payload) {
      context.commit('setTariff', payload);
    },
    approveBudget(context, payload) {
      context.commit('setBudget', payload);
    },
    addLink(context, payload) {
      context.commit('setLink', payload);
    },
    addReasons(context, payload) {
      context.commit('setReasons', payload);
    },
    addServices(context, payload) {
      context.commit('setServices', payload);
    },
    addComment(context, payload) {
      context.commit('setComment', payload);
    },
    addContacts(context, payload) {
      context.commit('setContacts', payload);
    }
  },
  mutations: {
    start(state) {
      state.isStarted = true;
    },
    setProjectType(state, payload) {
      state.projectType = payload;
    },
    reset(state) {
      Object.assign(state, INITIAL_STATE)
    },
    setPrev(state) {
      if (state.step > 0) {
        state.step--;
      } else {
        state.projectType = '';
        state.step = 0;
      }
    },
    setNext(state) {
      state.step++;
    },
    setTariff(state, payload) {
      state.tariff = payload
    },
    setBudget(state, payload) {
      state.budget = payload
    },
    setComment(state, payload) {
      state.comment = payload;
    },
    setLink(state, payload) {
      state.link = payload
    },
    setReasons(state, payload) {
      state.reasons = payload
    },
    setServices(state, payload) {
      state.services = payload
    },
    setContacts(state, payload) {
      state.contactsData.name = payload.name;
      state.contactsData.tel = payload.tel;
    }
  }
});