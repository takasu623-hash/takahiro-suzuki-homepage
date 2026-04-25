import { dictionaries, Locale } from '../config/dictionaries';
import './Footer.css';

export default function Footer({ lang }: { lang: string }) {
    const dict = dictionaries[lang as Locale].footer;

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h2 className="footer-title">{dict.title}</h2>
                    <p className="footer-subtitle">{dict.subtitle}</p>
                    <p className="footer-hospital">{dict.affiliation1}<br />{dict.affiliation2}</p>
                </div>
                <div className="footer-links">
                    <a href="https://pubmed.ncbi.nlm.nih.gov/?term=%22Takahiro+Suzuki%22+St.+Luke%27s" target="_blank" rel="noopener noreferrer" className="footer-link">
                        {dict.pubmed}
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {dict.title}. {dict.rights}</p>
            </div>
        </footer>
    );
}
