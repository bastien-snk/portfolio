import React from "react";

class Button extends React.Component {
    render(props) {
        return <a href={ "" + this.props.href }>
            <div type="button" className="flex bg-theme-yellow-F49F0A rounded-full w-48 h-14 my-10 transform hover:scale-125 duration-150 hover:-rotate-6">
                <span className="flex-1 uppercase text-xl text-center my-auto">{ this.props.text }</span>
            </div>
        </a>;
    }
}

export default Button;