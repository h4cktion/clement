import ParallaxHero from "@/components/ParallaxHero";
import Image from "next/image";

export const metadata = {
  title: "Photographe Culinaire - Clément Bayard",
  description:
    "Photographe culinaire professionnel. Ancien chef pâtissier, je capture l'art gastronomique avec authenticité et passion.",
};

function Culinaire() {
  // Images culinaires externes - 15 photos professionnelles
  const culinaireImageIds = [
    "cf47f229-4400-4caa-e889-f0ad8ec16d00",
    "3a83ec62-f59f-4bf7-f9d7-088808687600",
    "c4455699-78db-4e06-6137-401cb96f6900",
    "2192b5dc-eb25-4a7a-265b-3bf84e6e7000",
    "f765444b-015d-4712-6fe2-0b78efd3ac00",
    "008ecf9b-0170-478a-df2a-b92057331100",
    "b5b640db-e4b5-4518-c907-d93582ab6d00",
    "28b1a572-41be-4eb9-ed53-d9440ae47000",
    "055dd471-b5b1-4292-1a59-5b865cb9ec00",
    "17abe626-91bc-4766-1f70-cf9081f73300",
    "480abc94-515d-4a37-e153-8ea6e09b1100",
    "a697631f-cf30-4035-9681-8473a7980200",
    "957e1f6a-b3fc-4d64-2919-f596ac90c300",
    "29668467-8983-49c5-dc28-1912ef2a7900",
    "77ff11ed-75ca-4aa4-7b4d-c32d45f9b600",
    "055dd471-b5b1-4292-1a59-5b865cb9ec00",
  ];

  const imageBaseUrl = "https://imagedelivery.net/VTaecW_LrLPnGN8IYdst0A";

  return (
    <div className="min-h-screen">
      <ParallaxHero
        imageSrc="/images/oignons.webp"
        title="Photographie Culinaire"
        subtitle="L'art de capturer les saveurs"
      />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
            Photographe culinaire...
          </h2>
          <div className="text-lg text-white max-w-4xl mx-auto leading-relaxed space-y-6">
            <p>
              Bienvenue dans mon portfolio dédié à la photographie culinaire.
              Anciennement chef pâtissier, ma passion pour la photographie
              culinaire est née en réalisant des livres de recettes avec
              l&apos;Atelier Good.
            </p>

            <p>
              La photographie culinaire me permet d&apos;associer mes deux
              passions. Pour moi, je ne travaille pas, c&apos;est mon terrain de
              jeux.
            </p>

            <p>
              Étant du métier, je dis souvent que j&apos;ai l&apos;habitude de
              me placer sans vous gêner pendant vos services, ce qui est un réel
              avantage.
            </p>

            <p>
              Aujourd&apos;hui, je mets toutes ces connaissances au service de
              la photographie culinaire. J&apos;aime capturer les gestes et la
              réalité d&apos;une cuisine.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src={`${imageBaseUrl}/${culinaireImageIds[0]}/public`}
                alt="Photographie culinaire professionnelle"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-gray-800">
                Mon approche unique
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Fort de mon expérience en tant qu&apos;ancien chef pâtissier,
                j&apos;apporte une compréhension profonde de l&apos;art
                culinaire à mes photographies. Je sais comment sublimer chaque
                création, respecter le travail du chef et capturer
                l&apos;essence de votre cuisine.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ma connaissance des contraintes de service me permet de
                travailler discrètement, sans perturber le rythme de votre
                équipe, tout en obtenant des images d&apos;exception.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
              Mes spécialités
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Photographie de plats
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Sublimer vos créations culinaires avec style et authenticité
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Reportage en cuisine
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Capturer l&apos;énergie et les gestes du service sans
                    déranger
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Portraits de chefs
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Mettre en valeur votre personnalité et votre passion
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Livres de recettes
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Conception visuelle complète de vos ouvrages culinaires
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 md:order-1">
            <Image
              src={`${imageBaseUrl}/${culinaireImageIds[1]}/public`}
              alt="Création culinaire artistique"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond']">
              Pourquoi me choisir ?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une double expertise qui fait la différence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white text-gray-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                👨‍🍳
              </div>
              <h4 className="text-xl font-semibold mb-3 font-['Cormorant_Garamond'] text-white">
                Expérience culinaire
              </h4>
              <p className="text-gray-300">
                Ancien chef pâtissier, je comprends les enjeux et contraintes de
                votre métier
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-gray-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                📸
              </div>
              <h4 className="text-xl font-semibold mb-3 font-['Cormorant_Garamond'] text-white">
                Expertise photographique
              </h4>
              <p className="text-gray-300">
                Techniques professionnelles pour sublimer chaque création
                culinaire
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-gray-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                🤝
              </div>
              <h4 className="text-xl font-semibold mb-3 font-['Cormorant_Garamond'] text-white">
                Approche respectueuse
              </h4>
              <p className="text-gray-300">
                Travail discret qui s&apos;adapte au rythme de votre
                établissement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-gray-800">
              Portfolio Culinaire
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez une sélection de mes photographies culinaires, alliant
              technique photographique et expertise gastronomique
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {culinaireImageIds.map((imageId, index) => (
              <div
                key={imageId}
                className="relative aspect-square group overflow-hidden rounded-lg"
              >
                <Image
                  src={`${imageBaseUrl}/${imageId}/public`}
                  alt={`Photographie culinaire ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
          Prêt à sublimer vos créations ?
        </h3>
        <p className="text-lg text-white mb-8 leading-relaxed">
          Discutons de votre projet et créons ensemble des images qui mettent en
          valeur votre talent culinaire.
        </p>
        <a
          href="mailto:bayard.clt@gmail.com"
          className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-lg font-medium"
        >
          Contactez-moi
        </a>
      </section>
    </div>
  );
}

export default Culinaire;
