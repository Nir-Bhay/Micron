import { Marquee } from "@/components/ui/Marquee";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { AvatarCircles } from "@/components/ui/AvatarCircles";
import { BlurFade } from "@/components/ui/BlurFade";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export function SocialProof() {
  return (
    <section id="social-proof" className="py-20 md:py-32 w-full overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Marquee: Company logos scrolling infinitely */}
        <BlurFade delay={0.1} inView>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
              {companies.map((company) => (
                <div key={company} className="flex items-center justify-center px-8">
                  {/* Placeholder SVG logo - replacing with text for demo */}
                  <span className="text-xl font-bold text-muted-foreground opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default">
                    {company}
                  </span>
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
          </div>
        </BlurFade>

        {/* Section Label */}
        <BlurFade delay={0.15} inView>
          <div className="flex justify-center mt-4 mb-12">
            <p className="text-sm font-medium tracking-wide text-tertiary">
              Where our users are landing interviews
            </p>
          </div>
        </BlurFade>

        {/* Metric Counter Row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16 max-w-5xl mx-auto mb-12">

          {/* Card A: Resumes Optimized */}
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-baseline gap-1">
                <NumberTicker
                  value={1247}
                  className="text-4xl lg:text-5xl font-bold text-primary tracking-tighter"
                />
                <span className="text-4xl lg:text-5xl font-bold text-primary">+</span>
              </div>
              <p className="text-sm font-medium text-secondary mt-2">Resumes Optimized</p>
            </div>
          </BlurFade>

          {/* Card B: Avg ATS Score */}
          <BlurFade delay={0.25} inView>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-baseline gap-1">
                <NumberTicker
                  value={95}
                  className="text-4xl lg:text-5xl font-bold text-accent-success tracking-tighter"
                />
                <span className="text-4xl lg:text-5xl font-bold text-accent-success">/100</span>
              </div>
              <p className="text-sm font-medium text-secondary mt-2">Avg ATS Score</p>
            </div>
          </BlurFade>

          {/* Card C: Per Resume */}
          <BlurFade delay={0.3} inView>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl lg:text-5xl font-bold text-accent-primary">&lt;</span>
                <NumberTicker
                  value={60}
                  className="text-4xl lg:text-5xl font-bold text-accent-primary tracking-tighter"
                />
                <span className="text-4xl lg:text-5xl font-bold text-accent-primary">s</span>
              </div>
              <p className="text-sm font-medium text-secondary mt-2">Per Resume</p>
            </div>
          </BlurFade>
        </div>

        {/* Avatar Circles + Activity Indicator */}
        <BlurFade delay={0.35} inView>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <AvatarCircles
              avatarUrls={[
                "https://avatars.githubusercontent.com/u/16860528",
                "https://avatars.githubusercontent.com/u/20110627",
                "https://avatars.githubusercontent.com/u/106103625",
                "https://avatars.githubusercontent.com/u/59228569",
              ]}
              numPeople={127}
            />
            <p className="text-sm font-medium text-secondary">
              <span className="text-primary font-bold">127+ users</span> optimized their resume today
            </p>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
