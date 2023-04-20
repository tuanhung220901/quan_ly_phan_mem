import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";


const PieChart = ()=>{
    return (
        <HighchartsReact
        highcharts={Highcharts}
        options={{chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: '',
            align: 'left'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        credits: {
            enabled: false,
          },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Vios',
                y: 70.67,
                sliced: true,
                selected: true
            }, {
                name: 'Honda',
                y: 14.77
            },  {
                name: 'Toyota',
                y: 4.86
            }, {
                name: 'Suzuki',
                y: 2.63
            }, {
                name: 'Lexus',
                y: 1.53
            },  {
                name: 'Range Rover',
                y: 1.40
            }, {
                name: 'Mec',
                y: 3.84
            }, ]
        }]}}
        containerProps={{ className: 'w-full h-full' }}
      />
    )
}
export default PieChart;