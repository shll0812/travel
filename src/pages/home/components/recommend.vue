<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
            
                <img class="item-img"  :src='item.imgUrl'/>

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'HomeRecommend',
    data () {
        return {
            recommendList:[{
                id:'001',
                imgUrl:'https://imgs.qunarzz.com/sight/p0/1907/fe/fe656739f7f059c1a3.water.jpg_200x200_7dcc862c.jpg',
                title:'西溪国家湿地公园',
                desc:'乘船游览，深入体验江南水乡特色，很不错的景色！游船工作人员很认真负责任。'
            },{
                id:'002',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1907/40/401b7b735008f7f4a3.img.jpg_200x200_10ce515e.jpg',
                title:'西溪国家湿地公园',
                desc:'乘船游览，深入体验江南水乡特色，很不错的景色！游船工作人员很认真负责任。'
            },{
                id:'003',
                imgUrl:'http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_200x200_151f0405.jpg',
                title:'西溪国家湿地公园',
                desc:'乘船游览，深入体验江南水乡特色，很不错的景色！游船工作人员很认真负责任。'
            }]
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
    margin-top:.2rem
    line-height:.8rem
    background:#eee
    text-indent:.2rem
.item
    overflow:hidden
    display:flex
    height:1.9rem
    .item-img
        width:1.7rem
        height:1.7rem
        padding:.1rem
    .item-info
        flex:1
        padding:.1rem
        min-width:0
        .item-title
            line-height:.54rem
            font-size:.32rem
            ellipsis()
        .item-desc
            line-height:.4rem
            color:#ccc 
            ellipsis() 
        .item-button    
            line-height:.44rem
            margin-top:.16rem 
            background:#ff9300
            padding:0 .2rem
            border-radius:.06rem
            color:#fff
</style>