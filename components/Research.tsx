"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { dictionaries, Locale } from "../config/dictionaries";
import { papersData } from "../config/papersData";
import "./Research.css";

const SELF_AUTHOR_REGEX = /(\bSuzuki T\b)/g;

function renderAuthors(authors: string) {
  return authors.split(SELF_AUTHOR_REGEX).map((part, i) =>
    part === "Suzuki T" ? (
      <span key={i} className="author-self">{part}</span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export default function Research({ lang }: { lang: string }) {
  const [expandedThemes, setExpandedThemes] = useState<string[]>([]);
  const [coAuthorExpanded, setCoAuthorExpanded] = useState(false);
  const dict = dictionaries[lang as Locale].research;

  const firstAuthorPapers = papersData.firstAuthor;
  const coAuthorPapers = papersData.coAuthor;

  const renderPapers = (papers: any[], themeKey: string) => {
    if (!papers || papers.length === 0) return null;
    const themeDict = dict.themes[themeKey as keyof typeof dict.themes];
    const isExpanded = expandedThemes.includes(themeKey);

    const toggleTheme = () => {
      if (!themeKey) return;
      setExpandedThemes(prev =>
        prev.includes(themeKey) ? prev.filter(k => k !== themeKey) : [...prev, themeKey]
      );
    };

    return (
      <div id={themeKey ? `theme-${themeKey}` : "theme-coauthor"} className="theme-section" style={{ marginBottom: "2rem" }}>
        {themeKey && themeDict && (
          <div
            className="theme-header-layout"
            onClick={toggleTheme}
            style={{ cursor: "pointer", display: "flex", alignItems: "center", transition: "all 0.3s ease", padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.05)" }}
          >
            <div className="theme-image-wrapper">
              <Image
                src={`/theme_${themeKey}.png`}
                alt={themeDict?.title || "Research Theme"}
                width={400}
                height={300}
                className="theme-image"
              />
            </div>
            <div className="theme-info" style={{ flex: 1 }}>
              <h3 className="theme-title" style={{ color: isExpanded ? "var(--color-primary)" : "var(--color-text)", transition: "color 0.3s ease" }}>{themeDict.title}</h3>
              <p className="theme-desc">{themeDict.desc}</p>
            </div>
            <div className="theme-toggle" style={{ marginLeft: "16px", display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: isExpanded ? "var(--color-primary)" : "var(--color-background-alt)", color: isExpanded ? "white" : "var(--color-text)", fontSize: "1.5rem", fontWeight: "bold", transition: "all 0.3s ease" }}>
              {isExpanded ? "−" : "＋"}
            </div>
          </div>
        )}

        <div style={{
          display: "grid",
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
          transition: "grid-template-rows 0.4s ease-in-out",
        }}>
          <div style={{ overflow: "hidden" }}>
            <div className="paper-list" style={{ marginTop: themeKey ? "1.5rem" : "0" }}>
              {papers.map((paper: any, index: number) => (
                <div key={index} className="paper-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="paper-content">
                    <h4 className="paper-title">
                      <a href={paper.link} target="_blank" rel="noopener noreferrer">
                        {paper.title}
                      </a>
                    </h4>
                    <p className="paper-authors" style={{ fontSize: "1rem", color: "var(--color-text)", margin: "4px 0" }}>{renderAuthors(paper.authors)}</p>
                    <div className="paper-meta" style={{ marginBottom: "8px", fontWeight: "600" }}>
                      <span className="paper-journal">{paper.journal}</span>
                      <span className="paper-year" style={{ marginLeft: "8px" }}>{paper.year}</span>
                    </div>
                    {paper.description && (
                      <p className="paper-description" style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.5", margin: "0 0 12px 0" }}>
                        {paper.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
          {dict.storyline && (
            <p className="section-storyline">{dict.storyline}</p>
          )}
          <div style={{ marginTop: "32px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
            <Image
              src="/research_header.jpg"
              alt="Medical Research"
              width={1200}
              height={500}
              style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", maxHeight: "400px" }}
            />
          </div>
        </div>

        <div className="research-content">
          <div className="research-group-header">
            <span className="research-group-number">01</span>
            <div>
              <span className="research-group-label">Publications</span>
              <h3 className="research-group-title">{dict.tab1st}</h3>
            </div>
            <span className="research-group-meta">
              {(firstAuthorPapers.preventive?.length || 0)
                + (firstAuthorPapers.acute?.length || 0)
                + (firstAuthorPapers.sdoh?.length || 0)
                + (firstAuthorPapers.quality?.length || 0)
                + (firstAuthorPapers.others?.length || 0)} papers
            </span>
          </div>
          {renderPapers(firstAuthorPapers.preventive || [], "preventive")}
          {renderPapers(firstAuthorPapers.acute || [], "acute")}
          {renderPapers(firstAuthorPapers.sdoh || [], "sdoh")}
          {renderPapers(firstAuthorPapers.quality || [], "quality")}
          {renderPapers(firstAuthorPapers.others || [], "others")}

          <div className="research-group-header" style={{ marginTop: "4rem" }}>
            <span className="research-group-number">02</span>
            <div>
              <span className="research-group-label">Publications</span>
              <h3 className="research-group-title">{dict.tabCo}</h3>
            </div>
            <span className="research-group-meta">{coAuthorPapers.length} papers</span>
          </div>
          <div className="theme-section">
            <div
              onClick={() => setCoAuthorExpanded(prev => !prev)}
              style={{ cursor: "pointer", display: "flex", alignItems: "center", padding: "16px", borderRadius: "12px", background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.05)" }}
            >
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, color: coAuthorExpanded ? "var(--color-primary)" : "var(--color-text)" }}>
                  {coAuthorPapers.length} co-authored publications
                </h4>
              </div>
              <div style={{ marginLeft: "16px", display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: coAuthorExpanded ? "var(--color-primary)" : "var(--color-background-alt)", color: coAuthorExpanded ? "white" : "var(--color-text)", fontSize: "1.5rem", fontWeight: "bold", transition: "all 0.3s ease" }}>
                {coAuthorExpanded ? "−" : "＋"}
              </div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateRows: coAuthorExpanded ? "1fr" : "0fr",
              transition: "grid-template-rows 0.4s ease-in-out",
            }}>
              <div style={{ overflow: "hidden" }}>
                <div className="paper-list" style={{ marginTop: "1.5rem" }}>
                  {coAuthorPapers.map((paper: any, index: number) => (
                    <div key={index} className="paper-card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="paper-content">
                        <h4 className="paper-title">
                          <a href={paper.link} target="_blank" rel="noopener noreferrer">
                            {paper.title}
                          </a>
                        </h4>
                        <p className="paper-authors" style={{ fontSize: "1rem", color: "var(--color-text)", margin: "4px 0" }}>{renderAuthors(paper.authors)}</p>
                        <div className="paper-meta" style={{ marginBottom: "8px", fontWeight: "600" }}>
                          <span className="paper-journal">{paper.journal}</span>
                          <span className="paper-year" style={{ marginLeft: "8px" }}>{paper.year}</span>
                        </div>
                        {paper.description && (
                          <p className="paper-description" style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.5", margin: "0 0 12px 0" }}>
                            {paper.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
