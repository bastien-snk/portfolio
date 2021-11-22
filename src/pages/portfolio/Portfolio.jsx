import React from "react";
import Section from "../../components/design-system/Section";
import GitHubIcon from "../../img/projects/github.png"
import Header from "../../components/parts/Header";
import transition from "../../img/transitions/portfolio/1.png";
import {Footer, mode} from "../../components/parts/Footer";
import {Cursor} from "../../animations/Cursor";
import Slide from "react-reveal/Slide";
import Tilt from "react-tilt";
import {Month} from "../experience/Experience";

// imgs
import lyracard from "../../img/projects/lyra/card.png";
import lyrapage from "../../img/projects/lyra/page.png";
import lyra1 from "../../img/projects/lyra/1.jpg";
import lyra2 from "../../img/projects/lyra/2.jpg";
import lyra3 from "../../img/projects/lyra/3.png";
import lyra4 from "../../img/projects/lyra/4.png";
import lyra5 from "../../img/projects/lyra/5.png";
import lyra6 from "../../img/projects/lyra/6.png";

import rc from "../../img/projects/rcv3/card.png";
import rc1 from "../../img/projects/rcv3/rc2.png";
import rc2 from "../../img/projects/rcv3/trailerv3.mp4";
import rcposter from "../../img/projects/rcv3/poster.webp";

import sonic from "../../img/projects/sonic/card.png";
import arkane from "../../img/projects/arkane/card.png";
import ludi from "../../img/projects/ludiconcept/card.png";
import bolt from "../../img/projects/portfolio/card.png";
import {List, Mention, Parenthesis, TechnicalLanguage} from "../../index";
import {ContentType} from "../../components/design-system/Carousel";

const projectTypes = {
    PERSONNAL: {
        name: 'Projet personnel',
    },
    OPEN_SOURCE: {
        name: 'Projet open-source',
    },
    PROFESSIONNAL: {
        STAGE: {
            name: 'Stage',
        },
        FREELANCE: {
            name: 'Mission Freelance',
        },
    },
};

