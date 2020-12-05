const Project = (props) => {
    return(
        <div>
            <h3>{props.projectName}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default Project;