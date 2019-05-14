<template>
    <div>
        <router-view/>
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'


export default {
    mounted(){
        //this.$store.dispatch('getAddress')
        this.getAddress()//先引入map再在methods写入方法 再在这里调用 再到MSite里面引入 读取  显示     和上面那个效果一样
        this.getUserInfo()//刷新后实现自动登陆
    },

    methods:{
        ...mapActions(['getAddress','getUserInfo'])
    },

    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylu">
    
</style>
