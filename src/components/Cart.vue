<!--���ģ��-->
<template>
    <div class="cart">
        <div class="list">
            <div v-if="list.length > 0">
                <div class="good" v-for="(good,index) in list" :key="index">
                    <div class="pic">
                        <img :src="good.pic" alt="">
                    </div>
                    <div class="text">
                        <div class="name">{{good.name}}</div>
                        <div class="buyCount"><button @click="subCount(good.id)">-</button> {{good.count}} <button @click="addCount(good.id)">+</button> </div>
                        <div class="price">单价: <span>¥{{good.price}}</span></div>
                    </div>
                </div>
            </div>
            <div v-else class="empty">
                <img src="../assets/images/没有更多.png" alt="">
                <div>您的购物车还是空的哦!</div>
            </div> 
    
        </div>
        <div class="bar">
            <div>总数: <span>{{total}}</span> 件</div>
            <div>总价: <span>{{totalPrice}}</span> 元</div>
        </div>
    </div>
</template>

<!--���ҵ���߼�-->
<script type="text/babel">

    import {mapState,mapMutations} from 'vuex';

    export default {
        data:function(){
            return {
            
            }
        },
        computed:{
            //从vuex注入list
            ...mapState( [ 'list' ] ),
            total:function(){
                return this.list.reduce( function(total,good){ 
                    return total + good.count 
                    } ,0)
            },
            totalPrice:function(){
                return this.list.reduce( function(total,good){ 
                    return total + good.count * good.price;
                    } ,0)
            }
        },
        methods:{
            //从vuex注入addCount,subCount方法
            ...mapMutations( ['addCount','subCount'] )
        },
        mounted:function(){
            //从localStorage获取购物车数据
            //var list = localStorage.getItem('goodInCart') ?  JSON.parse( localStorage.getItem('goodInCart') ) : [];
            //this.list = list;
        }
    }
</script>

<!--�����ʽ-->
<style >
    .good .text .buyCount button{
        padding: 5px 10px;
    }
    .empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 80px 0;
    }
    .bar{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        line-height: 50px;
        border-top: 1px solid #eeeeee;
        display: flex;
        padding-left: 20px;
    }
    .bar div{
        margin-right: 30px;
    }
    .bar div span{
        color: red;
        font-size: 18px;
        font-weight: bold;
    }

</style>