import React from "react";
import transition from '../../img/transitions/home/experience/bottom.png';
import Section from "../../components/design-system/Section";
import Header from "../../components/parts/Header";
import IDE from "../../components/IDE";
import {Footer, mode} from "../../components/parts/Footer";
import {Cursor} from "../../animations/Cursor";

export const Month = {
    JANUARY: 0,
    FEBRUARY: 1,
    MARCH: 2,
    APRIL: 3,
    MAY: 4,
    JUNE: 5,
    JULY: 6,
    AUGUST: 7,
    SEPTEMBER: 8,
    OCTOBER: 9,
    NOVEMBER: 10,
    DECEMBER: 11,
};

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function formatDate(date) {
    let str = date.toLocaleString('default', { month: 'long', year: 'numeric' });
    return setCharAt(str, 0, str.charAt(0).toUpperCase());
}

const experiences = [
    {
        displayName: "Freelancing",
        job: "Développeur",
        company: "Indépendant",
        description: [
            "En tant que développeur indépendant, je réponds à vos demandes en créant des applications web / mobile, des logiciels ou tout autre outil technique en fonction de vos besoins.",
        ],
    },
    {
        from: new Date(2021, Month.JANUARY),
        to: new Date(2021, Month.FEBRUARY),
        job: "Développeur",
        company: "Ludiconcept",
        description: [
            "Développement d'un support de jeu de société basé sur l'archéologie, avec génération aléatoire de scénarios, afin de gérer les parties du jeu en PHP (Symfony). ",
            "Mise en place d’une base de données SQL ainsi que d’un VPS sous Debian 10.",
        ],
        tech: ["MySQL", "PHP", "Symfony", "Linux", "Docker"],
    },
];

export class Experience extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {experience: experiences[0]};
        this.selectExperience = this.selectExperience.bind(this);
    }

    selectExperience(index) {
        this.setState({
            experience: experiences[index]
        });
    }

    render() {
        return (
            <Cursor width={5} height={5}>
                <div className="bg-theme-gray-250 ">
                    <Header />
                    <Section name="💼 Expérience" id="experience" />

                    <div id="content" className="py-32 flex flex-row justify-center gap-x-12 lg:gap-x-36">
                        <div className="xl:w-2/12">
                            <div id="exp-list" className="font-fira-code text-theme-white-classic text-2xl flex flex-col border-r-3 border-theme-gray-200">
                                {
                                    experiences.map(experience =>
                                        <div
                                            key={experiences.indexOf(experience)}
                                            className={[
                                                experiences.indexOf(this.state.experience) == experiences.indexOf(experience) ? " bg-theme-gray-200 text-theme-yellow-F49F0A border-b-3 border-theme-yellow-F49F0A " : " text-theme-white-classic cursor-pointer hover:bg-theme-gray-150 ",
                                                " h-14 text-center"]
                                            }
                                            onClick={(e) => this.selectExperience(experiences.indexOf(experience))}
                                        >
                                            <p>{ experience.displayName? experience.displayName : experience.company }</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="xl:w-3/12">
                            <IDE
                                windowName="Experience.pro"
                                lines={
                                    <div>
                                        <h1 className="text-theme-white-classic text-2xl">
                                            { this.state.experience.job }
                                            <b className="text-theme-yellow-F49F0A"> @{ this.state.experience.company }</b>
                                        </h1>
                                        <h2 className="text-theme-gray-50 font-semibold">
                                            {this.state.experience.from == null || this.state.experience.to == null
                                                ?
                                                <p>Actuellement</p>
                                                :
                                                <p>{formatDate(this.state.experience.from)} - {formatDate(this.state.experience.to)}</p>
                                            }
                                        </h2>
                                        <p className="text-theme-white-classic font-montserrat leading-5 flex flex-col">
                                            {this.state.experience.description?.map(line => <p className="pt-3" key={line}>{line}</p>)}

                                            {
                                                this.state.experience.tech?
                                                    <p>
                                                        <p className={"pt-3 text-theme-yellow-F49F0A"}>Technologies utilisées:</p>
                                                        <ul className="list ml-4">
                                                            {this.state.experience.tech.map(techno => <li><p className="text-theme-white-classic ml-2">{techno.toString()}</p></li>)}
                                                        </ul>
                                                    </p>
                                                :
                                                    <></>
                                            }
                                        </p>
                                    </div>
                                }
                            />
                        </div>
                    </div>

                    <img
                        className="bottom-0 z-40 mt-32"
                        src={transition}
                        srcSet={transition}
                        width="100%"
                        height="100%"
                        alt=""
                    />
                    <Footer selectedMode={mode.LIGHT} />
                </div>
            </Cursor>
        );
    }
}