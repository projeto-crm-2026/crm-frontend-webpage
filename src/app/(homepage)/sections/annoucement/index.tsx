export const Announcement = async () => {
  return (
    <section className="flex w-full justify-between">
      <div className="bg-stripes relative hidden w-full flex-1 border-t border-r border-[#d4d2c7] lg:flex" />
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-2 border-t border-[#d4d2c7] px-4 py-8 lg:max-w-7xl lg:justify-between lg:gap-4 lg:px-8 lg:py-12 xl:py-16">
        <h2 className="text-center text-2xl font-bold lg:text-4xl">
          Um CRM pensado <br /> para times de verdade
        </h2>
        <p className="text-center text-sm lg:text-base text-neutral-500">
          Menos fricção, mais clareza para vendas, <br className="lg:hidden block" /> suporte e relacionamento.
        </p>
      </div>
      <div className="bg-stripes relative hidden w-full flex-1 border-t border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
