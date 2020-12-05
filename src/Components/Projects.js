const { render } = require("@testing-library/react")

import Project from './Project.js';

const Projects = () => {

    return(
        <div>
            <Project name={'Mon CV'} desc={'CV sur site Internet réalisé en React sur VSCode'}/>
            <Project name={'Jeu Robert'} desc={'Jeu de plateforme réalisé en C# sur Unity'}/>
        </div>
    )

}

export default Projects;