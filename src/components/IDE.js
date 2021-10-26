import {Component} from "react";

const boutton = " h-5 w-5 bg-theme-dev-gray rounded-full";
const wordSpacing = " pr-2 ";

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function Variable(props) {
    let color = "";
    console.log(typeof props.variableValue);
    switch (typeof props.variableValue) {
        case 'boolean': {
            color = "text-theme-dev-orange";
            break;
        }

        case 'string': {
            color = "text-theme-dev-green";
            break;
        }

        default: {
            color = "text-theme-dev-blue";
            break;
        }
    }

    return <div>
        <div id="codeLine4" className=" flex flex-row pl-8">
            <p id="classCode" className={"text-theme-dev-orange"}>this</p>
            <p id="classCode" className={"text-theme-dev-white"}>.</p>
            <p id="classCode" className={wordSpacing + "text-theme-dev-white"}>{ props.variableName }</p>
            <p id="classCode" className={wordSpacing + "text-theme-dev-white"}>{"="}</p>
            <p id="classCode" className={ color }>{ props.variableValue.toString() }</p>
            <p id="classCode" className={wordSpacing + "text-theme-dev-white"}>{";"}</p>
        </div>
    </div>
}

class IDE extends Component {

    render(props) {
        return <div className="flex flex-col min-h-full min-w-full font-montserrat">
            <div id="Window Controls" className="flex rounded-t-3xl bg-theme-white-classic h-12 w-full">
                <span id="Window Name" className="flex-1 justify-center text-black my-auto text-center">
                    { this.props.windowName }
                </span>

                <ul className="flex flew-row gap-1 my-auto mr-4">
                    <li className={"hover:bg-green-500 cursor-pointer" + boutton}></li>
                    <li className={"hover:bg-yellow-500 cursor-pointer" + boutton}></li>
                    <li className={"hover:bg-red-500 cursor-pointer" + boutton}></li>
                </ul>
            </div>

            <div className="flex flew-row font-fira-code leading-8">
                <div id="Lines Index" className="bg-theme-gray-100 3xl text-center w-11 rounded-bl-3xl py-3">
                    <ul>
                        {[...Array(11)].map((x, i) =>
                            <li className="">{ i + 1 }</li>
                        )}
                    </ul>
                </div>

                {/*Code moche à refaire*/}
                <div id="Code" className="bg-theme-gray-200 w-full rounded-br-3xl flex-1 p-3">
                    <div id="codeLine1" className=" flex flex-row">
                        <p id="classCode" className={wordSpacing + "text-theme-dev-orange"}>class</p>
                        <p id="classCode" className={wordSpacing + "text-theme-dev-yellow"}>Developer</p>
                        <p id="classCode" className={wordSpacing + "text-theme-dev-white"}>{" {"}</p>
                    </div>
                    <div id="codeLine2" className=" flex flex-row">
                        <p id="classCode" className={"text-transparent"}>t</p>
                    </div>
                    <div id="codeLine3" className=" flex flex-row">
                        <p id="classCode" className={"text-theme-dev-orange pl-4"}>constructor</p>
                        <p id="classCode" className={wordSpacing + "text-theme-dev-white"}>{"() {"}</p>
                    </div>

                    <Variable variableName="name" variableValue={"“Bastien S.”"} />
                    <Variable variableName="job" variableValue={"“Développeur FullStack”"} />
                    <Variable variableName="age" variableValue={ parseInt(calculateAge(new Date(2001, 9, 20))) } />
                    <Variable variableName="location" variableValue={"“📍 Perpignan, France”"} />
                    <Variable variableName="degree" variableValue={true} />

                    <div id="codeLine9" className="flex flex-row">
                        <p id="classCode" className={wordSpacing + "text-theme-dev-white pl-4"}>{"}"}</p>
                    </div>
                    <div id="codeLine10" className="flex flex-row">
                        <p id="classCode" className={"text-transparent"}>t</p>
                    </div>
                    <div id="codeLine11" className="flex flex-row">
                        <p id="classCode" className={wordSpacing + "text-theme-dev-white"}>{"}"}</p>
                    </div>
                </div>

            </div>
        </div>;
    }
}

export default IDE;