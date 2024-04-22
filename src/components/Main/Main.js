
import "./Main.css";
import img1 from "../../image/projects/employees.png";
import img2 from "../../image/projects/02.jpg";
import img3 from "../../image/projects/fs2s.png";
import img4 from "../../image/projects/food.png"
import img5 from "../../image/projects/marvel.png";
import img6 from "../../image/projects/color-randomizer.png"
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <section>
            <div className="container">
                <h2 className="title">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <NavLink to={"https://employees-company-app.vercel.app/"}>
                        <img src={img1} alt="" className="project__img"/>
                        <h3 className="project__title">Employees company</h3>
                        </NavLink>
                    </li>
                    <li className="project">
                        <NavLink to={"https://fs2s-eight.vercel.app/"}>
                            <img src={img3} alt="" className="project__img"/>
                            <h3 className="project__title">FS2S</h3>
                        </NavLink>
                    </li>
                    <li className="project">
                        <NavLink to={"https://food-seven-dusky.vercel.app/"}>
                            <img src={img4} alt="" className="project__img"/>
                            <h3 className="project__title">Food program</h3>
                        </NavLink>
                    </li>
                    <li className="project">
                        <NavLink to={"https://color-randomizer.vercel.app/"}>
                            <img src={img6} alt="" className="project__img"/>
                            <h3 className="project__title">Color randomizer</h3>
                        </NavLink>
                    </li>
                    <li className="project">
                        <NavLink to={"https://marvel-heroes-three-bay.vercel.app/"}>
                            <img src={img5} alt="" className="project__img"/>
                            <h3 className="project__title">Marvel Heroes</h3>
                        </NavLink>
                    </li>
                    <li className="project">
                        <img src={img2} alt="" className="project__img"/>
                        <h3 className="project__title">Video Service</h3>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Main;
