import {Component} from "react";

class Contact extends Component{

    state = {
        email: 'clementgeyer4@gmail.com',
        numero: '06 34 96 63 86'
    }

    render(){
        return(
            <div className={"contactDisplay"}>
                <h3 className={"title"}>Contact</h3>
                <div className={"profile_infos"}>
                    <p> Numéro de téléphone : {this.state.numero} </p>
                    <p> Si vous avez besoin de renseignements, contactez-moi à l'adresse : {this.state.email} </p>
                </div>
            </div>

        );
    }
}

export default Contact;