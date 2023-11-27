'use cilent'
import { getAllPosts } from '../lib/notion/getData'

const Head = async () => {
   // const posts = await getAllPosts({ includePages: false })
   const posts = await getAllPosts(1)
   return (
      <div className='flex pt-4'>
         <p className='text-2xl font-bold'>{posts['name']}</p>
         <p className='grow'></p>
         <div id='btn-menu' className='btn-menu'></div>
      </div>
   )
}
export default Head;