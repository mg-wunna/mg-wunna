/* eslint-disable jsx-a11y/alt-text */
import Image, { type ImageProps } from 'next/image'
import { type MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    Image: (props: ImageProps) => <Image {...props} />,
    a: (props: React.ComponentPropsWithoutRef<'a'>) => (
      <a {...props} target="_blank" rel="noopener noreferrer" />
    ),
  }
}
