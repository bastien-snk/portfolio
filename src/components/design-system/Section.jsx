import {Component} from "react";
import Fade from "react-reveal/Fade";

class Section extends Component {
    render(props) {
        return <Fade bottom duration={500} delay={300} distance="0px">
            <div className="pt-8" id={ this.props.id }>
                <h1 className="text-theme-white-classic font-montserrat text-5xl text-center ">{ this.props.name }</h1>
                <hr className="mx-auto border-theme-yellow-F49F0A bg-theme-yellow-F49F0A border-3 w-80 mt-4 rounded-full" />
            </div>
        </Fade>;
    }
}

export default Section;