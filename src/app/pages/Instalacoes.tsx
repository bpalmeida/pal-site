import { ImageWithFallback } from '../components/ImageWithFallback';
import { useLanguage } from '../i18n/LanguageContext';
import picadeiroCoberto from '../../assets/photos/picadeiro-coberto.jpg';
import picadeiroExterior from '../../assets/photos/picadeiro-exterior.jpg';
import estabulos from '../../assets/photos/estabulos.jpg';
import camposPastagem from '../../assets/photos/campos-pastagem.jpg';
import areaLavagem from '../../assets/photos/area-lavagem.jpg';
import aulasHorse from '../../assets/photos/aulas-horse.jpg';

const facilityImages = [
  picadeiroCoberto,
  picadeiroExterior,
  estabulos,
  camposPastagem,
  areaLavagem,
  aulasHorse,
];

export default function Instalacoes() {
  const { t } = useLanguage();
  const facilities = t.instalacoes.facilities.map((facility, index) => ({
    ...facility,
    image: facilityImages[index],
  }));

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <ImageWithFallback
          src={picadeiroCoberto}
          alt="Instalações"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif">{t.instalacoes.heroTitle}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.instalacoes.intro}
          </p>
          {/* <p className="text-lg text-gray-700 leading-relaxed">
            {t.instalacoes.intro2}
          </p> */}
        </div>

        {/* Facilities Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden`}
            >
              <div className="md:w-1/2">
                <ImageWithFallback
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-3xl font-serif mb-4 text-amber-700">
                  {facility.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="max-w-5xl mx-auto mt-16">
          <h2 className="text-3xl font-serif mb-8 text-center">{t.instalacoes.amenitiesTitle}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {t.instalacoes.amenities.map((amenity) => (
              <div key={amenity.title} className="bg-amber-50 p-6 rounded-lg text-center w-full sm:w-72">
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h4 className="font-bold text-lg mb-2">{amenity.title}</h4>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
