import React, {Component} from "react";
import Experience from './Experience';
import Competence from './Competence';
import Profile from './Profile';
import Contact from './Contact';
import Diplome from './Diplome';

class Content extends Component{

    render(){
        return(
            <div>
                <Profile/>
                <Competence/>
                <Diplome/>
                <Experience/>
                <Contact/>
            </div>

        );
    }
}

export default Content;