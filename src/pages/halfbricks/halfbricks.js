import React from 'react'
import './style.css'

import half from './images/half.png'
import half1 from './images/half1.png'
import half3 from './images/half3.png'
import half4 from './images/half4.png'
import './style.css'

function Halfbricks (){

    

    return(
        
       
      <>

      <div className="container text-center cf2">
      <h4 className="roof " style={{backgroundColor:"#FF6624",padding:"10px",color:"#fff"}}>Half Bricks and Floor Tiles</h4>

      <div className="row">

     
      <div className="col-md-6  text-center">
<p className="subhead"> Half Brick </p>

          <img src={half} width="270px" height="200px" />
          <br/>
                    <br/>


                    <table  className="ali0"   style={{backgroundColor:"#fff" }}>
  <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td ">0.90</td>
    <td className="td ">220</td>
    <td className="td ">38</td>
    <td className="td ">75</td>
    <td className="td ">60</td>
  </tr>




  
  
  
</table>

     
     </div>
     <div className="col-md-6  text-center">
     <p className="subhead"> Fire Brick </p>

     <img src={half1} width="270px" height="200px" />
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
    <td className="td ">3.5</td>
    <td className="td ">230</td>
    <td className="td ">115</td>
    <td className="td ">75</td>
    <td className="td ">120</td>
  </tr>




  
  
  
</table>


          
     
</div>
<br/>

<br/>



<div className="col-md-6  text-center">
<br/>

<br/>

<p className="subhead"> Quarry Tiles </p>


<img src={half3} width="270px" height="200px" />
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
    <td className="td "> 6x6 &ensp;0.74</td>
    <td className="td ">150</td>
    <td className="td ">150</td>
    <td className="td ">10</td>
    <td className="td ">45</td>
  </tr>
  <tr className="tr">
  <td className="td "> 8x8 &ensp;1.40</td>
    <td className="td ">200</td>
    <td className="td ">200</td>
    <td className="td ">10</td>
    <td className="td ">25</td>
  </tr>

  <tr className="tr">
    <td className="td "> 6x12 &ensp;1.40</td>
    <td className="td ">300</td>
    <td className="td ">150</td>
    <td className="td ">10</td>
    <td className="td ">23</td>
  </tr>




  
  
  
</table>


     
</div>


<div className="col-md-6  text-center" >
<br/>

<br/>

<p className="subhead"> Quarry Tiles </p>


<img src={half4} width="270px" height="200px" />
<br/>
                    <br/>
     <table   className="ali0 text-center" style={{marginLeft:"10%"}}  style={{backgroundColor:"#fff"}}>
     <tr className="tr">
    <td className="td bd">KG/Unit</td>
    <td className="td  bd">Length</td>
    <td className="td  bd">Width</td>
    <td className="td  bd">Height</td>
    <td className="td  bd">Area/M2</td>
  </tr>

  <tr className="tr">
    <td className="td "> 6x6 &ensp;0.70</td>
    <td className="td ">150</td>
    <td className="td ">150</td>
    <td className="td ">10</td>
    <td className="td ">60</td>
  </tr>
  <tr className="tr">
  <td className="td "> 5x10 &ensp;1.0</td>
    <td className="td ">250</td>
    <td className="td ">125</td>
    <td className="td ">10</td>
    <td className="td ">33</td>
  </tr>

  <tr className="tr">
    <td className="td "> 9x9 &ensp;1.8</td>
    <td className="td ">225</td>
    <td className="td ">225</td>
    <td className="td ">10</td>
    <td className="td ">19</td>
  </tr>

  <tr className="tr">
    <td className="td "> 5x12 &ensp;1.5</td>
    <td className="td ">125</td>
    <td className="td ">300</td>
    <td className="td ">10</td>
    <td className="td ">3 pcs</td>
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
export default Halfbricks;