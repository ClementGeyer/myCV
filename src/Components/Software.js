import React, { useState } from 'react';
import Tool from "./Tool";
import IntelliJIcon from '../css/img/intellij.png';
import WebStormIcon from '../css/img/webstorm.png';
import PHPStormIcon from '../css/img/phpstorm.png';
import ExcelIcon from '../css/img/excel.png';
import WordIcon from '../css/img/word.png';
import PhotoshopIcon from '../css/img/photoshop.png';
import StarUMLIcon from '../css/img/staruml.png';
import UnityIcon from '../css/img/unity.png';
import RightArrow from '../css/img/right.png';
import LeftArrow from '../css/img/left.png';

const Software = () => {

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
            <h3 className={"tool_title"}>Logiciels</h3>
            <div className={"tool_container"}>
                <img onClick={() => arrow(2)} style={{marginTop: '30px'}} className={"arrow_sizing"} src={LeftArrow} alt={"leftArrow"}/>
                <div className={"tool_container_display"}>
                    <Tool className={`lang${position > 8 || calculEcart(0) < 3 ? "Active" : "Hidden"}`} name={"IntelliJ"} img={IntelliJIcon}/>
                    <Tool className={`lang${position > 9 || calculEcart(1) < 3 ? "Active" : "Hidden"}`} name={"WebStorm"} img={WebStormIcon}/>
                    <Tool className={`lang${calculEcart(2) < 3 ? "Active" : "Hidden"}`} name={"PHPStorm"} img={PHPStormIcon}/>
                    <Tool className={`lang${calculEcart(3) < 3 ? "Active" : "Hidden"}`} name={"Excel"} img={ExcelIcon}/>
                    <Tool className={`lang${calculEcart(4) < 3 ? "Active" : "Hidden"}`} name={"Word"} img={WordIcon}/>
                    <Tool className={`lang${calculEcart(5) < 3 ? "Active" : "Hidden"}`} name={"Photoshop"} img={PhotoshopIcon}/>
                    <Tool className={`lang${calculEcart(6) < 3 ? "Active" : "Hidden"}`} name={"StarUML"} img={StarUMLIcon}/>
                    <Tool className={`lang${calculEcart(7) < 3 ? "Active" : "Hidden"}`} name={"Unity"} img={UnityIcon}/>
                    <Tool className={`lang${calculEcart(8) < 3 ? "Active" : "Hidden"}`} name={"Unity"} img={UnityIcon}/>
                    <Tool className={`lang${position < 1 || calculEcart(9) < 3 ? "Active" : "Hidden"}`} name={"Unity"} img={UnityIcon}/>
                    <Tool className={`lang${position < 2 || calculEcart(10) < 3 ? "Active" : "Hidden"}`} name={"Unity"} img={UnityIcon}/>
                </div>
                <img onClick={() => arrow(1)} style={{marginTop: '30px'}} className={"arrow_sizing"} src={RightArrow} alt={"rightArrow"}/>
            </div>
        </div>

        );
}

export default Software;