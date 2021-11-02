import React from 'react'
import './style.css'

import zvent from './images/zvent.png'
import vanezia from './images/vanezia.png'
import torino from './images/torino.png'
import sisa from './images/sisa.png'
import malifonte from './images/malifonte.png'
import benz from './images/benz.png'
import './style.css'

function Ventilators (){

    

    return(
        
       
      <>

      <div className="container text-center cf2">
      <h4 className="roof " style={{backgroundColor:"#FF6624",padding:"10px",color:"#fff"}}>Ventilators</h4>

      <div className="row">

     
      <div className="col-md-6  text-center">
<p className="subhead"> Z-Vents </p>

          <img src={zvent} width="270px" height="200px" />
          <br/>
                    <br/>


<table  className="ali0"   style={{backgroundColor:"#fff"}}>
  <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td ">1.7</td>
    <td className="td ">220</td>
    <td className="td ">115</td>
    <td className="td ">75</td>
    <td className="td ">40</td>
  </tr>



</table>

     
     </div>
     <div className="col-md-6  text-center">
     <p className="subhead"> Vanezia </p>

     <img src={vanezia} width="270px" height="200px" />
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
    <td className="td ">1.80</td>
    <td className="td ">220</td>
    <td className="td ">115</td>
    <td className="td ">75</td>
    <td className="td ">40</td>
  </tr>

 
  
</table>


          
     
</div>
<br/>

<br/>



<div className="col-md-6  text-center">
<br/>

<br/>

<p className="subhead"> Torino </p>


<img src={torino} width="270px" height="200px" />
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
    <td className="td ">1.80</td>
    <td className="td ">220</td>
    <td className="td ">155</td>
    <td className="td ">75</td>
    <td className="td ">40</td>
  </tr>
  
  
  
</table>


     
</div>


<div className="col-md-6  text-center" >
<br/>

<br/>

<p className="subhead"> Sisa </p>


<img src={sisa} width="270px" height="200px" />
<br/>
                    <br/>
<table   className="ali0 text-center" style={{backgroundColor:"#fff"}}>
  <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td ">2.0</td>
    <td className="td ">220</td>
    <td className="td ">155</td>
    <td className="td ">75</td>
    <td className="td ">40</td>
  </tr>
  
  
</table>


     
</div>

<div className="col-md-6  text-center">
<br/>

<br/>

<p className="subhead"> Benz Vents </p>


<img src={benz} width="270px" height="200px" />
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
    <td className="td ">1.9</td>
    <td className="td ">220</td>
    <td className="td ">115</td>
    <td className="td ">75</td>
    <td className="td ">40</td>
  </tr>
  
  
  
</table>


     
</div>

<div className="col-md-6  text-center">
<br/>

<br/>

<p className="subhead"> Malifonte Vents </p>


<img src={malifonte} width="270px" height="200px" />
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
    <td className="td ">1.9</td>
    <td className="td ">220</td>
    <td className="td ">115</td>
    <td className="td ">75</td>
    <td className="td ">40</td>
  </tr>
  
  
  
</table>


     
</div>



      </div>

      </div>
    </>





    )
}
export default Ventilators;