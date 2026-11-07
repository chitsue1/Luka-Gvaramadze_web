"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CONTACT, copy, type Lang, type Project } from "@/lib/content";

const STORAGE_KEY = "lg-lang";

function readLang(): Lang | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "ka" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

function saveLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* storage unavailable: language just won't persist */
  }
}

export default function Site() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = readLang();
    if (stored) setLang(stored);
    else if (navigator.language?.toLowerCase().startsWith("ka")) setLang("ka");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = copy[lang];
  const toggle = () => {
    const next: Lang = lang === "en" ? "ka" : "en";
    setLang(next);
    saveLang(next);
  };

  return (
    <div className="min-h-screen">
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-night">
        Skip to work
      </a>

      <header className="mx-auto flex max-w-page items-center justify-between px-6 pt-6 md:px-10">
        <a href="#top" className="font-geo text-2xl leading-none" aria-label="Luka Gvaramadze, home">
          ლ<span className="text-lamp">.</span>
        </a>
        <nav className="flex items-center gap-5 text-sm text-smoke md:gap-8">
          <a className="hover:text-paper" href="#work">{t.nav.work}</a>
          <a className="hover:text-paper" href="#about">{t.nav.about}</a>
          <a className="hover:text-paper" href="#contact">{t.nav.contact}</a>
          <button
            onClick={toggle}
            className="rounded-full border border-rule px-3 py-1 text-paper hover:border-lamp"
            aria-label={lang === "en" ? "Switch to Georgian" : "Switch to English"}
          >
            {t.nav.switchTo}
          </button>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-page px-6 md:px-10">
        <Hero t={t} />
        <Work t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>

      <footer className="mx-auto flex max-w-page flex-col gap-3 border-t border-rule px-6 py-10 text-sm text-smoke md:flex-row md:justify-between md:px-10">
        <p>{t.footer}</p>
        <p className="flex gap-6">
          <a className="ulink" href={CONTACT.github}>GitHub</a>
          <a className="ulink" href={CONTACT.linkedin}>LinkedIn</a>
          <a className="ulink" href={`mailto:${CONTACT.email}`}>Email</a>
        </p>
      </footer>
    </div>
  );
}

type T = (typeof copy)["en"];

