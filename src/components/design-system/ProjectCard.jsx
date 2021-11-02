import React from "react";
import GitHubIcon from "../../img/github.png"

class ProjectCard extends React.Component {
    render(props) {
        return <div className="flex flex-col text-theme-white-glass text-center project-bg rounded-2xl h-full">
            <img
                className="mx-auto -mt-28 rounded-full border-4 project-bg"
                src={ "img/projects/" + this.props.img }
                srcSet={ "img/projects/" + this.props.img }
                width="229"
                height="229"
                alt={ this.props.name }
            />

            <h1 className="font-bold text-6xl project-button rounded-2xl mt-5 py-4 mx-8 justify-center">
                <p className="text-transparent bg-clip-text bg-gradient-to-br from-theme-white-glass to-theme-white-classic">
                    { this.props.name }
                </p>
            </h1>
            <div className="flex-1 mx-8">
                <h2 className="text-5xl mt-2 tracking-wider">{ this.props.type.name }</h2>
                <p className="text-3xl mt-8 bg-clip-text text-transparent bg-gradient-to-br from-theme-white-glass to-theme-gray-50">
                    { this.props.desc }
                </p>
            </div>

            <div className="self-center gap-x-12 flex bottom-0">
                <a href={ "" }>
                    <div type="button" className="flex project-button rounded-full h-24 w-90 my-10 transform hover:scale-125 duration-150 hover:-rotate-6">
                        <span className="
                            flex-1 uppercase text-4xl text-center my-auto font-bold
                            bg-clip-text text-transparent bg-gradient-to-br from-theme-white-glass to-theme-gray-200">
                            VOIR PLUS
                        </span>
                    </div>
                </a>
                <a href={ this.props.repo? this.props.repo : "" } className="self-center">
                    <img
                        className="z-40 transform hover:scale-125 duration-150 hover:-rotate-6"
                        src={ GitHubIcon }
                        srcSet={ GitHubIcon }
                        width="100%"
                        height="100%"
                        alt="See repo on GitHub"
                    />
                </a>
            </div>

        </div>;
    }
}

export default ProjectCard;