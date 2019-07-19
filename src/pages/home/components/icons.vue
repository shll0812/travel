<template>
    <div class="icons">
      <div class="icon" v-for="item of iconList" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.iconUrl"/>
        </div>
        <p class="icon-desc">{{item.title}}</p>
      </div>
    </div>
</template>
<script>
export default {
    name:'HomeIcons',
    data (){
        return {
            iconList:[{
                id:'001',
                iconUrl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                title:'景点门票'
            },{
                id:'002',
                iconUrl:'https://imgs.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                title:'西湖'
            },{
                id:'003',
                iconUrl:'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                title:'杭州必游'
            },{
                id:'004',
                iconUrl:'https://imgs.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                title:'漂流'
            },{
                id:'005',
                iconUrl:'https://imgs.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
                title:'印象西湖'
            },{
                id:'006',
                iconUrl:'https://imgs.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
                title:'千岛湖'   
            },{
                id:'007',
                iconUrl:'https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                title:'浪浪浪水公园'
            },{
                id:'008',
                iconUrl:'https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
                title:'西溪湿地'
            }]
        }
    }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
  .icons
    width:100%
    overflow:hidden
    height:0
    padding-bottom:50%
    .icon
      position:relative
      overflow:hidden
      float:left
      height:0
      width:25%
      padding-bottom:25%
      .icon-img 
        position:absolute;
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding:.1rem
        .icon-img-content
          display:block
          height:100%
          margin:0 auto
      .icon-desc
        position:absolute
        left:0
        right:0
        bottom:0
        line-height:.44rem
        height:.44rem
        text-align:center
        color:$darkTextColor
</style>