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
    <figure className={`image bg-grey cover-image absolute w-full h-full`}>
		  <Image
        src={urlForImage(image.asset.url).url()}
        loader={customLoader}
        priority
        fill
        alt={alt ? alt : 'MISSING ALT TEXT'}
      />
    </figure>
  )
}