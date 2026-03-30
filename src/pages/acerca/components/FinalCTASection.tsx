import { BlurFade } from "../../../components/ui/BlurFade";
import { InteractiveButton } from "../../../components/ui/InteractiveButton";

export const FinalCTASection = () => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-slate-950 text-center relative transition-colors duration-500">
      <div className="max-w-3xl mx-auto relative z-10">
        <BlurFade>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
            Acerca la información donde más importa.
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 font-light max-w-xl mx-auto underline-offset-8 decoration-slate-200 decoration-1">
            Únete a la plataforma que está redefiniendo cómo interactuamos con el mundo físico.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <InteractiveButton size="lg" className="px-12 py-5 text-xl font-bold shadow-2xl hover:shadow-blue-500/20 transition-all">
              Explorar aplicaciones
            </InteractiveButton>
          </div>
        </BlurFade>
      </div>
      
      {/* Footer minimal info */}
      <div className="mt-40 pt-12 border-t border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
        <div>© 2026 Acerca Technologies. Todos los derechos reservados.</div>
        <div className="flex gap-8 font-medium">
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Términos</a>
          <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Contacto</a>
        </div>
      </div>
    </section>
  );
};
