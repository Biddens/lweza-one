import React from 'react'
import './style.css'

import roof1 from './images/roof1.png'
import roof2 from './images/roof2.png'
import roman from './images/roman.png'
import flattop from './images/flattop.png'
import port from './images/port.png'
import './style.css'

function Roofing (){

    

    return(
        
       
      <>

      <div className="container text-center cf2">
      <h4 className="roof " style={{backgroundColor:"#FF6624",padding:"10px",color:"#fff"}}>Roofing Tiles</h4>

      <div className="row">

     
      <div className="col-md-6">
<p className="subhead"> Merseille Tiles </p>

          <img src={roof1} width="270px" height="200px" />
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
    <td className="td ">2.6</td>
    <td className="td ">410</td>
    <td className="td ">235</td>
    <td className="td ">46</td>
    <td className="td ">16</td>
  </tr>




  
  
  
</table>

     
     </div>
     <div className="col-md-6  text-center">
     <p className="subhead"> Manganre </p>

     <img src={roof2} width="270px" height="200px" />
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
    <td className="td ">2.6</td>
    <td className="td ">410</td>
    <td className="td ">235</td>
    <td className="td ">46</td>
    <td className="td ">16</td>
  </tr>




  
  
  
</table>


          
     
</div>

<div className="col-md-6  text-center">
<br/><br/>
<p className="subhead"> Flat Top Ridges </p>


<img src={roman} width="270px" height="200px" />
<br/>
                    <br/>
     <table  style={{backgroundColor:"#fff",textAlign:"center"} } className="ali0" >
  <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td ">2.6</td>
    <td className="td ">410</td>
    <td className="td ">235</td>
    <td className="td ">46</td>
    <td className="td ">16</td>
  </tr>




  
  
  
</table>


     
</div>
<div className="col-md-6  text-center">
<br/><br/>
<p className="subhead"> Roman Tiles </p>


<img src={flattop} width="270px" height="200px" />
<br/>
                    <br/>
     <table  className="ali0"  style={{backgroundColor:"#fff"}}>
  <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td ">2.6</td>
    <td className="td ">410</td>
    <td className="td ">235</td>
    <td className="td ">46</td>
    <td className="td ">16</td>
  </tr>




  
  
  
</table>


     
</div>


<div className="col-md-6  text-center">
<br/><br/>
<p className="subhead"> Portuguese Tiles</p>


<img src={port} width="270px" height="200px" />
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
    <td className="td ">2.6</td>
    <td className="td ">410</td>
    <td className="td ">235</td>
    <td className="td ">46</td>
    <td className="td ">3.0</td>
  </tr>




  
  
  
</table>


<br/>
                    <br/><br/>
                    <br/>
</div>
      </div>

      </div>
    </>





    )
}
export default Roofing;