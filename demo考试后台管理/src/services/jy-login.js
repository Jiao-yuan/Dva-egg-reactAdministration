import Axios from "../utils/headertoken"

export const Login= (path)=>Axios.post("user/login",{user_name:path.user,user_pwd:path.password})
