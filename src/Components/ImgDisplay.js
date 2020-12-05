import './css/style.css';

const ImgDisplay = (props) => {
    return(
        <div className={props.className}>
            <img className={"imgSizing"} src={props.img} name={props.name}/>
        </div>
    );
}

export default ImgDisplay;