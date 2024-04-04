import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      {/* <img
        src="https://github.com/jhonnydelima.png"
        alt=""
        className="h-10 w-10 rounded-full"
      /> */}

      <Image
        src="https://github.com/jhonnydelima.png"
        alt=""
        width={40}
        height={40}
        className="rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Jhonny Lima</span>
        <span className="truncate text-sm text-zinc-500">jhonny@gmail.com</span>
      </div>

      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
