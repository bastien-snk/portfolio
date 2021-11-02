import React from "react";
import Section from "../../components/design-system/Section";
import ProjectCard from "../../components/design-system/ProjectCard";
import Header from "../../components/parts/Header";

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
        }
    },
}

const projects = [
    {
        name: 'LyraMC',
        projectType: projectTypes.PERSONNAL,
        summary: 'Développement d\'une plateforme de jeux compétitifs en équipe dans le but de devenir indépendant. Apprentissage continu, beaucoup de connaissances enmagasinées...',
        repo: 'https://github.com/LyraMC',
        img: 'lyra.png',
    },
    {
        name: 'RCV3',
        projectType: projectTypes.PERSONNAL,
        summary: 'Site web du plus grand tournoi e-Sportif d\'un jeu-vidéo (1000€ de cashprize). Développement de toutes les fonctionnalités Back-End et mise en place du VPS + sécurisation du site contre les injections SQL...',
        repo: null,
        img: 'rcv3.png',
    },
    {
        name: 'SonicTab',
        projectType: projectTypes.OPEN_SOURCE,
        summary: 'API permettant aux développeurs de plugins Bukkit / Spigot de créer des TabList customisées facilement et rapidement avec un système de grille 2D.',
        repo: 'https://github.com/rootxls/SonicTab',
        img: 'sonic.png',
    },
    {
        name: 'ArkaneMC',
        projectType: projectTypes.PERSONNAL,
        summary: 'Serveur Factions en ligne. Développement du Site-Web vitrine ainsi que de la boutique du serveur. Création d’API Rest communiquant avec MongoDB.',
        repo: 'https://github.com/ArkaneMC',
        img: 'arkane.png',
    },
    {
        name: 'Opération Archéo',
        projectType: projectTypes.PROFESSIONNAL.STAGE,
        summary: 'Site web permettant de générer des scénarios complexes et aléatoires pour le jeu de société Opération Archéo.',
        repo: null,
        img: 'ludi.png',
    },
    {
        name: 'Portfolio',
        projectType: projectTypes.OPEN_SOURCE,
        summary: 'Le Site-Web que vous consultez actuellement.',
        repo: 'https://github.com/rootxls/portfolio-react',
        img: 'bolt.png',
    }
];

export class Portfolio extends React.Component {

    render() {
        projects.map(project => console.log(project.img));

        return (
            <div className="bg-theme-gray-150 min-w-screen min-h-screen">
                <Header />
                <Section name="🖥️ Portfolio" id="portfolio" />

                <div className="py-56 justify-self-center grid lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-40 mx-auto">
                    {projects.map(project =>
                        <div key={projects.indexOf(project)} className="w-10/12 justify-self-center">
                            <ProjectCard name={project.name} type={project.projectType} desc={project.summary} repo={project.repo} img={ project.img}  />
                        </div>
                    )
                    }

                    {/*<ProjectCard name={projects[0].name} type={projects[0].projectType} desc={projects[0].summary} repo={projects[0].repo} img={ projects[0].img}  />*/}
                </div>

            </div>
        );
    }
}


