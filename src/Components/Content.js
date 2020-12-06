import React, {Component} from "react";
import Experience from './Experience';
import ProgLang from './ProgLang';
import Profile from './Profile';
import Contact from './Contact';
import Diploma from './Diploma';
import Software from './Software';
import Language from './Language';

class Content extends Component{

    render(){
        return(
            <div>
                <Profile/>
                <div className={"certification"}>
                    <h2 className={"title_black"}>Certifications</h2>
                    <h3 className={"subtitle_black"}>Diplomes</h3>
                    <div className={"diploma_display"}>
                        <Diploma name={"Brevet"} desc={"Mention Assez Bien (Collège Jean Sturm)"}/>
                        <Diploma name={"Baccalauréat STI2D"} desc={"Mention Bien (Lycée Marcel Rudloff)"}/>
                    </div>
                    <hr className={"bar"}/>
                    <h3 className={"subtitle_black"}>Langues</h3>
                    <div className={"language_display"}>
                        <Language name="Anglais" certification="TOEIC" points="915" maxpoints="990" ratio="92.4"/>
                        <Language name="Espagnol" certification="BAC" points="14" maxpoints="20" ratio="70"/>
                    </div>
                </div>
                <Experience/>
                <div className={"tools"}>
                    <h2 className={"title_white"}>Outils maîtrisés</h2>
                    <ProgLang/>
                    <Software/>
                </div>
                <Contact/>
            </div>

        );
    }
}

export default Content;