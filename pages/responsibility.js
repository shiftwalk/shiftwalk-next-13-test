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
  "responsibility": *[_type == "responsibility"][0]{
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

export default function Responsibility(initialData) {
  const { data: { responsibility, projects } } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title="Responsibility" />

      <Header projects={projects} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <m.div variants={fade} className="w-full h-screen bg-gray relative overflow-hidden flex items-center justify-center">
            <h1 className="relative z-10 text-white font-serif text-4xl lg:text-[3.66vw] 2xl:text-6xl leading-none">{responsibility.heroHeading}</h1>
            <SanityImage image={responsibility.heroImage} priority />
          </m.div>
          <m.article variants={fade} className="pt-[15px] lg:pt-[30px]">
            <Container>
              <div className="grid grid-cols-12 lg:pb-48">
                <div className="col-span-12 lg:col-span-12 py-24 lg:py-32 lg:pb-48">
                  <div className="text-base lg:text-xl xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-relaxed w-[90%] lg:w-[50%] content">
                    <h2>Environmental</h2>
                    <p className="mb-8">Environmental As one of London's largest property owners and developers, we are acutely aware that every action we take and decision we make can have an impact on the environment. Embracing our responsibilities, we are passionate supporters of the global fight against devastating climate change. It's our mission to lead the industry as the first to achieve a Net Zero portfolio. We will make this happen by evolving our business practices in fundamental and tangible ways. Our principal strategies are outlined here.</p>
                    
                    <p>We will reduce our overall carbon footprint by:</p>
                    <ul>
                      <li>thoughtfully adapting existing buildings.</li>
                      <li>refurbishing, re-developing and managing our properties sustainably.</li>
                      <li>integrating planting, urban farms and greenhouses at our properties.</li>
                    </ul>
                      
                    <p>We will reduce our energy demand by:</p>
                    
                    <ul>
                      <li>improving the thermal efficiency of our buildings</li>
                      <li>improving the efficiency of our property services</li>
                      <li>developing ways to generate power on site</li>
                      <li>incentivising the use of green energy across the portfolio</li>
                      <li>creating apps to help occupiers manage energy usage.</li>
                    </ul>
                  </div>    
                </div>

                <div className="col-span-12 lg:col-span-10 lg:col-start-3 mb-4 lg:mb-0">
                  <Image src="/images/responsibility-01.jpg" width={1321} height={880} className="w-full" alt="placeholder" />
                </div>
              </div>

              <div className="grid grid-cols-12 pb-24 lg:pb-48">
                <div className="col-span-12 lg:col-span-5 mb-4 lg:mb-0 order-2 lg:order-1">
                  <Image src="/images/responsibility-02.jpg" width={777} height={1166} className="w-full" alt="placeholder" />
                </div>

                <div className="col-span-12 lg:col-span-5 lg:col-start-8 py-24 lg:py-0 order-1 lg:order-2">
                  <div className="text-base lg:text-xl xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-relaxed w-[90%] content">
                    <h2>Social</h2>
                    <p className="mb-8">Social We are a hands-on landlord committed to engaging meaningfully with our occupiers. We listen to their needs and enhance their happiness and wellbeing in any way we can. To that end, we create future-focused living and working environments that are both healthy and inspiring. We optimise air quality through biophilia and enrich the occupier experience with beneficial amenities.</p>
                  </div>    
                </div>
              </div>

              <div className="grid grid-cols-12 pb-24 lg:pb-48">
                <div className="col-span-12 lg:col-span-5 mb-4 lg:mb-0">
                  <div className="text-base lg:text-xl xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-relaxed w-[90%]">
                    <p className="mb-8">As a conscientious property owner, we also appreciate that our buildings and their occupiers are an intrinsic part of the community. We are a committed supporter of local charities and a champion of local businesses.</p>
                  </div>    
                  
                </div>

                <div className="col-span-12 lg:col-span-6 lg:col-start-7 py-24 lg:py-0">
                  <Image src="/images/responsibility-03.jpg" width={984} height={656} className="w-full" alt="placeholder" />
                </div>
              </div>

              <div className="grid grid-cols-12 lg:pb-24">
                <div className="col-span-12 lg:col-span-5 mb-4 lg:mb-0 order-2 lg:order-1">
                  <Image src="/images/responsibility-04.jpg" width={777} height={1167} className="w-full" alt="placeholder" />
                </div>
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