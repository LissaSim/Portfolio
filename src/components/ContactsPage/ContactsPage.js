import "./ContactsPage.css";
import {NavLink} from "react-router-dom";

const ContactsPage = () => {
    return(
        <section>
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h3>Telegram</h3>
                        <p><NavLink to={"tg://resolve?domain=@oneliza"}>@oneliza</NavLink></p>
                    </li>
                    <li className="content-list__item">
                        <h3>LinkedIn</h3>
                        <p><NavLink to={"https://www.linkedin.com/in/yelizaveta-simutina-640744279/"}>Simutina Yelizaveta</NavLink></p>
                    </li>
                    <li className="content-list__item">
                        <h3>Email</h3>
                        <p><a href="mailto:simutina.liza2003@gmail.com">@simutina.liza2003@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default ContactsPage