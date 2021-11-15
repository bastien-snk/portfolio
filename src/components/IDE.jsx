import {Component} from "react";

const boutton = " h-5 w-5 bg-theme-dev-gray rounded-full";
export const wordSpacing = " pr-2 ";

export function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function Variable(props) {
    let color = "";
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
        return <div className="flex flex-col min-h-full min-w-full font-montserrat z-20">
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
                {this.props.linesIndex ?
                    <div id="Lines Index" className="bg-theme-gray-100 3xl text-center w-11 rounded-bl-3xl py-3">
                        <ul>
                            {[...Array(11)].map((x, i) =>
                                <li key={i} className="">{i + 1}</li>
                            )}
                        </ul>
                    </div>
                    :
                    <></>
                }

                {/*Code moche à refaire*/}
                <div id="Code" className={["bg-theme-gray-200 w-full flex-1 p-3 ",
                    this.props.linesIndex ? " rounded-br-3xl " : " rounded-b-3xl "
                ]}>
                    { this.props.lines }
                </div>

            </div>
        </div>;
    }
}

export default IDE;