import React from "react";
import Header from "@/components/Header";
import "./../styles/globals.css";
import Footer from "@/components/Footer";
const Layout = ({ children }) => <div className='layout'>{children}</div>;
export default function App({ Component, pageProps }) {
  // console.log({ Component, pageProps });
  const showHeaderFooter = pageProps.hideNavigation;
  return (
    <Layout>
      {!showHeaderFooter && <Header />}
      <Component {...pageProps} />
      {!showHeaderFooter && <Footer />}
    </Layout>
  );
}
