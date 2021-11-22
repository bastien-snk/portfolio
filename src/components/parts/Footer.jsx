import {social} from "../../pages/contact/Contact";
import React from "react";
import Fade from "react-reveal/Fade";

export const mode = {
    DARK: {
        background: "bg-theme-gray-250",
    },
    LIGHT: {
        background: "bg-theme-gray-150",
    }
}

export function Footer({selectedMode}) {

    let socials = Object.values(social);

    return (<div className={selectedMode.background + " text-theme-white-classic font-montserrat py-14"}>
            <hr className="mx-auto border-theme-white-classic bg-theme-white-classic border-1 w-80 rounded-full" />
            <Fade left={true} duration={1000} delay={200} distance="30px">
                <h1 className="text-xl text-center mt-4 flex justify-center gap-x-2">© 2021 - Développé par
                    <div className="transform hover:skew-y-12 transition duration-300">
                        <a href={social.GITHUB.link} className="text-theme-yellow-F49F0A cursor-none"> moi-même</a>
                    </div>
                </h1>
            </Fade>
            <div className="py-3 flex justify-center gap-x-4">
                {
                    socials.map(network =>
                        <Fade key={socials.indexOf(network)} left={true} duration={1000} delay={300 + 150 * socials.indexOf(network)} distance="30px">
                            <a href={"" + network.link}>
                                <img
                                    className={"transform hover:skew-y-12 transition duration-300 cursor-none"}
                                    src={ network.img }
                                    srcSet={ network.img }
                                    alt=""
                                    aria-valuetext="test"
                                    width="30"
                                    height="30"
                                />
                            </a>
                        </Fade>
                    )
                }
            </div>
        </div>
    );
}