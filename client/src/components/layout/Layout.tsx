import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import texture from "@assets/generated_images/watercolor_botanical_leaves_pattern.png";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-sage/30">
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 mix-blend-multiply"
        style={{ backgroundImage: `url(${texture})`, backgroundSize: '400px' }}
      />
      <Navbar />
      <main className="flex-grow z-10 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
