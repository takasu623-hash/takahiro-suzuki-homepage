"use client";

import { useState } from 'react';
import { dictionaries, Locale } from '../config/dictionaries';
import './Research.css';

export default function Research({ lang }: { lang: string }) {
    const [activeTab, setActiveTab] = useState<'1st' | 'co'>('1st');
    const dict = dictionaries[lang as Locale].research;

    const firstAuthorPapers = {
        sdoh: [
            {
                title: "Social network diversity and COVID-19 infection and severity risk: a longitudinal population study.",
                journal: "BMJ Public Health",
                year: "2024",
                link: "https://pubmed.ncbi.nlm.nih.gov/41607901/"
            }
        ],
        acute: [
            {
                title: "Nonfatal Adverse Events and Risk for Subsequent Mortality in Patients Undergoing Percutaneous Coronary Intervention.",
                journal: "JACC Cardiovasc Interv",
                year: "2026",
                link: "https://pubmed.ncbi.nlm.nih.gov/41837917/"
            },
            {
                title: "Prognostic Implications of Bleeding and Ischemic Complications in Acute Myocardial Infarction-Related Cardiogenic Shock Managed With Microaxial Flow Pump.",
                journal: "Circ Cardiovasc Interv",
                year: "2026",
                link: "https://pubmed.ncbi.nlm.nih.gov/41904791/"
            },
            {
                title: "Prognostic Implications of Hemoglobin Drop With and Without Overt Bleeding After Percutaneous Coronary Intervention.",
                journal: "JACC Asia",
                year: "2024",
                link: "https://pubmed.ncbi.nlm.nih.gov/38827552/"
            },
            {
                title: "Risk-Stratified Prognostic Implications of Contrast-Associated Acute Kidney Injury After Percutaneous Coronary Intervention.",
                journal: "J Am Heart Assoc",
                year: "2024",
                link: "https://pubmed.ncbi.nlm.nih.gov/38156475/"
            }
        ],
        preventive: [
            {
                title: "Blood Pressure After Changes in Light-to-Moderate Alcohol Consumption in Women and Men: Longitudinal Japanese Annual Checkup Analysis.",
                journal: "J Am Heart Assoc",
                year: "2025",
                link: "https://pubmed.ncbi.nlm.nih.gov/40048128/"
            }
        ]
    };

    const coAuthorPapers = {
        sdoh: [
            {
                title: "Left-Digit Bias in Serum Creatinine Levels and Contrast Administration: A Nationwide Cohort Study Using a Japanese Percutaneous Coronary Intervention Registry.",
                journal: "J Am Heart Assoc",
                year: "2023",
                link: "https://pubmed.ncbi.nlm.nih.gov/37732350/"
            }
        ],
        acute: [],
        preventive: [
            {
                title: "Demographic Determinants Influencing the Adoption of Genetic Testing for Cardiovascular Diseases in Japan - Insights From a Large-Scale Online Survey.",
                journal: "Circ J",
                year: "2025",
                link: "https://pubmed.ncbi.nlm.nih.gov/40049445/"
            },
            {
                title: "Lung Function Changes Across the Menopausal Transition: A Longitudinal Analysis of Annual Examinations.",
                journal: "Chest",
                year: "2025",
                link: "https://pubmed.ncbi.nlm.nih.gov/40976467/"
            }
        ]
    };

    const currentPapers = activeTab === '1st' ? firstAuthorPapers : coAuthorPapers;

    const renderPapers = (papers: any[], themeKey: string) => {
        if (!papers || papers.length === 0) return null;
        const themeDict = dict.themes[themeKey as keyof typeof dict.themes];

        return (
            <div className="theme-section">
                <h3 className="theme-title">{themeDict.title}</h3>
                <p className="theme-desc">{themeDict.desc}</p>
                <div className="paper-list">
                    {papers.map((paper, index) => (
                        <a key={index} href={paper.link} target="_blank" rel="noopener noreferrer" className="paper-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="paper-meta">
                                <span className="paper-journal">{paper.journal}</span>
                                <span className="paper-year">{paper.year}</span>
                            </div>
                            <h4 className="paper-title">{paper.title}</h4>
                            <div className="paper-link-hint">View on PubMed →</div>
                        </a>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section id="research" className="research-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{dict.title}</h2>
                    <p className="section-subtitle">{dict.subtitle}</p>
                    {dict.storyline && <p className="section-storyline">{dict.storyline}</p>}
                </div>

                <div className="research-tabs">
                    <button
                        className={`tab-btn ${activeTab === '1st' ? 'active' : ''}`}
                        onClick={() => setActiveTab('1st')}
                    >
                        {dict.tab1st}
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'co' ? 'active' : ''}`}
                        onClick={() => setActiveTab('co')}
                    >
                        {dict.tabCo}
                    </button>
                </div>

                <div className="research-content">
                    {renderPapers(currentPapers.preventive, 'preventive')}
                    {renderPapers(currentPapers.acute, 'acute')}
                    {renderPapers(currentPapers.sdoh, 'sdoh')}
                </div>
            </div>
        </section>
    );
}
