import './css/style.css';

const ImgDisplay = (props) => {
    return(
        <div>
            <img className={"progLangImg"} src={props.img} name={props.name}/>
            <p className={"progLangName"}>{props.name}</p>
        </div>
    );
}

export default ImgDisplay;