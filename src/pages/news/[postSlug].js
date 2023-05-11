import { getPostSlugs, getSinglePost } from "@/lib/wpPosts"

export async function getStaticProps({params}){
  const postData = await getSinglePost(params.postSlug)
  
  let feturedImageUrl = 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'; 
  
  if(postData.featuredImage){
     feturedImageUrl = postData.featuredImage.node.sourceUrl;
  }

  return {
    props:{
      postData,
      feturedImageUrl
    }
  } 
}

export async function getStaticPaths(){
  const postSlugs = await getPostSlugs();
  return {
    paths:postSlugs.map((s)=>(
     { params:{
                postSlug:s.slug
              }
     }
    )),
    fallback:false
  }
}

//console.log(postData to get all the contents)

export default function wpPost({ postData ,feturedImageUrl }){
  return(
    
    <>
     <title key={postData.slug}>{postData.title}</title>
     <meta name="description" content={postData.excerpt} key='metadescription'></meta>
 
     <section style={{maxWidth:'670px',margin:'0 auto'}}>
        
          <img src={feturedImageUrl} alt="Image"></img>
          <h1>{postData.title}</h1>
          <div dangerouslySetInnerHTML={{__html
          :postData.content}} >

          </div>
      
     </section>
    </>
  )
}