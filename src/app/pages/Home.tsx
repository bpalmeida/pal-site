import { ImageWithFallback } from '../components/ImageWithFallback';
import { Link } from 'react-router';
import { useLanguage } from '../i18n/LanguageContext';
import areaLavagem from '../../assets/photos/area-lavagem.jpg';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-screen">
      <ImageWithFallback
        src={areaLavagem}
        alt="Picadeiro Arena Lusitana"
        className="w-full h-full object-cover"
        loading="eager"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-6xl font-serif mb-4 tracking-wide">
            {t.home.title}
          </h2>
          <p className="text-white text-xl mb-8 font-light tracking-wide">
            {t.home.subtitle}
          </p>
          { <Link
            to="/location"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-12 py-4 text-lg font-medium tracking-wide transition-colors duration-300 uppercase"
          >
            {t.location.heroTitle}
          </Link>}
        </div>
      </div>
    </div>
  );
}
