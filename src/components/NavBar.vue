<template>
  <header>
    <nav>
        <CartModal ref="cartmodal" :isCartActive="isCartActive" @closeModal="closeModal"/>
        <div v-show="mobile" class="toggle">
            <img @click="toggle" src="../assets/images/icon-menu.svg" alt="">
        </div>
        <div class="logo">
            <h3>sneakers</h3>
        </div>

        <ul v-show="!mobile" class="navItemList">
            <li class="nav_item">
                <RouterLink :to="{name: 'home'}">
                    Collection
                    <span class="line"></span>
                </RouterLink>
            </li>
            <li class="nav_item">
                <RouterLink :to="{name: 'men'}">
                    Men
                    <span class="line"></span>
                </RouterLink>
            </li>
            <li class="nav_item" v-for="nav in navItem" :key="nav">
                {{ nav.name }}
                <span class="line"></span>
            </li>
        </ul>

        <div class="user_details">
            <div class="cart" @click="isCartActive = !isCartActive">
                <img src="../assets/images/icon-cart.svg" alt="">
                <div v-if="cartStore.cartItem.length">
                    <span class="cart_item_count">
                        {{ cartStore.cartItem.length }}
                    </span>
                </div>
            </div>
            <div class="user_image">
                <img src="../assets/images/image-avatar.png" alt="">
            </div>
        </div>
        <Transition name="sidebar_transition">
            <div v-show="sidebarActive" class="sidebar" @click.self="toggle">
                <Transition name="sidebar_content">
                    <div v-if="sidebarActive" class="sidebar_wrapper">
                        <div class="close">
                            <img @click="toggle" src="../assets/images/icon-close.svg" alt="">
                        </div>
                        <ul class="sidebarNavList">
                            <li class="nav_item">
                                <RouterLink :to="{name: 'home'}" @click="routerClick">
                                    Collection
                                    <span class="line"></span>
                                </RouterLink>
                            </li>
                            <li class="nav_item">
                                <RouterLink :to="{name: 'men'}" @click="routerClick">
                                    Men
                                    <span class="line"></span>
                                </RouterLink>
                            </li>
                            <li class="nav_item" v-for="nav in navItem" :key="nav">
                                <a href="">
                                    {{ nav.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </Transition>
            </div>
        </Transition>

    </nav>
  </header>
</template>

<script>
import CartModal from '../components/modal/CartModal.vue'
import { onClickOutside } from '@vueuse/core'
import { useCartStore } from '../stores/cart'

export default {
    components: { CartModal },
    data(){
        return{
            cartStore: useCartStore(),
            mobileToggle: null,
            windowWidth: null,
            mobile: null,
            sidebarActive: false,
            navItem: [
                { name: 'Women' ,link: 'women' },
                { name: 'About', link:'about' },
                { name: 'Contact', link:'contact' },
            ],
            isCartActive:false,
            myref:this.$refs.cartmodal,
            
        }
    },
    created(){
        window.addEventListener("resize", this.checkScreen)
        this.checkScreen()
    },
    methods: {
        toggle(){
            this.sidebarActive = !this.sidebarActive
        },
        checkScreen(){
            this.windowWidth = window.innerWidth
            if(this.windowWidth <= 750){
                this.mobile = true;
                return;
            }
            this.mobile = false
            this.sidebarActive = false
            return
        },
        closeModal(){
            this.isCartActive = false
        },
        routerClick(){
            this.toggle()
        }
    },
    mounted(){
        onClickOutside(this.$refs.cartmodal, this.closeModal)
    }
}
</script>

<style lang="scss" scoped>
   .sidebar_transition-enter-active,
   .sidebar_transition-leave-active {
        transition: opacity 0.3s cubic-bezier(0.52,0.02,0.19,1.02);
    }

    .sidebar_transition-enter-from,
    .sidebar_transition-leave-to {
        opacity: 0;
    }

    .sidebar_content-enter-active{
        transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) 0.15s;
    }
    .sidebar_content-leave-active{
        transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) ;
    }

    .sidebar_content-enter-from{
        opacity: 0;
        margin-left: -320px;
    }
    .sidebar_content-leave-to{
        margin-left: -320px;
    }
    header{
        background: #fff;
        height: 120px;
        padding: 0 20px;
        
        nav{
            height: 100%;
            width: 100%;
            // max-width: 999px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            width: 100%;
            gap: 20px;
            border-bottom: 1px solid #999;
            position: relative;
  
            @media screen and (min-width: 992px) {
                max-width:992px;
            }
            @media screen and (min-width: 1200px) {
                max-width:1200px;
            }
            @media screen and (min-width: 1400px) {
                max-width:1400px;
            }
            .toggle{
                cursor: pointer;
                margin-right: 5px;
                img{
                    height: 20px;
                    width: auto;
                }
            }
            .logo{
                h3{
                    transform: translate(0, -5px);
                    font-size: 30px;
                    font-weight: 900;
                    
                    transition: 0.3s ease;

                    @media screen and (min-width: 750px) {
                        margin-right: 35px;
                        transform: translate(0, -3px);
                    }
                }

                &:hover{
                    color: #FF7D1B;
                }
            }
            .user_details{
                display: flex;
                align-items: center;
                gap: 20px;
                margin-left: auto;
                .cart{
                    cursor: pointer;
                    margin-right: 15px;
                    position: relative;
                    .cart_item_count{
                        background: #FF7D1B;
                        height: 20px;
                        width:24px;
                        font-size: 13px;
                        font-weight: 700;
                        color: #fff;
                        border-radius: 100px;
                        position: absolute;
                        top:-10px;
                        right:-14px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    @media screen and (max-width: 576px) {
                        margin-right: 8px;
                    }
                }
                .user_image{
                    img{
                        border:2px solid #fff;
                        height: 50px;
                        width: auto;
                        object-fit: cover;
                        border-radius: 100%;
                        transition: 0.3s ease-in-out;   
                        cursor: pointer;
                        &:hover{
                            border: 2px solid #FF7D1B;
                        }
                    }
            
                }
            }
            .navItemList{
                height: 100%;
                display: grid;
                grid-auto-flow: column;
                gap: 30px;
                box-sizing: border-box;
                li{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 100%;
                    line-height: 20px;
                    list-style: none;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) ;
                    color: #999;
                    &:nth-child(1) {
                        width: 85px;
                    }

                    &:hover{
                        a{

                            color: #000;
                        }
                        .line{
                            visibility: visible;
                            opacity: 1;
                            width: 100%;
                        }
                    }
                    a{
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) ;
                        text-decoration: none;
                        color: #999;

                        &.router-link-active{
                            color: #000;

                            .line{
                                visibility: visible;
                                opacity: 1;
                                width: 100%;
                            }
                        }
                    }
                    .line{
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 4px ;
                        background: #FF7D1B;
                        width: 0;
                        transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) ;
                        visibility: hidden;
                        opacity: 0;
                    }
                }
                

            }
            .sidebar{
                position:fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba($color: #000000, $alpha: 0.2);
                z-index: 999;
                .sidebar_wrapper{
                    width: 200px;
                    background: #fff;
                    height: 100%;
                    padding: 30px;
                    .close{
                        cursor: pointer;
                        margin-bottom: 45px;
                        img{
                            height:20px;
                            width: auto;
                        }
                    }
                    .sidebarNavList{
                        display: grid;
                        gap: 30px;
                        li{
                            list-style: none;
                            font-weight: 800;
                            font-size: 22px;
                            color: #2e2e2e;
                            a{
                                text-decoration: none;
                                color: #000;
                                transition: 0.3s ease-in-out;
                                &:hover{
                                    color: #FF7D1B;
                                }

                                &.router-link-active{
                                    color: #FF7D1B;
                                }
                            }
                        }
                    }
                    
                }
            }
        }
    }
</style>