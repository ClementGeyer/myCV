import '../css/style.css';
import { Popup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const Tool = (props) => {

    const style = {
        padding: '20px',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'rgb(0, 0, 0)',
        opacity: '0.7',
    }

    return(
        <Popup
            style={style}
            header={<p style={{textAlign: 'center'}}>{props.name}</p>}
            content={<div className={"PBContainerLittle"}>
                        <div className={"PBFillerLittle"}>
                            <span/>
                        </div>
                        <p style={{textAlign: 'center'}}>{props.percentage}</p>
                    </div>}
            position='bottom'
            size='small'
            wide='300px'
            show='false'
            disabled={props.disabled}
            trigger={<div className={props.className}>
                <img className={"img_sizing"} src={props.img} name={props.name}/>
            </div>}
        />
    );
}

export default Tool;