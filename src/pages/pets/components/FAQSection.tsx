import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurFade } from '../../../components/ui/BlurFade';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 dark:border-slate-800 rounded-2xl overflow-hidden mb-4 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
      <button 
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 dark:text-gray-100 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 px-6 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <BlurFade>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 tracking-tight">Preguntas Frecuentes</h2>
        </BlurFade>
        
        <div className="space-y-2">
          {[
            { q: "¿Funciona en todos los celulares?", a: "Sí, todos los teléfonos modernos (iPhone y Android) tienen tecnología NFC incorporada de fábrica y leerán la placa automáticamente." },
            { q: "¿Necesito instalar una aplicación?", a: "No. Ni tú para configurar el perfil (se hace vía web), ni la persona que encuentre a tu mascota. El celular abrirá directamente nuestro sitio seguro." },
            { q: "¿Qué sucede si pierdo la placa?", a: "A diferencia de una placa grabada normal, puedes desactivar la placa digitalmente desde tu panel en cualquier momento por seguridad." },
            { q: "¿Qué información será visible?", a: "Solo la información que tú decidas compartir. Por defecto, tu número de contacto de emergencia y el nombre de la mascota." }
          ].map((faq, idx) => (
            <BlurFade key={idx} delay={idx * 0.1}>
              <FAQItem question={faq.q} answer={faq.a} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
