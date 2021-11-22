import React, {Component} from "react";
import ArrowLeft from "../../img/projects/arrow-left.svg";
import ArrowRight from "../../img/projects/arrow-right.svg";
import {Fade} from "react-reveal";
import Video from "./Video";

export const ContentType = {
    IMG: {

    },
    VIDEO: {

    },
};

export class Carousel extends Component {



    constructor(props, context) {
        super(props, context);
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
        this.selectImage = this.selectImage.bind(this);
        this.setLoaded = this.setLoaded.bind(this);
        this.handleImageLoaded = this.handleImageLoaded.bind(this);
        this.state = {image: 0, imageStatus: "loading"};
    }

    previousImage() {
        this.setState({image: this.state.image > 0 ? this.state.image - 1 : 0, imageStatus: this.state.image > 0 ? "loading" : "loaded"});
    }

    nextImage() {
        this.setState({
            image: this.state.image < this.props.images.length - 1 ? this.state.image + 1 : this.props.images.length - 1,
            imageStatus: "loading"
        });
    }

    selectImage(index) {
        this.setState({image: index, imageStatus: "loading"});
    }

    handleImageLoaded() {
        this.setState({ imageStatus: "loaded" });
        console.log(this.state.imageStatus);

    }

    handleVideoLoaded(index) {
        this.setState({image: index, imageStatus: "loaded" });
    }

    setLoaded() {
        this.setState({ imageStatus: "loaded" });
    }

    render() {
        return (
            <Fade bottom duration={1000} delay={400} distance="0px">
                <div id="carousel" className="relative flex flex-col aspect-h-9 aspect-w-16">
                    <Fade duration={500} delay={100}>
                        {this.props.images[this.state.image].type === ContentType.IMG ?
                            <img
                                className="z-30 rounded-2xl shadow-2xl object-cover"
                                src={ this.props.images[this.state.image].content }
                                srcSet={ this.props.images[this.state.image].content }
                                onLoad={this.handleImageLoaded}
                                alt=""
                            />
                            :

                            <div className="shadow-2xl z-30 object-cover">
                                <Video
                                    onLoad={this.handleVideoLoaded.bind(this)}
                                    src={ this.props.images[this.state.image].content }
                                    muted={true}
                                    poster={ this.props.images[this.state.image].poster }
                                />
                            </div>
                        }
                    </Fade>


                    <div className="absolute bottom-0 flex justify-between h-full w-full text-theme-white-classic">
                        <div id="previous" className="relative self-center justify-self-start z-40" onClick={this.previousImage}>
                            <img
                                className="rounded-2xl w-8 h-8"
                                src={ ArrowLeft }
                                srcSet={ ArrowLeft }
                                alt=""
                            />
                        </div>

                        <div id="next" className="relative self-center z-40" onClick={this.nextImage}>
                            <img
                                className="rounded-2xl w-8 h-8"
                                src={ ArrowRight }
                                srcSet={ ArrowRight }
                                alt=""
                            />
                        </div>

                        <div id="points" className="absolute flex-1 bottom-0 justify-self-center w-full z-40">
                            <div className="flex-1 flex justify-center gap-x-2 pb-2">

                                {this.props.images.map(img =>
                                    <div key={this.props.images.indexOf(img)} onClick={(e) => this.selectImage(this.props.images.indexOf(img))} className={["rounded-full shadow-2xl justify-self-center h-4 w-4 ", this.state.image == this.props.images.indexOf(img) ? " bg-theme-yellow-F7B23B bg-opacity-75" : " bg-theme-white-classic bg-opacity-50 hover:bg-opacity-80"]}></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}
