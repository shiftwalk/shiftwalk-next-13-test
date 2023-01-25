import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'

const query = `{
  "contact": *[_type == "contact"][0]{
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

export default function Contact(initialData) {
  const { data: { contact, projects } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Contact" />

      <Header projects={projects} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <m.article variants={fade} className="">
            <div className="h-screen flex items-center p-[15px] lg:p-[30px]">
              <div className="grid grid-cols-12 lg:text-lg w-full">
                <div className="col-span-12 md:col-span-6 xl:col-span-4">
                  <span className="block opacity-50">Telephone</span>
                  <a href="tel:02075811477" className="block mb-16">020 7581 1477</a>

                  <span className="block opacity-50">Address</span>
                  <span className="block">14 Hans Road, London SW3 1RT</span>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="block text-blue">View In Google Maps</a>
                </div>

                <div className="col-span-12 md:col-span-6 xl:col-span-4">
                  <span className="block opacity-50">Email</span>
                  <span className="block">Commercial <a href="mailto:commercial@dorrington.co.uk" className="text-blue">commercial@dorrington.co.uk</a></span>
                  <span className="block mb-8">Commercial <a href="mailto:commercial@dorrington.co.uk" className="text-blue">commercial@dorrington.co.uk</a></span>

                  <span className="block opacity-50">Out Of Hours Contact</span>
                  <span className="block">Commercial (Savills) <a href="tel:0123456789" className="text-blue">0123 456 789</a></span>
                  <span className="block">Residential (Native) <a href="tel:0123456789" className="text-blue">0123 456 789</a></span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 p-[15px] lg:p-[30px]">
              <span className="block">
                <span className="block text-[#9D9D9C]">Dorrington is a member of</span>
                <a href="https://www.hanoveracceptances.com/" rel="noopener noreferrer" target="_blank" className="block text-blue">Hanover Acceptance Group</a>
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