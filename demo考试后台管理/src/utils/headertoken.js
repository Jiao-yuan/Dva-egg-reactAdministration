import axios from "axios";

const request=axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "api" : ""
})
// 拦截请求
request.interceptors.request.use(function (config){
  config.headers.authorization=window.localStorage.getItem('token')
  return config
})

// 拦截响应 
request.interceptors.response.use(function (response){
  if(response.data.code===1){
    return response.data
  }else{
    return Promise.reject(response.data)
  }
},function (error){
  // const response=error.response;
  // if(response.status===401){
  //   console.log('111')
  // }
  return Promise.reject(error)
})
export default {
  get:(url,data)=>request.get(url,{params:data}),
  post:(url,data)=>request.post(url,data),
  delete:(url,data)=>request.delete(url,data),
  put:(url,data)=>request.put(url,data)
};
