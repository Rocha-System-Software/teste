//to review and add later

import './style.css'
import SkillItem from './Skill-item/skill'

export default function Skills(){

    return(
       
        <div className="caxeta">

            <div className="titulo">
                <h1>My Skills</h1>
            </div>

            <div className="skills-container">
                <SkillItem/>
            </div>
        </div>
      
    )
}