
const initstate={
    products:[
        {id:1,name:'men shirt', img:'1.jpg', price:20, discount:2,discountprice:20-2/100*20,qty:1,desc:'this product is awsome and very good quality' },
        {id:2,name:'woman jaket for summer', img:'2.jpg', price:30, discount:5,discountprice:30-5/100*30,qty:1,desc:'this product is awsome and very good quality' },
        {id:3,name:'men trouser for all season', img:'3.jpg', price:15, discount:5,discountprice:15-2/100*15,qty:1,desc:'this product is awsome and very good quality' },
        {id:4,name:'men shoes', img:'4.jpg', price:10, discount:2,discountprice:10-2/100*10,qty:1,desc:'this product is awsome and very good quality' },
        {id:5,name:'woman plazzo', img:'5.jpg', price:10, discount:2,discountprice:10-2/100*10,qty:1,desc:'this product is awsome and very good quality' },
        {id:6,name:'woman jeans', img:'6.jpg', price:20, discount:5,discountprice:20-5/100*20,qty:1,desc:'this product is awsome and very good quality' },
        {id:7,name:'men trackpant', img:'7.jpg', price:30, discount:10,discountprice:30-10/100*30,qty:1,desc:'this product is awsome and very good quality' },
        {id:8,name:'men jaket', img:'8.jpg', price:40, discount:4,discountprice:40-2/100*40,qty:1,desc:'this product is awsome and very good quality' },
        {id:9,name:'woman shirt', img:'9.jpg', price:20, discount:2,discountprice:20-2/100*20,qty:1,desc:'this product is awsome and very good quality' },
        {id:10,name:'men jaket', img:'10.jpg', price:32, discount:2,discountprice:32-2/100*32,qty:1,desc:'this product is awsome and very good quality' },
    ],
     product:{}
}


const ProductReducer =(state=initstate,action)=>{
    switch (action.type) {
        case 'PRODUCT':
            return {...state, product:state.products.find(product=> product.id==action.id)}
            
    
        default:
            return state
    }

}
export default ProductReducer