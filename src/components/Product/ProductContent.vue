<template>
    <form @submit.prevent="handleSubmit" class="content">
        <span class="company">{{ content.company }}</span>
        <h3>{{ content.title }}</h3>
        <p>{{ content.text }}</p>
        <div class="price">${{ content.price }}</div>

        <div class="cartCount">
            <div class="count">
                <div class="minus" @click="minusItemCounter">
                    <i class="fa-solid fa-minus"></i>
                </div>
                    <span>{{ totalItem }}</span>
                <div class="plus" @click="addItemCounter">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
            <button class="addToCart">
                <i class="fa-solid fa-cart-shopping"></i>
                Add to cart
            </button>
        </div>
    </form>
</template>

<script>
import { useCartStore } from '../../stores/cart'
export default {
    props:['content'],
    data(){
        return{
            cartStore: useCartStore(),
            totalItem: 1,
            dataSubmited: null
        }
    },
    methods:{
        addItemCounter(){
            if(this.totalItem >= 10){
                return
            }
            this.totalItem += 1
        },
        minusItemCounter(){
            if(this.totalItem <= 1){
                return
            }
            this.totalItem -= 1
        },
        handleSubmit(){
            this.cartStore.cartAdded(
                { 
                    id:this.content.id,
                    price: `$${this.content.price}`, 
                    name: this.content.title,
                    img: this.content.img,
                    count: this.totalItem,
                    totalPrice: `$${this.totalItem * this.content.price}`
                }
            )
        }
    }
}
</script>

<style lang="scss" scoped>
    .content{
        // width: 100%; 
        max-width: 480px;
   
        @media screen and (max-width: 768px) {
            max-width: 490px;
            justify-self: center;
            padding-bottom: 40px;
        }
        span{
            color: #F5812D;
            font-weight: 800;
            letter-spacing: 2px;
        }
        h3{
            font-size: 48px;
            color: #202026;
            padding-top: 17px;
            padding-bottom: 40px;
            @media screen and (max-width: 990px) {
                padding-bottom: 18px;
                font-size: 35px
            }
        }
        p{
            color: #7b7b7b;
            font-weight: 500;
            margin-bottom: 26px;
            width: 100%;
            max-width: 500px;
            line-height: 26px;
        }
        .price{
            font-size: 30px;
            font-weight: 700;
            color: #202026;
        }

        .cartCount{
            margin-top: 26px;
            display: flex;
            gap: 25px;
            @media screen and (max-width: 768px) {
                gap: 18px;
            }
            @media screen and (max-width: 576px) {
                gap: 10px;
            }

            .count{
                background: #F7F8FD;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                max-width: 150px;
                border-radius: 6px;
                .minus,.plus{
                    font-size: 18px;
                    padding: 15px;
                    color: #F5812D;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;
                    &:hover{
                        color: #f5802dc1;
                    }
                }
                span{
                    color: #000;
                    font-size: 18px;
                }
            }
            .addToCart{
                width: 100%;
                background: #F5812D;
                border: none;
                outline: none;
                border-radius: 8px;
                color: #fff;
                font-family: 'Kumbh Sans', sans-serif;
                font-size: 16px;
                font-weight: 700;
                cursor: pointer;
                transition: 0.3s ease;

                &:hover{
                    background: #f5802dc1;
                }

                i{
                    margin-right: 10px;
                }
            }
        }
        
        @media screen and (max-width: 576px) {
            padding: 0 20px;
            padding-bottom: 30px;
        }
    }
</style>