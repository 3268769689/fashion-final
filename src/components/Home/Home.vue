<!--���ģ��-->
<template>
    <div class="home">
        <MyHeader></MyHeader>
        <MyNav></MyNav>
        <MyList></MyList>
        <!-- <router-link to="/cart">
            <div class="to-cart"><img src="../../assets/images/cart.png" alt=""></div> 
        </router-link> -->
        
        <div class="to-cart" @click="toCart">
            <img src="../../assets/images/cart.png" alt="">
            <div class="num">{{total}}</div> 
        </div> 
       
    </div>
</template>

<!--���ҵ���߼�-->
<script>

    //�������
    import Header from './Header.vue'
    import Nav from './Nav.vue'
    import List from './List.vue'

    import {mapState} from 'vuex';

    export default {
        data:function(){
            return {
                num:0
            }
        },
        computed:{
            ...mapState( [ 'list' ] ),
            total:function(){
                return this.list.reduce( function(total,good){ 
                    return total + good.count 
                    } ,0)
            }
        },
        methods:{
            toCart:function(){
                this.$router.push('/cart');
            }
        },
        mounted:function(){
            //取出localStorage中的所有商品
            /* var goodInCart = JSON.parse( localStorage.getItem("goodInCart") ) || [];
            var total = goodInCart.reduce((total,good)=>{
                return total + good.count;
            },0)

            this.num = total; */
        },
        components:{
            "MyHeader": Header,
            "MyNav": Nav,
            "MyList": List
        }
    }
</script>

<!--�����ʽ-->
<style scoped>
    .to-cart{
        position: fixed;
        bottom: 50px;
        right: 20px;
        background-color: lightblue;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .to-cart img{
        width: 70%;
    }
    .to-cart .num{
        position: absolute;
        right: 0px;
        top: 0;
        background-color: red;
        color: white;
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
    }
</style>