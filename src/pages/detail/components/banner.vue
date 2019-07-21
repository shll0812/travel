<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg"/>
        <div class="banner-info">
            <div class="banner-title">北京欢乐谷(AAAA景区)</div>
            <div class="banner-number banner-icon"><span class="iconfont">&#xe69d;</span>27</div>
        </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handGallaryClose"></common-gallary>
    </div>    
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default{
    name:"DetailBanner",
    data () {
        return {
            showGallary:false,
            imgs:['http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_r_800x800_087730c7.jpg','http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_r_800x800_5cdd4127.jpg']
        }
    },
    components:{
        CommonGallary
    },
    methods:{
        handleBannerClick(){
            this.showGallary=true
        },
        handGallaryClose(){
             this.showGallary=false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    .banner-img
        width:100%
    .banner-info
        display:flex
        position:absolute
        left:0
        right:0
        bottom:0
        line-height:.6rem
        color:white
        background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
        .banner-title
            flex:1
            font-size:.32rem
            padding:0 .2rem
        .banner-number
            margin-top:.14rem
            padding:0 .4rem
            height:.32rem
            line-height:.32rem
            border-radius:.2rem
            background:rgba(0,0,0,.8)    
            font-size:.24rem
            .banner-icon
                font-size:.24rem    

</style>