import React from "react";
import Section from "../../components/design-system/Section";
import GitHubIcon from "../../img/projects/github.png"
import Header from "../../components/parts/Header";
import lyra from "../../img/projects/lyra.png";
import rc from "../../img/projects/rcv3.png";
import sonic from "../../img/projects/sonic.png";
import arkane from "../../img/projects/arkane.png";
import ludi from "../../img/projects/ludi.png";
import bolt from "../../img/projects/bolt.png";
import transition from "../../img/transitions/portfolio/1.png";
import {Footer, mode} from "../../components/parts/Footer";
import {Cursor} from "../../animations/Cursor";

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

const projects = [
    {
        id: 1,
        name: 'LyraMC',
        type: projectTypes.PERSONNAL,
        desc: 'Développement d\'une plateforme de jeux compétitifs en équipe dans le but de devenir indépendant. Apprentissage continu, beaucoup de connaissances enmagasinées...',
        repo: 'https://github.com/LyraMC',
        img: lyra,
    },
    {
        id: 2,
        name: 'RCV3',
        type: projectTypes.PERSONNAL,
        desc: 'Site web du plus grand tournoi e-Sportif d\'un jeu-vidéo (1000€ de cashprize). Développement de toutes les fonctionnalités Back-End et mise en place du VPS + sécurisation du site contre les injections SQL...',
        repo: null,
        img: rc,
    },
    {
        id: 3,
        name: 'SonicTab',
        type: projectTypes.OPEN_SOURCE,
        desc: 'API permettant aux développeurs de plugins Bukkit / Spigot de créer des TabList customisées facilement et rapidement avec un système de grille 2D.',
        repo: 'https://github.com/rootxls/SonicTab',
        img: sonic,
    },
    {
        id: 4,
        name: 'ArkaneMC',
        type: projectTypes.PERSONNAL,
        desc: 'Serveur Factions en ligne. Développement du Site-Web vitrine ainsi que de la boutique du serveur. Création d’API Rest communiquant avec MongoDB.',
        repo: 'https://github.com/ArkaneMC',
        img: arkane,
    },
    {
        id: 5,
        name: 'Opération Archéo',
        type: projectTypes.PROFESSIONNAL.STAGE,
        desc: 'Site web permettant de générer des scénarios complexes et aléatoires pour le jeu de société Opération Archéo.',
        repo: null,
        img: ludi,
    },
    {
        id: 6,
        name: 'Portfolio',
        type: projectTypes.OPEN_SOURCE,
        desc: 'Le Site-Web que vous consultez actuellement.',
        repo: 'https://github.com/rootxls/portfolio-react',
        img: bolt,
    }
];

function ProjectCard({project}) {
    return <div className="flex flex-col text-theme-white-glass text-center project-bg rounded-2xl h-full transform scale-75">
        <img
            className="mx-auto -mt-28 rounded-full border-4 project-bg"
            src={ project.img }
            srcSet={ project.img }
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
            <a href={ "/project/" + project.id }>
                <div type="button" className="flex project-button rounded-full h-24 w-90 my-10 transform hover:scale-125 duration-150 hover:-rotate-6">
                    <span className="flex-1 uppercase text-4xl text-center my-auto font-bold bg-clip-text text-transparent bg-gradient-to-br from-theme-white-glass to-theme-gray-200">
                        VOIR PLUS
                    </span>
                </div>
            </a>
            <a href={ project.repo? project.repo : "" } className="self-center">
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
            <Cursor width={5} height={5}>
                <div className="bg-theme-gray-150 min-w-screen min-h-screen">
                    <Header />
                    <Section name="🖥️ Portfolio" id="portfolio" />

                    <div className="pt-28 justify-self-center grid lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-10 mx-auto w-10/12">
                        {projects.map(project =>
                            <div key={projects.indexOf(project)} className="justify-self-center">
                                <ProjectCard project={project} />
                            </div>)
                        }
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
            </Cursor>
        );
    }
}
