import {Component} from "react";


class Profile extends Component{

    state = {
        name: 'Clément GEYER',
        studies: 'DUT Informatique 2ème année',
        domain: 'Développement Web'
    }

    render(){
        return(
            <div>
                <h2>Profil</h2>
                <p>{this.state.name}</p>
                <p>{this.state.studies}</p>
                <p>{this.state.domain}</p>
                <hr/>
            </div>

        );
    }
}

export default Profile;