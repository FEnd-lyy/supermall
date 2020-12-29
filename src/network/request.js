import axios from 'axios'

export function request(config) {
  // 1.创建axois的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1 请求拦截的作用，如：
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  // 2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config.baseConfig)
//     .then(res => {
//       console.log(res);
//       config.success(res)
//     })
//     .catch(err => {
//       console.log(err);
//       config.failure(err)
//     })
// }

// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config)
//     .then(res => {
//       console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       console.log(err);
//       failure(err)
//     })
// }
