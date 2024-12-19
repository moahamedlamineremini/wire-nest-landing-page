import React from 'react';

export function EssentialsSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Correction du div dupliqué et ajustements responsive */}
        <div className="text-center relative">
          <div className="text-sm text-gray-500 mb-4 border border-gray-200 rounded-full px-4 md:px-6 py-2 inline-block bg-gray-50">
            Apps, websites, logos & more
          </div>
          
          <h1 className="text-[32px] md:text-[44px] leading-tight mb-2">
            Tout ce dont vous avez besoin,
          </h1>
          
          <div className="text-[40px] md:text-[56px] leading-tight italic font-light">
            en un seul endroit
          </div>

          <img 
            src="/img/Vector.png"
            alt="Vector decoration"
            className="hidden md:block absolute top-1/2 -right-1 -translate-y-1/2 w-12 md:w-16 h-auto"
          />
        </div>

        {/* Section de contenu avec ajustements responsive */}
        <div className="mt-8 md:mt-16">
          <div className="relative">
            <div className="absolute -left-4 md:-left-8 -top-4 md:-top-8 w-32 md:w-64 h-32 md:h-64 bg-[#FF0000] rounded-full opacity-50" />
          </div>
          
          <div className="relative bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Colonne de gauche */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-medium mb-4">
                  Tout ce dont vous avez besoin, pour réussir dans la mode.
                </h2>
                
                <p className="text-gray-600 mb-6 md:mb-8">
                  Que vous soyez un designer débutant ou confirmé, notre mission est de donner de la visibilité à vos créations mode et de vous aider à trouver une clientèle engagée qui valorise votre talent.
                </p>

                <div className="h-px bg-gray-200 mb-6 md:mb-8" />

                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm">Vitrine en ligne</span>
                  <span className="px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm">Outils de marketing</span>
                  <span className="px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm">Support et accompagnement</span>
                  <span className="px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm">Social media</span>
                  <span className="px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm">Typography</span>
                  <span className="px-3 md:px-4 py-2 bg-gray-100 rounded-full text-xs md:text-sm">Paiements sécurisés</span>
                </div>
              </div>

              {/* Colonne de droite - Image */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="/img/fashion1.png" 
                    alt="Collection mode" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}