import React from 'react'
import './style.css'

import Bricks from './images/Bricks.png'
import decorative from './images/decorative.png'

import './style.css'
import sp0 from './images/sp0.png'
import flattop from './images/flattop.png'
import half from './images/half.png'
import wal1 from './images/wal1.png'
function Suspend (){

    

    return(
        
       
      <>

      <div className="container text-center wd cf2">
      <h4 className="roof " style={{backgroundColor:"#FF6624",padding:"10px",color:"#fff"}}>Products</h4>



<div className="row">
  <div className="col-md-12"style={{marginBottom:"10%"}}>


    <p className="fonts1">Lweza Clays Limited is a private company that manufactures modern, standard, durable and affordable building materials that are internationally friendly in real estate development today. Our company has built a reputation with clients who have been particularly interested in putting up residential and commercial structures both at the national and international levels. Our major objective is to enable builders to acquire building materials at the cheapest cost possible and above all, offer great service to our customers.</p>
  </div>
 

  </div>

      <div className="row">
     
      <div className="col-md-4  text-center">
<p className="subhead">Half Bricks and Floor Tiles </p>

          <img src={half} width="270px" height="200px" />
          <br/>
          <button className="view"> <a  className="view" href="/half"> View More</a></button>                    <br/>





     
</div>
<div className="col-md-4  text-center">
<p className="subhead">Walling and Partitioning Blocks</p>

          <img src={wal1} width="270px" height="200px" />
          <br/>
                  
          <button  className="view"> <a  className="view" href="/wall"> View More</a></button>                    <br/>






     
</div>

<div className="col-md-4  text-center">
<p className="subhead"> Roofing Tiles </p>

          <img src={flattop} width="270px" height="200px" />
          <br/>
          <button className="view"> <a  className="view" href="/roofing"> View More</a></button>                    <br/>





     
</div>

<div className="col-md-4  text-center" style={{marginTop:"5%"}}>
<p className="subhead"> Suspended Floor Units </p>

          <img src={sp0} width="270px" height="200px" />
          <br/>
          <button className="view"> <a  className="view" href="/suspend"> View More</a></button>                    <br/>





     
</div>

</div>
<br/>
                    <br/><br/>
                    <br/>

      </div>
    </>





    )
}
export default Suspend;