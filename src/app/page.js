import Image from "next/image";
import ParallaxHero from "@/components/ParallaxHero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ParallaxHero
        imageSrc="/images/paysageAccueil.webp"
        title="Clément Bayard"
        subtitle="Photographe & Vidéaste"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <Image
                src="/images/presentation.webp"
                alt="Clément Bayard"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="fade-in">
              <div className=" text-white">
                <p className="text-lg leading-relaxed mb-6">
                  Bonjour et bienvenue dans mon univers. Je m&apos;appelle Clément
                  Bayard.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Je viens du Nord, plus précisément de Valenciennes, et j&apos;ai eu
                  30 ans cette année.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Le monde de l&apos;image occupe une place très importante dans ma
                  vie, au point où j&apos;ai tout laissé derrière moi pour lui
                  consacrer mon temps. Ancien chef pâtissier, ma passion pour
                  l&apos;image a émergé pendant que je pratiquais la pâtisserie,
                  notamment en contribuant à la réalisation de livres de
                  recettes avec mon chef cuisinier dans un restaurant étoilé.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  L&apos;année 2022 a été décisive pour moi, j&apos;ai pris la décision de
                  me perfectionner davantage dans le domaine de la vidéo. J&apos;ai
                  choisi la formation de JC Pieri, à l&apos;issue de laquelle j&apos;ai
                  obtenu une certification de vidéaste professionnel.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  En janvier 2023, j&apos;ai quitté mon poste de chef pâtissier pour
                  me consacrer à 100 % à ma passion.
                </p>

                <p className="text-lg leading-relaxed ">
                  La photo et la vidéo occupent mes pensées jour et nuit, cela
                  m&apos;obsède. Depuis lors, j&apos;avance de projet en projet. Ce qui me
                  plaît et m&apos;anime dans ce métier, c&apos;est de mettre en lumière le
                  savoir-faire et le geste de chaque artisan, et de plonger dans
                  chaque univers, une expérience que je trouve très
                  enrichissante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 font-['Romantis_Scene']">
            Qui suis-je ?
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-gray-900">
            <p>
              Bonjour et bienvenue dans mon univers. Je m&apos;appelle Clément
              Bayard. Je viens du Nord, plus précisément de Valenciennes, et
              j&apos;ai eu 30 ans cette année.
            </p>

            <p>
              Le monde de l&apos;image occupe une place très importante dans ma vie,
              au point où j&apos;ai tout laissé derrière moi pour lui consacrer mon
              temps. Ancien chef pâtissier, ma passion pour l&apos;image a émergé
              pendant que je pratiquais la pâtisserie, notamment en contribuant
              à la réalisation de livres de recettes avec mon chef cuisinier
              dans un restaurant étoilé.
            </p>

            <p>
              L&apos;année 2022 a été décisive pour moi, j&apos;ai pris la décision de me
              perfectionner davantage dans le domaine de la vidéo. J&apos;ai choisi
              la formation de JC Pieri, à l&apos;issue de laquelle j&apos;ai obtenu une
              certification de vidéaste professionnel. En janvier 2023, j&apos;ai
              quitté mon poste de chef pâtissier pour me consacrer à 100 % à ma
              passion.
            </p>

            <p>
              La photo et la vidéo occupent mes pensées jour et nuit, cela
              m&apos;obsède. Depuis lors, j&apos;avance de projet en projet. Ce qui me
              plaît et m&apos;anime dans ce métier, c&apos;est de mettre en lumière le
              savoir-faire et le geste de chaque artisan, et de plonger dans
              chaque univers, une expérience que je trouve très enrichissante.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
