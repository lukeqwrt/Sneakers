<template>
  <div class="wrap">
    <ProductSelect :assets="assets" />
    <ProductContent :content="content" />
  </div>
</template>

<script>
import ProductSelect from '../components/Product/ProductSelect.vue'
import ProductContent from '../components/Product/ProductContent.vue'

import prodsmall1 from '../assets/images/image-product-1-thumbnail.jpg'
import prod1 from '../assets/images/image-product-1.jpg'

import prodsmall2 from '../assets/images/image-product-2-thumbnail.jpg'
import prod2 from '../assets/images/image-product-2.jpg'

import prodsmall3 from '../assets/images/image-product-3-thumbnail.jpg'
import prod3 from '../assets/images/image-product-3.jpg'

import prodsmall4 from '../assets/images/image-product-4-thumbnail.jpg'
import prod4 from '../assets/images/image-product-4.jpg'

export default {
  components: { ProductContent, ProductSelect },
  data(){
    return{
      assets:[
        { productImg: prod1, productsmall: prodsmall1},
        { productImg: prod2, productsmall: prodsmall2},
        { productImg: prod3, productsmall: prodsmall3},
        { productImg: prod4, productsmall: prodsmall4},
      ],
      content: {
        id: 1,
        img:prodsmall1,
        company: 'SNEAKER COMPANY',
        title: 'Fall Limited Edition Sneakers',
        text: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price:220
      },
      userCartDetails: null
    }
  },
}
</script>

<style lang="scss" scoped>
  .wrap{
    padding: 0 50px;
    height: 76vh;
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 990px) {
      gap: 40px
    }
    @media screen and (max-width: 768px) {
      height: unset;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
    }
    @media screen and (max-width: 576px) {
      height: unset;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr;
      padding: 0 0px;
      margin-top: 0;
    }
  }
</style>