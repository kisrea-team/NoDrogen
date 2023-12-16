export function getAllTagsFromPosts(posts) {
   
   const taggedPosts = posts.filter(post => post?.tags)
   const tags = [...taggedPosts.map(p => p.tags).flat()]
   const tagObj = []
   tags.forEach(tag => {
      let filtered = tagObj.filter(item => item.name !== tag.name);
      if (filtered.length === tagObj.length) {
      tagObj.push(tag);
      }
         
      
   })


   return tagObj
}