const DipDisplay = (props) => {
    return(
        <div className={"diplome"}>
            <p className={"diplomeTitle"}>{props.name}</p>
            <p>{props.desc}</p>
        </div>
    );
}

export default DipDisplay;