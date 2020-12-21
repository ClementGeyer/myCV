import React from 'react';
import { Popup } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const ExperienceBloc = (props) => {

    const style = {
        padding: '20px',
        color: 'white',
        backgroundColor: 'rgb(0, 0, 0)',
        opacity: '0.7',
    }

    return(
        <Popup
            style={style}
            header={props.name}
            content={<div><ul>{props.infos.split("\n").map((sentence, key) => {
                        return <li key={key}>{sentence}</li>
                    })}
                    </ul>
                    </div>}
            position='top center'
            size='small'
            wide='300px'
            show='false'
            disabled={props.disabled}
            trigger={<div className={props.className}>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>}
        />
    );
}

export default ExperienceBloc;