export const metadata = {
  title: "Mentions Légales - Photographe Clément Bayard",
  description:
    "Mentions légales du site de Clément Bayard, photographe professionnel spécialisé en mariage et photographie culinaire.",
};

function MentionsLegal() {
  const sections = [
    {
      title: "Identité du photographe",
      items: [
        "Nom : Clement Bayard",
        "Adresse : 12 rue des semailles, Escaudain 59124",
        "Email : bayard.clt@gmail.com",
        "Numéro de téléphone : 0615978820"
      ]
    },
    {
      title: "Numéro d'identification",
      items: [
        "Numéro de Siret : 87903512900029"
      ]
    },
    {
      title: "Hébergement du site",
      items: [
        "Hébergement assuré par : Hostinger International Ltd",
        "Adresse de l'hébergeur : 61 Lordou Vironos Street, 6023 Larnaca, Cyprus",
        "Contact de l'hébergeur : support@hostinger.com"
      ]
    },
    {
      title: "Propriété intellectuelle",
      items: [
        "Tous droits réservés - Les images présentes sur ce site sont protégées par le droit d'auteur. Toute reproduction ou utilisation des images sans autorisation préalable est interdite."
      ]
    },
    {
      title: "Politique de confidentialité",
      items: [
        "Nous respectons la confidentialité de vos informations. Aucune donnée personnelle n'est collectée automatiquement sur ce site sans votre consentement explicite. Pour plus d'informations sur notre politique de confidentialité, veuillez consulter notre page dédiée à la vie privée."
      ]
    },
    {
      title: "Cookies",
      items: [
        "Ce site n'utilise pas de cookies pour collecter des données personnelles ou suivre l'activité des visiteurs. Nous respectons la vie privée de nos utilisateurs."
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-['Cormorant_Garamond'] text-white">
            Mentions Légales
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Informations légales concernant le site de Clément Bayard, photographe professionnel
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 font-['Cormorant_Garamond'] text-white border-b border-gray-300 pb-3">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-200 leading-relaxed">
                    {section.title === "Propriété intellectuelle" || 
                     section.title === "Politique de confidentialité" || 
                     section.title === "Cookies" ? (
                      <div className="italic text-gray-300 bg-gray-800/30 p-4 rounded-lg">
                        "{item}"
                      </div>
                    ) : (
                      <span className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-4 font-['Cormorant_Garamond'] text-white">
              Contact
            </h3>
            <p className="text-gray-200 mb-4">
              Pour toute question concernant ces mentions légales ou l'utilisation de ce site :
            </p>
            <a
              href="mailto:bayard.clt@gmail.com"
              className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 font-medium"
            >
              Contactez-nous
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Dernière mise à jour : Janvier 2025</p>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegal;