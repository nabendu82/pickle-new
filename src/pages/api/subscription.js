import axios from "axios";
import { subscriptionStatus } from "@/utility";
export default function subscription(req, res) {
  console.log("&&&&& ", JSON.parse(req.body));
  const { email } = JSON.parse(req.body);
  const options = {
    method: "POST",
    url: "https://api.beehiiv.com/v2/publications/pub_1c31b2d9-4a67-47a8-902e-ae6e00f86402/subscriptions",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer UcnCElonMGcMJUqwF2zvxuxq42wg79VdteXANDJIsVDDyVke4E5mMPM9QZgpfUY3",
    },
    data: {
      publication_id: "pub_00000000-0000-0000-0000-000000000000",
      email: email,
      reactivate_existing: false,
      send_welcome_email: false,
      utm_source: "WayneEnterprise",
      utm_campaign: "fall_2022_promotion",
      utm_medium: "organic",
      referring_site: "www.wayneenterprise.com/blog",
    },
  };
  // console.log(options);
  axios
    .request(options)
    .then((response) => {
      res.status(200).send({
        statusText: subscriptionStatus[response.data.data.status],
        status: "success",
      });
    })
    .catch(function (error) {
      console.log(error.data);
      res.status(400).send(error);
    });
}
