import Image from "next/image"
import Link from "next/link"



export default function featuredImage({post}){
   let img='';

   const defaultImage = 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';
   const defaultwidth ='300';
   const defaultHeight ='200';

   if(post.featuredImage){
    let size = post.featuredImage.node;
    img={
        src:size.sourceUrl,
        width:defaultwidth,
        height:defaultHeight
    }
   }else{
    img={
        src:defaultImage,
        width:defaultwidth,
        height:defaultHeight
    }
   }


   return (
    <Link href={`/news/${post.slug}`}>
    <Image loader={() => img.src} src={img.src} width={img.width} height={img.height} alt={post.title} />
    </Link>
   )
}