import "./Nav.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="container">
                <div className="naw-row">
                    <NavLink to={"/"} className="logo">My portfolio</NavLink>
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink
                                to={'/mainPage'} href="#"
                                className={({isActive}) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link nav-list__link"}
                            >Projects</NavLink></li>
                        <li className="nav-list__item">
                            <NavLink
                                to={'/skillsPage'}
                                className={({isActive}) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link nav-list__link"}
                            >Skills</NavLink></li>
                        <li className="nav-list__item">
                            <NavLink to={'/contactsPage'}
                                     className={({isActive}) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link nav-list__link"}
                            >Contacts</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav