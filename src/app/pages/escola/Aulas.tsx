import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useLanguage } from '../../i18n/LanguageContext';
import aulasHorse from '../../../assets/photos/aulas-horse.jpg';

export default function Aulas() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <ImageWithFallback
          src={aulasHorse}
          alt="Aulas de Equitação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif">{t.aulas.heroTitle}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.aulas.intro1}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.aulas.intro2}
          </p>
        </div>

        {/* Pricing */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">{t.aulas.pricingTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Individual */}
            <div className="bg-white border-2 border-amber-600 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-amber-700">{t.aulas.individual.title}</h3>
              <p className="text-gray-600 mb-6">{t.aulas.individual.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.aulas.individual.price}</span>
                <span className="text-gray-600">{t.aulas.individual.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.aulas.individual.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Group */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-gray-700">{t.aulas.group.title}</h3>
              <p className="text-gray-600 mb-6">{t.aulas.group.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.aulas.group.price}</span>
                <span className="text-gray-600">{t.aulas.group.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.aulas.group.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Package */}
            <div className="bg-amber-50 border-2 border-amber-600 rounded-lg p-8 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm">
                {t.aulas.package.badge}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-amber-700">{t.aulas.package.title}</h3>
              <p className="text-gray-600 mb-6">{t.aulas.package.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.aulas.package.price}</span>
                <span className="text-gray-600">{t.aulas.package.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.aulas.package.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
