import React from "react";
import "./TrafficLight.css";


class TrafficLight extends React.Component{
constructor(){
    super();
    this.state={
        selectedLight: null
    };
}

    render(){
        console.log(this.state);
        let redExtraClass = '';
        if(this.state.selectedLight == 'red') redExtraClass = 'selected';
        let yellowExtraClass = " ";
        if(this.state.selectedLight == 'yellow') yellowExtraClass = 'selected';
        let greenExtraClass = " ";
        if(this.state.selectedLight == 'green') greenExtraClass = 'selected';

        return (
            <div>
                <div id="top"></div>
                <div id="traffic">

                <div className={"red " + redExtraClass}
                onClick={()=> this.setState ({selectedLight: 'red'})}></div>
                <div className={"yellow " + yellowExtraClass}
                onClick={()=> this.setState ({selectedLight: 'yellow'})}></div>
                <div className={"green " + greenExtraClass}
                onClick={()=> this.setState ({selectedLight: 'green'})}></div>

                </div>
            </div>
        )
    }
}

export default TrafficLight;
    



