import axios from "axios";

export function requestA (config) {
    const instanceA = new axios.create({
      // baseURL: 'http://123.207.32.32:8000',
      baseURL: 'http://152.136.185.210:7878/api/hy66',
      timeout: 5000
    });

    instanceA.interceptors.request.use(config => {
      // console.log(config);
      return config
    },err => {
      console.log(err);
    });

    instanceA.interceptors.response.use(res => {
      // console.log(res);
      return res.data
    },err => {
      // console.log(err);
    });

    return instanceA(config)
};