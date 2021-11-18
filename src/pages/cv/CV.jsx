import {Document} from "react-pdf";
import cv from "../../img/cv.png";
import Header from "../../components/parts/Header";
import React from "react";
import {Cursor} from "../../animations/Cursor";
import {Footer, mode} from "../../components/parts/Footer";
import Section from "../../components/design-system/Section";
import {Fade} from "react-reveal";

export function CV() {
    return (
        <Cursor width={5} height={5}>
            <div className="bg-theme-gray-250 ">
                <Header />
                <Section name="💼 Curriculum Vitae" id="cv" />
                <Fade left duration={500} delay={600} distance="20px">
                <img
                    className="w-full md:w-11/12 lg:w-9/12 xl:w-6/12 2xl:w-4/12 mx-auto my-16 shadow-2xl rounded-2xl"
                    src={ cv }
                    srcSet={ cv }
                    width="59"
                    height="59"
                    alt=""
                />
                </Fade>

                <Footer selectedMode={mode.DARK} />

            </div>
        </Cursor>
    );
}