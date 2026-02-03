import { getMetaData } from '@/utils/seo/get-metadata'
import { Metadata, NextPage } from 'next'
import { FAQ } from './sections/faq'
import { TrustedBy } from './sections/trusted-by'
import { SocialProof } from './sections/social-proof'
import { Contact } from './sections/contact'
import { BigNumbers } from './sections/big-numbers'
import { Announcement } from './sections/annoucement'
import { Features } from './sections/features'
import { Testimonial } from './sections/testimonials-marquee/testimonial'
import { TestimonialsMarquee } from './sections/testimonials-marquee'
import { TryNow } from './sections/try-now'
import { Header } from './sections/header'

export const generateMetadata = async (): Promise<Metadata> => {
  return getMetaData({
    title: 'teste',
    description: 'teste',
    image: '',
    url: '/'
  })
}

const Page: NextPage = () => {
  return (
    <main>
      <Header />
      <TrustedBy />
      <SocialProof />
      <Announcement />
      <Features />
      <TestimonialsMarquee />
      <Contact />
      <BigNumbers />
      <SocialProof />
      <FAQ />
      <TryNow />
    </main>
  )
}

export default Page
