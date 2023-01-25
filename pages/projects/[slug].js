import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SanityImage from '@/components/sanity-image'
import Image from 'next/image'
import SanityPageService from '@/services/sanityPageService'
import SanityBlockContent from '@sanity/block-content-to-react'

const query = `{
  "project": *[_type == "projects" && slug.current == $slug][0]{
    title,
    heading,
    text,
    websiteLink,
    architectName,
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

export default function Project(initialData) {
  const { data: { project, projects } } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title={project.title} />

      <Header projects={projects} />
      
      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <m.div variants={fade} className="w-full h-screen bg-gray relative overflow-hidden flex items-center justify-center">
            <h1 className="relative z-10 text-white font-serif text-4xl lg:text-[3.66vw] 2xl:text-6xl leading-none mx-auto px-12 text-center">{project.heading}</h1>
            <SanityImage image={project.heroImage} fill alt="Placeholder" priority />
          </m.div>

          <m.article variants={fade} className="pt-[15px] lg:pt-[30px]">
            <Container>
              <div className="grid grid-cols-12 pb-24 lg:pb-[20vw]">
                <div className="col-span-12 lg:col-span-6">
                  <span className="block mb-6">{project.title}</span>
                  <span className="block">Size: <span className="opacity-60">7,000 Sq Ft</span></span>
                  <span className="block">Type: <span className="opacity-60">Residential Development</span></span>
                  <span className="block mb-6">Location: <span className="opacity-60">South Bank</span></span>

                  {project.websiteLink && (
                    <span className="block">Website: <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="text-blue underline">{project.websiteLink}</a></span>
                  )}
                  {project.architectName && (
                    <span className="block mb-6">Architect: <span className="opacity-60">{project.architectName}</span></span>
                  )}
                </div>

                <div className="col-span-12 lg:col-span-6">
                  <div className="content lg:text-lg">
                    <SanityBlockContent
                      serializers={{ 
                        container: ({ children }) => children
                      }}
                      blocks={project.text}
                    />
                  </div>
                </div>
              </div>
            </Container>

            <div className="grid grid-cols-12 bg-grey">
              <div className="col-span-6 p-[20px] lg:p-[30px]">
                <span className="block text-blue">View Full Screen</span>
              </div>
              
              <div className="col-span-6 p-[20px] lg:p-[30px] text-right">
                <span className="block text-blue">View Thumbnails</span>
              </div>

              <div className="col-span-12 lg:col-span-8 lg:col-start-3 px-[15px] lg:px-12 pt-[7.5vw] pb-[9vw]">
                {/* <Image
                  src="/images/home-03.jpg"
                  width={1228}
                  height={818}
                  className="w-full"
                  alt="placeholder"
                /> */}
              </div>
            </div>
          </m.article>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return props
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('projects')
  return {
    paths: paths,
    fallback: false,
  };
}