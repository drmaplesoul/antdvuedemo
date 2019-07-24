<template>
    <div>
        <hello-world msg="Hello Vue js World！" />
        <button @click="open">打开Loading</button>
        <button @click="close">关闭Loading</button>
        <button @click="getMessage">方法里读取State</button>
<!--        <h1 v-if="isLoading">{{loadingMsg}}</h1>-->
        <h1 v-for="load in loadingList">{{load.text}}</h1>

    </div>
</template>

<script>
    import HelloWorld from '../components/HelloWorld'
    import {mapActions, mapState} from 'vuex'
    export default {
        components: {HelloWorld},
        computed: {
            // ...mapState({
            //     loadingMsg: state => state.loading.loadingMsg,
            //     isLoading: state => state.loading.isLoading,
            //     loadingList: state => state.loading.loadingList,
            // })
            ...mapState('loading',['loadingMsg','isLoading','loadingList'])
        },
        methods:{
            ...mapActions('loading',['openLoading','closeLoading']),
            // ...mapActions({
            //     openLoading:'loading/openLoading',
            //     closeLoading:'loading/closeLoading',
            // }),
            // 注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。
            // 理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。
            open(){
                this.openLoading()
            },
            async close(){
                await this.closeLoading()
            },
            getMessage(){
                console.log(this.loadingMsg);
            }
        }
    }
</script>

<style scoped>

</style>
