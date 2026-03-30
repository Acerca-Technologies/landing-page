import { useEffect, useState } from "react";
import AcercaPetsLanding from "./pages/pets/AcercaPetsLanding";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

function App() {
  const [appearance, setAppearance] = useState<"light" | "dark">(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as "light" | "dark" | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = savedTheme || (prefersDark ? 'dark' : 'light');
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        return "dark";
      } else {
        document.documentElement.classList.remove('dark');
        return "light";
      }
    }
    return "light";
  });

  useEffect(() => {
    // Listen for manual changes to the 'dark' class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setAppearance(isDark ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <Theme appearance={appearance}>
      <AcercaPetsLanding />
    </Theme>
  );
}

export default App;
