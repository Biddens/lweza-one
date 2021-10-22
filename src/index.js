import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { zhCN, enUS, esES } from '@material-ui/core/locale';
import { connect } from "react-redux";
import store from './store.js'
import {Provider} from"react-redux" 

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000' },
  },
}, enUS);

ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>

    </ThemeProvider>
  </React.StrictMode>
,

  document.getElementById('root')
);


reportWebVitals();
