import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@vectoricons/atlas-icons-react'

export const Contact = async () => {
  return (
    <section className="flex w-full justify-between border-t border-[#d4d2c7]">
      <div className="relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between lg:gap-12">
        <figure className="h-full w-full">
          <Image
            src="https://www.abacatepay.com/_next/static/media/imagesupport.21600be7.svg"
            alt="Contact Image"
            width={720}
            height={670}
            className="w-full object-cover"
            fetchPriority="low"
            loading="lazy"
          />
        </figure>
        <div className="flex h-full w-full flex-col items-start justify-center gap-8 px-4 py-12 lg:gap-12 lg:px-8 lg:py-16">
          <article className="flex flex-col gap-4">
            <span className="w-fit rounded-4xl border border-[#d4d2c7] px-2 py-1 text-xs font-medium text-neutral-700 md:text-[12px] lg:px-2.5">
              Suporte
            </span>

            <h2 className="text-4xl font-bold lg:text-5xl">
              Um CRM poderoso <br className="hidden lg:block" />
              com suporte que <br className="hidden lg:block" />
              realmente acompanha você.
            </h2>

            <p className="text-base font-medium text-neutral-500">
              Atendimento humano, rápido e focado no seu negócio.
              <br className="block lg:hidden xl:block" />
              Do onboarding à escala do seu time.
            </p>
          </article>
          <Link
            className="group flex cursor-pointer items-center gap-3 text-base font-semibold text-blue-500 transition-all duration-150 hover:text-blue-600"
            href="#"
          >
            Entrar em contato
            <ArrowRight className="h-4 w-4 text-blue-500 transition duration-150 group-hover:text-blue-600 lg:h-5 lg:w-5" />
          </Link>
        </div>
      </div>
      <div className="relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
