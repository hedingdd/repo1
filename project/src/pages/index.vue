<template>
  <div id="app">
   <div class="index-container">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class="swiperimg" src="../assets/images/p.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="swiperimg" src="../assets/images/o.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="swiperimg" src="../assets/images/r.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="swiperimg" src="../assets/images/333.png" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> 
      </swiper>
   </div>
   <div class=index-floor>
      <div class="firstfloor">
         <div class="classful">
           <span class="classful-one">海贼王team</span>
           <span class="classful-two">
             <a href="#">更多>></a>
           </span>
           
         </div>
          
          <div class="firstfloor-product">
           <ul>
              <li v-for="product in indexproducts">
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
              </li>
           </ul>
          </div>
      </div>
   </div>
  </div>
</template>

<script>

  export default{
  name:"index",
 
    data(){
       return {
        swiperOption: {
            pagination: {
               el: '.swiper-pagination',
               clickable: true,
               clickableClass : 'my-pagination-clickable',
             },
             loop : true,
             autoplay:true,
             navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                         }
                      },
               indexproducts:[
                 {
                   imgurl:"../../static/images/b.jpg",
                   title:"路飞",
                   price:"90000"
                 },
                 {
                  imgurl:"../../static/images/k.jpg",
                   title:"索隆",
                   price:"80000"
                 },
                 {
                   imgurl:"../../static/images/j.jpg",
                   title:"山治",
                   price:"70000"

                 },
                 {
                  imgurl:"../../static/images/l.jpg",
                   title:"乌索尔",
                   price:"50000"
                 },
                 {
                  imgurl:"../../static/images/i.jpg",
                   title:"乔巴",
                   price:"10000"
                 },
                 {
                  imgurl:"../../static/images/f.jpg",
                   title:"娜美",
                   price:"60000"
                 },
                 {
                  imgurl:"../../static/images/m.jpg",
                   title:"罗宾",
                   price:"60000"
                 },
                 {
                  imgurl:"../../static/images/n.jpg",
                   title:"弗朗基",
                   price:"60000"
                 }
               ]
              }
         },
         method:{
             
         }
  }
</script>

<style scope>
   *{padding:0;margin:0;}
   a{
     text-decoration:none;
     color:#333;
     }
   ul{list-style:none;}
   .swiperimg{
     width:100%;
     height:620px;
   }
   .classful{
     position:relative;
     height:33px;
   }
   .classful::after{
     width:100%;
     content:"";
     display:block;
     clear:both;
     border:2px solid #eee;
     position:absolute;
     top:25px;left:0px;
   }
   .classful-one,.classful-two{
     position:absolute;
     top:0px;
   }
   .classful-one{
     left:10px;
   }
   .classful-two{
      right:10px;
   }
   .index-floor{
     max-width:1023px;
     margin:0 auto;
     margin-top:50px;
   }
   .indeximg{
     width:200px;
     height:300px;
   }
   .icon{width:10px;height:10px;}
   .firstfloor-product ul{
     display:flex;
     justify-content:space-between;
     margin:10px 0;
     flex-wrap: wrap;
   }
   .firstfloor-product ul li{
     border:1px solid #ccc;
     padding:20px 10px;
     margin-bottom:20px;
   }
   .indexproduct-title{
     color:#666;
     margin-top:20px;
    
   }
   .indexproduct-title p{
      display: flex;
     justify-content: center;
     margin:10px 0px;
   }
   .indexproduct-title a{
     color:#666;
   }
   .indexproduct-buy{
     display:flex;
     justify-content:space-between;
     margin-top:20px;
   }
   .tobuy,.buy{
     border:1px solid #ccc;
     padding:5px 10px;
   }

</style>