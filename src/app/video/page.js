import ParallaxHero from "@/components/ParallaxHero";

export const metadata = {
  title: "Vidéos de Mariage - Photographe Clément Bayard",
  description:
    "Découvrez mes vidéos de mariage. Des films émouvants qui capturent l'essence de votre journée spéciale.",
};

function Video() {
  const videos = [
    {
      id: "luqYk4wHWcY",
      title: "Mariage romantique - Teaser",
    },
    {
      id: "TvmypklQaV0",
      title: "Cérémonie intime en extérieur",
    },
    {
      id: "hrNHayVVafs",
      title: "Portraits de couple au coucher du soleil",
    },
    {
      id: "BLncASbJdU0",
      title: "Moments spontanés de la réception",
    },
    {
      id: "WxZIXFPRY_I",
      title: "Film complet de mariage",
    },
  ];

  return (
    <div className="min-h-screen">
      <ParallaxHero
        imageSrc="/images/maries.webp"
        title="Vidéos de Mariage"
        subtitle="Revivez l'émotion de vos plus beaux moments"
      />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
            Films de mariage
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Au-delà de la photographie, je capture également l&apos;essence de
            votre mariage en mouvement. Chaque film raconte une histoire unique,
            celle de votre amour et de cette journée inoubliable.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8 md:gap-12">
            {videos.map((video, index) => (
              <div key={video.id} className="group">
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  <div className="relative aspect-video">
                    <iframe
                      className="w-full h-full rounded-t-2xl"
                      src={`https://www.youtube.com/embed/${video.id}?si=cWVwiINOpDmRUzoV`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white font-['Cormorant_Garamond'] mb-2">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-gray-800">
                Pourquoi choisir la vidéo ?
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                La vidéo apporte une dimension supplémentaire à vos souvenirs.
                Elle capture les voix, les rires, les émotions en mouvement que
                la photographie seule ne peut saisir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mes films de mariage privilégient l&apos;authenticité et la
                poésie, créant un récit visuel qui vous permettra de revivre
                chaque instant magique de votre journée.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  ✓
                </div>
                <span className="text-gray-700">
                  Films cinématographiques haute qualité
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  ✓
                </div>
                <span className="text-gray-700">
                  Montage professionnel avec musique
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  ✓
                </div>
                <span className="text-gray-700">
                  Plusieurs formats : teaser, film complet
                </span>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  ✓
                </div>
                <span className="text-gray-700">
                  Livraison en haute définition
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond']">
              Mes prestations vidéo
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Des formules flexibles pour immortaliser votre mariage en
              mouvement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors duration-300">
              <h4 className="text-xl font-bold mb-3 font-['Cormorant_Garamond']">
                Teaser
              </h4>
              <p className="text-2xl font-bold text-white mb-4">
                À partir de xxxx €
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>Film court (2-3 minutes)</li>
                <li>Moments forts de la journée</li>
                <li>Parfait pour les réseaux sociaux</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors duration-300">
              <h4 className="text-xl font-bold mb-3 font-['Cormorant_Garamond']">
                Film complet
              </h4>
              <p className="text-2xl font-bold text-white mb-4">
                À partir de xxxx €
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>Film de 10-15 minutes</li>
                <li>Couverture complète</li>
                <li>Récit complet de votre journée</li>
              </ul>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors duration-300">
              <h4 className="text-xl font-bold mb-3 font-['Cormorant_Garamond']">
                Formule complète
              </h4>
              <p className="text-2xl font-bold text-white mb-4">
                À partir de xxxx €
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>Teaser + Film complet</li>
                <li>Plusieurs angles de vue</li>
                <li>Drone inclus si possible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
          Intéressé par la vidéo ?
        </h3>
        <p className="text-lg text-white mb-8 leading-relaxed">
          Contactez-moi pour discuter de votre projet vidéo et créer ensemble le
          film de vos rêves.
        </p>
        <a
          href="mailto:bayard.clt@gmail.com"
          className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-lg font-medium"
        >
          Parlons de votre projet
        </a>
      </section>
    </div>
  );
}

export default Video;
