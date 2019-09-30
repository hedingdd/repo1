<template>
    <div>
            <div v-for="product in indexproducts">
               <img class="indeximg" :src="product.imgurl" alt="">
               <div class="indexproduct-title">
                 <p>
                   <a href="#">
                      {{product.title}}
                   </a>
                 </p>
                  <p>￥{{product.price}}</p>
               </div>
               <div class="indexproduct-buy">
                  <div class="tobuy">
                    <img class="icon" src="../assets/images/heart.png" alt="">
                    <span>
                      <a href="#">收藏</a>
                    </span>
                   </div>
                  <div class="buy">
                   <img class="icon" src="../assets/images/cart.png" alt="">
                    <span><a href="#">加入购物车</a></span>
                  </div>
               </div>
            </div>
    </div>
            
</template>

<script>
  export default{
    
  }
</script>


<style>

</style>