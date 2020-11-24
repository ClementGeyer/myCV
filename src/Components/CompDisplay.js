import './css/style.css';

const CompDisplay = (props) => {
    return(
        <div>
            <img className={"compImg"} src={props.img} name={props.name}/>
        </div>
    );
}

export default CompDisplay;