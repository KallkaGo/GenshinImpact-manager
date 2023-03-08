import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            userinfo: '',
            isFold:false
        }
    },
    actions: {
        changeUserInfo(payload:any) {
            this.userinfo = payload
        },
        changeisFold(payload:boolean){
            this.isFold = payload
        }
    }
})

