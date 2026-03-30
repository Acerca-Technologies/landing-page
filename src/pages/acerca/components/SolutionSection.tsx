import { BlurFade } from "../../../components/ui/BlurFade";
import { Smartphone, Zap, ShieldCheck } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900/20 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <BlurFade>
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
                La Solución Acerca
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-8 tracking-tight leading-tight">
                Una acción simple.
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="grow-0 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Acerca tu teléfono</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-light text-lg">
                      Simplemente aproxima tu dispositivo móvil al objeto físico. Sin necesidad de emparejamiento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="grow-0 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Acceso Instantáneo</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-light text-lg">
                      La información relevante aparece en pantalla de forma inmediata. Estructurada y clara.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="grow-0 shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Cero Fricción</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-light text-lg">
                      Sin logins, sin descargar aplicaciones, sin pasos intermedios. Solo la información que necesitas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} className="relative">
             <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-blue-500/10 to-transparent dark:from-blue-500/5 dark:border dark:border-white/5 flex items-center justify-center p-12">
                <div className="w-full h-full rounded-[2.5rem] bg-white dark:bg-slate-950 shadow-2xl border border-slate-100 dark:border-slate-800 relative p-8 flex flex-col items-center justify-center overflow-hidden">
                    {/* Abstract tap animation visual */}
                    <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-3xl animate-pulse -z-10" />
                    <div className="w-32 h-32 rounded-full border-2 border-blue-500/20 flex items-center justify-center animate-ping duration-[3s]" />
                    <div className="absolute w-64 h-64 border border-blue-500/10 rounded-full animate-reverse-spin" />
                    <div className="z-10 text-center">
                       <Smartphone className="w-20 h-20 text-slate-200 dark:text-slate-800 mb-4 mx-auto" />
                       <div className="text-slate-300 dark:text-slate-700 font-mono text-sm tracking-widest uppercase">Escaneando...</div>
                    </div>
                </div>
             </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
