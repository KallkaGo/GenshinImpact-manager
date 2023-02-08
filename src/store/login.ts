import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            userinfo: '',

        }
    },
    actions: {
        changeUserInfo(payload:any) {
            this.userinfo = payload
        }
    }
})

