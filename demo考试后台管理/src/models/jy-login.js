import {Login} from "../services/jy-login"
export default {
    namespace: "jy-login",
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
      },
    //   *userLogin({ query }, { call, put })
    //   {
        
    //     console.log("点击登录",query)
    //     let ischange=yield call(Login,query)
    //     console.log(ischange)
    //     Window.location.herf="/#/home/home"
  
    //   }

    },
  
    reducers: {
        // 登录页面
      addlist(state, action) {
        console.log(state, action,"jy-module");
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
  