import {Component} from "react";
import ImgDisplay from "./ImgDisplay";
import IntelliJIcon from './css/img/intellij.png';
import WebStormIcon from './css/img/webstorm.png';
import PHPStormIcon from './css/img/phpstorm.png';
import ExcelIcon from './css/img/excel.png';
import WordIcon from './css/img/word.png';
import PhotoshopIcon from './css/img/photoshop.png';
import StarUMLIcon from './css/img/staruml.png';
import UnityIcon from './css/img/unity.png';

class Software extends Component{

    render(){
        return(
            <div className={"iconDisplay"}>
                <h2 className={"title"}>Logiciels</h2>
                <div className={"imgDisplay"}>
                    <ImgDisplay name={"IntelliJ"} img={IntelliJIcon}/>
                    <ImgDisplay name={"WebStorm"} img={WebStormIcon}/>
                    <ImgDisplay name={"PHPStorm"} img={PHPStormIcon}/>
                    <ImgDisplay name={"Excel"} img={ExcelIcon}/>
                    <ImgDisplay name={"Word"} img={WordIcon}/>
                    <ImgDisplay name={"Photoshop"} img={PhotoshopIcon}/>
                    <ImgDisplay name={"StarUML"} img={StarUMLIcon}/>
                    <ImgDisplay name={"Unity"} img={UnityIcon}/>
                </div>
            </div>
        );
    }
}

export default Software;