import { ImageWithFallback } from '../../components/ImageWithFallback';
import { useLanguage } from '../../i18n/LanguageContext';
import atlsHero from '../../../assets/photos/atls-hero.jpg';

export default function ATLs() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <ImageWithFallback
          src={atlsHero}
          alt="ATL de Equitação"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif">{t.atls.heroTitle}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.atls.intro1}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.atls.intro2}
          </p>
        </div>

        {/* Pricing */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">{t.atls.pricingTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Daily */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-gray-700">{t.atls.daily.title}</h3>
              <p className="text-gray-600 mb-6">{t.atls.daily.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.atls.daily.price}</span>
                <span className="text-gray-600">{t.atls.daily.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.atls.daily.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Weekly */}
            <div className="bg-amber-50 border-2 border-amber-600 rounded-lg p-8 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm">
                {t.atls.weekly.badge}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-amber-700">{t.atls.weekly.title}</h3>
              <p className="text-gray-600 mb-6">{t.atls.weekly.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.atls.weekly.price}</span>
                <span className="text-gray-600">{t.atls.weekly.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.atls.weekly.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Summer Camp */}
            <div className="bg-white border-2 border-amber-600 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-amber-700">{t.atls.summerCamp.title}</h3>
              <p className="text-gray-600 mb-6">{t.atls.summerCamp.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.atls.summerCamp.price}</span>
                <span className="text-gray-600">{t.atls.summerCamp.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.atls.summerCamp.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="text-xl font-bold mb-2 text-blue-900">{t.atls.infoTitle}</h3>
            <ul className="space-y-2 text-blue-800">
              {t.atls.infoItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
