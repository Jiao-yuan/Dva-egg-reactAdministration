export default {
  namespace: "example",

  state: {
    list: ["a", "b", "c", "d", "e"],
    names: "",
    studentname: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    }
  },

  reducers: {
    addlist(state, action) {
      console.log(state, action);
      state.list.push(action.query);
      console.log({ ...state, ...action.payload });
      return { ...state, ...action.payload };
      // console.log(state,action)
      // const tob=[...state.list]
      // tob.push(action.query)
      // console.log(state)
      // return Object.assign({},state,{list:tob});
    },
    addnames(state, action) {
      state.names = action.ming;
      return { ...state };
    },
    addstudents(state, action) {
      state.studentname = action.data;
      return JSON.parse(JSON.stringify(state));
    }
  }
};
