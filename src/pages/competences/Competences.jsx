import Header from '../../components/parts/Header.jsx';
import { Doughnut, Pie, ChartProps } from 'react-chartjs-2';
import {Footer, mode} from "../../components/parts/Footer";
import Section from "../../components/design-system/Section";

function Competences() {
    return (
        <div className="bg-theme-gray-200 min-w-screen min-h-screen">
            <Header />
            <Section name="🔧 Compétences" id="competences" />

            <div>

            </div>

            {/*<div className="w-2/12 h-2/12 text-theme-white-classic">
                <Doughnut
                    options={{
                        plugins: {
                            title: {
                                display: false,
                                text: 'Custom Chart Title'
                            }
                        }
                    }}
                    data={{
                        labels: ["React Native", "Android"],
                        datasets: [
                            {
                                data: [50,50],
                                backgroundColor: ['#D18A0C', '#F6AA28'],
                                borderWidth: 0,
                            },
                        ],
                    }}


                />
            </div>*/}

            <Footer selectedMode={mode.DARK} />
        </div>
    );
}

export default Competences;
