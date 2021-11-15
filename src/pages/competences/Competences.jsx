import Header from '../../components/parts/Header.jsx';
import { Doughnut, Pie, ChartProps } from 'react-chartjs-2';
import {Footer, mode} from "../../components/parts/Footer";
import Section from "../../components/design-system/Section";
import transition from "../../img/transitions/competences/1.png";
import React from "react";
import {Cursor} from "../../animations/Cursor";

const competences = [
    {
        title: "Languages",
        listName: "languages",
        chartName: "Répartition du temps de développement",
        text: <p className="">
            J'ai des connaissances dans <b>divers languages de développement informatique. </b>
            Ce qui permet d'être <b>polyvalent</b> et de répondre à plusieurs types de besoins.
            J'aime plutôt les <TechnicalLanguage text="languages orientés objets" /> <Parenthesis text="comme la plupart de ceux sur le marché" />,
            mais surtout j'aime les <TechnicalLanguage text="languages à type fort" /> car cela permet de repérer les erreurs dans le code au plus tôt et
            d'avoir une vision du code plus concise.
        </p>,
        known: [
            {
                hex: '#DF754B',
                percent: 60,
                name: "Java",
            },
            {
                hex: '#376FA0',
                percent: 10,
                name: "Python",
            },
            {
                hex: '#F7DF1E',
                percent: 25,
                name: "JavaScript",
            },
            {
                hex: '#E44D26',
                percent: 20,
                name: "HTML / CSS",
            },
            {
                hex: '#777BB3',
                percent: 30,
                name: "PHP",
            },
        ],
        wantToLean: [
            {
                name: "Ruby"
            },
            {
                name: "Swift"
            },
        ],
        img: "",
    },
    {
        title: "Bases de données",
        listName: "Systèmes de Gestion de Bases de Données",
        chartName: "Répartition du temps d'utilisation des SGBD",
        text: <p className="">
            Je suis capable d’utiliser un <b>Système de Gestion de Bases de données (SGBD)</b> et créer un <TechnicalLanguage text="Schéma de données" />,
            que ce soit <TechnicalLanguage text="relationnel ou orienté documents / objets. " />
            Cependant je préfère utiliser un <b>SGBD</b> orienté documents car la visualisation des données est plus simple et ce système ne nécessite pas une conception de modèle relationnel en plus de la structure objet.
        </p>,
        known: [
            {
                hex: "#E48E00",
                percent: 38,
                name: "MySQL",
            },
            {
                hex: '#002B64',
                percent: 33,
                name: "MariaDB",
            },
            {
                hex: '#55AC4B',
                percent: 14,
                name: "MongoDB",
            },
            {
                hex: '#D82C20',
                percent: 14,
                name: "Redis",
            },
        ],
        wantToLean: [
            {
                name: "Firebase"
            },
        ],
        img: "",
    },
    {
        title: "Frameworks",
        listName: "Systèmes de Gestion de Bases de Données",
        chartName: "Répartition du temps d'utilisation des Frameworks",
        text: <p className="">
            Au cours de mon expérience, j'ai appris à utiliser divers <TechnicalLanguage text="Frameworks" />,
            que ce soit dans le <TechnicalLanguage text="Back-End " />
            <Parenthesis text="partie que l’utilisateur ne voit pas, mais qui réalise des actions sur un site ou une application" />
            {" ou le "}
            <TechnicalLanguage text="Front-End " />
            <Parenthesis text="Éléments visibles et accessibles directement sur l'interface" />
            {" et ceci peu importe dans le type de projet (Site, Application...). "}
            Les <TechnicalLanguage text="Frameworks" /> qui me correspondent sont ceux les plus flexible.
        </p>,
        known: [
            {
                hex: "#61DAFB",
                percent: 33,
                name: "React",
            },
            {
                hex: '#16BDCA',
                percent: 40,
                name: "TailwindCSS",
            },
            {
                hex: '#EAEAEA',
                percent: 40,
                name: "Symfony",
            },
            {
                hex: '#6F44A4',
                percent: 14,
                name: "Bootstrap",
            },
            {
                hex: '#0868AC',
                percent: 14,
                name: "jQuery",
            },
        ],
        wantToLean: [
            {
                name: "Angular"
            },
            {
                name: "Ruby On Rails"
            },
            {
                name: "Django"
            },
            {
                name: "Nuxt"
            },
        ],
        img: "",
    },
];

function TechnicalLanguage({text}) {
    return <p className="inline text-theme-yellow-F49F0A">{text}</p>
}

function Parenthesis({text}) {
    return <p className="inline text-sm text-theme-gray-50">({text})</p>
}

function List({list}) {
    return <ul className="list ml-4 grid grid-cols-1 md:grid-cols-2">
        {
            list.map(element =>
                <li key={list.indexOf(element.name)}>{" "}<p className="text-theme-white-classic ml-2">{element.name}</p></li>
            )
        }
    </ul>
}

function Competences() {
    let test = true;
    return (
        <Cursor width={5} height={5}>
            <div className="bg-theme-gray-200 min-w-screen min-h-screen">
                <Header />
                <Section name="🔧 Compétences" id="competences" />

                <div className="flex flex-col mx-auto gap-y-40 py-32 w-9/12 font-montserrat">
                    {
                        competences.map(competence =>
                            <div key={competence.title} className={["justify-center flex flex-col-reverse gap-x-16 ", competences.indexOf(competence) %2 == 0 ? " lg:flex-row " : " lg:flex-row-reverse " ]}>
                                <div className="w-60 h-60 mt-10 lg:mt-0 lg:w-80 lg:h-80 xl:w-[128px] xl:h-[128px] my-auto mx-auto">
                                    <Doughnut
                                        options={{
                                            plugins: {
                                                title: {
                                                    display: true,
                                                    text: competence.chartName,
                                                }
                                            }
                                        }}
                                        data={{
                                            labels: competence.known.map(known => known.name),
                                            datasets: [
                                                {
                                                    data: competence.known.map(known => known.percent),
                                                    backgroundColor: competence.known.map(known => known.hex),
                                                    borderWidth: 0,
                                                },
                                            ],
                                        }}
                                    />
                                </div>

                                <div key={competences.indexOf(competence)} className="text-theme-white-classic justify-center xl:w-6/12">
                                    <h1 className="font-bold text-3xl lg:text-4xl text-theme-yellow-F49F0A mb-9">{competence.title}</h1>
                                    <p className="text-justify">{competence.text}</p>

                                    <p className="mt-7"><u>Voici les {competence.listName} que je sais utiliser:</u></p>
                                    <List list={competence.known} />


                                    <p className="mt-7"><u>Voici les {competence.listName} que j'aimerai apprendre utiliser:</u></p>
                                    <List list={competence.wantToLean} />
                                </div>
                            </div>
                        )
                    }
                </div>

                <img
                    className="inset-x-0 bottom-0 z-40 lg:mt-6 transform rotate-180"
                    src={transition}
                    srcSet={transition}
                    width="100%"
                    height="100%"
                    alt=""
                />
                <Footer selectedMode={mode.DARK} />
            </div>

        </Cursor>
    );
}

export default Competences;
