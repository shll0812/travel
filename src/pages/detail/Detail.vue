<template>
    <div >
       <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
       <detail-header></detail-header>
       <detail-list :list="list"></detail-list>
       <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
import axios from 'axios'

export default{
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            sightName:'',
            bannerImg:'',
            gallaryImgs:'',
            list:[]
        }
    },
    methods:{
        getDetailInfo () {
            //axios.get('/api/detail.json?id='+this.$route.params.id)
            axios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handleGetSucc)
        },
        handleGetSucc (res){
            res=res.data
            if(res.ret && res.data){
                const data= res.data
                //console.log(data)
                this.sightName=data.sightName
                this.bannerImg=data.bannerImg
                this.gallaryImgs=data.gallaryImgs
                this.list=data.categoryList
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.content
    height:50rem
</style>