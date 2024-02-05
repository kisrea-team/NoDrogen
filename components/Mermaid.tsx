import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { getTextContent } from 'notion-utils'
import '../app/globals.css'

export default async function Mermaid (props) {
  console.log(props)
  const source = getTextContent(props['block']['block']['properties']['title'])
  const container = useRef(null)
  const [svg, setSVG] = useState('')

  useEffect(() => {
    mermaid.render(`mermaid-${props['block']['block']['id']}`, source, container.current)
      .then(({ svg }) => setSVG(svg))
      
  }, [props['block']['block'], source])


  return (
    <div
      ref={container}
      className="w-full leading-normal flex justify-center"
      dangerouslySetInnerHTML={{ __html: svg }}/>
    
        )
    
}
