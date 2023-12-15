export default function Head({ view }) {
   // const posts = await getAllPosts({ includePages: false })

   return (
      <div className='flex pt-4 select-none'>
         <p className='text-2xl font-bold'>{view['name']}</p>
         <p className='grow'></p>
         <div id='btn-menu' className='btn-menu'></div>
      </div>
   )
}
