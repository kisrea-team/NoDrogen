
import Image from 'next/image'

export default function Main({ view, posts }) {
   // const posts = await getAllPosts({ includePages: false })
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
            />
            <div className=' absolute text-center'>{view['description']}</div>
         </div>
      </div>
   )
}
