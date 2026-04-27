import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { dictionaries, Locale } from '@/config/dictionaries';
import '@/components/News.css';

export default async function NewsArchivePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = dictionaries[lang as Locale].news;

    const items = [...dict.items].sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div className="min-h-screen">
            <Navbar lang={lang} />
            <main>
                <section className="news-section" style={{ paddingTop: '120px' }}>
                    <div className="container news-container">
                        <Link href={`/${lang}`} className="news-back-link">
                            {dict.backToHome}
                        </Link>
                        <h1 className="section-title">{dict.allTitle}</h1>
                        <p className="news-subtitle">{dict.allSubtitle}</p>
                        <div className="news-list">
                            {items.map((item, idx) => (
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
            </main>
            <Footer lang={lang} />
        </div>
    );
}
