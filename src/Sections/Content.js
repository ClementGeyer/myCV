import React, {Component} from "react";
import '../css/globalStyles.css';
import Experience from './Experience';
import ProgLang from '../Components/ProgLang';
import Profile from './Profile';
import Contact from './Contact';
import Diploma from '../Components/Diploma';
import Software from '../Components/Software';
import Language from '../Components/Language';
import Hobbys from './Hobbys';

class Content extends Component{

    render(){
        return(
            <div id="app">
                <Profile/>
                <div id="certification">
                    <h2 className="title_black">Certifications</h2>
                    <h3 className="subtitle_black">Diplomes</h3>
                    <div className="certif_display">
                        <Diploma name="Brevet" desc="Mention Assez Bien (Collège Jean Sturm)"/>
                        <Diploma name="Baccalauréat STI2D" desc="Mention Bien (Lycée Marcel Rudloff)"/>
                    </div>
                    <hr className="bar"/>
                    <h3 className="subtitle_black">Langues</h3>
                    <div className="certif_display">
                        <Language name="Anglais" certification="TOEIC" points="915" maxpoints="990" ratio="92.4%"/>
                        <Language name="Espagnol" certification="BAC" points="14" maxpoints="20" ratio="70%"/>
                    </div>
                </div>
                <Experience/>
                <div id="tools">
                    <h2 className="title_white">Outils maîtrisés</h2>
                    <div className="tool_boxes">
                        <ProgLang/>
                        <Software/>
                    </div>
                </div>
                <Hobbys/>
                <Contact/>
            </div>

        );
    }
}

export default Content;