import Header from "../../components/parts/Header";
import Section from "../../components/design-system/Section";
import React from "react";
import MailFocus from "../../img/contact/focus/email.svg";
import ObjetFocus from "../../img/contact/focus/objet.svg";
import NomFocus from "../../img/contact/focus/nom.svg";
import MsgFocus from "../../img/contact/focus/message.svg";
import Mail from "../../img/contact/base/email.svg";
import Objet from "../../img/contact/base/objet.svg";
import Nom from "../../img/contact/base/nom.svg";
import Msg from "../../img/contact/base/message.svg";
import github from "../../img/social/github.png";
import linkedin from "../../img/social/linkedin.png";
import malt from "../../img/social/malt.png";
import {Footer, mode} from "../../components/parts/Footer";
import {Cursor} from "../../animations/Cursor";
import {Slide, Fade} from "react-reveal";
import emailjs from "emailjs-com";

export const social = {
    GITHUB: {
        link: "https://github.com/rootxls",
        img: github,
    },
    LINKEDIN: {
        link: "https://www.linkedin.com/in/bastien-siniak/",
        img: linkedin,
    },
    MALT: {
        link: "https://www.malt.fr/profile/bastiensnk",
        img: malt,
    },
};

const utilizeFocus = () => {
    const ref = React.createRef()
    const setFocus = () => {ref.current &&  ref.current.focus()}
    return {setFocus, ref}
}

const objetMsg = [
    {
        name: "Demander un devis",
        mailName: "Demande de devis",
    },
    {
        name: "Reporter un bug vu sur le site",
        mailName: "Report de bug",
    },
    {
        name: "Autre...",
        mailName: "Demande particulière"
    }
];

function mailPattern(e) {
    e.target.value = e.target.value.match(e.target.pattern);
}

//TODO
// add focus to labels
class Field extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.inputFocus = utilizeFocus();
        this.style = "z-30 flex-1 p-3 bg-theme-gray-150 text-theme-white-classic text-2xl focus:ring-transparent focus:text-theme-yellow-F49F0A rounded-r-3xl border-0 w-full focus:shadow-yellow";
    }

    render(props) {

        return <div>
                <div className="flex flew-row align-middle font-montserrat leading-8">
                    <div id="Lines Index" className={"bg-theme-gray-100 3xl text-center w-11 rounded-l-3xl py-3 w-20 z-40 "}>

                        <img
                            className="z-40 fill-current place-self-center mx-auto"
                            src={this.props.img}
                            srcSet={this.props.img}
                            width="30px"
                            height="30px"
                            alt=""
                        />
                        <p className={"text-center " + this.inputFocus.ref.current?.focused ? "text-theme-yellow-F49F0A" : "text-theme-white-classic"}>{this.props.display }</p>
                    </div>


                    {
                        this.props.type === "textarea" ?
                            <textarea
                                id="story"
                                name={this.props.name}
                                rows="25"
                                cols="59"
                                className={ this.style + " resize-none h-64" }
                            >
                            </textarea>
                        :
                            <></>
                    }

                    {
                        this.props.type === undefined ?
                            <input
                                ref={this.inputFocus.ref}
                                onClick={this.inputFocus.setFocus}
                                type="text"
                                name={this.props.name}
                                className={ this.style + " h-18" }
                            ></input>
                        :
                            <></>
                    }

                    {
                        this.props.type === "select" ?
                            <select name={this.props.name} className={ this.style + " h-18" }>
                                {this.props.select.map(option => <option key={this.props.select.indexOf(option)} value={ option.toString() }>{ option.toString() }</option>)}
                            </select>
                        :
                            <></>
                    }

                    {
                        this.props.type === "email" ?
                            <input
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                type="email"
                                name={this.props.name}
                                className={ this.style + " h-18" }
                            >
                            </input>
                            :
                            <></>
                    }


                </div>
            </div>
    }
}

export function Contact() {

    const [error, setError] = React.useState("");

    let fields = [
        <Field
            name="email"
            display="Email"
            img={ MailFocus }
        />,
        <Field
            name="objet"
            display="Objet"
            img={ ObjetFocus }
            type="select"
            select={objetMsg.map(objet => objet.name)}
        />,
        <Field name="nom" display="Nom" img={NomFocus} />,
        <Field name="message" display="Message" img={MsgFocus} type="textarea" />
    ];

    function sendMail(e) {
        e.preventDefault();

        errorCheck: {
            console.log(e.target.values);
        }

        /*emailjs
            .sendForm("service_5gjsqlf", "template_7fcubns", e.target, "user_UcL7XHaULnLZomm3WU8fl")
            .then(res => {
                console.log("Mail sended")
            })
            .catch(error => console.log(error));*/
    }

    return (
        <div className="bg-theme-gray-250 min-w-screen min-h-screen cursor-none">
            <Header />
            <Section id="contact" name="✉️ Contact" />

            <div className="flex justify-center">
                {error != null ?
                    <p>{error}</p>
                    :
                    <></>
                }

                <form className="flex flex-col w-9/12 lg:w-7/12 xl-w-5/12 gap-y-5 py-28" onSubmit={sendMail}>
                    {fields.map(field =>
                        <Fade key={fields.indexOf(field)} left={true} duration={500} delay={100 + 50 * fields.indexOf(field)}>
                            {field}
                        </Fade>
                    )}

                    <Fade left={true} duration={500} delay={150 + 50 * fields.length}>
                        <div className="mx-auto">
                            <input
                                className="cursor-none text-theme-white-classic bg-theme-yellow-F49F0A rounded-full w-48 h-14 my-10 uppercase text-2xl place-self-center text-center my-auto transform hover:scale-125 duration-150 hover:-rotate-6"
                                type="submit"
                                value="Envoyer"
                            />
                        </div>
                    </Fade>
                </form>

            </div>
            <Footer selectedMode={mode.DARK} />
        </div>
    );
}