import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import  { connect } from "react-redux";
import { isEmpty }  from "lodash";
class TouristChart extends Component {
  state = {
      chartData:[]
    }

  componentDidMount(){
    this.formatTourists();
  }

formatTourists = () => {
  const tourists = this.props.tourists;
  console.log(tourists);
  
  if(!isEmpty(tourists)){
    var finalArray = [];
    var regex = /^[\d]{4}$/;
    for( let i in tourists[150]){
      if(regex.test(i))
      finalArray.push([ i ,tourists[150][i] ])
    }
    console.log(finalArray);
  }
}

   options = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Tourists Response in India'
    },
    xAxis: {
        allowDecimals: false,
        title: {
          text: 'Year'
      },
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        }
    },
    yAxis: {
        title: {
            text: 'Number of Tourists'
        },
        labels: {
            formatter: function () {
                return this.value + 'k'; 
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'India',
        data: this.state.chartData
    }]
}
  render() {
    console.log(this.props.tourists)
    return (
      <div className="TouristChart">
        <HighchartsReact
         highcharts={Highcharts}
         options={this.options}
    />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tourists:state.tourists.touristsInfo
  }
}

export default connect(mapStateToProps,null)(TouristChart);
