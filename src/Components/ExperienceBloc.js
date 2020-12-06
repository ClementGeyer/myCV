const ExperienceBloc = (props) => {
    return(
        <div className={props.className}>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
        </div>
    );
}

export default ExperienceBloc;