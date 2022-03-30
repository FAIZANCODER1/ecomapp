const initstate ={
    products:[],
    totalprice:0,
    totalquantity:0

}
const CartReducer=(state=initstate,action)=>{
let findpro;
let index;

    switch (action.type) {
    case 'ADD_TO_CART':
 const {product, quantity}=action.payload
 const check = state.products.find(pr => pr.id ==product.id);
 if (check) {
return state
        
    }  else{
        const Tprice =state.totalprice + product.discountprice * quantity;
        const Tquantity= state.totalquantity+quantity;
        product.quantity=quantity;
        console.log(Tprice)

        return{
            
            ...state,products:[...state.products,product],totalprice:Tprice,
            totalquantity:Tquantity
        }
    }
    case 'INC':
        findpro =state.products.find(product=>product.id==action.payload);
        console.log(findpro)
        index= state.products.findIndex(product=> product.id==action.payload);
        console.log(index)
        findpro.quantity+=1
        state.products[index]=findpro
        return {
            ...state ,
            totalprice:state.totalprice+findpro.discountprice, totalquantity:state.totalquantity+1
        }
        case 'DEC':
        findpro =state.products.find(product=> product.id==action.payload);
        index= state.products.findIndex(product=> product.id==action.payload)
    if (findpro.quantity >1) {
        findpro.quantity -=1
        return{
            ...state, totalprice:state.totalprice-findpro.discountprice,totalquantity:state.totalquantity-1
        }
        
    }
    case 'REMOVE':
        findpro =state.products.find(product=> product.id==action.payload);
    const filterd =state.products.filter(product=> product.id != action.payload)
 console.log(filterd)
 console.log(findpro)
 return{
     ...state ,
     products:filterd,
     totalprice:state.totalprice-findpro.discountprice*findpro.quantity, totalquantity:state.totalquantity-findpro.quantity

 }
    default:
        return state
        
}
}

export default CartReducer