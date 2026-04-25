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
                        {dict.keywords.map((kw, idx) => (
                            <span key={idx} className="keyword-tag">{kw}</span>
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
