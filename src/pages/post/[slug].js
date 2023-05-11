import { apiCall, apiCallSinglePost } from "@/utility";

import React from "react";

import { useRouter } from "next/router";

import subscriptionHOC from "@/components/SubscriptionHOC";
import SubscriptionSinglePage from "@/components/SubscriptionSinglePage";
import HeadComponent from "@/components/HeadComponent";
function createMarkup(content) {
  return { __html: content };
}
export default function PostPage({ data, singlePost }) {
  const router = useRouter();
  const SubscriptionComponent = subscriptionHOC(SubscriptionSinglePage);

  return (
    <>
      <HeadComponent />
      <article>
        {singlePost && singlePost.content && singlePost.content.premium && (
          <div
            dangerouslySetInnerHTML={createMarkup(
              singlePost.content.premium.web
            )}
          ></div>
        )}
        {singlePost && singlePost.content && singlePost.content.free && (
          <div
            dangerouslySetInnerHTML={createMarkup(singlePost.content.free.web)}
          ></div>
        )}
        <SubscriptionComponent />
      </article>
    </>
  );
}
export async function getStaticPaths() {
  const pubilicationData = await apiCall(
    `publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/posts`
  );
  const path = pubilicationData.data.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: path,
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const pubilicationData = await apiCall(
    `publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/posts`
  );
  // console.log({ pubilicationData });
  const pageSlug = context.params.slug;
  const post = pubilicationData.data.filter((singlePost) => {
    return singlePost.slug === pageSlug;
  });
  const expand = ["free_web_content"];
  let url =
    "publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/posts/" +
    post[0].id +
    "?";
  for (let i = 0; i < expand.length; i++) {
    const andHandler = i < expand.length - 1 ? "&" : "";
    url = url + new URLSearchParams({ expand: expand[i] }) + andHandler;
  }
  // console.log(url);
  const singlePost = await apiCallSinglePost(url);
  // console.log(singlePost);
  return {
    props: { pubilicationData, singlePost: singlePost.data }, // will be passed to the page component as props
    revalidate: 10, // In seconds
  };
}
