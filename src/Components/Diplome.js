import {Component} from "react";
import DipDisplay from "./DipDisplay";

class Diplome extends Component{

    render(){
        return(
            <div>
                <h3 className={"subtitle"}>Diplomes</h3>
                <div className={"diplomeDisplay"}>
                    <DipDisplay name={"Brevet"} desc={"Mention Assez Bien (Collège Jean Sturm)"}/>
                    <DipDisplay name={"Baccalauréat STI2D"} desc={"Mention Bien (Lycée Marcel Rudloff)"}/>
                </div>
            </div>
        );
    }
}

export default Diplome;