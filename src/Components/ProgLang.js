import {Component} from "react";
import ImgDisplay from "./ImgDisplay";
import './css/style.css';
import ReactIcon from './css/img/react.png';
import JavaIcon from './css/img/java.png';
import PHPIcon from './css/img/php.png';
import CSharpIcon from './css/img/csharp.png';
import GitIcon from './css/img/git.png';
import BashIcon from './css/img/bash.png';
import CIcon from './css/img/c.png';
import OracleIcon from './css/img/oracle.png';
import JavaScriptIcon from './css/img/javascript.png';
import HTMLIcon from './css/img/html.png';
import CSSIcon from './css/img/css.png';

class ProgLang extends Component{

    render(){
        return(
            <div className={"iconDisplay"}>
                <h3 className={"title"}>Langages de programmation</h3>
                <div className={"imgDisplay"}>
                    <ImgDisplay name={"React"} img={ReactIcon}/>
                    <ImgDisplay name={"Java"} img={JavaIcon}/>
                    <ImgDisplay name={"PHP"} img={PHPIcon}/>
                    <ImgDisplay name={"C#"} img={CSharpIcon}/>
                    <ImgDisplay name={"Git"} img={GitIcon}/>
                    <ImgDisplay name={"Bash"} img={BashIcon}/>
                    <ImgDisplay name={"C"} img={CIcon}/>
                    <ImgDisplay name={"Oracle"} img={OracleIcon}/>
                    <ImgDisplay name={"Javascript"} img={JavaScriptIcon}/>
                    <ImgDisplay name={"HTML"} img={HTMLIcon}/>
                    <ImgDisplay name={"CSS"} img={CSSIcon}/>
                </div>
            </div>

        );
    }
}

export default ProgLang;