import {Component} from "react";
import LangueDisplay from './LangueDisplay.js';

class Langue extends Component{

    render(){
        return(
            <div>
                <h3 className={"subtitle"}>Langues</h3>
                <div className={"langueDisplay"}>
                    <LangueDisplay name="Anglais" certification="TOEIC" points="915" maxpoints="990" ratio="92.4"/>
                    <LangueDisplay name="Espagnol" certification="BAC" points="14" maxpoints="20" ratio="70"/>
                </div>
            </div>
        );
    }
}

export default Langue;