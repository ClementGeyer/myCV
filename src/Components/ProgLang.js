import React, { useState } from 'react';
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
import RightArrow from './css/img/right.png';
import LeftArrow from './css/img/left.png';

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
        <div className={"proglang"}>
            <h3 className={"subtitleGreen"}>Langages de programmation</h3>
            <div className={"iconarrow"}>
                <img onClick={() => arrow(2)} className={"arrowSizing"} src={LeftArrow} alt={"leftArrow"}/>
                <div className={"imgDisplay"}>
                    <ImgDisplay className={`lang${position > 8 || calculEcart(0) < 3 ? "Active" : "Hidden"}`} img={ReactIcon}/>
                    <ImgDisplay className={`lang${position > 9 || calculEcart(1) < 3 ? "Active" : "Hidden"}`} img={JavaIcon}/>
                    <ImgDisplay className={`lang${calculEcart(2) < 3 ? "Active" : "Hidden"}`} img={PHPIcon}/>
                    <ImgDisplay className={`lang${calculEcart(3) < 3 ? "Active" : "Hidden"}`} img={CSharpIcon}/>
                    <ImgDisplay className={`lang${calculEcart(4) < 3 ? "Active" : "Hidden"}`} img={GitIcon}/>
                    <ImgDisplay className={`lang${calculEcart(5) < 3 ? "Active" : "Hidden"}`} img={BashIcon}/>
                    <ImgDisplay className={`lang${calculEcart(6) < 3 ? "Active" : "Hidden"}`} img={CIcon}/>
                    <ImgDisplay className={`lang${calculEcart(7) < 3 ? "Active" : "Hidden"}`} img={OracleIcon}/>
                    <ImgDisplay className={`lang${calculEcart(8) < 3 ? "Active" : "Hidden"}`} img={JavaScriptIcon}/>
                    <ImgDisplay className={`lang${position < 1 || calculEcart(9) < 3 ? "Active" : "Hidden"}`} name={"HTML"} img={HTMLIcon}/>
                    <ImgDisplay className={`lang${position < 2 || calculEcart(10) < 3 ? "Active" : "Hidden"}`} name={"CSS"} img={CSSIcon}/>
                </div>
                <img onClick={() => arrow(1)} className={"arrowSizing"} src={RightArrow} alt={"rightArrow"}/>
            </div>
        </div>

        );
}

export default ProgLang;