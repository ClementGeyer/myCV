import React, {Component} from "react";
import '../css/contact.css'
import githubLogo from '../css/img/github.png'

class Contact extends Component{

    state = {
        email: 'clementgeyer4@gmail.com',
        numero: '06 34 96 63 86',
        github: 'https://github.com/ClementGeyer'
    }


    render(){
        return(
            <div id="contact">
                <h3 className="title_white">Contact</h3>
                <div className="contact_infos">
                    <div>
                        <p> Numéro de téléphone : {this.state.numero} </p>
                        <p> Si vous avez besoin de renseignements, contactez-moi à l'adresse : {this.state.email} </p>
                    </div>
                    <a className="github" href={this.state.github}><img className="img_sizing" src={githubLogo}/></a>
                </div>
            </div>

        );
    }
}

export default Contact;