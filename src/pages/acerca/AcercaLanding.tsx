import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { PrinciplesSection } from './components/PrinciplesSection';
import { AppsSection } from './components/AppsSection';
import { VisionSection } from './components/VisionSection';
import { FinalCTASection } from './components/FinalCTASection';
import ThemeToggle from '../../components/ui/ThemeToggle';

const AcercaLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900 transition-colors duration-500 overflow-x-hidden">
      <ThemeToggle />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <PrinciplesSection />
        <AppsSection />
        <VisionSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default AcercaLanding;
