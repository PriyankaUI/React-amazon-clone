export const initialState={
    basket:[
         {
         id:"123450",
               title:"the lean startup the lean startup the lean startup",
               price:1111.96,
               rating:5,
               image:"image/img1.jpg"
     },
     {
         id:"123451",
               title:"the lean startup the lean startup the lean startup",
               price:1111.96,
               rating:5,
              image:"image/img2.jpg"
     }
],
    user:null,
};
export const getBasketTotal=(basket)=>{
    basket?.reduce((amount,item)=>item.price+amount,0);
}
const reducer=(state,action)=>{
    console.log(action);
switch (action.type) {
    
    case 'ADD_TO_CART':
        return{...state,basket:[...state.basket,action.item]};
       
        case 'REMOVE_FROM_CART':
            console.log(action.item.id)
             let newbasket=[...state.basket];
                 const index= state.basket.findIndex((basketitem)=>
                   basketitem.id===action.item.id);
                   console.log(index)
                    if(index>=0){
                         newbasket.splice(index,1)
                     }
                     else{
                         console.warn(`can't remove product(id: ${action.item.id} )as it is not present`)
                    }
        return{...state,basket:newbasket}
            break;

    default:
       return state;
}
}
export default reducer;