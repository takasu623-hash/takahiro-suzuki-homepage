"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { dictionaries, Locale } from '../config/dictionaries';
import './Navbar.css';

export default function Navbar({ lang }: { lang: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dict = dictionaries[lang as Locale].nav;
  const currentLang = lang as Locale;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href={`/${lang}`} className="nav-logo">
          T. Suzuki
        </Link>
        <div className="nav-right">
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>{dict.about}</a>
            <a href="#career" className="nav-link" onClick={() => setMenuOpen(false)}>{dict.career}</a>
            <a href="#research" className="nav-link" onClick={() => setMenuOpen(false)}>{dict.research}</a>
            <a href="#presentations" className="nav-link" onClick={() => setMenuOpen(false)}>{dict.presentations}</a>
          </div>
          <div className="lang-switch" aria-label="Language">
            <Link href="/ja" className={`lang-option ${currentLang === 'ja' ? 'active' : ''}`} aria-current={currentLang === 'ja' ? 'page' : undefined}>日本語</Link>
            <span className="lang-divider">|</span>
            <Link href="/en" className={`lang-option ${currentLang === 'en' ? 'active' : ''}`} aria-current={currentLang === 'en' ? 'page' : undefined}>English</Link>
          </div>
          <button
            className="mobile-menu-btn"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
