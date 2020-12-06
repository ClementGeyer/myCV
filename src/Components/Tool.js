import './css/style.css';

const Tool = (props) => {
    return(
        <div className={props.className}>
            <img className={"img_sizing"} src={props.img} name={props.name}/>
        </div>
    );
}

export default Tool;