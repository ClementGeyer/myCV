import {Component} from "react";
import CompDisplay from "./CompDisplay";
import './css/style.css';
import ReactIcon from './css/img/react.png';

class Competence extends Component{

    render(){
        return(
            <div className={"competence"}>
                <h2 className={"title"}>Compétences</h2>
                <CompDisplay name={"React"} img={ReactIcon}/>
                <CompDisplay name={"Java"}/>
                <CompDisplay name={"Suite Office"}/>
                <CompDisplay name={"PHP"}/>
                <CompDisplay name={"C#"}/>
                <CompDisplay name={"..."}/>
                <hr/>
            </div>

        );
    }
}

export default Competence;