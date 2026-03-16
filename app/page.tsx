"use client";

import { useEffect, useRef } from "react";

const DOWNLOAD_URL =
  "https://github.com/boomergeorge/kensho/releases/download/production/Kensho_0.1.0_aarch64.dmg";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-scroll-reveal");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function DownloadButton({ size = "lg" }: { size?: "lg" | "sm" }) {
  const base =
    "inline-flex items-center gap-2 rounded-lg bg-white text-[#0a0a0a] font-semibold transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98]";
  const sizing = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base";
  return (
    <a href={DOWNLOAD_URL} className={`${base} ${sizing}`}>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
        />
      </svg>
      Download for macOS
    </a>
  );
}

const features = [
  {
    title: "Local-first",
    desc: "Your data stays on your computer. Always. No cloud, no sync, no surveillance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "AI-powered reflection",
    desc: "Pair with Claude or ChatGPT to explore your thinking. Bring your own API key.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Markdown vault",
    desc: "Plain Markdown files you own forever. Open them in any editor, anytime.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Pattern discovery",
    desc: "AI reads across your entries to surface recurring themes, contradictions, and growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Slash commands",
    desc: "/mirror, /patterns, /working, /suffering — powerful commands that guide your reflection.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const platforms = [
  { name: "macOS (Apple Silicon / M1+)", status: "available" as const },
  { name: "macOS (Intel)", status: "soon" as const },
  { name: "Windows", status: "soon" as const },
  { name: "Linux", status: "soon" as const },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="animate-fade-in-up text-sm tracking-[0.3em] uppercase text-neutral-500 mb-6">
          見性
        </p>
        <h1 className="animate-fade-in-up delay-100 text-6xl sm:text-8xl font-light tracking-tight mb-4">
          Kensho
        </h1>
        <p className="animate-fade-in-up delay-200 text-xl sm:text-2xl text-neutral-400 font-light mb-6">
          See your true nature.
        </p>
        <p className="animate-fade-in-up delay-300 max-w-lg text-neutral-500 text-base sm:text-lg mb-10 leading-relaxed">
          A local AI workspace for journaling, reflection, and self-knowledge.
          Your thoughts stay on your computer — AI helps you understand them.
        </p>
        <div className="animate-fade-in-up delay-400">
          <DownloadButton />
        </div>
        <p className="animate-fade-in-up delay-500 mt-4 text-xs text-neutral-600">
          v0.1.0 · Early Access · macOS (Apple Silicon)
        </p>

        <div className="animate-fade-in delay-700 absolute bottom-10">
          <svg
            className="w-5 h-5 text-neutral-600 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <Section>
          <h2 className="text-3xl sm:text-4xl font-light text-center mb-4">
            What is Kensho?
          </h2>
          <p className="text-neutral-500 text-center max-w-2xl mx-auto mb-10">
            A desktop app that creates a personal Markdown vault on your
            computer. Pair it with AI to journal, reflect, discover patterns,
            and gain self-knowledge.
          </p>
        </Section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Section key={f.title}>
              <div className="border border-neutral-800 rounded-xl p-6 h-full hover:border-neutral-700 transition-colors">
                <div className="text-neutral-400 mb-4">{f.icon}</div>
                <h3 className="text-lg font-medium mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <Section>
          <h2 className="text-3xl sm:text-4xl font-light text-center mb-10">
            How it works
          </h2>
        </Section>
        <div className="space-y-8">
          {[
            {
              step: "01",
              title: "Write",
              desc: "Journal in Markdown. Your entries are plain text files in a local vault.",
            },
            {
              step: "02",
              title: "Reflect",
              desc: "Use slash commands like /mirror or /patterns. AI reads your entries and responds.",
            },
            {
              step: "03",
              title: "Discover",
              desc: "Over time, Kensho surfaces recurring themes, contradictions, and areas of growth.",
            },
          ].map((item) => (
            <Section key={item.step}>
              <div className="flex gap-6 items-start">
                <span className="text-2xl font-light text-neutral-700 shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                  <p className="text-neutral-500">{item.desc}</p>
                </div>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* System Requirements */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <Section>
          <h2 className="text-3xl sm:text-4xl font-light text-center mb-4">
            Requirements
          </h2>
          <p className="text-neutral-500 text-center mb-12">
            What you need to run Kensho
          </p>
        </Section>

        <Section>
          <div className="border border-neutral-800 rounded-xl p-8 mb-8">
            <h3 className="text-lg font-medium mb-6">System</h3>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">●</span>
                macOS 12+ (Monterey or later)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">●</span>
                Apple Silicon Mac (M1, M2, M3, M4)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">●</span>
                ~50 MB disk space
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">●</span>
                Your own AI API key (Claude or OpenAI)
              </li>
            </ul>
          </div>
        </Section>

        <Section>
          <div className="border border-neutral-800 rounded-xl p-8">
            <h3 className="text-lg font-medium mb-6">Platform availability</h3>
            <div className="space-y-4">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-neutral-400">{p.name}</span>
                  {p.status === "available" ? (
                    <span className="text-green-500 font-medium">
                      Available now
                    </span>
                  ) : (
                    <span className="text-neutral-600">Coming soon</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      {/* Download */}
      <section className="px-6 py-16">
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Begin seeing clearly
            </h2>
            <p className="text-neutral-500 mb-10">
              Download Kensho and start your practice of self-knowledge.
            </p>
            <DownloadButton />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-neutral-600">
              <span>v0.1.0 (Early Access)</span>
              <span>·</span>
              <span>~5.6 MB</span>
              <span>·</span>
              <span>macOS (Apple Silicon)</span>
            </div>
            <p className="mt-3 text-xs text-neutral-600">
              Kensho auto-updates when new versions are released.
            </p>
          </div>
        </Section>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800/50 px-6 py-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>
            Built by{" "}
            <a
              href="https://theaisurfer.com"
              className="text-neutral-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              The AI Surfer
            </a>
          </p>
          <a
            href="https://github.com/boomergeorge/kensho"
            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
