import "./Footer.css";
import imgGit from "../../image/icons/gitHub.svg";
import imgLink from "../../image/icons/linkedIn.svg"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><NavLink to={"https://github.com/LissaSim"}><img src={imgGit} alt="Link"/></NavLink></li>
                        <li className="social__item"><NavLink to={"https://www.linkedin.com/in/yelizaveta-simutina-640744279/"}><img src={imgLink} alt="Link"/></NavLink></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer