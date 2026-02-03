import { WriteEffect } from "../../icons/write-effect"

export const BigNumbers = async () => {
  return (
    <section className="flex w-full justify-between border-y border-[#d4d2c7]">
      <div className="bg-stripes relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-4 py-12 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8 lg:pt-16 lg:pb-20">
        <div className="relative flex w-full flex-col items-start justify-start gap-4">
          <h2 className="text-5xl font-bold">
          Ajudando times a <br className="hidden lg:block" />
          gerenciar seus contatos de maneira fácil.
          </h2>
          <WriteEffect />
        </div>
        <div className="flex w-full justify-end gap-4 lg:gap-8">
          <div className="flex flex-col items-center gap-2 lg:mt-3">
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl mr-4">
              + 1k
            </span>
            <p className="font-medium text-neutral-700">
              Contatos gerenciados
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 lg:mt-3">
            <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl mr-8">
              + 100
            </span>
            <p className="font-medium text-neutral-700">
              Implementações realizadas
            </p>
          </div>
        </div>
      </div>
      <div className="bg-stripes relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
