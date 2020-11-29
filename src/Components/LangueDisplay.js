import './css/style.css';

const LangueDisplay = (props) => {

    return(
        <div>
            <h3 className={"subtitle"}>{props.name}</h3>
            <div className={"PBContainer"}>
                <div className={"PBFiller" + props.name}>
                    <span/>
                </div>
            </div>
        <p>{props.certification}: {props.points}/{props.maxpoints}</p>
        </div>  
    );
}

export default LangueDisplay;