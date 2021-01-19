import React, { useState } from 'react';
import Tool from "./Tool";
import JetBrainsIcon from '../css/img/jetbrains.png';
import ExcelIcon from '../css/img/excel.png';
import WordIcon from '../css/img/word.png';
import PhotoshopIcon from '../css/img/photoshop.png';
import StarUMLIcon from '../css/img/staruml.png';
import UnityIcon from '../css/img/unity.png';
import VisualStudioIcon from '../css/img/visualstudio.png';
import VSCodeIcon from '../css/img/vscode.png';
import RightArrow from '../css/img/right.png';
import LeftArrow from '../css/img/left.png';

const Software = () => {

    const [isToggled, setToggle] = useState(false);
    const [position, setPosition] = useState(2);

    const softwares = [
        {
            name: 'JetBrains',
            percentage: '75%',
            img: JetBrainsIcon,
            index: 0
        },
        {
            name: 'VSCode',
            percentage: '50%',
            img: VSCodeIcon,
            index: 1
        },
        {
            name: 'Unity',
            percentage: '50%',
            img: UnityIcon,
            index: 2
        },
        {
            name: 'Excel',
            percentage: '70%',
            img: ExcelIcon,
            index: 3
        },
        {
            name: 'Word',
            percentage: '90%',
            img: WordIcon,
            index: 4
        },
        {
            name: 'Photoshop',
            percentage: '30%',
            img: PhotoshopIcon,
            index: 5
        },
        {
            name: 'StarUML',
            percentage: '70%',
            img: StarUMLIcon,
            index: 6
        },
        {
            name: 'Visual Studio',
            percentage: '60%',
            img: VisualStudioIcon,
            index: 7
        },
        
    ]

    const arrow = (direction) => {
        var newIndex
        if(direction === 1 && position !== 5){
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