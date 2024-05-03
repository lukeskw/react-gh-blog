export function Card() {
  return (
    <a href="#" className="flex flex-col gap-4 rounded-xl bg-slate-850 p-10">
      <div className="flex items-start gap-8">
        <h1 className="text-xl">JavaScript data types and data structures</h1>
        <span className="w-24 text-right text-sm text-slate-400">
          1 day ago
        </span>
      </div>
      <p className="line-clamp-4 leading-relaxed text-slate-400">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </a>
  )
}
