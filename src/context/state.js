// src/context/state.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [postData, setPostData] = useState([]);
  const [postBySlug, setPostBySlug] = useState({});
  // let postData = [];
  const updateData = (data) => {
    if (data.length > 0) {
      const postObject = {};
      for (let i = 0; i < data.length; i++) {
        if (!postObject[data[i].slug]) {
          postObject[data[i].slug] = data[i];
        }
      }
      setPostBySlug(postObject);
      setPostData(data);
    }
  };
  let sharedState = {
    postData,
    updateData,
    postBySlug,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
