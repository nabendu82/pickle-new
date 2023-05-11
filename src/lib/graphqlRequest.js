
export default async function graphqlRequest(query){
    const url =`https://picklewho.webqoda.com/graphql`;

    const headers={'Content-Type':'application/json'}

    const res =await fetch(url,{
        headers,
        method:'POST',
        body:JSON.stringify(query)
    })

    const resJson = await res.json();
    return resJson;
}