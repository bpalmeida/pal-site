import { ImageWithFallback } from '../../components/ImageWithFallback';
import { useLanguage } from '../../i18n/LanguageContext';
import passeiosHero from '../../../assets/photos/passeios-hero.jpg';

export default function Rides() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <ImageWithFallback
          src={passeiosHero}
          alt="Passeios a Cavalo"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif">{t.rides.heroTitle}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.rides.intro1}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.rides.intro2}
          </p>
        </div>

        {/* Pricing */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">{t.rides.pricingTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Short Trail */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-gray-700">{t.rides.short.title}</h3>
              <p className="text-gray-600 mb-6">{t.rides.short.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.rides.short.price}</span>
                <span className="text-gray-600">{t.rides.short.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.rides.short.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Medium Trail */}
            <div className="bg-amber-50 border-2 border-amber-600 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-amber-700">{t.rides.medium.title}</h3>
              <p className="text-gray-600 mb-6">{t.rides.medium.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.rides.medium.price}</span>
                <span className="text-gray-600">{t.rides.medium.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.rides.medium.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Sunset Trail */}
            <div className="bg-white border-2 border-amber-600 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-amber-700">{t.rides.sunset.title}</h3>
              <p className="text-gray-600 mb-6">{t.rides.sunset.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.rides.sunset.price}</span>
                <span className="text-gray-600">{t.rides.sunset.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.rides.sunset.features.map((feature) => (
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
