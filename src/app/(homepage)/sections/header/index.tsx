import Image from 'next/image'
import Link from 'next/link'

export const Header = async () => {
  return (
    <section className="flex w-full justify-between px-4 lg:px-0">
      <div className="relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <header className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12 lg:max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:py-15 xl:py-24">
        <div className="mx-auto flex w-full flex-col gap-12">
          <article className="max-w-[490px] flex flex-col gap-4 lg:gap-6">
            <span className="w-fit rounded-4xl border border-[#c2bfb0] px-2 py-1 text-xs font-medium text-neutral-700 md:text-[13px] lg:px-2.5 lg:py-1.5">
              CRM moderno para times de vendas
            </span>

            <h1 className="text-4xl font-bold lg:text-5xl xl:text-5xl">
              Centralize clientes. <br className="block lg:hidden xl:block" />
              Feche mais negócios{' '} <br />
              <span className="bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-4xl text-transparent lg:text-5xl xl:text-5xl">
                com clareza.
              </span>
            </h1>

            <p className="text-base font-medium text-neutral-700">
              Contatos, conversas, funis e automações em um só lugar.
              <br className="block lg:hidden xl:block" /> Feito para times
              comerciais, suporte e agentes de IA.
            </p>
          </article>
          <div className="flex w-full items-center gap-4">
            <Link
              href="#"
              className="cursor-pointer rounded-2xl bg-blue-500 px-6 py-2 text-sm lg:text-base font-medium text-white transition-all duration-150 hover:brightness-110"
            >
              Quero testar
            </Link>
            <Link
              className="cursor-pointer rounded-2xl text-sm lg:text-base font-semibold text-blue-500 transition-all duration-150 hover:text-neutral-600"
              href="#"
            >
              Ver como funciona
            </Link>
          </div>
        </div>
        <figure className="flex w-full items-center justify-center">
          <Image
            alt="Header Image"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
            loading="eager"
            src="https://loupbr.com/wp-content/uploads/2024/01/loupbr.com-maximizando-suas-vendas-com-crm-uma-visao-completa-imagem-apresenta-o-funil-de-vendas-no-pipedrive.png"
          />
        </figure>
      </header>
      <div className="relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
