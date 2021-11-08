import Header from '../../components/parts/Header.jsx';
import { Doughnut, Pie, ChartProps } from 'react-chartjs-2';

function Competences() {
    return (
        <div className="bg-theme-gray-200 min-w-screen min-h-screen">
            <Header />
            <div className="w-2/12 h-2/12">
                <Doughnut
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: 'Custom Chart Title'
                            }
                        }
                    }}
                    data={{
                        labels: ["React Native", "Android"],
                        datasets: [
                            {
                                data: [10,90],
                                backgroundColor: ['#D18A0C', '#F6AA28'],
                                borderWidth: 0,
                            },
                        ],
                    }}


                />
            </div>

        </div>
    );
}

export default Competences;
