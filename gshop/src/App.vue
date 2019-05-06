<template>
    <div>
        <router-view/>
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {reqFoodTypes} from './api'

export default {
    async mounted(){
        //测试接口请求函数  一定要连接数据库 npm start
        const result = await reqFoodTypes()
        console.log(result)
    },
    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylu">
    
</style>
