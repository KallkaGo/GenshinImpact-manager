import { defineStore } from 'pinia'

export const useMainStore = defineStore('login', {
    state: () => {
        return {
           
            isFold:false,
            curMenuList:[] as any[]
        }
    },
    actions: {
        changeisFold(payload:boolean){
            this.isFold = payload
        },
        changecurMenu(payload:any){
            this.curMenuList = payload
        }
    }
})