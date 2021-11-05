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

class Field extends React.Component {

    constructor(props, context) {
        super(props, context);
        /*this.ref = React.createRef();*/
        /*this.setFocus = this.setFocus.bind(this);*/
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
                        this.props.type == "textarea" ?
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
                        this.props.type == undefined ?
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
                        this.props.type == "select" ?
                            <select name={this.props.name} className={ this.style + " h-18" }>
                                {this.props.select.map(option => <option value={ option.toString() }>{ option.toString() }</option>)}
                            </select>
                        :
                            <></>
                    }


                </div>
            </div>
    }
}


export function Contact() {
    return (<div className="bg-theme-gray-250 min-w-screen min-h-screen">
            <Header />
            <Section id="contact" name="✉️ Contact" />

            <div className="flex justify-center">
                <div className="flex flex-col w-9/12 lg:w-7/12 xl-w-5/12 gap-y-5 py-28">
                    <Field name="email" display="Email" img={ MailFocus } />
                    <Field name="objet" display="Objet" img={ ObjetFocus } type="select" select={["Proposition de mission", "Report de bug"]} />
                    <Field name="nom" display="Nom" img={NomFocus} />
                    <Field name="message" display="Message" img={MsgFocus} type="textarea" />

                    <input
                        className="cursor-pointer text-theme-white-classic bg-theme-yellow-F49F0A rounded-full w-48 h-14 my-10 uppercase text-2xl place-self-center text-center my-auto transform hover:scale-125 duration-150 hover:-rotate-6"
                        type="submit"
                        value="Envoyer"
                    />
                </div>
            </div>


            <form className="">

            </form>
        </div>
    );
}