'use cilent'
import { getAllPosts } from '../lib/notion/getData'

const Head = async () => {
   const posts = await getAllPosts({ includePages: false })
   return (
      <div className=' container flex mx-auto'>
         <p className='text-xl font-bold'>网站名</p>
         <h1 className='text-center text-4xl font-bold'>{posts.length}</h1>
      </div>
   )
} 
export default Head;