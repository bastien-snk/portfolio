import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/home/Home";
import Competences from "./pages/Competences";
import {Experience} from "./pages/experience/Experience";
import {Portfolio} from "./pages/portfolio/Portfolio";
import {Services} from "./pages/services/Services";
import {Contact} from "./pages/contact/Contact";

ReactDOM.render(
  <React.StrictMode>

      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={Home}  />
          <Route path="/competences" exact component={Competences} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/services" exact component={Services} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
