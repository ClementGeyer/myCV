import '../css/profile.css';
import {Component} from "react";
import { Link } from "react-scroll";

class Profile extends Component{

    state = {
        name: 'Clément GEYER',
        studies: 'DUT Informatique 2ème année',
        domain: 'Développement Web'
    }

    render(){

        return(
            <div id="profile">
                <h2 className="profile_name">{this.state.name}</h2>
                <div className="profile_infos">
                    <p>{this.state.studies}</p>
                    <p>{this.state.domain}</p>
                </div>            
                <div className={"profile_menu"}>
                    <Link onMouseEnter={this.grow.bind(this, true)} onMouseLeave={this.grow.bind(this, false)}
                        activeClass="active"
                        to="certification"
                        spy={true}
                        smooth={true}
                        duration={500}>Certifications</Link>
                    <Link onMouseEnter={this.grow.bind(this, true)} onMouseLeave={this.grow.bind(this, false)}
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        duration={500}>Expériences</Link>
                    <Link onMouseEnter={this.grow.bind(this, true)} onMouseLeave={this.grow.bind(this, false)}
                        activeClass="active"
                        to="tools"
                        spy={true}
                        smooth={true}
                        duration={500}>Outils</Link>
                    <Link onMouseEnter={this.grow.bind(this, true)} onMouseLeave={this.grow.bind(this, false)}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={500}>Contact</Link>
                    <Link onMouseEnter={this.grow.bind(this, true)} onMouseLeave={this.grow.bind(this, false)}
                        activeClass="active"
                        to="hobbys"
                        spy={true}
                        smooth={true}
                        duration={500}>Passions</Link>
                </div>
            </div>

        )
    }

    grow = (enter, e) => {
        enter ? e.target.style.color = "rgb(135, 172, 139)" : e.target.style.color = "grey";
        enter ? e.target.style.fontFamily = "Roboto Regular, sans-serif" : e.target.style.fontFamily = "Roboto Thin, sans-serif";
        enter ? e.target.style.border = ".06em solid black" : e.target.style.border = ".06em solid grey";
        enter ? e.target.style.opacity = "100%" : e.target.style.opacity = "50%";
    }
}


export default Profile;