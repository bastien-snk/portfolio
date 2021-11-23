import React from "react";
import playvideo from "../../img/play-video.svg";
import pausevideo from "../../img/pause-video.svg";

class Video extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {playing: false, hover: false};
        this.change = this.change.bind(this);
        this.toggleHover = this.toggleHover.bind(this);
        this.untoggleHover = this.untoggleHover.bind(this);
        this.vidRef = React.createRef();
    }

    componentDidMount = () => {
        this.playVideo();
    };

    componentWillUnmount = () => {
        this.pauseVideo();
    };


    playVideo() {
        // You can use the play method as normal on your video ref

        console.log("play");
        this.vidRef.current.play();
        this.setState({playing: true});
    };

    pauseVideo = () => {
        // Pause as well
        this.vidRef.current.pause();
        this.setState({playing: false});
    };

    change() {
        if (!this.state.playing) {
            this.playVideo();
        } else {
            this.pauseVideo();
        }
    }

    toggleHover() {
        this.setState({hover: true});
    }

    untoggleHover() {
        this.setState({hover: false});
    }

    getHover() {
        if (!this.state.hover && this.state.playing) {
            return "hidden";
        }
        return "";
    }


    componentDidMount() {
        console.log(document.getElementById("video-" + this.props.name));

        document.getElementById("video-" + this.props.name)
            .addEventListener('loadeddata', function () {
                console.log("PLAY");
                this.playVideo();
            }, false);
    }

    render = () => {
        return (
            <div onClick={this.change}>
                <video
                    className="rounded-2xl"
                    id={"video-" + this.props.name}
                    ref={this.vidRef}
                    src={this.props.src}
                    type="video/mp4"
                    onLoad={this.playVideo}
                    muted={this.props.muted}
                    poster={this.props.poster}
                />

                <div
                    className="absolute bottom-0 flex h-full w-full"
                    onMouseOver={this.toggleHover}
                    onMouseLeave={this.untoggleHover}
                >
                    <div className="justify-center self-center mx-auto">
                        <img
                            className={"mx-auto justify-center z-50 " + this.getHover()}
                            src={!this.state.playing ? playvideo : pausevideo}
                            srcSet={!this.state.playing ? playvideo : pausevideo}
                            width="59"
                            height="59"
                            alt=""
                            onClick={this.pauseVideo}
                        />
                    </div>
                </div>
            </div>
        );
    };
}

export default Video;