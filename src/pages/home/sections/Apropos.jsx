import Section from '../../../components/design-system/Section.jsx';
import pdp from "../../../img/me.jpg";
import Button from "../../../components/design-system/Button";
import React from "react";
import transition from "../../../img/transitions/home/a-propos/BOTTOM TRANSITION.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

/*
*
* */

function Apropos() {
    return (
        <div className="bg-theme-gray-150 min-w-screen min-h-screen">
            <Section name="📝 À Propos" id="a-propos" />


                <div className="flex flex-col lg:flex-row justify-center justify-items-center xl:justify-between gap-x-24 mt-20 mx-auto">
                    <Slide left duration={500} delay={300} distance="20px">
                        <img
                            className="rounded-full border-5 border-theme-white-classic mx-auto lg:ml-10 xl:ml-48 self-center w-48 h-48 lg:w-96 lg:h-96 z-40 lg:-mt-80 xl:mt-0 xl:mb-44 2xl:mb-56"
                            src={ pdp }
                            srcSet={ pdp }
                            width="365"
                            height="365"
                            alt=""
                        />
                    </Slide>

                    <Fade left={true} duration={500} delay={500} distance="30px">
                        <div
                            id="text"
                            className="
                                mx-auto
                                font-montserrat leading-8 text-lg lg:text-2xl self-center whitespace-pre-line
                                flex flex-col gap-y-7
                                w-9/12 2xl:w-5/12 xl:mr-10 xl:mr-52 pb-10 2xl:pb-0
                                text-theme-white-classic text-justify"
                        >
                            {/*Je suis Bastien, Développeur FullStack passionné.
                        Depuis l'enfance, je suis intéressé par l'informatique et j'ai donc effectué un parcours scolaire dans ce domaine,
                        ce qui m'a apporté un diplôme.

                        En parallèle, j'ai instauré plusieurs projets personnels, ce qui m'a grandement aidé à acquérir de manière
                        autodidacte les compétences que j'ai aujourd'hui.
                        Cette expérience m'a amenée à évoluer au sein d'environnements professionnels très variés.
                        J'apprends constamment de nouveaux langages et technologies.

                        J'aime le code optimisé et propre. L'entraide est aussi quelque chose que j'affectionne, je contribue notamment
                        à des projets open-sources.

                        Je travaille en tant que Freelance en remote (distanciel) et présentiel dans certains cas.*/}
                            <p>
                                <b>👋 Bonjour !</b>
                            </p>

                            <p>
                                Je suis <p className="inline text-theme-yellow-F49F0A">Bastien</p>, <b>développeur diplômé et autodidacte.</b>
                                <br />
                                Étant passionné par l'informatique depuis l’enfance.  J'ai vite fait le choix d'un parcours scolaire dans ce domaine.
                            </p>

                            <p>
                                En parallèle j'ai mis en place plusieurs <b>projets personnels</b> qui m'ont grandement aidé à acquérir les compétences que j'ai aujourd'hui.
                                <br />
                                Cette expérience m'a amené à évoluer au sein d'<b>environnements professionnels très variés</b>. J’apprends constamment de nouveaux langages et technologies.
                            </p>

                            <p>
                                J'aime le code optimisé et propre. L’entraide est aussi quelque chose que j’affectione, je contribue notamment à des projets <b className="text-theme-yellow-F49F0A">open-sources</b>.
                            </p>

                            <p>
                                Je travaille actuellement en tant que <p className="inline text-theme-yellow-F49F0A">Freelance</p>, en distanciel et présentiel.
                            </p>


                            <Fade left={true}  duration={500} delay={500} distance="30px">
                                <div className="self-center">
                                    <Button text="VOIR LE CV" href="cv" />
                                </div>
                            </Fade>
                        </div>
                    </Fade>


                    <div className="hidden lg:block absolute xl:-left-32 lg:-left-64 -bottom-96 xl:-bottom-68 2xl:-bottom-96">
                        <div className="relative float-right fixed z-0 top-96">
                            <Slide left duration={500} delay={300} distance="20px">
                                <div className="bg-theme-yellow-F7B23B rounded-full w-40 h-40 absolute left-24 z-10"></div>
                            </Slide>
                            <Slide left duration={500} delay={350} distance="20px">
                                <div className="bg-theme-yellow-F6AA28 rounded-full w-56 h-56 absolute left-52 -bottom-36 z-20"></div>
                            </Slide>
                            <Slide left duration={500} delay={350} distance="20px">
                                <div className="bg-theme-yellow-F49F0A rounded-full w-80 h-80 absolute left-72 -bottom-24 z-30"></div>
                            </Slide>
                        </div>
                    </div>
                </div>

                <img
                    className="inset-x-0 bottom-0 z-40 lg:mt-12 xl:mt-24"
                    src={transition}
                    srcSet={transition}
                    width="100%"
                    height="100%"
                    alt=""
                />
            </div>
    );
}

export default Apropos;
