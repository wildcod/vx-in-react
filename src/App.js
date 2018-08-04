import React, { Component } from 'react'; 
import BarGraph from './Component/Bargraph/Bargraph'
import LineGraph from './Component/LineGraph/LineGraph'
import AreaClosedGraph from './Component/AreaClosed/AreaClosed'
import DortGraph from './Component/DotGraph/DotGraph'
import { AxisLeft, AxisBottom } from '@vx/axis';  
import { genRandomNormalPoints } from '@vx/mock-data';  
import './App.css';
import PieChart from './Component/PieChart/PieChart'
import DotGraphWithToolTip from './Component/DotGraph/DotGraphWithToolTip'
import LineChart from './Component/AmChart/LineChart'

import { letterFrequency, browserUsage } from '@vx/mock-data';



const browsers = Object.keys(browserUsage[0])
  .filter(k => k !== "date")
  .map(k => ({ label: k, usage: browserUsage[0][k] }));

  const points = genRandomNormalPoints(600).filter((d, i) => {
    return i < 600;
  });


const dataSet = [
  { letter: 'A', frequency: 0.08167 },
  { letter: 'B', frequency: 0.01492 },
  { letter: 'C', frequency: 0.02782 },
  { letter: 'D', frequency: 0.04253 },
  { letter: 'E', frequency: 0.12702 },
  { letter: 'F', frequency: 0.02288 },
  { letter: 'G', frequency: 0.02015 },
  { letter: 'H', frequency: 0.06094 },
  { letter: 'I', frequency: 0.06966 },
  { letter: 'J', frequency: 0.00153 },
  { letter: 'K', frequency: 0.00772 },
  { letter: 'L', frequency: 0.04025 },
  { letter: 'M', frequency: 0.02406 },
  { letter: 'N', frequency: 0.06749 },
  { letter: 'O', frequency: 0.07507 },
  { letter: 'P', frequency: 0.01929 },
  { letter: 'Q', frequency: 0.00095 },
  { letter: 'R', frequency: 0.05987 },
  { letter: 'S', frequency: 0.06327 },
  { letter: 'T', frequency: 0.09056 },
  { letter: 'U', frequency: 0.02758 },
  { letter: 'V', frequency: 0.00978 },
  { letter: 'W', frequency: 0.0236 },
  { letter: 'X', frequency: 0.0015 },
  { letter: 'Y', frequency: 0.01974 },
  { letter: 'Z', frequency: 0.00074 }
];



// const dataSet = [
//   { frequency: 0.02406, letter: '04/23/12' },
//   { frequency: 0.06749, letter: '04/23/12' },
//   { frequency: 0.07507, letter: '04/23/12' },
//   { frequency: 0.01929, letter: '04/24/12' },
//   { frequency: 0.00095, letter: '04/24/12' },
//   { frequency: 0.05987, letter: '04/24/12' },
//   { frequency: 0.06327, letter: '04/25/12' },
//   { frequency: 0.09056, letter: '04/25/12' },
//   { frequency: 0.0236,  letter: '04/25/12' },
//   { frequency: 0.0015,  letter: '04/26/12' },
//   { frequency: 0.01974, letter: '04/26/12' },
//   { frequency: 0.00074, letter: '04/26/12' }
// ];



class App extends Component {

  state = {
    tooltipLeft:'',
    tooltipTop:'',
    tooltipData:{x:0.0,y:0.0},
    tooltipOpen:false
  }

  showTooltip = ({tooltipLeft,tooltipTop,tooltipData}) => {
    this.setState({
      tooltipLeft :tooltipLeft+290,
      tooltipTop:tooltipTop+10,
      tooltipData,
      tooltipOpen:true
    })
  }

  hideTooltip = () => {
    this.setState({
      tooltipOpen:false
    })
  }

