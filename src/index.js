import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/home/Home";
import Competences from "./pages/competences/Competences";
import {Experience} from "./pages/experience/Experience";
import {Portfolio} from "./pages/portfolio/Portfolio";
import {Services} from "./pages/services/Services";
import {Contact} from "./pages/contact/Contact";
import {CV} from "./pages/cv/CV.jsx";
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import gsap from "gsap";
import {Project} from "./pages/portfolio/project/Project";

export function TechnicalLanguage({text}) {
    return <p className="inline text-theme-yellow-F49F0A">{text}</p>
}

export function Mention({name, href}) {
    return <div className="transform hover:skew-y-12 transition duration-300 inline">
        <a href={href} target="_blank" className="text-theme-yellow-F49F0A hover:underline">@{name}</a>
    </div>
}

export function List({list}) {
    return <ul className="list ml-4 grid grid-cols-1 md:grid-cols-2">
        {
            list.map(element =>
                <li key={list.indexOf(element.name)}>{" "}<p
                    className="text-theme-white-classic ml-2">{element.name}</p></li>
            )
        }
    </ul>
}


export function Parenthesis({text}) {
    return <p className="inline text-sm text-theme-gray-50">({text})</p>
}

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={Home}/>
            <Route path="/competences" exact component={Competences}/>
            <Route path="/experience" exact component={Experience}/>
            <Route path="/services" exact component={Services}/>
            <Route path="/portfolio" exact component={Portfolio}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/cv" exact component={CV}/>
            <Route path="/project/:id" exact component={Project}/>
        </Router>
        <CustomCursor
            customClass='custom-cursor'
            dimensions={30}
            fill='transparent'
            smoothness={{
                movement: 0.2,
                scale: 0.1,
                opacity: 0.2,
                strokeWidth: 20,
                strokeColor: '#FFFFF',
            }}
            targetOpacity={1}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
