import React from "react";
import transition from '../../img/transitions/home/experience/bottom.png';
import Section from "../../components/design-system/Section";
import Header from "../../components/parts/Header";
import IDE from "../../components/IDE";
import {Footer, mode} from "../../components/parts/Footer";

const Month = {
    JANVIER: 0,
    FEVRIER: 1,
    MARS: 2,
    AVRIL: 3,
    MAI: 4,
    JUIN: 5,
    JUILLET: 6,
    AOUT: 7,
    SEPTEMBRE: 8,
    OCTOBRE: 9,
    NOVEMBRE: 10,
    DECEMBRE: 11,
}

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
            "A",
            "B",
            "C"
        ],
    },
    {
        from: new Date(2021, Month.JANVIER),
        to: new Date(2021, Month.FEVRIER),
        job: "Développeur",
        company: "Ludiconcept",
        description: [
            "A",
            "B",
            "C"
        ],
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
            <div className="bg-theme-gray-250 ">
                <Header />
                <Section name="💼 Expérience" id="experience" />

                <div id="content" className="py-32 flex flex-row justify-center gap-x-36">
                    <div className="w-2/12">
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


                    <div className="w-4/12">
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
                                    <p className="text-theme-white-classic text-justify flex flex-col">
                                        {this.state.experience.description?.map(line => <p key={line}>{line}</p>)}
                                    </p>
                                </div>
                            }
                        />
                    </div>
                </div>

                <img
                    className="bottom-0 z-40 lg:mt-12"
                    src={transition}
                    srcSet={transition}
                    width="100%"
                    height="100%"
                    alt=""
                />
                <Footer selectedMode={mode.LIGHT} />
            </div>
        );
    }
}