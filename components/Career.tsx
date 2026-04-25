import { dictionaries, Locale } from '../config/dictionaries';
import './Career.css';

export default function Career({ lang }: { lang: string }) {
    const dict = dictionaries[lang as Locale].career;

    return (
        <section id="career" className="career-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{dict.title}</h2>
                    <p className="section-subtitle">{dict.subtitle}</p>
                </div>

                <div className="timeline">
                    {dict.items.map((item, index) => (
                        <div key={index} className="timeline-item animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-role">{item.title}</h3>
                                <p className="timeline-institution">{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
