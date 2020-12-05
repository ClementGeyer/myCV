import React, {Component} from "react";
import Experience from './Experience';
import ProgLang from './ProgLang';
import Profile from './Profile';
import Contact from './Contact';
import Diplome from './Diplome';
import Software from './Software';
import Langue from './Langue';
import Projects from './Projects';

class Content extends Component{

    render(){
        return(
            <div>
                <Profile/>
                <div className={"certifDisplay"}>
                    <h2 className={"titleBlue"}>Certifications</h2>
                    <Diplome/>
                    <hr className={"bar"}/>
                    <Langue/>
                </div>
                <Experience/>
                <div className={"iconDisplay"}>
                    <h2 className={"titleGreen"}>Outils maîtrisés</h2>
                    <ProgLang/>
                    <Software/>
                </div>
                <Contact/>
            </div>

        );
    }
}

export default Content;