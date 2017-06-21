/**
 * Created by admin on 17/6/20.
 */
const mutations = {
  toggleTipsStatus(state, status) {
    if (status === 1) {
      state.tipsStatus = false;
    } else {
      state.tipsStatus = !state.tipsStatus;
    }
  },
  toggleHeaderStatus(state, status) {
    state.headerStatus = status;
  }
};
export default mutations;
