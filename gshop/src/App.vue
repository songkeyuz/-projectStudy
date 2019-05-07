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
        this.getAddress()//先引入map再在methods写入方法 再在这里调用   和上面那个效果一样
    },

    methods:{
        ...mapActions(['getAddress'])
    },

    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylu">
    
</style>
