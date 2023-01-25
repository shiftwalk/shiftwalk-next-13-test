import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityResponsiveImage from '@/components/sanity-responsive-image'
import Link from 'next/link'

import SanityPageService from '@/services/sanityPageService'
import Footer from '@/components/footer'

const query = `{
  "projects": *[_type == "projects"] | order(orderRank asc) {
    title,
    teaserImage {
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
    slug {
      current
    }
  },
}`

const pageService = new SanityPageService(query)

export default function Projects(initialData) {
  const { data: { projects } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Projects" />

      <Header projects={projects} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.article variants={fade} className="">
            <div className="lg:h-screen lg:flex lg:items-end p-[15px] pt-[120px] lg:pt-[30px] lg:p-[30px]">
              <div className="w-full lg:whitespace-nowrap relative lg:overflow-x-scroll remove-scroll">
                {projects.map((e, i) => {
                  return (
                    <Link href={`/projects/${e.slug.current}`} className="w-full lg:w-[40vw] lg:max-w-[53vh] block lg:inline-block lg:mr-[15px] mb-12 lg:mb-0">
                      <SanityResponsiveImage image={e.teaserImage} className="w-full mb-5" alt="placeholder" />
                      <span className="block text-base lg:text-lg leading-none lg:leading-none">{e.title} <span className="opacity-50">Residential</span></span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="block lg:hidden">
              <Footer />
            </div>
          </m.article>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}