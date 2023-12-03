'use cilent'
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'

const List = async () => {

   const posts = await getAllPosts(0)
   return (
      <div className='flex absolute posts-item '>
         <div className='relative posts-cover'>
            {/* <p>图片</p> */}
            <Image
               className=''
               src={posts[0]['cover']}
               // width={1000}
               // height={1000}
               alt='cover'
               fill={true}
            />
         </div>
         <div className='posts-info'>
            <p className='posts-title'><span>{posts[0].icon}</span>{posts[0].title}</p>
            <div className='posts-secondary'>
               <span>{posts[0].date}牛</span>
               <span>{posts[0].tags}</span>
               <span>{posts[0].summary}</span>
            </div>
         </div>
      </div>
   )
}
export default List;