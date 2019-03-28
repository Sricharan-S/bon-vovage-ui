import React, { Component } from 'react'
import "./Weather.css"
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import moment from "moment";

class Weather extends Component {
 jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  render() {
    const imgURL = "http://openweathermap.org/img/w/";
    let weather;
    console.log(this.props.placeDetails);
    if(!isEmpty(this.props.placeDetails.weather[0].icon )){
       const sunrise = moment.unix(this.props.placeDetails.sys.sunrise).format('h:mm:ss A');
       const sunset =  moment.unix(this.props.placeDetails.sys.sunset).format('h:mm:ss A');
       const currentTime = moment.unix(this.props.placeDetails.dt).format('dddd , h:mm:ss A '); 
       weather = (
        <div className="Weather">
        <div className="card p-0">
        <div className="card-header">
            <h5>Weather</h5>
        </div>
        <div className="card-block p-3">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 weather-image p-b-2">
                <div className="detail">
                    <h3><img src={ imgURL +this.props.placeDetails.weather[0].icon+ ".png"} alt={"image not found"} /> </h3>
                    <p className="temp">{this.props.placeDetails.main.temp}<span><sup>o</sup>C</span></p>
                </div>
                <div className="country"><p>{ this.props.placeDetails.name + " " +this.props.placeDetails.sys.country }</p></div>
                <div className="country"><p>{currentTime}</p></div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                <h5>{this.jsUcfirst(this.props.placeDetails.weather[0].description)}</h5>
                  <h6>Pressure: {this.props.placeDetails.main.pressure}mb</h6>
                  <h6>Humidity: {this.props.placeDetails.main.humidity}%</h6>
                  <h6>Sunrise : {sunrise}</h6>
                  <h6>Sunset  : {sunset}</h6>
                </div>
                
            </div>
        </div>
    </div>
        </div>
      )
    }
    else {
      weather = null;
    }
    return  weather;
  }
}


const mapStateToProps = (state) => {
      return {
        placeDetails:state.weather.placeDetails
      };
}


export default connect(mapStateToProps)(Weather);


