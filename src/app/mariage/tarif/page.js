import ParallaxHero from "@/components/ParallaxHero";
import Image from "next/image";

export const metadata = {
  title: "Tarifs Mariage - Photographe Clément Bayard",
  description:
    "Découvrez mes forfaits mariage personnalisés. Trois formules pour immortaliser votre jour J selon vos besoins et votre budget.",
};

function TarifsMariage() {
  const forfaits = [
    {
      nom: "Coquelicot",
      prix: "800 €",
      image: "/images/coquelicot.webp",
      prestations: [
        "Remise du bouquet",
        "Cérémonie (religieuse et civile)",
        "Vin d'honneur",
        "Séance couple",
      ],
      description:
        "Les photos sont sélectionnées, retouchées puis restituées en HD",
    },
    {
      nom: "Muguet",
      prix: "1 400 €",
      image: "/images/muguet.webp",
      prestations: [
        "Préparatifs des mariées",
        "Remise du bouquet",
        "Cérémonie (religieuse et civile)",
        "Vin d'honneur",
        "Séance couple",
      ],
      description:
        "Les photos sont sélectionnées, retouchées puis restituées en HD",
    },
    {
      nom: "Camélia",
      prix: "1 900 €",
      image: "/images/camelia.webp",
      prestations: [
        "Préparatifs des mariées",
        "Remise du bouquet",
        "Cérémonie (religieuse et civile)",
        "Vin d'honneur",
        "Séance couple",
        "Ouverture du bal",
        "Soirée jusqu'au gâteau",
        "Drone (sauf indication contraire géographique)",
      ],
      description:
        "Les photos sont sélectionnées, retouchées puis restituées en HD sur clef USB",
    },
  ];

  const options = [
    {
      titre: "Séance engagement",
      prix: "150 €",
      infos: "*frais de route applicables",
    },
    {
      titre: "Drone",
      prix: "190 €",
      infos: "*sauf indication contraire géographique",
    },
    {
      titre: "Album photo sur mesure",
      prix: "À partir de 300 €",
      infos: "*10% de remise si vous prenez la formule Camélia",
    },
    {
      titre: "Séance trash the dress à la mer",
      prix: "490 €",
      infos: "*frais de route applicable",
    },
  ];

  return (
    <div className="min-h-screen">
      <ParallaxHero
        imageSrc="/images/tarifsM.webp"
        title="Tarifs Mariage"
        subtitle="Des forfaits adaptés à vos besoins"
      />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
            Tarifs...
          </h2>
          <div className="text-lg text-white max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Capturer chaque instant de votre journée spéciale est ma passion.
              Chaque mariage a son histoire unique, et mon objectif est de la
              raconter à travers des images intemporelles. Mes tarifs mariage
              sont conçus pour offrir flexibilité et qualité, adaptés à vos
              besoins uniques.
            </p>

            <p className="font-semibold">Forfaits disponibles :</p>

            <div className="text-left space-y-3 max-w-3xl mx-auto">
              <p>
                <span className="font-semibold">Coquelicot :</span> Parfait pour
                ceux qui souhaitent immortaliser les moments clés. Ce forfait
                comprend la remise du bouquet, la couverture de la cérémonie, le
                vin d&apos;honneur et des portraits de couple.
              </p>

              <p>
                <span className="font-semibold">Muguet :</span> Pour une
                couverture plus étendue, ce forfait inclut des préparatifs, la
                remise du bouquet, la cérémonie, le vin d&apos;honneur et les
                portraits.
              </p>

              <p>
                <span className="font-semibold">Camélia :</span> Une couverture
                complète, des préparatifs jusqu&apos;au gâteau. Idéal pour
                capturer chaque sourire, larme et éclat de rire.
              </p>
            </div>

            <p>
              Chaque forfait peut être personnalisé pour répondre à vos souhaits
              spécifiques. Contactez-moi pour discuter de vos idées et créer un
              forfait sur mesure pour votre journée inoubliable.
            </p>

            <p className="italic">
              Je serais honoré de capturer vos plus beaux souvenirs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {forfaits.map((forfait, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={forfait.image}
                    alt={forfait.nom}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white font-['Cormorant_Garamond']">
                    {forfait.nom}
                  </h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-gray-800 font-['Cormorant_Garamond']">
                      {forfait.prix}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {forfait.prestations.map((prestation, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{prestation}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-gray-500 mb-6 italic">
                    {forfait.description}
                  </p>

                  <div className="text-center mt-auto">
                    <a
                      href="mailto:bayard.clt@gmail.com"
                      className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium"
                    >
                      Contactez-moi
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond']">
              Options
            </h3>
            <p className="text-gray-300 text-lg">
              Personnalisez votre forfait avec ces options supplémentaires
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors duration-300"
              >
                <h4 className="text-lg font-bold mb-3 font-['Cormorant_Garamond']">
                  {option.titre}
                </h4>
                <p className="text-2xl font-bold text-white mb-2">
                  {option.prix}
                </p>
                <p className="text-sm text-gray-300 italic">{option.infos}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
          Une question sur les tarifs ?
        </h3>
        <p className="text-lg text-white mb-8 leading-relaxed">
          N&apos;hésitez pas à me contacter pour discuter de votre projet et
          obtenir un devis personnalisé.
        </p>
        <a
          href="mailto:bayard.clt@gmail.com"
          className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-lg font-medium"
        >
          Demander un devis
        </a>
      </section>
    </div>
  );
}

export default TarifsMariage;
