import {Component} from "react";
import ExpBloc from './ExpBloc';


class Experience extends Component{

    render(){
        return(
            <div>
                <h2>Experiences</h2>
                <ExpBloc name={"IUT Robert Schumann"} desc={"2 années de DUT Informatique (2019-2021)"}/>
                <ExpBloc name={"Pizzeria L'Arc Des Princes"} desc={"Job d'été dans une pizzeria (2015)"}/>
                <ExpBloc name={"Entreprise SOPROFEN"} desc={"Stage d'observation (2026)"}/>
                <hr/>
            </div>

        );
    }
}

export default Experience;