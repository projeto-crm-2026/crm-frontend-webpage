import Image from 'next/image'
import { SOCIAL_PROOF_LOGOS } from './data'
import { ClientsCarousel } from './carousel'

export const SocialProof = async () => {
  return (
    <section className="flex w-full justify-between">
      <div className="relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="mx-auto flex w-full max-w-2xl lg:max-w-7xl lg:justify-between">
        <div className="hidden w-full lg:flex lg:justify-between">
          {SOCIAL_PROOF_LOGOS.map((logo, index: number) => (
            <figure
              className={`flex w-full items-center justify-center border-r py-1.5 lg:py-3 ${index === 4 ? 'border-transparent' : 'border-[#d4d2c7]'}`}
              key={`logo-${index}`}
            >
              <Image
                width={1920}
                height={1080}
                src={logo.src}
                alt={logo.alt}
                className="h-auto w-auto max-w-[110px] object-contain grayscale"
              />
            </figure>
          ))}
        </div>
        <ClientsCarousel />
      </div>
      <div className="relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
