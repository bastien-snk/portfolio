import React from "react";
import transition from '../../img/transitions/home/experience/bottom.png';
import Section from "../../components/design-system/Section";
import Header from "../../components/parts/Header";


export class Experience extends React.Component {

    render() {
        return (
            <div className="bg-theme-gray-250 min-w-screen min-h-screen">
                <Header />
                <Section name="💼 Expérience" id="experience" />

                <div className="flex flex-col ">

                </div>

                <img
                    className="bottom-0 z-40 lg:mt-12"
                    src={transition}
                    srcSet={transition}
                    width="100%"
                    height="100%"
                    alt=""
                />
            </div>
        );
    }
}


