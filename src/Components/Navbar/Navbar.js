import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
import lweza from '../../pages/images/lweza.png'
function Navbar (){

  
function myFunction() {

 var Doc= document.getElementById("navbarNav");
Doc.classList.remove("show")


  // console.log("hellow123")

}
  
    return(
      <div className="container-fluid cf0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/">
        <img  className="img0" src={lweza} /></a>
      <a class="navbar-brand" href="/">Lweza Clays Ltd</a>

        <button className="navbar-toggler "      type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse"       style={{marginRight:"10px",marginTop:"7%"}} id="navbarNav">
          <ul className="nav navbar-nav ml-auto" style={{marginRight:"10px"}}>
            <li className="nav-item pad">
              <Link className="nav-link" onClick={()=>myFunction()} to="/">Home </Link>
            </li>
            <li className="nav-item pad">
            <Link className="nav-link" onClick={()=>myFunction()} to="/footer">About us </Link>
            </li>
            <li className="nav-item pad">
            <div class="dropdown">
  <button class="dropbtn">Products</button>
  <div class="dropdown-content">
    <a href="/roofing"  > Roofing Tiles</a>
    <a href="half">Half Bricks and Floor Tiles</a>
    <a href="wall">Walling and Partitioning Blocks</a>
    <a href="suspend">Suspended Floor Unit</a>

  </div>
</div>            </li>
<li className="nav-item pad">
<Link className="nav-link" onClick={()=>myFunction()} to="/footer">Map </Link>
            </li>
          
            <li className="nav-item pad">
              <Link className="nav-link"onClick={()=>myFunction()}  to="/footer">Contact us </Link>
            </li>
          
            
       
          </ul>




 
        </div></nav>

    </div>
    


    )
}
export default Navbar;


