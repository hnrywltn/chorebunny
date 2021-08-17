import {Link} from 'react-router-dom';
import './splashpage.css'
import './ChoreBunny.png'
function Splashpage() {
    return(
        <div className="wrapper">
            <div className="about-us"> 
                <img className="about-logo" src="https://imgur.com/qKdCNty.png" alt="about-logo"></img>
                <p className="about-cb">    This is a clone of TaskRabbit, we have multiple categories and chores that our bunnies can fufill! You can even become one yourself! Sign-up TODAY! 
                </p>
            </div>
            <div className="feature-chore"> feature chore</div>
            <div className="about-me-links">test</div>
        </div>
    )
}

export default Splashpage;