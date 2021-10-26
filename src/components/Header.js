import {Component} from "react";
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom'
import Competences from "../pages/Competences";

const hoverAnimation = "transform hover:scale-125 duration-150 hover:-rotate-6";

class Header extends Component {
    render() {
        return <div className={"flex font-montserrat pt-7 justify-center"}>
            <a href="" className={hoverAnimation}>
                <div className="flex">
                    <img
                        className=""
                        src={logo}
                        srcSet={logo}
                        width="31"
                        height="49"
                        alt=""
                    />
                    <h1 className="text-theme-yellow-F49F0A font-bold text-2xl ml-3 center mt-1">Bastien</h1>
                </div>
            </a>

            <ul className="flex ml-12 mt-2 text-theme-white-classic">
                <li className={"mr-11 " + hoverAnimation }><a href={""}>📝 À Propos</a></li>
                <li className={"mr-11 " + hoverAnimation }><a href={""}>🔧 Compétences</a></li>
                <li className={"mr-11 " + hoverAnimation }><a href={""}>💼 Expérience</a></li>
                <li className={"mr-11 " + hoverAnimation }><a href={""}>⚙️ Mes services</a></li>
                <li className={"mr-11 " + hoverAnimation }><a href={""}>🖥️ Portfolio</a></li>
                <li className={"mr-11 " + hoverAnimation }><a href={""}>✉️ Contact</a></li>
            </ul>

        </div>;
    }
}

export default Header;