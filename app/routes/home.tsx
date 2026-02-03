import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "say-dictionary - LLM-friendly i18n for the modern web" },
    {
      name: "description",
      content:
        "URL-based internationalization with a dictionary format designed for AI translation. Just hand it to an LLM.",
    },
  ];
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="code-block rounded-lg p-4 text-sm overflow-x-auto">
      <code className="text-zinc-300">{children}</code>
    </pre>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="gradient-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-semibold text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
              <path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>
            </svg>
            say-dictionary
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/stackoverprof/say-dictionary"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/say-dictionary"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              npm
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              v1.2.2
            </div>
          </div>

          <h1 className="animate-fade-in-delay-1 text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">LLM-friendly</span>
            <br />
            i18n for the web
          </h1>

          <p className="animate-fade-in-delay-2 text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
            URL-based internationalization with a dictionary format designed for
            AI translation. Just hand it to an LLM.
          </p>

          <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.npmjs.com/package/say-dictionary"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://github.com/stackoverprof/say-dictionary"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <CodeBlock>npm install say-dictionary</CodeBlock>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Simple by design
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="LLM-ready format"
              description="The dictionary.json format is designed to be handed directly to an AI for translation. No complex tooling needed."
            />
            <FeatureCard
              title="URL-based routing"
              description="Language detection from URL path segments. /is/about for Icelandic, /about for default language."
            />
            <FeatureCard
              title="Zero config"
              description="Auto-detects languages from your dictionary. Just init(dictionary) and start using say()."
            />
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Three lines to translate
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-zinc-500 mb-2">1. Initialize once</p>
              <CodeBlock>{`import { init } from 'say-dictionary';
import dictionary from './dictionary.json';

init(dictionary);`}</CodeBlock>
            </div>

            <div>
              <p className="text-sm text-zinc-500 mb-2">2. Use anywhere</p>
              <CodeBlock>{`import { say } from 'say-dictionary';

<h1>{say("Welcome to our site")}</h1>`}</CodeBlock>
            </div>

            <div>
              <p className="text-sm text-zinc-500 mb-2">
                3. Extract keys with CLI
              </p>
              <CodeBlock>{`npx say-dictionary extract -l en,is -i ./app -o ./dictionary.json`}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      {/* Dictionary Format */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Hand it to an LLM
          </h2>
          <p className="text-zinc-400 text-center mb-12">
            The extracted dictionary is ready for AI translation
          </p>

          <CodeBlock>{`{
  "Welcome to our site": { "en": "Welcome to our site", "is": "" },
  "Get started": { "en": "Get started", "is": "" },
  "Documentation": { "en": "Documentation", "is": "" }
}`}</CodeBlock>

          <p className="text-center text-zinc-500 mt-6 text-sm">
            First language gets the key as default. Empty strings are waiting
            for translation.
          </p>
        </div>
      </section>

      {/* SSR */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">SSR Support</h2>
          <p className="text-zinc-400 text-center mb-12">
            Works with Next.js, Remix, and other SSR frameworks
          </p>

          <CodeBlock>{`import { ssrLang, say } from 'say-dictionary';

export default function Page({ lang }) {
  ssrLang(lang);  // Set language for SSR
  return <h1>{say("Hello")}</h1>;
}`}</CodeBlock>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start translating today</h2>
          <p className="text-zinc-400 mb-8">
            No API keys. No translation services. Just you and your favorite
            LLM.
          </p>
          <a
            href="https://www.npmjs.com/package/say-dictionary"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-500 transition-colors"
          >
            npm install say-dictionary
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-zinc-500">
            MIT License • Built by{" "}
            <a
              href="https://github.com/stackoverprof"
              className="text-zinc-400 hover:text-white"
            >
              stackoverprof
            </a>
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/stackoverprof/say-dictionary"
              className="text-sm text-zinc-500 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/say-dictionary"
              className="text-sm text-zinc-500 hover:text-white"
            >
              npm
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
