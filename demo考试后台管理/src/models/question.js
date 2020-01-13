import {
    examsubject,
    examType,
    fecthexam
} from '@/services/examinationLink'

export default  {
    namespace: "question",
    start:{
        examsubjectList:[],
        examTypeList:[],
        fecthexamList:[]
    },
    subscriptions : {
        initData ({dispatch}) {
            dispatch({
                type: 'initFeildData'
            })
        }
    },
    effects: {
        *initFeildData (action, {call,put}){
            const examsubjectList = yield call(examsubject)
            const examTypeList = yield call(examType)
            const fecthexamList = yield call(fecthexam)
            console.log(examsubjectList,'====',examTypeList,'====',fecthexamList,'====')
            yield put({
                type: 'initFeildData',
                payload: {
                    examsubjectList,
                    examTypeList,
                    fecthexamList
                }
            })
        }
    },
    reducers: {
        eaxm(state, action) {
            return { ...state, ...action.payload };
        }   
    },
    reducers: {
        changState (state,action) {
            return Object.assign( {}, state, action.payload )
        }
    }
}