export const projects = [
    {
        name: 'LyraMC',
        pageName: 'LyraMC',
        type: projectTypes.PERSONNAL,
        from: new Date(2020, Month.MAY),
        to: null,
        desc: 'Développement d\'une plateforme de jeux compétitifs en équipe dans le but de devenir indépendant. Apprentissage continu, beaucoup de connaissances enmagasinées...',
        repo: 'https://github.com/LyraMC',
        cardimg: lyracard,
        pageimg: lyrapage,
        longdesc: <p>LyraMC est un serveur proposant des jeux à but compétitif solos et en équipes. Avec un système de classements et de clans avancé.
            Ce projet est beaucoup focalisé sur l'expérience utilisateur, le serveur possède un coté RP <Parenthesis text="jeu de rôle" /> dans le thème de la piraterie, inspiré du manga shonen <TechnicalLanguage text={"One Piece"} />.
        </p>,
        visuals: <p>
            Voici quelques visuels intéréssants du projet, comprenant des images de cartes du serveur, des jeux, ou bien de fonctionnalités en lien avec l'histoire du serveur et le thème pirate.
        </p>,
        color: "#E15554",
        textColor: "text-red-600",
        techs: [
            {
                hex: "#61DAFB",
                percent: 10,
                name: "React",
            },
            {
                hex: '#16BDCA',
                percent: 10,
                name: "TailwindCSS",
            },
            {
                hex: '#DF754B',
                percent: 70,
                name: "Java",
            },
            {
                hex: '#002B64',
                percent: 20,
                name: "MariaDB",
            },
            {
                hex: '#55AC4B',
                percent: 10,
                name: "MongoDB",
            },
            {
                hex: '#D82C20',
                percent: 10,
                name: "Redis",
            },
        ],
        competences: [
            {
                hex: '#782a90',
                percent: 25,
                name: "Travail en équipe",
            },
            {
                hex: '#6ccbdb',
                percent: 25,
                name: "Gestion de projet",
            },
            {
                hex: '#55b847',
                percent: 25,
                name: "Résolution de problèmes",
            },
            {
                hex: '#ecd715',
                percent: 25,
                name: "Rédaction de cahiers des charges",
            },
        ],
        images: [
            {
                content: lyra1,
                type: ContentType.IMG
            },
            {
                content: lyra2,
                type: ContentType.IMG
            },
            {
                content: lyra3,
                type: ContentType.IMG
            },
            {
                content: lyra4,
                type: ContentType.IMG
            },
            {
                content: lyra5,
                type: ContentType.IMG
            },
            {
                content: lyra6,
                type: ContentType.IMG
            },
        ],
    },
    {
        name: 'RCV3',
        pageName: 'Rushers Championship',
        type: projectTypes.PERSONNAL,
        from: new Date(2019, Month.AUGUST),
        to: new Date(2020, Month.MAY),
        desc: 'Site web du plus grand tournoi e-Sportif d\'un jeu-vidéo (1000€ de cashprize). Développement de toutes les fonctionnalités Back-End et mise en place du VPS + sécurisation du site contre les injections SQL...',
        repo: null,
        cardimg: rc,
        pageimg: rc,
        longdesc: <p>Le <b>Rushers Championship</b> est un tournoi en ligne sur le mode de jeu <TechnicalLanguage text="Rush" />.
            Cette compétition possède un fonctionnement très atypique car elle est basée sur un système de points, ainsi qu'un système de chapeaux dans lesquels sont classées les équipes selon leur niveau.
            Ce qui créé aussi l'engouement autour de ce projet est le cashprize, c'est la première fois que le cashprize était aussi élevé sur le jeu, celui-ci étant élevé à 450€ pour la première édition puis à 1000€ pour la troisième édition.
            L'organisation de cet événement était composée de 4 personnes qui sont <Mention name="Matthieu Hoogeboom" href="https://matthhhieu.com/" />, moi-même et 2 autres amis.
            Ce projet est en partenariat avec <Mention name="Ascentia" href="https://www.ascentia.fr/" />.
            <br />
            <p className="py-2">
                Ce tournoi à connu 3 éditions:
                <p className="flex"><p className="text-theme-yellow-F49F0A pr-1">➣</p> Rushers Championship <div className="px-1"><Parenthesis text="Première edition" /></div></p>
                <p className="flex"><p className="text-theme-yellow-F49F0A pr-1">➣</p> Winter Championship <div className="px-1"><Parenthesis text="Seconde edition" /></div></p>
                <p className="flex"><p className="text-theme-yellow-F49F0A pr-1">➣</p> Rushers Championship V3 "RCV3" <div className="px-1"><Parenthesis text="Troisième edition" /></div></p>
            </p>

            Au fur et à mesure des éditions, l'engouement communautaire ne céssait d'augmenter notamment du fait de la participation de divers influenceurs populaires.
            Tout au long du projet, l'équipe organisatrice à connu l'arrivée de nouveaux membres ainsi que des départs.
            Par la suite cette organisation deviendra <Mention name="LyraMC" href="/project/0" /> et projettera de créer sa propre plateforme de jeux.
        </p>,
        visuals: <p>
            Voici quelques visuels intéréssants du projet, comprenant des images de la maquette du site, la bande annonce du projet...
        </p>,
        color: "#E9DE2E",
        textColor: "text-yellow-300",
        techs: [
            {
                hex: "#E44D26",
                percent: 10,
                name: "HTML / CSS",
            },
            {
                hex: '#777BB3',
                percent: 30,
                name: "PHP",
            },
            {
                hex: "#E48E00",
                percent: 30,
                name: "MySQL",
            },
        ],
        competences: [
            {
                hex: '#782a90',
                percent: 25,
                name: "Travail en équipe",
            },
            {
                hex: '#6ccbdb',
                percent: 25,
                name: "Gestion de projet",
            },
            {
                hex: '#55b847',
                percent: 25,
                name: "Résolution de problèmes",
            },
            {
                hex: '#ecd715',
                percent: 25,
                name: "Rédaction de cahiers des charges",
            },
        ],
        images: [
            {
                content: rc1,
                type: ContentType.IMG,
            },
            {
                content: rc2,
                type: ContentType.VIDEO,
                poster: rcposter,
            },
        ],
    },
    {
        name: 'SonicTab',
        type: projectTypes.OPEN_SOURCE,
        desc: 'API permettant aux développeurs de plugins Bukkit / Spigot de créer des TabList customisées facilement et rapidement avec un système de grille 2D.',
        repo: 'https://github.com/rootxls/SonicTab',
        cardimg: sonic,
        longdesc: "",
    },
    {
        name: 'ArkaneMC',
        type: projectTypes.PERSONNAL,
        desc: 'Serveur Factions en ligne. Développement du Site-Web vitrine ainsi que de la boutique du serveur. Création d’API Rest communiquant avec MongoDB.',
        repo: 'https://github.com/ArkaneMC',
        cardimg: arkane,
        longdesc: "",
    },
    {
        name: 'Opération Archéo',
        type: projectTypes.PROFESSIONNAL.STAGE,
        desc: 'Site web permettant de générer des scénarios complexes et aléatoires pour le jeu de société Opération Archéo.',
        repo: null,
        cardimg: ludi,
        longdesc: "",
    },
    {
        name: 'Portfolio',
        type: projectTypes.OPEN_SOURCE,
        desc: 'Le Site-Web que vous consultez actuellement. ',
        repo: 'https://github.com/rootxls/portfolio-react',
        cardimg: bolt,
        longdesc: "",
    }
];

