<template>
  <div class="indexproduct-buy">
    <div class="tobuy">
      <img class="icon" src="../../assets/images/heart.png" alt="">
      <span>
        <a href="#">收藏</a>
      </span>
    </div>
    <div class="buy">
      <img class="icon" src="../../assets/images/cart.png" alt="">
      <span><a href="#">加入购物车</a></span>
    </div>
  </div>
</template>

<script>
  export default{
    
  }
</script>


<style>
.icon{width:10px;height:10px;}
  .indexproduct-buy{
     width:200px;
     display:flex;
     justify-content:space-between;
     margin-top:20px;
   }
   .tobuy,.buy{
     border:1px solid #ccc;
     padding:5px 10px;
   }
</style>