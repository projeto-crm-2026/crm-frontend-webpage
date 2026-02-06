'use client'

import React, { Fragment, useMemo } from 'react'
import { SOCIAL_PROOF_LOGOS } from '../data'
import { ImageProps } from '@/types/components/image'
import Image from 'next/image'

export const ClientsCarousel: React.FC = () => {
  const generateLoop = (slidesData: ImageProps[], maxLength: number) => {
    if (slidesData.length > 0) {
      const repeatCount = Math.ceil(maxLength / slidesData.length)
      return Array.from(
        { length: repeatCount * slidesData.length },
        (_, index) => slidesData[index % slidesData.length]
      )
    }
  }

  const infiniteLogos = useMemo(() => {
    return generateLoop(SOCIAL_PROOF_LOGOS, SOCIAL_PROOF_LOGOS.length)
  }, [])

  return (
    <article
      className={`flex w-full flex-col lg:hidden`}
      data-cid="clients-carousel"
      style={{ background: '#fafafa' }}
    >
      <div className="carousel">
        <div className="slider relative">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, "#fafafa", transparent)`
            }}
            className={`absolute left-0 z-20 h-full w-[30%]`}
          />
          <div
            style={{
              backgroundImage: `linear-gradient(to left, "#fafafa", transparent)`
            }}
            className={`absolute right-0 z-20 h-full w-[30%]`}
          />
          <div className="slide-track md:gap-x-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <Fragment key={`logos-${index}`}>
                {infiniteLogos.map((slideItem: ImageProps, index: number) => (
                  <figure
                    className="slide -mt-12 flex h-[70px] min-w-[130px] items-center justify-center"
                    key={`icon-${index}`}
                  >
                    <Image
                      width={1920}
                      height={1080}
                      src={slideItem.src}
                      alt={slideItem.alt}
                      className="h-auto w-auto max-w-[90px] object-contain grayscale"
                    />
                  </figure>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
