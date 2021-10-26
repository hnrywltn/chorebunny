import './splashpage.css'
import './ChoreBunny.png'


function Splashpage() {
    return (
        <div className="wrapper">
            <div className="about-us">
                <img className="about-logo" src="https://imgur.com/qKdCNty.png" alt="about-logo"></img>
                <p className="about-cb">    This is a clone of TaskRabbit, we have multiple categories and chores that our bunnies can fulfill! You can even become one yourself! Sign-up TODAY!
                </p>
            </div>
            <div className="feature-chore">
                <h1 className='feature-title' alt="feature-title">Some Features!</h1>
                <div className="features">
                    <li>
                        Misc.
                        <p> No matter the chore our bunnies can help!</p>
                    </li>
                    <li>
                        Birthday
                        <p> Need a special event planned? Let one of our bunnies figure out the details for you.</p>
                    </li>
                    <li>
                        Car Cleaning
                        <p> Dirty car? A bunny can get it spick and span.</p>
                    </li>
                    <li>
                        Groceries
                        <p> Find a bunny to stock your fridge, shop for little things to make your life more complete.</p>
                    </li>
                    <li>
                        Dog walking
                        <p> Is your pet bored? Find a bunny that will take them for walks.</p>
                    </li>
                </div>
            </div>
            <div className="about-me-links">
                <h1 className="about-me">Come check out our other work or LinkedIn !</h1>
                <ul className="links">
                    <li className="ant">
                        <a href="https://github.com/Khiienu"> Anthony's GitHub </a>
                        <li className="ant">
                            <a href="https://www.linkedin.com/in/anthony-huynh-a4b5961a4/"> Anthony's LinkedIn</a>
                        </li>
                    </li>
                    <li className="henry">
                        <a href="https://github.com/hnrywltn"> Henry's GitHub </a>
                        <li className="henry">
                            <a href="https://www.linkedin.com/in/henry-walton-324977187/"> Henry's LinkedIn</a>
                        </li>
                    </li>
                    <li className="jojo">
                        <a href="https://github.com/jyih"> Johnathan's GitHub </a>
                        <li className="jojo">
                            <a href="https://www.linkedin.com/in/johnathan-yih/"> Johnathan's LinkedIn</a>
                        </li>
                    </li>
                    <li className="jc">
                        <a href="https://github.com/cheeyongjc"> Jonathan's GitHub </a>
                        <li className="jc">
                            <a href="https://www.linkedin.com/in/cheeyongjc"> Jonathan's LinkedIn</a>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Splashpage;
