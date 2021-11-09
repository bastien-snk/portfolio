import Header from "../../components/parts/Header";
import Section from "../../components/design-system/Section";
import React from "react";
import Button from "../../components/design-system/Button";
import siteweb from "../../img/services/site-web.png";
import mobileapp from "../../img/services/mobile-app.png";
import {Footer, mode} from "../../components/parts/Footer";
import transition from "../../img/transitions/portfolio/1.png";


const services = [
    {
        name: 'Sites Web',
        summary: 'Lorem ipsum dolor sit amet. Aut aliquam voluptas in odio nobis non placeat ipsa aut \n' +
            'Quis tenetur aut amet eius et expedita iste. Non voluptas nihil in deleniti dolorem eum quaerat aperiam sed sapiente nemo et enim rerum vel eaque eligendi? Qui saepe quia sed dolor natus cum nemo natus ab provident quae sit illo doloremque ut veniam dolorem sed inventore iste. Id maxime natus qui porro quia est maiores beatae quo cumque debitis.',
        href: "",
        img: siteweb,
    },
    {
        name: 'Applications mobile',
        summary: 'Lorem ipsum dolor sit amet. Aut aliquam voluptas in odio nobis non placeat ipsa aut \n' +
            'Quis tenetur aut amet eius et expedita iste. Non voluptas nihil in deleniti dolorem eum quaerat aperiam sed sapiente nemo et enim rerum vel eaque eligendi? Qui saepe quia sed dolor natus cum nemo natus ab provident quae sit illo doloremque ut veniam dolorem sed inventore iste. Id maxime natus qui porro quia est maiores beatae quo cumque debitis.',
        href: "",
        img: mobileapp,
    },
];

export function Services() {
    return (
        <div className="relative ">
            <div className="bg-theme-gray-250 min-w-screen min-h-screen">
                <Header />
                <Section name="⚙️ Mes services" id="services" />

                {/*TODO width des bouttons qui s'adapte au texte qui est dedans*/}
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
                                <h1 className="text-theme-yellow-F49F0A text-4xl font-bold pb-4">{ service.name }</h1>
                                <p className="text-theme-white-classic text-2xl">{ service.summary }</p>
                                <div className="justify-center flex flex-row gap-x-8 font-semibold">
                                    <Button href="/contact" text="PROPOSER UNE MISSION" />
                                    <Button mode="light" href={ "/service/" + service.href} text="EN SAVOIR PLUS" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer selectedMode={mode.DARK} />
        </div>
    );
}
