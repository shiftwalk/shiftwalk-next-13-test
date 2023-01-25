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
		  <img
        className=" absolute inset-0 w-full h-full object-cover"
        src={'/images/test.jpg'}
        alt={alt ? alt : 'MISSING ALT TEXT'}
      />
  )
}