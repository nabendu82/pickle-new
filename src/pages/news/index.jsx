import ArticleBlock from "@/components/ArticleBlock";
import React, { useState, useEffect } from "react";
import WpPost from "./wpPost";
import HeadComponent from "@/components/HeadComponent";
import { apiCall, delay, getDataByPage } from "@/utility";


export default function News({ data: allPost }) {
  const [pageNum, setPageNum] = useState(1);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [postData, setPostData] = useState({});
  const pageSize = 20;
  const [isLoading, setIsLoading] = useState(false);
  
// console.log(wpdata)
  useEffect(() => {
    loadData();
  }, [pageNum]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    if (scrollTop + windowHeight >= scrollHeight - 300) {
      setPageNum(pageNum + 1);
    }
  };
  const loadData = async () => {
    setIsLoading(true);
    if (!isFirstTime) {
      await delay(500);
    }
    setIsFirstTime(false);
    setPostData(getDataByPage(allPost, pageNum, pageSize, postData));

    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);



  
  return (
    <>
      <HeadComponent />
      
      <div className='container mx-auto lg:px-0 px-3 lg:py-16 md:py-14'>
        <h1 className='lg:pb-8 lg:text-[64px] md:text-5xl md:pb-6 text-4xl leading-2 font-medium text-black pb-3 text-left'>
          News
        </h1>

        {postData && (
          <>
            <div className='row'>
              {Object.values(postData).map((article, index) => (
                <div key={article.id} className='col-12 col-sm-4'>
                  <ArticleBlock article={article} columnCount={3} />
                </div>
              ))}
            </div>
          </>
        )}
      
        
           <WpPost  columnCount={3}/>
      
    
      <div className='text-center'>
        {!isFirstTime && isLoading && (
          <i className='fa-solid fa-spinner fa-spin'></i>
        )}
      </div>
      
      </div>
      
      
      
    </>
  );
}

export async function getServerSideProps() {
  const pubilicationData = await apiCall(
    "publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/posts",
    "GET",
    200
  );
  pubilicationData.data.sort((a, b) => b.publish_date - a.publish_date);
  return {
    props: pubilicationData, // will be passed to the page component as props
  };
}


