import React, { useEffect, createContext, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import IndexNavbarDark from "@/components/navbar/IndexNavbarDark";
import Footer from "@/components/footer/Footer";
import Cookies from "@/components/Cookies";
import Discounts from "@/components/Discounts";

const MyContext = createContext();

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }
  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [showCookieModal, setShowCookieModal] = useState(true);
  const [showCookieDiscounts, setShowCookieDiscounts] = useState(false);
  const [isCountingDown, setIsCountingDown] = useState(true);

  useEffect(() => {
    if (isCountingDown) {
      const timer = setTimeout(() => {
        setShowCookieDiscounts(true);
        setIsCountingDown(false); 
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [isCountingDown]);

  return (
    <>
      <UserProvider>
        <IndexNavbarDark />
        <div className="h-16 bg-black" />
        <div style={{ minHeight: "30vh" }} className="bg-gray-200">
          <Component
            {...pageProps}
            dir={getDirection(locale)}
            langdir={locale}
          />
        </div>
        <Footer />
        {showCookieModal && <Cookies />} 
       
      </UserProvider>
    </>
  );
}

export default MyApp;
