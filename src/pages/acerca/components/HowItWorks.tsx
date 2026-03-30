import { BlurFade } from "../../../components/ui/BlurFade";

export const HowItWorks = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <BlurFade>
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-slate-900 dark:text-slate-100 mb-20 tracking-tight">
            Cómo funciona el ecosistema.
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-px border-t border-dashed border-slate-200 dark:border-slate-800 -z-10" />

          <BlurFade delay={0.2} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-2xl font-bold text-blue-600 mb-8 shadow-sm">
              1
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Identidad Digital</h3>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Un objeto físico (tarjeta, collar, etiqueta) contiene una identidad digital única y segura.
            </p>
          </BlurFade>

          <BlurFade delay={0.4} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-2xl font-bold text-blue-600 mb-8 shadow-sm">
              2
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Conexión Estructurada</h3>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Se vincula instantáneamente con información estructurada y dinámica almacenada en la nube.
            </p>
          </BlurFade>

          <BlurFade delay={0.6} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-2xl font-bold text-blue-600 mb-8 shadow-sm">
              3
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Acceso Universal</h3>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Cualquiera con un smartphone puede acceder a esa información de forma inmediata y sin barreras.
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
