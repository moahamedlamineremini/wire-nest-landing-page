import React from 'react';
import { MessageSquare } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="text-center py-8 md:py-16">
      <div className="text-center relative px-4 md:px-0">
        <div className="text-sm text-gray-500 mb-4 border border-gray-200 rounded-full px-4 md:px-6 py-2 inline-block bg-gray-50">
          Des questions ?
        </div>
        <h2 className="text-3xl md:text-5xl font-medium">
          Nous sommes là
          <br />
          pour vous guider.
        </h2>
      </div>
      <div className="bg-gray-50 p-6 md:p-12 rounded-3xl mt-8 mx-4 md:mx-0">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1">
            <h3 className="text-2xl md:text-[28px] font-normal mb-2">Vous souhaitez en savoir plus sur notre plateforme</h3>
            <p className="text-xl md:text-2xl font-medium mb-2">Contactez Georges</p>
            <p className="text-base text-gray-600 mb-6 md:mb-8">
              Nous sommes là pour répondre à toutes vos interrogations et vous aider à faire le bon choix.
            </p>
            <a 
              href="tel:+33600000000" 
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-colors"
            >
              <MessageSquare size={20} />
              Réserver un appel avec Georges
            </a>
          </div>
          <div className="relative flex-1 h-[300px] md:h-auto">
            <img 
              src="/img/george.png" 
              alt="Georges" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute -right-4 -top-4 w-16 md:w-24 h-16 md:h-24 bg-[#EBFF00] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <a href="#" className="hover:underline text-sm md:text-base">Privacy Policy</a>
        <a href="#" className="hover:underline text-sm md:text-base">Terms & Conditions</a>
      </div>
    </section>
  );
}