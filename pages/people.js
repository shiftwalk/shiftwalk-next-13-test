import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'

const query = `{
  "people": *[_type == "peopleLanding"][0]{
    title,
    heroImage {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    heroHeading,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "projects": *[_type == "projects"] | order(orderRank asc) {
    title,
    slug {
      current
    }
  },
}`

const pageService = new SanityPageService(query)

export default function People(initialData) {
  const { data: { people, projects } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="People" />

      <Header projects={projects} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <m.div variants={fade} className="w-full h-screen bg-gray relative overflow-hidden flex items-center justify-center">
            <h1 className="relative z-10 text-white font-serif text-4xl lg:text-[3.66vw] 2xl:text-6xl leading-none">{people.heroHeading}</h1>
            <SanityImage image={people.heroImage} priority />
          </m.div>
          <m.article variants={fade} className="pt-[15px] lg:pt-[30px]">
            <Container>
              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-12 py-24 lg:py-32">
                  <div className="text-base lg:text-xl xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-relaxed w-[90%] lg:w-[40%]">
                    <p className="mb-8">We are a team of property professionals who love every part of the process, from the big-picture strategy to the smallest design detail. It makes us great at what we do and gives us our edge.</p>
                    
                    <p>Being a family-owned business creates a close and collaborative culture. We respect our partners and care about our occupiers. We're the kind of landlord that values first-name friendships and long-term relationships.</p>
                  </div>    
                </div>

                <div className="col-span-12 lg:col-span-10 lg:col-start-3 mb-4 lg:mb-0">
                  <Image src="/images/people-01.jpg" width={1507} height={1004} className="w-full" alt="placeholder" />
                </div>
              </div>

              <div className="grid grid-cols-12 pb-24">
                <div className="col-span-12 lg:col-span-5 lg:col-start-8 py-24 lg:py-32">
                  <div className="text-base lg:text-xl xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-relaxed w-[90%]">
                    <p className="mb-8">After nearly a century in the business, we know what people want from us and our buildings. It all comes down to being passionate, diligent and considerate - qualities each of us maintains with pride.</p>
                    
                    <p>As a company, we take care of our people and value individuals.Everyone is given real responsibility from day one. At our lunch gatherings, each voice is heard. In our Arts and Crafts buildings in Knightsbridge, we provide a first-class workplace with a garden, gym and resident chef.</p>
                  </div>    
                </div>
              </div>

              <div className="grid grid-cols-12 2xl:grid-cols-5 gap-6 gap-y-10 md:gap-12 lg:gap-12 xl:gap-24 pb-24 lg:pb-48 border-t border-grey pt-[30px]">
                {Array.from(Array(2), (e, i) => {
                  return (
                    <div className="col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-1 text-xs leading-snug md:text-base lg:text-lg" key={i}>
                      <img className="w-full grayscale mb-[15px] lg:mb-[30px]" src="https://placedog.net/620/900" alt="placeholder" />
                      <span className="block">Sean Gorvy</span>
                      <span className="block opacity-50">Executive Chair</span>
                      <span className="block text-blue">Send Email</span>
                    </div>
                  )
                })}
              </div>

              <div className="grid grid-cols-12 2xl:grid-cols-5 gap-6 gap-y-10 md:gap-12 lg:gap-12 xl:gap-24 pb-24 lg:pb-48 border-t border-grey pt-[30px]">
                {Array.from(Array(4), (e, i) => {
                  return (
                    <div className="col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-1 text-xs leading-snug md:text-base lg:text-lg" key={i}>
                      <img className="w-full grayscale mb-[15px] lg:mb-[30px]" src="https://placedog.net/620/900" alt="placeholder" />
                      <span className="block">Sean Gorvy</span>
                      <span className="block opacity-50">Executive Chair</span>
                      <span className="block text-blue">Send Email</span>
                    </div>
                  )
                })}
              </div>

              <div className="grid grid-cols-12 2xl:grid-cols-5 gap-6 gap-y-10 md:gap-12 lg:gap-12 xl:gap-24 pb-24 lg:pb-48 border-t border-grey pt-[30px]">
                {Array.from(Array(14), (e, i) => {
                  return (
                    <div className="col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 2xl:col-span-1 text-xs leading-snug md:text-base lg:text-lg" key={i}>
                      <img className="w-full grayscale mb-[15px] lg:mb-[30px]" src="https://placedog.net/620/900" alt="placeholder" />
                      <span className="block">Sean Gorvy</span>
                      <span className="block opacity-50">Executive Chair</span>
                      <span className="block text-blue">Send Email</span>
                    </div>
                  )
                })}
              </div>
            </Container>
          </m.article>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}