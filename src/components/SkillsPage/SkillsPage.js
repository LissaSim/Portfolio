import "./SkillsPage.css";
import icon from "../../image/icons/digital_wellbeing_FILL0_wght400_GRAD0_opsz24.svg"

const SkillsPage = () => {
    return(
        <main className="section">
            <div className="container">
                <h1 className="title-1">Skills</h1>
                <ul className="skills-list">
                    <li className="content-list__item">
                        <p><img src={icon} alt="Icon" style={{padding: "17px 0"}}/>JavaScript</p>
                    </li>
                    <li className="content-list__item">
                        <p><img src={icon} alt="Icon" style={{padding: "17px 0"}}/>TypeScript</p>
                    </li>
                    <li className="content-list__item">
                        <p><img src={icon} alt="Icon" style={{padding: "17px 0"}}/>React</p>
                    </li>
                    <li className="content-list__item">
                        <p><img src={icon} alt="Icon" style={{padding: "17px 0"}}/>Redux</p>
                    </li>
                    <li className="content-list__item">
                        <p><img src={icon} alt="Icon" style={{padding: "17px 0"}}/>HTML</p>
                    </li>
                    <li className="content-list__item">
                        <p><img src={icon} alt="Icon" style={{padding: "17px 0"}}/>CSS</p>
                    </li>
                    <li className="content-list__item">
                        <p><img src={icon} alt="Icon" style={{padding: "17px 0"}}/>Tailwind</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}
export default SkillsPage