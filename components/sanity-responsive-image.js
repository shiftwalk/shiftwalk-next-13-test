import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import createImageUrlBuilder from '@sanity/image-url'

export default function SanityResponsiveImage({ image, className, alt, priority }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  const imageBuilder = createImageUrlBuilder(sanity.config)
  const urlForImage = (source) => imageBuilder.image(source)

  const customLoader = ({ src, width }) => {
    return `${src}?w=${width}&auto=format&q=80`
  }

	return (
    <figure className={`bg-grey w-full h-full`}>
		  <Image
        src={urlForImage(image.asset.url).url()}
        loader={customLoader}
        sizes="(max-width:1024px)100vw,
              50vw"
        width={image.asset.metadata.dimensions.width}
        height={image.asset.metadata.dimensions.height}
        {...(priority ? {priority: true} : {})}
        alt={alt ? alt : 'MISSING ALT TEXT'}
      />
    </figure>
  )
}