import './App.css';

import Nav from "../Nav/Nav";
import Header from "../Header/Header"
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SkillsPage from "../SkillsPage/SkillsPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <Router>
            <>
                <Nav/>
                <Routes>
                    <Route path={"/"} element={<Header/>}/>
                    <Route path={"/mainPage"} element={<Main/>}/>
                    <Route path={"/contactsPage"} element={<ContactsPage/>}/>
                    <Route path={"/skillsPage"} element={<SkillsPage/>}/>
                </Routes>
                <Footer/>
            </>
        </Router>
    );
}

export default App;
