import React, { useState } from 'react';
import Tool from "./Tool";
import '../css/style.css';
import ReactIcon from '../css/img/react.png';
import JavaIcon from '../css/img/java.png';
import PHPIcon from '../css/img/php.png';
import CSharpIcon from '../css/img/csharp.png';
import GitIcon from '../css/img/git.png';
import BashIcon from '../css/img/bash.png';
import CIcon from '../css/img/c.png';
import OracleIcon from '../css/img/oracle.png';
import JavaScriptIcon from '../css/img/javascript.png';
import HTMLIcon from '../css/img/html.png';
import CSSIcon from '../css/img/css.png';
import RightArrow from '../css/img/right.png';
import LeftArrow from '../css/img/left.png';

const ProgLang= () =>{

    const [isToggled, setToggle] = useState(false);
    const [position, setPosition] = useState(2);

    const arrow = (direction) => {
        var newIndex
        if(direction === 1 && position !== 8){
            newIndex = position + 1;
            setPosition(newIndex);
            setToggle(!isToggled);
        }
        if(direction === 2 && position !== 2) {
            newIndex = position - 1;
            setPosition(newIndex);
            setToggle(!isToggled);
        }
    }

    const calculEcart = (index) => {
        return Math.abs(index-position);
    }

    return(
        <div className={"tool_display"}>
            <h3 className={"tool_title"}>Langages de programmation</h3>
            <div className={"tool_container"}>
                <img onClick={() => arrow(2)} style={{marginTop: '30px'}} className={"arrow_sizing"} src={LeftArrow} alt={"leftArrow"}/>
                <div className={"tool_container_display"}>
                    <Tool className={`lang${position > 8 || calculEcart(0) < 3 ? "Active" : "Hidden"}`} name={"React"} percentage={"74%"} img={ReactIcon}/>
                    <Tool className={`lang${position > 9 || calculEcart(1) < 3 ? "Active" : "Hidden"}`} name={"Java"} img={JavaIcon}/>
                    <Tool className={`lang${calculEcart(2) < 3 ? "Active" : "Hidden"}`} name={"PHP"} img={PHPIcon}/>
                    <Tool className={`lang${calculEcart(3) < 3 ? "Active" : "Hidden"}`} name={"C#"} img={CSharpIcon}/>
                    <Tool className={`lang${calculEcart(4) < 3 ? "Active" : "Hidden"}`} name={"Git"} img={GitIcon}/>
                    <Tool className={`lang${calculEcart(5) < 3 ? "Active" : "Hidden"}`} name={"Bash"} img={BashIcon}/>
                    <Tool className={`lang${calculEcart(6) < 3 ? "Active" : "Hidden"}`} name={"C"} img={CIcon}/>
                    <Tool className={`lang${calculEcart(7) < 3 ? "Active" : "Hidden"}`} name={"Oracle"} img={OracleIcon}/>
                    <Tool className={`lang${calculEcart(8) < 3 ? "Active" : "Hidden"}`} name={"Javascript"} img={JavaScriptIcon}/>
                    <Tool className={`lang${position < 1 || calculEcart(9) < 3 ? "Active" : "Hidden"}`} name={"HTML"} img={HTMLIcon}/>
                    <Tool className={`lang${position < 2 || calculEcart(10) < 3 ? "Active" : "Hidden"}`} name={"CSS"} img={CSSIcon}/>
                </div>
                <img onClick={() => arrow(1)} style={{marginTop: '30px'}} className={"arrow_sizing"} src={RightArrow} alt={"rightArrow"}/>
            </div>
        </div>

        );
}

export default ProgLang;