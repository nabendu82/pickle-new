import graphqlRequest from "./graphqlRequest";


export async function getAllPosts(){
    const query={
        query: `query getAllPosts {
            posts {
              nodes {
                date
                slug
                title
                excerpt(format: RENDERED)
                featuredImage {
                  node {
                    mediaDetails {
                      file
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                    sourceUrl
                  }
                }
              }
            }
            categories {
              nodes {
                name
                slug
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }
        
        `
    }

    const resJson =await graphqlRequest(query)
    const allPosts =resJson.data.posts;
    return allPosts;
}


export async function getSinglePost( slug ){
    const query ={
      query:`query MyQuery2 {
        post(id: "${ slug }", idType: SLUG) {
          content(format: RENDERED)
          excerpt(format: RENDERED)
          modified
          slug
          title(format: RENDERED)
          featuredImage {
            node {
              sourceUrl
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          date
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
      `
    }

    const resJson =await graphqlRequest(query);
    const singlePost =resJson.data.post;

    return singlePost;
}

export async function getPostSlugs(){
  const query={
    query:`query getPostSlugs {
      posts {
        nodes {
          slug
        }
      }
    }`
  }

  const resJson =await graphqlRequest(query);

  const slugs =resJson.data.posts.nodes;
  return slugs
}

