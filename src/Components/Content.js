import {Component} from "react";


class Content extends Component{

    state = {
        name: 'Clément GEYER'
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <Experience/>
            </div>

        );
    }
}

export default Content;