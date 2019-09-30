<template>
  <div class="head">
    <div class="head-container">
     <div class="container">
         <div class="container-left">
           <img src="http://www.ouzhimeng.cn/media/wysiwyg/icotheme/elara/logo/logo.png" alt="">
         </div>
         <div class="container-middle">
            <input  type="text" placeholder="站内搜索">
            <button>搜索</button>
         </div>
         <div class="container-right">
             <span @mouseover="mouseOver" @mouseleave="mouseLeave">注册账号</span>
             <span>|</span>
             <span @mouseover="mouseOver" @mouseleave="mouseLeave">登入账号</span>
         </div>
      </div>
      <div class="container-fix">
        <div class="container-bottom">
         <ul>
            <li v-for="(list,index) in headList" :key="index">
              <router-link :to="list.tag" @mouseover="mouseOver" @mouseleave="mouseLeave">
                {{list.title}}
              </router-link>
            </li>
         </ul>
        </div>
      </div>

    </div> 
    <hr/>
  </div>
</template>

<script>

  export default{
  name:"header",
   data(){
        return{
          headList:[
           {
             title:"首页",
             tag:"index"
           },
           {
             title:"法国护肤品",
             tag:"hufu"
           },
           {
             title:"沐浴系列",
             tag:"muyu"
           },
           {
             title:"护手霜",
             tag:"hushou"
             },
           {
             title:"润唇膏",
             tag:"runchun"
             },
           {
             title:"卸妆水",
             tag:"xiezhuang"
             },
           {
             title:"面膜",
             tag:"mianmo"
             },
           {
             title:"关于我们",
             tag:"aboutus" 
           }
          ]
        }
   },
   methods:{
    mouseOver(e){
      var that=e.target;
     that.style.color="red";
   },
    mouseLeave(e){
      var that=e.target;
      that.style.color="#333";
    }
    }
  }
</script>

<style scope>
*{margin:0;padding:0;}
  .head{width:100%;}
  .head-container{
    max-width:1023px;
    margin:0 auto;
  }
  .container{display:flex;}
  .container-left {margin:20px 10px;}
  .container-left img{width:150px;height:50px}
  .container-middle{position:relative;
     margin:20px 100px;
  }
   .container-middle input{
        width:350px;height:40px;
        border:1px solid #59E8CD;
        margin:0px;
        
        }
  .container-middle button{
      width:80px;height:42px;
      background:#59E8CD;
      font-size:16px;
      color:#fff;
      position:absolute;
      top:0px;right:0px;
      border:1px solid #59E8CD;
      
  }
  .container-right {margin:20px 10px;
      height:40px;
     line-height:40px;
     min-width:157px;
  }

  .container-right span{
     margin-right:5px;
     color:#333;
     font-size:16px;
     
  }
  .container-fix{
    width:100%;
    

  }
  .container-bottom ul{
     list-style:none;
     display:flex;
     justify-content:flex-start;
     margin-left:20px;
     min-width:960px;
     margin:0 auto;
  }
  .container-bottom ul li a{
    color:#333;
  }
  .container-bottom ul li{
    padding-right:50px;
  }
  .active{color:#red !important;}
   hr{
     border:2px solid #59E8CD;
     margin-top:10px;
    
  }
</style>