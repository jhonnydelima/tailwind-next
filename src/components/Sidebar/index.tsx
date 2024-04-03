import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { SearchBar } from './SearchBar'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <div className="mx-2 flex flex-col gap-6">
        <Logo />

        <SearchBar />
      </div>

      <MainNavigation />
    </aside>
  )
}
