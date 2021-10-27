import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
/*import favicon from 'img/favicon.ico';*/


ReactDOM.render(
  <React.StrictMode>
      {/*<link rel="icon" href={ favicon } />*/}
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
