'use cilent'

import Image from 'next/image'

export default function Main({view,posts}) {
   // const posts = await getAllPosts({ includePages: false })

   console.log(view['cover'])
   return (
      <div>
         <div className='relative'>
            <Image
               className=''
               src={view['cover']}
               // width={1000}
               // height={1000}
               alt='cover'
               fill={true}
            /></div>
         <p>{view['description']}</p>
         <p>{posts[0].title}</p>
      </div>
   )
}
