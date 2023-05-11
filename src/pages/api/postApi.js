import axios from "axios";
export default function postApi(req, res) {
  // console.log("&&&&& ", req.query);
  const page = req.query.pagecount;
  const pageSize = req.query.pageSize;

  const options = {
    method: "GET",
    url: "https://api.beehiiv.com/v2/publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/posts",
    params: { limit: pageSize, page, status: "confirmed" },
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer UcnCElonMGcMJUqwF2zvxuxq42wg79VdteXANDJIsVDDyVke4E5mMPM9QZgpfUY3",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
