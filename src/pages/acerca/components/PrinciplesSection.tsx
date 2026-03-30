import { BlurFade } from "../../../components/ui/BlurFade";
import { Shield, Zap, Sparkles } from "lucide-react";

export const PrinciplesSection = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900/10 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <BlurFade delay={0.2} className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Seguridad</h3>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              "Los datos sensibles están encriptados y tú tienes el control total sobre quién accede a ellos."
            </p>
          </BlurFade>

          <BlurFade delay={0.4} className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Velocidad</h3>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              "Diseñado para momentos críticos del mundo real, donde cada segundo cuenta para el acceso a la información."
            </p>
          </BlurFade>

          <BlurFade delay={0.6} className="p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">Simplicidad</h3>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              "Sin aplicaciones. Sin fricción. Solo el acceso directo a lo que importa mediante una acción natural."
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