function ProjectCard({project}) {
    let test = true;

    return <div className="flex flex-col text-theme-white-glass text-center project-bg rounded-2xl h-full transform scale-75">
        <img
            className="mx-auto -mt-28 rounded-full border-4 project-bg"
            src={ project.cardimg }
            srcSet={ project.cardimg }
            width="229"
            height="229"
            alt={ project.name }
        />

        <h1 className="font-bold text-6xl project-button rounded-2xl mt-5 py-4 mx-8 justify-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-br from-theme-white-glass to-theme-white-classic">
                { project.name }
            </p>
        </h1>
        <div className="flex-1 mx-8">
            <h2 className="text-5xl mt-2 tracking-wider">{ project.type.name }</h2>
            <p className="text-3xl mt-8 bg-clip-text text-transparent bg-gradient-to-br from-theme-white-glass to-theme-gray-50">
                { project.desc }
            </p>
        </div>

        <div className="self-center gap-x-12 flex bottom-0">
            <a href={ "/project/" + projects.indexOf(project) } className="cursor-none">
                <div type="button" className="flex project-button rounded-full h-24 w-90 my-10 transform hover:scale-125 duration-150 hover:-rotate-6">
                <span className="flex-1 uppercase text-4xl text-center my-auto font-bold bg-clip-text text-transparent bg-gradient-to-br from-theme-white-glass to-theme-gray-200">
                    VOIR PLUS
                </span>
                </div>
            </a>

            <a href={ project.repo? project.repo : "" } className="self-center cursor-none">
                <img
                    className={["z-40 transform hover:scale-125 duration-150 hover:-rotate-6 ", project.repo != null ? "" : " hidden"] }
                    src={ GitHubIcon }
                    srcSet={ GitHubIcon }
                    width="100%"
                    height="100%"
                    alt="See repo on GitHub"
                />
            </a>
        </div>
    </div>;
}

export class Portfolio extends React.Component {

    render() {
        return (
            <div className="bg-theme-gray-150 min-w-screen min-h-screen cursor-none">
                <Header />
                <Section name="🖥️ Portfolio" id="portfolio" />

                <div className="pt-28 justify-self-center grid lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-10 mx-auto w-10/12">
                    {projects.map(project =>
                        <Tilt
                            options={{
                                reverse: false,
                                max: 8,
                                perspective: 1000,
                                scale: 1,
                                speed: 300,
                                transition: true,
                                axis: null,
                                reset: true,
                                easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                        >
                            <Slide left={true} duration={500} delay={100 + 50 * projects.indexOf(project)}>
                                <div key={projects.indexOf(project)} className="justify-self-center">
                                    <ProjectCard project={project} />
                                </div>
                            </Slide>
                        </Tilt>

                    )}
                </div>

                <img
                    className="bottom-0 z-40 mt-32 bg-theme-gray-250"
                    src={transition}
                    srcSet={transition}
                    width="100%"
                    height="100%"
                    alt=""
                />
                <Footer selectedMode={mode.DARK} />
            </div>
        );
    }
}
