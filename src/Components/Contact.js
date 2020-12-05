import React, {Component} from "react";
import githubLogo from './css/img/github.png'

class Contact extends Component{

    state = {
        email: 'clementgeyer4@gmail.com',
        numero: '06 34 96 63 86',
        github: 'https://github.com/Wiz3rt'
    }


    render(){
        return(
            <div className={"contactDisplay"}>
                <h3 className={"titleGreen"}>Contact</h3>
                <div className={"contact_infos"}>
                    <div>
                        <p> Numéro de téléphone : {this.state.numero} </p>
                        <p> Si vous avez besoin de renseignements, contactez-moi à l'adresse : {this.state.email} </p>
                    </div>
                    <a className={"github"} href={this.state.github}><img className={"imgSizing"} src={githubLogo}/></a>
                </div>
            </div>

        );
    }
}

export default Contact;