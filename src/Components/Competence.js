import {Component} from "react";
import CompDisplay from "./CompDisplay";

class Competence extends Component{

    render(){
        return(
            <div>
                <h2>Competence</h2>
                <CompDisplay name={"React"}/>
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