import React from "react";

const Diploma = (props) => {

    return(
        <div className={"diploma"}>
            <p className={"diploma_title"}>{props.name}</p>
            <p>{props.desc}</p>
        </div>
    );
}

export default Diploma;