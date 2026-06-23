import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  {
    title: "Desenvolvimento de jogos",
    label: "DEV",
    description:
      "Criação de protótipos, mecânicas, programação e experimentação com engines.",
  },
  {
    title: "Game design",
    label: "DESIGN",
    description:
      "Estudo de experiência, narrativa, sistemas, balanceamento e design de fases.",
  },
  {
    title: "Pesquisa e estudos",
    label: "PESQUISA",
    description:
      "Discussões acadêmicas sobre jogos, tecnologia, cultura e aprendizagem.",
  },
  {
    title: "Eventos e comunidade",
    label: "COMUNIDADE",
    description:
      "Encontros, oficinas, game jams e integração entre estudantes interessados em games.",
  },
];

const communityItems = [
  "Aprender com outros estudantes",
  "Criar projetos colaborativos",
  "Participar de oficinas e eventos",
  "Compartilhar estudos, ideias e experiências",
];

const sponsorLogos = [
  { src: "/logo_ceuma.svg", alt: "CEUMA" },
  { src: "/logoOxygeniHub.svg", alt: "Oxygeni Hub" },
  { src: "/Luigi.svg", alt: "Luigi" },
];

const logoLoop = [...sponsorLogos, ...sponsorLogos, ...sponsorLogos, ...sponsorLogos];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09070f] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#09070f]/88 px-4 py-4 backdrop-blur-md sm:px-6">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3">
          <Link className="flex items-center" href="/" aria-label="Início">
            <Image
              alt="Liga Acadêmica de Games da Universidade CEUMA"
              className="h-8 ml-2.5 w-auto object-contain"
              height={30}
              priority
              src="/Luigi.svg"
              width={30}
            />
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-zinc-300 md:flex">
            <a className="transition hover:text-[#985EF7]" href="#sobre">
              Sobre
            </a>
            <a className="transition hover:text-[#985EF7]" href="#areas">
              Áreas
            </a>
            <a className="transition hover:text-[#985EF7]" href="#comunidade">
              Comunidade
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
            <Link
              className="rounded-full border border-white/15 px-3 py-2 text-zinc-200 transition hover:border-[#985EF7] hover:text-white sm:px-4"
              href="/aluno"
            >
              Aluno
            </Link>
            <Link
              className="rounded-full bg-[#985EF7] px-3 py-2 text-white transition hover:bg-[#ad7cff] sm:px-4"
              href="/admin"
            >
              Admin
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative px-4 py-14 sm:px-6 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="absolute left-0 top-16 -z-10 h-64 w-64 rounded-full bg-[#985EF7]/18 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#985EF7]/35 bg-[#985EF7]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#d8c3ff]">
              Portal oficial da liga
            </p>
            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-7xl">
              Liga Acadêmica de Games da Universidade CEUMA
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Uma comunidade para criar jogos, estudar tecnologia, trocar ideias
              e transformar curiosidade em projetos dentro do CEUMA.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-xl bg-[#985EF7] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#ad7cff]"
                href="#sobre"
              >
                Conhecer a liga
              </a>
              <a
                className="rounded-xl border border-white/15 bg-white/[0.03] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.16em] text-white transition hover:border-[#985EF7]"
                href="#areas"
              >
                Ver áreas de atuação
              </a>
            </div>
          </div>

          <div className="lag-console-float relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="lag-console-square-float absolute -right-5 -top-5 h-24 w-24 rounded-3xl bg-[#985EF7]" />
            <div className="lag-console-orb-float absolute -bottom-5 -left-5 h-28 w-28 rounded-full border border-[#985EF7]/40" />
            <div className="relative rotate-1 rounded-[1.75rem] border border-white/12 bg-[#15101f] p-4 shadow-2xl shadow-black/40">
              <div className="rounded-[1.35rem] border border-white/10 bg-[#0d0b14] p-5">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
                    LAG console
                  </p>
                  <span className="rounded-full bg-[#985EF7] px-3 py-1 text-xs font-black">
                    online
                  </span>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl border border-[#985EF7]/50 bg-[#985EF7] p-5 text-white shadow-lg shadow-[#985EF7]/15 transition duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-[#985EF7]/30">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-white/75">
                      Próxima fase
                    </p>
                    <p className="mt-3 text-3xl font-black uppercase leading-none">
                      Criar. Jogar. Aprender.
                    </p>
                  </div>
                  {/* <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-3xl font-black">4</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
                        frentes
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-3xl font-black">01</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-400">
                        comunidade
                      </p>
                    </div>
                  </div> */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#985EF7]/45 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-[#985EF7]/10">
                    <div className="mb-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-3/4 rounded-full bg-[#985EF7]" />
                    </div>
                    <p className="text-sm text-zinc-300">
                      Portal em construção para conectar estudantes, trilhas,
                      eventos e projetos da liga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Espaço para logos" className="px-4 pb-10 sm:px-6">
        <div className="mx-auto max-w-6xl border-y border-white/10 py-6">
          <div className="logo-marquee overflow-hidden">
            <div className="logo-marquee-track flex w-max gap-4">
              {logoLoop.map((logo, index) => (
                <div
                  className="grid h-20 w-44 place-items-center rounded-2xl border border-white/10 bg-white/[0.035] px-6"
                  key={`${logo.src}-${index}`}
                >
                  <Image
                    alt={logo.alt}
                    className="max-h-12 max-w-32 object-contain"
                    height={48}
                    src={logo.src}
                    width={128}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="px-4 py-14 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-[#14101d] p-8 md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#c9abff]">
              Sobre a liga
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr_15rem] lg:items-start">
            <h2 className="text-3xl font-black uppercase leading-none sm:text-5xl">
              Games como prática acadêmica, criativa e tecnológica.
            </h2>

            <p className="text-lg leading-8 text-zinc-300 lg:max-w-md">
              A Liga Acadêmica de Games da Universidade CEUMA reúne estudantes
              interessados em desenvolvimento de jogos, game design, pesquisa,
              eventos e projetos colaborativos. A proposta é criar um ambiente
              para aprender na prática, estudar temas ligados a games e
              fortalecer a comunidade acadêmica em torno da área.
            </p>
            <div className="group relative aspect-square w-full max-w-xs cursor-default lg:w-60 lg:max-w-none">
              <span className="absolute inset-0 rounded-3xl bg-[#c9abff]" />
              <div
                className="relative h-full overflow-hidden rounded-3xl border border-white/15 bg-cover bg-center transition-transform duration-300 ease-out group-hover:-translate-x-2 group-hover:-translate-y-3"
                style={{ backgroundImage: "url('/pessoas.png')" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#c9abff]">
              Áreas de atuação
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-5xl">
              Pontos de partida para estudar e criar jogos.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <article
                className="group rounded-3xl border border-white/10 bg-[#14101d] p-6 transition hover:-translate-y-1 hover:border-[#985EF7]/60"
                key={area.title}
              >
                <p className="mb-8 inline-flex rounded-full bg-[#985EF7]/15 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-[#c9abff]">
                  {area.label}
                </p>
                <h3 className="text-xl font-black uppercase leading-tight">
                  {area.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comunidade" className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-[#985EF7] p-8 text-white md:grid-cols-[1fr_0.9fr] md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/70">
              Comunidade
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-none sm:text-5xl">
              Um lugar para participar, aprender e construir junto.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              A comunidade aproxima estudantes que querem aprender fazendo,
              trocar experiências e participar de projetos, estudos e eventos
              ligados ao universo dos jogos.
            </p>
          </div>
          <ul className="grid gap-3">
            {communityItems.map((item) => (
              <li
                className="group relative cursor-default text-left"
                key={item}
              >
                <span className="absolute inset-0 rounded-2xl bg-[#2a123f]" />
                <span className="relative block rounded-2xl bg-[#09070f] px-5 py-4 font-semibold text-white transition-transform duration-300 ease-out group-hover:-translate-x-2 group-hover:-translate-y-3 h-full">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Liga Acadêmica de Games do CEUMA</p>
          <p>Portal em desenvolvimento.</p>
        </div>
      </footer>
    </main>
  );
}
