import Image from 'next/image';
import { dictionaries, Locale } from '../config/dictionaries';
import './Hero.css';

export default function Hero({ lang }: { lang: string }) {
    const dict = dictionaries[lang as Locale].hero;

    return (
        <section id="about" className="hero-section">
            <div className="hero-background-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <p className="hero-greeting">{dict.greeting}</p>
                    <h1 className="hero-title">{dict.name}</h1>
                    <h2 className="hero-subtitle">{dict.title}</h2>
                    <p className="hero-affiliation">
                        {dict.affiliation1}<br />
                        {dict.affiliation2}
                    </p>
                    <div className="hero-keywords">
                        {dict.keywords.map((kw: any, idx) => (
                            <a href={kw.link} key={idx} className="keyword-tag">{kw.label}</a>
                        ))}
                    </div>
                    <p className="hero-description">{dict.description}</p>
                    <div className="hero-actions">
                        <a href="#research" className="btn btn-primary">
                            {dict.btnResearch}
                        </a>
                        <a href="#career" className="btn btn-outline">
                            {dict.btnCareer}
                        </a>
                    </div>
                    <div className="hero-socials" style={{ marginTop: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <a href="https://x.com/SuzukiTtweet" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 3.869H5.078z"></path></svg>
                            X (Twitter)
                        </a>
                        <a href="https://researchmap.jp/taka-suzuki" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Researchmap
                        </a>
                    </div>
                </div>
                <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="hero-shape"></div>
                    <div className="hero-image-wrapper">
                        <Image
                            src="/profile.png"
                            alt={dict.name}
                            width={320}
                            height={400}
                            className="hero-image"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
