import React, { useState } from 'react';
import Tool from "./Tool";
import JetBrainsIcon from '../css/img/jetbrains.png';
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

    const softwares = [
        {
            name: 'JetBrains',
            percentage: '70%',
            img: JetBrainsIcon,
            index: 0
        },
        {
            name: 'Unity',
            percentage: '50%',
            img: UnityIcon,
            index: 1
        },
        {
            name: 'Excel',
            percentage: '70%',
            img: ExcelIcon,
            index: 2
        },
        {
            name: 'Word',
            percentage: '90%',
            img: WordIcon,
            index: 3
        },
        {
            name: 'Photoshop',
            percentage: '30%',
            img: PhotoshopIcon,
            index: 4
        },
        {
            name: 'StarUML',
            percentage: '70%',
            img: StarUMLIcon,
            index: 5
        }
    ]

    const arrow = (direction) => {
        var newIndex
        if(direction === 1 && position !== 3){
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
                    {softwares.map((tool) =>
                        <Tool className={`lang${calculEcart(tool.index) < 3 ? "Active" : "Hidden"}`} name={tool.name} percentage={tool.percentage} img={tool.img}/>
                    )}
                </div>
                <img onClick={() => arrow(1)} style={{marginTop: '30px'}} className={"arrow_sizing"} src={RightArrow} alt={"rightArrow"}/>
            </div>
        </div>

        );
}

export default Software;