import { SiHtml5 } from 'react-icons/si'

const data = [
    {
        id: 1,
        name: 'HTML',
        url: SiHtml5
    },
    {
        id: 2,
        name: 'CSS',
        url: 'https://img1.gratispng.com/20180320/csq/kisspng-web-development-html-css3-canvas-element-web-desig-w3c-html5-logo-5ab0c83fd669f3.8573646215215350398782.jpg',
    },
    {
        id: 3,
        name: 'JavaScript',
        url: 'https://img1.gratispng.com/20180320/csq/kisspng-web-development-html-css3-canvas-element-web-desig-w3c-html5-logo-5ab0c83fd669f3.8573646215215350398782.jpg',
    },
    {
        id: 4,
        name: 'MySQL',
        url: 'https://img1.gratispng.com/20180320/csq/kisspng-web-development-html-css3-canvas-element-web-desig-w3c-html5-logo-5ab0c83fd669f3.8573646215215350398782.jpg',
    },
    {
        id: 5,
        name: 'React',
        url: 'https://img1.gratispng.com/20180320/csq/kisspng-web-development-html-css3-canvas-element-web-desig-w3c-html5-logo-5ab0c83fd669f3.8573646215215350398782.jpg',
    },
    {
        id: 6,
        name: 'Java',
        url: 'https://img1.gratispng.com/20180320/csq/kisspng-web-development-html-css3-canvas-element-web-desig-w3c-html5-logo-5ab0c83fd669f3.8573646215215350398782.jpg',
    },
    {
        id: 7,
        name: 'Spring',
        url: 'https://img1.gratispng.com/20180320/csq/kisspng-web-development-html-css3-canvas-element-web-desig-w3c-html5-logo-5ab0c83fd669f3.8573646215215350398782.jpg',
    }
];

export default function SkillItem(){

    return(
            data.map( ( {id, name, url} ) => (
            <div key={id} className="skills-box">
                <div className="skill-title">
                    <div className="img">
                        <img src={url} alt="html" className="skill-img"></img>
                    </div>
                    <h3 className="skill-name">{name}</h3>
                </div>
            </div>
            ))
        ) 

}
