<template>
    <Transition name="cart_modal">
        <div ref="cartModal" v-show="isCartActive" class="cart_info_modal">
            <div class="cart_modal_header">
                <h3>Cart</h3>
            </div>
            <div class="cart_modal_body">
                <div v-if="cartStore.cartItem.length" class="cart_item_list">
                    <div class="cart_item" v-for="cart in cartStore.cartItem" :key="cart.id">
                        <img :src="cart.img" alt="">
                        <div class="text">
                            <span class="title">{{ cart.name }}</span>
                            <div class="price">
                                <span>{{ cart.price }} x {{ cart.count }} = <span class="bold">{{ cart.totalPrice }}</span></span>
                            </div>
                        </div>
                        <div class="delete">
                            <img @click="deleteCartItem(cart.id)" class="deleteimg" src="../../assets/images/icon-delete.svg" alt="">

                        </div>
                    </div>
                    <button class="checkout">Checkout</button>
                </div>
                <div v-else>
                    <h3 >Your cart is empty</h3>
                </div>
            </div>
        </div>

    </Transition>
</template>

<script>
import { useCartStore } from '../../stores/cart'

export default {
    props:['isCartActive'],
    data() {
        return{
            cartStore: useCartStore()
        }
    },
    methods:{
        deleteCartItem(id) {
            this.cartStore.cartItem.pop(id)
        }
    }
    // npm install --save v-click-outside
}
</script>

<style lang="scss" scoped>
    .cart_info_modal{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        position: absolute;
        top: 110px;
        right: 50%;
        width: 106%;
        border-radius: 8px  ;
        transform: translate(50%, 0);
        background: #fff;
        z-index: 999;

        @media screen and (min-width: 576px) {
            width: 370px;
            right: 0;
            transform: translate(0%, 0);
        }
        .cart_modal_header{
            padding: 20px;
            border-bottom: 1px solid #cecece;
            h3{
                font-size: 17px;
            }
        }
        .cart_modal_body{
            padding: 20px;

            .cart_item_list{
                display: grid;
                gap: 15px;
                .cart_item{
                    display: flex;
                    gap: 15px;
                    img{
                        height: auto;
                        width: 50px;
                        border-radius: 5px;
                    }
                    .text{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        gap: 5px;
                        font-weight: 400;
                        letter-spacing: 0.5px;
                        color: #838383;
                        width: 100%;
                        .price{
                            .bold{
                                font-weight: 800;
                                color: #000;
                            }

                        }
                    }
                    .delete{
                        margin-left: auto;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        .deleteimg{
                            cursor: pointer;
                            height: auto;
                            width:17px;
                        }
                    }
                }
                .checkout{
                    margin-top: 10px;
                    font-family: 'Kumbh Sans', sans-serif;
                    background: #FF7D1B;
                    color: #fff;
                    width: 100%;
                    height: 50px;
                    border-radius: 8px;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 16;
                    transition: 0.3s ease-in-out;

                    &:hover{
                        background: #f5802dc1;
                    }
                }
            }
        }
    }


    .cart_modal-enter-active,
    .cart_modal-leave-active{
        transition: opacity 0.3s cubic-bezier(0.52,0.02,0.19,1.02);
    }

    .cart_modal-enter-from,
    .cart_modal-leave-to{
        opacity: 0;
    }
 
</style>