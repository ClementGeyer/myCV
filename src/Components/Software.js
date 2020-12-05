import React, { useState } from 'react';
import ImgDisplay from "./ImgDisplay";
import IntelliJIcon from './css/img/intellij.png';
import WebStormIcon from './css/img/webstorm.png';
import PHPStormIcon from './css/img/phpstorm.png';
import ExcelIcon from './css/img/excel.png';
import WordIcon from './css/img/word.png';
import PhotoshopIcon from './css/img/photoshop.png';
import StarUMLIcon from './css/img/staruml.png';
import UnityIcon from './css/img/unity.png';
import RightArrow from './css/img/right.png';
import LeftArrow from './css/img/left.png';

const Software = () => {

    const [isToggled, setToggle] = useState(false);
    const [position, setPosition] = useState(2);

    const arrow = (direction) => {
        var newIndex
        if(direction === 1){
            if(position === 7){
                newIndex = 0;
            }
            else{
                newIndex = position + 1;
            }
            setPosition(newIndex);
            setToggle(!isToggled);
        }
        if(direction === 2) {
            if(position === 0){
                newIndex = 7;
            }
            else{
                newIndex = position - 1;
            }
            setPosition(newIndex);
            setToggle(!isToggled);
        }
    }

    const calculEcart = (index) => {
        return Math.abs(index-position);
    }

        return(
            <div className={"software"}>
                <h3 className={"subtitleGreen"}>Logiciels</h3>
                <div className={"iconarrow"}>
                <img onClick={() => arrow(2)} className={"arrowSizing"} src={LeftArrow} alt={"leftArrow"}/>
                <div className={"imgDisplay"}>
                    <ImgDisplay className={`lang${position > 5 || calculEcart(0) < 3 ? "Active" : "Hidden"}`} img={IntelliJIcon}/>
                    <ImgDisplay className={`lang${position > 6 || calculEcart(1) < 3 ? "Active" : "Hidden"}`} img={WebStormIcon}/>
                    <ImgDisplay className={`lang${calculEcart(2) < 3 ? "Active" : "Hidden"}`} img={PHPStormIcon}/>
                    <ImgDisplay className={`lang${calculEcart(3) < 3 ? "Active" : "Hidden"}`} img={ExcelIcon}/>
                    <ImgDisplay className={`lang${calculEcart(4) < 3 ? "Active" : "Hidden"}`} img={WordIcon}/>
                    <ImgDisplay className={`lang${calculEcart(5) < 3 ? "Active" : "Hidden"}`} img={PhotoshopIcon}/>
                    <ImgDisplay className={`lang${position > 1 || calculEcart(6) < 3 ? "Active" : "Hidden"}`} img={StarUMLIcon}/>
                    <ImgDisplay className={`lang${position > 2 || calculEcart(7) < 3 ? "Active" : "Hidden"}`} name={"Unity"} img={UnityIcon}/>
                </div>
                <img onClick={() => arrow(1)} className={"arrowSizing"} src={RightArrow} alt={"rightArrow"}/>
            </div>
            </div>
        );
}

export default Software;