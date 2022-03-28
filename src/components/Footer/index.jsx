import './style.css'
import IconsList from './Icons-list/index';
import { FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer(){
    return (
        <footer className="footer" id="contacts">
           <div class="footer-container">
            <h3>Let's keep in touch!</h3>
               <ul className="footer-medias">
                   <IconsList site="https://www.linkedin.com/in/vin%C3%ADcius-alexandre-850b63219/" icon={<FaLinkedin/>}/>
                   <IconsList site="https://discord.com/channels/@me" icon={<FaDiscord/>} />
                   <IconsList site="https://viniTWLgithub.com/" icon={<FaGithub/>}/>
               </ul>
            </div>
            <div class="footer-bottom">
                <small>&copy; Vinícius Costa - Copyright 2022</small>
            </div>
      </footer>
    );

}