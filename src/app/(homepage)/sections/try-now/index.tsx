import Grainient from '@/components/ui/gradient'
import { ArrowRight } from '@vectoricons/atlas-icons-react'
import { CircleButton } from 'crm-project-ui'
import Image from 'next/image'

export const TryNow = async () => {
  return (
    <section className="flex w-full justify-between border-t border-[#d4d2c7]">
      <div className="relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col lg:max-w-7xl lg:flex-row lg:justify-between">
        <article className="absolute items-center top-1/2 left-1/2 z-40 flex -translate-y-1/2 -translate-x-1/2 flex-col gap-2">
          <h2 className="text-center text-4xl font-bold text-white text-shadow-sm">
            Você chegou no fim da página.
          </h2>
          <p className="text-center text-lg text-white text-shadow-sm">
            Se chegou até aqui, é porque tá interessado. <br />
            Então vai lá, faz logo o cadastro.
          </p>
          <button className='flex justify-center items-center bg-white rounded-full w-fit mt-4 lg:mt-8 gap-3 px-5 py-2'>
            <p className='text-neutral-700 font-semibold'>Bora lá!</p>
            <ArrowRight className='w-4 h-4 text-neutral-700' />
          </button>
        </article>
        <figure className='h-[360px] w-full'>
          <Image src="https://vite.dev/assets/footer-background.BIgtbvhx.jpg" alt='Try now background image' width={1920} height={1080} className='w-full h-[360px] object-cover' />
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
