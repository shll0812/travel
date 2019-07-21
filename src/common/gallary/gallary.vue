<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <!-- slides -->
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <img class="gallary-img" :src="item"/>
                </swiper-slide>
                <!--<swiper-slide >
                    <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_r_800x800_5cdd4127.jpg"/>
                </swiper-slide>-->

                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            
            </swiper>
        </div>
    </div>
</template>

<script>
export default{
    name:'CommonGallary',
    props:{
        imgs:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            swiperOptions:{
                pagination:'.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        handleGallaryClick(){
            this.$emit('close')
        }
    }
}
</script>

<style lang="stylus" scoped>
.container>>>.swiper-container
    overflow:inherit
.container
    z-index:99
    position:fixed
    left:0
    right:0
    top:0
    bottom:0
    background:#000
    display:flex
    flex-direction:column
    justify-content:center
    .wrapper
        background:#fff
        width:100%
        height:0
        padding-bottom:66%
        .gallary-img
            width:100%
        .swiper-pagination
            color:#fff   
            bottom:-1rem 
</style>