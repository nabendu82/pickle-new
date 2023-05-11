import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function subscriptionHOC(SubscriptionComponent) {
  const SubscribeHOCWrapper = () => {
    const router = useRouter();
    const [successStatus, setSuccessStatus] = useState(false);
    const showToast = (statusText = "subscription success", callback) => {
      toast.info(statusText);
      toast.onChange((v) => {
        if (v.status === "removed") {
          // run your callback
          if (callback) callback();
        }
      });
    };
    const submitSubscription = async (email, callback) => {
      setSuccessStatus(false);
      const fetchRespons = await fetch(`/api/subscription`, {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });
      const response = await fetchRespons.json();
      if (response.status === "success") {
        setSuccessStatus(true);
        showToast(response.statusText, callback);
        setInterval(() => {
          setSuccessStatus(false);
        }, 2000);
      } else {
        setSuccessStatus(true);
        showToast(response.message);
        setInterval(() => {
          setSuccessStatus(false);
        }, 2000);
      }
    };

    return (
      <>
        <ToastContainer />
        <SubscriptionComponent
          submitSubscription={submitSubscription}
          successStatus={successStatus}
        />
      </>
    );
  };
  return SubscribeHOCWrapper;
}