function Hero({ t }: { t: T }) {
  const words = t.hero.nameNative.split(" ");
  const offsets = words.map((_, i) => words.slice(0, i).reduce((n, w) => n + Array.from(w).length, 0));
  return (
    <section className="pb-24 pt-20 md:pb-36 md:pt-32">
      <h1 className="sr-only">{t.hero.nameLatin}</h1>
      <p
        aria-hidden
        className="rise font-geo leading-[0.95] tracking-[-0.02em] text-paper"
        style={{
          fontSize: "clamp(2.6rem, 11vw, 10.5rem)",
          fontStretch: "62.5%",
          fontVariationSettings: '"wdth" 62.5',
          fontWeight: 500,
        }}
      >
        {words.map((word, w) => (
          <span key={w} className="whitespace-nowrap">
            {Array.from(word).map((ch, i) => (
              <span key={i} className="rise-ch" style={{ animationDelay: `${120 + (offsets[w] + i) * 45}ms` }}>
                {ch}
              </span>
            ))}
            {w < words.length - 1 && " "}
          </span>
        ))}
      </p>

      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
        <p className="font-display text-xl text-smoke md:col-span-3 md:pt-1">{t.hero.nameLatin}</p>
        <div className="md:col-span-8 md:col-start-5">
          <p className="max-w-[34ch] font-display text-[1.65rem] leading-snug text-paper md:text-[2.1rem]">
            {t.hero.statement}
          </p>
          <p className="mt-8 flex items-center gap-3 text-sm text-paper">
            <span className="lamp-dot inline-block h-2 w-2 rounded-full bg-lamp" aria-hidden />
            {t.hero.status}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-night hover:bg-lamp">
              {t.hero.ctaWork}
            </a>
            <a href="#contact" className="rounded-full border border-rule px-6 py-3 text-sm text-paper hover:border-lamp">
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work({ t }: { t: T }) {
  return (
    <section id="work" className="scroll-mt-10 border-t border-rule pt-16 md:pt-24">
      <div className="grid gap-6 md:grid-cols-12">
        <h2 className="font-display text-4xl md:col-span-4 md:text-5xl">{t.work.title}</h2>
        <p className="max-w-[48ch] text-smoke md:col-span-6 md:col-start-5 md:pt-3">{t.work.intro}</p>
      </div>

      <div className="mt-14">
        {t.projects.map((p) => (
          <ProjectRow key={p.id} p={p} t={t} />
        ))}
      </div>

      <div className="grid gap-6 border-t border-rule py-14 md:grid-cols-12">
        <h3 className="font-display text-2xl md:col-span-4">{t.lab.title}</h3>
        <ul className="space-y-4 md:col-span-8 md:col-start-5">
          {t.lab.items.map((item) => (
            <li key={item.name} className="flex flex-col gap-1 md:flex-row md:gap-6">
              {item.href ? (
                <a className="ulink md:w-72 md:shrink-0" href={item.href}>{item.name}</a>
              ) : (
                <span className="md:w-72 md:shrink-0">{item.name}</span>
              )}
              <span className="text-smoke">{item.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectRow({ p, t }: { p: Project; t: T }) {
  return (
    <article className="grid gap-8 border-t border-rule py-12 md:grid-cols-12 md:py-16">
      <div className="md:col-span-4">
        <h3 className="font-display text-3xl leading-tight md:text-[2.6rem]">{p.name}</h3>
        <p className="mt-3 text-sm text-smoke">
          {p.kind}, {p.year}
        </p>
        {p.links.length > 0 && (
          <p className="mt-5 flex flex-col gap-2 text-sm">
            {p.links.map((l) => (
              <a key={l.href} className="ulink w-fit text-paper" href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </p>
        )}
      </div>

      <div className="md:col-span-8 md:col-start-5">
        <p className="max-w-[60ch] font-display text-xl leading-relaxed text-paper md:text-[1.4rem]">{p.summary}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h4 className="text-sm text-lamp">{t.work.built}</h4>
            <ul className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-paper/85">
              {p.built.map((b) => (
                <li key={b} className="border-l border-rule pl-4">{b}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="text-sm text-lamp">{t.work.learned}</h4>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-paper/85">{p.learned}</p>
            </div>
            <div>
              <h4 className="text-sm text-lamp">{t.work.stack}</h4>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-smoke">{p.stack.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function About({ t }: { t: T }) {
  return (
    <section id="about" className="scroll-mt-10 border-t border-rule py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl md:text-5xl">{t.about.title}</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/luka.jpg"
            alt="Luka Gvaramadze"
            width={878}
            height={1200}
            className="mt-10 aspect-[4/5] w-full max-w-xs object-cover grayscale contrast-[1.05]"
          />
        </div>

        <div className="md:col-span-8 md:col-start-5">
          <div className="max-w-[62ch] space-y-5 font-display text-xl leading-relaxed">
            {t.about.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>

          <h3 className="mt-14 font-display text-2xl">{t.about.howTitle}</h3>
          <dl className="mt-6 grid gap-6 md:grid-cols-3">
            {t.about.how.map((h) => (
              <div key={h.title}>
                <dt className="text-paper">{h.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-smoke">{h.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl">{t.stack.title}</h3>
              <dl className="mt-6 space-y-4 text-sm">
                {t.stack.groups.map((g) => (
                  <div key={g.name}>
                    <dt className="text-paper">{g.name}</dt>
                    <dd className="mt-1 leading-relaxed text-smoke">{g.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="font-display text-2xl">{t.education.title}</h3>
              <ul className="mt-6 space-y-4 text-sm">
                {t.education.items.map((e) => (
                  <li key={e.name}>
                    <p className="text-paper">{e.name}</p>
                    <p className="mt-1 text-smoke">{e.detail}</p>
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 font-display text-2xl">{t.education.languagesTitle}</h3>
              <p className="mt-4 text-sm text-smoke">{t.education.languages}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FormState = "idle" | "sending" | "sent" | "error";

function Contact({ t }: { t: T }) {
  const [state, setState] = useState<FormState>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    try {
      const res = await fetch(CONTACT.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  const field =
    "mt-2 w-full border-b border-rule bg-transparent py-3 text-paper placeholder:text-smoke/60 focus:border-lamp focus:outline-none";

  return (
    <section id="contact" className="scroll-mt-10 border-t border-rule py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl md:text-5xl">{t.contact.title}</h2>
          <p className="mt-6 max-w-[34ch] text-smoke">{t.contact.body}</p>
          <a className="ulink mt-8 inline-block font-display text-xl text-paper md:text-2xl" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
        </div>

        <form onSubmit={onSubmit} className="grid gap-8 md:col-span-7 md:col-start-6">
          <div className="grid gap-8 md:grid-cols-2">
            <label className="block text-sm text-smoke">
              {t.contact.name}
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <label className="block text-sm text-smoke">
              {t.contact.email}
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
          </div>
          <label className="block text-sm text-smoke">
            {t.contact.message}
            <textarea name="message" required rows={5} className={`${field} resize-y`} />
          </label>
          <div className="flex flex-wrap items-center gap-6">
            <button
              type="submit"
              disabled={state === "sending"}
              className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-night hover:bg-lamp disabled:opacity-60"
            >
              {state === "sending" ? t.contact.sending : t.contact.send}
            </button>
            <p role="status" aria-live="polite" className="text-sm">
              {state === "sent" && <span className="text-paper">{t.contact.sent}</span>}
              {state === "error" && <span className="text-lamp">{t.contact.error}</span>}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
