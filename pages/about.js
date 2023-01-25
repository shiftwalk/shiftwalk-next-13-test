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
  "about": *[_type == "about"][0]{
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
  }
}`

const pageService = new SanityPageService(query)

export default function About(initialData) {
  const { data: { about, projects } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="About" />

      <Header projects={projects} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <m.div variants={fade} className="w-full h-screen bg-gray relative overflow-hidden flex items-center justify-center">
            <h1 className="relative z-10 text-white font-serif text-4xl lg:text-[3.66vw] 2xl:text-6xl leading-none">{about.heroHeading}</h1>
            <SanityImage image={about.heroImage} priority />
          </m.div>
          <m.article variants={fade} className="pt-[15px] lg:pt-[30px]">
            <Container>
              <div className="grid grid-cols-12 lg:pb-48">
                <div className="col-span-12 lg:col-span-12 py-24 lg:py-32">
                  <div className="text-base lg:text-xl xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-relaxed w-[90%] lg:w-[40%] lg:ml-auto">
                    <p className="mb-8">Dorrington is one of the largest private property investment and development businesses covering London and the South. Our portfolio comprises a curated collection of long-term residential and commercial assets.</p>
                  </div>    
                </div>

                <div className="col-span-12 lg:col-span-10 mb-4 lg:mb-0">
                  <Image src="/images/about-01.jpg" width={1507} height={1004} className="w-full" alt="placeholder" />
                </div>
              </div>

              <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-5 py-24 lg:py-0">
                  <div className="text-base lg:text-xl xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-relaxed w-[90%]">
                    <p className="mb-8">As conscientious owners, we provide our occupiers with best-in-class and relevant spaces. Our buildings are future-focused, well-managed and rich in amenities. As entrepreneurial developers, we build value through creative repositioning, refurbishment and development. We partner with the best design talent, specify the highest quality materials, and keep an astute eye on the details.</p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-5 lg:col-start-8">
                  <Image src="/images/about-02.jpg" width={777} height={1166} className="w-full" alt="placeholder" />
                </div>
              </div>

              <div className="grid grid-cols-12 pb-24 lg:pb-48">
                <div className="col-span-12 lg:col-span-5 lg:col-start-8 py-24 lg:py-32">
                  <div className="text-base lg:text-xl xl:text-2xl leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                    <p className="mb-8">Everything we do is underpinned by a responsibility to protect the environment, honour the capital's architectural heritage, and enhance the local neighbourhoods we love.</p>
                  </div>    
                </div>

                <div className="col-span-12 lg:col-span-9 mb-4 lg:mb-0">
                  <Image src="/images/about-03.jpg" width={1389} height={1104} className="w-full" alt="placeholder" />
                </div>
              </div>
            </Container>

            <div className="whitespace-nowrap relative overflow-x-scroll bg-grey border-t-[5px] border-blue space-x-4 py-8 px-[15px] lg:px-[30px] align-top items-top">
              <Image src="/images/about-04.jpg" width={400} height={400} className="inline h-[45vw] lg:h-[28vw] xl:h-[20vw] w-auto" alt="placeholder" />
              <Image src="/images/about-05.jpg" width={600} height={400} className="inline h-[45vw] lg:h-[28vw] xl:h-[20vw] w-auto" alt="placeholder" />
              <Image src="/images/about-06.jpg" width={400} height={400} className="inline h-[45vw] lg:h-[28vw] xl:h-[20vw] w-auto" alt="placeholder" />
              <Image src="/images/about-07.jpg" width={600} height={400} className="inline h-[45vw] lg:h-[28vw] xl:h-[20vw] w-auto" alt="placeholder" />
            </div>
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