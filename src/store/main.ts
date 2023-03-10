import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            isFold: false,
            curMenuList: [] as any[],
            allMenu: [] as any[]
        }
    },
    actions: {
        changeisFold(payload: boolean) {
            this.isFold = payload
        },
        changecurMenu(payload: any) {
            this.curMenuList = payload
        },
        changeAllMenu(payload: any) {
            this.allMenu = payload
        }
    }
})