'use cilent'
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'

const Main = async () => {
   // const posts = await getAllPosts({ includePages: false })
   const view = await getAllPosts(1)
   const posts = await getAllPosts(0)
   console.log(view['cover'])
   return (
      <div>
         <div className='relative cover'>
            <Image
               className=''
               src={view['cover']}
               // width={1000}
               // height={1000}
               alt='cover'
               fill={true}
            /></div>
         <p>{view['description']}</p>
      </div>
   )
}
export default Main;