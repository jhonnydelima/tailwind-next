'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

interface ControlProps extends ComponentProps<'input'> {}

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onSelectFiles } = useFileInput()

  function handleSelectedFiles(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onSelectFiles(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleSelectedFiles}
      multiple={multiple}
      {...props}
    />
  )
}
