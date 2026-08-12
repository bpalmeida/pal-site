import { useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import lusitanoPortrait from '../../assets/photos/lusitano-portrait.jpg';
import dressageTraining from '../../assets/photos/dressage-training.jpg';
import saltosObstaculos from '../../assets/photos/saltos-obstaculos.jpg';
import aulasHorse from '../../assets/photos/aulas-horse.jpg';
import cavaloBranco from '../../assets/photos/cavalo-branco.jpg';
import estabulosLuxo from '../../assets/photos/estabulos-luxo.jpg';
import arenaTreino from '../../assets/photos/arena-treino.jpg';
import porDoSol from '../../assets/photos/por-do-sol.jpg';
import equipamento from '../../assets/photos/equipamento.jpg';
import closeUp from '../../assets/photos/close-up.jpg';
import liberdade from '../../assets/photos/liberdade.jpg';
import passeioArLivre from '../../assets/photos/passeio-ar-livre.jpg';

type CategoryKey = 'todos' | 'cavalos' | 'aulas' | 'instalacoes' | 'passeios';

const IMAGE_DATA: { id: number; url: string; category: CategoryKey }[] = [
  { id: 1, url: lusitanoPortrait, category: 'cavalos' },
  { id: 2, url: dressageTraining, category: 'aulas' },
  { id: 3, url: saltosObstaculos, category: 'aulas' },
  { id: 4, url: aulasHorse, category: 'aulas' },
  { id: 5, url: cavaloBranco, category: 'cavalos' },
  { id: 6, url: estabulosLuxo, category: 'instalacoes' },
  { id: 7, url: arenaTreino, category: 'instalacoes' },
  { id: 8, url: porDoSol, category: 'passeios' },
  { id: 9, url: equipamento, category: 'instalacoes' },
  { id: 10, url: closeUp, category: 'cavalos' },
  { id: 11, url: liberdade, category: 'cavalos' },
  { id: 12, url: passeioArLivre, category: 'passeios' },
];

interface GalleryImage {
  id: number;
  url: string;
  category: CategoryKey;
  title: string;
}

export default function Galeria() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = IMAGE_DATA.map((img, index) => ({
    ...img,
    title: t.galeria.imageTitles[index],
  }));

  const categories: CategoryKey[] = ['todos', 'cavalos', 'aulas', 'instalacoes', 'passeios'];

  const filteredImages = selectedCategory === 'todos'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-20 pb-16 min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <ImageWithFallback
          src={lusitanoPortrait}
          alt="Galeria"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-6xl font-serif mb-4">{t.galeria.heroTitle}</h1>
            <p className="text-white text-xl">{t.galeria.heroSubtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-amber-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.galeria.categories[category]}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-square"
                onClick={() => setSelectedImage(image)}
                whileHover={{ y: -8 }}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-serif">{image.title}</h3>
                    <p className="text-amber-300 text-sm mt-1">{t.galeria.categories[image.category]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">{t.galeria.emptyState}</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-amber-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 p-8 rounded-b-lg">
                <h2 className="text-white text-3xl font-serif mb-2">{selectedImage.title}</h2>
                <p className="text-amber-300 text-lg">{t.galeria.categories[selectedImage.category]}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
