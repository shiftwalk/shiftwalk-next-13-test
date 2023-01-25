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
    <figure className={`image bg-grey cover-image absolute w-full h-full`}>
		  <Image
        src={image.asset.url}
        priority
        fill
        alt={alt ? alt : 'MISSING ALT TEXT'}
      />
    </figure>
  )
}