<template>
    <div class="image">
        <div class="img_show">
            <img :src="assetsIndex" alt="">
            <div class="buttons">
                <div @click="handleBackClick" class="back">
                    <i class="fa-solid fa-chevron-left "></i>
                </div>
                <div @click="handleNextClick" class="next">
                    <i class="fa-solid fa-chevron-right "></i>
                </div>
            </div>
        </div>
        <div class="image_selector">
            <div :class="{ 'active' : index === productIndex}" @click="selectImg(index)" class="img" v-for="(img, index) in assets" :key="index">
                <div class="filter"></div>
                <img  :src="img.productsmall" alt="">
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['assets'],
    data(){
        return{
            windowWidth: null,
            mobile: false,
            productIndex: 0,
            selectedImg: this.assets[0].productImg,
        }
    },
    created(){
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },
    methods:{
        selectImg(index){
            this.productIndex = index
        },
        checkScreen() {
            this.windowWidth = window.innerWidth
            if(this.windowWidth <= 768){
                this.mobile = true
                return
            }

            this.mobile = false
        },
        handleNextClick(){
            if(this.productIndex >= this.assets.length - 1){
                this.productIndex = 0
                return
            }
            this.productIndex += 1
        },
        handleBackClick(){
            if(this.productIndex <= 0){
                this.productIndex = this.assets.length - 1
                return
            }
            this.productIndex -= 1
        }
    },
    computed: {
        assetsIndex() {
            return this.assets[this.productIndex].productImg
        }
    }
}
</script>

<style lang="scss" scoped>
    .image{
        justify-self: center    ;
        max-width: 490px;
        width: 100%;
        display: flex;
        gap: 30px;
        flex-direction: column;
        @media screen and (max-width: 576px) {
            max-width: 100%;
        }
        .img_show{
            position: relative;
            img{
                border-radius: 20px;
                height: auto;
                width: 100%;
                @media screen and (max-width: 576px) {
                    border-radius: 0;
                }
            }
            .buttons{
                display: none;
                position: absolute;
                top: 50%;
                left: 0;
                width: 100%;
                transform: translate(0,-50%);
            
                justify-content: space-between;
   

                .back,.next{
                    background: #fff;
                    height: 40px;
                    width: 40px;
                    display: grid;
                    place-items: center;
                    border-radius: 100px;
                    cursor: pointer;
                    i{
                        font-size: 22px;
                    }
                }
                .back{
                    margin-left: 15px;
                }
                .next{
                    margin-right: 15px;
                }
              

                @media screen and (max-width: 576px) {
                  display: flex;
                  
                }
            }
        }
        .image_selector{
            display: flex;
            justify-content: space-between;
            gap: 30px;
            @media screen and (max-width: 576px) {
                display: none;
            }
            .img {
                border: 2px solid #fff;
                transition: all 0.3s cubic-bezier(0.52,0.02,0.19,1.02) ;
                cursor: pointer;
                position: relative;
                border-radius: 12px;
                img{
                    height: 100%;
                    width: 100%;
                    border-radius: 10px;
                }
                &.active{
                    border: 2px solid #FF7D1B;
                    .filter{
                        visibility: visible;
                       opacity: 1;
                    }
                }
                .filter{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    border-radius: 12px;
                    background-color: rgba(255, 255, 255, 0.5);
                    visibility: hidden;
                    opacity: 0;
                }
                &:hover{
                    border: 2px solid #FF7D1B;
                    .filter{
                       visibility: visible;
                       opacity: 1;
                    }
                }
            }
        }
    }

</style>