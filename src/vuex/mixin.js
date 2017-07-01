/**
 * Created by admin on 17/6/20.
 */
const mixin = {
  mounted() {
    this.$store.commit('setPageName', this.pageName);
  }
};
export default mixin;
