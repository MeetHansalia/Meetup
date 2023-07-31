import Card from '../ui/Card'
import './MeetupItem.css'


function MeetupItem(props){
    return(
        <li className="item">
            <Card>
                <div className="image">
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className="content">
                    <h3>{props.address}</h3>
                    <address>{props.address}</address>
                </div>
                <div className="actions">
                    <button>Show Details</button>
                </div>
            </Card>
        </li>
    );
}


export default MeetupItem;