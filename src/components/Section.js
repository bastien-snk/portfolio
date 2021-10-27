import {Component} from "react";

class Section extends Component {
    render(props) {
        return <div className="pt-8" id={ this.props.id }>
            <h1 className="text-theme-white-classic font-montserrat text-5xl text-center ">{ this.props.name }</h1>
            <hr className="mx-auto border-theme-yellow-F49F0A border-3 w-80 mt-4 rounded-full" />
        </div>;
    }
}

export default Section;