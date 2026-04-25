import { dictionaries, Locale } from '../config/dictionaries';
import './News.css';

export default function News({ lang }: { lang: string }) {
    const dict = dictionaries[lang as Locale].news;

    return (
        <section id="news" className="news-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{dict.title}</h2>
                    <p className="section-subtitle">{dict.subtitle}</p>
                </div>
                <div className="news-list">
                    {dict.items.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="news-card news-animate"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="news-meta">
                                <span className="news-date">{item.date}</span>
                                <span className="news-category">{item.category}</span>
                            </div>
                            <h3 className="news-headline">{item.headline}</h3>
                            <p className="news-description">{item.description}</p>
                            <div className="news-link-hint">View on PubMed →</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
