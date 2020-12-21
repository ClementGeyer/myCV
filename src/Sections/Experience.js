import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/experience.css';
import ExperienceBloc from '../Components/ExperienceBloc';
import DownArrow from '../css/img/down.png';
import UpArrow from '../css/img/up.png';

const Experience = () => {

    const [isToggled, setToggle] = useState(false);
    const [direction, setDirection] = useState(1);
    const [expActive, setActive] = useState(1);

    const swap = useSpring({
        transform: isToggled ? 'translate3d(0,15,0)' : direction === 1 ? 'translate3d(0,70px,0)' : 'translate3d(0,-50px,0)'
    })


    const experiences = [
        {
            name: 'IUT Robert Schumann',
            desc: 'DUT Informatique (2019-2021 - 2 ans)',
            index: 1,
            infos: 'Introduction aux systèmes informatiques : Bash \n Algorithmique avancée : Java \n Base de données avancées : Oracle \n Conception de documents et d\'interfaces numériques: HTML/CSS/JavaScript \n Programmation web côté serveur : PHP \n Conception et programmation objet avancée : C# \n Principe des système d\'exploitation : C'
        },
        {
            name: 'Pizzeria L\'Arc Des Princes',
            desc: 'Job d\'été : cuisinier dans une pizzeria (2015 - 1 mois)',
            index: 2,
            infos: 'Commis de cuisine \n Cuisiner des pizzas/pâtes \n Première réelle expérience profesionnelle'
        },
        {
            name: 'Entreprise SOPROFEN',
            desc: 'Stage d\'observation (2016 - 21 jours)',
            index: 3,
            infos: 'Observation des différents métiers de l\'entreprise \n Aide au référencement des articles vendus'
        }
    ]

    const arrow = (direction) => {
        var newIndex
        if(direction === 1 && expActive > 1){
            newIndex = expActive - 1;
            setActive(newIndex);
            setDirection(1);
            setToggle(!isToggled);
        }
        if(direction === 2 && expActive < 3) {
            newIndex = expActive + 1;
            setActive(newIndex);
            setDirection(2);
            setToggle(!isToggled);
        }
    }

    return(
        <div id="experience">
            <h2 className="title_white">Experiences</h2>
            <div className="experience_display">
                <div className="arrows">
                    <img onClick={() => arrow(1)} className="arrow_sizing" src={UpArrow} alt="upArrow"/>
                    <img onClick={() => arrow(2)} className="arrow_sizing" src={DownArrow} alt="downArrow"/>
                </div>
                <animated.div style={swap}>
                    {experiences.map((exp) => 
                        <ExperienceBloc
                            className={`exp${expActive === exp.index ? "Active" : Math.abs(expActive - exp.index) > 1 ? "Hidden" : ""}`}
                            name={exp.name} desc={exp.desc}
                            disabled={expActive === exp.index ? false : true}
                            infos={exp.infos}/>
                    )}
                </animated.div>
            </div>
        </div>
    );
}

export default Experience;