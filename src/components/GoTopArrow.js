import {Component} from "react";
import arrow from '../img/arrow-top.svg';

class GoTopArrow extends Component {
    render() {
        return (
        <a href="root" className={"relative bg-transparent z-40"}>
            <img
                className="float-right m-7 absolute"
                src={ arrow }
                srcSet={ arrow }
                width="59"
                height="59"
                alt=""
            />
        </a>
        );
    }
}

export default GoTopArrow;