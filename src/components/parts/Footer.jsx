import {social} from "../../pages/contact/Contact";
import "@fortawesome/fontawesome-free";
import React from "react";

export const mode = {
    DARK: {
        background: "bg-theme-gray-250",
    },
    LIGHT: {
        background: "bg-theme-gray-150",
    }
}

export function Footer({selectedMode, imgPath}) {

    return (<div className={selectedMode.background + " text-theme-white-classic font-montserrat py-14"}>
            <hr className="mx-auto border-theme-white-classic bg-theme-white-classic border-1 w-80 rounded-full" />
            <h1 className="text-xl text-center mt-4">© 2021 - Développé par <a href={social.GITHUB} className="text-theme-yellow-F49F0A">moi-même</a></h1>
            <div>
                {
                    Object.values(social).map(network =>
                        <a key={network.img} href={"" + network.link}>
                            <img
                                className={"" /*+ hoverAnimation*/ }
                                src={ imgPath + "social/" + network.img }
                                srcSet={ imgPath + "social/" + network.img }
                                alt=""
                                aria-valuetext="test"
                                width="80"
                                height="80"
                            />
                        </a>

                    )}
            </div>
        </div>
    );
}