import React from 'react'
import './style.css'
import background from '../images/background.png'
import tick from '../images/tick.png'
import price from '../images/Price.png'
import background1 from '../images/background1.png'

import hame from '../images/hame.png'


function Home (){

    

    return(
        
       
      <>

       <div className="container-fluid cf2">
      <div className="row">
  
        <div className="col-md-12 dp" >




          <img className="img1" src={background} />
          <h3 className="alii1" > <a  className="bolder0
          " style={{color:"#f1f1f1",listStyle:"none",textDecoration:"none",}} href="/products" >LWEZA CLAYS LTD</a></h3>


<button className="alii0" > <a style={{backgroundColor:"#fff",color:"#ff6624",fontWeight:"900"}} href="/products" > Products</a></button>
        </div>

       






      </div>
  
  </div>   

  <div className="container-fluid text-center" style={{backgroundColor:"#f1f1f1"}}>
    <div className="row">
    <div className="col-md-12">
<p className="details">One of Uganda's Premier<br/> Manufacturers & Distributors of Quality Clay Building and Decorative Ware</p>
        </div>
        <div className="col-md-4" style={{marginBottom:"5%"}}>
          <img src={tick} className="icon" />
          <p className="first"> High Quality</p>
        </div>
        <div className="col-md-4">
        <img src={hame}  className="icon1"  />
        <p className="first1">Durable</p>

          </div>
          <div className="col-md-4">
          <img src={price}   className="icon" />
          <p className="first">Affordable</p>

          </div>


    </div>
    </div> 


  





     <div className="container-fluid cs7 text-center" >
    <div className="row">
    <div className="col-md-12 text0">
    <p className="details1">With our diverse and extensive experience in <br/> the construction field and logistics, we combine<br/> our experience and dedicated work force<br/> to provide a comprehensive package of building  <br/> materials </p>

    

      
      </div>
      </div>
      </div> 
    </>





    )
}
export default Home;