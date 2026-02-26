import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";
import { AuroraText } from "@/components/ui/AuroraText";
import { BlurFade } from "@/components/ui/BlurFade";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { ShineBorder } from "@/components/ui/ShineBorder";
import { MagicCard } from "@/components/ui/MagicCard";
import { Terminal, TypingAnimation } from "@/components/ui/Terminal";
import { AnimatedList } from "@/components/ui/AnimatedList";
import { AnimatedCircularProgressBar } from "@/components/ui/AnimatedCircularProgressBar";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { Zap, Target, Radar, ShieldCheck, FileStack } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 w-full overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <BlurFade delay={0.1} inView>
            <div className="inline-flex items-center rounded-full border border-[oklch(1_0_0/0.08)] bg-[oklch(0.16_0.02_260/0.8)] px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="mr-2 text-lg">✨</span>
              <AnimatedShinyText className="text-[0.8125rem] font-medium tracking-wide">
                Features
              </AnimatedShinyText>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
             <h2 className="text-4xl md:text-5xl lg:text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight text-primary leading-[1.15] mb-4">
                Everything you need to <br/>
                <AuroraText>land the job</AuroraText>
             </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="max-w-xl text-lg text-secondary leading-relaxed">
              AI-powered tools that transform your job search from spray-and-pray to sniper-precision.
            </p>
          </BlurFade>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
            {/* CARD 1: 60-Second Rizz (Speed) */}
            <BentoCard
                name="60-Second Rizz"
                className="col-span-1 md:col-span-2"
                background={
                    <div className="absolute top-0 w-full h-[60%] [mask-image:linear-gradient(to_top,transparent_30%,#000_80%)]">
                        <Terminal>
                            <TypingAnimation className="text-green-500">
                                $ jobrizz optimize --resume resume.pdf
                            </TypingAnimation>
                            <TypingAnimation delay={1000} className="text-muted-foreground">
                                Analyzing job description...
                            </TypingAnimation>
                            <TypingAnimation delay={2000} className="text-muted-foreground">
                                Tailoring experience section...
                            </TypingAnimation>
                             <TypingAnimation delay={3000} className="text-green-500">
                                Optimization complete!
                            </TypingAnimation>
                        </Terminal>
                    </div>
                }
                Icon={Zap}
                description="Upload your resume. Paste the job link. Get a perfectly tailored, ATS-optimized resume in under a minute."
                href="#"
                cta="See it in action"
            >
                <BorderBeam size={200} duration={10} colorFrom="#ffaa40" colorTo="#ff6b00" />
            </BentoCard>

            {/* CARD 2: ATS Dominance (Scoring) */}
            <ShineBorder
                className="col-span-1 row-span-1 p-0 overflow-hidden bg-card border-none"
                color={["var(--accent-success)", "var(--accent-primary)"]}
                borderRadius={16}
            >
                <BentoCard
                    name="ATS Dominance"
                    className="h-full border-none shadow-none bg-transparent hover:shadow-none"
                    background={
                         <div className="absolute top-8 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(circle_at_center,#000_30%,transparent_70%)]">
                            <div className="relative flex items-center justify-center">
                                <AnimatedCircularProgressBar
                                    max={100}
                                    min={0}
                                    value={95}
                                    gaugePrimaryColor="var(--accent-success)"
                                    gaugeSecondaryColor="rgba(255,255,255,0.1)"
                                />
                                <div className="absolute flex flex-col items-center">
                                    <NumberTicker value={95} className="text-3xl font-bold text-accent-success" />
                                    <span className="text-xs text-tertiary">/100 ATS</span>
                                </div>
                            </div>
                        </div>
                    }
                    Icon={Target}
                    description="Real-time scoring powered by the same algorithms recruiters use."
                    href="#"
                    cta="Check your score"
                />
            </ShineBorder>

            {/* CARD 3: JobDork (Hidden Jobs) - Tall */}
             <div className="col-span-1 row-span-1 md:row-span-2 group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-card border border-white/5 transform-gpu transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_var(--glow-purple)]">
                 {/* Neon Gradient Effect Simulated with shadow/border */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-secondary/5 to-accent-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                 <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    {/* Placeholder for AnimatedBeam Network */}
                    <div className="relative h-full w-full">
                         <Radar className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 text-accent-secondary opacity-20 animate-pulse-slow" />
                    </div>
                 </div>

                <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2 mt-auto">
                    <div className="mb-2 w-fit rounded-full bg-accent-secondary/10 px-2 py-0.5 text-xs text-accent-secondary">
                        Coming Soon
                    </div>
                    <Radar className="h-12 w-12 text-neutral-700 mb-2" />
                    <h3 className="text-xl font-semibold text-primary">JobDork</h3>
                    <p className="max-w-lg text-secondary">
                        Uncover hidden job listings that never appear on mainstream job boards. Google dorking meets AI.
                    </p>
                </div>
                 <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="pointer-events-auto ml-2 flex items-center gap-1 text-sm font-medium text-primary">
                        Join waitlist →
                    </button>
                </div>
            </div>

            {/* CARD 4: Anti-Hallucination Shield */}
            <MagicCard className="col-span-1 row-span-1" gradientColor="var(--accent-warning)">
                 <BentoCard
                    name="Anti-Hallucination"
                    className="h-full bg-transparent border-none shadow-none hover:shadow-none"
                    background={
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80%] [mask-image:linear-gradient(to_top,transparent_40%,#000_90%)] opacity-50 group-hover:opacity-80 transition-opacity">
                             <div className="rounded-lg border border-white/10 bg-neutral-900/50 p-3 font-mono text-xs text-secondary">
                                <div className="mb-2 border-b border-white/10 pb-2">Skill Verification</div>
                                <div className="flex items-center gap-2 text-green-400">
                                    <span>●</span> True Statement
                                </div>
                                <div className="flex items-center gap-2 text-red-400 opacity-50">
                                    <span>○</span> False Claim
                                </div>
                             </div>
                        </div>
                    }
                    Icon={ShieldCheck}
                    description="Our AI never fabricates skills. Smart verification ensures every claim is genuine."
                    href="#"
                    cta="Learn how it works"
                />
            </MagicCard>

            {/* CARD 5: Pro Templates (Export) */}
            <BentoCard
                name="Pro Templates"
                className="col-span-1 md:col-span-2"
                background={
                    <div className="absolute right-2 top-4 h-[300px] w-full md:w-[60%] [mask-image:linear-gradient(to_top,transparent_20%,#000_60%)]">
                        <AnimatedList className="w-full">
                            <div className="flex items-center gap-3 rounded-lg bg-[oklch(0.14_0.02_260)] p-3 border border-white/5">
                                <span className="text-xl">📄</span>
                                <div>
                                    <p className="text-sm font-medium text-primary">PDF exported</p>
                                    <p className="text-xs text-tertiary">3s ago</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-3 rounded-lg bg-[oklch(0.14_0.02_260)] p-3 border border-white/5">
                                <span className="text-xl">🎨</span>
                                <div>
                                    <p className="text-sm font-medium text-primary">Template Applied</p>
                                    <p className="text-xs text-tertiary">12s ago</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-3 rounded-lg bg-[oklch(0.14_0.02_260)] p-3 border border-white/5">
                                <span className="text-xl">✅</span>
                                <div>
                                    <p className="text-sm font-medium text-primary">ATS Check Passed</p>
                                    <p className="text-xs text-tertiary">45s ago</p>
                                </div>
                            </div>
                        </AnimatedList>
                    </div>
                }
                Icon={FileStack}
                description="Choose from multiple ATS-optimized templates. Export as PDF or DOCX instantly."
                href="#"
                cta="Browse templates"
            >
                 <BorderBeam size={180} duration={12} colorFrom="var(--accent-primary)" colorTo="var(--accent-secondary)" />
            </BentoCard>

        </BentoGrid>
      </div>
    </section>
  );
}
