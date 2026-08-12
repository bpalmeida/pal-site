import { ImageWithFallback } from '../../components/ImageWithFallback';
import { useLanguage } from '../../i18n/LanguageContext';
import eventosHero from '../../../assets/photos/eventos-hero.jpg';

export default function Eventos() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <ImageWithFallback
          src={eventosHero}
          alt="Eventos Equestres"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif">{t.eventos.heroTitle}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.eventos.intro1}
          </p>
          {/* <p className="text-lg text-gray-700 leading-relaxed">
            {t.eventos.intro2}
          </p> */}
        </div>

        {/* Pricing */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">{t.eventos.pricingTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Competition
            <div className="bg-white border-2 border-amber-600 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-amber-700">{t.eventos.competitions.title}</h3>
              <p className="text-gray-600 mb-6">{t.eventos.competitions.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.eventos.competitions.price}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.eventos.competitions.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div> */}

            {/* Workshop */}
            {/* <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-gray-700">{t.eventos.workshops.title}</h3>
              <p className="text-gray-600 mb-6">{t.eventos.workshops.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.eventos.workshops.price}</span>
                <span className="text-gray-600">{t.eventos.workshops.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.eventos.workshops.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div> */}

            {/* Private Event */}
            <div className="bg-amber-50 border-2 border-amber-600 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-amber-700">{t.eventos.privateEvents.title}</h3>
              <p className="text-gray-600 mb-6">{t.eventos.privateEvents.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.eventos.privateEvents.price}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.eventos.privateEvents.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Birthday Party */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif mb-4 text-gray-700">{t.eventos.birthdayParty.title}</h3>
              <p className="text-gray-600 mb-6">{t.eventos.birthdayParty.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{t.eventos.birthdayParty.price}</span>
                <span className="text-gray-600">{t.eventos.birthdayParty.period}</span>
              </div>
              <ul className="space-y-2 text-gray-700">
                {t.eventos.birthdayParty.features.map((feature) => (
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
