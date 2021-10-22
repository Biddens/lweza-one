import React from 'react'
import './style.css'

import wal1 from './images/wal1.png'
import wal2 from './images/wal2.png'
import wal3 from './images/wal3.png'
import wal4 from './images/wal4.png'
import './style.css'

function Walling (){

    

    return(
        
       
      <>

      <div className="container text-center cf2">
      <h4 className="roof " style={{backgroundColor:"#FF6624",padding:"10px",color:"#fff"}}>Walling and Partitioning Blocks</h4>

      <div className="row">

     
      <div className="col-md-6  text-center">
<p className="subhead"> Partioning Block </p>

          <img src={wal1} width="270px" height="200px" />
          <br/>
                    <br/>


                    <table   className="ali0 "   style={{backgroundColor:"#fff"}}>
  <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td ">6* &ensp; 4.3</td>
    <td className="td ">300</td>
    <td className="td ">100</td>
    <td className="td ">225</td>
    <td className="td ">15</td>
  </tr>
  <tr className="tr">
    <td className="td ">9* &ensp; 8.3</td>
    <td className="td ">300</td>
    <td className="td ">150</td>
    <td className="td ">225</td>
    <td className="td ">15</td>
  </tr>




  
  
  
</table>

     
     </div>
     <div className="col-md-6  text-center">
     <p className="subhead"> Corner Block </p>

     <img src={wal2} width="270px" height="200px" />
     <br/>
                    <br/>
                    <table   className="ali0"  style={{backgroundColor:"#fff"}}>
  <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td ">4.6</td>
    <td className="td ">300</td>
    <td className="td ">150</td>
    <td className="td ">115</td>
    <td className="td ">8</td>
  </tr>


  <tr className="tr">
    <td className="td ">5.6</td>
    <td className="td ">300</td>
    <td className="td ">225</td>
    <td className="td ">15</td>
    <td className="td ">8</td>
  </tr>




  
  
  
</table>


          
     
</div>

<div className="col-md-6  text-center">
<br/>
<br/>

<p className="subhead"> Selected Block </p>


<img src={wal3} width="270px" height="200px" />
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
    <td className="td "> 1.9</td>
    <td className="td ">230</td>
    <td className="td ">115</td>
    <td className="td ">75</td>
    <td className="td ">60</td>
  </tr>
  

  



  
  
  
</table>


     
</div>
<div className="col-md-6  text-center">
<br/>
<br/>

<p className="subhead"> Interlocking Block </p>


<img src={wal4} width="270px" height="200px" />
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
    <td className="td "> 6* &ensp;3.3</td>
    <td className="td ">300</td>
    <td className="td ">150</td>
    <td className="td ">115</td>
    <td className="td ">30</td>
  </tr>
  

  <tr className="tr">
    <td className="td "> 9* &ensp;5.2</td>
    <td className="td ">300</td>
    <td className="td ">225</td>
    <td className="td ">115</td>
    <td className="td ">30</td>
  </tr>

  
  <br/>
  <br/>
  <br/>

  
  
  
</table>


     
</div>



      </div>

      </div>
    </>





    )
}
export default Walling ;