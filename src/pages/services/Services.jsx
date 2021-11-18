import Header from "../../components/parts/Header";
import Section from "../../components/design-system/Section";
import React from "react";
import Button from "../../components/design-system/Button";
import siteweb from "../../img/services/site-web.png";
import mobileapp from "../../img/services/mobile-app.png";
import db from "../../img/services/db.jpg";
import hosting from "../../img/services/hosting.jpg";
import ui from "../../img/services/ui.jpg";
import {Footer, mode} from "../../components/parts/Footer";
import transition from "../../img/transitions/portfolio/1.png";
import {Cursor} from "../../animations/Cursor";
import {Parenthesis} from "../../index";
import {Slide, Fade} from "react-reveal";

const services = [
    {
        name: 'Sites Web',
        summary: <p>Je peux m'occuper du développement d'un site web responsive répondant à vos besoins <Parenthesis text="Back-End & Front-End" />.
            Ou bien effectuer la maintenance de votre site web déjà existant.
        </p>,
        href: "",
        img: siteweb,
    },
    {
        name: 'Applications mobile',
        summary: <p>
                Je suis apte à développemer une application mobile multi-plateformes (iOS & Android) vous correspondant.
        </p>,
        href: "",
        img: mobileapp,
    },
    {
        name: 'Conception et administration de Bases de données',
        summary: <p>
            Grâce à vos indications, nous pourrons concevoir un ou plusieurs Modèles conceptuels de données pour vos bases de données relationnelles
            ou bien de Schémas de données pour vos bases de données orientées documents.
        </p>,
        href: "",
        img: db,
    },
    {
        name: 'Noms de domaines et hébergement',
        summary: <p>
            Il m'est possible de rechercher des offres d'hébergement adaptées à vos besoins.
            Ainsi que l'enregistrement et configuration de vos noms de domaines, comprenant aussi l'ajout de certificats HTTPS.
            Si nécessaire, je peux aussi m'occuper du déploiement de vos sites web, services back-end.
        </p>,
        href: "",
        img: hosting,
    },
    {
        name: 'UI / UX Design',
        summary: <p>
            En plus du développement, je peux aussi m'occuper de la conception d'interfaces graphiques correspondant à vos besoins.
        </p>,
        href: "",
        img: ui,
    },
];

export function Services() {
    return (
        <Cursor width={5} height={5}>
            <div className="relative">
                <div className="bg-theme-gray-250 min-w-screen min-h-screen">
                    <Header />
                    <Section name="⚙️ Mes services" id="services" />

                    <div id="services" className="flex flex-col w-8/12 mx-auto justify-self-center">
                        {services.map(service =>
                            <div key={services.indexOf(service)} className={"justify-self-center flex flex-col gap-x-16 py-16" + (services.indexOf(service) %2 == 0 ? " xl:flex-row " : " xl:flex-row-reverse ")}>
                                <Fade left duration={500} delay={300} distance="2px">
                                    <img
                                        className={"rounded-full my-auto mx-auto"}
                                        src={ service.img }
                                        srcSet={ service.img }
                                        alt=""
                                        aria-valuetext="test"
                                        width="428"
                                        height="428"
                                    />
                                </Fade>
                                <div className="flex flex-col flex-1 mt-10">
                                    <Fade left={true} duration={500} delay={500} distance="30px">
                                        <h1 className="text-theme-yellow-F49F0A text-3xl text-center lg:text-left font-bold pb-4">{ service.name }</h1>
                                    </Fade>
                                    <Fade left={true} duration={500} delay={600} distance="30px">
                                        <p className="text-theme-white-classic text-lg">{ service.summary }</p>
                                    </Fade>

                                    <Fade left={true} duration={500} delay={300} distance="30px">
                                        <div className="justify-center flex flex-row gap-x-8 font-semibold my-10">
                                            <Button href="/contact" text="DEMANDER UN DEVIS" />
                                            <Button mode="light" href={ "/service/" + service.href} text="EN SAVOIR PLUS" />
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <Footer selectedMode={mode.DARK} />
            </div>
        </Cursor>
    );
}
