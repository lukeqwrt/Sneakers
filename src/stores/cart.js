import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
    state: () => ({
        cartItem:[],
    }),
    getters: {
    },
    actions: {
        cartAdded(data){
            this.cartItem.forEach(i => {
                if(data.id === i.id){
                    this.cartItem.pop(i.id)
                }
            })
            this.cartItem.push(data)
        },

    }
})