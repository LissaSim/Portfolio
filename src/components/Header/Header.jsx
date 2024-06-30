import './Header.css';
import pdf from "../../image/Simutina_CV_Front-end (1).pdf";
import docx from "../../image/portfolio.docx"

const Header = () => {
    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = pdf;
        downloadLink.download = 'Simutina_CV_Front-end.pdf';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    const handleDownloadResume = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = docx;
        downloadLink.download = 'Simutina_CV_Copywriting.docx';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }

    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Yelizaveta</em></strong><br/>
                    frontend/design/copywriting
                </h1>
                <div className="header__text">
                    <p>your specialist</p>
                </div>
                <button className="btn" onClick={handleDownload}>Download CV Frontend dev</button>
                <button className="btn" onClick={handleDownloadResume}>Download Portfolio Copywriter</button>
            </div>
        </header>
    );
};

export default Header;
