import {Document} from "react-pdf";
import cv from "../../img/cv.png";
import Header from "../../components/parts/Header";
import React from "react";
import {Cursor} from "../../animations/Cursor";
import {Footer, mode} from "../../components/parts/Footer";
import Section from "../../components/design-system/Section";

export function CV() {
    return (
        <Cursor width={5} height={5}>
            <div className="bg-theme-gray-250 ">
                <Header />
                <Section name="💼 Curriculum Vitae" id="cv" />

                <img
                    className="w-4/12 h-4/12 mx-auto my-16 shadow-2xl rounded-2xl"
                    src={ cv }
                    srcSet={ cv }
                    width="59"
                    height="59"
                    alt=""
                />

                <Footer selectedMode={mode.DARK} />

            </div>
        </Cursor>
    );
}