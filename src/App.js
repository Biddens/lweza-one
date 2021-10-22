import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// import ContactUs from './pages/Contact.js'
import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer.js'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { zhCN, enUS, esES } from '@material-ui/core/locale';
import * as locales from '@material-ui/core/locale';
import Home from './pages/Home/Home.js'
import Roofing from './pages/Roofing/roofing.js'
import Halfbricks from './pages/halfbricks/halfbricks.js'
import Walling from './pages/walling/walling.js'
import suspend from '../src/pages/suspended/suspend.js'
import Product from '../src/pages/Products/product.js'

function App() {

  const [locale, setLocale] = useState('enUS');

  return (
    <div className="App">  
        <Navbar />   
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/roofing" component={Roofing} exact/>
          <Route path="/half" component={Halfbricks} exact/>
          <Route path="/wall" component={Walling} exact/>
          <Route path="/suspend" component={suspend} exact/>
          <Route path="/products" component={Product} exact/>






 
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
