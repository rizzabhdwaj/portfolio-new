import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ascii-art': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        piece?: string
      }
    }
  }
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
