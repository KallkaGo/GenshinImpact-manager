/*
 * @Author: ZH
 * @Date: 2023-02-08 15:48:37
 * @LastEditTime: 2023-02-08 15:52:48
 * @LastEditors: ZH
 * @Description: 
 */
class LocalCache{
    setCache(key:string,value:any) {
        window.localStorage.setItem(key,JSON.stringify(value))
    }
    getCache(key: string) {
        const value = window.localStorage.getItem(key)
        if (!!key) {
            return JSON.parse(value!)
        }
    }
    deleteCache(key: string) {
        window.localStorage.removeItem(key)
    }
    clearCache() {
        window.localStorage.clear()
    }

}

export default new LocalCache()
