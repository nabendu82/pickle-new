import { getPageSlugs ,getSinglePage} from "@/lib/pages";



export async function getStaticProps({params}){
  const pageData =await getSinglePage(params.pageSlug);
 
   return{
    props:{
        pageData,
    }
   }
}

export async function getStaticPaths(){
    const pageSlugs = await getPageSlugs()

    return{
        paths:pageSlugs.map((s)=>(
            {
                params:{
                    pageSlug:s.slug
                }
            }
        )),
        fallback:false,
    }
}

export default function Page({ pageData }){
    return(
        <>
        <div style={{maxWidth:'670px',margin:'0 auto'}}>
          <title>{pageData.title}</title>
         <h1>{pageData.title}</h1>
         <div dangerouslySetInnerHTML={{__html
          :pageData.content}} ></div>
         {
            console.log(pageData)
         }
        </div>
         
        </>
       

    )
}