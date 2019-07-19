<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl"/>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        
    </swiper>
  </div>   
</template>

<script>
export default{
    name:'HomeSwiper',
    data (){
        return{
            swiperOption: {
              pagination:'.swiper-pagination',
              loop:true
            },
            swiperList:[{
              id:'0001',
              imgUrl:'https://imgs.qunarzz.com/piao/fusion/1809/35/323e822169c70902.jpg_890x330_ff99b8d6.jpg'
            },{
              id:'0002',
              imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/b81b6bdceb2de713974ee9821458cf41.jpg_890x330_b04414a6.jpg'
            },{
              id:'0003',
              imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/f134df7672ec248567f47082206d2e41.jpg_890x330_05ce26b7.jpg'
            },{
              id:'0004',
              imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/185cb1fa49e9b5b5db9a4c73cfd0784e.jpg_890x330_74b98149.jpg'
            },{
              id:'0005',
              imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/e5672a6889c1fd68c4f480ce80050663.jpg_890x330_c6216003.jpg'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
   .wrapper >>> .swiper-pagination-bullet-active
       background:#fff 
   .wrapper
     width:100%
     height:0
     overflow:hidden
     padding-bottom:37.25%
     background:#eee
     .swiper-img
        width:100%
</style>
