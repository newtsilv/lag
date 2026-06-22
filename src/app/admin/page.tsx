import Link from "next/link";

export default function AdminAreaPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <section className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Área administrativa
        </p>
        <h1 className="mt-4 text-3xl font-bold text-zinc-950 dark:text-zinc-50">
          Em preparação
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Este espaço será usado futuramente para rotinas administrativas da
          Liga Acadêmica de Games do CEUMA.
        </p>
        <Link
          className="mt-8 inline-flex rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-400"
          href="/"
        >
          Voltar para o início
        </Link>
      </section>
    </main>
  );
}
