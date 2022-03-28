import './style.css'
import  pic  from '../../assets/images/pic.png'

export default function About(){

    return(
        
        <div className="main" id="home">
            <div className="text-area">
                
                <p  data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="hello-text">Hello World! My name is</p>

                <h1 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease"
                    className="name-text">Vinícius Costa</h1>

                <h2 data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="description-text">I am a Full Stack Developer.</h2>

            </div>
            <div className="pic">
                <img className="main-pic" src={pic} alt="Vinicius Costa"></img>
            </div>
        </div>
        
    )
}