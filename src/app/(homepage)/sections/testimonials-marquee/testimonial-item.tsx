import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAuthorName,
  TestimonialAuthorTagline,
  TestimonialAvatar,
  TestimonialAvatarImg,
  TestimonialAvatarRing,
  TestimonialQuote
} from './testimonial'

import type { Testimonial as TestimonialType } from './types'

export function TestimonialItem({
  authorAvatar,
  authorName,
  authorTagline,
  quote
}: TestimonialType) {
  return (
    <div className="hover:bg-accent2 block h-full bg-white transition-[background-color] ease-out">
      <Testimonial>
        <TestimonialQuote className="not-italic">
          <p className="line-clamp-3">{quote}</p>
        </TestimonialQuote>

        <TestimonialAuthor>
          <TestimonialAvatar>
            <TestimonialAvatarImg src={authorAvatar} alt={authorName} />
            <TestimonialAvatarRing />
          </TestimonialAvatar>

          <TestimonialAuthorName>{authorName}</TestimonialAuthorName>

          <TestimonialAuthorTagline>{authorTagline}</TestimonialAuthorTagline>
        </TestimonialAuthor>
      </Testimonial>
    </div>
  )
}
