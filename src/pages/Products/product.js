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


    <p className="fonts1">UCL products are all baked to approximately 1000 degrees centigrade and are thus fire-resistant. They are also sound and water proof and act as good heat insulators. These qualities are ensured by quality assurance testing constantly done throughout the production process. In these tests they are checked for linear shrinkage and size (every two hours), their moisture content before and after baking, water absorption, as well as composition of salts.</p>
  </div>
 




  <div className="col-md-12"style={{marginBottom:"10%"}}>


    <h3 className="text-left tl">ISO Certification</h3>
    <br/>

   < p className="fonts1">Periodic tests are made on samples sent to Uganda National Bureau of Standards and Central Materials Laboratory. All these tests ensure that all products sold are of unmatched quality, a cornerstone of UCL since obtaining ISO 9001:2000 certification in 2003. We have completed the upgrade to the ISO 9001:2008 standard.We are pleased to announce that we are now ISO 9001:2008 certified since March 2014

</p>
  </div>





  </div>

      <div className="row">




        

     
      <div className="col-md-4  text-center">
<p className="subhead">Half bricks and floor </p>

          <img src={half} width="270px" height="200px" />
          <br/>
          <button className="view"> <a  className="view" href="/half"> View More</a></button>                    <br/>





     
</div>
<div className="col-md-4  text-center">
<p className="subhead">Walling and partitioning </p>

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