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
  <p className="footerheading">Lweza Clays Ltd undertakes with transparency to utilize all resources to the best ability. Our workforce comprises both semi-skilled and professional staff, and is well administered to deliver maximum results with our new generation of practical ideas.</p>



  
</div>
<div className="col-md-6 text-left  ">

<h4 className="md0">Contact Us</h4>
<p className="footerheading">
Address: Off Entebbe Road (Near Recreation Center Sauna) P.O.Box 9036 Kampala - Uganda<br/> Mobile: +256 782 295323 / +256 779 655664 / +256 393 517108 (Factory)<br/> Email: lwezaclaysltd@gmail.com
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