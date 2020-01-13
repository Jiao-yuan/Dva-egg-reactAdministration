import { ExamTypes, returnexamType, returngetQuestionsType } from "../services/jy-ExamType"
export default {
  namespace: "jyExamTypes",
  state: {
    list: [],
    names: "",
    studentname: {},
    getexamType:[],
    getQuestionsType:[]

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
    },
    *ExamTypeList({ query }, { call, put }) {
      let ischange = yield call(ExamTypes)
      console.log(ischange)
      yield put({ type: "save", payload: { list: ischange.data } })
    },
    *getexamType({ query }, { call, put }) {
      let ischange = yield call(returnexamType)
      yield put({ type: "savegetexamType", payload: { getexamType: ischange.data } })
    },
    *getQuestionsType({ query }, { call, put }) {
      let ischange = yield call(returngetQuestionsType)
      yield put({ type: "saveQuestionsType", payload: { getQuestionsType: ischange.data } })
    }

  },

  reducers: {
    // 登录页面
    addlist(state, action) {
      console.log(state, action, "jy-module");
      state.list.push(action.query);
      console.log({ ...state, ...action.payload });
      return { ...state, ...action.payload };
      // console.log(state,action)
      // const tob=[...state.list]
      // tob.push(action.query)
      // console.log(state)
      // return Object.assign({},state,{list:tob});
    },
    save(state, { payload }) {
      return {
        ...state, ...payload
      }
    },
    savegetexamType(state, { payload }) {
      return {
        ...state, ...payload
      }
    },
    saveQuestionsType(state, { payload }) {
      return {
        ...state, ...payload
      }
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
