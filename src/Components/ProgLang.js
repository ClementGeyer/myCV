import React, { useState } from 'react';
import Tool from "./Tool";
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

    const progLang = [
        {
            name: 'React',
            percentage: '45%',
            img: ReactIcon,
            index: 0
        },
        {
            name: 'PHP',
            percentage: '60%',
            img: PHPIcon,
            index: 1
        },
        {
            name: 'Javascript',
            percentage: '40%',
            img: JavaScriptIcon,
            index: 2
        },
        {
            name: 'HTML',
            percentage: '90%',
            img: HTMLIcon,
            index: 3
        },
        {
            name: 'CSS',
            percentage: '65%',
            img: CSSIcon,
            index: 4
        },
        {
            name: 'Java',
            percentage: '60%',
            img: JavaIcon,
            index: 5
        },
        {
            name: 'C',
            percentage: '30%',
            img: CIcon,
            index: 6
        },
        {
            name: 'C#',
            percentage: '60%',
            img: CSharpIcon,
            index: 7
        },
        {
            name: 'Git',
            percentage: '70%',
            img: GitIcon,
            index: 8
        },
        {
            name: 'Bash',
            percentage: '40%',
            img: BashIcon,
            index: 9
        },
        {
            name: 'Oracle',
            percentage: '65%',
            img: OracleIcon,
            index: 10
        }
    ]

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
                    {progLang.map((tool) =>
                        <Tool className={`lang${calculEcart(tool.index) < 3 ? "Active" : "Hidden"}`} name={tool.name} percentage={tool.percentage} img={tool.img}/>
                    )}
                </div>
                <img onClick={() => arrow(1)} style={{marginTop: '30px'}} className={"arrow_sizing"} src={RightArrow} alt={"rightArrow"}/>
            </div>
        </div>

        );
}

export default ProgLang;