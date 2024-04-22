import './Header.css';
import pdf from "../../image/Simutina_CV_Front-end (1).pdf";

const Header = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = pdf;
        downloadLink.download = 'Simutina_CV_Front-end.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Yelizaveta</em></strong><br />
                    frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating</p>
                </div>
                <button className="btn" onClick={handleDownload}>Download CV</button>
            </div>
        </header>
    );
};

export default Header;
