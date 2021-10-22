import React, { useEffect } from "react"
import { useState} from "react"
import { useDispatch ,useSelector} from "react-redux"
import {Products,details} from '../../redux/actions/productactions.js'

function Test(){
    const dispatch=useDispatch()
    const [users, setUsers] = useState()

    useEffect(()=>{
        dispatch(Products(users))
        



    },[users])
    useEffect(()=>{

    })
    const mystate = useSelector(state => state.reducers.ProductReducer.Products);


    const {name,value}=mystate;
    console.log(mystate)



return(


<div>


<input onChange={(e)=>setUsers(e.target.value)}   />

<h1>{value}</h1>

</div>

)



}
export default Test;