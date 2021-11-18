import React from "react";
import Fade from "react-reveal/Fade";

const theme = {
    bold: {
        bg: " bg-theme-yellow-F49F0A ",
        text: " text-theme-white-classic ",
        border: "",
    },
    light: {
        bg: " bg-transparent ",
        text: " text-theme-yellow-F49F0A ",
        border: " border-4 border-theme-yellow-F49F0A "
    }
}

function getTheme(selected) {
    switch (selected) {
        case "light":
            return theme.light;

        default:
            return theme.bold;
    }
}

class Button extends React.Component {
    render(props) {
        let selectedTheme = getTheme(this.props.mode);

        return <Fade left={true}  duration={500} delay={500} distance="30px">
            <a href={ "" + this.props.href }>
                <div type="button" className={"flex rounded-full py-2 xl:py-4 w-auto transform z-40 hover:scale-125 duration-150 hover:-rotate-6" + selectedTheme.bg + selectedTheme.border }>
                    <span className={"flex-1 text-center my-auto text-white uppercase text-2xl px-5" + selectedTheme.text }>{ this.props.text }</span>
                </div>
            </a>
        </Fade>;
    }
}

export default Button;