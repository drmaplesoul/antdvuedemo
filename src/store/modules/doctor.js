import doctor from '../../api/doctor'
import {SET_DOCTOR_LIST, SET_DOCTOR_DETAIL} from '../mutation-types'

const state = {
  // 医生列表
  doctorList: [],
  // 医生详情信息
  doctorDetail: null,
};

const mutations = {
  // 设置医生列表
  [SET_DOCTOR_LIST](state, data) {
    state.doctorList = data
  },
  // 设置医生详情信息
  [SET_DOCTOR_DETAIL](state, data) {
    state.doctorDetail = data
  },
};

const actions = {

  /**
   * 获取医生顾问列表
   * @param state
   * @param commit
   * @param params
   * @returns {Promise<void>}
   */
  async getDoctorList({state, commit}, params) {
    let ret = await doctor.list(params);
    commit(SET_DOCTOR_LIST, ret.data.data);

    return ret;
  },

  /**
   * 获取医生详情信息
   * @param state
   * @param commit
   * @param id 医生ID
   * @returns {Promise<void>}
   */
  async getDoctorDetail({ state, commit}, id) {
    let ret = await doctor.detail(id);
    commit(SET_DOCTOR_DETAIL, ret.data.data);

    return ret;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
