import React, {Component} from 'react';

export class Cursor extends Component {

    test = false;

    onMouseMove(e) {
        if(!this.test) return;
        let cursor = document.querySelector("#cursor");
        cursor.setAttribute("style", "top: " + (e.pageY - this.props.width) + "px; left: " + (e.pageX - this.props.width) + "px;");
    }

    componentDidMount() {
        if(!this.test) return;
        window.addEventListener('mousemove', e => this.onMouseMove(e));
    }

    componentWillUnmount() {
        if(!this.test) return;
        window.removeEventListener('mousemove', e => this.onMouseMove(e));
    }

    render(props) {


        return this.test ?

            <div className="xl:cursor-none xl:hover:cursor-none">
                <div id="cursor" className="scale-0 xl:scale-100 absolute w-5 h-5 border-1 border-theme-white-classic rounded-full z-30 transform duration-200 ease-out " style={{display: "none"}}></div>

                {this.props.children}
            </div>
            :
            <div>
                {this.props.children}
            </div>
    }
}