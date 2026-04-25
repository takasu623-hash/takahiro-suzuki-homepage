import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Books from '@/components/Books';
import Career from '@/components/Career';
import Research from '@/components/Research';
import Presentations from '@/components/Presentations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <div className="min-h-screen">
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <News lang={lang} />
        <Books lang={lang} />
        <Career lang={lang} />
        <Research lang={lang} />
        <Presentations lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
