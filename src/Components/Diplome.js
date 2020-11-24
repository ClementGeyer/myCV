import {Component} from "react";
import DipDisplay from "./DipDisplay";

class Diplome extends Component{

    render(){
        return(
            <div>
                <h2>Diplomes</h2>
                <DipDisplay name={"Baccalauréat STI2D (Mention Bien)"}/>
                <hr/>
            </div>
        );
    }
}

export default Diplome;