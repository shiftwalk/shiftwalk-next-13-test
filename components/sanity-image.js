import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import createImageUrlBuilder from '@sanity/image-url'

export default function SanityImage({ image, className, alt, priority }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  const imageBuilder = createImageUrlBuilder(sanity.config)
  const urlForImage = (source) => imageBuilder.image(source)

  const customLoader = ({ src, width }) => {
    return `${src}?w=${width * 1.5}&auto=format&q=80`
  }

	return (
    <figure className={`image bg-grey ${className} cover-image absolute inset-0 w-full h-full object-cover object-center`}>
		  <Image
        src={urlForImage(image.asset.url).url()}
        loader={customLoader}
        className={`${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity ease-in-out duration-500`}
        {...(priority ? {
          priority: true} : {}
        )}
        fill
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