import Image from "next/image";
import ParallaxHero from "@/components/ParallaxHero";
import MarriageGallery from "@/components/MarriageGallery";

export default function Home() {
  const weddingIds = [
    "e6e46808-638d-48da-ab9e-952bfc81a000",
    "4c981356-c634-4a06-b2a0-cf6e6dac8e00",
    "3a08de09-00fa-4a8d-3cfb-954e67b13300",
    "8bc97513-9d00-4af0-c3ee-b6c2d8852b00",
    "5189a8e2-5c53-40a8-cd05-98803af35000",
    "a4adb845-bfae-4915-b345-753dd9455d00",
    "69250042-a291-477e-af16-e920903e7000",
    "4e24ada3-3327-4236-7c24-f2bedbb18900",
    "969c9f72-047e-4028-86e0-de1eff2f3200",
    "bd29a4c7-c0d3-498f-3355-184f1964a100",
    "baaee502-4257-4324-006c-2e9f41e2a000",
    "dc02504c-6ab0-48b9-c45c-f717e25e4400",
    "c3aa6933-722c-4484-91ae-579147ee6f00",
    "3bfacbf5-4407-4096-87f7-441b34bd8c00",
    "bed0fe73-31fd-4126-5857-f7885a8cfc00",
    "328b5016-ef98-4627-b9e1-249e795ecc00",
  ];

  const marriageImages = weddingIds.map((id, index) => ({
    src: `https://imagedelivery.net/VTaecW_LrLPnGN8IYdst0A/${id}/w=500`,
    alt: `Photo de mariage ${index + 1}`,
  }));

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
                  Bonjour et bienvenue dans mon univers. Je m&apos;appelle
                  Clément Bayard.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Je viens du Nord, plus précisément de Valenciennes, et
                  j&apos;ai eu 30 ans cette année.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Le monde de l&apos;image occupe une place très importante dans
                  ma vie, au point où j&apos;ai tout laissé derrière moi pour
                  lui consacrer mon temps. Ancien chef pâtissier, ma passion
                  pour l&apos;image a émergé pendant que je pratiquais la
                  pâtisserie, notamment en contribuant à la réalisation de
                  livres de recettes avec mon chef cuisinier dans un restaurant
                  étoilé.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  L&apos;année 2022 a été décisive pour moi, j&apos;ai pris la
                  décision de me perfectionner davantage dans le domaine de la
                  vidéo. J&apos;ai choisi la formation de JC Pieri, à
                  l&apos;issue de laquelle j&apos;ai obtenu une certification de
                  vidéaste professionnel.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  En janvier 2023, j&apos;ai quitté mon poste de chef pâtissier
                  pour me consacrer à 100 % à ma passion.
                </p>

                <p className="text-lg leading-relaxed ">
                  La photo et la vidéo occupent mes pensées jour et nuit, cela
                  m&apos;obsède. Depuis lors, j&apos;avance de projet en projet.
                  Ce qui me plaît et m&apos;anime dans ce métier, c&apos;est de
                  mettre en lumière le savoir-faire et le geste de chaque
                  artisan, et de plonger dans chaque univers, une expérience que
                  je trouve très enrichissante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <MarriageGallery images={marriageImages} />
    </div>
  );
}
