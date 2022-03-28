import './style.css'

export default function ItemList(props){
    return(
        <li>
            <a className="icons" href={props.site} target="_blank">{props.icon}</a>
        </li>
    );
}