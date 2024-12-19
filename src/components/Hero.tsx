export function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="max-w-6xl mx-auto px-4">
      {/* Background squares pattern */}
      <div className="absolute inset-0 grid grid-cols-12 gap-1 opacity-[0.05] pointer-events-none">
        {[...Array(144)].map((_, i) => (
          <div key={i} className="bg-gray-200 w-full h-8" />
        ))}
      </div>

      {/* Top text section */}
      <div className="relative text-center py-16 space-y-6">
        <p className="text-gray-600 text-lg border border-gray-200 rounded-full px-6 py-2 inline-block bg-gray-50">
          Boostez la visibilité de vos créations mode et trouvez vos clients facilement
        </p>
        <h1 className="text-5xl font-medium">
          Vous créez, nous vous <br/>
          connectons <span className="relative">
            <img src="/img/etoile.png" alt="étoile" className="inline-block h-[0.8em] w-auto" />
            <span className="italic"> aux acheteurs</span>
          </span>
        </h1>
        <p className="text-gray-600">
          Rejoignez la plateforme dédiée aux créateurs indépendants de la mode pour<br/>
          vendre, inspirer et briller.
        </p>
        <button 
          onClick={onGetStarted}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-black/90 transition-all flex items-center gap-2 mx-auto"
        >
          Rejoindre maintenant
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <p className="text-sm text-gray-500">Vous créez, nous vous aidons.</p>
      </div>

      {/* Images section */}
      <div className="relative grid grid-cols-2 gap-8 mt-12">
        <div className="rounded-3xl overflow-hidden aspect-[4/3]">
          {/* Image 1: Remplacez le src par votre image */}
          <img 
            src="/img/image-2-deux-mec.png" 
            alt="Fashion creators" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-3xl overflow-hidden aspect-[4/3]">
          {/* Image 2: Remplacez le src par votre image */}
          <img 
            src="/img/image1-fille.png" 
            alt="Fashion style" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}