import Header from '../components/Header.js'
import IDE from "../components/IDE";
import transition from '../img/transitions/home/1.svg';

const presentationText = [
    "DÉVELOPPEUR",
    "FRONT-END",
    "BACK-END",
];

function CodeElement(props) {
    let style = "text-theme-gray-50 font-fira-code my-auto text-xl mx-2";

    if(props.closing) {
        return <p className={ style }>{ "</" + props.balise + ">" }</p>
    } else if(props.selfClosing) {
        return <p className={ style }>{ "<" + props.balise + " />" }</p>
    } else {
        return <p className={ style }>{ "<" + props.balise + ">" }</p>
    }
}

function Home() {
    return (
        <div className="bg-theme-gray-250 min-w-screen min-h-screen mx-auto">
            <Header />
            <div className="flex flex-col lg:flex-row text-theme-white-classic justify-around mt-40">

                <div id="PRESENTATION" className={"my-auto justify-self-center self-center relative w-"}>

                    <div id="iam" className="flex flex-row">
                        <CodeElement balise="p" closing={false} />
                        <p className="text-5xl">Je suis</p>
                        <CodeElement balise="p" closing={true} />
                    </div>

                    <div id="Prenom" className="flex flex-row -mb-4">
                        <CodeElement balise="h1" closing={false} />
                        <h1 className="text-theme-yellow-F49F0A font-bold text-6xl">Bastien</h1>
                        <CodeElement balise="h1" closing={true} />
                    </div>

                    <div className="flex flex-col mt-4">
                        <CodeElement balise="p" />

                        {presentationText.map(line =>
                            <span className="flex flex-row">
                                <p className="text-4xl leading-9 ml-8">{ line }</p>
                                <CodeElement balise="br" selfClosing={true} />
                            </span>
                        )}

                        <CodeElement balise="p" closing={true} />
                    </div>

                    <div className="flex flex-row mt-4">
                        <CodeElement balise="button" closing={false} />

                        <a href="">
                            <div type="button" className="flex bg-theme-yellow-F49F0A rounded-full w-48 h-14 my-10 transform hover:scale-125 duration-150 hover:-rotate-6">
                                <span className="flex-1 uppercase text-xl text-center my-auto">En savoir plus</span>
                            </div>
                        </a>
                        <CodeElement balise="button" closing={true} />
                    </div>

                </div>

                <div id="IDE" className="w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12 self-center">
                    <IDE windowName="Bastien.dev" />
                </div>
            </div>
            <img
                className="inset-x-0 bottom-0 z-50"
                src={transition}
                srcSet={transition}
                width="100%"
                height="100%"
                alt=""
            />
        </div>
    );
}

export default Home;
