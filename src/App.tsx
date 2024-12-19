import React, { useRef } from 'react';
import { Hero } from './components/Hero';
import { ImageGrid } from './components/ImageGrid';
import { Features } from './components/Features';
import { EssentialsSection } from './components/EssentialsSection';
import { ContactForm } from './components/ContactForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Section5 } from './components/Section5';

function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="py-6 px-4">
        <img src="/img/logo-wire-nest.jpg" alt="Wire Nest" className="h-32 mx-auto" />
      </nav>

      <main className="max-w-4xl mx-auto px-4">
        <Hero onGetStarted={scrollToForm} />
        <Features />
        <EssentialsSection />
        <Section5 />
        {/* Newsletter Section */}
        <div ref={formRef}>
          <section className="py-16 bg-gray-50 -mx-4 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl mb-4">Tout ce dont vous avez besoin, pour réussir dans la mode.</h2>
                <p className="text-gray-600">Laissez-nous vous tenir informé et rejoignez la première plateforme dédiée aux créateurs indépendants de la mode.</p>
              </div>
              <ContactForm />
            </div>
          </section>
        </div>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;