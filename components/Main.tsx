
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'

export default async function Main() {
   // const posts = await getAllPosts({ includePages: false })
   const view = await getAllPosts(0,0)

   return (
      <div>
         {/* <div className='relative cover'>
            <Image
               className=''
               src={view['0']['cover']}
               // width={1000}
               // height={1000}
               alt='cover'
               fill={true}
            />
            <div className=' absolute text-center'>{view['0']['description']}</div>
         </div> */}
      </div>
   )
}
