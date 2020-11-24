import React, {Component} from "react";
import Experience from './Experience';
import ProgLang from './ProgLang';
import Profile from './Profile';
import Contact from './Contact';
import Diplome from './Diplome';
import Software from './Software';

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
                <Diplome/>
                <Experience/>
                <Contact/>
            </div>

        );
    }
}

export default Content;