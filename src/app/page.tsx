'use client'

import { TableDemo } from './teste'
import { LoginForm } from './teste-2'

export default function Home() {
  return (
    <div>
      <div className="m-12 mx-auto max-w-3xl">
        <LoginForm />
      </div>
      <div className="mx-auto my-12 flex max-w-2xl items-center justify-center rounded-sm border border-neutral-200 bg-neutral-100 p-4">
        <TableDemo />
      </div>
    </div>
  )
}
