"use client";

import { useState } from 'react';
import { dictionaries, Locale } from '../config/dictionaries';
import { presentationsData, Presentation, PresentationFormat } from '../config/presentationsData';
import './Presentations.css';

type TabKey = 'international' | 'domestic' | 'invited';

const formatColor: Record<PresentationFormat, string> = {
    'Symposium': '#7c3aed',
    'Oral': '#0a2540',
    'Poster': '#0891b2',
    'Moderated Poster': '#0d9488',
    'Invited Presentation': '#b45309',
};

export default function Presentations({ lang }: { lang: string }) {
    const [activeTab, setActiveTab] = useState<TabKey>('international');
    const dict = dictionaries[lang as Locale].presentations;

    const tabs: { key: TabKey; label: string; data: Presentation[] }[] = [
        { key: 'international', label: dict.tabInternational, data: presentationsData.international },
        { key: 'domestic', label: dict.tabDomestic, data: presentationsData.domestic },
        { key: 'invited', label: dict.tabInvited, data: presentationsData.invited },
    ];

    const current = tabs.find((t) => t.key === activeTab)!;

    return (
        <section id="presentations" className="presentations-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{dict.title}</h2>
                    <p className="section-subtitle">{dict.subtitle}</p>
                </div>

                <div className="presentations-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                            <span className="tab-count">{tab.data.length}</span>
                        </button>
                    ))}
                </div>

                <div className="presentations-list">
                    {current.data.map((p, idx) => {
                        const inner = (
                            <>
                                <div className="presentation-meta">
                                    <span className="presentation-year">{p.year}</span>
                                    {p.format === 'Invited Presentation' ? (
                                        <span
                                            className="presentation-format"
                                            style={{ backgroundColor: formatColor[p.format] }}
                                        >
                                            {p.format}
                                        </span>
                                    ) : null}
                                    {p.link ? (
                                        <span className="presentation-link-hint">
                                            Abstract
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="external-icon">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </span>
                                    ) : null}
                                </div>
                                <h3 className="presentation-title">{p.title}</h3>
                                <p className="presentation-conference">
                                    {p.conference}
                                    {p.location ? <span className="presentation-location"> · {p.location}</span> : null}
                                </p>
                            </>
                        );
                        return p.link ? (
                            <a key={idx} href={p.link} target="_blank" rel="noopener noreferrer" className="presentation-card presentation-card-link">
                                {inner}
                            </a>
                        ) : (
                            <div key={idx} className="presentation-card">{inner}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
