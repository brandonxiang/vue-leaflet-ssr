import LRU from 'lru-cache'

export function createAPI () {
    let createAPI
    if (process.__API__){
        api = process.__API__
    }else{
        api = process.__API__ = {
            api: '/api/',
            port: 8080,
            timeout: 30000,
            cached: LRU({
                max: 1000,
                maxAge: 1000 * 60 * 15
            }),
            cachedItem: {}
        }
    }
    return api
}