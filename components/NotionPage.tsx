"use client"

import * as React from 'react'
import dynamic from 'next/dynamic'
// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import cs from 'classnames'

import { getTextContent } from 'notion-utils'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import TweetEmbed from 'react-tweet-embed'
import 'react-notion-x/src/styles.css'
import '../components/notion.css'
import '../app/globals.css'
import '../components/ui/prism-vsc-dark-plus.css'
import styles from '../components/ui/styles.module.css'

import { Footer } from './Footer'

// import '../components/ui/Notion.module.css'

import { Loading } from './Loading'

export async function getStaticPaths() {
   return {
      paths: [],
      fallback: <Loading></Loading>
   };
}



const Code =  dynamic(async () => {
   return function CodeSwitch (props) {
     switch (getTextContent(props['block']['properties']['language'])) {
       case 'Mermaid':

         return import('../components/Mermaid').then(module => {
            const { default: Mermaid } = module
            
            return <Mermaid block={props} />
            
         })
         // return (
         //   dynamic(() => {
         //     return import('../components/Mermaid').then(module => module.default)
         //   }, { ssr: false }),
          
         // )
       default:
         return (
           dynamic(() => {
             return import('react-notion-x/build/third-party/code').then(async module => {
               // Additional prismjs syntax
               await Promise.all([
                 import('prismjs/components/prism-markup-templating'),
                 import('prismjs/components/prism-markup'),
                 import('prismjs/components/prism-bash'),
                 import('prismjs/components/prism-c'),
                 import('prismjs/components/prism-cpp'),
                 import('prismjs/components/prism-csharp'),
                 import('prismjs/components/prism-docker'),
                 import('prismjs/components/prism-java'),
                 import('prismjs/components/prism-js-templates'),
                 import('prismjs/components/prism-coffeescript'),
                 import('prismjs/components/prism-diff'),
                 import('prismjs/components/prism-git'),
                 import('prismjs/components/prism-go'),
                 import('prismjs/components/prism-graphql'),
                 import('prismjs/components/prism-handlebars'),
                 import('prismjs/components/prism-less'),
                 import('prismjs/components/prism-makefile'),
                 import('prismjs/components/prism-markdown'),
                 import('prismjs/components/prism-objectivec'),
                 import('prismjs/components/prism-ocaml'),
                 import('prismjs/components/prism-python'),
                 import('prismjs/components/prism-reason'),
                 import('prismjs/components/prism-rust'),
                 import('prismjs/components/prism-sass'),
                 import('prismjs/components/prism-scss'),
                 import('prismjs/components/prism-solidity'),
                 import('prismjs/components/prism-sql'),
                 import('prismjs/components/prism-stylus'),
                 import('prismjs/components/prism-swift'),
                 import('prismjs/components/prism-wasm'),
                 import('prismjs/components/prism-yaml')
               ])
               return module.Code
             })
           }),
           props
         )
     }
   }
 })
// const Code = dynamic(() => 



   

//    import('react-notion-x/build/third-party/code').then(async (m) => {
//       // additional prism syntaxes
//       await Promise.all([
//          import('prismjs/components/prism-markup-templating.js'),
//          import('prismjs/components/prism-markup.js'),
//          import('prismjs/components/prism-bash.js'),
//          import('prismjs/components/prism-c.js'),
//          import('prismjs/components/prism-cpp.js'),
//          import('prismjs/components/prism-csharp.js'),
//          import('prismjs/components/prism-docker.js'),
//          import('prismjs/components/prism-java.js'),
//          import('prismjs/components/prism-js-templates.js'),
//          import('prismjs/components/prism-coffeescript.js'),
//          import('prismjs/components/prism-diff.js'),
//          import('prismjs/components/prism-git.js'),
//          import('prismjs/components/prism-go.js'),
//          import('prismjs/components/prism-graphql.js'),
//          import('prismjs/components/prism-handlebars.js'),
//          import('prismjs/components/prism-less.js'),
//          import('prismjs/components/prism-makefile.js'),
//          import('prismjs/components/prism-markdown.js'),
//          import('prismjs/components/prism-mermaid.js'),
//          import('prismjs/components/prism-objectivec.js'),
//          import('prismjs/components/prism-ocaml.js'),
//          import('prismjs/components/prism-python.js'),
//          import('prismjs/components/prism-reason.js'),
//          import('prismjs/components/prism-rust.js'),
//          import('prismjs/components/prism-sass.js'),
//          import('prismjs/components/prism-scss.js'),
//          import('prismjs/components/prism-solidity.js'),
//          import('prismjs/components/prism-sql.js'),
//          import('prismjs/components/prism-stylus.js'),
//          import('prismjs/components/prism-swift.js'),
//          import('prismjs/components/prism-wasm.js'),
//          import('prismjs/components/prism-yaml.js')
//       ])
//       return m.Code
//    })
// )
const Collection = dynamic(() =>
   import('react-notion-x/build/third-party/collection').then(
      (m) => m.Collection
   )
)
const Equation = dynamic(() =>
   import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
// const Pdf = dynamic(
//   () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
//   {
//     ssr: false
//   }
// )
const Modal = dynamic(
   () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
   {
      ssr: false
   }
)



const Tweet = ({ id }: { id: string }) => {
   return <TweetEmbed tweetId={id} />
}

export const NotionPage = ({
   recordMap,
   previewImagesEnabled,
   rootPageId,
   rootDomain
}: {
   recordMap: ExtendedRecordMap
   previewImagesEnabled?: boolean
   rootPageId?: string
   rootDomain?: string
}) => {
   const router = useRouter()

   const footer = React.useMemo(() => <Footer />, [])
   if (!recordMap) {
      return null
   }

   if (typeof window !== 'undefined') {
      const keys = Object.keys(recordMap?.block || {})
      const block = recordMap?.block?.[keys[0]]?.value
      const g = window as any
      g.recordMap = recordMap
      g.block = block
   }
   return (
      <>
         {/* <button onClick={() => setDark(false)}>update</button> */}
         <NotionRenderer
          bodyClassName={cs(
            styles.container,
          )}
            recordMap={recordMap}
            fullPage={true}
            // darkMode={true}
            rootDomain={rootDomain}
            rootPageId={rootPageId}
            previewImages={true}
            components={{
               // NOTE (transitive-bullshit 3/12/2023): I'm disabling next/image for this repo for now because the amount of traffic started costing me hundreds of dollars a month in Vercel image optimization costs. I'll probably re-enable it in the future if I can find a better solution.
               // nextImage: Image,
               nextLink: Link,
               Code,
               Collection,
               Equation,
               // Pdf,
               Modal,
               Tweet
            }}
            footer={footer}
         // NOTE: custom images will only take effect if previewImages is true and
         // if the image has a valid preview image defined in recordMap.preview_images[src]
         />
      </>
   )




}
