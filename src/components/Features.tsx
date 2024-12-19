export function Features() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header section with tag and title */}
      <div className="text-center mb-16">
        <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm mb-4 inline-block">#Fashion</span>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="bg-pink-100 w-16 h-16 rounded-[25%] rotate-45"></div>
          <h2 className="text-4xl font-medium">
            Vous créez, <span className="italic">nous vous aidons</span>
          </h2>
        </div>
        <p className="text-gray-600">Mettez en ligne vos créations en quelques clics</p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <img src="/img/cadre1.png" alt="Outils simples" className="w-full mb-6 rounded-lg" />
          <h3 className="font-medium text-xl mb-3">Outils simples</h3>
          <p className="text-gray-600">
            Notre plateforme intuitive vous guide pour créer votre boutique en ligne rapidement
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <img src="/img/cadre2.png" alt="Plus de visibilité" className="w-full mb-6 rounded-lg" />
          <h3 className="font-medium text-xl mb-3">Plus de visibilité</h3>
          <p className="text-gray-600">
            Vos produits sont mis en avant auprès de clients passionnés par la mode unique et authentique
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <img src="/img/cadre3.png" alt="Gagnez du temps" className="w-full mb-6 rounded-lg" />
          <h3 className="font-medium text-xl mb-3">Gagnez du temps</h3>
          <p className="text-gray-600">
            Concentrez-vous sur vos créations, on s'occupe de la mise en relation avec les acheteurs
          </p>
        </div>
      </div>
    </section>
  );
}