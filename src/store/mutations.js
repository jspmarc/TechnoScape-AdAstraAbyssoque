const SET_QUERY = (state, val) => {
  state.query = val;
};

const SET_QUERYNAV = (state, val) => {
  state.queryNav = val;
};

const RESET_RECANS = (state) => {
  state.recAns = [];
};

export default {
  SET_QUERY,
  SET_QUERYNAV,
  RESET_RECANS,
};
