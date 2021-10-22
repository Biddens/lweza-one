

export const Products=(value)=>{
    console.log("here is the value",value)
    return{
    type:"Products"
    ,payload:{value ,name:"shaheer"}

}
}




export const details=(value)=>{
    console.log("here is the value",value)
    return{
    type:"Details"
    ,payload:{details:value}

}
}



