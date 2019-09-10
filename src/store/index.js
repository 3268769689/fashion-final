import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
    //state中定义数据
    state: {
        list:[]
    },
    //mutations中是同步方法
    mutations: {
        addToCart: function (state, good) {
            //查找list中是否已存在good
            var findGood = state.list.find((g) => g.id == good.id);
            if (findGood) findGood.count++;
            else 
            {
                //good.count = 1;//count字段是新增字段
                Vue.set(good, 'count', 1);
                state.list.push(good);
            }    
        },
        addCount:function(state,id){
            var findGood = state.list.find((g) => g.id == id);
            if (findGood && findGood.count < 5) findGood.count++;
            console.log(findGood);
        }, 
        subCount:function(state,id){
            var findGood = state.list.find((g) => g.id == id);
            if (findGood && findGood.count > 1) findGood.count--;
            console.log(findGood);
        }
    },
    //actions中是异步方法
    actions: {
        
    }
})

export default store;