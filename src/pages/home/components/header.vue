<template>
  <div class="header">
   <div class="header-left">
     <div class="iconfont back-icon">&#xe60e;</div>
   </div>
   <div class="header-input">
     <span class="iconfont">&#xe649;</span>
     输入城市景点、游玩主题
   </div>
   <router-link to='/city'>
      <div class="header-right arrow-icon">
        {{this.city}}
        <span class="iconfont">
          &#xe6aa;
        </span>
      </div>
   </router-link>
  </div>  
</template>
<script>
export default {
  name: 'HomeHeader',
  props:{
    city:String
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    display:flex
    line-height:$headerHeight
    background: $bgColor
    color:#fff
    .header-left
      width:.64rem
      float:left
      .back-icon
        text-align:center
        font-size:.4rem
    .header-input 
      flex:1
      background:#fff
      height:.62rem
      line-height:.62rem
      border-radius:.1rem
      margin-top:.12rem
      margin-left:.2rem
      padding-left:.2rem
      color:#ccc
    .header-right
      width:1.24rem
      float:right 
      text-align:center
      color:white
      .arrow-icon
        font-size:.24rem
        margin-left:-.04rem
</style> 