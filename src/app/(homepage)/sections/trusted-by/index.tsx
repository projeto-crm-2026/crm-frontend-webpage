export const TrustedBy = async () => {
  return (
    <section className="flex w-full justify-between border-y border-[#d4d2c7]">
      <div className="bg-stripes relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 py-3 lg:max-w-7xl lg:flex-row lg:justify-between lg:gap-12">
        <h2 className="mx-auto text-sm">Utilizado pelas melhores equipes</h2>
      </div>
      <div className="bg-stripes relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
