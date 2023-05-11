import React, { useState, useEffect } from "react";
import HeadComponent from "@/components/HeadComponent";
import { apiCall, getDataByPage, delay } from "@/utility";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import bannerImage from "./../../resource/image/group_34116.png";

export default function AuthorPage({ posts: allPost }) {
  const router = useRouter();
  const authorName = router.query.author;
  const [pageNum, setPageNum] = useState(1);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [postData, setPostData] = useState({});
  const pageSize = 20;
  const [isLoading, setIsLoading] = useState(false);
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

      <section>
        <div className='container mx-auto lg:py-16 md:py-14 lg:px-3 md:px-5 py-10 px-3'>
          <h2 className='md:text-5xl md:pb-6 text-4xl leading-2 font-bold text-black pb-4 text-center'>
            Authors
          </h2>
          <Image
            className='lg:w-1/5 w-1/2 md:pb-8 mx-auto pb-4'
            src='/group_34116.png' alt='group'
          />
          <p className='text-2xl font-semibold text-center text-b-black pb-2'>
            {authorName} Writer
          </p>
          <p className='lg:max-w-3xl lg:mx-auto md:text-lg text-base font-normal text-center text-para'>
            This dashing dill expert is not just your average pickle-baller.
            He's a tri-athlete, a former classmate of Ben Johns, and a
            pickleball enthusiast who loves nothing more than delivering the
            freshest news and insights straight to your inbox.
          </p>
        </div>
        <div className='container mx-auto lg:py-14 px-3 py-8'>
          <h2 className='lg:text-4xl text-3xl md:text-left text-center font-medium text-b-black pb-10'>
            Recent Articles
          </h2>
          <div className='row'>
            {Object.values(postData).map((post) => {
              return (
                <article
                  key={post.id}
                  className='md:pb-0 pb-8 ys-blog-2 col-12 col-sm-4'
                >
                  <Link href={`/post/${post.slug}`}>
                    <img
                      className='mx-auto pb-4'
                      src={post.thumbnail_url}
                      alt='art1'
                    />
                  </Link>
                  <Link href={`/post/${post.slug}`}>
                    <h3 className='md:text-left text-lg font-semibold text-b-black text-center'>
                      {post.title}
                    </h3>
                  </Link>
                </article>
              );
            })}
          </div>
          <div className='text-center'>
            {!isFirstTime && isLoading && (
              <i className='fa-solid fa-spinner fa-spin'></i>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
// export async function getStaticPaths() {
//   const pubilicationData = await apiCall(
//     `publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/posts`
//   );
//   const authorObject = {};
//   pubilicationData.data.forEach((post) => {
//     post.authors.forEach((author) => {
//       if (!authorObject[author]) {
//         authorObject[author] = author;
//       }
//     });
//   });
//   const path = Object.keys(authorObject).map((authorName) => ({
//     params: { author: authorName },
//   }));
//   // console.log(path);
//   return {
//     paths: path,
//     fallback: true,
//   };
// }
// export async function getStaticProps(context) {
//   const pubilicationData = await apiCall(
//     `publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/posts`
//   );
//   // console.log({ pubilicationData });
//   const authorName = context.params.author;
//   let posts = pubilicationData.data.filter((singlePost) => {
//     return singlePost.authors.includes(authorName);
//   });
//   posts.sort((a, b) => b.publish_date - a.publish_date);
//   return {
//     props: { posts }, // will be passed to the page component as props
//   };
// }
export async function getServerSideProps(context) {
  const pubilicationData = await apiCall(
    "publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/posts",
    "GET",
    200
  );
  const authorName = context.params.author;
  let posts = pubilicationData.data.filter((singlePost) => {
    return singlePost.authors.includes(authorName);
  });
  posts.sort((a, b) => b.publish_date - a.publish_date);
  return {
    props: { posts }, // will be passed to the page component as props
  };
}
