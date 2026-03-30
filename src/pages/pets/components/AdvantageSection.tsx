import { CheckCircle2, Zap } from 'lucide-react';
import { BlurFade } from '../../../components/ui/BlurFade';

export const AdvantageSection = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <BlurFade>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                No es un simple código QR. Es tecnología activa.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Las placas convencionales requieren luces perfectas y que la mascota se quede quieta para enfocar la cámara. Con NFC, el contacto es instantáneo.
              </p>
            </BlurFade>

            <div className="space-y-6">
              {[
                "No se requiere abrir la cámara",
                "Funciona al instante con solo acercar el móvil",
                "Recibes notificaciones cuando es escaneada",
                "Perfil digital en una plataforma dinámica"
              ].map((feature, idx) => (
                <BlurFade key={idx} delay={idx * 0.1}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-800 font-medium text-lg">{feature}</span>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <BlurFade delay={0.3}>
            <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-gray-100">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50" />
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 opacity-50 transform -rotate-1">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                    <div className="text-xs font-bold font-mono">QR</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 line-through">Código QR Estático</h4>
                    <p className="text-sm text-gray-400">Difícil de enfocar</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-blue-100 flex items-center gap-4 transform rotate-1 scale-105">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-inner">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Tecnología NFC</h4>
                    <p className="text-sm text-blue-600 font-medium">Lectura pasiva e instantánea</p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
