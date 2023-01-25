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
    <figure className={`image bg-grey ${className}`}>
		  <Image
        src={urlForImage(image.asset.url).url()}
        className={`${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-500`}
        loader={customLoader}
        sizes="(max-width:1024px)100vw,
              50vw"
        width={image.asset.metadata.dimensions.width}
        height={image.asset.metadata.dimensions.height}
        {...(priority ? {priority: true} : {})}
        alt={alt ? alt : 'MISSING ALT TEXT'}
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
    </figure>
  )
}