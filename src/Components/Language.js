const Language = (props) => {

    return(
        <div className={"language"}>        
            <h3 className={"language_title"}>{props.name}</h3>
            <div className={"PBContainer"}>
                <div className={"PBFiller" + props.name}>
                    <span/>
                </div>
            </div>
            <p>{props.certification}: {props.points}/{props.maxpoints}</p>    
        </div>
    );
}

export default Language;