import { Mail, Facebook, Instagram, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function OndeEstamos() {
  const { t } = useLanguage();

  return (
    <div className="pt-40 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-serif text-center mb-12">{t.ondeEstamos.heroTitle}</h1>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-serif mb-6 text-amber-700">{t.ondeEstamos.contactsTitle}</h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.ondeEstamos.addressLabel}</h3>
                  <p className="text-gray-700">
                    Caminho do Roseiral 149<br />
                    2640-577 - Mafra<br />
                    Lisboa, Portugal
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.ondeEstamos.phoneLabel}</h3>
                  <p className="text-gray-700">+351 926 230 596</p>
                  <p className="text-gray-700">+351 912 024 203</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.ondeEstamos.emailLabel}</h3>
                  <a href="mailto:picadeiroarenalusitana@gmail.com" className="text-amber-600 hover:text-amber-700">
                    picadeiroarenalusitana@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-lg mb-3">{t.ondeEstamos.socialLabel}</h3>
                <div className="flex gap-4">
                  {/* <a
                    href="https://facebook.com/arenalusitana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a> */}
                  <a
                    href="https://instagram.com/picadeiroarenalusitana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="border-t pt-6 mt-6">
                <h3 className="font-bold text-lg mb-3">{t.ondeEstamos.hoursLabel}</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>{t.ondeEstamos.hoursWeekday}</span>
                    <span className="font-medium">09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.ondeEstamos.hoursSunday}</span>
                    <span className="font-medium">09:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-serif mb-6 text-amber-700">{t.ondeEstamos.locationTitle}</h2>

            {/* Google Maps Embed */}
            <div className="w-full h-[450px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27448.64732138895!2d-9.3392602745032!3d38.946864595194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1f29fc102da553%3A0x2b8e5b55cb8f7728!2sPicadeiro%20Arena%20Lusitana!5e0!3m2!1spt-PT!2spt!4v1786383259123!5m2!1spt-PT!2spt" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Picadeiro Arena Lusitana"
              ></iframe>
            </div>

            

            <div className="mt-6 bg-amber-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>{t.ondeEstamos.howToArriveLabel}</strong> {t.ondeEstamos.howToArriveText}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {/* <div className="max-w-3xl mx-auto mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-serif mb-6 text-center text-amber-700">Envie-nos uma Mensagem</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="O seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  placeholder="seuemail@exemplo.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                placeholder="+351 912 345 678"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                placeholder="Escreva aqui a sua mensagem..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
}
