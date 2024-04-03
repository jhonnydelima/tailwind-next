import { Logo } from './Logo'
import { SearchBar } from './SearchBar'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <SearchBar />
    </aside>
  )
}
