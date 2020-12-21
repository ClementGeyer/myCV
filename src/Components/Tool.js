import { Popup } from 'semantic-ui-react';
import '../css/tools.css';

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
                        <div style={{width: props.percentage}} className={"PBFillerLittle"}>
                            <span/>
                        </div>
                    </div>}
            position='bottom'
            size='small'
            wide='300px'
            show='false'
            disabled={props.disabled}
            trigger={<div className={props.className}>
                <img className={"img_sizing"} src={props.img} name={props.name} alt={props.name}/>
            </div>}
        />
    );
}

export default Tool;