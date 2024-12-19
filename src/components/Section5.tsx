export function Section5() {
    return (
      <section className="max-w-6xl mx-auto px-4">
        {/* Background squares pattern */}
        <div className="absolute inset-0 grid grid-cols-12 gap-1 opacity-[0.05] pointer-events-none">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="bg-gray-200 w-full h-8" />
          ))}
        </div>
  
        {/* Main content section */}
        <div className="relative text-center py-16 space-y-6">
          <span className="text-gray-600 text-lg border border-gray-200 rounded-full px-6 py-2 inline-block bg-gray-50">
            #Mode
          </span>
  
          <h2 className="text-5xl font-medium">
            Nous travaillons au service des <br/>
            <span className="italic font-normal">créateurs passionnés</span>
          </h2>
  
          <p className="text-gray-600">
            Pour tous ceux qui souhaitent donner de la visibilité à leurs<br/>
            créations mode sans complication.
          </p>
  
          {/* Decorative image */}
          <div className="absolute top-0 right-0 pointer-events-none">
            <img 
              src="/img/Vector1.png" 
              alt="" 
              className="w-24 h-auto"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    );
  }