import './css/style.css';
import {Component} from "react";

class Profile extends Component{

    state = {
        name: 'Clément GEYER',
        studies: 'DUT Informatique 2ème année',
        domain: 'Développement Web'
    }

    render(){
        return(
            <div className={"profile"}>
                <h2 className={"profile_name"}>{this.state.name}</h2>
                <div className={"profile_infos"}>
                    <p>{this.state.studies}</p>
                    <p>{this.state.domain}</p>
                </div>            
                <div className={"profile_menu"}>
                    <p onMouseEnter={this.grow.bind(this, true)} onMouseLeave={this.grow.bind(this, false)}>Outils</p>
                    <p onMouseEnter={this.grow.bind(this, true)} onMouseLeave={this.grow.bind(this, false)}>Certifications</p>
                    <p onMouseEnter={this.grow.bind(this, true)} onMouseLeave={this.grow.bind(this, false)}>Expériences</p>
                    <p onMouseEnter={this.grow.bind(this, true)} onMouseLeave={this.grow.bind(this, false)}>Contact</p>
                </div>
            </div>

        )
    }

    grow = (enter, e) => {
        enter ? e.target.style.border = "2px solid #7bff7e" : e.target.style.border = "2px solid grey";
        enter ? e.target.style.opacity = "100%" : e.target.style.opacity = "50%";
    }
}


export default Profile;