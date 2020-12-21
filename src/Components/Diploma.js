import React from "react";
import '../css/certification.css'

const Diploma = (props) => {

    return(
        <div className={"diploma"}>
            <p className={"diploma_title"}>{props.name}</p>
            <p>{props.desc}</p>
        </div>
    );
}

export default Diploma;