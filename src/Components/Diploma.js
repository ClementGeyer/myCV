import React from "react";
import '../css/certification.css'

const Diploma = (props) => {

    return(
        <div className={"diploma"}>
            <p className={"diploma_title"}>{props.name}</p>
            <p>{props.mention}</p>
            <p>{props.school}</p>
        </div>
    );
}

export default Diploma;