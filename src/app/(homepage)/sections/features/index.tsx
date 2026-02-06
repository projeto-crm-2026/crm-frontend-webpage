import { CircleButton } from 'crm-project-ui'
import Image from 'next/image'

export const Features = async () => {
  return (
    <section className="flex w-full justify-between border-y border-[#d4d2c7]">
      <div className="relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between">
        <div className="flex w-full flex-col gap-2 border-r border-[#d4d2c7] px-4 py-12 lg:px-0 lg:py-0">
          <article className="flex w-full flex-col gap-1 lg:gap-1.5 lg:p-8">
            <h3 className="text-lg font-bold lg:text-xl xl:text-2xl">
              Gestão de Contatos
            </h3>
            <p className="text-sm text-neutral-500 lg:text-base">
              Centralize clientes, leads e históricos em um só lugar, <br />
              com dados sempre atualizados e organizados.
            </p>
            <div className="mt-4 flex w-full items-center justify-start lg:mt-6">
              <CircleButton label="Saber mais" />
            </div>
          </article>
          <figure className="mt-6 h-[320px] w-full border-t border-[#d4d2c7] lg:mt-0">
            <Image
              src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/contact-management/contact-management-relationship-en.webp?width=1280&height=813&name=contact-management-relationship-en.webp"
              alt="Feature Image"
              width={1020}
              height={720}
              className="-mt-px h-[320px] w-full object-cover"
            />
          </figure>
        </div>
        <div className="flex w-full flex-col gap-2 px-4 pb-12 lg:border-transparent lg:px-0 lg:py-0">
          <article className="flex w-full flex-col gap-1 lg:gap-1.5 lg:p-8">
            <h3 className="text-lg font-bold lg:text-xl xl:text-2xl">
              Chat Integrado
            </h3>
            <p className="text-sm text-neutral-500 lg:text-base">
              Converse com clientes em tempo real, com agentes humanos <br />e
              automações inteligentes trabalhando juntos.
            </p>
            <div className="mt-4 flex w-full items-center justify-start lg:mt-6">
              <CircleButton label="Saber mais" />
            </div>
          </article>
          <figure className="mt-6 h-[320px] w-full border-t border-[#d4d2c7] lg:mt-0">
            <Image
              src="https://www.freshworks.com/_next/image/?url=https%3A%2F%2Fdam.freshworks.com%2Fm%2F3250fee7c626416f%2Foriginal%2Fkanban_view.webp&w=3840&q=75"
              alt="Feature Image"
              width={1920}
              height={1080}
              className="-mt-px h-[320px] w-full object-cover"
            />
          </figure>
        </div>
      </div>
      <div className="relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
