import React from 'react'
import './style.css'
import Switch from '@material-ui/core/Switch';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { OutlinedInput } from '@material-ui/core';
import {Link} from 'react-router-dom';
import map from './images/map.jpg'



function Footer (){

  const CssEmailField = withStyles({
    root: {
        '& label':{
            color: '#fafafa',
            opacity: '0.5'
        },
      '& label.Mui-focused': {
        color: '#fafafa',
      },
      '& .MuiInput-underline':{
        border: '1px solid #FAFAFA',
      },
      '& .MuiInput-underline:after': {
        border: '1px solid #FAFAFA',
        // borderBottomColor: '#fafafa',
      },
      '& .MuiInput-underline-150:after':{
        border: '1px solid #FAFAFA',
        // borderBottomColor: '#fafafa',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#fafafa',
        },
        '&:hover fieldset': {
          borderColor: '#ffffff',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ffffff',
        },
      },
    },
  })(TextField);

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    


    return(
      <>
<div className="container-fluid cf5">
<div className="row">

<div className="col-md-6 ">
  <h4 className="md0">About Us</h4>
  <p className="footerheading">Uganda Clays is leading manufacturer of quality baked clay building products in Uganda. It uses Hoffman kilns to currently provide the building materials in a brick-red color. The company’s products are categorized into roofing tiles, bricks, maxpans, quarry floor tiles and others.</p>



  
</div>
<div className="col-md-6 text-left  ">

<h4 className="md0">Contact Us</h4>
<p className="footerheading">
Factory at kajjansi, 14 kms Entebbe Road, Kajjansi
P.O.Box 3188 Kampala, Uganda
Tel: +256 312 305403 / 0392 750154
Mobile: +256 772 700255
</p>


  
</div>



<div className="col-md-6   ">

<img src={map} className="img09" />
  
</div>

  
</div>


  
</div>



<div className="container-fluid">
<div className="row">
<div className="col-md-12 copy" >
  Copyright  &copy; 2021 Lweza Clays Ltd

  
</div>
  

</div>


</div>
</>

    )
}
export default Footer;