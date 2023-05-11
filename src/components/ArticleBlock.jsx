import React from "react";
import Link from "next/link";
import { dateFormate } from "@/utility/utils";

export default function ArticleBlock({ article, columnCount = 3 }) {
  const width = 100 / 3;
  return (
    <article
      key={article.id}
      className='lg:text-left lg:pb-0 text-center pb-10 relative ys-blog'
    >
      <Link href={`/post/${article.slug}`}>
        <img
          width={500}
          height={500}
          className='pb-4'
          src={article.thumbnail_url}
          alt='imgssd'
        />
      </Link>

      <Link href={`/post/${article.slug}`}>
        <h3 className='md:text-2xl text-22 font-bold text-black leading-2'>
          {article.title}
        </h3>
      </Link>
      <p className='lg:pb-1 text-15 font-medium text-para pb-2'>
        On {dateFormate(article.publish_date)}
      </p>
      {/* {article.content_tags.lenght > 0 && ( */}
      {/* <Link href={`/post/${article.slug}`}>
        <p className='px-2 py-1 bg-white text-base font-bold text-black absolute top-4 left-4 hover:bg-btn hover:text-white'>
          Gear
        </p>
      </Link> */}
      {/* )} */}
    </article>
  );
}
