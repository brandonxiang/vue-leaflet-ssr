import { createAPI } from 'create-api'
import { getBlog } from './getBlog'
import { getNowWeather,getFutureWeather } from './getWeather'

const api = createAPI()

export const fetchFutureWeather = (params) => {
    const key = "future"
    if(api.cached && api.cached.has(key)) {
        return Promise.resolve(api.cached.get(key))
    }
    return getFutureWeather(parmas).then(res=>{
        //TODO: 技术替换缓存
        if(api.cached) api.cached.set(key, res.data)
    })
}

export const fetchNowWeather = (params) => {
    const key = "now"
    if(api.cached && api.cached.has(key)) {
        return Promise.resolve(api.cached.get(key))
    }
    return getNowWeather(parmas).then(res=>{
        if(api.cached) api.cached.set(key, res.data)
    })
}


export const fetchBlog = (params) => {
    const key = "blog"
    if(api.cached && api.cached.has(key)) {
        return Promise.resolve(api.cached.get(key))
    }
    return getBlog(parmas).then(res=>{
        if(api.cached) api.cached.set(key, res.data)
    })
}
