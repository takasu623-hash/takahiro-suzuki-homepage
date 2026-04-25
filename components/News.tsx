import { dictionaries, Locale } from '../config/dictionaries';
import './News.css';

export default function News({ lang }: { lang: string }) {
    const dict = dictionaries[lang as Locale].news;

    return (
        <section id="news" className="news-section">
            <div className="container news-container">
                <h2 className="section-title">{dict.title}</h2>
                <div className="news-list">
                    {dict.items.map((item, idx) => (
                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="news-item">
                            <span className="news-date">{item.date}</span>
                            <span className="news-title">{item.title}</span>
                            <svg className="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
