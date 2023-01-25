import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'

const query = `{
  "home": *[_type == "home"][0]{
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
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home, projects } } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={home.title} />

      <div className="w-full h-screen bg-gray relative overflow-hidden">
        <SanityImage image={home.heroImage} />
      </div>
      <article className="pt-[15px] lg:pt-[30px]">
        <Container>
          <h1>Testing some stuff here</h1>
        </Container>
      </article>

      <Footer />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)

  return cms
}