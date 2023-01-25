import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'

const query = `{
  "policies": *[_type == "policies"][0]{
    title,
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

export default function Policies(initialData) {
  const { data: { policies, projects } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Policies" />

      <Header projects={projects} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.article variants={fade} className="">
            <div className="h-screen p-[15px] lg:p-[30px] pt-[100px] lg:pt-[120px]">
              <div className="grid grid-cols-12 w-full border-b border-gray text-lg md:text-xl lg:text-2xl">
                <div className="col-span-12 border-t border-gray py-3">
                  <span className="block">Privacy Policy</span>
                </div>
                <div className="col-span-12 border-t border-gray py-3">
                  <span className="block">Modern Slavery</span>
                </div>
                <div className="col-span-12 border-t border-gray py-3">
                  <span className="block">Cookies Policy</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 p-[15px] lg:p-[30px]">
              <span className="block">
                <span className="block text-[#9D9D9C]">Dorrington is a member of</span>
                <span className="block text-blue">Hanover Acceptance Group</span>
              </span>
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