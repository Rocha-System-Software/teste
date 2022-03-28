//import data from '../../../data.js' ?
import 'bootstrap/dist/css/bootstrap.min.css'; // BOOTSTRAP
import './style.css'
import {Card, Button, CardGroup} from 'react-bootstrap'
import pic1 from '../../../assets/images/calculator.png'
import pic2 from '../../../assets/images/todolist.png'
import pic3 from '../../../assets/images/tipicas.png'


const data = [
    {
        id: 1,
        name: 'Calculator',
        description: 'Calculator with dark theme using HTML, CSS and JS',
        url: 'https://vinitwl.github.io/MyCalculator/',
        img: pic1
    },
    {   
        id: 2,
        name: 'To Do list',
        description: 'To do list using HTML, CSS and JS',
        url: 'https://vinitwl.github.io/Checkpoint-2-FrontEnd-2/',
        img: pic2
    },
    {
        id: 3,
        name: 'Comidas típicas',
        description: 'Group project using HTML, CSS, JS and Bootstrap',
        url: 'https://guichehade.github.io/comidastipicas/index.html',
        img: pic3
    }
];


export default function Item(){
    return(
        <CardGroup>
            <ul className="cards">
            {data.map( ( {id, name, description, url, img}) => (
                <li key={id} className="li-card" >
                <Card data-aos="flip-up" data-aos-offset="150" className="card-item">
                    <Card.Img className="card-img" variant="top" src={img} />
                    <Card.Body>
                    <Card.Title className="card-title">{name}</Card.Title>
                    <Card.Text className="card-text">
                       {description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button className="card-button" href={url} target="_blank" variant="dark">Check it out</Button>
                    </Card.Footer>
                </Card>
                </li>
                ))}
            </ul>
        </CardGroup>
    )
}