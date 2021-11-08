import {Component} from "react";
import logo from '../../img/logo.svg';
import close from '../../img/close.svg';
import menu from '../../img/bars-solid.svg';

const hoverAnimation = "transform hover:scale-125 duration-150 hover:-rotate-6";

const pages = [
    {
        href: "/#a-propos",
        name: "📝 À Propos",
    },
    {
        href: "/competences",
        name: "🔧 Compétences",
    },
    {
        href: "/experience",
        name: "💼 Expérience",
    },
    {
        href: "/services",
        name: "⚙️ Mes services",
    },
    {
        href: "/portfolio",
        name: "🖥️ Portfolio",
    },
    {
        href: "/contact",
        name: "✉️ Contact",
    },
];
//TODO
// on scroll enlever menu burger
// désactiver scroll quand menu burger activé
class Header extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {menu: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        let value = !this.state.menu;

        this.setState({
            menu: value,
        });
    }

    render() {
        return <div className={"flex font-montserrat pt-7 xl:justify-center sticky top-0 z-50 shadow-inner shadow-2xl"}>
            <a id="logo" href="/" className={hoverAnimation}>
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



            {!this.state.menu ?
                <nav className="ml-12 relative">
                    <ul className="mt-2 text-theme-white-classic hidden xl:flex lg:sh">
                        {pages.map(page => <li className={"mr-11 " + hoverAnimation }><a href={page.href}>{page.name}</a></li>)}
                    </ul>
                </nav>
                :
                <></>
            }

            <div className="xl:hidden">
                <a onClick={this.toggleMenu} className={[this.state.menu ? "hidden " : "", " z-50 cursor-pointer"]}>
                    <img
                        className={"flex xl:hidden absolute right-7 top-7 " + hoverAnimation }
                        src={ menu }
                        srcSet={ menu }
                        width="31"
                        height="49"
                        alt=""
                    />
                </a>

                <div id="burger-menu" className={[!this.state.menu ? "hidden " : "", " absolute right-0 -mt-7 w-5/12 bg-theme-gray-100 shadow-l-2xl text-theme-white-classic min-h-screen p-5"]}>
                    <img
                        onClick={this.toggleMenu}
                        className="cursor-pointer"
                        src={close}
                        srcSet={close}
                        width="31"
                        height="49"
                        alt=""
                    />
                    <ul className="py-5">
                        {pages.map(page => <li className={"py-1 " + hoverAnimation }><a href={page.href}>{page.name}</a></li>)}
                    </ul>
                </div>
            </div>


        </div>;
    }
}

export default Header;