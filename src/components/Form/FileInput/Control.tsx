'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

interface ControlProps extends ComponentProps<'input'> {}

export function Control(props: ControlProps) {
  const { id, onSelectFiles } = useFileInput()

  function handleSelectedFiles(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onSelectFiles(files)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleSelectedFiles}
      {...props}
    />
  )
}
