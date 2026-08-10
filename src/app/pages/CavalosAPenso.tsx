import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../i18n/LanguageContext';
import estabulos from '../../assets/photos/estabulos.jpg';

export default function CavalosAPenso() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <ImageWithFallback
          src={estabulos}
          alt="Cavalos a Penso"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-serif">{t.cavalosPenso.heroTitle}</h1>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {t.cavalosPenso.intro1}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.cavalosPenso.intro2}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {/* Box Stall */}
          <div className="bg-white border-2 border-amber-600 rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-serif mb-6 text-amber-700">{t.cavalosPenso.boxPlan.title}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">{t.cavalosPenso.boxPlan.price}</span>
              <span className="text-gray-600">{t.cavalosPenso.boxPlan.period}</span>
            </div>

            <h4 className="font-bold text-lg mb-3 text-gray-800">{t.cavalosPenso.boxPlan.includesLabel}</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              {t.cavalosPenso.boxPlan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <div className="bg-amber-50 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>{t.cavalosPenso.boxPlan.noteLabel}</strong> {t.cavalosPenso.boxPlan.note}
              </p>
            </div>
          </div>

          {/* Field */}
          <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-serif mb-6 text-gray-700">{t.cavalosPenso.fieldPlan.title}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">{t.cavalosPenso.fieldPlan.price}</span>
              <span className="text-gray-600">{t.cavalosPenso.fieldPlan.period}</span>
            </div>

            <h4 className="font-bold text-lg mb-3 text-gray-800">{t.cavalosPenso.fieldPlan.includesLabel}</h4>
            <ul className="space-y-2 text-gray-700 mb-6">
              {t.cavalosPenso.fieldPlan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>{t.cavalosPenso.fieldPlan.noteLabel}</strong> {t.cavalosPenso.fieldPlan.note}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif mb-6 text-center">{t.cavalosPenso.additionalServicesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.cavalosPenso.additionalServices.map((service) => (
              <div key={service.title} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                <p className="text-gray-600 mb-2">{service.description}</p>
                <p className="text-2xl font-bold text-amber-700">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
