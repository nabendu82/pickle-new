import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllPosts } from "@/lib/wpPosts";
import FeaturedImage from "@/components/FeaturedImage";
import Date from "@/components/Date";


// console.log(getPosts())
// console.log(getAllPosts)

function WpPost({columnCount = 3 }){
  const width = 100 / 3;

  const [wpcontent,setWpContent]=useState([]);

  useEffect(()=>{
      async function getContent(){
         const allPosts  = await getAllPosts();
         setWpContent(allPosts)
      }
    getContent()
  },[])
 


    return(
        
         <div className="row" >
             {
              (wpcontent.length === 0) ?
               'h':wpcontent.nodes.map((post)=>{
                console.log(post)
                return (
                  
                  <article key={post.slug} className='col-12 col-sm-4'>
                    <FeaturedImage post={post}   className='pb-4'/>
                    <h1  className='md:text-2xl text-22 font-bold text-black leading-2'>
                      <Link href={`/news/${post.slug}`}>
                      {post.title}
                      </Link> 
                      </h1>
                      <div className='lg:pb-1 text-15 font-medium text-para pb-2' dangerouslySetInnerHTML={{__html: post.excerpt}}></div>
                      <h2 className='lg:pb-1 text-15 font-medium text-para pb-2'>On <Date dateString={post.date}/></h2>
                  
                    
                  </article>
                
                )
              })
             
             }
              
          </div>
   
    );
}



export default WpPost;



// export default function ArticleBlock({ article, columnCount = 3 }) {
//   const width = 100 / 3;
//   return (
//     <article
//       key={article.id}
//       
//     >
//       <Link href={`/post/${article.slug}`}>
//         <img
//           width={500}
//           height={500}
//           className='pb-4'
//           src={article.thumbnail_url}
//           alt='imgssd'
//         />
//       </Link>

//       <Link href={`/post/${article.slug}`}>
//         <h3 className='md:text-2xl text-22 font-bold text-black leading-2'>
//           {article.title}
//         </h3>
//       </Link>
//       <p className='lg:pb-1 text-15 font-medium text-para pb-2'>
//         On {dateFormate(article.publish_date)}
//       </p>
//       {/* {article.content_tags.lenght > 0 && ( */}
//       {/* <Link href={`/post/${article.slug}`}>
//         <p className='px-2 py-1 bg-white text-base font-bold text-black absolute top-4 left-4 hover:bg-btn hover:text-white'>
//           Gear
//         </p>
//       </Link> */}
//       {/* )} */}
//     </article>
//   );
// }

