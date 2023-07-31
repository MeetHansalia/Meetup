import Link from 'next/link'
import './MainNavigation.css'

function MainNavigation(){

    return(
        <header className="header">
            <div className="logo">Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;