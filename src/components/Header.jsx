import {Component} from "react";
import logo from '../img/logo.svg';
import menu from '../img/bars-solid.svg';

const hoverAnimation = "transform hover:scale-125 duration-150 hover:-rotate-6";

class Header extends Component {
    render() {
        return <div className={"flex font-montserrat pt-7 xl:justify-center sticky top-0 z-50 shadow-inner shadow-2xl"}>
            <a id="logo" href="" className={hoverAnimation}>
                <div className="flex ml-16 xl:ml-0">
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

            <nav className="ml-12 relative">
                <ul className="mt-2 text-theme-white-classic hidden xl:flex lg:sh">
                    <li className={"mr-11 " + hoverAnimation }><a href={""}>📝 À Propos</a></li>
                    <li className={"mr-11 " + hoverAnimation }><a href={""}>🔧 Compétences</a></li>
                    <li className={"mr-11 " + hoverAnimation }><a href={""}>💼 Expérience</a></li>
                    <li className={"mr-11 " + hoverAnimation }><a href={""}>⚙️ Mes services</a></li>
                    <li className={"mr-11 " + hoverAnimation }><a href={""}>🖥️ Portfolio</a></li>
                    <li className={"mr-11 " + hoverAnimation }><a href={""}>✉️ Contact</a></li>
                </ul>
            </nav>

            <a href="" className={"z-50"}>
                <img
                    className={"flex xl:hidden absolute right-7 top-7 " + hoverAnimation }
                    src={ menu }
                    srcSet={ menu }
                    width="31"
                    height="49"
                    alt=""
                />
            </a>

        </div>;
    }
}

export default Header;