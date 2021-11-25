import React from "react";

export class Page extends React.Component {

    constructor(props, context) {
        super(props, context);
    }


    componentDidMount() {
        navigator.serviceWorker.getRegistrations().then(
            function (registrations) {
                for (let registration of registrations) {
                    registration.unregister().then(r => console.log(r));
                    document.location.reload();
                }
                console.log("removed service worker");
            }
        );
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}