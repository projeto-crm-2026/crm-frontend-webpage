import Grainient from '@/components/ui/gradient'
import { ArrowRight } from '@vectoricons/atlas-icons-react'
import { CircleButton } from 'crm-project-ui'
import Image from 'next/image'

export const TryNow = async () => {
  return (
    <section className="flex w-full justify-between border-t border-[#d4d2c7]">
      <div className="relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between">
        <article className="absolute top-1/2 left-1/2 z-40 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 px-4 lg:w-auto lg:px-0">
          <h2 className="text-center text-2xl font-bold text-white text-shadow-sm xl:text-4xl">
            Você chegou no fim da página.
          </h2>
          <p className="text-center text-base text-white text-shadow-sm xl:text-lg">
            Se chegou até aqui, é porque tá interessado.{' '}
            <br className="hidden lg:block" />
            Então vai lá, faz logo o cadastro.
          </p>
          <button className="mt-4 flex w-fit items-center justify-center gap-3 rounded-full bg-white px-5 py-2 lg:mt-8">
            <p className="font-semibold text-neutral-700">Bora lá!</p>
            <ArrowRight className="h-4 w-4 text-neutral-700" />
          </button>
        </article>
        <figure className="h-[280px] w-full lg:h-[360px]">
          <Image
            src="https://vite.dev/assets/footer-background.BIgtbvhx.jpg"
            alt="Try now background image"
            width={1920}
            height={1080}
            className="h-[280px] w-full object-cover lg:h-[360px]"
          />
        </figure>
        {/* <div style={{ width: '100%', height: '360px', position: 'relative' }}>
          <Grainient
            color1="#1d979f"
            color2="#264ce3"
            color3="#a3cff0"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div> */}
      </div>
      <div className="relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
