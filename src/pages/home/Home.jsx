import Header from '../../components/parts/Header.jsx'
import IDE, {calculateAge, Variable, wordSpacing} from "../../components/IDE";
import transitionTop from '../../img/transitions/home/1.png';
import Apropos from "./sections/Apropos";
import React from "react";
import Button from "../../components/design-system/Button";
import {Footer, mode as FooterMode} from "../../components/parts/Footer";
import {Month} from "../experience/Experience";

const presentation = {
    iam: "Je suis",
    name: "Bastien",
    text: [
        "DÉVELOPPEUR",
        "FRONT-END",
        "BACK-END",
    ]
};

const ideInformations = {
    jobClassName: "Developer",
    birthdate: new Date(2001, Month.SEPTEMBER, 20),
    location: "“📍 Perpignan, France”",
    degree: true,
    custom: [],
};

function CodeElement(props) {
    let style = "text-theme-gray-50 font-fira-code my-auto text-sm xl:text-xl mx-2";

    if(props.closing) {
        return <p className={ style }>{ "</" + props.balise + ">" }</p>
    } else if(props.selfClosing) {
        return <p className={ style }>{ "<" + props.balise + " />" }</p>
    } else {
        return <p className={ style }>{ "<" + props.balise + ">" }</p>
    }
}

function Home() {
    return (
        <div>
            <div className="bg-theme-gray-250 min-w-screen min-h-screen mx-auto">
                <Header />
                <div className="flex flex-col lg:flex-row text-theme-white-classic justify-center xl:justify-around mt-12 lg:mt-40 z-30 relative">

                    {/*
                    TODO
                        center presentation
                        add ombre rounds + ide + header
                        gap-x IDE et texte
                        regler problème header en dehors de la div
                    */}
                    <div id="PRESENTATION" className={"my-auto justify-self-center self-center z-30"}>

                        <div id="iam" className="flex flex-row">
                            <CodeElement balise="p" closing={false} />
                            <p className="text-5xl">{ presentation.iam }</p>
                            <CodeElement balise="p" closing={true} />
                        </div>

                        <div id="Prenom" className="flex flex-row -mb-4">
                            <CodeElement balise="h1" closing={false} />
                            <h1 className="text-theme-yellow-F49F0A font-bold text-6xl">{ presentation.name }</h1>
                            <CodeElement balise="h1" closing={true} />
                        </div>

                        <div id="Metier" className="flex flex-col mt-4">
                            <CodeElement balise="p" />

                            {presentation.text.map(line =>
                                    <span key={presentation.text.indexOf(line)} className="flex flex-row">
                                        <p className="text-4xl leading-9 ml-8">{ line }</p>
                                        <CodeElement balise="br" selfClosing={true} />
                                    </span>
                            )}

                            <CodeElement balise="p" closing={true} />
                        </div>

                        <div id="BOUTTON" className="flex flex-row mt-4">
                            <CodeElement balise="button" closing={false} />
                            <Button text="En savoir plus" href="#a-propos" />
                            <CodeElement balise="button" closing={true} />
                        </div>
                    </div>

                    <div id="IDE" className="w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12 self-center z-30">
                        <IDE
                            windowName="Bastien.dev"
                            linesIndex={true}
                            lines={
                            <div>
                                <div id="codeLine1" className=" flex flex-row">
                                    <p id="classCode" className={wordSpacing + "text-theme-dev-orange"}>class</p>
                                    <p id="classCode" className={wordSpacing + "text-theme-dev-yellow"}>{ideInformations.jobClassName}</p>
                                    <p id="classCode" className={wordSpacing + "text-theme-dev-white"}>{" {"}</p>
                                </div>
                                <br />

                                <div id="codeLine3" className=" flex flex-row">
                                    <p id="classCode" className={"text-theme-dev-orange pl-4"}>constructor</p>
                                    <p id="classCode" className={wordSpacing + "text-theme-dev-white"}>{"() {"}</p>
                                </div>

                                <Variable variableName="name" variableValue={"“Bastien S.”"} />
                                <Variable variableName="job" variableValue={"“Développeur FullStack”"} />
                                <Variable variableName="age" variableValue={ parseInt(calculateAge(ideInformations.birthdate)) } />
                                <Variable variableName="location" variableValue={ideInformations.location} />
                                <Variable variableName="degree" variableValue={ideInformations.degree} />

                                {ideInformations.custom.map(variable =>
                                    <Variable variableName={variable.name} variableValue={variable.value} />
                                )}

                                <div id="codeLine9" className="flex flex-row">
                                    <p id="classCode" className={wordSpacing + "text-theme-dev-white pl-4"}>{"}"}</p>
                                </div>
                                <br />
                                <div id="codeLine11" className="flex flex-row">
                                    <p id="classCode" className={wordSpacing + "text-theme-dev-white"}>{"}"}</p>
                                </div>
                            </div>

                        } />
                    </div>
                </div>

                <div className="hidden md:block absolute right-0 -bottom-4 sm:bottom-20 lg:top-40 xl:top-12">
                    <div className="relative float-right fixed z-0 bottom-0">
                        <div className="bg-theme-yellow-F49F0A rounded-l-full w-40 h-80 z-30"></div>
                        <div className="bg-theme-yellow-F6AA28 rounded-full w-56 h-56 absolute -left-28 -bottom-16"></div>
                        <div className="bg-theme-yellow-F7B23B rounded-full w-44 h-44 absolute -left-44 -bottom-32"></div>
                    </div>
                </div>

                <img
                    className="inset-x-0 bottom-0 z-30 lg:mt-12"
                    src={transitionTop}
                    srcSet={transitionTop}
                    width="100%"
                    height="100%"
                    alt=""
                />

            </div>
            <Apropos />
            <Footer selectedMode={FooterMode.DARK} />
        </div>
    );
}

export default Home;
