import { defineStore } from 'pinia'
import { Z_UNKNOWN } from 'zlib'

type Iuserinfo ={
    id:number,
    roleName:string,
    roleKey:string
}

export const useLoginStore = defineStore('login', {
    state: () => {
        return {
            userinfo:{
            id:1,
            roleName:"KallkaGo && TotoroKingdom ",
            roleKey:'No.1'
            },
            isFold:false
        }
    },
    actions: {
        changeUserInfo(payload:Iuserinfo) {
            this.userinfo = payload
        },
        changeisFold(payload:boolean){
            this.isFold = payload
        }
    }
})

