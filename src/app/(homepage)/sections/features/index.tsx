import { CircleButton } from 'crm-project-ui'
import Image from 'next/image'

export const Features = async () => {
  return (
    <section className="flex w-full justify-between border-y border-[#d4d2c7]">
      <div className="relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between">
        <div className="flex w-full flex-col gap-2 border-r border-[#d4d2c7]">
          <article className="flex w-full flex-col gap-1 p-8 lg:gap-1.5">
            <h3 className="text-2xl font-bold">Gestão de Contatos</h3>
            <p className="text-base text-neutral-500">
              Centralize clientes, leads e históricos em um só lugar, <br />
              com dados sempre atualizados e organizados.
            </p>
            <div className='w-full mt-4 lg:mt-6 flex justify-start items-center'>
              <CircleButton label="Saber mais" />
            </div>
          </article>
          <figure className="border-t border-[#d4d2c7] h-[320px] w-full">
            <Image
              src="https://www.hubspot.com/hs-fs/hubfs/assets/hubspot.com/web-team/WBZ/Feature%20Pages/contact-management/contact-management-relationship-en.webp?width=1280&height=813&name=contact-management-relationship-en.webp"
              alt="Feature Image"
              width={1020}
              height={720}
              className="h-[320px] -mt-px w-full object-cover"
            />
          </figure>
        </div>
        <div className="flex w-full flex-col gap-2">
          <article className="flex w-full flex-col gap-1 p-8 lg:gap-1.5">
            <h3 className="text-2xl font-bold">Chat Integrado</h3>
            <p className="text-base text-neutral-500">
              Converse com clientes em tempo real, com agentes humanos <br />e
              automações inteligentes trabalhando juntos.
            </p>
            <div className='w-full mt-4 lg:mt-6 flex justify-start items-center'>
              <CircleButton label="Saber mais" />
            </div>
          </article>
          <figure className="border-t border-[#d4d2c7] h-[320px] w-full">
            <Image
              src="https://www.freshworks.com/_next/image/?url=https%3A%2F%2Fdam.freshworks.com%2Fm%2F3250fee7c626416f%2Foriginal%2Fkanban_view.webp&w=3840&q=75"
              alt="Feature Image"
              width={1920}
              height={1080}
              className="h-[320px] -mt-px w-full object-cover"
            />
          </figure>
        </div>
      </div>
      <div className="relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
