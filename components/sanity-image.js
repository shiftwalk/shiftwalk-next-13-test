import Image from 'next/image'
import sanity from '@/services/sanity'
import createImageUrlBuilder from '@sanity/image-url'

export default function SanityImage({ image, alt }) {
  const imageBuilder = createImageUrlBuilder(sanity.config)
  const urlForImage = (source) => imageBuilder.image(source)

  const customLoader = ({ src, width }) => {
    return `${src}?w=${width * 1.5}&auto=format&q=80`
  }

	return (
		  <img className="absolute z-10 inset-0 object-cover w-full h-full" src="/images/test.jpg" />
  )
}