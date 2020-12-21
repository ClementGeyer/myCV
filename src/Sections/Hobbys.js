import '../css/hobbys.css';
import SportExtremeImg from '../css/img/scotty.jpg';
import CinemaImg from '../css/img/cinema.jpg';
import JeuVideoImg from '../css/img/jeuvideo.jpg';

const Hobbys = () => {

    const hobbys = [
        {
            name: 'Les sports extrêmes',
            img: SportExtremeImg,
            desc: 'Depuis petit, j\'ai une passion pour ces sports à haut risques donc je pratique certains (BMX/Skate/Ski...)'
        },
        {
            name: 'Le cinéma',
            img: CinemaImg,
            desc: 'Depuis quelques années, je developpe une passion pour le cinéma'
        },
        {
            name: 'Les jeux vidéos',
            img: JeuVideoImg,
            desc: 'J\'aime jouer à des jeux avec des amis, cela forge la cohésion d\'équipe et la communication'
        },
    ]
    
    return(
        <div id="hobbys">
            <h1 className="title_white">Mes passions</h1>
            <div className="hobbys_display">
                {hobbys.map((hobby, key) =>
                    <div key={key}>
                        <p className="hobbys_title">{hobby.name}</p>
                        <img className="hobbys_img" src={hobby.img} alt={hobby.name}/>
                        <p>{hobby.desc}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Hobbys;