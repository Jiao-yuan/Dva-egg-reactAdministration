import Axios from "../utils/headertoken"

export const ExamTypes= ()=>Axios.get("exam/questions/condition")
export const returnexamType=()=>Axios.get("exam/examType")
export const returngetQuestionsType=()=>Axios.get("exam/getQuestionsType")
