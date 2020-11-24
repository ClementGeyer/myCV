import {Component} from "react";

class Langue extends Component{

    state = {
        name: 'Anglais',
        points: 915,
        maxpoints: 990,
        certification: 'TOEIC'
    }

    render(){
        return(
            <div>
                <h3 className={"title"}>Langues</h3>
                <div className={"langueDisplay"}>
                    <h3 className={"subtitle"}>{this.state.name}</h3>
                    <div className={"PBContainer"}>
                        <div className={"PBFiller"}>
                            <span/>
                        </div>
                    </div>
                    <p>Certification {this.state.certification}: {this.state.points}/{this.state.maxpoints}</p>
                </div>
            </div>
        );
    }
}

export default Langue;