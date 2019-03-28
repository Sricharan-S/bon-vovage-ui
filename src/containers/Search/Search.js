import React,{ Component } from "react";
import { InputGroup,FormControl,Button } from "react-bootstrap";
import "./Search.css";
import {provideWeather} from "../../store/actions/weatherActions";
import { connect } from "react-redux";
import { provideTourists } from "../../store/actions/touristsActions";

class Search extends Component{

    inputHandler = (e) => {
        this.setState({
            text:e.target.value
        })
    }

    clickHandler = () => {
        this.props.provideWeather(this.state.text);
        
    }
    render(){
        return (
            <div className="Search">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><i className="fas fa-search-location"></i></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Enter place"
                    aria-label="Enter Place"
                    aria-describedby="basic-addon1"
                    onChange={ this.inputHandler }
                />
                <InputGroup.Append>
                <Button variant="outline-secondary" onClick={ this.clickHandler }>Search</Button>
                </InputGroup.Append>
            </InputGroup>
            </div>
        )
    }
}

const mapDispatchToProps = ( dispatch) => {
    return {
        provideWeather: (place) => dispatch(provideWeather(place)) ,
        provideTourists:() => dispatch(provideTourists()) 
    }
}


export default connect(null,mapDispatchToProps)(Search);