import { Outlet, Link, ScrollRestoration } from "react-router";
import { useState } from "react";
import logo from '../../assets/PAL_logo_1.png';
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-white/30 text-xs overflow-hidden flex-shrink-0" role="group" aria-label="Language">
      <button
        onClick={() => setLanguage('pt')}
        aria-pressed={language === 'pt'}
        className={`w-9 py-1.5 text-center transition-colors ${language === 'pt' ? 'bg-amber-600 text-white' : 'text-white/70 hover:text-white'}`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        className={`w-9 py-1.5 text-center transition-colors ${language === 'en' ? 'bg-amber-600 text-white' : 'text-white/70 hover:text-white'}`}
      >
        EN
      </button>
    </div>
  );
}

export default function Layout() {
  const [showEscolaMenu, setShowEscolaMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileEscolaOpen, setMobileEscolaOpen] = useState(false);
  const { t } = useLanguage();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileEscolaOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-0">
          <div className="flex items-center justify-between">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src={logo}
                alt="Picadeiro Arena Lusitana"
                className="h-20"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-8 text-white">
                <li className="relative"
                    onMouseEnter={() => setShowEscolaMenu(true)}
                    onMouseLeave={() => setShowEscolaMenu(false)}>
                  <button className="hover:text-amber-300 transition-colors flex items-center gap-1">
                    {t.nav.schoolMenu}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showEscolaMenu && (
                    <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                      <div className="bg-black/90 backdrop-blur-sm rounded-lg overflow-hidden">
                        <Link
                          to="/escola/aulas"
                          className="block px-6 py-3 hover:bg-amber-600 transition-colors"
                        >
                          {t.nav.aulas}
                        </Link>
                        <Link
                          to="/escola/passeios"
                          className="block px-6 py-3 hover:bg-amber-600 transition-colors"
                        >
                          {t.nav.passeios}
                        </Link>
                        <Link
                          to="/escola/eventos"
                          className="block px-6 py-3 hover:bg-amber-600 transition-colors"
                        >
                          {t.nav.eventos}
                        </Link>
                        {/* ATLs hidden for now
                        <Link
                          to="/escola/atls"
                          className="block px-6 py-3 hover:bg-amber-600 transition-colors"
                        >
                          {t.nav.atls}
                        </Link>
                        */}
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link to="/cavalos-penso" className="hover:text-amber-300 transition-colors">
                    {t.nav.cavalosPenso}
                  </Link>
                </li>
                <li>
                  <Link to="/instalacoes" className="hover:text-amber-300 transition-colors">
                    {t.nav.instalacoes}
                  </Link>
                </li>
                <li>
                  <Link to="/galeria" className="hover:text-amber-300 transition-colors">
                    {t.nav.galeria}
                  </Link>
                </li>
                <li>
                  <Link to="/onde-estamos" className="hover:text-amber-300 transition-colors">
                    {t.nav.ondeEstamos}
                  </Link>
                </li>
              </ul>
              <LanguageSwitch />
            </div>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <ul className="text-white px-6 py-2">
              <li className="border-b border-white/10">
                <button
                  className="w-full flex items-center justify-between py-4"
                  onClick={() => setMobileEscolaOpen((open) => !open)}
                  aria-expanded={mobileEscolaOpen}
                >
                  {t.nav.schoolMenu}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileEscolaOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileEscolaOpen && (
                  <ul className="pb-3 pl-4 space-y-1">
                    <li>
                      <Link to="/escola/aulas" onClick={closeMobileMenu} className="block py-2 text-white/80 hover:text-amber-300 transition-colors">
                        {t.nav.aulas}
                      </Link>
                    </li>
                    <li>
                      <Link to="/escola/passeios" onClick={closeMobileMenu} className="block py-2 text-white/80 hover:text-amber-300 transition-colors">
                        {t.nav.passeios}
                      </Link>
                    </li>
                    <li>
                      <Link to="/escola/eventos" onClick={closeMobileMenu} className="block py-2 text-white/80 hover:text-amber-300 transition-colors">
                        {t.nav.eventos}
                      </Link>
                    </li>
                    {/* ATLs hidden for now
                    <li>
                      <Link to="/escola/atls" onClick={closeMobileMenu} className="block py-2 text-white/80 hover:text-amber-300 transition-colors">
                        {t.nav.atls}
                      </Link>
                    </li>
                    */}
                  </ul>
                )}
              </li>
              <li className="border-b border-white/10">
                <Link to="/cavalos-penso" onClick={closeMobileMenu} className="block py-4 hover:text-amber-300 transition-colors">
                  {t.nav.cavalosPenso}
                </Link>
              </li>
              <li className="border-b border-white/10">
                <Link to="/instalacoes" onClick={closeMobileMenu} className="block py-4 hover:text-amber-300 transition-colors">
                  {t.nav.instalacoes}
                </Link>
              </li>
              <li className="border-b border-white/10">
                <Link to="/galeria" onClick={closeMobileMenu} className="block py-4 hover:text-amber-300 transition-colors">
                  {t.nav.galeria}
                </Link>
              </li>
              <li>
                <Link to="/onde-estamos" onClick={closeMobileMenu} className="block py-4 hover:text-amber-300 transition-colors">
                  {t.nav.ondeEstamos}
                </Link>
              </li>
            </ul>
            <div className="px-6 pb-4 pt-2">
              <LanguageSwitch />
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      <ScrollRestoration />

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}