import Link from 'next/link';
import { dictionaries, Locale } from '../config/dictionaries';
import './Navbar.css';

export default function Navbar({ lang }: { lang: string }) {
  const dict = dictionaries[lang as Locale].nav;
  const currentLang = lang as Locale;
  const targetLang = currentLang === 'en' ? 'ja' : 'en';

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href={`/${lang}`} className="nav-logo">
          T. Suzuki
        </Link>
        <div className="nav-links">
          <a href="#about" className="nav-link">{dict.about}</a>
          <a href="#news" className="nav-link">{dict.news}</a>
          <a href="#career" className="nav-link">{dict.career}</a>
          <a href="#research" className="nav-link">{dict.research}</a>
          <Link href={`/${targetLang}`} className="lang-toggle btn btn-outline" style={{ marginLeft: '1rem', padding: '0.4rem 0.8rem' }}>
            {currentLang === 'en' ? '日本語' : 'EN'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
