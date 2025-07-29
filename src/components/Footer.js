import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Cormorant_Garamond']">
              Clément Bayard
            </h3>
            <p className="text-gray-300 mb-4">
              Photographe & Vidéaste professionnel basé dans le Nord de la
              France
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:opacity-75 transition-opacity">
                <Image
                  src="/images/facebook.webp"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a> */}
              <a
                href="https://www.instagram.com/clementbayard/"
                className="hover:opacity-75 transition-opacity"
                target="_blank"
              >
                <Image
                  src="/images/instagram.webp"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              {/* <a href="#" className="hover:opacity-75 transition-opacity">
                <Image
                  src="/images/youtube.webp"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mariage"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Photographie de mariage
                </Link>
              </li>
              <li>
                <Link
                  href="/culinaire"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Photographie culinaire
                </Link>
              </li>
              <li>
                <Link
                  href="/video"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Vidéographie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="text-gray-300 space-y-2">
              <p>Valenciennes, Nord</p>
              <p>France</p>
              <Link
                href="/contact"
                className="inline-block mt-2 text-white hover:text-gray-300 transition-colors"
              >
                Me contacter →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; 2025 Tous droits réservés. Site réalisé par{" "}
            <Link
              href="https://www.silverback-film.com"
              target="_blank"
              className="hover:text-white transition-colors mt-2 inline-block"
            >
              Matthieu Wandolski
            </Link>
          </p>
          <Link
            href="/mentions-legales"
            className="hover:text-white transition-colors mt-2 inline-block"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
