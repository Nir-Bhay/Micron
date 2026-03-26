"use client";

import { BlurFade } from "@/components/ui/BlurFade";
import { AuroraText } from "@/components/ui/AuroraText";
import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="relative w-full py-20 bg-background overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <BlurFade delay={0.1} yOffset={8}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
              <AuroraText>Get in Touch</AuroraText>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} yOffset={10}>
            <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
              Ready to take the sniper approach to your career? Fill out the form below.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.3} blur="10px">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-card/50 p-1 backdrop-blur-sm shadow-2xl">
            <iframe 
              data-tally-src="https://tally.so/r/44je5d" 
              loading="lazy" 
              width="100%" 
              height="600" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0" 
              title="Micron Contact Form"
              className="rounded-xl overflow-hidden"
            ></iframe>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
