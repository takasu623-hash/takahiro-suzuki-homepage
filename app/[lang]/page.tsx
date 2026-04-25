import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Career from '@/components/Career';
import Research from '@/components/Research';
import Footer from '@/components/Footer';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <div className="min-h-screen">
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} />
        <News lang={lang} />
        <Career lang={lang} />
        <Research lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
