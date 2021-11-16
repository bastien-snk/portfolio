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

const services = [
    {
        name: 'Sites Web',
        summary: <p>Développement d'un site web responsive répondant à vos besoins <Parenthesis text="Back-End & Front-End" />.
            Maintenance de votre site web déjà existant.
        </p>,
        href: "",
        img: siteweb,
    },
    {
        name: 'Applications mobile',
        summary: <p>
                Développement d'une application mobile multi-plateformes (iOS & Android) vous correspondant.
        </p>,
        href: "",
        img: mobileapp,
    },
    {
        name: 'Conception et administration de Bases de données',
        summary: <p>
            Conception de Modèles conceptuels de données pour vos bases de données relationnelles.
            Conception de Schémas de données pour vos bases de données orientées documents.
        </p>,
        href: "",
        img: db,
    },
    {
        name: 'Noms de domaines et hébergement',
        summary: <p>
            Recherche d'offres d'hébergement adaptées à vos besoins.
            Enregistrement et configuration de vos noms de domaines, ajout de certificats HTTPS.
            Déploiement de vos sites web, services back-end.
        </p>,
        href: "",
        img: hosting,
    },
    {
        name: 'UI / UX Design',
        summary: <p>
            Conception d'interfaces graphiques correspondant à vos besoins.
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
                                <img
                                    className={"rounded-full my-auto mx-auto"}
                                    src={ service.img }
                                    srcSet={ service.img }
                                    alt=""
                                    aria-valuetext="test"
                                    width="428"
                                    height="428"
                                />
                                <div className="flex flex-col flex-1 mt-10">
                                    <h1 className="text-theme-yellow-F49F0A text-3xl font-bold pb-4">{ service.name }</h1>
                                    <p className="text-theme-white-classic text-lg">{ service.summary }</p>
                                    <div className="justify-center flex flex-row gap-x-8 font-semibold my-10">
                                        <Button href="/contact" text="DEMANDER UN DEVIS" />
                                        <Button mode="light" href={ "/service/" + service.href} text="EN SAVOIR PLUS" />
                                    </div>
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
