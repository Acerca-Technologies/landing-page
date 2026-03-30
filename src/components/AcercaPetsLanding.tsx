import { useState } from 'react';
import { Shield, Smartphone, Zap, Heart, Bell, CheckCircle2, MapPin, Search, ChevronDown, PhoneCall } from 'lucide-react';
import { BlurFade } from './ui/BlurFade';
import { SplitText } from './ui/SplitText';
import { BlurText } from './ui/BlurText';
import { ShinyText } from './ui/ShinyText';
import { Meteors } from './ui/meteors';
import { BackgroundGradient } from './ui/background-gradient';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { InteractiveButton } from './ui/InteractiveButton';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      <button 
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AcercaPetsLanding() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <BlurFade delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
                <Shield className="w-4 h-4" />
                <span>La placa inteligente para tu mascota</span>
              </div>
            </BlurFade>
            
            <SplitText 
              text="Si tu mascota se pierde, te llamarán en menos de 60 segundos."
              className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6 block"
            />
            
            <BlurText
              delay={50}
              text="Una placa inteligente que permite a cualquiera contactarte al instante con solo acercar su celular. Sin apps. Sin fricción."
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed justify-center lg:justify-start"
            />

            <BlurFade delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <InteractiveButton size="lg" className="w-full sm:w-auto">
                  Consigue la tuya
                </InteractiveButton>
                <InteractiveButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  Ver cómo funciona
                </InteractiveButton>
              </div>
            </BlurFade>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
            <BlurFade delay={0.5} yOffset={20}>
              <div className="relative rounded-[2.5rem] bg-gradient-to-tr from-blue-100 to-indigo-50 p-4 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                {/* Product Mockup Placeholder - Emulated with CSS for now */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-white/20 backdrop-blur-xl -skew-y-6 transform origin-bottom-left" />
                <motion.div 
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                  className="relative z-10 w-48 h-48 bg-gray-900 rounded-full shadow-2xl border-4 border-gray-800 flex items-center justify-center overflow-hidden"
                >
                  {/* Simulating NFC Chip look */}
                  <div className="w-32 h-32 rounded-full border border-gray-700 flex items-center justify-center">
                     <div className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center">
                        <Smartphone className="w-8 h-8 text-gray-400" />
                     </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent mix-blend-overlay" />
                </motion.div>
                <div className="absolute top-1/4 right-1/4 bg-white p-3 rounded-2xl shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                   <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                     <span className="text-xs font-bold text-gray-700">Scan!</span>
                   </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* 2. SOCIAL PROOF STRIP */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShinyText 
            text="CONFIADO POR DUEÑOS DE MASCOTAS" 
            className="text-sm font-semibold tracking-widest mb-8 text-gray-500" 
            speed={3} 
          />
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Emulated Logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-2 text-xl font-bold font-serif text-gray-800">
                <Heart className="w-6 h-6" /> PetLover {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-[#fafafa] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <BlurFade>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Funciona casi por arte de magia
              </h2>
              <p className="text-lg text-gray-600">En 4 simples pasos, tu mascota estará protegida.</p>
            </BlurFade>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Registra a tu mascota", desc: "Crea su perfil en menos de un minuto." },
              { icon: MapPin, title: "Recibe tu placa", desc: "Te enviamos la placa inteligente directo a tu casa." },
              { icon: Search, title: "Alguien la escanea", desc: "Si se pierde, quien la encuentre acerca su celular." },
              { icon: PhoneCall, title: "Te llaman al instante", desc: "Tu teléfono suena automáticamente. Sin fricción." }
            ].map((step, index) => (
              <BlurFade key={index} delay={index * 0.1} className="h-full">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-50 h-full flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  
                  <div className="absolute top-6 right-6 text-9xl font-black text-gray-50 opacity-50 select-none transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-2">
                    {index + 1}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEMO / USE CASE */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden px-6">
        <Meteors number={15} />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle at 20% 50%, #3b82f6, transparent 50%)' }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <BlurFade>
            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-8 opacity-80" />
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
              Ese es el momento que importa.
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light mb-12">
              El pánico de perder a tu mascota desaparece cuando alguien encuentra la placa. 
              <span className="text-white font-medium block mt-4">Un toque. Un escaneo. Y estás al teléfono con quien los encontró.</span>
            </p>
          </BlurFade>
        </div>
      </section>

      {/* 5. WHY IT'S BETTER THAN QR */}
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

      {/* 6. EMOTIONAL SECTION */}
      <section className="py-32 bg-[#fafafa] px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <BlurFade>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tighter">
              No es un gadget.
            </h2>
            <TextGenerateEffect 
              words="Es la diferencia entre perderlos... y recuperarlos al instante." 
              className="text-2xl lg:text-3xl text-gray-600 leading-relaxed font-light"
            />
          </BlurFade>
        </div>
      </section>

      {/* 7. WHAT YOU GET */}
      <section className="py-24 bg-white px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Todo lo que necesitas, incluido</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Placa NFC", desc: "Diseño premium, resistente al agua y duradero.", icon: Shield },
              { title: "Perfil de Mascota", desc: "Digital y actualizable en cualquier momento.", icon: Heart },
              { title: "Notificaciones", desc: "Alertas cuando alguien escanea la placa.", icon: Bell },
              { title: "Acceso 24/7", desc: "Tu información siempre disponible en la nube.", icon: Zap },
            ].map((item, idx) => (
              <BlurFade key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all text-center">
                  <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-blue-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRICING */}
      <section className="py-24 bg-[#fafafa] px-6">
        <div className="max-w-lg mx-auto">
          <BlurFade>
            <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Suscripción Simple</h2>
                <p className="text-gray-500 mb-8">Tranquilidad absoluta para ti y tu mejor amigo.</p>
                
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-gray-500 text-xl font-medium">Desde</span>
                  <span className="text-5xl font-extrabold text-gray-900">$299</span>
                  <span className="text-gray-500 font-medium">MXN / año</span>
                </div>
                
                <div className="space-y-4 mb-10 text-left">
                  {["Placa inteligente incluida", "Perfil digital siempre activo", "Soporte prioritario"].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="text-gray-700">{feat}</span>
                    </div>
                  ))}
                </div>

                <InteractiveButton className="w-full" size="lg">
                  Comprar ahora
                </InteractiveButton>
                <p className="text-xs text-gray-400 mt-4">Envío gratis a todo México</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <BlurFade>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 tracking-tight">Preguntas Frecuentes</h2>
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

      {/* 10. FINAL CTA */}
      <section className="py-24 bg-blue-600 text-white px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <BlurFade>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">No esperes a que sea tarde.</h2>
            <p className="text-xl text-blue-100 mb-10 font-light">Protege a tu mascota con la mejor tecnología disponible hoy mismo.</p>
            <HoverBorderGradient 
              containerClassName="bg-white text-blue-600 font-bold"
              className="text-lg px-8 py-4 font-bold bg-white text-blue-600"
            >
              Proteger a mi mascota hoy
            </HoverBorderGradient>
          </BlurFade>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 sm:hidden z-50">
        <InteractiveButton size="md" className="w-full">
          Comprar placa inteligente
        </InteractiveButton>
      </div>

    </div>
  );
}
