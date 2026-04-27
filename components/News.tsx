import Link from 'next/link';
import { dictionaries, Locale } from '../config/dictionaries';
import './News.css';

const DEFAULT_VISIBLE = 3;

export default function News({ lang }: { lang: string }) {
    const dict = dictionaries[lang as Locale].news;

    const itemsByDateDesc = [...dict.items].sort((a, b) => b.date.localeCompare(a.date));
    const visible = itemsByDateDesc.slice(0, DEFAULT_VISIBLE);
    const hasMore = itemsByDateDesc.length > DEFAULT_VISIBLE;

    return (
        <section id="news" className="news-section">
            <div className="container news-container">
                <h2 className="section-title">{dict.title}</h2>
                <div className="news-list">
                    {visible.map((item, idx) => (
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
                {hasMore && (
                    <Link href={`/${lang}/news`} className="news-toggle">
                        {`${dict.showAll} (${itemsByDateDesc.length})`}
                        <svg className="news-toggle-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </Link>
                )}
            </div>
        </section>
    );
}
