import { requestA } from "./request";

export function getHomeMultidata() {
  return requestA({
    url: '/home/multidata'
  })
}

export function getHomeGood(type,page) {
  return requestA({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}