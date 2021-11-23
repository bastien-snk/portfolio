import Slide from "react-reveal/Slide";
import pdp from "../../../img/me.jpg";
import Header from "../../../components/parts/Header";
import Section from "../../../components/design-system/Section";
import {Fade} from "react-reveal";
import {Doughnut, Bar} from "react-chartjs-2";
import {projects} from "../Portfolio";
import {Component} from "react";
import {formatDate} from "../../experience/Experience";
import ArrowLeft from "../../../img/projects/arrow-left.svg";
import ArrowRight from "../../../img/projects/arrow-right.svg";
import {Carousel} from "../../../components/design-system/Carousel";

export class Project extends Component{

    constructor(props, context) {
        super(props, context);
        this.project = projects[this.props.match.params.id];
    }

    render() {
        return(
            <div className="bg-theme-gray-250 min-w-screen min-h-screen cursor-none">
                <Header />
                <Section name={this.project.name} id="project"/>

                <div className="flex flex-col mx-auto gap-y-40 py-32 w-9/12 font-montserrat">
                    <div id="first-view" className={"justify-center flex flex-col-reverse gap-x-16 lg:flex-row"}>
                        <div id="project-image" className="w-60 h-60 lg:w-80 lg:h-80 xl:w-[128px] xl:h-[128px] mt-20 mx-auto">
                            <Fade bottom={true} duration={200} delay={500} distance="30px">
                                <img
                                    className="rounded-full border-5 border-theme-white-classic shadow-2xl mx-auto"
                                    src={ this.project.pageimg }
                                    srcSet={ this.project.pageimg }
                                    alt=""
                                />
                                <div className="text-theme-white-classic text-center mt-4">
                                    <h1 className={"font-bold text-xl lg:text-2xl " + this.project.textColor}>{this.project.pageName}</h1>
                                    {this.project.from != null && this.project.from != null ?
                                        <h2 className={"text-lg lg:text-xl text-gray-300 "}>{formatDate(this.project.from)} - {formatDate(this.project.to)}</h2>
                                        :
                                        <h2></h2>
                                    }
                                </div>
                            </Fade>
                        </div>
                        <div id="desc" className="justify-center xl:w-6/12">
                            <Fade left={true} duration={500} delay={600} distance="30px">
                                <div className="text-theme-white-classic ">
                                    <Fade left={true} duration={500} delay={500} distance="30px">
                                        <h1 className="font-bold text-3xl lg:text-4xl text-theme-yellow-F49F0A mb-7">Description du projet</h1>
                                    </Fade>
                                    <p className="text-justify pb-2">{this.project.longdesc}</p>
                                    <div className="flex justify-center">
                                        <div id="technos">
                                            <Doughnut
                                                options={{
                                                    plugins: {
                                                        title: {
                                                            display: true,
                                                            text: "Technologies utilisées",
                                                        }
                                                    }
                                                }}
                                                data={{
                                                    labels: this.project.techs.map(tech => tech.name),
                                                    datasets: [
                                                        {
                                                            data: this.project.techs.map(tech => tech.percent),
                                                            backgroundColor: this.project.techs.map(tech => tech.hex),
                                                            borderWidth: 0,
                                                        },
                                                    ],
                                                }}
                                            />
                                        </div>

                                        <div id="comps">
                                            <Doughnut
                                                options={{
                                                    plugins: {
                                                        title: {
                                                            display: true,
                                                            text: "Compétences travaillées",
                                                        }
                                                    }
                                                }}
                                                data={{
                                                    labels: this.project.competences.map(known => known.name),
                                                    datasets: [
                                                        {
                                                            data: this.project.competences.map(known => known.percent),
                                                            backgroundColor: this.project.competences.map(known => known.hex),
                                                            borderWidth: 0,
                                                        },
                                                    ],
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {this.project.visuals != null ?
                        <div id="some-visuals" className="flex gap-x-12">
                            <div id="visuel-txt" className="xl:w-6/12">
                                <Fade left={true} duration={500} delay={500} distance="30px">
                                    <h1 className="font-bold text-3xl lg:text-4xl text-theme-yellow-F49F0A mb-7">Quelques visuels</h1>
                                    <p className="text-justify text-theme-white-classic pb-2">{this.project.visuals}</p>
                                </Fade>
                            </div>

                            <div className="w-6/12 h-4/12">
                                <Carousel images={this.project.images} />
                            </div>
                        </div>
                        :
                        <></>
                    }
                    {/*<div id="some-stats" className={"justify-center flex flex-col gap-x-16 mx-auto"}>
                        <div className="mx-auto">
                            <h1 className="font-bold text-3xl lg:text-4xl text-theme-yellow-F49F0A mb-7">Quelques statistiques</h1>
                            <div className="flex justify-center">
                                <div>
                                    <Bar
                                        options={{
                                            plugins: {
                                                title: {
                                                    display: false,
                                                    text: "Technologies utilisées",
                                                }
                                            }
                                        }}
                                        data={{
                                            labels: this.project.techs.map(tech => tech.name),
                                            datasets: [
                                                {
                                                    data: this.project.techs.map(tech => tech.percent),
                                                    backgroundColor: this.project.techs.map(tech => tech.hex),
                                                    borderWidth: 0,
                                                },
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>

            </div>
        );
    }
}