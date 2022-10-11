import styles from "./Header.module.scss";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "@mui/material/Button";
import { useState,useEffect } from "react";
import { LoginPopUpModal } from "../LoginModal/loginPopUpModal";
import { ContactusPopUpModal } from "../ContactusModal/contactusModal";
import { useRouter } from 'next/router';


const Header = () => {
  
const [token,setToken]= useState();
  const router = useRouter();
  const [loginModal, setLoginModal] = useState(false);
  const [contactusModal, setContactusModal] = useState(false);

  const logout = () => {
    localStorage.clear();
    router.push("/");
  };
  const getButton = () => {
    
    console.log("tokenvalue",token)
      return token === null ? (
        <Button
          sx={{ color: "#281ACB", background: "#F9F8F8", fontweight: 700 }}
          onClick={() => {
            setLoginModal(true);
          }}
        >
          SIGN IN &nbsp;&nbsp;
          <span>
            <ArrowRightAltIcon sx={{ fontSize: 30, verticalAlign: "middle" }} />
          </span>
        </Button>
      ) : (
        <><Link href="/dashboard">
        <Button >
          DASHBOARD &nbsp;&nbsp;{" "}
          <span>
            <ArrowRightAltIcon
              sx={{ fontSize: 30, verticalAlign: "middle" }}
            />
          </span>
        </Button>
      </Link>
      <Button
          className="buttonLocationSignin"
          sx={{ color: "#281ACB", background: "#F9F8F8", fontweight: 700 }}
          onClick={logout}
        >
          LOGOUT &nbsp;&nbsp;
          <span>
            <ArrowRightAltIcon sx={{ fontSize: 30, verticalAlign: "middle" }} />
          </span>
        </Button>
      </>
       
      );
    
  };
  useEffect(()=>{
const loginToken = localStorage.getItem("token");
setToken(loginToken);
  });
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerRow1}>
          <div className={styles.coupon}>
            Extra 15% off on 1st order over ₹400 with code&nbsp;
            <span className={styles.code}>PETTIKFIRST 1</span>
          </div>
          <div
            className={styles.customerSupport}
            onClick={() => {
              setContactusModal(true);
            }}
          >
            Customer Support:&nbsp;&nbsp;&nbsp;
            <span className={styles.icon}>
              <SupportAgentIcon
                sx={{ fontSize: 30, verticalAlign: "middle" }}
              />
            </span>
          </div>
        </div>
        <div className={styles.headerRow2}>
          <div className={styles.pettikLogo}>
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="pettik-logo"
                height={130}
                width={130}
                priority
              />
            </Link>
          </div>
          <div className={styles.navigation}>
            <ul>
              <Link href="/">
                <li className={router.pathname == "/" ? "navActive" : ""}>HOME</li>
              </Link>
              <Link href="/home-grooming">
              <li className={router.pathname == "/home-grooming" ? "navActive" : ""}>GROOMING</li>
              </Link>
              <Link href="/pet-vaccination">
              <li className={router.pathname == "/pet-vaccination" ? "navActive" : ""}>VACCINATION</li>
              </Link>
              <Link href="/vet-consult">
                <li className={router.pathname == "/vet-consult" ? "navActive" : ""}>CONSULT A VET</li>
              </Link>
              <Link href="/blog">
                <li className={router.pathname == "/blog" ? "navActive" : ""}>BLOG</li>
              </Link>
              <Link href="https://pettik.surveysparrow.com/s/Online-Partner-Registration-Form/tt-bf79e7d34f?">
                <li className={styles.partner}>BECOME A PARTNER</li>
              </Link>
            </ul>
          </div>
          <div className={styles.button}>
            {getButton()}
          </div>
        </div>
      </div>
      <LoginPopUpModal loginModal={loginModal} setLoginModal={setLoginModal} />
      <ContactusPopUpModal
        contactusModal={contactusModal}
        setContactusModal={setContactusModal}
      />
    </>
  );
};
export default Header;
