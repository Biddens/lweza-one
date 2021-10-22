import React from 'react'
import './style.css'

import spo from './images/sp0.png'
import spo1 from './images/sp1.png'

import './style.css'

function Suspend (){

    

    return(
        
       
      <>

      <div className="container text-center wd cf2">
      <h4 className="roof " style={{backgroundColor:"#FF6624",padding:"10px",color:"#fff"}}>Suspended Floor Unit</h4>

      <div className="row">

     
      <div className="col-md-6  text-center">
<p className="subhead"> Max Pans </p>

          <img src={spo} width="270px" height="200px" />
          <br/>
                    <br/>


                    <table className="ali0" style={{backgroundColor:"#fff"}}>
  <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td "> 4 &ensp;&ensp; 5.2</td>
    <td className="td ">300</td>
    <td className="td ">300</td>
    <td className="td ">100</td>
    <td className="td ">8</td>
  </tr>
 

  <tr className="tr">
    <td className="td "> 5 &ensp;&ensp;7.7</td>
    <td className="td ">300</td>
    <td className="td ">100</td>
    <td className="td ">125</td>
    <td className="td ">8</td>
  </tr>
  <tr className="tr">
    <td className="td "> 6 &ensp;&ensp;9.00</td>
    <td className="td ">300</td>
    <td className="td ">300</td>
    <td className="td ">150</td>
    <td className="td ">8</td>
  </tr>
  <tr className="tr">
    <td className="td ">7 &ensp;&ensp;.00</td>
    <td className="td ">300</td>
    <td className="td ">300</td>
    <td className="td ">150</td>
    <td className="td ">8</td>
  </tr>
  <tr className="tr">
    <td className="td "> 8 &ensp;&ensp;12.2</td>
    <td className="td ">300</td>
    <td className="td ">300</td>
    <td className="td ">200</td>
    <td className="td ">8</td>
  </tr>
  <tr className="tr">
    <td className="td "> 9 &ensp;&ensp;13.6</td>
    <td className="td ">300</td>
    <td className="td ">300</td>
    <td className="td ">230</td>
    <td className="td ">8</td>
  </tr>







  
  
  
</table>

     
     </div>
     <div className="col-md-6  text-center">
     <p className="subhead"> Free Span </p>

     <img src={spo1} width="270px" height="200px" />
     <br/>
                    <br/>
                    <table className="ali0"  style={{backgroundColor:"#fff"}}>
  <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td ">6.2</td>
    <td className="td ">300</td>
    <td className="td ">300</td>
    <td className="td ">100</td>
    <td className="td ">11</td>
  </tr>
  <tr className="tr">
    <td className="td ">8.9</td>
    <td className="td ">300</td>
    <td className="td ">300</td>
    <td className="td ">125</td>
    <td className="td ">11</td>
  </tr>





  
  
  
</table>



     
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