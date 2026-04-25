import { dictionaries, Locale } from '../config/dictionaries';
import './Books.css';

export default function Books({ lang }: { lang: string }) {
    const dict = dictionaries[lang as Locale].books;

    return (
        <section id="books" className="books-section">
            <div className="container books-container">
                <h2 className="section-title">{dict.title}</h2>
                <div className="books-grid">
                    {dict.items.map((item, idx) => (
                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="book-card animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="book-meta">
                                <span className="book-year">{item.year}</span>
                                <span className="book-publisher">{item.publisher}</span>
                            </div>
                            <h3 className="book-title">{item.title}</h3>
                            <div className="book-link-hint">
                                View Book
                                <svg className="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
