import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { getTextContent } from 'notion-utils'
import '../app/globals.css'

export default async function Mermaid (props) {
  console.log(props)
  const source = getTextContent(props['block']['block']['properties']['title'])
  // const container = useRef(null)
  // const [svg, setSVG] = useState('')

  // useEffect(() => mermaid.contentLoaded(), []);



  useEffect(() => {
    mermaid.initialize({ startOnLoad: false,
      theme: "default",
      flowchart: {
        diagramPadding: 8,
        htmlLabels: true,
        curve: 'basis',
        wrappingWidth:400,
        useMaxWidth :true,
        useWidth:1000
      },
     });
    mermaid.run({
      querySelector: '.someOtherClass',
    });
  

  })


  // useEffect(() => {
  //   document.getElementById({`mermaid-${props['block']['block']['id']}`})?.removeAttribute("data-processed");
  //   mermaid.contentLoaded();
  // }, [chart, props['block']['block']['id']);


  // useEffect(() => {
  //  // document.getElementById(`mermaid-${props['block']['block']['id']}`)?.removeAttribute("data-processed");
  //   mermaid.contentLoaded();

      
  // }, [props['block']['block'], source])


  return (
    <>
    
    <div className="mermaid w-full leading-normal flex justify-center someOtherClass" id={`mermaid-${props['block']['block']['id']}`}>{source}</div>

    </>
    // <div
    //   ref={container}
    //   className="w-full leading-normal flex justify-center"
    //   dangerouslySetInnerHTML={{ __html: svg }}
    // />)
  )
}
