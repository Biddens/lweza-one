

const ProductReducers={

Products:[],
Details:[]


} 

export const ProductReducer=(state=ProductReducers,action)=>{
   switch(action.type){
       case "Products"
       :
    return {
        ...state,Products:action.payload
    }
    


    case "Details"
    :
    return {
        ...state,Details:action.payload
    }
    




       
default : return state










    
   }

}
