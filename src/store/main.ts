import { defineStore } from 'pinia'

export const useMainStore = defineStore('login', {
    state: () => {
        return {
           
            isFold:false
        }
    },
    actions: {
        changeisFold(payload:boolean){
            this.isFold = payload
        }
    }
})