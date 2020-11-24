import React, {Component} from "react";
import Experience from './Experience';
import ProgLang from './ProgLang';
import Profile from './Profile';
import Contact from './Contact';
import Diplome from './Diplome';
import Software from './Software';
import Langue from './Langue';

class Content extends Component{

    render(){
        return(
            <div>
                <Profile/>
                <div className={"iconDisplay"}>
                    <h2 className={"title"}>Outils maîtrisés</h2>
                    <ProgLang/>
                    <Software/>
                </div>
                <div className={"certifDisplay"}>
                    <h2 className={"title"}>Certifications</h2>
                    <Diplome/>
                    <Langue/>
                </div>
                <Experience/>
                <Contact/>
            </div>

        );
    }
}

export default Content;