  render() {
    const {tooltipLeft,tooltipTop,tooltipData, tooltipOpen} = this.state
    return (
      <div className="App">
         <LineChart/>
          {/* <LineGraph 
            dataSet={dataSet}
            width={500}
            height={500}
            backgroundColor={"red"}
            margin={{top:20,bottom:20,left:20 ,right:20}}
            scaleOnX='bandScale'
            scaleOnY='linearScale'
            axisColor= '#1b1a1e'
            axisLabel = '#1b1a1e'
            axisTickTextFill = 'red'
            bottomLabel='Bottom axis label'
            bottomStroke='red'
            bottomTickStroke='blue'
            bottomTickLabelProps = {{ dy: '0.25em', textAnchor: 'middle', fontFamily: 'Arial', fontSize: 12, fill: 'black' }}
            leftLabel="Left axis label"
            leftLabelProps = {{ fontSize: 12, fill: 'black' }}
            leftTickLabelProps = {{dx: "-0.25em",fill: "black",fontSize: 8,fontFamily: 'Arial'}}
        /> */}
        {/* <BarGraph 
           dataSet={dataSet}
           width={500}
           height={500}
           backgroundColor={"red"}
           margin={{top:20,bottom:20,left:20 ,right:20}}
           scaleOnX='bandScale'
           scaleOnY='linearScale'
           axisColor= '#1b1a1e'
           axisLabel = '#1b1a1e'
           axisTickTextFill = 'red'
           bottomLabel='Bottom axis label'
           bottomStroke='red'
           bottomTickStroke='blue'
           bottomTickLabelProps = {{ dy: '0.25em', textAnchor: 'middle', fontFamily: 'Arial', fontSize: 12, fill: 'black' }}
           leftLabel="Left axis label"
           leftLabelProps = {{ fontSize: 12, fill: 'black' }}
           leftTickLabelProps = {{dx: "-0.25em",fill: "black",fontSize: 8,fontFamily: 'Arial'}}
        /> */}
        {/* <AreaClosedGraph 
         dataSet={dataSet}
         width={500}
         height={500}
         backgroundColor={"red"}
         margin={{top:20,bottom:20,left:20 ,right:20}}
         scaleOnX='bandScale'
         scaleOnY='linearScale'
         axisColor= '#1b1a1e'
         axisLabel = '#1b1a1e'
         axisTickTextFill = 'red'
         bottomLabel='Bottom axis label'
         bottomStroke='red'
         bottomTickStroke='blue'
         bottomTickLabelProps = {{ dy: '0.25em', textAnchor: 'middle', fontFamily: 'Arial', fontSize: 12, fill: 'black' }}
         leftLabel="Left axis label"
         leftLabelProps = {{ fontSize: 12, fill: 'black' }}
         leftTickLabelProps = {{dx: "-0.25em",fill: "black",fontSize: 8,fontFamily: 'Arial'}}
        /> */}
        {/* <DortGraph 
        width="761" height="456"
        tooltipLeft={tooltipLeft}
        tooltipTop={tooltipTop}
        tooltipData={tooltipData}
        tooltipOpen={tooltipOpen}
        hideTooltip={this.hideTooltip}
        showTooltip={this.showTooltip}
        points = {points}
        r={2.5}
        fill={"#fff"}
        stroke={"#fff"}
        strokeWidth={1} 
        rectRx={14}
        scaleOnX='linearScale'
        scaleOnY='linearScale'
        /> */}
         {/* <PieChart
         width={1000}
         height={600}
         browsers = {browsers}
         events = {false}
         margin = {{top: 30,left: 20,right: 20, bottom: 110}}
         fillColor={"white"}
         fillLabel={"white"}
         LabeltextAnchor={"middle"}
        dy={".33em"}
        isPieSolid={false}
        innerPieRadius={120}
        /> */}
        {/* <DotGraphWithToolTip
         width={761} 
         height={456}
         points = {points}
         r={2.5}
         fill={"#fff"}
         stroke={"#fff"}
         strokeWidth={1} 
         rectRx={14}
         scaleOnX='linearScale'
         scaleOnY='linearScale'
        /> */}
      </div>
    );
  }
}

export default App;











