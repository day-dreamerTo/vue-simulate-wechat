/**
 * Created by admin on 17/6/20.
 */
const mutations = {
  // 切换微信页右上角菜单
  toggleTipsStatus(state, status) {
    if (status === 1) {
      state.tipsStatus = false;
    } else {
      state.tipsStatus = !state.tipsStatus;
    }
  },
  // 切换公共头部状态
  toggleHeaderStatus(state, status) {
    state.headerStatus = status;
  },
  // 增加未读消息数
  addNewMsg(state) {
    state.newMsgCount > 99 ? state.newMsgCount = '99+' : state.newMsgCount++;
  },
  // 减少未读消息数
  minusNewMsg(state) {
    state.newMsgCount < 1 ? state.newMsgCount = 0 : state.newMsgCount--;
  }
};
export default mutations;
