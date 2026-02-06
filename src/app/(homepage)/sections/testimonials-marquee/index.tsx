'use client'

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem
} from '@/components/kibo-ui/marquee'

import { TESTIMONIALS_1, TESTIMONIALS_2 } from './data'
import { TestimonialItem } from './testimonial-item'
import { Panel } from '@/components/ui/panel'
import { useMemo } from 'react'
import { Button, CircleButton } from 'crm-project-ui'

export const TestimonialsMarquee = () => {
  const sortedTestimonials1 = useMemo(
    () =>
      [...TESTIMONIALS_1].sort((a, b) =>
        a.authorName.localeCompare(b.authorName)
      ),
    []
  )

  const sortedTestimonials2 = useMemo(
    () =>
      [...TESTIMONIALS_2].sort((a, b) =>
        a.authorName.localeCompare(b.authorName)
      ),
    []
  )

  return (
    <section className="flex w-full justify-between">
      <div className="bg-stripes relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col gap-8 overflow-hidden py-12 lg:max-w-7xl lg:justify-between lg:gap-12">
        <article className="flex w-full flex-col items-center justify-center gap-2 px-8">
          <h2 className="text-center text-xl font-bold md:text-2xl lg:text-4xl">
            Veja o que nossos clientes falam da gente
          </h2>
        </article>
        <Panel
          id="testimonials"
          className="border-y border-[#d4d2c7] before:z-11 after:z-10 [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!"
        >
          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />

            <MarqueeContent speed={40}>
              {sortedTestimonials1.map((item, index: number) => (
                <MarqueeItem
                  key={`testimonial-1-${index}`}
                  className="mx-0 h-full w-xs border-r border-[#d4d2c7]"
                >
                  <TestimonialItem {...item} />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>

          <div className="screen-line-before -y screen-line-after relative flex h-2 w-full border" />

          <Marquee>
            <MarqueeFade side="left" />
            <MarqueeFade side="right" />

            <MarqueeContent direction="right" speed={40}>
              {sortedTestimonials2
                .slice()
                .sort((a, b) => a.authorName.localeCompare(b.authorName))
                .map((item, index: number) => (
                  <MarqueeItem
                    key={`testimonial-1-${index}`}
                    className="mx-0 h-full w-xs border-r border-[#d4d2c7]"
                  >
                    <TestimonialItem {...item} />
                  </MarqueeItem>
                ))}
            </MarqueeContent>
          </Marquee>
        </Panel>
        <div className="flex items-center justify-center px-8">
          <CircleButton label="Ver mais depoimentos" />
        </div>
      </div>
      <div className="bg-stripes relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
