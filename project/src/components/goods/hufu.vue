<template>
  <div class='hufu'>
    <div class='con'>
      <div  class='nav'>
        <ul>
           <li>
             <router-link to="index">
               <img src="../../assets/images/home-click.png" alt="">
               <span>首页</span>
             </router-link>
             <span>/</span>
           </li>
           <li>法国护肤品</li>
        </ul>
      </div>
      <div class='body'>
        <div class='button'>
          <ul>
            <li>排序：销量 <img src="../../assets/images/down-point.png" alt=""></li>
            <li>从高到低 <img src="../../assets/images/down-point.png" alt=""></li>
            <li>12/页 <img src="../../assets/images/down-point.png" alt=""></li>
          </ul>
        </div>
        <div class="products">
          <div v-for="products in hufuProducts" class="product">
            <img class="hufuimg" :src="products.imgurl" alt="">
            <p>{{products.title}}</p>
            <p>{{products.price}}</p>
            <buyComponent></buyComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
  import buyComponent from "../small/buy.vue";
  export default{
    data(){
      return{
         hufuProducts:[
      {
         imgurl:"../../static/images/b.jpg",
         title:"路飞",
         price:"90000"
       },
      {
         imgurl:"../../static/images/k.jpg",
         title:"索隆",
          price:"80000"
       }
     ]
      }
    },
    components:{
      buyComponent,
    }
  }
</script>


<style  scope>
   *{list-style:none;}
    .con{
      max-width:1023px;
      padding-right:15px;
      padding-left:15px;
      margin-right:auto;
      margin-left:auto;
    }
     ul{
       display:flex;
       width:100%;
       justify-content:flex-start;
     }
     .nav ul li{
       padding:20px 10px 20px 10px;
     }
     .nav ul li img,.body ul li img{
       width:15px;
       height:15px;
     }
     .body ul li{
       padding:10px 20px 10px 30px;
     }
    .hufuimg{
     width:200px;
     height:300px;
   }
   .products{
     display:flex;
     justify-content:center;
   }
   .product{
     margin:0 auto;
   }
</style>