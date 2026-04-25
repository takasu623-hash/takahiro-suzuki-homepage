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

                <div className="career-chart">
                    {dict.items.map((item, index) => (
                        <div key={index} className="career-row animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                            <div className="career-year-cell">
                                <span className="career-year">{item.year}</span>
                            </div>
                            <div className="career-details-cell">
                                <h3 className="career-role">{item.title}</h3>
                                <p className="career-institution">{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
