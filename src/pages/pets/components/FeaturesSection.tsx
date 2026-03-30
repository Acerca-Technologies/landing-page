import { Shield, Heart, Bell, Zap } from 'lucide-react';
import { BlurFade } from '../../../components/ui/BlurFade';

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 px-6 border-y border-gray-100 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Todo lo que necesitas, incluido</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Placa NFC", desc: "Diseño premium, resistente al agua y duradero.", icon: Shield },
            { title: "Perfil de Mascota", desc: "Digital y actualizable en cualquier momento.", icon: Heart },
            { title: "Notificaciones", desc: "Alertas cuando alguien escanea la placa.", icon: Bell },
            { title: "Acceso 24/7", desc: "Tu información siempre disponible en la nube.", icon: Zap },
          ].map((item, idx) => (
            <BlurFade key={idx} delay={idx * 0.1}>
              <div className="p-8 rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-sm text-blue-600 dark:text-blue-400">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};
