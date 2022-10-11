import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { SnackbarProvider } from "notistack";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PhoneView from "../public/mobiledevice.png";
import Playstore from "../public/android.png";
import Appstore from "../public/apple.png";

const Layout = ({ children }) => {
 
  const [screen, setScreen] = useState("963");
  const screenWidth = () => {
    if (typeof window !== "undefined") {
      let screensize = window.innerWidth ;
      return screensize;
    }
  };

  useEffect(() => {
    screenWidth();
    setScreen(window.innerWidth);
  });

  return (
    <>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
        {screen > 962 ? (
          <>
            <Header />
            {children}
            <Footer />
          </>
        ) : (
          <div className="viewContainer">
          <Image  src={PhoneView} layout="fill" priority />
          <div className="storeContainer">
          <div className="pettikHeading">PETTIK</div>
          <div className="pettikSubHeading">Sorry for the inconvience, we are only available in desktop version OR please download our app</div>
          <div className="playstoreImage"> <Image src={Playstore} width="180" height="50" priority /></div>
  <div className="playstoreImage"> <Image src={Appstore} width="180" height="50" priority /></div>
  <Link href="https://pettik.surveysparrow.com/s/Online-Partner-Registration-Form/tt-bf79e7d34f?">
  <div className="partner">
  BECOME A PARTNER</div>
  </Link>
  <div className="pettikContactus">
  CONTACT US</div>
  
  </div>
          </div>
        )}
      </SnackbarProvider>
    </>
  );
};
export default Layout;
