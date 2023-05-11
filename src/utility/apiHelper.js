import axios from "axios";
import { isFutureDate } from "./utils";
const domain = "https://api.beehiiv.com/";
const version = "v2";

// {
//   "data": [
//     {
//       "id": "post_00000000-0000-0000-0000-000000000000",
//       "subtitle": "New post subtitle",
//       "title": "New Post Title",
//       "authors": [
//         "Clark Kent"
//       ],
//       "created": 1666800076,
//       "status": "confirmed",
//       "publish_date": 1666800076,
//       "displayed_date": 1666800076,
//       "split_tested": true,
//       "subject_line": "Check this out",
//       "preview_text": "More news on the horizon",
//       "slug": "string",
//       "thumbnail_url": "string",
//       "web_url": "string",
//       "audience": "free",
//       "platform": "web",
//       "content_tags": [
//         "string"
//       ],
//       "content": {
//         "free": {
//           "web": "<HTML><body><h1>New Post</h1></body></HTML>",
//           "email": "<HTML><body><h1>New Post</h1></body></HTML>",
//           "rss": "<HTML><body><h1>New Post</h1></body></HTML>"
//         },
//         "premium": {
//           "web": "<HTML><body><h1>New Post</h1></body></HTML>",
//           "email": "<HTML><body><h1>New Post</h1></body></HTML>"
//         }
//       },
//       "stats": {
//         "email": {
//           "recipients": 100,
//           "opens": 50,
//           "unique_opens": 45,
//           "open_rate": 0,
//           "clicks": 10,
//           "unique_clicks": 8,
//           "click_rate": 0,
//           "unsubscribes": 1,
//           "spam_reports": 1
//         },
//         "web": {
//           "views": 200,
//           "clicks": 40
//         },
//         "clicks": [
//           {
//             "url": "string",
//             "email": {
//               "clicks": 10,
//               "unique_clicks": 8,
//               "click_through_rate": 30
//             },
//             "web": {
//               "clicks": 10,
//               "unique_clicks": 8,
//               "click_through_rate": 30
//             },
//             "total_clicks": 10,
//             "total_unique_clicks": 8,
//             "total_click_through_rate": 30
//           }
//         ]
//       }
//     }
//   ],
//   "limit": 0,
//   "page": 1,
//   "total_results": 0,
//   "total_pages": 0
// }

let apiPage = 1;
let responseObject = { data: [] };
let options = {
  method: "GET",
  url: "",
  params: { limit: 200 },
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer UcnCElonMGcMJUqwF2zvxuxq42wg79VdteXANDJIsVDDyVke4E5mMPM9QZgpfUY3",
  },
};
export const apiCall = async (
  path,
  method = "GET",
  limit = 200,
  page,
  singleCall
) => {
  const url = domain + version + "/" + path;
  options = {
    ...options,
    url,
    method,
    limit,
    params: { ...options.params, limit, status: "confirmed" },
  };
  // console.log({ options });
  // console.log(page);
  // try {
  await axios(options)
    .then((res) => {
      // console.log("res ", res.data);
      if (res.data.page <= res.data.total_pages) {
        const ochestatratedData = [
          ...responseObject.data,
          ...res.data.data.filter((post) => !isFutureDate(post.publish_date)),
        ];

        responseObject = res.data;
        responseObject.data = ochestatratedData;
        apiPage += 1;

        options = {
          ...options,
          params: { ...options.params, page: apiPage },
        };
        // console.log(options);
        // if (!singleCall) {
        return apiCall(path, "GET", limit, apiPage, true);
        // }
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return responseObject;
};

export const apiCallSinglePost = async (path, method = "GET") => {
  const url = domain + version + "/" + path;
  let response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer UcnCElonMGcMJUqwF2zvxuxq42wg79VdteXANDJIsVDDyVke4E5mMPM9QZgpfUY3",
    },
  });

  let commits = await response.json(); // read response body and parse as JSON

  return commits;
};

// const axios = require('axios');

// const fetchData = async (url, limit) => {
//   let results = [];
//   let page = 1;

//   try {
//     while (true) {
//       const response = await axios.get(`${url}?page=${page}&limit=${limit}`);
//       const { data } = response;

//       if (data.length === 0) break;

//       results.push(...data);
//       page++;
//     }

//     console.log(results);
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchData('https://example.com/api/data', 100);
