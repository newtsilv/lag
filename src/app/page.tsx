import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-12 dark:border-zinc-800 dark:bg-zinc-950">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Portal oficial
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
          Liga Acadêmica de Games do CEUMA
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Um espaço para estudantes explorarem desenvolvimento de jogos,
          pesquisa, eventos e projetos colaborativos dentro da comunidade
          acadêmica do CEUMA.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-full bg-zinc-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            href="/"
          >
            Conhecer trilhas
          </Link>
          <Link
            className="rounded-full border border-zinc-300 px-5 py-3 text-center text-sm font-semibold text-zinc-900 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-400"
            href="/aluno"
          >
            Área do aluno
          </Link>
          <Link
            className="rounded-full border border-zinc-300 px-5 py-3 text-center text-sm font-semibold text-zinc-900 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-400"
            href="/admin"
          >
            Área administrativa
          </Link>
        </div>
      </section>
    </main>
  );
}
