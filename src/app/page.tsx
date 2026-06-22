import Link from "next/link";

const focusAreas = [
  {
    title: "Desenvolvimento de jogos",
    description:
      "Criação de protótipos, mecânicas, programação e experimentação com engines.",
  },
  {
    title: "Game design",
    description:
      "Estudo de experiência, narrativa, sistemas, balanceamento e design de fases.",
  },
  {
    title: "Pesquisa e estudos",
    description:
      "Discussões acadêmicas sobre jogos, tecnologia, cultura e aprendizagem.",
  },
  {
    title: "Eventos e comunidade",
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080912] text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#080912]/90 px-6 py-4 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <Link className="text-sm font-bold uppercase tracking-[0.35em]" href="/">
            LAG CEUMA
          </Link>
          <div className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="transition hover:text-white" href="#sobre">
              Sobre
            </a>
            <a className="transition hover:text-white" href="#areas">
              Áreas
            </a>
            <a className="transition hover:text-white" href="#comunidade">
              Comunidade
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold sm:text-sm">
            <Link
              className="rounded-full border border-white/15 px-3 py-2 text-zinc-200 transition hover:border-cyan-300 hover:text-white sm:px-4"
              href="/aluno"
            >
              Aluno
            </Link>
            <Link
              className="rounded-full bg-cyan-300 px-3 py-2 text-zinc-950 transition hover:bg-cyan-200 sm:px-4"
              href="/admin"
            >
              Admin
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              Portal oficial da liga
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
              Liga Acadêmica de Games do CEUMA
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Um espaço para estudantes criarem, estudarem e compartilharem
              experiências sobre jogos, tecnologia, pesquisa e comunidade
              acadêmica.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-zinc-950 transition hover:bg-cyan-100"
                href="#sobre"
              >
                Conhecer a liga
              </a>
              <a
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-cyan-300"
                href="#areas"
              >
                Ver áreas de atuação
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-[1.5rem] bg-zinc-950 p-5">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                  <p className="text-sm font-semibold text-cyan-100">Game Jam</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Ideias, protótipos e colaboração entre estudantes.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">4+</p>
                    <p className="text-xs text-zinc-400">áreas de estudo</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">CEUMA</p>
                    <p className="text-xs text-zinc-400">comunidade acadêmica</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-violet-300/20 bg-violet-300/10 p-4 text-sm text-violet-100">
                  Desenvolvimento, pesquisa, eventos e troca de conhecimento.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
              Sobre a liga
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Games como prática acadêmica, criativa e tecnológica.
            </h2>
          </div>
          <p className="text-lg leading-8 text-zinc-300">
            A Liga Acadêmica de Games do CEUMA reúne estudantes interessados em
            desenvolvimento de jogos, game design, pesquisa, eventos e projetos
            colaborativos. A proposta é criar um ambiente para aprender na
            prática, estudar temas ligados a games e fortalecer a comunidade
            acadêmica em torno da área.
          </p>
        </div>
      </section>

      <section id="areas" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
              Áreas de atuação
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Pontos de partida para estudar e criar jogos.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <article
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
                key={area.title}
              >
                <h3 className="text-xl font-bold">{area.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="comunidade" className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-cyan-300 p-8 text-zinc-950 md:grid-cols-[1fr_0.9fr] md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-700">
              Comunidade
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Um lugar para participar, aprender e construir junto.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-800">
              A landing começa apresentando a liga, mas também prepara o portal
              para receber novas áreas no futuro, como conteúdos para alunos,
              trilhas, eventos e administração.
            </p>
          </div>
          <ul className="grid gap-3">
            {communityItems.map((item) => (
              <li
                className="rounded-2xl bg-zinc-950 px-5 py-4 font-semibold text-white"
                key={item}
              >
                {item}
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
