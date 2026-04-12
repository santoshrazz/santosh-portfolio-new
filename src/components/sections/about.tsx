"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Projects Shipped", value: "30+" },
  { label: "Years Experience", value: "5+" },
  { label: "Models Trained", value: "100+" },
  { label: "Papers Read", value: "∞" },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// about"
          title="Building AI That Ships"
          description="Not just research — production systems that scale."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image + Terminal */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 neon-glow">
                <Image
                  src="https://images.unsplash.com/photo-1607706189992-eae578626c86?w=600&h=600&fit=crop&crop=center"
                  alt="Santosh Kumar"
                  width={600}
                  height={600}
                  className="w-full aspect-square object-cover"
                  priority
                />
              </div>

              {/* Terminal block */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      terminal
                    </span>
                  </div>
                  <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
                    <code>
                      {`$ whoami
> Santosh Kumar

$ cat skills.txt
> pytorch, langchain, nextjs,
> kubernetes, python, typescript

$ echo $STATUS
> building the future`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Bio + Stats */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m Santosh Kumar, a full-stack developer based in India. I focus on building complete products — from frontend to backend — and adding intelligent features where they make an impact.
                </p>
                <p>
                  My work spans full-stack development, scalable backend systems, and DevOps practices.
I believe the best software isn&apos;t the most complex — it&apos;s the one that consistently ships value to users.
                </p>
                <p>
                  When I&apos;m not building or deploying applications, you&apos;ll find me contributing to open-source and writing about full-stack development and DevOps.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold gradient-text">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-mono text-muted-foreground">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
