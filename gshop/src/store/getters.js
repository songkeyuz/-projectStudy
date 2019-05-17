//包含多个基于state的getter计算属性的对象

export default {
    //点餐里面  购物车食物 和 价格的统计
    totalCount(state) {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
    },
    totalPrice(state) {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
    },

    //评价里面的满意类型的数量统计
    positiveSize(state) {
        return state.ratings.reduce((preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0), 0)
    }
}