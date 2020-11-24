import {Component} from "react";

class Contact extends Component{

    state = {
        email: 'clementgeyer4@gmail.com'
    }

    render(){
        return(
            <div>
                <h3>Contact</h3>
                <p>Contactez-moi : {this.state.email}</p>
                <hr/>
            </div>

        );
    }
}

export default Contact;