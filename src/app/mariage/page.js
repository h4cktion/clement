import ParallaxHero from "@/components/ParallaxHero";
import Image from "next/image";

export const metadata = {
  title: "Photographe Mariage - Clément Bayard",
  description:
    "Photographe de mariage dans le Nord de la France. Capturez vos moments les plus précieux avec un style authentique et intemporel.",
};

function Mariage() {
  return (
    <div className="min-h-screen">
      <ParallaxHero
        imageSrc="/images/maries.webp"
        title="Photographie de Mariage"
        subtitle="Immortaliser vos moments les plus précieux"
      />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
            Votre histoire mérite d&apos;être racontée
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Chaque mariage est unique, chaque couple a son histoire. Mon
            approche consiste à capturer l&apos;essence authentique de votre
            journée, les émotions sincères et les instants magiques qui feront
            de vos souvenirs un trésor intemporel.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-gray-800">
                Mon style
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Ma photographie de mariage privilégie l&apos;authenticité et
                l&apos;émotion. Je privilégie un style documentaire mêlé à des
                portraits délicats, capturant naturellement vos interactions et
                vos sourires complices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Lumière naturelle, compositions équilibrées et moments spontanés
                : mon objectif est de créer des images intemporelles qui
                révèlent la beauté de votre union.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/bagues.webp"
                alt="Photographie de mariage - détail des alliances"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:order-1">
            <Image
              src="/images/petales.webp"
              alt="Détails de mariage - pétales et décoration"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:order-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
              Mon approche
            </h3>
            <p className="text-white mb-4 leading-relaxed">
              Votre mariage est avant tout votre journée. Mon rôle est de me
              faire discret tout en étant présent aux moments clés. Je prends le
              temps de comprendre vos attentes et vos personnalités pour adapter
              ma prestation.
            </p>
            <p className="text-white leading-relaxed">
              De la préparation à la soirée, je documente chaque étape avec
              sensibilité, créant un récit visuel complet de cette journée
              exceptionnelle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond']">
              Un processus sur mesure
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Chaque prestation est personnalisée selon vos besoins et vos
              envies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold mb-3 font-['Cormorant_Garamond'] text-white">
                Première rencontre
              </h4>
              <p className="text-gray-300">
                Échange autour de vos attentes, visite des lieux et définition
                de votre style
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold mb-3 font-['Cormorant_Garamond'] text-white">
                Le jour J
              </h4>
              <p className="text-gray-300">
                Couverture complète de votre journée avec discrétion et
                professionnalisme
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold mb-3 font-['Cormorant_Garamond'] text-white">
                Livraison
              </h4>
              <p className="text-gray-300">
                Galerie en ligne privée et livraison de vos images retouchées
                avec soin
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
          Prêt à créer vos souvenirs ?
        </h3>
        <p className="text-lg text-white mb-8 leading-relaxed">
          Parlons de votre projet et créons ensemble des images qui vous
          ressemblent.
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

export default Mariage;
