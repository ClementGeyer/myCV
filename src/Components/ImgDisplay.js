import './css/style.css';

const ImgDisplay = (props) => {
    return(
        <div>
            <img className={"imgSizing"} src={props.img} name={props.name}/>
            <p className={"imgSizing"}>{props.name}</p>
        </div>
    );
}

export default ImgDisplay;