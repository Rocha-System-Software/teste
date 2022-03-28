import Item from './item/index'
import './style.css'

export default function Projects(){
    return(
        <div className="projects-container" id="projects">
            <div className="projects-text-area">
                <h1 className="projects-title">Projects</h1>
                <h2 className="projects-description">Here are some projects that I've made over my journey!</h2>
            </div>
            <div className="card-container">
                <Item />
            </div>
        </div>
    );
}