import { Search } from 'lucide-react'

export function SearchBar() {
  return (
    <div className="flex w-full items-center rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
      <Search className="absolute h-5 w-5 text-zinc-500" />

      <input
        className="ml-7 flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
        placeholder="Search"
      />
    </div>
  )
}
