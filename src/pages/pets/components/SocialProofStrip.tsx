import { Heart } from 'lucide-react';
import { ShinyText } from '../../../components/ui/ShinyText';

export const SocialProofStrip = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ShinyText 
          text="CONFIADO POR DUEÑOS DE MASCOTAS" 
          className="text-sm font-semibold tracking-widest mb-8 text-gray-500 dark:text-gray-400" 
        />
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 dark:opacity-40 dark:hover:opacity-100 transition-all duration-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center gap-2 text-xl font-bold font-serif text-gray-800 dark:text-gray-200">
              <Heart className="w-6 h-6" /> PetLover {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
