'use cilent'
import { getAllPosts } from '../lib/notion/getData'

const Head = async () => {
   // const posts = await getAllPosts({ includePages: false })
   const posts = await getAllPosts(1)
   return (
      <div className=' container flex mx-auto'>
         <p className='text-xl font-bold'>{posts.name}</p>
         <h1 className='text-center text-4xl font-bold'>aaa</h1>
      </div>
   )
} 
export default Head;